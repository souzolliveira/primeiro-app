import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import { useGlobalState } from '../state';

export default function Zoning(){
    const [municipioNome] = useGlobalState('municipioNome');
    const [municipioUF] = useGlobalState('municipioUF');
    const [codigoIBGE] = useGlobalState('codigoIBGE');
    const [culturaNome] = useGlobalState('culturaNome');
    const [culturaID] = useGlobalState('culturaID');
    const [cicloNome] = useGlobalState('cicloNome');
    const [texturaNome] = useGlobalState('texturaNome');

    return (
        <Zoneamento 
            municipioNome={municipioNome}
            municipioUF={municipioUF}
            codigoIBGE={codigoIBGE}
            culturaNome={culturaNome} 
            culturaID={culturaID}
            cicloNome={cicloNome}
            texturaNome={texturaNome}
            />
    )
}
class Zoneamento extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {

            zoneamento: [                
                {mes: "Janeiro", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Fevereiro", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Março", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Abril", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Maio", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Junho", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Julho", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Agosto", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Setembro", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Outubro", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Novembro", dec01: 0, dec02: 0, dec03: 0},
                {mes: "Dezembro", dec01: 0, dec02: 0, dec03: 0}                
            ],
            zoneamento20: [{
                uf: '',
                cultura: '',
                ciclo: '',
                solo: '',
                diaIni: 0,
                mesIni: 0,
                diaFim: 0,
                mesFim: 0,
                safraIni: 0,
                safraFim: 0,
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
                safraIni: 0,
                safraFim: 0,
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
                safraIni: 0,
                safraFim: 0,
                risco: 0
            }],
        }        
    }
    componentDidMount(){
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura='+this.props.culturaID+'&codigoIBGE='+this.props.codigoIBGE+'', {headers: {'Authorization': 'Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548'}})
          .then(response => {
            this.setState({                        
                zoneamento20: response.data.data,
            })
        })
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura='+this.props.culturaID+'&codigoIBGE='+this.props.codigoIBGE+'&risco=30', {headers: {'Authorization': 'Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548'}})
          .then(response => {
            this.setState({                        
                zoneamento30: response.data.data,
            })
        })
        axios.get('https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura='+this.props.culturaID+'&codigoIBGE='+this.props.codigoIBGE+'&risco=40', {headers: {'Authorization': 'Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548'}})
          .then(response => {
            this.setState({                        
                zoneamento40: response.data.data,
            })
        })           
    }
    componentDidUpdate(prevProps, prevState){        
        if(prevState.zoneamento20 !== this.state.zoneamento20){
            for(let i = 0; i < this.state.zoneamento20.length; i++){
                if(this.state.zoneamento20[i].cultura !== '' && this.state.zoneamento20[i].ciclo === this.props.cicloNome && this.state.zoneamento20[i].solo === this.props.texturaNome){
                    let mes = this.state.zoneamento20[i].mesIni - 1;
                    let dec = this.state.zoneamento20[i].diaIni;
                    let newState = Object.assign({}, this.state);                   
                    if(dec === 1){
                        newState.zoneamento[mes].dec01 = 20;
                        this.setState({                        
                            newState,                        
                        })
                    }
                    else if(dec === 11){
                        newState.zoneamento[mes].dec02 = 20;
                        this.setState({                        
                            newState,                      
                        })
                    }else if(dec === 21){
                        newState.zoneamento[mes].dec03 = 20;
                        this.setState({                        
                            newState,                    
                        })
                    }
                }
            }
        }
        if(prevState.zoneamento30 !== this.state.zoneamento30){
            for(let i = 0; i < this.state.zoneamento30.length; i++){
                if(this.state.zoneamento30[i].cultura !== '' && this.state.zoneamento30[i].ciclo === this.props.cicloNome && this.state.zoneamento30[i].solo === this.props.texturaNome){
                    let mes = this.state.zoneamento30[i].mesIni - 1;
                    let dec = this.state.zoneamento30[i].diaIni;
                    let newState = Object.assign({}, this.state);                    
                    if(dec === 1){
                        newState.zoneamento[mes].dec01 = 30;
                        this.setState({                        
                            newState,                        
                        })
                    }
                    else if(dec === 11){
                        newState.zoneamento[mes].dec02 = 30;
                        this.setState({                        
                            newState,                      
                        })
                    }else if(dec === 21){
                        newState.zoneamento[mes].dec03 = 30;
                        this.setState({                        
                            newState,                    
                        })
                    }
                }
            }
        }
        if(prevState.zoneamento40 !== this.state.zoneamento40){
            for(let i = 0; i < this.state.zoneamento40.length; i++){
                if(this.state.zoneamento40[i].cultura !== '' && this.state.zoneamento40[i].ciclo === this.props.cicloNome && this.state.zoneamento40[i].solo === this.props.texturaNome){
                    let mes = this.state.zoneamento40[i].mesIni - 1;
                    let dec = this.state.zoneamento40[i].diaIni;
                    let newState = Object.assign({}, this.state);                    
                    if(dec === 1){
                        newState.zoneamento[mes].dec01 = 40;
                        this.setState({                        
                            newState,                        
                        })
                    }
                    else if(dec === 11){
                        newState.zoneamento[mes].dec02 = 40;
                        this.setState({                        
                            newState,                      
                        })
                    }else if(dec === 21){
                        newState.zoneamento[mes].dec03 = 40;
                        this.setState({                        
                            newState,                    
                        })
                    }
                }
            }
        }
    }
    
    render(){        
        const zoneamento = this.state.zoneamento;
        const zoning = zoneamento.map((data) => {
            let corDec01 = "";
            let corDec02 = "";
            let corDec03 = "";
            if(data.dec01 === 20){
                corDec01 = "#05973f";
            }else if(data.dec01 === 30){
                corDec01 = "#f8bc82";
            }else if(data.dec01 === 40){
                corDec01 = "#f3661f";
            }else{
                corDec01 = "#a3a3a3";
            }
            if(data.dec02 === 20){
                corDec02 = "#05973f";
            }else if(data.dec02 === 30){
                corDec02 = "#f8bc82";
            }else if(data.dec02 === 40){
                corDec02 = "#f3661f";
            }else{
                corDec02 = "#a3a3a3";
            }
            if(data.dec03 === 20){
                corDec03 = "#05973f";
            }else if(data.dec03 === 30){
                corDec03 = "#f8bc82";
            }else if(data.dec03 === 40){
                corDec03 = "#f3661f";
            }else{
                corDec03 = "#a3a3a3";
            }
            return (                
                <Row style={{maxWidth: "400px", textAlign: "center", margin: "0px auto"}}>
                    <Col style={{padding: "0"}}> <div style={{width: "150px", margin: "5px auto", padding: "0 25px", textAlign: "left"}}>{data.mes}</div> </Col>
                    <Col style={{padding: "0"}}> <div style={{width: "30px", height: "30px", borderRadius: "50%", background: corDec01, margin: "5px auto"}}></div> </Col>
                    <Col style={{padding: "0"}}> <div style={{width: "30px", height: "30px", borderRadius: "50%", background: corDec02, margin: "5px auto"}}></div> </Col>
                    <Col style={{padding: "0"}}> <div style={{width: "30px", height: "30px", borderRadius: "50%", background: corDec03, margin: "5px auto"}}></div> </Col>
                </Row>                
            );
            
        });
        if(this.props.codigoIBGE !== '' && this.props.culturaID !== '' && this.props.cicloNome !== '' && this.props.texturaNome !== ''){
            return(
                <div className='content zoning'>
                                   
                        <Row style={{maxWidth: "600px", textAlign: "center", margin: "0px auto", background: "#0075a4", color: "#e5eff4"}}>
                            <Col> {this.props.municipioNome} - {this.props.municipioUF}</Col>
                        </Row>
                        <Row style={{maxWidth: "600px", textAlign: "center", margin: "0px auto", background: "#0075a4", color: "#e5eff4"}}>
                            <Col> {this.props.culturaNome} </Col>
                            <Col> {this.props.cicloNome} </Col>
                            <Col> {this.props.texturaNome} </Col>
                        </Row>
    
                        <Row style={{maxWidth: "400px", textAlign: "center", margin: "0px auto"}}>
                            <Col style={{padding: "0"}}> <div style={{width: "150px", padding: "5px 0"}}>mês/decênios</div> </Col>
                            <Col style={{padding: "0"}}> <div style={{width: "30px", height: "30px", borderRadius: "50%", margin: "5px auto"}}>1</div> </Col>
                            <Col style={{padding: "0"}}> <div style={{width: "30px", height: "30px", borderRadius: "50%", margin: "5px auto"}}>2</div> </Col>
                            <Col style={{padding: "0"}}> <div style={{width: "30px", height: "30px", borderRadius: "50%", margin: "5px auto"}}>3</div> </Col>
                        </Row>
    
                        {zoning}
    
                        <Row style={{maxWidth: "600px", textAlign: "center", margin: "0px auto"}}>
                            <br />
                        </Row>
                        <Row style={{maxWidth: "600px", textAlign: "center", margin: "0px auto"}}>
                            <Col style={{padding: "0"}}> <div style={{width: "150px", margin: "0px auto", padding: "0 10px", textAlign: "left"}}>Legenda</div> </Col>
    
                            <Col style={{padding: "0"}}> <div style={{width: "20px", height: "20px", borderRadius: "50%", background: "#05973f", margin: "0px auto"}}></div> </Col>
                            <Col style={{padding: "0"}}> <div style={{width: "20px", height: "20px", borderRadius: "50%", background: "#f8bc82", margin: "0px auto"}}></div> </Col>
                            <Col style={{padding: "0"}}> <div style={{width: "20px", height: "20px", borderRadius: "50%", background: "#f3661f", margin: "0px auto"}}></div> </Col>
                            <Col style={{padding: "0"}}> <div style={{width: "20px", height: "20px", borderRadius: "50%", background: "#a3a3a3", margin: "0px auto"}}></div> </Col>
                        </Row> 
                        <Row style={{maxWidth: "600px", textAlign: "center", margin: "0px auto"}}>
                            <Col style={{padding: "0"}}> <div style={{width: "150px", margin: "0px auto", textAlign: "center"}}>risco até</div> </Col>
                            <Col style={{padding: "0"}}> <div style={{margin: "0px auto"}}>20%</div> </Col>
                            <Col style={{padding: "0"}}> <div style={{margin: "0px auto"}}>30%</div> </Col>
                            <Col style={{padding: "0"}}> <div style={{margin: "0px auto"}}>40%</div> </Col>
                            <Col style={{padding: "0"}}> <div style={{margin: "0px auto"}}>sem indicação</div> </Col>
                        </Row>                    
                </div>
            );
        }else{
            let municipio = 'preencher';
            let cultura = 'preencher';
            let ciclo = 'preencher';
            let textura = 'preencher';
            let corMunicipio = '#f3661f';
            let corCultura = '#f3661f';
            let corCiclo = '#f3661f';
            let corTextura = '#f3661f';
            if(this.props.municipioNome !== ''){
                municipio = this.props.municipioNome +' - '+ this.props.municipioUF;
                corMunicipio = '#05973f';
            }
            if(this.props.culturaNome !== ''){
                cultura = this.props.culturaNome;
                corCultura = '#05973f';
            }
            if(this.props.cicloNome !== ''){
                ciclo = this.props.cicloNome;
                corCiclo = '#05973f';
            }
            if(this.props.texturaNome !== ''){
                textura = this.props.texturaNome;
                corTextura = '#05973f';
            }
            return (
                <div className='content'>
                    <h2> Zoneamento </h2>
                    <p> É necessário preencher todos os filtros de busca </p>
                    <div style={{textAlign: 'left'}} className='container'>
                        <p><b> Localização: </b> <label style={{color: corMunicipio}}>{municipio}</label> </p>
                        <p><b> Cultura: </b>  <label style={{color: corCultura}}>{cultura}</label> </p>
                        <p><b> Ciclo: </b>  <label style={{color: corCiclo}}>{ciclo}</label> </p>
                        <p><b> Solo: </b> <label style={{color: corTextura}}>{textura}</label> </p>
                    </div>
                </div>
            );
        }        
    }
}
