import React, {Component} from 'react';

export default class Texture extends Component{
    render(){
        return(
            <div className='content'>
                <h2>Textura</h2>
                <p> selecione a textura do solo da propriedade </p>
                <div className='options'>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-0" />
                        <label for="opt-0" className="label">ARENOSO</label>
                        </li>
                    </ul>
                    </div>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-1" />
                        <label for="opt-1" className="label">ARGILOSO</label>
                        </li>
                    </ul>
                    </div>
                    <div className="container">
                    <ul className="list">
                        <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id="opt-2" />
                        <label for="opt-2" className="label">TEXTURA MÉDIA</label>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}
