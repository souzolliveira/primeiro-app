import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Location.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus)

export default class Location extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    render(){
        return(
            <div className='content'>
                <h2>Localização</h2>
                <p> selecione a localização desejada </p>
                <div className='options'>
                    <p> atualmente em:</p>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-geolocation" />
                        <label for="opt-geolocation" className="label">CAMPINAS - SP</label>
                        </li>
                    </ul>
                    </div>
                    <p>
                        <div style={{width: "50%", float: "left", marginTop: "7px"}}>  favoritos: </div>
                        <div style={{width: "50%", float: "right", textAlign: "right", paddingRight: "20px"}}>  
                            <Button variant="primary" onClick={this.handleShow} style={{background: "#0075a4", border: "1px solid #0075a4"}}>
                                <FontAwesomeIcon icon="plus" />
                            </Button> 
                        </div>                        
                    </p>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-1" />
                        <label for="opt-1" className="label">POUSO ALEGRE - MG</label>
                        </li>
                    </ul>
                    </div>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-2" />
                        <label for="opt-2" className="label">SÃO JOSÉ DOS CAMPOS - SP</label>
                        </li>
                    </ul>
                    </div>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-3" />
                        <label for="opt-3" className="label">CURITIBA - PR</label>
                        </li>
                    </ul>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adicionar nova localização</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm="3">UF:</Form.Label>
                                <Col sm="9">
                                    <Form.Control as="select">
                                        <option value=""></option>
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                    </Form.Control>
                                </Col>                                
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="3">Cidade:</Form.Label>
                                <Col sm="9">
                                    <Form.Control as="select">
                                        
                                    </Form.Control>
                                </Col>                                
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
