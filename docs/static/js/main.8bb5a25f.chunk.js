(this["webpackJsonpreact-cursor-example"]=this["webpackJsonpreact-cursor-example"]||[]).push([[0],{12:function(e,n,t){e.exports=t(20)},13:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);t(13);var r=t(0),i=t.n(r),o=t(8),a=t.n(o),s=t(4),l=t(2),c=t(1);function u(e,n){return n||(n=e.slice(0)),e.raw=n,e}function h(){var e=u(["\n  width: ",";\n  height: ",";\n  border-radius: 100%;\n  border: ",";\n  transition: ",";\n  pointer-events: none;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n  position: absolute;\n  mix-blend-mode: ",";\n  display: ",";\n"]);return h=function(){return e},e}function d(){var e=u(["\n  width: ",";\n  height: ",";\n  position: absolute;\n  transform: translate(-50%, -50%);\n  background: ",";\n  z-index: 999;\n  border-radius: 100%;\n  pointer-events: none;\n  overflow: auto;\n  mix-blend-mode: ",";\n"]);return d=function(){return e},e}var m=function(e){var n=e.x,t=e.y,r=e.color,o=e.noRing,a=e.mixBlend,s=e.dotSize,l=e.ringSize,c=e.transitionTime;return i.a.createElement("div",null,i.a.createElement(p,{color:r,mixBlend:a,dotSize:s,x:n,y:t}),i.a.createElement(f,{noRing:o,color:r,mixBlend:a,transitionTime:c,ringSize:l,x:n,y:t}))},p=c.b.div.attrs((function(e){return{style:{transform:"translate("+e.x+"px, "+e.y+"px)"}}}))(d(),(function(e){return e.dotSize?e.dotSize+"px":"8px"}),(function(e){return e.dotSize?e.dotSize+"px":"8px"}),(function(e){return e.color?e.color:"black"}),(function(e){return e.mixBlend?"difference":"none"})),f=c.b.div.attrs((function(e){return{style:{transform:"translate("+(e.x-e.ringSize/2.25)+"px, "+(e.y-e.ringSize/2.25)+"px)"}}}))(h(),(function(e){return e.ringSize?e.ringSize+"px":"36px"}),(function(e){return e.ringSize?e.ringSize+"px":"36px"}),(function(e){return e.color?"2px solid "+e.color:"2px solid black"}),(function(e){return e.transitionTime?"transform "+e.transitionTime+"ms ease-out":"transform 0.1s ease-out"}),(function(e){return e.mixBlend?"difference":"none"}),(function(e){return e.noRing?"none":"block"}));function y(){var e=u(["\n* {\n    cursor: none !important;\n}\n"]);return y=function(){return e},e}function g(){var e=u(["\n    width: 100%;\n    min-height: 100vh;\n"]);return g=function(){return e},e}var b=[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i],v=function(e){var n=e.children,t=e.color,o=e.noRing,a=e.ringSize,s=e.transitionTime;Object(r.useEffect)((function(){b.some((function(e){return navigator.userAgent.match(e)}))?p(!1):p(!0)}));var l=Object(r.useState)({x:0,y:0}),c=l[0],u=l[1],h=Object(r.useState)(!0),d=h[0],p=h[1];return i.a.createElement(x,{onMouseOut:console.log("kek"),onMouseMove:function(e){return u({x:e.pageX,y:e.pageY})}},i.a.createElement(w,null),d?i.a.createElement(m,{color:t,noRing:o,ringSize:a,transitionTime:s,x:c.x,y:c.y}):null,n)},x=c.b.div(g()),w=Object(c.a)(y());function E(){var e=Object(s.a)(["\n  font-size: 36px;\n  text-align: center;\n  height: 300px;\n"]);return E=function(){return e},e}function S(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  width: 50%\n"]);return S=function(){return e},e}function z(){var e=Object(s.a)(["\n  width: 70%;\n  display: flex;\n  margin: 0 auto;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]);return z=function(){return e},e}var j=function(){var e=Object(r.useState)("black"),n=Object(l.a)(e,2),t=n[0],o=n[1],a=Object(r.useState)(100),s=Object(l.a)(a,2),c=s[0],u=s[1],h=Object(r.useState)(!1),d=Object(l.a)(h,2),m=d[0],p=d[1],f=Object(r.useState)(36),y=Object(l.a)(f,2),g=y[0],b=y[1];return i.a.createElement(v,{color:t,noRing:m,ringSize:g,transitionTime:c},i.a.createElement("div",null,i.a.createElement(T,null,"Simple React Custom Cursor Component",i.a.createElement("br",null),"No lags is achieved by using transform property, which is rendered by GPU, not CPU",i.a.createElement("br",null),"You can play with props in the form under"),i.a.createElement(k,null,i.a.createElement(O,null,i.a.createElement("div",null,"Color"),i.a.createElement("div",null,"color prop :string"),i.a.createElement("input",{type:"text",value:t,onChange:function(e){return o(e.target.value)},placeholder:"Type color here in hex or valid css color like yellow"})),i.a.createElement(O,null,i.a.createElement("div",null,"Transition in ms"),i.a.createElement("div",null,"transitionTime prop :number"),i.a.createElement("input",{value:c,onChange:function(e){return u(e.target.value)},placeholder:"Type transition duration in ms"})),i.a.createElement(O,null,i.a.createElement("div",null,"Ring"),i.a.createElement("div",null,"noRing prop :boolean"),i.a.createElement("button",{onClick:function(){return p(!m)}},m?"Enable ring":"Disable ring")),i.a.createElement(O,null,i.a.createElement("div",null,"Ring Size"),i.a.createElement("div",null,"ringSize prop :number"),i.a.createElement("input",{value:g,onChange:function(e){return b(e.target.value)},placeholder:"Type size of the ring"}))),i.a.createElement(T,{style:{marginTop:"5%"}},"In physics, string theory is a theoretical framework in which the point-like particles of particle physics are replaced by one-dimensional objects called strings. It describes how these strings propagate through space and interact with each other. On distance scales larger than the string scale, a string looks just like an ordinary particle, with its mass, charge, and other properties determined by the vibrational state of the string. In string theory, one of the many vibrational states of the string corresponds to the graviton, a quantum mechanical particle that carries gravitational force. Thus string theory is a theory of quantum gravity. String theory is a broad and varied subject that attempts to address a number of deep questions of fundamental physics. String theory has been applied to a variety of problems in black hole physics, early universe cosmology, nuclear physics, and condensed matter physics, and it has stimulated a number of major developments in pure mathematics. Because string theory potentially provides a unified description of gravity and particle physics, it is a candidate for a theory of everything, a self-contained mathematical model that describes all fundamental forces and forms of matter. Despite much work on these problems, it is not known to what extent string theory describes the real world or how much freedom the theory allows in the choice of its details. String theory was first studied in the late 1960s as a theory of the strong nuclear force, before being abandoned in favor of quantum chromodynamics. Subsequently, it was realized that the very properties that made string theory unsuitable as a theory of nuclear physics made it a promising candidate for a quantum theory of gravity. The earliest version of string theory, bosonic string theory, incorporated only the class of particles known as bosons. It later developed into superstring theory, which posits a connection called supersymmetry between bosons and the class of particles called fermions. Five consistent versions of superstring theory were developed before it was conjectured in the mid-1990s that they were all different limiting cases of a single theory in 11 dimensions known as M-theory. In late 1997, theorists discovered an important relationship called the AdS/CFT correspondence, which relates string theory to another type of physical theory called a quantum field theory. One of the challenges of string theory is that the full theory does not have a satisfactory definition in all circumstances. Another issue is that the theory is thought to describe an enormous landscape of possible universes, which has complicated efforts to develop theories of particle physics based on string theory. These issues have led some in the community to criticize these approaches to physics, and to question the value of continued research on string theory unification.")))},k=c.b.div(z()),O=c.b.div(S()),T=c.b.div(E());a.a.render(i.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8bb5a25f.chunk.js.map