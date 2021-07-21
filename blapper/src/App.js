
import './App.css';
import React, { Component } from 'react';
import ChatInterface from './components/chat_main/chat_window/ChatInterface';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login/Login';


class App extends React.Component{

    render(){
      return(
        <Router>
          <Route path="/" exact component={Login}/>
          <Route path="/chat" component={ChatInterface}/>
        </Router>
      );
    }
}
export default App;

