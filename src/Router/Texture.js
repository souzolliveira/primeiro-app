import React, {Component} from 'react';

export default class Texture extends Component{
    constructor(){
        super();
        
        this.state = {
            texturas: [
                {
                    id: 1,
                    textura: 'ARENOSO',
                },
                {
                    id: 2,
                    textura: 'ARGILOSO',
                },
                {
                    id: 3,
                    textura: 'TEXTURA MÉDIA',
                },
            ]
        }
    }
    render(){
        let text = this.state.texturas;
        let optionItems = text.map((data) =>
            <div className="container">
                <ul className="list">
                    <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id={data.id} />
                        <label for={data.id} className="label">{data.textura}</label>
                    </li>
                </ul>
            </div>
        );
        return(
            <div className='content'>
                <h2>Textura</h2>
                <p> selecione a textura do solo do plantio </p>
                <div className='options'>
                    {optionItems}
                </div>
            </div>
        );
    }
}
