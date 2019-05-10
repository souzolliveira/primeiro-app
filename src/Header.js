// @flow

import React, {Component} from "react";
import "./Header.css";
import {Navbar, Nav, Modal, Row} from "react-bootstrap";
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

            grupoI: 'ciclo de maturação precoce.',
            grupoII: 'ciclo de maturação médio.',
            grupoIII: 'ciclo de maturação tardio.',
            arenoso: 'Solos de textura arenosa, com teor mínimo de 10% de argila e menor do que 15% ou com teor de argila igual ou maior do que 15%, nos quais a diferença entre o percentual de areia e o percentual de argila seja maior ou igual a 50.',
            argiloso: 'Solos de textura argilosa, com teor de argila maior ou igual a 35%.',
            texturaMedia: ' Solos de textura média, com teor mínimo de 15% de argila e menor do que 35%, nos quais diferença entre o percentual de areia e o percentual de argila seja menor do que 50.',
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
                    <Modal.Body style={{textAlign: 'justify'}}>                 
                        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                            <label>
                                <b>GRUPO I:</b> {this.state.grupoI}
                            </label>
                        </Row>
                        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                            <label>
                                <b>GRUPO II:</b> {this.state.grupoII}
                            </label>
                        </Row>
                        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                            <label>
                                <b>GRUPO III:</b> {this.state.grupoIII}
                            </label>
                        </Row>
                        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                            <label>
                                <b>Referência:</b> o ciclo de maturação de cada cultivar pode ser encontrado no pdf abaixo
                                <ul>
                                    <li>
                                        <a href='http://www.agricultura.gov.br/assuntos/riscos-seguro/risco-agropecuario/documentos/Parametrosderiscoclimatico.pdf'>
                                            Parâmetros de Risco Climático
                                        </a>
                                    </li>
                                </ul>                            
                            </label>
                        </Row>
                        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                            <label><b>ARENOSO:</b> {this.state.arenoso} </label>
                        </Row>
                        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                            <label><b>ARGILOSO:</b> {this.state.argiloso} </label>
                        </Row>
                        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                            <label><b>TEXTURA MÉDIA:</b> {this.state.texturaMedia} </label>
                        </Row>
                        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                            <label>
                                <b>Referência:</b> 
                                <ul>
                                    <li style={{textAlign: 'left'}}>
                                        <a href='http://www.agricultura.gov.br/assuntos/riscos-seguro/risco-agropecuario/portarias'>
                                            Portarias do Ministério da Agricultura
                                        </a>
                                    </li>
                                </ul>                            
                            </label>
                        </Row>
                        
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