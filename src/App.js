// @flow

import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./App.css";

import Location from './Router/Location';
import Culture from './Router/Culture';
import Texture from './Router/Texture';
import Zoning from './Router/Zoning';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faSeedling, faList, faShapes } from '@fortawesome/free-solid-svg-icons';

library.add(faLocationArrow);
library.add(faSeedling);
library.add(faShapes);
library.add(faList);

class App extends Component {
  render(){
  return (
    <Router>
      <div>
        <ul className='ul-router'>
          <li>
            <NavLink to="/Location" activeStyle={{color: '#fff'}}><FontAwesomeIcon icon="location-arrow" /> </NavLink>
          </li>
          <li>
            <NavLink to="/Culture" activeStyle={{color: '#fff'}}><FontAwesomeIcon icon="seedling" /> </NavLink>
          </li>
          <li>
            <NavLink to="/Texture" activeStyle={{color: '#fff'}}><FontAwesomeIcon icon="shapes" /> </NavLink>
          </li>
          <li>
            <NavLink to="/" activeStyle={{color: '#fff'}}><FontAwesomeIcon icon="list" /> </NavLink>
          </li>
        </ul>
        <Route path="/Location" component={Location} />
        <Route path="/Culture" component={Culture} />
        <Route path="/Texture" component={Texture} />
        <Route exact path="/" component={Zoning} />
      </div>
    </Router>
  );
  }
}
export default App;
