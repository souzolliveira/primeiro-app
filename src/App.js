// @flow

import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./App.css";

import Header from './Header';
import Location from './Router/Location';
import Culture from './Router/Culture';
import Cycle from './Router/Cycle';
import Texture from './Router/Texture';
import Zoning from './Router/Zoning';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faSeedling, faList, faShapes, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faLocationArrow);
library.add(faSeedling);
library.add(faShapes);
library.add(faList);
library.add(faClock);

export default class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Router>
          <div>
            <ul className='ul-router'>
              <li>
                <NavLink to="/Location" activeStyle={{color: "#fff"}}>
                  <FontAwesomeIcon icon="location-arrow" /> 
                  <label>Localização</label>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Culture" activeStyle={{color: "#fff"}}>
                  <FontAwesomeIcon icon="seedling" /> 
                  <label>Culturas</label>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Cycle" activeStyle={{color: "#fff"}}>
                  <FontAwesomeIcon icon="clock" /> 
                  <label>Ciclo</label>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Texture" activeStyle={{color: "#fff"}}>
                  <FontAwesomeIcon icon="shapes" /> 
                  <label>Textura</label>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Zoning" activeStyle={{color: "#fff"}}>
                  <FontAwesomeIcon icon="list" />
                  <label>Zoneamento</label>
                </NavLink>
              </li>
            </ul>
            <Route exact path="/" component={Location} />
            <Route path="/Location" component={Location} />
            <Route path="/Culture" component={Culture} />
            <Route path="/Cycle" component={Cycle} />
            <Route path="/Texture" component={Texture} />
            <Route path="/Zoning" component={Zoning} />
          </div>
        </Router>
      </div>
    );
  }
}
