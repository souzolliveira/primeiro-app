(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){},157:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(30),c=a.n(l),i=(a(84),a(15)),r=a(16),s=a(19),u=a(17),m=a(18),d=a(167),h=a(162),p=a(168),E=(a(86),a(13)),v=a(36),b=a.n(v),f=a(40),g=a.n(f),w=a(51),O=a.n(w),j=a(29),y=a.n(j),S=a(56),C=a.n(S),k=a(47),N=a.n(k),A=(a(106),a(23)),T=a(37),B=a(31);A.b.add(B.d);var R=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).handleShow=n.handleShow.bind(Object(E.a)(Object(E.a)(n))),n.handleClose=n.handleClose.bind(Object(E.a)(Object(E.a)(n))),n.handleSave=n.handleSave.bind(Object(E.a)(Object(E.a)(n))),n.selectUF=n.selectUF.bind(Object(E.a)(Object(E.a)(n))),n.selectedMunicipio=n.selectedMunicipio.bind(Object(E.a)(Object(E.a)(n))),n.state={show:!1,municipios:[],uf:"",numChildren:0,newFav:[{codigoIBGE:"",nome:"",uf:""}]},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleSave",value:function(e){this.setState({show:!1}),console.log(this.state.newFav)}},{key:"selectUF",value:function(e){this.setState({uf:e.target.value})}},{key:"componentDidUpdate",value:function(e){var t=this;e.uf!==this.state.uf&&b.a.get("https://api.cnptia.embrapa.br/agritec/v1/municipios?uf="+this.state.uf,{headers:{Authorization:"Bearer d4c07cde-dacc-3194-a535-37300f024951"}}).then(function(e){t.setState(function(){return{municipios:e.data.data}})})}},{key:"selectedMunicipio",value:function(e){var t=this.state.newFav.slice(0,this.state.numChildren+1),a=e.target.value.split(",");this.setState({newFav:t.concat([{codigoIBGE:a[0],nome:a[1],uf:a[2]}]),numChildren:this.state.numChildren+1})}},{key:"render",value:function(){var e=this,t=this.state.municipios.map(function(e){return o.a.createElement("option",{value:[e.codigoIBGE,e.nome,e.uf]},e.nome)}),a=this.state.newFav.map(function(){if(e.state.numChildren>0)return o.a.createElement(G,{value:e.state.newFav.codigoIBGE,nome:e.state.newFav.nome,uf:e.state.newFav.uf})});return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Localiza\xe7\xe3o"),o.a.createElement("p",null," selecione a localiza\xe7\xe3o desejada "),o.a.createElement("div",{className:"options"},o.a.createElement("p",null," atualmente em:"),o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:"opt-geolocation"}),o.a.createElement("label",{for:"opt-geolocation",className:"label"},"CAMPINAS - SP")))),o.a.createElement("p",null,o.a.createElement("div",{style:{width:"50%",float:"left",marginTop:"7px"}},"  favoritos: "),o.a.createElement("div",{style:{width:"50%",float:"right",textAlign:"right",paddingRight:"20px"}},o.a.createElement(O.a,{variant:"primary",onClick:this.handleShow,style:{background:"#0075a4",border:"1px solid #0075a4"}},o.a.createElement(T.a,{icon:"plus"})))),o.a.createElement("div",{className:""},a)),o.a.createElement(g.a,{show:this.state.show,onHide:this.handleClose,centered:!0},o.a.createElement(g.a.Header,{closeButton:!0},o.a.createElement(g.a.Title,null,"Adicionar nova localiza\xe7\xe3o")),o.a.createElement(g.a.Body,null,o.a.createElement(y.a,null,o.a.createElement(y.a.Group,{as:C.a},o.a.createElement(y.a.Label,{column:!0,sm:"3"},"UF:"),o.a.createElement(N.a,{sm:"9"},o.a.createElement(y.a.Control,{as:"select",onChange:this.selectUF},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"AC"},"Acre"),o.a.createElement("option",{value:"AL"},"Alagoas"),o.a.createElement("option",{value:"AP"},"Amap\xe1"),o.a.createElement("option",{value:"AM"},"Amazonas"),o.a.createElement("option",{value:"BA"},"Bahia"),o.a.createElement("option",{value:"CE"},"Cear\xe1"),o.a.createElement("option",{value:"DF"},"Distrito Federal"),o.a.createElement("option",{value:"ES"},"Esp\xedrito Santo"),o.a.createElement("option",{value:"GO"},"Goi\xe1s"),o.a.createElement("option",{value:"MA"},"Maranh\xe3o"),o.a.createElement("option",{value:"MT"},"Mato Grosso"),o.a.createElement("option",{value:"MS"},"Mato Grosso do Sul"),o.a.createElement("option",{value:"MG"},"Minas Gerais"),o.a.createElement("option",{value:"PA"},"Par\xe1"),o.a.createElement("option",{value:"PB"},"Para\xedba"),o.a.createElement("option",{value:"PR"},"Paran\xe1"),o.a.createElement("option",{value:"PE"},"Pernambuco"),o.a.createElement("option",{value:"PI"},"Piau\xed"),o.a.createElement("option",{value:"RJ"},"Rio de Janeiro"),o.a.createElement("option",{value:"RN"},"Rio Grande do Norte"),o.a.createElement("option",{value:"RS"},"Rio Grande do Sul"),o.a.createElement("option",{value:"RO"},"Rond\xf4nia"),o.a.createElement("option",{value:"RR"},"Roraima"),o.a.createElement("option",{value:"SC"},"Santa Catarina"),o.a.createElement("option",{value:"SP"},"S\xe3o Paulo"),o.a.createElement("option",{value:"SE"},"Sergipe"),o.a.createElement("option",{value:"TO"},"Tocantins")))),o.a.createElement(y.a.Group,{as:C.a},o.a.createElement(y.a.Label,{column:!0,sm:"3"},"Cidade:"),o.a.createElement(N.a,{sm:"9"},o.a.createElement(y.a.Control,{as:"select",onChange:this.selectedMunicipio},t))))),o.a.createElement(g.a.Footer,null,o.a.createElement(O.a,{variant:"secondary",onClick:this.handleClose},"Fechar"),o.a.createElement(O.a,{variant:"primary",onClick:this.handleSave},"Salvar"))))}}]),t}(n.Component),G=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.value}),o.a.createElement("label",{for:e.value,className:"label"},e.nome," - ",e.uf))))},x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={culturas:[{id:61,cultura:"ARROZ"},{id:62,cultura:"FEIJ\xc3O"},{id:56,cultura:"MILHO"},{id:60,cultura:"SOJA"},{id:32533,cultura:"TRIGO"}]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.cnptia.embrapa.br/agritec/v1/culturas",{headers:{Authorization:"Bearer d4c07cde-dacc-3194-a535-37300f024951"}}).then(function(t){e.setState(function(){return{culturas:t.data.data}})})}},{key:"render",value:function(){var e=this.state.culturas.map(function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.id}),o.a.createElement("label",{for:e.id,className:"label"},e.cultura))))});return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Cultura"),o.a.createElement("p",null," selecione a cultura desejada "),o.a.createElement("div",{className:"options"},e))}}]),t}(n.Component),P=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={texturas:[{id:1,textura:"ARENOSO"},{id:2,textura:"ARGILOSO"},{id:3,textura:"TEXTURA M\xc9DIA"}]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.texturas.map(function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.id}),o.a.createElement("label",{for:e.id,className:"label"},e.textura))))});return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Textura"),o.a.createElement("p",null," selecione a textura do solo da propriedade "),o.a.createElement("div",{className:"options"},e))}}]),t}(n.Component),F=a(75),H=a.n(F),M=a(76),L=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).getLocal=function(e){e.preventDefault(),b.a.get("https://api.opencagedata.com/geocode/v1/json?q="+e.target.coords.value+"&key=8880e42806424cd7b08aa83ee91fe733").then(function(e){n.setState(function(){return{local:e.data.results[0].formatted}})});var t=n.state.local.split(",");n.setState({cidade:t[2],cep:t[3]})},n.getLocal=n.getLocal.bind(Object(E.a)(Object(E.a)(n))),n.getCep=n.getCep.bind(Object(E.a)(Object(E.a)(n))),n.state={local:"",coords:"",cidade:"",cep:"",ibge:""},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"getCep",value:function(){var e=this,t=H()(this.state.cep);this.setState({cep:t}),b.a.get("https://viacep.com.br/ws/"+this.state.cep+"/json/").then(function(t){e.setState(function(){return{ibge:t.data.ibge}})}),console.log(this.state.ibge)}},{key:"render",value:function(){return this.props.isGeolocationAvailable?this.props.isGeolocationEnabled?this.props.coords?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(y.a,{onSubmit:this.getLocal},o.a.createElement("input",{type:"text",name:"coords",value:this.props.coords.latitude+"+"+this.props.coords.longitude}),o.a.createElement("button",{type:"submit"},"Procurar")),o.a.createElement("button",{onClick:this.getCep},"CEP"))):o.a.createElement("div",null,"Getting the location data\u2026 "):o.a.createElement("div",null,"Geolocation is not enabled"):o.a.createElement("div",null,"Your browser does not support Geolocation")}}]),t}(o.a.Component),D=Object(M.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(L),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Zoneamento"),o.a.createElement(D,null))}}]),t}(n.Component);A.b.add(B.c),A.b.add(B.e),A.b.add(B.f),A.b.add(B.b);var U=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement("ul",{className:"ul-router"},o.a.createElement("li",null,o.a.createElement(p.a,{to:"/"},o.a.createElement(T.a,{icon:"location-arrow"})," ")),o.a.createElement("li",null,o.a.createElement(p.a,{to:"/Culture"},o.a.createElement(T.a,{icon:"seedling"})," ")),o.a.createElement("li",null,o.a.createElement(p.a,{to:"/Texture"},o.a.createElement(T.a,{icon:"shapes"})," ")),o.a.createElement("li",null,o.a.createElement(p.a,{to:"/Zoning"},o.a.createElement(T.a,{icon:"list"})," "))),o.a.createElement(h.a,{exact:!0,path:"/",component:R}),o.a.createElement(h.a,{path:"/Culture",component:x}),o.a.createElement(h.a,{path:"/Texture",component:P}),o.a.createElement(h.a,{path:"/Zoning",component:I})))}}]),t}(n.Component),_=(a(157),a(166)),W=a(165),z=a(164);A.b.add(B.a);var J=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={showDictionary:!1,showHistory:!1,showTutorial:!1,showAbout:!1},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(_.a,{collapseOnSelect:!0,expand:"lg",fixed:"top"},o.a.createElement(_.a.Brand,{href:"#home"},o.a.createElement("img",{alt:"",src:"{logo}",width:"30",height:"30",className:"d-inline-block align-top"})," ZARC"),o.a.createElement(_.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(_.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(W.a,{className:"ml-auto"},o.a.createElement(W.a.Link,{onClick:function(){return e.setState({showDictionary:!0})}},"Dicion\xe1rio"),o.a.createElement(W.a.Link,{onClick:function(){return e.setState({showHistory:!0})}},"Hist\xf3rico"),o.a.createElement(W.a.Link,{onClick:function(){return e.setState({showTutorial:!0})}},"Tutorial"),o.a.createElement(W.a.Link,{onClick:function(){return e.setState({showAbout:!0})}},"Sobre")))),o.a.createElement(z.a,{show:this.state.showDictionary,onHide:function(){return e.setState({showDictionary:!1})},centered:!0},o.a.createElement(z.a.Header,{closeButton:!0},o.a.createElement(z.a.Title,null,"Dicion\xe1rio")),o.a.createElement(z.a.Body,null)),o.a.createElement(z.a,{show:this.state.showHistory,onHide:function(){return e.setState({showHistory:!1})},centered:!0},o.a.createElement(z.a.Header,{closeButton:!0},o.a.createElement(z.a.Title,null,"Hist\xf3rico")),o.a.createElement(z.a.Body,null)),o.a.createElement(z.a,{show:this.state.showTutorial,onHide:function(){return e.setState({showTutorial:!1})},centered:!0},o.a.createElement(z.a.Header,{closeButton:!0},o.a.createElement(z.a.Title,null,"Tutorial")),o.a.createElement(z.a.Body,null)),o.a.createElement(z.a,{show:this.state.showAbout,onHide:function(){return e.setState({showAbout:!1})},centered:!0},o.a.createElement(z.a.Header,{closeButton:!0},o.a.createElement(z.a.Title,null,"Sobre")),o.a.createElement(z.a.Body,null)))}}]),t}(n.Component),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(J,null),document.getElementById("header")),c.a.render(o.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/primeiro-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/primeiro-app","/service-worker.js");Z?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):q(t,e)})}}()},79:function(e,t,a){e.exports=a(161)},84:function(e,t,a){},86:function(e,t,a){}},[[79,2,1]]]);
//# sourceMappingURL=main.9e6ccc29.chunk.js.map