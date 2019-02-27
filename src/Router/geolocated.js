import React from 'react';
import axios from 'axios';
import trim from 'trim';
import {geolocated} from 'react-geolocated';
import Form from 'react-bootstrap/Form';

class Demo extends React.Component {
  constructor(props, context){
    super(props, context);

    this.getLocal = this.getLocal.bind(this);
    this.getCep = this.getCep.bind(this);

    this.state = {
      local: "",
      coords: '',
      cidade: '',
      cep: "",
      ibge: "",
    }
   
  }
  getLocal = (event)=>{
    event.preventDefault();
    axios.get('https://api.opencagedata.com/geocode/v1/json?q='+event.target.coords.value+'&key=8880e42806424cd7b08aa83ee91fe733')
          .then(response => {
            this.setState(()=>{
                return {                        
                    local: response.data.results[0].formatted
                }
          })         
        })
    const localSplit = this.state.local.split(',');
    this.setState({
      cidade: localSplit[2],
      cep: localSplit[3],
    });
  }
  getCep(){
    let newCep = trim(this.state.cep);
    this.setState({
      cep: newCep,
    });
    axios.get('https://viacep.com.br/ws/'+this.state.cep+'/json/')
          .then(response => {
            this.setState(()=>{
                return {                        
                    ibge: response.data.ibge,
                }
          })         
        })
    console.log(this.state.ibge);
  }
  render() {
    return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
          ? <div>Geolocation is not enabled</div>
          : this.props.coords
            ? <div>
                <div>
                  <Form onSubmit={this.getLocal}>
                    <input type="text" name="coords" value={this.props.coords.latitude+'+'+this.props.coords.longitude} />         
                    <button type="submit">Procurar</button>
                  </Form>
                  <button onClick={this.getCep}>CEP</button>
                </div>    
              </div>
            : <div>Getting the location data&hellip; </div>
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);