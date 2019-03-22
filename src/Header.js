// @flow

import React, {Component} from "react";
import "./Header.css";
import {Navbar, Nav} from "react-bootstrap";
//import {logo} from "logo.svg";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Location from './Router/Location';
import Culture from './Router/Culture';
import Texture from './Router/Texture';
import Zoning from './Router/Zoning';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

library.add(faEllipsisV)

export default class Header extends Component{
  render(){
    return(        
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="{logo}"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' Zoneamento Agrícola de Risco Climático'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link>Dicionário</Nav.Link>
                <Nav.Link>Histórico</Nav.Link>
                <Nav.Link>Tutorial</Nav.Link>
                <Nav.Link>Sobre</Nav.Link>                        
            </Nav>
            </Navbar.Collapse>
      </Navbar>
    )
    }
}