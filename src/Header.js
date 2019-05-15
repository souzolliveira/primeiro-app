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
            embrapa: 'A Empresa Brasileira de Pesquisa Agropecuária (Embrapa) foi criada em 26 de abril de 1973 e é vinculada ao Ministério da Agricultura, Pecuária e Abastecimento (Mapa). Desde a nossa criação, assumimos um desafio: desenvolver, em conjunto com nossos parceiros do Sistema Nacional de Pesquisa Agropecuária (SNPA), um modelo de agricultura e pecuária tropical genuinamente brasileiro, superando as barreiras que limitavam a produção de alimentos, fibras e energia no nosso País.',
            zarc: 'O método de Zoneamento Agrícola de Risco Climático (ZARC), desenvolvido pela Embrapa e parceiros, aplicado no Brasil oficialmente desde 1996, por meio do Ministério da Agricultura, Pecuária e Abastecimento – MAPA, proporciona a indicação de datas ou períodos de plantio/semeadura por cultura e por município, considerando as características do clima, o tipo de solo e ciclo de cultivares, de forma a evitar que adversidades climáticas coincidam com as fases mais sensíveis das culturas, minimizando as perdas agrícolas. A tecnologia constitui-se, portanto, em uma ferramenta crucial para o apoio à tomada de decisão para o planejamento e a execução de atividades agrícolas, para políticas públicas e, notadamente, à seguridade agrícola.',
        };       
    }
    render(){
        return(
            <div>    
                <Navbar collapseOnSelect expand="lg" fixed="top">
                    <Navbar.Brand>
                    <img
                        alt=""
                        src="https://lh6.ggpht.com/7c-1Sap7TQWY6aF7Ccalq3NV-ISbHKOvPMUghVKsu7tralXbAsTrxUWK5ubAexKU1nw"
                        width="30"
                        height="30"
                        style={{marginRight: '16px'}}
                        className="d-inline-block align-top"
                    />                     
                        {'ZARC'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link onClick={() => this.setState({showTutorial: true})}>Tutorial</Nav.Link>
                            <Nav.Link onClick={() => this.setState({showDictionary: true})}>Dicionário</Nav.Link>
                            <Nav.Link onClick={() => this.setState({showHistory: true})}>Histórico</Nav.Link>                            
                            <Nav.Link onClick={() => this.setState({showCrew: true})}>Equipe</Nav.Link>   
                            <Nav.Link onClick={() => this.setState({showAbout: true})}>Sobre</Nav.Link>                                                 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.state.showTutorial} onHide={() => this.setState({showTutorial: false})} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Tutorial</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                 
                            
                    </Modal.Body>
                </Modal>
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
                                <b>Referências:</b> 
                                <ul>
                                    <li>
                                    <a href='http://www.agricultura.gov.br/assuntos/riscos-seguro/risco-agropecuario/portarias' target="_blank">
                                            Portarias do MAPA
                                        </a>
                                    </li>
                                    <li>
                                        <a href='http://www.agricultura.gov.br/assuntos/riscos-seguro/risco-agropecuario/documentos/Parametrosderiscoclimatico.pdf' target="_blank">
                                            Parâmetros de Risco Climático (pdf)
                                        </a>
                                    </li>
                                    <li style={{textAlign: 'left'}}>
                                        <a href='http://www.agricultura.gov.br/assuntos/riscos-seguro/risco-agropecuario/documentos/INn2de09.10.2008.pdf' target="_blank">
                                            INSTRUÇÃO NORMATIVA Nº 2, DE 9 DE OUTUBRO DE 2008 (pdf)
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
                <Modal show={this.state.showCrew} onHide={() => this.setState({showCrew: false})} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Equipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                 
                            
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.showAbout} onHide={() => this.setState({showAbout: false})} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Sobre</Modal.Title>                        
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Embrapa</h5>
                        <p style={{textAlign: 'justify'}}> &emsp; {this.state.embrapa}</p>     
                        <h5>ZARC</h5>
                        <p style={{textAlign: 'justify'}}> &emsp; {this.state.zarc}</p>
                        <div style={{textAlign: 'left'}}>
                            <b>Referências</b>
                            <ul>    
                                <li>
                                    <a href="https://www.embrapa.br/quem-somos" target="_blank">
                                        Embrapa
                                    </a>                                
                                </li>
                                <li>
                                    <a href="https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/3933/zoneamento-agricola-de-risco-climatico---zarc" target="_blank">
                                        ZARC
                                    </a>                                
                                </li>
                            </ul>
                        </div>
                    </Modal.Body>
                </Modal>                
            </div>
        )
    }
}