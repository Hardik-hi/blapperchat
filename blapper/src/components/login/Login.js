import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import './login.css';
import Logo from '../../assets/icon-logo-large';

function Login(props){
    const [name,setname]=useState('');
    const [room,setroom]=useState('');
    const styles=StyleSheet.create({

    })
    return(
        <div className='main'>
            <p className='sign' align='center'>
                <Logo/><br/>
                Blapper
            </p>
            <div className='form1'>
                <div><input className='un' type="text" placeholder="your name" onChange={(event)=> setname(event.target.value)}></input></div>
                <div><input className='pass' type="text" placeholder="room name" onChange={(event)=> setroom(event.target.value)}></input></div>
                <Link  onClick={(event)=>(!name ||!room) ? event.preventDefault():null} to={'/chat?name='+name+'&room='+room} >
                    <button className='submit' type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;