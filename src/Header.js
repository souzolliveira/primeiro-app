// @flow

import React, {Component} from "react";
import "./Header.css";
import {Navbar, Nav, Modal} from "react-bootstrap";
//import {logo} from "logo.svg";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

library.add(faEllipsisV)

export default class Header extends Component{
    constructor(){
        super();
        
        this.state = {
            showDictionary: false,
            showHistory: false,
            showTutorial: false,
            showAbout: false,
        };       
    }
    /*
    <img
        alt=""
        src="{}"
        width="30"
        height="30"
        className="d-inline-block align-top"
    />
    */
    render(){
        return(
            <div>    
                <Navbar collapseOnSelect expand="lg" fixed="top">
                    <Navbar.Brand>
                        
                        {' ZARC'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link onClick={() => this.setState({showDictionary: true})}>Dicionário</Nav.Link>
                            <Nav.Link onClick={() => this.setState({showHistory: true})}>Histórico</Nav.Link>
                            <Nav.Link onClick={() => this.setState({showTutorial: true})}>Tutorial</Nav.Link>
                            <Nav.Link onClick={() => this.setState({showAbout: true})}>Sobre</Nav.Link>                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.state.showDictionary} onHide={() => this.setState({showDictionary: false})} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Dicionário</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                 
                            
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.showHistory} onHide={() => this.setState({showHistory: false})} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Histórico</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                 
                            
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.showTutorial} onHide={() => this.setState({showTutorial: false})} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Tutorial</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                 
                            
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.showAbout} onHide={() => this.setState({showAbout: false})} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Sobre</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                 
                            
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}