import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Icon from '../../../assets/RoomIcon.js';
const styles=StyleSheet.create({



    container:{
        //position: "absolute",
        margin: '0 1vw 2vh 1vw',
       // width: "26vw",
        height: "63.65px",
        //left: "13px",
        //top: "515.35px",
        background: "#FFFFFF",
        padding : '1vh 1vw',
        boxShadow: "0px 2px 5px 4px rgba(0,0,0,0.25)",
        borderRadius: 7,
    },

    roomIcon:{
        marginLeft:'3vw',
    },
    room:{
        fontFamily: "Gothic A1",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: "36px",
        marginLeft: '1vw',
    },

    latestMessage:{

    }
});

function GroupTile(props){
    const userName=props.userName;
    const key=props.y;
    return (
    <Row className={css(styles.container)} horizontal= "left" vertical="center">
        <Icon userName={userName} y={key}/>
        <span className={css(styles.room)}>{userName}</span>
    </Row>
    );
}
export default GroupTile;