(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),o=n(2),r=n(3),i=n(5),l=n(4),s=n(1),m=(n(12),n(0)),d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date,clockName:e.getRandomName()},e.timerId=0,e.timerIdName=0,e.timerIdConsoleName=0,e.prevName=e.state.clockName,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=new Date;e.setState({date:t}),console.log(e.state.date)}),1e3),this.timerIdName=window.setInterval((function(){var t=e.getRandomName();e.setState({clockName:t}),console.log(e.state.clockName)}),3300),this.timerIdConsoleName=window.setInterval((function(){var t="Renamed from ".concat(e.prevName," to ").concat(e.state.clockName);console.log(t)}),4e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),window.clearInterval(this.timerIdName),window.clearInterval(this.timerIdConsoleName)}},{key:"getRandomName",value:function(){var e=Math.random().toString().slice(2,6);return"Clock-".concat(e)}},{key:"render",value:function(){var e=this.state.date,t=this.state.clockName;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:e.toLocaleTimeString()})]})}}]),n}(s.Component),u=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={hasClock:!0},e.handlerClickClose=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handlerClickOpen=function(){e.setState({hasClock:!0})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("contextmenu",this.handlerClickClose),document.addEventListener("click",this.handlerClickOpen)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handlerClickClose),document.removeEventListener("click",this.handlerClickOpen)}},{key:"render",value:function(){var e=this.state.hasClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),e&&Object(m.jsx)(d,{})]})}}]),n}(s.Component);c.a.render(Object(m.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cfeed2ed.chunk.js.map