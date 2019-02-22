import React, {Component} from 'react';
import axios from 'axios';

export default class Culture extends Component{
    constructor(){
        super();

        this.state = {
            culturas: [],
            length: 0,
        }
    }
    render(){
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/culturas', {headers: {'Authorization': 'Bearer d4c07cde-dacc-3194-a535-37300f024951'}})
          .then(response => {
            this.setState(()=>{
                return {                        
                    culturas: response.data.data,
                    length: response.data.data.length,
                }
          })         
        })

        const culturas = this.state.culturas;

        for (var i = 0; i < this.state.length; i += 1) {
            culturas.push(<CultureComponent value={this.state.culturas.id} nome={this.state.culturas.cultura}/>);
        };

        console.log(this.state.culturas);

        return (
            <div className='content'>
                <h2>Cultura</h2>
                <p> selecione a cultura desejada </p>
                <div className='options'>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-0" />
                        <label for="opt-0" className="label">ARROZ</label>
                        </li>
                    </ul>
                    </div>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-1" />
                        <label for="opt-1" className="label">FEIJÃO</label>
                        </li>
                    </ul>
                    </div>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-2" />
                        <label for="opt-2" className="label">MILHO</label>
                        </li>
                    </ul>
                    </div>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-3" />
                        <label for="opt-3" className="label">SOJA</label>
                        </li>
                    </ul>
                    </div>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-4" />
                        <label for="opt-4" className="label">TRIGO</label>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}
const CultureComponent = props => 
    <div className="container">
        <ul className="list">
            <li className="list__item">
                <input type="radio" className="radio-btn" name="choice" id={props.value} />
                <label for={props.value} className="label">{props.nome}</label>
            </li>
        </ul>
    </div>;
  
