import React from 'react';
//import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
//import SearchIcon from '../../../assets/icon-search.js';
const styles=StyleSheet.create({


    container:{
        position:'fixed',
        left:'40vw',
        top:'10vh',
        padding:'10px',
        //display:'flex',
       // alignItems:'center',
        boxSizing:'border-box',
        width:'30vw',
        height:'30vh',
        backgroundColor:'wheat',
        zIndex:999,
    },
    info:{
        display:'block',
        margin:'3vh auto',
        textAlign:'center',
    },
    usernames:{
        margin:'2vh auto',
        textAlign:'center',
        overflow:'auto',
        wordBreak:'break-all',
        maxHeight:'10vh',
        height:'10vh',
        width:'20vw',
        border:'1px solid black',
    },


    

});

function PrivateMode(props){

    if(!props.show)
        return null;
    const options=[];

    const handlecheckbox= (event)=>{
        event.preventDefault();

        if(event.target.checked)
            props.setPvtModeUsers((users)=>[...users,event.target.value]);
        console.log('ddd',event.target.value);        
    }

    for(let i=0;i<props.users.length;i++){
        if(props.users[i]===props.user)
            continue;
        else
            options.push(<label><input type="checkbox" value={props.users[i]} onChange={(event)=> handlecheckbox(event)} className={css(styles.selectusers)} key={i} />{props.users[i]}</label>)
    }
    return (
       <div className={css(styles.container)}>
        <div className={css(styles.info)}>
            Private Mode: Select members to exclude:
        </div>
        <div className={css(styles.usernames)}>
            {options}
        </div>
        <div className={css(styles.controlbuttons)}>
            <button className={css(styles.togglebutton)} onClick={()=>props.setPvtMode(!props.pvtMode)}>Toggle</button>
            <button className={css(styles.closebutton)} onClick={props.onClose}>Close</button>
        </div>
       </div>
    );
    
}

export default PrivateMode;