import React from 'react';
import axios from 'axios';
import trim from 'trim';
import {geolocated} from 'react-geolocated';
import Form from 'react-bootstrap/Form';

class Demo extends React.Component{
  constructor(props, context){
    super(props, context);

    this.getLocal = this.getLocal.bind(this);
    this.getCep = this.getCep.bind(this);

    this.state = {
      local: "",
      latitude: "",
      longitude: "",
      cidade: "",
      cep: "",
      ibge: "",
    }
   
  }
  getLocal = ()=>{
    axios.get('https://api.opencagedata.com/geocode/v1/json?q='+this.state.latitude+'+'+this.state.longitude+'&key=8880e42806424cd7b08aa83ee91fe733')
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
    return (
      <div>
        latitude: {this.props.coords && this.props.coords.latitude}
        longitude: {this.props.coords && this.props.coords.longitude}
      </div>
    )
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);