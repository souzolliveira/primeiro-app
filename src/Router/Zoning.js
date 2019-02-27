import React, {Component} from 'react';
import Demo from './geolocated.js';

export default class Texture extends Component{
    render(){
        return(
            <div className='content'>
                <h2>Zoneamento</h2>
                <Demo />
            </div>
        );
    }
}
