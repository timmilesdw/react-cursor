(this["webpackJsonpreact-cursor-example"]=this["webpackJsonpreact-cursor-example"]||[]).push([[0],{12:function(n,e,t){n.exports=t(20)},13:function(n,e,t){},20:function(n,e,t){"use strict";t.r(e);t(13);var r=t(0),i=t.n(r),o=t(8),a=t.n(o),l=t(4),u=t(2),c=t(1);function s(n,e){return e||(e=n.slice(0)),n.raw=e,n}function d(){var n=s(["\n  width: ",";\n  height: ",";\n  border-radius: 100%;\n  border: ",";\n  transition: ",";\n  pointer-events: none;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n  position: absolute;\n  mix-blend-mode: ",";\n  display: ",";\n"]);return d=function(){return n},n}function m(){var n=s(["\n  width: ",";\n  height: ",";\n  position: absolute;\n  transform: translate(-50%, -50%);\n  background: ",";\n  z-index: 999;\n  border-radius: 100%;\n  pointer-events: none;\n  overflow: auto;\n  mix-blend-mode: ",";\n"]);return m=function(){return n},n}var p=function(n){var e=n.x,t=n.y,r=n.color,o=n.noRing,a=n.mixBlend,l=n.dotSize,u=n.ringSize,c=n.transitionTime;return i.a.createElement("div",null,i.a.createElement(f,{color:r,mixBlend:a,dotSize:l,x:e,y:t}),i.a.createElement(b,{noRing:o,color:r,mixBlend:a,transitionTime:c,ringSize:u,x:e,y:t}))},f=c.b.div.attrs((function(n){return{style:{transform:"translate("+n.x+"px, "+n.y+"px)"}}}))(m(),(function(n){return n.dotSize?n.dotSize+"px":"8px"}),(function(n){return n.dotSize?n.dotSize+"px":"8px"}),(function(n){return n.color?n.color:"black"}),(function(n){return n.mixBlend?"difference":"none"})),b=c.b.div.attrs((function(n){return{style:{transform:"translate("+(n.x-n.ringSize/2.2)+"px, "+(n.y-n.ringSize/2.2)+"px)"}}}))(d(),(function(n){return n.ringSize?n.ringSize+"px":"36px"}),(function(n){return n.ringSize?n.ringSize+"px":"36px"}),(function(n){return n.color?"2px solid "+n.color:"2px solid black"}),(function(n){return n.transitionTime?"transform "+n.transitionTime+"ms ease-out":"transform 0.1s ease-out"}),(function(n){return n.mixBlend?"difference":"none"}),(function(n){return n.noRing?"none":"block"}));function g(){var n=s(["\n* {\n    cursor: none !important;\n}\n"]);return g=function(){return n},n}function v(){var n=s(["\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    z-index: 999;\n"]);return v=function(){return n},n}var h=function(n){var e=n.children,t=n.color,o=n.noRing,a=n.ringSize,l=n.transitionTime;Object(r.useEffect)((function(){window.innerWidth<600?f(!1):f(!0),c.x>window.innerWidth&&s({x:x--,y:y}),c.y>window.innerHeight&&s({x:x,y:y--})}));var u=Object(r.useState)({x:0,y:0}),c=u[0],s=u[1],d=Object(r.useState)(!0),m=d[0],f=d[1];return i.a.createElement(E,{onMouseMove:function(n){return s({x:n.pageX,y:n.pageY})}},i.a.createElement(S,null),m?i.a.createElement(p,{color:t,noRing:o,ringSize:a,transitionTime:l,x:c.x,y:c.y}):null,e)},E=c.b.div(v()),S=Object(c.a)(g());function z(){var n=Object(l.a)(["\n  font-size: 36px;\n  text-align: center;\n  height: 300px;\n"]);return z=function(){return n},n}function w(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  width: 50%\n"]);return w=function(){return n},n}function j(){var n=Object(l.a)(["\n  width: 70%;\n  display: flex;\n  margin: 0 auto;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]);return j=function(){return n},n}var O=function(){var n=Object(r.useState)("black"),e=Object(u.a)(n,2),t=e[0],o=e[1],a=Object(r.useState)(100),l=Object(u.a)(a,2),c=l[0],s=l[1],d=Object(r.useState)(!1),m=Object(u.a)(d,2),p=m[0],f=m[1],x=Object(r.useState)(36),b=Object(u.a)(x,2),g=b[0],v=b[1];return i.a.createElement(h,{color:t,noRing:p,ringSize:g,transitionTime:c},i.a.createElement(k,null,"Simple React Custom Cursor Component",i.a.createElement("br",null),"No lags is achieved by using transform property, which is rendered by GPU, not CPU",i.a.createElement("br",null),"You can play with props in the form under"),i.a.createElement(T,null,i.a.createElement(R,null,i.a.createElement("div",null,"Color"),i.a.createElement("div",null,"color prop :string"),i.a.createElement("input",{type:"text",value:t,onChange:function(n){return o(n.target.value)},placeholder:"Type color here in hex or valid css color like yellow"})),i.a.createElement(R,null,i.a.createElement("div",null,"Transition in ms"),i.a.createElement("div",null,"transitionTime prop :number"),i.a.createElement("input",{value:c,onChange:function(n){return s(n.target.value)},placeholder:"Type transition duration in ms"})),i.a.createElement(R,null,i.a.createElement("div",null,"Ring"),i.a.createElement("div",null,"noRing prop :boolean"),i.a.createElement("button",{onClick:function(){return f(!p)}},p?"Enable ring":"Disable ring")),i.a.createElement(R,null,i.a.createElement("div",null,"Ring Size"),i.a.createElement("div",null,"ringSize prop :number"),i.a.createElement("input",{value:g,onChange:function(n){return v(n.target.value)},placeholder:"Type size of the ring"}))))},T=c.b.div(j()),R=c.b.div(w()),k=c.b.div(z());a.a.render(i.a.createElement(O,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.a887fa9e.chunk.js.map