import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom';
import Home from '../pages/Home';
import CompBuilder from '../pages/CompBuilder';

class Main extends Component {
  state = {
    response: ''
  };

  render(){

    return (
      <BrowserRouter>
        <div>
          <h1>Hots Ecks Dee</h1>
          <ul className='header'>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/compbuilder'>Comp Builder</NavLink></li>
          </ul>
          <div className='content'>
            <Route exact path='/' component={Home}/>
            <Route path='/compbuilder' component={CompBuilder}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;