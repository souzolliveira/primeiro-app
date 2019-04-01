import React, {Component} from 'react';
import axios from 'axios';

export default class Culture extends Component{
    constructor(){
        super();
        
        this.state = {
            culturas: [
                {
                    id: 61,
                    cultura: 'ARROZ',
                },
                {
                    id: 62,
                    cultura: 'FEIJÃO',
                },
                {
                    id: 56,
                    cultura: 'MILHO',
                },
                {
                    id: 60,
                    cultura: 'SOJA',
                },
                {
                    id: 32533,
                    cultura: 'TRIGO',
                },
            ]
        }
    }
    componentDidMount(){
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/culturas', {headers: {'Authorization': 'Bearer 8102311a-4abd-3449-a69c-2400c70e71c4'}})
          .then(response => {
            this.setState(()=>{
                return {                        
                    culturas: response.data.data,
                }
          })
        })
    }
    render(){
        let cult = this.state.culturas;
        let optionItems = cult.map((data) =>
            <div className="container">
                <ul className="list">
                    <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id={data.id} />
                        <label for={data.id} className="label">{data.cultura}</label>
                    </li>
                </ul>
            </div>
        );

        return (
            <div className='content'>
                <h2>Cultura</h2>
                <p> selecione a cultura desejada </p>
                <div className='options' >                
                    {optionItems}
                </div>
            </div>
        );
    }
}
  
