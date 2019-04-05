import React, {Component} from 'react';
import axios from 'axios';

export default class Culture extends Component{
    constructor(){
        super();
        this.state = {
            culturas: [
                {
                    id: 0,
                    cultura: "",
                },
            ]
        }
    }
    componentDidMount(){
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/culturas', {headers: {'Authorization': 'Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548'}})
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
        let optionItems = cult.map((data) =>{
            if(data.id != 0){
                return(
                    <div className="container">
                        <ul className="list">
                            <li className="list__item">
                                <input type="radio" className="radio-btn" name="choice" id={data.id} />
                                <label for={data.id} className="label">{data.cultura}</label>
                            </li>
                        </ul>
                    </div>
                );
            }
        });

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
  
