//import {React,useState} from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

const styles=StyleSheet.create({

    container:{
       position: "absolute",
        width: "72vw",
        height: "11vh",
        left: "28vw",
        background: "rgb(21 72 255 / 78%)",
    },
    title: {
      
        fontFamily: 'Gothic A1',
          fontStyle: 'normal',
          fontSize: 22,
          color: '#FFFFFF',
          marginRight: '40vw',
          marginLeft: '5vw'
      }

});

function HeaderComponent(props){

    return (
        <Row className={css(styles.container)}  vertical="center">
            <span className={css(styles.title)} >{props.room}</span>    
        </Row>
    );
    
}

export default HeaderComponent;