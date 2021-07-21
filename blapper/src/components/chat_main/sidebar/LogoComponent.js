import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Logo from '../../../assets/icon-logo.js';

const styles = StyleSheet.create({
    container: {
        padding: '5px 1vw',
        height:'10vh',
        background: 'rgb(255 255 255)',
        boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.25)',
    },

    title: {
      
      fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 33,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#000000',
        marginLeft: 10
    }
});
function LogoComponent(){
    return (
<Row className={css(styles.container)} horizontal="center" vertical="center">
    <Logo/>
    <span className={css(styles.title)} >Blapper</span>
</Row>
    );
}

export default LogoComponent;

