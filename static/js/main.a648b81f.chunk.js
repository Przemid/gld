(window.webpackJsonpgld=window.webpackJsonpgld||[]).push([[0],{156:function(e,t,n){},159:function(e,t,n){e.exports=n.p+"static/media/airhorn.95897491.mp3"},160:function(e,t,n){e.exports=n.p+"static/media/setting-512.3f40f759.png"},161:function(e,t,n){e.exports=n.p+"static/media/logo_kolor.1bf82ca4.jpg"},189:function(e,t,n){e.exports=n(323)},194:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(31),u=n.n(r),l=(n(194),n(19)),c=n(20),i=n(21),s=n(22),d=n(23),y=n(37),p=n(157),m=(n(197),n(159)),w=n.n(m),f=n(160),k=n.n(f),v=n(161),h=n.n(v),S=(n(198),n(38)),C=n.n(S),b=n(11),E=n.n(b),g=n(25),O=n.n(g),T=n(39),j="SETTINGS_USTAW_MINUTY",N="SETTINGS_USTAW_SEKUNDY",z="SETTINGS_USTAW_RUNDY",x="SETTINGS_USTAW_PRZERWA",W="SETTINGS_USTAW_COLDOWN",P="SETTINGS_USTAW_SYGNALCOMINUTE",A="SETTINGS_USTAW_SOUNDPACK",D="SETTINGS_USTAW_CLOCKRED",_="SETTINGS_USTAW_CLOCKBLUE",U="SETTINGS_USTAW_CLOCKGREEN",I="SETTINGS_USTAW_ISCOUNTDOWN",L="SETTINGS_USTAW_ISCOOLDOWN",R="SETTINGS_USTAW_CZASDOSTARTU";var G=n(55),M=n(329),V=n(164),B=n(330),K=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).ustawMinuty=function(e,t){var a=n.props.ustawMinuty;a&&a(t.value)},n.ustawSekundy=function(e,t){var a=n.props.ustawSekundy;a&&a(Number(t.value))},n.ustawRundy=function(e,t){var a=n.props.ustawRundy;a&&a(Number(t.value))},n.ustawPrzerwa=function(e,t){var a=n.props.ustawPrzerwa;a&&a(Number(t.value))},n.ustawCooldown=function(e,t){var a=n.props.ustawCooldown;a&&a(Number(t.value))},n.ustawSygnalCoMinute=function(e,t){var a=n.props.ustawSygnalCoMinute;a&&a(t.value)},n.ustawSoundPack=function(e,t){var a=n.props.ustawSoundPack;a&&a(Number(t.value))},n.ustawCzasDoStartu=function(e,t){var a=n.props.ustawCzasDoStartu;a&&a(Number(t.value))},n.state={},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=[{key:"1",text:"1",value:1},{key:"2",text:"2",value:2},{key:"3",text:"3",value:3},{key:"4",text:"4",value:4},{key:"5",text:"5",value:5},{key:"6",text:"6",value:6},{key:"7",text:"7",value:7},{key:"8",text:"8",value:8},{key:"9",text:"9",value:9},{key:"10",text:"10",value:10}],t=[{key:"0",text:"0",value:0},{key:"5",text:"5",value:5},{key:"10",text:"10",value:10},{key:"15",text:"15",value:15},{key:"30",text:"30",value:30},{key:"45",text:"45",value:45}],n=[{key:"0",text:"0",value:0},{key:"15",text:"15",value:15},{key:"30",text:"30",value:30},{key:"45",text:"45",value:45},{key:"60",text:"60",value:60}];return o.a.createElement("div",{className:"SettingsPage"},o.a.createElement(C.a,null,o.a.createElement(E.a,null,o.a.createElement(O.a,{className:"ColumnBlack"},o.a.createElement("img",{src:h.a,alt:"logo"}))),o.a.createElement(E.a,null,"Rundy:"),o.a.createElement(E.a,null,o.a.createElement(M.a,{placeholder:"Wybierz ile rund",fluid:!0,selection:!0,options:e,onChange:this.ustawRundy,defaultValue:3})),o.a.createElement(E.a,null,"Minuty:"),o.a.createElement(E.a,null,o.a.createElement(M.a,{placeholder:"Wybierz ile minut na rund\u0119",fluid:!0,selection:!0,options:e,onChange:this.ustawMinuty,defaultValue:3})),o.a.createElement(E.a,null,"Sekundy:"),o.a.createElement(E.a,null,o.a.createElement(M.a,{placeholder:"Wybierz ile sekund",fluid:!0,selection:!0,options:t,onChange:this.ustawSekundy,defaultValue:0})),o.a.createElement(E.a,null,"Przerwa w sekundach:"),o.a.createElement(E.a,null,o.a.createElement(M.a,{placeholder:"Wybierz przerw\u0119",fluid:!0,selection:!0,options:n,onChange:this.ustawPrzerwa,defaultValue:60})),o.a.createElement(E.a,null,"Czas do startu:"),o.a.createElement(E.a,null,o.a.createElement(M.a,{placeholder:"Wybierz czas przygotowania",fluid:!0,selection:!0,options:t,onChange:this.ustawCzasDoStartu,defaultValue:10})),o.a.createElement(E.a,null,"Cooldown:"),o.a.createElement(E.a,null,o.a.createElement(M.a,{placeholder:"Wybierz cooldown",fluid:!0,selection:!0,options:n,onChange:this.ustawCooldown,defaultValue:60})),o.a.createElement(E.a,null,"Sygna\u0142 co minut\u0119:"),o.a.createElement(E.a,null,o.a.createElement(M.a,{placeholder:"Wybierz",fluid:!0,selection:!0,options:[{key:"tak",text:"Tak",value:"true"},{key:"nie",text:"Nie",value:"false"}],onChange:this.ustawSygnalCoMinute,defaultValue:"true"})),o.a.createElement(E.a,null,"SoundPack:"),o.a.createElement(E.a,null,o.a.createElement(M.a,{placeholder:"Wybierz trenera",fluid:!0,selection:!0,options:[{key:"Horn",text:"Horn",value:1,image:{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/elliot.jpg"}},{key:"Arek",text:"Arek",value:2,image:{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/elliot.jpg"}}],onChange:this.ustawSoundPack,defaultValue:1})),o.a.createElement(E.a,null,o.a.createElement(V.a,null,(function(e){var t=e.isOn,n=e.enable,a=e.disable;return o.a.createElement(B.a,{onClick:t?a:n,inverted:!0},t?"ON":"OFF")})))))}}]),t}(o.a.Component),Y=Object(G.a)(Object(T.b)((function(e,t){return{minuty:e.minuty,sekundy:e.sekundy}}),{ustawMinuty:function(e){return{type:j,payload:e}},ustawSekundy:function(e){return{type:N,payload:e}},ustawRundy:function(e){return{type:z,payload:e}},ustawPrzerwa:function(e){return{type:x,payload:e}},ustawCooldown:function(e){return{type:W,payload:e}},ustawSygnalCoMinute:function(e){return{type:P,payload:e}},ustawSoundPack:function(e){return{type:A,payload:e}},ustawCzasDoStartu:function(e){return{type:R,payload:e}}}))(K),H=(n(156),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).formatTime=function(e){var t=e%60,n=Math.floor(e/60);return(1===n.toString().length?"0"+n:n)+":"+(1===t.toString().length?"0"+t:t)},n.startCountdown=function(){var e=n.props.ustawisCountDown;e&&e(!0)},n.stopCountdown=function(){var e=n.props.ustawisCountDown;e&&e(!1)},n.resetCountdown=function(){var e=n.props,t=e.minuty,a=e.sekundy;n.state.tick;n.setState({tick:60*t+a})},n.getColor=function(){var e=n.props,t=e.minuty,a=e.sekundy,o=255*(n.state.tick/(60*t+a));return"rgb("+parseInt((255-o).toString(),10)+","+parseInt(o.toString(),10)+",0)"},n.state={minutyL:3,sekundyL:10,timeIsGrabbed:!1,tick:0,rundyL:3,currentRound:1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.minuty,n=e.sekundy,a=e.isCountdown,o=e.rundy,r=this.state,u=r.minutyL,l=r.sekundyL;a||u==t&&l==n||this.setState({minutyL:t,sekundyL:n,tick:60*t+n,rundyL:o})}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.minuty,n=e.sekundy,a=e.isCountdown,o=this.state,r=o.minutyL,u=o.sekundyL,l=o.tick;if(a){var c=this;if(0==l){new Audio("../src/sound/airhorn.mp3").play()}setTimeout((function(){l>0&&c.setState({tick:l-1})}),1e3)}else r==t&&u==n||this.setState({minutyL:t,sekundyL:n,tick:60*t+n})}},{key:"render",value:function(){var e=this.props,t=e.isCountdown,n=e.rundy,a=this.state,r=a.tick,u=(a.rundyL,a.currentRound),l={color:this.getColor()};return o.a.createElement(C.a,null,o.a.createElement("div",{className:"ClockNumbers",style:l},this.formatTime(r)),o.a.createElement(E.a,null,o.a.createElement(O.a,{className:"ClockColumnCentered"},o.a.createElement(B.a,{onClick:t?this.stopCountdown:this.startCountdown,inverted:!0},t?"Stop":"Start")),o.a.createElement(O.a,{className:"ClockColumnCentered ClockRounds",style:l},"Runda ",u,"/",n),o.a.createElement(O.a,{className:"ClockColumnCentered"},o.a.createElement(B.a,{onClick:this.resetCountdown,disabled:t,inverted:!0},"Reset"))))}}]),t}(o.a.Component)),F=Object(G.a)(Object(T.b)((function(e,t){return{minuty:e.minuty,sekundy:e.sekundy,isCooldown:e.isCooldown,isCountdown:e.isCountdown,rundy:e.rundy,przerwa:e.przerwa,cooldown:e.cooldown,sygnalCoMinute:e.sygnalCoMinute,soundPack:e.soundPack,czasDoStartu:e.czasDoStartu}}),{ustawisCountDown:function(e){return{type:I,payload:e}}}))(H),J=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.minuty,n=e.sekundy,a=e.rundy,r=e.przerwa,u=e.cooldown,l=e.sygnalCoMinute,c=e.czasDoStartu;return o.a.createElement(C.a,null,o.a.createElement(E.a,null,o.a.createElement(O.a,{className:"ClockColumnCentered"},o.a.createElement("p",null,"Rundy:",a," | Czas:",t,":",n<10?"0".concat(n):n," | Przerwa: ",r,"s | Cooldown: ",u,"s")),o.a.createElement(O.a,null,o.a.createElement("p",null,"Sygna\u0142 co minut\u0119: ",l?"Tak":"Nie"," | Czas do startu: ",c,"s"))))}}]),t}(o.a.Component),Z=Object(G.a)(Object(T.b)((function(e,t){return{minuty:e.minuty,sekundy:e.sekundy,rundy:e.rundy,przerwa:e.przerwa,cooldown:e.cooldown,sygnalCoMinute:e.sygnalCoMinute,czasDoStartu:e.czasDoStartu}}),{}))(J),$=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={sidebarOpen:!1},n.onSetSidebarOpen=n.onSetSidebarOpen.bind(Object(y.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"render",value:function(){var e=this,t=new Audio(w.a);return o.a.createElement("div",{className:"HomePage"},o.a.createElement(p.a,{sidebar:o.a.createElement(Y,null),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"black"}}},o.a.createElement("img",{src:k.a,alt:"SettingsIcon",onClick:function(){return e.onSetSidebarOpen(!0)},style:{width:"40px",height:"40px"}}),o.a.createElement("header",{className:"App-header"},o.a.createElement(C.a,null,o.a.createElement(Z,null),o.a.createElement(F,null),o.a.createElement(E.a,null,o.a.createElement(O.a,{className:"App-footer"},o.a.createElement("p",{className:"G-logo",onClick:function(){return t.play()}},"Powered by ",o.a.createElement("b",null,"Goliat"))))))))}}]),t}(o.a.Component),q=(n(322),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement($,null))}}]),t}(o.a.Component)),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ee=n(84),te=n(27);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(te.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe={minuty:3,sekundy:0,rundy:3,przerwa:60,cooldown:60,sygnalCoMinute:!0,soundPack:1,clockColorRed:255,clockColorBlue:255,clockColorGreen:255,isCountdown:!1,isCooldown:!1,czasDoStartu:10};var re=Object(ee.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return ae({},e,{rundy:t.payload});case j:return ae({},e,{minuty:t.payload});case N:return ae({},e,{sekundy:t.payload});case x:return ae({},e,{przerwa:t.payload});case W:return ae({},e,{cooldown:t.payload});case P:return ae({},e,{sygnalCoMinute:t.payload});case A:return ae({},e,{soundPack:t.payload});case D:return ae({},e,{clockColorRed:t.payload});case U:return ae({},e,{clockColorGreen:t.payload});case _:return ae({},e,{clockColorBlue:t.payload});case I:return ae({},e,{isCountdown:t.payload});case L:return ae({},e,{isCooldown:t.payload});case R:return ae({},e,{czasDoStartu:t.payload});default:return e}}));u.a.render(o.a.createElement(T.a,{store:re},o.a.createElement(q,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/gld",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/gld","/service-worker.js");Q?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}()}},[[189,1,2]]]);
//# sourceMappingURL=main.a648b81f.chunk.js.map