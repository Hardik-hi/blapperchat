import {React} from 'react';
import { StyleSheet, css } from 'aphrodite';
import IconSend from '../../../assets/icon-send';
const styles=StyleSheet.create({
  container:{
    position:'fixed',
    padding:'0',
    marginTop:'75vh',  
    boxSizing:'border-box',
  },
  textBox:{
    background: 'rgba(255,255,255,0.83)',
    boxShadow: 'inset 0px 2px 3px 3px rgba(0, 0, 0, 0.25)',
    borderStyle:'none',
    borderRadius: '48px',
    width:'58vw',
    height:'4vh',
    marginBottom:'2vh',
    marginLeft:'2vw',
    padding:'10px 15px',
    outline:'none',
    fontSize:'16px',
  },
  sendButton:{

    cursor:'pointer',
    borderStyle:'none',
    width: '5vw',
    height: '5vw',
    marginLeft:'2vw',
    background: '#F4FDFF',
    borderRadius: '150px',
    background: '#e0e0e0',
    boxShadow: 'inset -5px 5px 6px #c1c1c1,inset 5px -5px 6px #ffffff',
    
  },

});


function ChatBox(props){
    return (
        <form className={css(styles.container)}>
          <input type='text'
          value={props.message}
          onChange={(event)=>props.setMessage(event.target.value)}
          onKeyPress={event => event.key==='Enter'?props.sendMessage(event):null}
          className={css(styles.textBox)}
          />

          <button className={css(styles.sendButton)} 
          onClick={(event)=>props.sendMessage(event)}><IconSend/></button>
        </form>
    );

}
export default ChatBox;
