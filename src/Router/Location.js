import axios from 'axios';

import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import trim from 'trim';

import './Location.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { dispatch, useGlobalState } from '../state';

library.add(faPlus)

const setMunicipio = (municipioNome, municipioUF, codigoIBGE) => dispatch({
    municipioNome: municipioNome,
    municipioUF: municipioUF,
    codigoIBGE: codigoIBGE,
    type: 'setMunicipio',
});
const addMunicipio = (favoritos) => dispatch({
    favoritos: favoritos,
    type: 'addMunicipio',
});

const count = () => dispatch({
    type: 'count',
});

export default function Location(){
    const [ favoritos ] = useGlobalState('favoritos');
    const [ count ] = useGlobalState('count');
    const [ codigoIBGE ] = useGlobalState('codigoIBGE');
    return (
        <Localizacao favoritos={favoritos} count={count} codigoIBGE={codigoIBGE}/>
    )
}

class Localizacao extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.getUF = this.getUF.bind(this);
        this.getMunicipio = this.getMunicipio.bind(this);

        this.setMunicipio = this.setMunicipio.bind(this);

        this.state = {
            show: false,

            municipios: [],
            uf: '',

            numChildren: 0,
            newFav: {
                codigoIBGE: '',
                nome: '',
                uf: '',
            },

            favoritos: [{
                codigoIBGE: '',
                nome: '',
                uf: '',
            }],            

            latitude: '',
            longitude: '',
            geolocal: '',
            cidade: '',
            cep: '',
            codIBGE: '',

            municipio: {
                codigoIBGE: '',
                nome: '',
                uf: '',
            }
        };
    }
    
    handleClose() {this.setState({ show: false });}    
    handleShow() {this.setState({ show: true });}
    handleSave() {
        this.setState({ show: false });
        if(this.props.count > this.state.numChildren){
            const fav = this.props.favoritos;
            const fav2 = fav.concat([{codigoIBGE: this.state.newFav.codigoIBGE, nome: this.state.newFav.nome, uf: this.state.newFav.uf}]);
            addMunicipio(fav2);
            this.setState({
                numChildren: this.props.count + 1,
                favoritos: fav2,
            })
            count();
        }else{
            if(this.state.numChildren == 0){
                const fav = [{codigoIBGE: this.state.newFav.codigoIBGE, nome: this.state.newFav.nome, uf: this.state.newFav.uf}];
                addMunicipio(fav);
            }
            else{
                const fav = this.state.favoritos;
                const fav2 = fav.concat([{codigoIBGE: this.state.newFav.codigoIBGE, nome: this.state.newFav.nome, uf: this.state.newFav.uf}]);
                addMunicipio(fav2);
            }
            const favoritos = this.state.favoritos.slice(0, this.state.numChildren + 1);
            if(this.state.numChildren == 0){
                this.setState({
                    favoritos: ([
                        { 
                            codigoIBGE: this.state.newFav.codigoIBGE, 
                            nome: this.state.newFav.nome,
                            uf: this.state.newFav.uf,
                        }
                    ]),
                    numChildren: this.state.numChildren + 1,
                    
                });  
            }
            else{
                this.setState({
                    favoritos: favoritos.concat([
                        { 
                            codigoIBGE: this.state.newFav.codigoIBGE, 
                            nome: this.state.newFav.nome,
                            uf: this.state.newFav.uf,
                        }
                    ]),
                    numChildren: this.state.numChildren + 1,
                });
            }
            count();
        }
    }
    getUF(event){ this.setState({ uf: event.target.value }); }
    getMunicipio(event){        
        const array = event.target.value.split(',');        
        this.setState({
            newFav: (
                { 
                    codigoIBGE: array[0], 
                    nome: array[1],
                    uf: array[2],
                }
            ),            
        });
    }

    setMunicipio(event){
        const array = event.target.value.split(',');        
        this.setState({
            municipio: (
                { 
                    codigoIBGE: array[0], 
                    nome: array[1],
                    uf: array[2],
                }
            ),            
        });
        setMunicipio(array[1], array[2], array[0]);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.uf !== this.state.uf){
            axios.get('https://api.cnptia.embrapa.br/agritec/v1/municipios?uf='+this.state.uf+'', {headers: {'Authorization': 'Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548'}})
                .then
                    (response => {
                        this.setState({                       
                            municipios: response.data.data
                        })        
                    })
        }
    }    
    render(){
        const municipios = this.state.municipios;
        const optionItems = municipios.map((data) =>
            <option value={[data.codigoIBGE, data.nome, data.uf]}>{data.nome}</option>
        );

        const favoritos = this.props.favoritos;
        const count = this.props.count;
        const codigoIBGE = this.props.codigoIBGE;

        const favs = favoritos.map((data) => {
            if(count > 0){
                return (
                    <LocationComponent
                        codigoIBGE={codigoIBGE}
                        codigo={data.codigoIBGE} 
                        nome={data.nome} 
                        uf={data.uf}
                    />
                );
            
            }
        });
        const cidade = this.state.cidade;
        const codIBGE = this.state.codIBGE;
        return(
            <div className='content'>
                <h2>Localização</h2>
                <p> selecione a localização desejada </p>
                <div className='options' onChange={this.setMunicipio}>

                    <p>
                        <div style={{width: "50%", float: "left", marginTop: "7px"}}>  favoritos: </div>
                        <div style={{width: "50%", float: "right", textAlign: "right", paddingRight: "20px"}}>  
                            <Button variant="primary" onClick={this.handleShow} style={{background: "#0075a4", border: "1px solid #0075a4"}}>
                                <FontAwesomeIcon icon="plus" />
                            </Button> 
                        </div>                        
                    </p>
                    <div>
                        {favs}
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Form>
                        <Modal.Header closeButton>
                            <Modal.Title>Adicionar nova localização</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>                            
                                <Form.Group as={Row}>
                                    <Form.Label column sm="3">UF:</Form.Label>
                                    <Col sm="9">
                                        <Form.Control as="select" onChange={this.getUF} name="uf">
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
                                    <Form.Label column sm="3">Município:</Form.Label>
                                    <Col sm="9">
                                        <Form.Control as="select" onChange={this.getMunicipio}>
                                            <option value=""></option>
                                            {optionItems}
                                        </Form.Control>
                                    </Col>                                
                                </Form.Group>                           
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Fechar
                            </Button>
                            <Button variant="primary" onClick={this.handleSave}>
                                Salvar
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}  
const LocationComponent = props => 
    <div className="container">
        <ul className="list">
            <li className="list__item">
                <input type="radio" className="radio-btn" name="choice" id={props.codigo} value={props.codigo+','+props.nome+','+props.uf} checked={props.codigoIBGE == props.codigo}/>
                <label for={props.codigo} className="label">{props.nome} - {props.uf}</label>
            </li>
        </ul>
    </div>;