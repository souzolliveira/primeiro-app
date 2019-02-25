import React, {Component} from 'react';
import axios from 'axios';

export default class Culture extends Component{
    constructor(){
        super();

        this.CultureList = this.CultureList.bind(this);
        
        this.state = {
            culturas: [{
                id: 0,
                cultura: '',
            }],
        }
    }
    CultureList(){
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/culturas', {headers: {'Authorization': 'Bearer d4c07cde-dacc-3194-a535-37300f024951'}})
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
            <div className='content' onClick={this.CultureList}>
                <h2>Cultura</h2>
                <p> selecione a cultura desejada </p>
                <div className='options' >                
                    {optionItems}
                </div>
            </div>
        );
    }
}
  
