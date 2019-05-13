import React from 'react';

import { dispatch, useGlobalState } from '../state';

const setTextura = (event) => dispatch({
    texturaNome: event.target.value,
    texturaID: event.target.id,
    type: 'setTextura',
});

export default function Texture(){
    let [texturaID] = useGlobalState('texturaID');
    texturaID = parseInt(texturaID, 10);
    const checked = [0, 0, 0];
    if(texturaID === 1){
        checked[0] = 1;
    }
    else if(texturaID === 2){
        checked[1] = 1;
    }
    else if(texturaID === 3){
        checked[2] = 1;
    }
    return(
        <div className='content'>
            <h2>Solo</h2>
            <p> selecione a textura do solo do plantio </p>
            <div className='options' onChange={setTextura}>
                <div className="container">
                    <ul className="list">
                        <li className="list__item">
                            <input type="radio" className="radio-btn" name="choice" id="1" value="ARENOSO" checked={checked[0]}/>
                            <label for="1" className="label">ARENOSO</label>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <ul className="list">
                        <li className="list__item">
                            <input type="radio" className="radio-btn" name="choice" id="2" value="ARGILOSO" checked={checked[1]}/>
                            <label for="2" className="label">ARGILOSO</label>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <ul className="list">
                        <li className="list__item">
                            <input type="radio" className="radio-btn" name="choice" id="3" value="TEXTURA MEDIA" checked={checked[2]}/>
                            <label for="3" className="label">TEXTURA MEDIA</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
