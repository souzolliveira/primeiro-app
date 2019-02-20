import React, {Component} from 'react';

export default class Culture extends Component{
    render(){
        return (
            <div class='content'>
                <h2>Cultura</h2>
                <p> selecione a cultura desejada </p>
                <div class='options'>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-0" />
                        <label for="opt-0" class="label">ARROZ</label>
                        </li>
                    </ul>
                    </div>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-1" />
                        <label for="opt-1" class="label">FEIJÃO</label>
                        </li>
                    </ul>
                    </div>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-2" />
                        <label for="opt-2" class="label">MILHO</label>
                        </li>
                    </ul>
                    </div>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-3" />
                        <label for="opt-3" class="label">SOJA</label>
                        </li>
                    </ul>
                    </div>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-4" />
                        <label for="opt-4" class="label">TRIGO</label>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}
