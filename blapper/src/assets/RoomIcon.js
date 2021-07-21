import React from 'react';

function RoomIcon(props) {
    const startColor = ['#FF5F6D', '#ff4b1f', '#EECDA3', '#c2e59c', '#F3A183','#F09819','#CC95C0','#02AAB0','#16A085','#5433FF','#a8edea','#74ebd5','#ff758c'];
    //const endColor = ['#FFC371', '#ff9068', '#EF629F', '#c2e59c', '#EC6F66','#EDDE5D','#7AA1D2','#00CDAC','#F4D03F','#A5FECB','#fed6e3','#feada6','#ae8b9c'];

    const index = props.y%startColor.length;
    var userName='';
    if(props.userName.length>=2)
        userName=props.userName.substring(0,2).toUpperCase(); 
    else
        userName=(props.userName.substring(0,1)).toUpperCase();

    return (
        <div style={
            {height:'3em',
            width:'3em',
            backgroundColor:startColor[index],
            textAlign:'center',
            fontSize:'22px',
            borderRadius:'100%',
            boxSizing:'border-box',
            padding:'0.7em',
            color:'white'
        }}>
            {userName}
        </div>
    );

}
export default RoomIcon;