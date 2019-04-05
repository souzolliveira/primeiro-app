import React, {Component} from 'react';

export default class Cycle extends Component{
    constructor(){
        super();
        
        this.state = {
            ciclos: [
                {
                    id: 1,
                    ciclo: 'GRUPO I',
                },
                {
                    id: 2,
                    ciclo: 'GRUPO II',
                },
                {
                    id: 3,
                    ciclo: 'GRUPO III',
                },
                {
                    id: 4,
                    ciclo: 'PERENE',
                },
            ]
        }
    }
    render(){
        let text = this.state.ciclos;
        let optionItems = text.map((data) =>
            <div className="container">
                <ul className="list">
                    <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id={data.id} />
                        <label for={data.id} className="label">{data.ciclo}</label>
                    </li>
                </ul>
            </div>
        );
        return(
            <div className='content'>
                <h2>Ciclo</h2>
                <p> selecione o ciclo da plantação </p>
                <div className='options'>
                    {optionItems}
                </div>
            </div>
        );
    }
}
