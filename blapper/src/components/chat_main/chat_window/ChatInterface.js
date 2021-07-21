import '../../../App.css';
import {React,useState,useEffect} from 'react';
import queryString from 'query-string';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SideMenu from '../sidebar/SideMenu';
import HeaderComponent from '../headermenu/HeaderComponent';
import io from 'socket.io-client';
import ChatBox from './ChatBox';
import MessageBox from './MessageBox';

const styles = StyleSheet.create({

  container: {
    height: '100vh',
  },
  content: {
    marginTop: '10vh',
    marginLeft: '28vw',
    height: '90vh',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  
});
let socket; //initialising socket

function ChatInterface(props) {

  //to set name of user and room
  const [name,setName]=useState('');
  const [room,setRoom]=useState('');

  //to send and receive messages
  const [message,setMessage]=useState('');
  const [messages,setMessages]=useState('');

  //to store users in a given room
  const [users,setUsers]=useState('');
  const ENDPOINT='localhost:5000';

   
  useEffect(()=>{
    const {name,room} = queryString.parse(props.location.search);
    setName(name);
    setRoom(room);

    //instantiate a new socketio object
    socket=io(ENDPOINT,{ transports: ['websocket', 'polling', 'flashsocket'] });
    
    socket.emit('userJoined',{name,room},({error})=> {
      if(error) 
        alert(error);
    });

  },[ENDPOINT,props.location.search]);

  //to receive message, sentMessage emitted from server
  useEffect(()=>{
    socket.on('sentMessage',message=>{
      setMessages(messages=>[...messages,message]);
    });    
  },[]);

  //to add users to the room info
  useEffect(()=>{
    socket.on('roomInfo',({users})=>{
      setUsers(users);
    });
  },[]);

  //to send the message
  const sendMessage= (event)=>{
    event.preventDefault(); //to prevent default refresh
    if(message)
      socket.emit('sendMessage',message,()=>setMessage(''));
  }
  return (
  
    <Row className={css(styles.container)}>
      <SideMenu users={users} />
      <Column flexGrow={1} className={css(styles.mainBlock)}>
        <HeaderComponent room={room} users={users} />
               
        <div className={css(styles.content)}>
         <MessageBox messages={messages} user={name}/>
          <ChatBox message={message} setMessage ={setMessage} sendMessage={sendMessage}/>
        </div>
      </Column>
    </Row>

    
  );
}

export default ChatInterface;