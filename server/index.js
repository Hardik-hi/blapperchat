const express=require('express');
const socketio=require('socket.io');
const http=require('http');
const app=express();
const router=require('./router');
const server=http.createServer(app);
const io=socketio(server);

const PORT=process.env.PORT || 5000;

const {addUser,removeUser,getUser,getUsersInRoom} =require('./users');
app.use(router);
//using socketio for connection
io.on('connect',(socket)=>{


    //userJoined event on joining a room
    socket.on('userJoined',({name,room},callback)=>{
        console.log(name,' has joined in room',room);

        const {error,user}=addUser({id: socket.id,name,room});

        if(error)
            return callback(error);

        const users= getUsersInRoom(room);
        
        //join the room
        socket.join(room);

        //send users in that room to client
        io.in(room).emit('roomInfo',{users});

        //send the welcome message to the user only (the socket that made the emit process)
        socket.emit('sentMessage',{user:'Admin',message:`Welcome to room `});
        
        //send the message to other users in the room using to()
        socket.broadcast.to(room).emit('sentMessage',{user:'Admin',message:`${name} joined the chat`});

    });

    //function to manage sending a message
    socket.on('sendMessage',(message,callback)=>{
        //get the id of the user
        const user=getUser(socket.id);

        //send a message using io.to()
        io.to(user.room).emit('sentMessage',{user:user.name,message:message});

        //callback
        callback();
    });

    //disconnect event
    socket.on('disconnect',()=>{
        
        const user=removeUser(socket.id); //remove the user so room is available
        if(user) {
            socket.broadcast.to(user.room).emit('sentMessage', { user: 'Admin', message: `${user.name} left the chat` });
            io.to(user.room).emit('roomInfo', { users: getUsersInRoom(user.room)}); //updated room members
          }
        console.log('user disconnected');
    });
});

server.listen(PORT,()=> console.log('SERVER RUNNING ON port:',PORT));