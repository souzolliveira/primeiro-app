import React from 'react';

import { dispatch, useGlobalState } from '../state';

const setCiclo = (event) => dispatch({
    cicloNome: event.target.value,
    cicloID: event.target.id,
    type: 'setCiclo',
});

export default function Cycle(){
    const [cicloID] = useGlobalState('cicloID');
    const checked = [0, 0, 0];
    if(cicloID == 1){
        checked[0] = 1;
    }
    else if(cicloID == 2){
        checked[1] = 1;
    }
    else if(cicloID == 3){
        checked[2] = 1;
    }
    return(
        <div className='content'>
            <h2>Ciclo</h2>
            <p> selecione o ciclo da cultura </p>
            <div className='options' onChange={setCiclo}>
                <div className="container">
                    <ul className="list">
                        <li className="list__item">
                            <input type="radio" className="radio-btn" name="choice" id="1" value="GRUPO I" checked={checked[0]}/>
                            <label for="1" className="label">GRUPO I</label>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <ul className="list">
                        <li className="list__item">
                            <input type="radio" className="radio-btn" name="choice" id="2" value="GRUPO II" checked={checked[1]}/>
                            <label for="2" className="label">GRUPO II</label>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <ul className="list">
                        <li className="list__item">
                            <input type="radio" className="radio-btn" name="choice" id="3" value="GRUPO III" checked={checked[2]}/>
                            <label for="3" className="label">GRUPO III</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}