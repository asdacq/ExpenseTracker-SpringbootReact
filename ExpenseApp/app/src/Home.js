import React, { Component } from 'react';
import AppNav from './AppNav.js';

class Home extends Component{
    state = {

    }
    render(){
        const homeStyle = {
            display : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }
        return(
            <div>
                <AppNav />
                <h2 style = {homeStyle}>Welcome to the expense App</h2>
            </div>
            );
    }
}

export default Home;