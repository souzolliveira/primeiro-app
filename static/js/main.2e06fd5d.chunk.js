(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(30),l=a.n(i),c=(a(96),a(32)),r=a(33),s=a(38),u=a(34),m=a(37),d=a(40),h=a(43),p=(a(97),a(98),a(177)),E=a(176),f=a(175),g=a(174),v=a(12),b=a(17);v.b.add(b.b);var y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={showDictionary:!1,showHistory:!1,showTutorial:!1,showAbout:!1},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",fixed:"top"},o.a.createElement(p.a.Brand,null," ZARC"),o.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(E.a,{className:"ml-auto"},o.a.createElement(E.a.Link,{onClick:function(){return e.setState({showDictionary:!0})}},"Dicion\xe1rio"),o.a.createElement(E.a.Link,{onClick:function(){return e.setState({showHistory:!0})}},"Hist\xf3rico"),o.a.createElement(E.a.Link,{onClick:function(){return e.setState({showTutorial:!0})}},"Tutorial"),o.a.createElement(E.a.Link,{onClick:function(){return e.setState({showAbout:!0})}},"Sobre")))),o.a.createElement(f.a,{show:this.state.showDictionary,onHide:function(){return e.setState({showDictionary:!1})},centered:!0},o.a.createElement(f.a.Header,{closeButton:!0},o.a.createElement(f.a.Title,null,"Dicion\xe1rio")),o.a.createElement(f.a.Body,null,o.a.createElement(g.a,null,o.a.createElement("label",null,"GRUPO I: ")),o.a.createElement(g.a,null,o.a.createElement("label",null,"GRUPO II: ")),o.a.createElement(g.a,null,o.a.createElement("label",null,"GRUPO III: ")),o.a.createElement(g.a,null,o.a.createElement("label",null,"PERENE: ")),o.a.createElement(g.a,null,o.a.createElement("label",null,"ARENOSO: ")),o.a.createElement(g.a,null,o.a.createElement("label",null,"ARGILOSO: ")),o.a.createElement(g.a,null,o.a.createElement("label",null,"TEXTURA M\xc9DIA: ")))),o.a.createElement(f.a,{show:this.state.showHistory,onHide:function(){return e.setState({showHistory:!1})},centered:!0},o.a.createElement(f.a.Header,{closeButton:!0},o.a.createElement(f.a.Title,null,"Hist\xf3rico")),o.a.createElement(f.a.Body,null)),o.a.createElement(f.a,{show:this.state.showTutorial,onHide:function(){return e.setState({showTutorial:!1})},centered:!0},o.a.createElement(f.a.Header,{closeButton:!0},o.a.createElement(f.a.Title,null,"Tutorial")),o.a.createElement(f.a.Body,null)),o.a.createElement(f.a,{show:this.state.showAbout,onHide:function(){return e.setState({showAbout:!1})},centered:!0},o.a.createElement(f.a.Header,{closeButton:!0},o.a.createElement(f.a.Title,null,"Sobre")),o.a.createElement(f.a.Body,null)))}}]),t}(n.Component),x=a(13),w=a(26),I=a(24),N=a.n(I),S=a(47),O=a.n(S),G=a(50),C=a.n(G),A=a(29),k=a.n(A),z=a(21),R=a.n(z),B=a(7),j=a.n(B),F=a(87),D=a.n(F),M=(a(143),a(145),a(28)),T=a(20),P=a(88),U=Object(P.a)(function(e,t){switch(t.type){case"setGeolocation":return Object(T.a)({},e,{geolocationNome:t.geolocationNome,geolocationIBGE:t.geolocationIBGE});case"addMunicipio":return Object(T.a)({},e,{favoritos:t.favoritos});case"count":return Object(T.a)({},e,{count:e.count+1});case"setMunicipio":return Object(T.a)({},e,{municipioNome:t.municipioNome,codigoIBGE:t.codigoIBGE});case"setCultura":return Object(T.a)({},e,{culturaNome:t.culturaNome,culturaID:t.culturaID});case"addCultura":return Object(T.a)({},e,{culturas:t.culturas});case"setCiclo":return Object(T.a)({},e,{cicloNome:t.cicloNome,cicloID:t.cicloID});case"setTextura":return Object(T.a)({},e,{texturaNome:t.texturaNome,texturaID:t.texturaID});default:return e}},{geolocationNome:"",geolocationIBGE:"",favoritos:[{codigoIBGE:"",nome:"",uf:""}],count:0,municipioNome:"",codigoIBGE:"",culturaNome:"",culturaID:"",culturas:[{id:"",cultura:""}],cicloNome:"",cicloID:"",texturaNome:"",texturaID:""}),H=U.GlobalStateProvider,L=U.dispatch,_=U.useGlobalState;v.b.add(b.f),v.b.add(b.e);var W=function(e){return L({favoritos:e,type:"addMunicipio"})},J=function(){return L({type:"count"})};var Z=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).handleShow=n.handleShow.bind(Object(x.a)(n)),n.handleClose=n.handleClose.bind(Object(x.a)(n)),n.handleSave=n.handleSave.bind(Object(x.a)(n)),n.getUF=n.getUF.bind(Object(x.a)(n)),n.getMunicipio=n.getMunicipio.bind(Object(x.a)(n)),n.getGeolocation=n.getGeolocation.bind(Object(x.a)(n)),n.setMunicipio=n.setMunicipio.bind(Object(x.a)(n)),n.state={show:!1,municipios:[],uf:"",numChildren:0,newFav:{codigoIBGE:"",nome:"",uf:""},favoritos:[{codigoIBGE:"",nome:"",uf:""}],latitude:"",longitude:"",geolocal:"",cidade:"",cep:"",codIBGE:"",municipio:{codigoIBGE:"",nome:"",uf:""}},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleSave",value:function(){if(this.setState({show:!1}),this.props.count>this.state.numChildren){var e=this.props.favoritos.concat([{codigoIBGE:this.state.newFav.codigoIBGE,nome:this.state.newFav.nome,uf:this.state.newFav.uf}]);W(e),this.setState({numChildren:this.props.count+1,favoritos:e}),J()}else{if(0==this.state.numChildren){var t=[{codigoIBGE:this.state.newFav.codigoIBGE,nome:this.state.newFav.nome,uf:this.state.newFav.uf}];W(t)}else{var a=this.state.favoritos.concat([{codigoIBGE:this.state.newFav.codigoIBGE,nome:this.state.newFav.nome,uf:this.state.newFav.uf}]);W(a)}var n=this.state.favoritos.slice(0,this.state.numChildren+1);0==this.state.numChildren?this.setState({favoritos:[{codigoIBGE:this.state.newFav.codigoIBGE,nome:this.state.newFav.nome,uf:this.state.newFav.uf}],numChildren:this.state.numChildren+1}):this.setState({favoritos:n.concat([{codigoIBGE:this.state.newFav.codigoIBGE,nome:this.state.newFav.nome,uf:this.state.newFav.uf}]),numChildren:this.state.numChildren+1}),J()}}},{key:"getUF",value:function(e){this.setState({uf:e.target.value})}},{key:"getMunicipio",value:function(e){var t=e.target.value.split(",");this.setState({newFav:{codigoIBGE:t[0],nome:t[1],uf:t[2]}})}},{key:"getGeolocation",value:function(e){e.preventDefault(),this.setState({latitude:e.target.latitude.value,longitude:e.target.longitude.value})}},{key:"setMunicipio",value:function(e){var t,a,n=e.target.value.split(",");this.setState({municipio:{codigoIBGE:n[0],nome:n[1],uf:n[2]}}),t=this.state.municipio.nome,a=this.state.municipio.codigoIBGE,L({municipioNome:t,municipioIBGE:a,type:"setMunicipio"})}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(t.uf!==this.state.uf&&N.a.get("https://api.cnptia.embrapa.br/agritec/v1/municipios?uf="+this.state.uf,{headers:{Authorization:"Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548"}}).then(function(e){a.setState({municipios:e.data.data})}),t.latitude!==this.state.latitude&&""!==this.state.latitude&&t.longitude!==this.state.longitude&&""!==this.state.longitude&&N.a.get("https://api.opencagedata.com/geocode/v1/json?q="+this.state.latitude+"+"+this.state.longitude+"&key=8880e42806424cd7b08aa83ee91fe733").then(function(e){a.setState({geolocal:e.data.results[0].formatted})}),t.geolocal!==this.state.geolocal&&""!==this.state.geolocal)for(var n=this.state.geolocal.split(","),o=0;o<n.length;o++){var i=D()(n[o]);if(9==i.length){var l=i.split("-");2==l.length&&5==l[0].length&&3==l[1].length&&this.setState({cep:i})}}t.cep!==this.state.cep&&""!==this.state.cep&&N.a.get("https://viacep.com.br/ws/"+this.state.cep+"/json/").then(function(e){a.setState({codIBGE:e.data.ibge,cidade:e.data.localidade+" - "+e.data.uf})})}},{key:"render",value:function(){var e=this.state.municipios.map(function(e){return o.a.createElement("option",{value:[e.codigoIBGE,e.nome,e.uf]},e.nome)}),t=this.props.favoritos,a=this.props.count,n=t.map(function(e){if(a>0)return o.a.createElement(X,{codigo:e.codigoIBGE,nome:e.nome,uf:e.uf})}),i=this.state.cidade,l=this.state.codIBGE;return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Localiza\xe7\xe3o"),o.a.createElement("p",null," selecione a localiza\xe7\xe3o desejada "),o.a.createElement("div",{className:"options",onChange:this.setMunicipio},o.a.createElement("p",null,o.a.createElement("div",{style:{width:"50%",float:"left",marginTop:"7px"}},"  atualmente em: "),o.a.createElement("div",{style:{width:"50%",float:"right",textAlign:"right",paddingRight:"20px"}},o.a.createElement(k.a,{onSubmit:this.getGeolocation},o.a.createElement("input",{type:"hidden",name:"latitude",value:this.props.coords&&this.props.coords.latitude}),o.a.createElement("input",{type:"hidden",name:"longitude",value:this.props.coords&&this.props.coords.longitude}),o.a.createElement(C.a,{type:"submit",variant:"primary",style:{background:"#0075a4",border:"1px solid #0075a4"}},o.a.createElement(M.a,{icon:"map-marker-alt"}))))),o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:l,value:l+","+i}),o.a.createElement("label",{for:l,className:"label"},i)))),o.a.createElement("p",null,o.a.createElement("div",{style:{width:"50%",float:"left",marginTop:"7px"}},"  favoritos: "),o.a.createElement("div",{style:{width:"50%",float:"right",textAlign:"right",paddingRight:"20px"}},o.a.createElement(C.a,{variant:"primary",onClick:this.handleShow,style:{background:"#0075a4",border:"1px solid #0075a4"}},o.a.createElement(M.a,{icon:"plus"})))),o.a.createElement("div",null,n)),o.a.createElement(O.a,{show:this.state.show,onHide:this.handleClose,centered:!0},o.a.createElement(k.a,null,o.a.createElement(O.a.Header,{closeButton:!0},o.a.createElement(O.a.Title,null,"Adicionar nova localiza\xe7\xe3o")),o.a.createElement(O.a.Body,null,o.a.createElement(k.a.Group,{as:R.a},o.a.createElement(k.a.Label,{column:!0,sm:"3"},"UF:"),o.a.createElement(j.a,{sm:"9"},o.a.createElement(k.a.Control,{as:"select",onChange:this.getUF,name:"uf"},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"AC"},"Acre"),o.a.createElement("option",{value:"AL"},"Alagoas"),o.a.createElement("option",{value:"AP"},"Amap\xe1"),o.a.createElement("option",{value:"AM"},"Amazonas"),o.a.createElement("option",{value:"BA"},"Bahia"),o.a.createElement("option",{value:"CE"},"Cear\xe1"),o.a.createElement("option",{value:"DF"},"Distrito Federal"),o.a.createElement("option",{value:"ES"},"Esp\xedrito Santo"),o.a.createElement("option",{value:"GO"},"Goi\xe1s"),o.a.createElement("option",{value:"MA"},"Maranh\xe3o"),o.a.createElement("option",{value:"MT"},"Mato Grosso"),o.a.createElement("option",{value:"MS"},"Mato Grosso do Sul"),o.a.createElement("option",{value:"MG"},"Minas Gerais"),o.a.createElement("option",{value:"PA"},"Par\xe1"),o.a.createElement("option",{value:"PB"},"Para\xedba"),o.a.createElement("option",{value:"PR"},"Paran\xe1"),o.a.createElement("option",{value:"PE"},"Pernambuco"),o.a.createElement("option",{value:"PI"},"Piau\xed"),o.a.createElement("option",{value:"RJ"},"Rio de Janeiro"),o.a.createElement("option",{value:"RN"},"Rio Grande do Norte"),o.a.createElement("option",{value:"RS"},"Rio Grande do Sul"),o.a.createElement("option",{value:"RO"},"Rond\xf4nia"),o.a.createElement("option",{value:"RR"},"Roraima"),o.a.createElement("option",{value:"SC"},"Santa Catarina"),o.a.createElement("option",{value:"SP"},"S\xe3o Paulo"),o.a.createElement("option",{value:"SE"},"Sergipe"),o.a.createElement("option",{value:"TO"},"Tocantins")))),o.a.createElement(k.a.Group,{as:R.a},o.a.createElement(k.a.Label,{column:!0,sm:"3"},"Munic\xedpio:"),o.a.createElement(j.a,{sm:"9"},o.a.createElement(k.a.Control,{as:"select",onChange:this.getMunicipio},o.a.createElement("option",{value:""}),e)))),o.a.createElement(O.a.Footer,null,o.a.createElement(C.a,{variant:"secondary",onClick:this.handleClose},"Fechar"),o.a.createElement(C.a,{variant:"primary",onClick:this.handleSave},"Salvar")))))}}]),t}(n.Component),X=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.codigo,value:e.codigo+","+e.nome+","+e.uf}),o.a.createElement("label",{for:e.codigo,className:"label"},e.nome," - ",e.uf))))},q=function(){var e=_("favoritos"),t=Object(w.a)(e,1)[0],a=_("count"),n=Object(w.a)(a,1)[0];return o.a.createElement(Z,{favoritos:t,count:n})},$=function(e){return L({culturaNome:e.target.value,culturaID:e.target.id,type:"setCultura"})},K=function(e){return L({culturas:e,type:"addCultura"})};function Q(){Object(n.useEffect)(function(){N.a.get("https://api.cnptia.embrapa.br/agritec/v1/culturas",{headers:{Authorization:"Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548"}}).then(function(e){K(e.data.data)})});var e=_("culturas"),t=_("culturaID"),a=e[0].map(function(e){if(0!=e.id)return o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.id,value:e.cultura,checked:t[0]==e.id}),o.a.createElement("label",{for:e.id,className:"label"},e.cultura))))});return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Cultura"),o.a.createElement("p",null," selecione a cultura desejada "),o.a.createElement("div",{className:"options",onChange:$},a))}var V=function(e){return L({cicloNome:e.target.value,cicloID:e.target.id,type:"setCiclo"})};function Y(){var e=_("cicloID"),t=Object(w.a)(e,1)[0],a=[0,0,0];return 1==t?a[0]=1:2==t?a[1]=1:3==t&&(a[2]=1),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Ciclo"),o.a.createElement("p",null," selecione o ciclo da cultura "),o.a.createElement("div",{className:"options",onChange:V},o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:"1",value:"GRUPO I",checked:a[0]}),o.a.createElement("label",{for:"1",className:"label"},"GRUPO I")))),o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:"2",value:"GRUPO II",checked:a[1]}),o.a.createElement("label",{for:"2",className:"label"},"GRUPO II")))),o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:"3",value:"GRUPO III",checked:a[2]}),o.a.createElement("label",{for:"3",className:"label"},"GRUPO III"))))))}var ee=function(e){return L({texturaNome:e.target.value,texturaID:e.target.id,type:"setTextura"})};function te(){var e=_("texturaID"),t=Object(w.a)(e,1)[0],a=[0,0,0];return 1==t?a[0]=1:2==t?a[1]=1:3==t&&(a[2]=1),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Textura"),o.a.createElement("p",null," selecione a textura do solo do plantio "),o.a.createElement("div",{className:"options",onChange:ee},o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:"1",value:"ARENOSO",checked:a[0]}),o.a.createElement("label",{for:"1",className:"label"},"ARENOSO")))),o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:"2",value:"ARGILOSO",checked:a[1]}),o.a.createElement("label",{for:"2",className:"label"},"ARGILOSO")))),o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:"3",value:"TEXTURA M\xc9DIA",checked:a[2]}),o.a.createElement("label",{for:"3",className:"label"},"TEXTURA M\xc9DIA"))))))}var ae=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).state={municipioNome:"",codigoIBGE:"",culturaNome:"",culturaID:"",cicloNome:"",cicloID:"",texturaNome:"",texturaID:"",zoneamento:[{mes:"Janeiro",dec01:0,dec02:0,dec03:0},{mes:"Fevereiro",dec01:0,dec02:0,dec03:0},{mes:"Mar\xe7o",dec01:0,dec02:0,dec03:0},{mes:"Abril",dec01:0,dec02:0,dec03:0},{mes:"Maio",dec01:0,dec02:0,dec03:0},{mes:"Junho",dec01:0,dec02:0,dec03:0},{mes:"Julho",dec01:0,dec02:0,dec03:0},{mes:"Agosto",dec01:0,dec02:0,dec03:0},{mes:"Setembro",dec01:0,dec02:0,dec03:0},{mes:"Outubro",dec01:0,dec02:0,dec03:0},{mes:"Novembro",dec01:0,dec02:0,dec03:0},{mes:"Dezembro",dec01:0,dec02:0,dec03:0}],zoneamento20:[{uf:"",cultura:"",ciclo:"",solo:"",diaIni:0,mesIni:0,diaFim:0,mesFim:0,safraIni:0,safraFim:0,risco:0}],zoneamento30:[{uf:"",cultura:"",ciclo:"",solo:"",diaIni:0,mesIni:0,diaFim:0,mesFim:0,safraIni:0,safraFim:0,risco:0}],zoneamento40:[{uf:"",cultura:"",ciclo:"",solo:"",diaIni:0,mesIni:0,diaFim:0,mesFim:0,safraIni:0,safraFim:0,risco:0}]},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura=56&codigoIBGE=3109709",{headers:{Authorization:"Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548"}}).then(function(t){e.setState({zoneamento20:t.data.data})}),N.a.get("https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura=56&codigoIBGE=3109709&risco=30",{headers:{Authorization:"Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548"}}).then(function(t){e.setState({zoneamento30:t.data.data})}),N.a.get("https://api.cnptia.embrapa.br/agritec/v1/zoneamento?idCultura=56&codigoIBGE=3109709&risco=40",{headers:{Authorization:"Bearer f23a7414-2096-3cc4-93df-1f9b8cdcc548"}}).then(function(t){e.setState({zoneamento40:t.data.data})})}},{key:"componentDidUpdate",value:function(e,t){if(t.zoneamento20!==this.state.zoneamento20)for(var a=0;a<this.state.zoneamento20.length;a++)if(""!=this.state.zoneamento20[a].cultura&&"GRUPO I"==this.state.zoneamento20[a].ciclo&&"ARENOSO"==this.state.zoneamento20[a].solo){var n=this.state.zoneamento20[a].mesIni-1,o=this.state.zoneamento20[a].diaIni,i=Object.assign({},this.state);1==o?(i.zoneamento[n].dec01=20,this.setState({newState:i})):11==o?(i.zoneamento[n].dec02=20,this.setState({newState:i})):21==o&&(i.zoneamento[n].dec03=20,this.setState({newState:i}))}if(t.zoneamento30!==this.state.zoneamento30)for(var l=0;l<this.state.zoneamento30.length;l++)if(""!=this.state.zoneamento30[l].cultura&&"GRUPO I"==this.state.zoneamento30[l].ciclo&&"ARENOSO"==this.state.zoneamento30[l].solo){var c=this.state.zoneamento30[l].mesIni-1,r=this.state.zoneamento30[l].diaIni,s=Object.assign({},this.state);1==r?(s.zoneamento[c].dec01=30,this.setState({newState:s})):11==r?(s.zoneamento[c].dec02=30,this.setState({newState:s})):21==r&&(s.zoneamento[c].dec03=30,this.setState({newState:s}))}if(t.zoneamento40!==this.state.zoneamento40)for(var u=0;u<this.state.zoneamento40.length;u++)if(""!=this.state.zoneamento40[u].cultura&&"GRUPO I"==this.state.zoneamento40[u].ciclo&&"ARENOSO"==this.state.zoneamento40[u].solo){var m=this.state.zoneamento40[u].mesIni-1,d=this.state.zoneamento40[u].diaIni,h=Object.assign({},this.state);1==d?(h.zoneamento[m].dec01=40,this.setState({newState:h})):11==d?(h.zoneamento[m].dec02=40,this.setState({newState:h})):21==d&&(h.zoneamento[m].dec03=40,this.setState({newState:h}))}}},{key:"render",value:function(){var e=this.state.zoneamento.map(function(e){var t="",a="",n="";return t=20==e.dec01?"#05973f":30==e.dec01?"#f8bc82":40==e.dec01?"#f3661f":"#a3a3a3",a=20==e.dec02?"#05973f":30==e.dec02?"#f8bc82":40==e.dec02?"#f3661f":"#a3a3a3",n=20==e.dec03?"#05973f":30==e.dec03?"#f8bc82":40==e.dec03?"#f3661f":"#a3a3a3",o.a.createElement(R.a,{style:{maxWidth:"400px",textAlign:"center",margin:"0px auto"}},o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"150px",margin:"5px auto",padding:"0 25px",textAlign:"left"}},e.mes)," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",background:t,margin:"5px auto"}})," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",background:a,margin:"5px auto"}})," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",background:n,margin:"5px auto"}})," "))});return o.a.createElement("div",{className:"content zoning"},o.a.createElement(R.a,{style:{maxWidth:"600px",textAlign:"center",margin:"0px auto",background:"#0075a4",color:"#e5eff4"}},o.a.createElement(j.a,null," CACHOEIRA DE MINAS - MG ")),o.a.createElement(R.a,{style:{maxWidth:"600px",textAlign:"center",margin:"0px auto",background:"#0075a4",color:"#e5eff4"}},o.a.createElement(j.a,null," MILHO "),o.a.createElement(j.a,null," GRUPO I "),o.a.createElement(j.a,null," ARENOSO ")),o.a.createElement(R.a,{style:{maxWidth:"400px",textAlign:"center",margin:"0px auto"}},o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"150px",padding:"5px 0"}},"m\xeas/dec\xeanios")," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",margin:"5px auto"}},"1")," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",margin:"5px auto"}},"2")," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"30px",height:"30px",borderRadius:"50%",margin:"5px auto"}},"3")," ")),e,o.a.createElement(R.a,{style:{maxWidth:"600px",textAlign:"center",margin:"0px auto"}},o.a.createElement("br",null)),o.a.createElement(R.a,{style:{maxWidth:"600px",textAlign:"center",margin:"0px auto"}},o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"150px",margin:"0px auto",padding:"0 10px",textAlign:"left"}},"Legenda")," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#05973f",margin:"0px auto"}})," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#f8bc82",margin:"0px auto"}})," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#f3661f",margin:"0px auto"}})," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#a3a3a3",margin:"0px auto"}})," ")),o.a.createElement(R.a,{style:{maxWidth:"600px",textAlign:"center",margin:"0px auto"}},o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{width:"150px",margin:"0px auto",textAlign:"center"}},"risco at\xe9")," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{margin:"0px auto"}},"20%")," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{margin:"0px auto"}},"30%")," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{margin:"0px auto"}},"40%")," "),o.a.createElement(j.a,{style:{padding:"0"}}," ",o.a.createElement("div",{style:{margin:"0px auto"}},"sem dados")," ")))}}]),t}(n.Component);v.b.add(b.d),v.b.add(b.g),v.b.add(b.h),v.b.add(b.c),v.b.add(b.a);var ne=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null,o.a.createElement(y,null),o.a.createElement(d.a,null,o.a.createElement("ul",{className:"ul-router"},o.a.createElement("li",null,o.a.createElement(d.b,{to:"/Location",activeStyle:{color:"#fff"}},o.a.createElement(M.a,{icon:"location-arrow"}),o.a.createElement("label",null,"Localiza\xe7\xe3o"))),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/Culture",activeStyle:{color:"#fff"}},o.a.createElement(M.a,{icon:"seedling"}),o.a.createElement("label",null,"Culturas"))),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/Cycle",activeStyle:{color:"#fff"}},o.a.createElement(M.a,{icon:"clock"}),o.a.createElement("label",null,"Ciclo"))),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/Texture",activeStyle:{color:"#fff"}},o.a.createElement(M.a,{icon:"shapes"}),o.a.createElement("label",null,"Textura"))),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/Zoning",activeStyle:{color:"#fff"}},o.a.createElement(M.a,{icon:"list"}),o.a.createElement("label",null,"Zoneamento")))),o.a.createElement(h.a,{exact:!0,path:"/",component:q}),o.a.createElement(h.a,{path:"/Location",component:q}),o.a.createElement(h.a,{path:"/Culture",component:Q}),o.a.createElement(h.a,{path:"/Cycle",component:Y}),o.a.createElement(h.a,{path:"/Texture",component:te}),o.a.createElement(h.a,{path:"/Zoning",component:ae}))))}}]),t}(n.Component),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(ne,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/primeiro-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/primeiro-app","/service-worker.js");oe?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ie(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ie(t,e)})}}()},91:function(e,t,a){e.exports=a(171)},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.2e06fd5d.chunk.js.map