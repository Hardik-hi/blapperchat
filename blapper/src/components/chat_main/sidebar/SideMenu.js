import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent.js';
import GroupTile from './GroupTile.js';

const styles= StyleSheet.create({

    container : {
        height: "100vh",
        position: "absolute",
        width: "28vw",
        background: "rgb(125 125 125 / 12%)",
    },

    groupTile:{
        marginTop: '4vh',
        overflowY:'auto',
        height:'82vh',
        position:'fixed',
        width:'28vw',
    }

});

function SideMenu(props){
    const options=[];

    if(props.users===undefined)
        return null;
    for(let i=0;i<props.users.length;i++){
        options.push(<GroupTile userName={props.users[i]} y={i} /> )
    }
    return (
        
        <Column className={css(styles.container)}>
            <LogoComponent/>
            <Column className={css(styles.groupTile)}>
                {options}
            </Column>
        </Column>
    );
}

export default SideMenu;
