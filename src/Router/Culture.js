import React, {Component, useEffect}  from 'react';
import axios from 'axios';

import { dispatch, useGlobalState } from '../state';

const setCultura = (event) => dispatch({
    culturaNome: event.target.value,
    culturaID: event.target.id,
    type: 'setCultura',
});
const addCultura = (culturas) => dispatch({
    culturas: culturas,
    type: 'addCultura',
});

export default function Culture(){ 
    useEffect(() =>{
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/culturas', {headers: {'Authorization': 'Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548'}})
          .then(response => {
            addCultura(response.data.data);
        })
    });
    const [cult] = useGlobalState('culturas');
    const [culturaID] = useGlobalState('culturaID');

    let optionItems = cult.map((data) =>{
        if(data.id != 0){
            return(
                <div className="container">
                    <ul className="list">
                        <li className="list__item">
                            <input type="radio" className="radio-btn" name="choice" id={data.id} value={data.cultura} checked={culturaID == data.id}/>
                            <label for={data.id} className="label">{data.cultura}</label>
                        </li>
                    </ul>
                </div>
            );
        }
    });
    return (
        <div className='content'>
            <h2>Cultura</h2>
            <p> selecione a cultura desejada </p>
            <div className='options' onChange={setCultura}>            
                {optionItems}
            </div>
        </div>
    );
}
  
