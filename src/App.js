// @flow

import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./App.css";

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
        <Router>
          <div>
            <ul className='ul-router'>
              <li>
                <NavLink to="/"><FontAwesomeIcon icon="location-arrow" /> </NavLink>
              </li>
              <li>
                <NavLink to="/Culture"><FontAwesomeIcon icon="seedling" /> </NavLink>
              </li>
              <li>
                <NavLink to="/Cycle"><FontAwesomeIcon icon="clock" /> </NavLink>
              </li>
              <li>
                <NavLink to="/Texture"><FontAwesomeIcon icon="shapes" /> </NavLink>
              </li>
              <li>
                <NavLink to="/Zoning"><FontAwesomeIcon icon="list" /> </NavLink>
              </li>
            </ul>
            <Route exact path="/" component={Location} />
            <Route path="/Culture" component={Culture} />
            <Route path="/Cycle" component={Cycle} />
            <Route path="/Texture" component={Texture} />
            <Route path="/Zoning" component={Zoning} />
          </div>
        </Router>
    );
  }
}
