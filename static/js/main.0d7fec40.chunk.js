(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},157:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(33),l=a.n(o),r=(a(84),a(16)),c=a(17),s=a(20),d=a(18),m=a(19),u=a(168),h=a(162),p=a(169),E=(a(86),a(15)),g=a(34),f=a.n(g),b=a(43),v=a.n(b),x=a(48),y=a.n(x),w=a(37),O=a.n(w),S=a(25),j=a.n(S),A=a(8),z=a.n(A),k=a(76),C=(a(109),a(21)),R=a(36),N=a(28);C.b.add(N.f),C.b.add(N.e);var I=function(e){function t(e,a){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e,a))).handleShow=n.handleShow.bind(Object(E.a)(Object(E.a)(n))),n.handleClose=n.handleClose.bind(Object(E.a)(Object(E.a)(n))),n.handleSave=n.handleSave.bind(Object(E.a)(Object(E.a)(n))),n.getUF=n.getUF.bind(Object(E.a)(Object(E.a)(n))),n.getMunicipio=n.getMunicipio.bind(Object(E.a)(Object(E.a)(n))),n.getGeolocation=n.getGeolocation.bind(Object(E.a)(Object(E.a)(n))),n.state={show:!1,municipios:[],uf:"",numChildren:0,newFav:[{codigoIBGE:"",nome:"",uf:""}],latitude:"",longitude:"",local:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleSave",value:function(e){this.setState({show:!1})}},{key:"getUF",value:function(e){this.setState({uf:e.target.value})}},{key:"getMunicipio",value:function(e){var t=this.state.newFav.slice(0,this.state.numChildren+1),a=e.target.value.split(",");0==this.state.numChildren?this.setState({newFav:[{codigoIBGE:a[0],nome:a[1],uf:a[2]}],numChildren:this.state.numChildren+1}):this.setState({newFav:t.concat([{codigoIBGE:a[0],nome:a[1],uf:a[2]}]),numChildren:this.state.numChildren+1})}},{key:"getGeolocation",value:function(e){e.preventDefault(),this.setState({latitude:e.target.latitude.value,longitude:e.target.longitude.value})}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.uf!==this.state.uf&&f.a.get("https://api.cnptia.embrapa.br/agritec/v1/municipios?uf="+this.state.uf,{headers:{Authorization:"Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548"}}).then(function(e){a.setState({municipios:e.data.data})}),t.latitude!==this.state.latitude&&""!==this.state.latitude&&t.longitude!==this.state.longitude&&""!==this.state.longitude&&f.a.get("https://api.opencagedata.com/geocode/v1/json?q="+this.state.latitude+"+"+this.state.longitude+"&key=8880e42806424cd7b08aa83ee91fe733").then(function(e){a.setState({local:e.data.results[0].formatted})})}},{key:"render",value:function(){var e=this,t=this.state.municipios.map(function(e){return i.a.createElement("option",{value:[e.codigoIBGE,e.nome,e.uf]},e.nome)}),a=this.state.newFav.map(function(t){if(e.state.numChildren>0)return i.a.createElement(B,{codigo:t.codigoIBGE,nome:t.nome,uf:t.uf})});return i.a.createElement("div",{className:"content"},i.a.createElement("h2",null,"Localiza\xe7\xe3o"),i.a.createElement("p",null," selecione a localiza\xe7\xe3o desejada "),i.a.createElement("div",{className:"options"},i.a.createElement("p",null,i.a.createElement("div",{style:{width:"50%",float:"left",marginTop:"7px"}},"  atualmente em: "),i.a.createElement("div",{style:{width:"50%",float:"right",textAlign:"right",paddingRight:"20px"}},i.a.createElement(O.a,{onSubmit:this.getGeolocation},i.a.createElement("input",{type:"hidden",name:"latitude",value:this.props.coords&&this.props.coords.latitude}),i.a.createElement("input",{type:"hidden",name:"longitude",value:this.props.coords&&this.props.coords.longitude}),i.a.createElement(y.a,{type:"submit",variant:"primary",style:{background:"#0075a4",border:"1px solid #0075a4"}},i.a.createElement(R.a,{icon:"map-marker-alt"}))))),i.a.createElement("div",{className:"container"},i.a.createElement("ul",{className:"list"},i.a.createElement("li",{className:"list__item"},i.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:"opt-geolocation"}),i.a.createElement("label",{for:"opt-geolocation",className:"label"},"CAMPINAS - SP")))),i.a.createElement("p",null,i.a.createElement("div",{style:{width:"50%",float:"left",marginTop:"7px"}},"  favoritos: "),i.a.createElement("div",{style:{width:"50%",float:"right",textAlign:"right",paddingRight:"20px"}},i.a.createElement(y.a,{variant:"primary",onClick:this.handleShow,style:{background:"#0075a4",border:"1px solid #0075a4"}},i.a.createElement(R.a,{icon:"plus"})))),i.a.createElement("div",{className:""},a)),i.a.createElement(v.a,{show:this.state.show,onHide:this.handleClose,centered:!0},i.a.createElement(v.a.Header,{closeButton:!0},i.a.createElement(v.a.Title,null,"Adicionar nova localiza\xe7\xe3o")),i.a.createElement(v.a.Body,null,i.a.createElement(O.a,null,i.a.createElement(O.a.Group,{as:j.a},i.a.createElement(O.a.Label,{column:!0,sm:"3"},"UF:"),i.a.createElement(z.a,{sm:"9"},i.a.createElement(O.a.Control,{as:"select",onChange:this.getUF},i.a.createElement("option",{value:""}),i.a.createElement("option",{value:"AC"},"Acre"),i.a.createElement("option",{value:"AL"},"Alagoas"),i.a.createElement("option",{value:"AP"},"Amap\xe1"),i.a.createElement("option",{value:"AM"},"Amazonas"),i.a.createElement("option",{value:"BA"},"Bahia"),i.a.createElement("option",{value:"CE"},"Cear\xe1"),i.a.createElement("option",{value:"DF"},"Distrito Federal"),i.a.createElement("option",{value:"ES"},"Esp\xedrito Santo"),i.a.createElement("option",{value:"GO"},"Goi\xe1s"),i.a.createElement("option",{value:"MA"},"Maranh\xe3o"),i.a.createElement("option",{value:"MT"},"Mato Grosso"),i.a.createElement("option",{value:"MS"},"Mato Grosso do Sul"),i.a.createElement("option",{value:"MG"},"Minas Gerais"),i.a.createElement("option",{value:"PA"},"Par\xe1"),i.a.createElement("option",{value:"PB"},"Para\xedba"),i.a.createElement("option",{value:"PR"},"Paran\xe1"),i.a.createElement("option",{value:"PE"},"Pernambuco"),i.a.createElement("option",{value:"PI"},"Piau\xed"),i.a.createElement("option",{value:"RJ"},"Rio de Janeiro"),i.a.createElement("option",{value:"RN"},"Rio Grande do Norte"),i.a.createElement("option",{value:"RS"},"Rio Grande do Sul"),i.a.createElement("option",{value:"RO"},"Rond\xf4nia"),i.a.createElement("option",{value:"RR"},"Roraima"),i.a.createElement("option",{value:"SC"},"Santa Catarina"),i.a.createElement("option",{value:"SP"},"S\xe3o Paulo"),i.a.createElement("option",{value:"SE"},"Sergipe"),i.a.createElement("option",{value:"TO"},"Tocantins")))),i.a.createElement(O.a.Group,{as:j.a},i.a.createElement(O.a.Label,{column:!0,sm:"3"},"Munic\xedpio:"),i.a.createElement(z.a,{sm:"9"},i.a.createElement(O.a.Control,{as:"select",onChange:this.getMunicipio},i.a.createElement("option",{value:""}),t))))),i.a.createElement(v.a.Footer,null,i.a.createElement(y.a,{variant:"secondary",onClick:this.handleClose},"Fechar"),i.a.createElement(y.a,{variant:"primary",onClick:this.handleSave},"Salvar"))))}}]),t}(n.Component),B=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("ul",{className:"list"},i.a.createElement("li",{className:"list__item"},i.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.codigo}),i.a.createElement("label",{for:e.codigo,className:"label"},e.nome," - ",e.uf))))},G=Object(k.geolocated)()(I),F=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={culturas:[{id:0,cultura:""}]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.cnptia.embrapa.br/agritec/v1/culturas",{headers:{Authorization:"Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548"}}).then(function(t){e.setState(function(){return{culturas:t.data.data}})})}},{key:"render",value:function(){var e=this.state.culturas.map(function(e){if(0!=e.id)return i.a.createElement("div",{className:"container"},i.a.createElement("ul",{className:"list"},i.a.createElement("li",{className:"list__item"},i.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.id}),i.a.createElement("label",{for:e.id,className:"label"},e.cultura))))});return i.a.createElement("div",{className:"content"},i.a.createElement("h2",null,"Cultura"),i.a.createElement("p",null," selecione a cultura desejada "),i.a.createElement("div",{className:"options"},e))}}]),t}(n.Component),P=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={ciclos:[{id:1,ciclo:"GRUPO I"},{id:2,ciclo:"GRUPO II"},{id:3,ciclo:"GRUPO III"},{id:4,ciclo:"PERENE"}]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.ciclos.map(function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("ul",{className:"list"},i.a.createElement("li",{className:"list__item"},i.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.id}),i.a.createElement("label",{for:e.id,className:"label"},e.ciclo))))});return i.a.createElement("div",{className:"content"},i.a.createElement("h2",null,"Ciclo"),i.a.createElement("p",null," selecione o ciclo da planta\xe7\xe3o "),i.a.createElement("div",{className:"options"},e))}}]),t}(n.Component),T=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={texturas:[{id:1,textura:"ARENOSO"},{id:2,textura:"ARGILOSO"},{id:3,textura:"TEXTURA M\xc9DIA"}]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.texturas.map(function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("ul",{className:"list"},i.a.createElement("li",{className:"list__item"},i.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.id}),i.a.createElement("label",{for:e.id,className:"label"},e.textura))))});return i.a.createElement("div",{className:"content"},i.a.createElement("h2",null,"Textura"),i.a.createElement("p",null," selecione a textura do solo da propriedade "),i.a.createElement("div",{className:"options"},e))}}]),t}(n.Component),M=a(32),L=function(e){function t(e,a){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e,a))).state={zoneamento:[{mes:"Janeiro",dec01:0,dec02:40,dec03:0},{mes:"Fevereiro",dec01:0,dec02:0,dec03:0},{mes:"Mar\xe7o",dec01:20,dec02:0,dec03:0},{mes:"Abril",dec01:0,dec02:0,dec03:0},{mes:"Maio",dec01:0,dec02:0,dec03:0},{mes:"Junho",dec01:0,dec02:0,dec03:0},{mes:"Julho",dec01:0,dec02:0,dec03:20},{mes:"Agosto",dec01:0,dec02:0,dec03:0},{mes:"Setembro",dec01:20,dec02:0,dec03:0},{mes:"Outubro",dec01:0,dec02:0,dec03:40},{mes:"Novembro",dec01:0,dec02:30,dec03:0},{mes:"Dezembro",dec01:0,dec02:0,dec03:0}],zoneamento20:[{uf:"",cultura:"",ciclo:"",solo:"",diaIni:0,mesIni:0,diaFim:0,mesFim:0,safraIni:2018,safraFim:2019,risco:0}],zoneamento30:[{uf:"",cultura:"",ciclo:"",solo:"",diaIni:0,mesIni:0,diaFim:0,mesFim:0,safraIni:2018,safraFim:2019,risco:0}],zoneamento40:[{uf:"",cultura:"",ciclo:"",solo:"",diaIni:0,mesIni:0,diaFim:0,mesFim:0,safraIni:2018,safraFim:2019,risco:0}]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura=62&codigoIBGE=3109709",{headers:{Authorization:"Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548"}}).then(function(t){e.setState({zoneamento20:t.data.data})}),f.a.get("https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura=62&codigoIBGE=3109709&risco=30",{headers:{Authorization:"Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548"}}).then(function(t){e.setState({zoneamento30:t.data.data})}),f.a.get("https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura=62&codigoIBGE=3109709&risco=40",{headers:{Authorization:"Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548"}}).then(function(t){e.setState({zoneamento40:t.data.data})})}},{key:"componentDidUpdate",value:function(e,t){if(t.zoneamento20!==this.state.zoneamento20)for(var a=0;a<this.state.zoneamento20.length;a++)if(""!=this.state.zoneamento20[a].cultura&&"GRUPO I"==this.state.zoneamento20[a].ciclo&&"ARENOSO"==this.state.zoneamento20[a].solo){var n=this.state.zoneamento20[a].mesIni-1,i=this.state.zoneamento20[a].diaIni,o=this.state.zoneamento[n].dec01,l=this.state.zoneamento[n].dec02,r=this.state.zoneamento[n].dec03;1==i?this.setState(Object(M.a)({},o,20)):11==i?this.setState(Object(M.a)({},l,20)):21==i&&this.setState(Object(M.a)({},r,20))}if(t.zoneamento30!==this.state.zoneamento30)for(var c=0;c<this.state.zoneamento30.length;c++)if(""!=this.state.zoneamento30[c].cultura&&"GRUPO I"==this.state.zoneamento30[c].ciclo&&"ARENOSO"==this.state.zoneamento30[c].solo){var s=this.state.zoneamento30[c].mesIni-1,d=this.state.zoneamento30[c].diaIni,m=this.state.zoneamento[s].dec01,u=this.state.zoneamento[s].dec02,h=this.state.zoneamento[s].dec03;1==d?this.setState(Object(M.a)({},m,30)):11==d?this.setState(Object(M.a)({},u,30)):21==d&&this.setState(Object(M.a)({},h,30))}if(t.zoneamento40!==this.state.zoneamento40)for(var p=0;p<this.state.zoneamento40.length;p++)if(""!=this.state.zoneamento40[p].cultura&&"GRUPO I"==this.state.zoneamento40[p].ciclo&&"ARENOSO"==this.state.zoneamento40[p].solo){var E=this.state.zoneamento40[p].mesIni-1,g=this.state.zoneamento40[p].diaIni,f=this.state.zoneamento[E].dec01,b=this.state.zoneamento[E].dec02,v=this.state.zoneamento[E].dec03;1==g?this.setState(Object(M.a)({},f,40)):11==g?this.setState(Object(M.a)({},b,40)):21==g&&this.setState(Object(M.a)({},v,40))}}},{key:"render",value:function(){var e=this.state.zoneamento.map(function(e){var t="",a="",n="";return t=20==e.dec01?"#05973f":30==e.dec01?"#f8bc82":40==e.dec01?"#f3661f":"#a3a3a3",a=20==e.dec02?"#05973f":30==e.dec02?"#f8bc82":40==e.dec02?"#f3661f":"#a3a3a3",n=20==e.dec03?"#05973f":30==e.dec03?"#f8bc82":40==e.dec03?"#f3661f":"#a3a3a3",i.a.createElement(j.a,{style:{maxWidth:"300px",textAlign:"center",margin:"0px auto",borderLeft:"1px solid #0075a4",borderRight:"1px solid #0075a4"}},i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"150px",margin:"5px auto",padding:"0 25px",textAlign:"left"}},e.mes)," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",background:t,margin:"5px auto"}})," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",background:a,margin:"5px auto"}})," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",background:n,margin:"5px auto"}})," "))});return i.a.createElement("div",{className:"content zoning"},i.a.createElement("h2",null,"Zoneamento"),i.a.createElement(j.a,{style:{maxWidth:"300px",textAlign:"center",margin:"0px auto",background:"#0075a4",color:"#e5eff4"}},i.a.createElement(z.a,null," CACHOEIRA DE MINAS - MG ")),i.a.createElement(j.a,{style:{maxWidth:"300px",textAlign:"center",margin:"0px auto",background:"#0075a4",color:"#e5eff4"}},i.a.createElement(z.a,null," FEIJ\xc3O "),i.a.createElement(z.a,null," GRUPO I "),i.a.createElement(z.a,null," ARENOSO ")),i.a.createElement(j.a,{style:{maxWidth:"300px",textAlign:"center",margin:"0px auto",borderLeft:"1px solid #0075a4",borderRight:"1px solid #0075a4"}},i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"150px",padding:"5px 0"}},"m\xeas/dec\xeanios")," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",margin:"5px auto"}},"1")," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",margin:"5px auto"}},"2")," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",margin:"5px auto"}},"3")," ")),e,i.a.createElement(j.a,{style:{maxWidth:"300px",textAlign:"center",margin:"0px auto",borderLeft:"1px solid #0075a4",borderRight:"1px solid #0075a4"}},i.a.createElement("br",null)),i.a.createElement(j.a,{style:{maxWidth:"300px",textAlign:"center",margin:"0px auto",borderLeft:"1px solid #0075a4",borderRight:"1px solid #0075a4"}},i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"150px",margin:"0px auto",padding:"0 10px",textAlign:"left"}},"Legenda")," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",margin:"0px auto"}},"20%")," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",margin:"0px auto"}},"30%")," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",margin:"0px auto"}},"40%")," ")),i.a.createElement(j.a,{style:{maxWidth:"300px",textAlign:"center",margin:"0px auto",borderLeft:"1px solid #0075a4",borderRight:"1px solid #0075a4"}},i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"150px",margin:"0px auto",padding:"0 15px",textAlign:"left"}},"risco at\xe9")," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#05973f",margin:"0px auto"}})," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#f8bc82",margin:"0px auto"}})," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#f3661f",margin:"0px auto"}})," ")),i.a.createElement(j.a,{style:{maxWidth:"300px",textAlign:"center",margin:"0px auto",borderLeft:"1px solid #0075a4",borderRight:"1px solid #0075a4",borderBottom:"1px solid #0075a4"}},i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"250px",margin:"0px auto",padding:"0 15px",textAlign:"left"}},"sem indica\xe7\xe3o de plantio")," "),i.a.createElement(z.a,{style:{padding:"0"}}," ",i.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#a3a3a3",margin:"0px auto"}})," ")))}}]),t}(n.Component);C.b.add(N.d),C.b.add(N.g),C.b.add(N.h),C.b.add(N.c),C.b.add(N.a);var U=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement("div",null,i.a.createElement("ul",{className:"ul-router"},i.a.createElement("li",null,i.a.createElement(p.a,{to:"/"},i.a.createElement(R.a,{icon:"location-arrow"})," ")),i.a.createElement("li",null,i.a.createElement(p.a,{to:"/Culture"},i.a.createElement(R.a,{icon:"seedling"})," ")),i.a.createElement("li",null,i.a.createElement(p.a,{to:"/Cycle"},i.a.createElement(R.a,{icon:"clock"})," ")),i.a.createElement("li",null,i.a.createElement(p.a,{to:"/Texture"},i.a.createElement(R.a,{icon:"shapes"})," ")),i.a.createElement("li",null,i.a.createElement(p.a,{to:"/Zoning"},i.a.createElement(R.a,{icon:"list"})," "))),i.a.createElement(h.a,{exact:!0,path:"/",component:G}),i.a.createElement(h.a,{path:"/Culture",component:F}),i.a.createElement(h.a,{path:"/Cycle",component:P}),i.a.createElement(h.a,{path:"/Texture",component:T}),i.a.createElement(h.a,{path:"/Zoning",component:L})))}}]),t}(n.Component),H=(a(157),a(167)),D=a(166),W=a(165);C.b.add(N.b);var _=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={showDictionary:!1,showHistory:!1,showTutorial:!1,showAbout:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(H.a,{collapseOnSelect:!0,expand:"lg",fixed:"top"},i.a.createElement(H.a.Brand,{href:"#home"},i.a.createElement("img",{alt:"",src:"{logo}",width:"30",height:"30",className:"d-inline-block align-top"})," ZARC"),i.a.createElement(H.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(H.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(D.a,{className:"ml-auto"},i.a.createElement(D.a.Link,{onClick:function(){return e.setState({showDictionary:!0})}},"Dicion\xe1rio"),i.a.createElement(D.a.Link,{onClick:function(){return e.setState({showHistory:!0})}},"Hist\xf3rico"),i.a.createElement(D.a.Link,{onClick:function(){return e.setState({showTutorial:!0})}},"Tutorial"),i.a.createElement(D.a.Link,{onClick:function(){return e.setState({showAbout:!0})}},"Sobre")))),i.a.createElement(W.a,{show:this.state.showDictionary,onHide:function(){return e.setState({showDictionary:!1})},centered:!0},i.a.createElement(W.a.Header,{closeButton:!0},i.a.createElement(W.a.Title,null,"Dicion\xe1rio")),i.a.createElement(W.a.Body,null)),i.a.createElement(W.a,{show:this.state.showHistory,onHide:function(){return e.setState({showHistory:!1})},centered:!0},i.a.createElement(W.a.Header,{closeButton:!0},i.a.createElement(W.a.Title,null,"Hist\xf3rico")),i.a.createElement(W.a.Body,null)),i.a.createElement(W.a,{show:this.state.showTutorial,onHide:function(){return e.setState({showTutorial:!1})},centered:!0},i.a.createElement(W.a.Header,{closeButton:!0},i.a.createElement(W.a.Title,null,"Tutorial")),i.a.createElement(W.a.Body,null)),i.a.createElement(W.a,{show:this.state.showAbout,onHide:function(){return e.setState({showAbout:!1})},centered:!0},i.a.createElement(W.a.Header,{closeButton:!0},i.a.createElement(W.a.Title,null,"Sobre")),i.a.createElement(W.a.Body,null)))}}]),t}(n.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(i.a.createElement(_,null),document.getElementById("header")),l.a.render(i.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/primeiro-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/primeiro-app","/service-worker.js");J?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Z(t,e)})}}()},79:function(e,t,a){e.exports=a(161)},84:function(e,t,a){},86:function(e,t,a){}},[[79,2,1]]]);
//# sourceMappingURL=main.0d7fec40.chunk.js.map