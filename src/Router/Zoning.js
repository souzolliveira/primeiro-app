import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default class Texture extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            zoneamento20: [{
                uf: '',
                cultura: '',
                ciclo: '',
                solo: '',
                diaIni: 0,
                mesIni: 0,
                diaFim: 0,
                mesFim: 0,
                safraIni: 2018,
                safraFim: 2019,
                risco: 0
            }],
            zoneamento30: [{
                uf: '',
                cultura: '',
                ciclo: '',
                solo: '',
                diaIni: 0,
                mesIni: 0,
                diaFim: 0,
                mesFim: 0,
                safraIni: 2018,
                safraFim: 2019,
                risco: 0
            }],
            zoneamento40: [{
                uf: '',
                cultura: '',
                ciclo: '',
                solo: '',
                diaIni: 0,
                mesIni: 0,
                diaFim: 0,
                mesFim: 0,
                safraIni: 2018,
                safraFim: 2019,
                risco: 0
            }],
        }        
    }
    componentDidMount(){
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura=62&codigoIBGE=3109709', {headers: {'Authorization': 'Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548'}})
          .then(response => {
            this.setState(()=>{
                return {                        
                    zoneamento20: response.data.data,
                }
          })
        })
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura=62&codigoIBGE=3109709&risco=30', {headers: {'Authorization': 'Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548'}})
          .then(response => {
            this.setState(()=>{
                return {                        
                    zoneamento30: response.data.data,
                }
          })

        })
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura=62&codigoIBGE=3109709&risco=40', {headers: {'Authorization': 'Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548'}})
          .then(response => {
            this.setState(()=>{
                return {                        
                    zoneamento40: response.data.data,
                }
          })
        })
        
    }
    render(){
        let zoning20 = this.state.zoneamento20;
        let zoning30 = this.state.zoneamento30;
        let zoning40 = this.state.zoneamento40;    
        let risco20 = zoning20.map((data) =>{
            if(data.cultura != '' && data.ciclo == "GRUPO I" && data.solo == "ARENOSO"){
                return(
                    <p style={{display: "block"}}>{data.diaIni}/{data.mesIni}</p>
                );
            }
        });
        let risco30 = zoning30.map((data) =>{
            if(data.cultura != '' && data.ciclo == "GRUPO I" && data.solo == "ARENOSO"){
                return(
                    <p style={{display: "block"}}>{data.diaIni}/{data.mesIni}</p>
                );
            }
        });
        let risco40 = zoning40.map((data) =>{
            if(data.cultura != '' && data.ciclo == "GRUPO I" && data.solo == "ARENOSO"){
                return(
                    <p style={{display: "block"}}>{data.diaIni}/{data.mesIni}</p>
                );
            }
        });
        return(
            <div className='content zoning'>
                <h2>Zoneamento</h2>                
                    <Row>
                        <Col> CACHOEIRA DE MINAS - MG </Col>
                    </Row>
                    <Row>
                        <Col> FEIJÃO </Col>
                        <Col> GRUPO I </Col>
                        <Col> ARENOSO </Col>
                    </Row>
                    <div style={{marginTop: "10px", paddingLeft: "15px", paddingRight: "15px"}}>
                        <div style={{width: "100%", display: "block", float: "left"}}>
                            <h5 style={{color: "#195d19", textAlign: "left"}}>Risco de 20%</h5>
                            {risco20}
                        </div>
                        <div style={{width: "100%", display: "block", float: "left"}}>
                            <h5 style={{color: "#e58b2d", textAlign: "left"}}>Risco de 30%</h5>
                            {risco30}
                        </div>
                        <div style={{width: "100%", display: "block", float: "left"}}>
                            <h5 style={{color: "#e74342", textAlign: "left"}}>Risco de 40%</h5>                    
                            {risco40}
                        </div>
                    </div>
            </div>
        );
    }
}
