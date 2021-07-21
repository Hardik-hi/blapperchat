const users=[];

function addUser({id,name,room}){
    name=name.trim().toLowerCase();
    room=room.trim().toLowerCase();

    const isExisting=users.find((user)=> user.room===room && user.name===name);

    if(isExisting)
        return {error: 'This name has already joined the room'};
    
    users.push({id,name,room});

    return {id,name,room};

}

function removeUser(id){
    const index=users.findIndex((user)=> user.id===id);


    if(index!==-1) return users.splice(index,1)[0];
}

function getUser(id){
    return users.find((user)=> user.id===id);
}

function getUsersInRoom(room){
    const usersInRoom=users.filter((user)=>user.room===room);
    return usersInRoom.map(user=>user.name);
}

module.exports={addUser,removeUser,getUser,getUsersInRoom};