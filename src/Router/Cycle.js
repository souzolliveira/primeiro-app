import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCiclo } from '../actions';

class Cycle extends Component{
    constructor(){
        super();
        
        this.setCycle = this.setCycle.bind(this);

        this.state = {
            cicloNome: '',
            cicloID: '',
            ciclos: [
                {
                    id: 1,
                    ciclo: 'GRUPO I',
                },
                {
                    id: 2,
                    ciclo: 'GRUPO II',
                },
                {
                    id: 3,
                    ciclo: 'GRUPO III',
                },
            ]
        }
    }
    setCycle(event){
        this.setState({
            cicloNome: event.target.value,
            cicloID: event.target.id,
        });
        setCiclo(this.state.cicloNome, this.state.cicloID);
    }
    render(){
        const {
            cicloNome,            
          } = this.props;
        console.log(cicloNome);
        let text = this.state.ciclos;
        let optionItems = text.map((data) =>
            <div className="container">
                <ul className="list">
                    <li className="list__item">
                        <input type="radio" className="radio-btn" name="choice" id={data.id} value={data.ciclo}/>
                        <label for={data.id} className="label">{data.ciclo}</label>
                    </li>
                </ul>
            </div>
        );
        return(
            <div className='content'>
                <h2>Ciclo {cicloNome}</h2>
                <p> selecione o ciclo da cultura </p>
                <div className='options' onChange={this.setCycle}>
                    {optionItems}
                </div>
            </div>
        );
    }
}
const mapStateToProps = store => ({
    cicloNome: store.clickState.cicloNome,
    cicloID: store.clickState.cicloID,
  });
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ setCiclo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cycle);