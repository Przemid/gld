(window.webpackJsonpgld=window.webpackJsonpgld||[]).push([[0],{156:function(e,t,n){},159:function(e,t,n){e.exports=n.p+"static/media/airhorn.95897491.mp3"},160:function(e,t,n){e.exports=n.p+"static/media/logo_kolor.1bf82ca4.jpg"},188:function(e,t,n){e.exports=n(324)},193:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){e.exports=n.p+"static/media/setting-512.3f40f759.png"},198:function(e,t,n){},322:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(34),u=n.n(r),i=(n(193),n(19)),l=n(20),s=n(21),c=n(22),d=n(23),p=n(27),y=n(157),m=(n(196),n(159)),w=n.n(m),S=(n(197),n(160)),f=n.n(S),k=(n(198),n(28)),v=n.n(k),h=n(9),g=n.n(h),b=n(24),C=n.n(b),E=n(29),O="SETTINGS_USTAW_MINUTY",T="SETTINGS_USTAW_SEKUNDY",j="SETTINGS_USTAW_RUNDY",z="SETTINGS_USTAW_PRZERWA",N="SETTINGS_USTAW_COLDOWN",W="SETTINGS_USTAW_SYGNALCOMINUTE",D="SETTINGS_USTAW_SOUNDPACK",P="SETTINGS_USTAW_CLOCKRED",L="SETTINGS_USTAW_CLOCKBLUE",A="SETTINGS_USTAW_CLOCKGREEN",_="SETTINGS_USTAW_ISCOUNTDOWN",x="SETTINGS_USTAW_ISCOOLDOWN",U="SETTINGS_USTAW_CZASDOSTARTU",I="SETTINGS_USTAW_ISSTARTING",R="SETTINGS_USTAW_ISPRZERWA";function G(e){return{type:_,payload:e}}var M=n(40),V=n(330),B=n(163),H=n(331),K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).ustawMinuty=function(e,t){var a=n.props.ustawMinuty;a&&a(t.value)},n.ustawSekundy=function(e,t){var a=n.props.ustawSekundy;a&&a(Number(t.value))},n.ustawRundy=function(e,t){var a=n.props.ustawRundy;a&&a(Number(t.value))},n.ustawPrzerwa=function(e,t){var a=n.props.ustawPrzerwa;a&&a(Number(t.value))},n.ustawCooldown=function(e,t){var a=n.props.ustawCooldown;a&&a(Number(t.value))},n.ustawSygnalCoMinute=function(e,t){var a=n.props.ustawSygnalCoMinute;a&&a(t.value)},n.ustawSoundPack=function(e,t){var a=n.props.ustawSoundPack;a&&a(Number(t.value))},n.ustawCzasDoStartu=function(e,t){var a=n.props.ustawCzasDoStartu;a&&a(Number(t.value))},n.state={},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[{key:"1",text:"1",value:1},{key:"2",text:"2",value:2},{key:"3",text:"3",value:3},{key:"4",text:"4",value:4},{key:"5",text:"5",value:5},{key:"6",text:"6",value:6},{key:"7",text:"7",value:7},{key:"8",text:"8",value:8},{key:"9",text:"9",value:9},{key:"10",text:"10",value:10}],t=[{key:"0",text:"0",value:0},{key:"5",text:"5",value:5},{key:"10",text:"10",value:10},{key:"15",text:"15",value:15},{key:"30",text:"30",value:30},{key:"45",text:"45",value:45}],n=[{key:"0",text:"0",value:0},{key:"15",text:"15",value:15},{key:"30",text:"30",value:30},{key:"45",text:"45",value:45},{key:"60",text:"60",value:60}];return o.a.createElement("div",{className:"SettingsPage"},o.a.createElement(v.a,null,o.a.createElement(g.a,null,o.a.createElement(C.a,{className:"ColumnBlack"},o.a.createElement("img",{src:f.a,alt:"logo"}))),o.a.createElement(g.a,null,"Rundy:"),o.a.createElement(g.a,null,o.a.createElement(V.a,{placeholder:"Wybierz ile rund",fluid:!0,selection:!0,options:e,onChange:this.ustawRundy,defaultValue:3})),o.a.createElement(g.a,null,"Minuty:"),o.a.createElement(g.a,null,o.a.createElement(V.a,{placeholder:"Wybierz ile minut na rund\u0119",fluid:!0,selection:!0,options:e,onChange:this.ustawMinuty,defaultValue:3})),o.a.createElement(g.a,null,"Sekundy:"),o.a.createElement(g.a,null,o.a.createElement(V.a,{placeholder:"Wybierz ile sekund",fluid:!0,selection:!0,options:t,onChange:this.ustawSekundy,defaultValue:0})),o.a.createElement(g.a,null,"Przerwa w sekundach:"),o.a.createElement(g.a,null,o.a.createElement(V.a,{placeholder:"Wybierz przerw\u0119",fluid:!0,selection:!0,options:n,onChange:this.ustawPrzerwa,defaultValue:60})),o.a.createElement(g.a,null,"Czas do startu:"),o.a.createElement(g.a,null,o.a.createElement(V.a,{placeholder:"Wybierz czas przygotowania",fluid:!0,selection:!0,options:t,onChange:this.ustawCzasDoStartu,defaultValue:10})),o.a.createElement(g.a,null,"Cooldown:"),o.a.createElement(g.a,null,o.a.createElement(V.a,{placeholder:"Wybierz cooldown",fluid:!0,selection:!0,options:n,onChange:this.ustawCooldown,defaultValue:60})),o.a.createElement(g.a,null,"Sygna\u0142 co minut\u0119:"),o.a.createElement(g.a,null,o.a.createElement(V.a,{placeholder:"Wybierz",fluid:!0,selection:!0,options:[{key:"tak",text:"Tak",value:"true"},{key:"nie",text:"Nie",value:"false"}],onChange:this.ustawSygnalCoMinute,defaultValue:"true"})),o.a.createElement(g.a,null,"SoundPack:"),o.a.createElement(g.a,null,o.a.createElement(V.a,{placeholder:"Wybierz trenera",fluid:!0,selection:!0,options:[{key:"Horn",text:"Horn",value:1,image:{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/elliot.jpg"}},{key:"Arek",text:"Arek",value:2,image:{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/elliot.jpg"}}],onChange:this.ustawSoundPack,defaultValue:1})),o.a.createElement(g.a,null,o.a.createElement(B.a,null,(function(e){var t=e.isOn,n=e.enable,a=e.disable;return o.a.createElement(H.a,{onClick:t?a:n,inverted:!0},t?"ON":"OFF")})))))}}]),t}(o.a.Component),Y=Object(M.a)(Object(E.b)((function(e,t){return{minuty:e.minuty,sekundy:e.sekundy}}),{ustawMinuty:function(e){return{type:O,payload:e}},ustawSekundy:function(e){return{type:T,payload:e}},ustawRundy:function(e){return{type:j,payload:e}},ustawPrzerwa:function(e){return{type:z,payload:e}},ustawCooldown:function(e){return{type:N,payload:e}},ustawSygnalCoMinute:function(e){return{type:W,payload:e}},ustawSoundPack:function(e){return{type:D,payload:e}},ustawCzasDoStartu:function(e){return{type:U,payload:e}}}))(K),Z=(n(156),n(322),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).formatTime=function(e,t){var a=n.state,r=a.windowWidth,u=a.windowHeight,i=1===e.toString().length?"0"+e:e,l=1===t.toString().length?"0"+t:t;return u>r?o.a.createElement("div",null,o.a.createElement(g.a,null,o.a.createElement(C.a,{className:"ClockVertical"},i)),o.a.createElement(g.a,null,o.a.createElement(C.a,{className:"ClockVerticalSeconds"},l))):i+":"+l},n.state={windowWidth:0,windowHeight:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})}},{key:"render",value:function(){var e=this.props,t=e.minutyL,n=e.sekundyL,a={color:e.colorS};return o.a.createElement(v.a,null,o.a.createElement("div",{className:"ClockNumbers",style:a},this.formatTime(t,n)))}}]),t}(o.a.Component)),F=Object(M.a)(Object(E.b)((function(e,t){return{}}),{}))(Z),J=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).getSeconds=function(e){return e%60},n.getMinutes=function(e){return Math.floor(e/60)},n.startCountdown=function(){var e=n.props,t=e.ustawisCountDown;e.minuty,e.sekundy;t&&t(!0)},n.stopCountdown=function(){var e=n.props.ustawisCountDown;e&&e(!1)},n.resetCountdown=function(){var e=n.props,t=(e.minuty,e.sekundy,e.czasDoStartu);n.state.tick;n.setState({tick:t})},n.startStarting=function(){var e=n.props,t=e.ustawisStarting;e.czasDoStartu;0==n.state.tick&&n.stopStarting(),t&&t(!0)},n.stopStarting=function(){var e=n.props.ustawisStarting;e&&e(!1)},n.resetStarting=function(){var e=n.props.czasDoStartu;n.setState({tick:e})},n.getColor=function(){var e=n.props,t=e.minuty,a=e.sekundy,o=e.isCountdown,r=(e.isStarting,255*(n.state.tick/(60*t+a)));return o?"rgb("+parseInt((255-r).toString(),10)+","+parseInt(r.toString(),10)+",30)":"rgb(0,100,255)"},n.startButton=function(){var e=n.props,t=e.ustawisStarting,a=e.isCountdown,o=e.isStarting;n.state.tick;o||t&&t(!0),a&&G&&G(!1)},n.state={minutyL:3,sekundyL:10,timeIsGrabbed:!1,tick:0,rundyL:3,currentRound:1,czasDoStartuL:10},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.minuty,n=e.sekundy,a=e.isCountdown,o=e.rundy,r=e.czasDoStartu,u=this.state,i=u.minutyL,l=u.sekundyL,s=u.czasDoStartuL;a||i==t&&l==n&&s==r||this.setState({minutyL:t,sekundyL:n,tick:r,rundyL:o,czasDoStartuL:r})}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.minuty,n=e.sekundy,a=e.isCountdown,o=e.isStarting,r=e.czasDoStartu,u=this.state,i=u.minutyL,l=u.sekundyL,s=u.tick,c=u.czasDoStartuL,d=this;a||o?o&&!a?(0==s&&(this.stopStarting(),this.startCountdown(),this.setState({tick:60*t+n})),setTimeout((function(){s>0&&d.setState({tick:s-1})}),1e3)):a&&!o&&setTimeout((function(){s>0&&d.setState({tick:s-1})}),1e3):i==t&&l==n&&c==r||this.setState({minutyL:t,sekundyL:n,tick:r,czasDoStartuL:r})}},{key:"render",value:function(){var e=this.props,t=e.isCountdown,n=e.rundy,a=this.state,r=a.tick,u=(a.rundyL,a.currentRound),i={color:this.getColor()};return o.a.createElement(v.a,null,o.a.createElement(F,{minutyL:this.getMinutes(r),sekundyL:this.getSeconds(r),colorS:this.getColor()}),o.a.createElement(g.a,null,o.a.createElement(C.a,{className:"ClockColumnCentered"},o.a.createElement(H.a,{onClick:this.startButton,inverted:!0},t?"Stop":"Start")),o.a.createElement(C.a,{className:"ClockColumnCentered ClockRounds",style:i},"Runda ",u,"/",n),o.a.createElement(C.a,{className:"ClockColumnCentered"},o.a.createElement(H.a,{onClick:this.resetCountdown,inverted:!0},"Reset"))))}}]),t}(o.a.Component),$=Object(M.a)(Object(E.b)((function(e,t){return{minuty:e.minuty,sekundy:e.sekundy,isCooldown:e.isCooldown,isCountdown:e.isCountdown,isStarting:e.isStarting,isPrzerwa:e.isPrzerwa,rundy:e.rundy,przerwa:e.przerwa,cooldown:e.cooldown,sygnalCoMinute:e.sygnalCoMinute,soundPack:e.soundPack,czasDoStartu:e.czasDoStartu}}),{ustawisCountDown:G,ustawisStarting:function(e){return{type:I,payload:e}},ustawisCooldown:function(e){return{type:x,payload:e}},ustawisPrzerwa:function(e){return{type:R,payload:e}}}))(J),q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.minuty,n=e.sekundy,a=e.rundy,r=e.przerwa,u=e.cooldown,i=e.sygnalCoMinute,l=e.czasDoStartu;return o.a.createElement(v.a,null,o.a.createElement(g.a,null,o.a.createElement(C.a,{className:"ClockColumnCentered"},o.a.createElement("p",null,"Rundy:",a," | Czas:",t,":",n<10?"0".concat(n):n," | Przerwa: ",r,"s | Cooldown: ",u,"s")),o.a.createElement(C.a,null,o.a.createElement("p",null,"Sygna\u0142 co minut\u0119: ",i?"Tak":"Nie"," | Czas do startu: ",l,"s"))))}}]),t}(o.a.Component),Q=Object(M.a)(Object(E.b)((function(e,t){return{minuty:e.minuty,sekundy:e.sekundy,rundy:e.rundy,przerwa:e.przerwa,cooldown:e.cooldown,sygnalCoMinute:e.sygnalCoMinute,czasDoStartu:e.czasDoStartu}}),{}))(q),X=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={sidebarOpen:!1},n.onSetSidebarOpen=n.onSetSidebarOpen.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"render",value:function(){var e=new Audio(w.a);return o.a.createElement("div",{className:"HomePage"},o.a.createElement(y.a,{sidebar:o.a.createElement(Y,null),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"white"}}},o.a.createElement("header",{className:"App-header"},o.a.createElement(v.a,null,o.a.createElement(g.a,null,o.a.createElement(Q,null)),o.a.createElement(g.a,null,o.a.createElement($,null)),o.a.createElement(g.a,null,o.a.createElement(C.a,{className:"App-footer"},o.a.createElement("p",{className:"G-logo",onClick:function(){return e.play()}},"Powered by ",o.a.createElement("b",null,"Goliat"))))))))}}]),t}(o.a.Component),ee=(n(323),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(X,null))}}]),t}(o.a.Component)),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=n(84),oe=n(30);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach((function(t){Object(oe.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie={minuty:3,sekundy:0,rundy:3,przerwa:60,cooldown:60,sygnalCoMinute:!0,soundPack:1,clockColorRed:255,clockColorBlue:255,clockColorGreen:255,isCountdown:!1,isCooldown:!1,isStarting:!1,isPrzerwa:!1,czasDoStartu:10};var le=Object(ae.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return ue({},e,{rundy:t.payload});case O:return ue({},e,{minuty:t.payload});case T:return ue({},e,{sekundy:t.payload});case z:return ue({},e,{przerwa:t.payload});case N:return ue({},e,{cooldown:t.payload});case W:return ue({},e,{sygnalCoMinute:t.payload});case D:return ue({},e,{soundPack:t.payload});case P:return ue({},e,{clockColorRed:t.payload});case A:return ue({},e,{clockColorGreen:t.payload});case L:return ue({},e,{clockColorBlue:t.payload});case _:return ue({},e,{isCountdown:t.payload});case x:return ue({},e,{isCooldown:t.payload});case I:return ue({},e,{isStarting:t.payload});case R:return ue({},e,{isPrzerwa:t.payload});case U:return ue({},e,{czasDoStartu:t.payload});default:return e}}));u.a.render(o.a.createElement(E.a,{store:le},o.a.createElement(ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/gld",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/gld","/service-worker.js");te?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ne(t,e)}))}}()}},[[188,1,2]]]);
//# sourceMappingURL=main.d7f0ce79.chunk.js.map