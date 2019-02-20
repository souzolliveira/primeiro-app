import React, {Component} from 'react';

export default class Culture extends Component{
    render(){
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
