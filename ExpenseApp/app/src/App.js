import React, { Component } from 'react';
import Category from './Category.js';
import Home from './Home.js';
import Expenses from './Expenses.js';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    state = {  }
    render() { 
        return (  
            <Router>
                <Switch>
                    <Route path = '/' exact ={true} component = {Home} />
                    <Route path = '/categories' exact ={true} component = {Category} />
                    <Route path = '/expenses' exact ={true} component = {Expenses} />
                </Switch>
            </Router>
        );
    }
}
 
export default App;