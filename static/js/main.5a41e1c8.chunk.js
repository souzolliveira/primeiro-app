(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},156:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(30),i=a.n(l),r=(a(83),a(18)),c=a(19),s=a(22),u=a(20),m=a(21),d=a(166),h=a(161),p=a(167),E=(a(85),a(14)),v=a(43),f=a.n(v),b=a(39),g=a.n(b),w=a(45),O=a.n(w),y=a(32),S=a.n(y),j=a(57),C=a.n(j),k=a(48),N=a.n(k),A=a(55),T=(a(108),a(16)),B=a(35),R=a(28);T.b.add(R.e),T.b.add(R.d);var x=function(e){function t(e,a){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).handleShow=n.handleShow.bind(Object(E.a)(Object(E.a)(n))),n.handleClose=n.handleClose.bind(Object(E.a)(Object(E.a)(n))),n.handleSave=n.handleSave.bind(Object(E.a)(Object(E.a)(n))),n.getUF=n.getUF.bind(Object(E.a)(Object(E.a)(n))),n.getMunicipio=n.getMunicipio.bind(Object(E.a)(Object(E.a)(n))),n.getGeolocation=n.getGeolocation.bind(Object(E.a)(Object(E.a)(n))),n.state={show:!1,municipios:[],uf:"",numChildren:0,newFav:[{codigoIBGE:"",nome:"",uf:""}],latitude:"",longitude:"",local:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleSave",value:function(e){this.setState({show:!1}),console.log(this.state.newFav),console.log(this.state.numChildren)}},{key:"getUF",value:function(e){this.setState({uf:e.target.value})}},{key:"getMunicipio",value:function(e){var t=this.state.newFav.slice(0,this.state.numChildren+1),a=e.target.value.split(",");this.state.newFav==[]?this.setState({newFav:[{codigoIBGE:a[0],nome:a[1],uf:a[2]}],numChildren:this.state.numChildren+1}):this.setState({newFav:t.concat([{codigoIBGE:a[0],nome:a[1],uf:a[2]}]),numChildren:this.state.numChildren+1})}},{key:"getGeolocation",value:function(e){e.preventDefault(),this.setState({latitude:e.target.latitude.value,longitude:e.target.longitude.value})}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.uf!==this.state.uf&&f.a.get("https://api.cnptia.embrapa.br/agritec/v1/municipios?uf="+this.state.uf,{headers:{Authorization:"Bearer 8102311a-4abd-3449-a69c-2400c70e71c4"}}).then(function(e){a.setState({municipios:e.data.data})}),t.latitude!==this.state.latitude&&""!==this.state.latitude&&t.longitude!==this.state.longitude&&""!==this.state.longitude&&f.a.get("https://api.opencagedata.com/geocode/v1/json?q="+this.state.latitude+"+"+this.state.longitude+"&key=8880e42806424cd7b08aa83ee91fe733").then(function(e){a.setState({local:e.data.results[0].formatted})})}},{key:"render",value:function(){var e=this,t=this.state.municipios.map(function(e){return o.a.createElement("option",{value:[e.codigoIBGE,e.nome,e.uf]},e.nome)}),a=this.state.newFav.map(function(){if(e.state.numChildren>0)return o.a.createElement(G,{value:e.state.newFav.codigoIBGE,nome:e.state.newFav.nome,uf:e.state.newFav.uf})});return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Localiza\xe7\xe3o"),o.a.createElement("p",null," selecione a localiza\xe7\xe3o desejada "),o.a.createElement("div",{className:"options"},o.a.createElement("p",null,o.a.createElement("div",{style:{width:"50%",float:"left",marginTop:"7px"}},"  atualmente em: "),o.a.createElement("div",{style:{width:"50%",float:"right",textAlign:"right",paddingRight:"20px"}},o.a.createElement(S.a,{onSubmit:this.getGeolocation},o.a.createElement("input",{type:"hidden",name:"latitude",value:this.props.coords&&this.props.coords.latitude}),o.a.createElement("input",{type:"hidden",name:"longitude",value:this.props.coords&&this.props.coords.longitude}),o.a.createElement(O.a,{type:"submit",variant:"primary",style:{background:"#0075a4",border:"1px solid #0075a4"}},o.a.createElement(B.a,{icon:"map-marker-alt"}))))),o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:"opt-geolocation"}),o.a.createElement("label",{for:"opt-geolocation",className:"label"},"CAMPINAS - SP")))),o.a.createElement("p",null,o.a.createElement("div",{style:{width:"50%",float:"left",marginTop:"7px"}},"  favoritos: "),o.a.createElement("div",{style:{width:"50%",float:"right",textAlign:"right",paddingRight:"20px"}},o.a.createElement(O.a,{variant:"primary",onClick:this.handleShow,style:{background:"#0075a4",border:"1px solid #0075a4"}},o.a.createElement(B.a,{icon:"plus"})))),o.a.createElement("div",{className:""},a)),o.a.createElement(g.a,{show:this.state.show,onHide:this.handleClose,centered:!0},o.a.createElement(g.a.Header,{closeButton:!0},o.a.createElement(g.a.Title,null,"Adicionar nova localiza\xe7\xe3o")),o.a.createElement(g.a.Body,null,o.a.createElement(S.a,null,o.a.createElement(S.a.Group,{as:C.a},o.a.createElement(S.a.Label,{column:!0,sm:"3"},"UF:"),o.a.createElement(N.a,{sm:"9"},o.a.createElement(S.a.Control,{as:"select",onChange:this.getUF},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"AC"},"Acre"),o.a.createElement("option",{value:"AL"},"Alagoas"),o.a.createElement("option",{value:"AP"},"Amap\xe1"),o.a.createElement("option",{value:"AM"},"Amazonas"),o.a.createElement("option",{value:"BA"},"Bahia"),o.a.createElement("option",{value:"CE"},"Cear\xe1"),o.a.createElement("option",{value:"DF"},"Distrito Federal"),o.a.createElement("option",{value:"ES"},"Esp\xedrito Santo"),o.a.createElement("option",{value:"GO"},"Goi\xe1s"),o.a.createElement("option",{value:"MA"},"Maranh\xe3o"),o.a.createElement("option",{value:"MT"},"Mato Grosso"),o.a.createElement("option",{value:"MS"},"Mato Grosso do Sul"),o.a.createElement("option",{value:"MG"},"Minas Gerais"),o.a.createElement("option",{value:"PA"},"Par\xe1"),o.a.createElement("option",{value:"PB"},"Para\xedba"),o.a.createElement("option",{value:"PR"},"Paran\xe1"),o.a.createElement("option",{value:"PE"},"Pernambuco"),o.a.createElement("option",{value:"PI"},"Piau\xed"),o.a.createElement("option",{value:"RJ"},"Rio de Janeiro"),o.a.createElement("option",{value:"RN"},"Rio Grande do Norte"),o.a.createElement("option",{value:"RS"},"Rio Grande do Sul"),o.a.createElement("option",{value:"RO"},"Rond\xf4nia"),o.a.createElement("option",{value:"RR"},"Roraima"),o.a.createElement("option",{value:"SC"},"Santa Catarina"),o.a.createElement("option",{value:"SP"},"S\xe3o Paulo"),o.a.createElement("option",{value:"SE"},"Sergipe"),o.a.createElement("option",{value:"TO"},"Tocantins")))),o.a.createElement(S.a.Group,{as:C.a},o.a.createElement(S.a.Label,{column:!0,sm:"3"},"Munic\xedpio:"),o.a.createElement(N.a,{sm:"9"},o.a.createElement(S.a.Control,{as:"select",onChange:this.getMunicipio},t))))),o.a.createElement(g.a.Footer,null,o.a.createElement(O.a,{variant:"secondary",onClick:this.handleClose},"Fechar"),o.a.createElement(O.a,{variant:"primary",onClick:this.handleSave},"Salvar"))))}}]),t}(n.Component),G=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.value}),o.a.createElement("label",{for:e.value,className:"label"},e.nome," - ",e.uf))))},F=Object(A.geolocated)()(x),M=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={culturas:[{id:61,cultura:"ARROZ"},{id:62,cultura:"FEIJ\xc3O"},{id:56,cultura:"MILHO"},{id:60,cultura:"SOJA"},{id:32533,cultura:"TRIGO"}]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.cnptia.embrapa.br/agritec/v1/culturas",{headers:{Authorization:"Bearer 8102311a-4abd-3449-a69c-2400c70e71c4"}}).then(function(t){e.setState(function(){return{culturas:t.data.data}})})}},{key:"render",value:function(){var e=this.state.culturas.map(function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.id}),o.a.createElement("label",{for:e.id,className:"label"},e.cultura))))});return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Cultura"),o.a.createElement("p",null," selecione a cultura desejada "),o.a.createElement("div",{className:"options"},e))}}]),t}(n.Component),H=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={texturas:[{id:1,textura:"ARENOSO"},{id:2,textura:"ARGILOSO"},{id:3,textura:"TEXTURA M\xc9DIA"}]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.texturas.map(function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list"},o.a.createElement("li",{className:"list__item"},o.a.createElement("input",{type:"radio",className:"radio-btn",name:"choice",id:e.id}),o.a.createElement("label",{for:e.id,className:"label"},e.textura))))});return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Textura"),o.a.createElement("p",null," selecione a textura do solo da propriedade "),o.a.createElement("div",{className:"options"},e))}}]),t}(n.Component),P=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Zoneamento"))}}]),t}(n.Component);T.b.add(R.c),T.b.add(R.f),T.b.add(R.g),T.b.add(R.b);var I=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement("ul",{className:"ul-router"},o.a.createElement("li",null,o.a.createElement(p.a,{to:"/"},o.a.createElement(B.a,{icon:"location-arrow"})," ")),o.a.createElement("li",null,o.a.createElement(p.a,{to:"/Culture"},o.a.createElement(B.a,{icon:"seedling"})," ")),o.a.createElement("li",null,o.a.createElement(p.a,{to:"/Texture"},o.a.createElement(B.a,{icon:"shapes"})," ")),o.a.createElement("li",null,o.a.createElement(p.a,{to:"/Zoning"},o.a.createElement(B.a,{icon:"list"})," "))),o.a.createElement(h.a,{exact:!0,path:"/",component:F}),o.a.createElement(h.a,{path:"/Culture",component:M}),o.a.createElement(h.a,{path:"/Texture",component:H}),o.a.createElement(h.a,{path:"/Zoning",component:P})))}}]),t}(n.Component),D=(a(156),a(165)),L=a(164),U=a(163);T.b.add(R.a);var _=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={showDictionary:!1,showHistory:!1,showTutorial:!1,showAbout:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(D.a,{collapseOnSelect:!0,expand:"lg",fixed:"top"},o.a.createElement(D.a.Brand,{href:"#home"},o.a.createElement("img",{alt:"",src:"{logo}",width:"30",height:"30",className:"d-inline-block align-top"})," ZARC"),o.a.createElement(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(D.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(L.a,{className:"ml-auto"},o.a.createElement(L.a.Link,{onClick:function(){return e.setState({showDictionary:!0})}},"Dicion\xe1rio"),o.a.createElement(L.a.Link,{onClick:function(){return e.setState({showHistory:!0})}},"Hist\xf3rico"),o.a.createElement(L.a.Link,{onClick:function(){return e.setState({showTutorial:!0})}},"Tutorial"),o.a.createElement(L.a.Link,{onClick:function(){return e.setState({showAbout:!0})}},"Sobre")))),o.a.createElement(U.a,{show:this.state.showDictionary,onHide:function(){return e.setState({showDictionary:!1})},centered:!0},o.a.createElement(U.a.Header,{closeButton:!0},o.a.createElement(U.a.Title,null,"Dicion\xe1rio")),o.a.createElement(U.a.Body,null)),o.a.createElement(U.a,{show:this.state.showHistory,onHide:function(){return e.setState({showHistory:!1})},centered:!0},o.a.createElement(U.a.Header,{closeButton:!0},o.a.createElement(U.a.Title,null,"Hist\xf3rico")),o.a.createElement(U.a.Body,null)),o.a.createElement(U.a,{show:this.state.showTutorial,onHide:function(){return e.setState({showTutorial:!1})},centered:!0},o.a.createElement(U.a.Header,{closeButton:!0},o.a.createElement(U.a.Title,null,"Tutorial")),o.a.createElement(U.a.Body,null)),o.a.createElement(U.a,{show:this.state.showAbout,onHide:function(){return e.setState({showAbout:!1})},centered:!0},o.a.createElement(U.a.Header,{closeButton:!0},o.a.createElement(U.a.Title,null,"Sobre")),o.a.createElement(U.a.Body,null)))}}]),t}(n.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(_,null),document.getElementById("header")),i.a.render(o.a.createElement(I,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/primeiro-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/primeiro-app","/service-worker.js");W?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):z(t,e)})}}()},78:function(e,t,a){e.exports=a(160)},83:function(e,t,a){},85:function(e,t,a){}},[[78,2,1]]]);
//# sourceMappingURL=main.5a41e1c8.chunk.js.map