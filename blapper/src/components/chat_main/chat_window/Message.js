import {React} from 'react';
import { StyleSheet, css } from 'aphrodite';
const styles=StyleSheet.create({
    messageBoxSent:{
        position:'relative',
        padding: '10px',
        marginRight:'4px',
        marginTop: '4px',
        background: 'rgb(7 136 209)',
        borderRadius: '14px',
        width:'fit-content',    
        float: 'right',
        clear: 'right',
        maxWidth:'20vw',
        overflowX:'auto',
        wordBreak:'break-all',
    },
    messageBoxReceived:{
        padding: '10px',
        marginLeft: '0px',
        marginTop: '4px',
        background: 'rgb(55 183 255)',
        borderRadius: '14px',
        width:'fit-content',
        clear: 'right',
        maxWidth:'20vw',
        wordBreak:'break-all',
    },
    adminNotifs:{
        padding: '10px',        
        backgroundColor: '#ffffb7ab',
        borderRadius: '10px',
        margin: '10px auto',
        textAlign:'center',
        fontSize:'12px',
        width:'fit-content',
        clear: 'both',
        boxShadow: '-2px 4px 12px -8px rgba(0,0,0,0.56)',
        webkitBoxShadow: '-2px 16px 12px -8px rgba(0,0,0,0.56)',
        mozBoxShadow: '-2px 16px 12px -8px rgba(0,0,0,0.56)',
    },
    message:{
        boxSizing:'content-box',
        display:'block',
        color:'white',
    },
    user:{
        display:'block',
        //marginBottom:'2px',
        fontSize:'12px',
        color:'#fff1f1e0',

    },
 
    
});


function Message(props){
    const user=props.user;
    const message=props.message;

    if(user===message.user){
        return (
            <div className={css(styles.messageBoxSent)} >
                <div className={css(styles.user)}>You</div>
                <div className={css(styles.message)}>{message.message}</div>
            </div>
        )
    }
    else if(message.user==='Admin'){
        return (
            <div className={css(styles.adminNotifs)} >
                <div style={{color:'black'}} >{message.message}</div>
            </div>
        )
    }
    else{
        return (
            <div className={css(styles.messageBoxReceived)} >
                <div className={css(styles.user)}>{message.user}</div>
                <div className={css(styles.message)}>{message.message}</div>
            </div>
        )
    }
}
export default Message;
