import React, {Component} from 'react';

export default class Texture extends Component{
    render(){
        return(
            <div class='content'>
                <h2>Textura</h2>
                <p> selecione a textura do solo da propriedade </p>
                <div class='options'>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-0" />
                        <label for="opt-0" class="label">ARENOSO</label>
                        </li>
                    </ul>
                    </div>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-1" />
                        <label for="opt-1" class="label">ARGILOSO</label>
                        </li>
                    </ul>
                    </div>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-2" />
                        <label for="opt-2" class="label">TEXTURA MÉDIA</label>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}
