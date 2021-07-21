import {React} from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const styles=StyleSheet.create({
    messageArea:{
         overflow:'auto',
         height:'75vh',
         width:'70vw',
         position:'fixed',
       }

});


function MessageBox(props){
    if(props.messages)
    return(
        <ScrollToBottom className={css(styles.messageArea)} >
            {props.messages.map((message,i)=> <div key={i}><Message user={props.user} message={message}/></div>)}
        </ScrollToBottom>
    );     

else 
return null;
    
}
export default MessageBox;
