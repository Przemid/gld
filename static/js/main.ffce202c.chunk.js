(window.webpackJsonpgld=window.webpackJsonpgld||[]).push([[0],{145:function(e,t,a){e.exports=a.p+"static/media/airhorn.95897491.mp3"},146:function(e,t,a){e.exports=a.p+"static/media/setting-512.3f40f759.png"},147:function(e,t,a){e.exports=a.p+"static/media/logo_kolor.cd85f5a0.jpg"},173:function(e,t,a){e.exports=a(304)},178:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},302:function(e,t,a){},304:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),i=a.n(c),l=(a(178),a(17)),o=a(18),u=a(20),s=a(21),m=a(22),p=a(25),b=a(142),d=(a(181),a(144)),y=a(145),O=a.n(y),v=a(146),f=a.n(v),h=a(147),g=a.n(h),j=(a(182),a(75)),E=a.n(j),k=a(23),S=a.n(k),w=a(40),N=a.n(w),x=a(48),M="SETTINGS_USTAW_MINUTY",P="SETTINGS_GET_MINUTY";function C(e){return{type:M,payload:e}}var T=a(78),A=a(311),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).ustawMinuty=function(e){var t=a.props.ustawMinuty;t&&t(Number(e.currentTarget.value))},a.state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.minuty;return r.a.createElement("div",{className:"SettingsPage"},r.a.createElement(E.a,null,r.a.createElement(S.a,null,r.a.createElement(N.a,{className:"ColumnBlack"},r.a.createElement("img",{src:g.a,alt:"logo"}))),r.a.createElement(S.a,null,"Rundy:"),r.a.createElement(S.a,null,r.a.createElement(A.a,{placeholder:"Wybierz ile rund",fluid:!0,selection:!0,options:[{key:"1",text:"1",value:"1"},{key:"2",text:"2",value:"2"},{key:"3",text:"3",value:"3"},{key:"4",text:"4",value:"4"},{key:"5",text:"5",value:"5"}]})),r.a.createElement(S.a,null,r.a.createElement(N.a,null,"Czas w minutach:"),r.a.createElement("input",{type:"number",className:"SettingsInput",defaultValue:e.toString(),onChange:this.ustawMinuty})),r.a.createElement(S.a,null,r.a.createElement(N.a,null,"Przerwa w sekundach:"),r.a.createElement("input",{type:"number",className:"SettingsInput"})),r.a.createElement(S.a,null,r.a.createElement(N.a,null,"Sygna\u0142 co minut\u0119:")),r.a.createElement(S.a,null,"SoundPack:"),r.a.createElement(S.a,null,r.a.createElement(A.a,{placeholder:"Wybierz trenera",fluid:!0,selection:!0,options:[{key:"Marcin W",text:"Marcin W",value:"Marcin W",image:{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/jenny.jpg"}},{key:"Arek",text:"Arek",value:"Arek",image:{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/elliot.jpg"}},{key:"Bronek",text:"Bronek",value:"Bronek",image:{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/stevie.jpg"}},{key:"Marcin J",text:"Marcin J",value:"Marcin J",image:{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/christian.jpg"}}]}))))}}]),t}(r.a.Component),W=Object(T.a)(Object(x.b)((function(e,t){return{minuty:e.minuty}}),{ustawMinuty:C}))(I),B=(a(302),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={sidebarOpen:!1},a.onSetSidebarOpen=a.onSetSidebarOpen.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"render",value:function(){new Audio("../src/sound/airhorn.mp3");var e=this.props.minuty;return r.a.createElement("div",{className:"ClockNumbers ClockNumbersBlue"},e,":","00")}}]),t}(r.a.Component)),G=Object(T.a)(Object(x.b)((function(e,t){return{minuty:e.minuty}}),{ustawMinuty:C}))(B),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={sidebarOpen:!1},a.onSetSidebarOpen=a.onSetSidebarOpen.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"render",value:function(){var e=this,t=new Audio(O.a);return r.a.createElement("div",{className:"HomePage"},r.a.createElement(b.a,{sidebar:r.a.createElement(W,null),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"black"}}},r.a.createElement("img",{src:f.a,alt:"SettingsIcon",onClick:function(){return e.onSetSidebarOpen(!0)},style:{width:"30px",height:"30px"}}),r.a.createElement("header",{className:"App-header"},r.a.createElement(E.a,null,r.a.createElement(G,null),r.a.createElement(S.a,null,r.a.createElement(N.a,{className:"App-footer"},r.a.createElement("p",{className:"G-logo",onClick:function(){return t.play()}},"Powered by ",r.a.createElement("b",null,"Goliat"))))),r.a.createElement(d.a,null,(function(e){e.isOn;var t=e.enable;e.disable;return t})))))}}]),t}(r.a.Component),_=(a(303),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(54),D=a(26);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(D.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H={minuty:3,sekundy:45};var R=Object(z.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:case P:return Y({},e,{minuty:t.payload});default:return e}}));i.a.render(r.a.createElement(x.a,{store:R},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[173,1,2]]]);
//# sourceMappingURL=main.ffce202c.chunk.js.map