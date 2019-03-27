import axios from 'axios';

import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Location.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus)

export default class Location extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.selectUF = this.selectUF.bind(this);
        this.selectedMunicipio = this.selectedMunicipio.bind(this);

        this.state = {
            show: false,
            municipios: [],
            uf: '',
            numChildren: 0,
            newFav: [{
                codigoIBGE: '',
                nome: '',
            }],
        };
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    handleSave(event) {
        this.setState({
            show: false,
        });
        console.log(this.state.newFav);
    }

    selectUF(event){
        this.setState({uf: event.target.value});
    }

    componentDidUpdate(prevState){        
        if(prevState.uf !== this.state.uf){
            axios.get('https://api.cnptia.embrapa.br/agritec/v1/municipios?uf='+this.state.uf+'', {headers: {'Authorization': 'Bearer d4c07cde-dacc-3194-a535-37300f024951'}})
                .then
                    (response => {
                        this.setState(()=>{
                            return {                        
                                municipios: response.data.data
                            }
                        })         
                    })
        }
    }
    selectedMunicipio(event){
        const newFav = this.state.newFav.slice(0, this.state.numChildren + 1);
        const array = event.target.value.split(',');
        this.setState({
            newFav: newFav.concat([
                { 
                codigoIBGE: array[0], 
                nome: array[1],
                }
            ]),
            numChildren: this.state.numChildren + 1,
        });
    }
    render(){
        let municipios = this.state.municipios;
        let optionItems = municipios.map((data) =>
            <option value={[data.codigoIBGE, data.nome]}>{data.nome}</option>
        );

        const favoritos = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            favoritos.push(<LocationComponent value={this.state.newFav.codigoIBGE} nome={this.state.newFav.nome} uf={this.state.uf}/>);
        };

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
                    <div className="">
                        {favoritos}
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Adicionar nova localização</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm="3">UF:</Form.Label>
                                <Col sm="9">
                                    <Form.Control as="select" onChange={this.selectUF}>
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
                                    <Form.Control as="select" onChange={this.selectedMunicipio}>
                                        {optionItems}
                                    </Form.Control>
                                </Col>                                
                            </Form.Group>                            
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={this.handleSave}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}  
const LocationComponent = props => 
    <div className="container">
        <ul className="list">
            <li className="list__item">
                <input type="radio" className="radio-btn" name="choice" id={props.value} />
                <label for={props.value} className="label">{props.nome} - {props.uf}</label>
            </li>
        </ul>
    </div>;
  