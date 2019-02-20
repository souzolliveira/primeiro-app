import React, {Component} from 'react';

export default class Location extends Component{
    render(){
        return(
            <div class='content'>
                <h2>Localização</h2>
                <p> selecione a localização desejada </p>
                <div class='options'>
                    <p> atualmente em:</p>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-geolocation" />
                        <label for="opt-geolocation" class="label">CAMPINAS - SP</label>
                        </li>
                    </ul>
                    </div>
                    <p> favoritos:</p>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-1" />
                        <label for="opt-1" class="label">POUSO ALEGRE - MG</label>
                        </li>
                    </ul>
                    </div>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-2" />
                        <label for="opt-2" class="label">SÃO JOSÉ DOS CAMPOS - SP</label>
                        </li>
                    </ul>
                    </div>
                    <div class="container">
                    <ul class="list">
                        <li class="list__item">
                        <input type="radio" class="radio-btn" name="choice" id="opt-3" />
                        <label for="opt-3" class="label">CURITIBA - PR</label>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}
