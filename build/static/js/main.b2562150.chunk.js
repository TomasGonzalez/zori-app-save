(this["webpackJsonpzori-app"]=this["webpackJsonpzori-app"]||[]).push([[0],{50:function(e,n,t){e.exports=t(65)},55:function(e,n,t){},63:function(e,n,t){e.exports=t.p+"static/media/login-side-image.3062eb0a.png"},65:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(35),c=t.n(o),i=(t(55),t(5)),l=t(4),u={color:{primary:"#0C77F8",green1:"#1a7b64",background:"#ffffff",black1:"#000000",underlineColor:"rgba(0,0,0,0.35)",gray1:"rgba(0,0,0,0.35)",danger:"#FC282B",lightDanger:"#E27875"},unit:{getRem:function(e){return"".concat(e/16,"rem")}}},m=t(9),s=t(32),f=t(14),d=t(28),p=t(29),h=t.n(p),g=t(48),b=t(36),v=t(45),x=t(20),E=t(27),w=t(49),j=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,y=function(e){if(!j.test(e))return"Please enter a valid email address"};function k(){var e=Object(i.a)(["\n  margin-top: 8px;\n  font-size: 12px;\n  color: ",";\n"]);return k=function(){return e},e}function O(){var e=Object(i.a)(["\n  border-width: 0px 0px 1px 0px;\n  border-color: ",";\n  outline: none;\n  width: 100%;\n  font-size: 14px;\n  padding: 4.5px 0px;\n\n  ::placeholder {\n    color: ",";\n  }\n"]);return O=function(){return e},e}function S(){var e=Object(i.a)([""]);return S=function(){return e},e}var z=l.c.div(S()),T=l.c.input(O(),(function(e){return e.meta&&e.meta.error||!e.value?e.theme.color.danger:e.theme.color.gray1}),(function(e){return e.meta&&e.meta.error&&e.meta.touched?e.theme.color.danger:e.theme.color.gray1})),I=l.c.div(k(),(function(e){return e.theme.color.lightDanger})),A=function(e){return a.a.createElement(z,e,a.a.createElement(T,Object.assign({type:e.type},e.input,{meta:e.meta,placeholder:e.placeholder})),e.meta.error&&e.meta.touched&&a.a.createElement(I,null,e.meta.error))},C=function(e){return a.a.createElement(z,e,a.a.createElement(T,Object.assign({type:"password"},e.input,{meta:e.meta,placeholder:e.placeholder})),e.meta.error&&e.meta.touched&&a.a.createElement(I,null,e.meta.error))},$=t(46);function B(){var e=Object(i.a)(["\n  width: 15px;\n  height: 15px;\n  border: solid 1px ",";\n  border-radius: 3px;\n  cursor: pointer;\n"]);return B=function(){return e},e}function D(){var e=Object(i.a)(["\n  color: ",";\n  font-size: 14px;\n  margin-left: 10px;\n"]);return D=function(){return e},e}function R(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return R=function(){return e},e}var F=l.c.div(R()),J=l.c.div(D(),(function(e){return e.theme.color.gray1})),L=l.c.div(B(),(function(e){return e.theme.color.gray1})),W=Object(l.d)((function(e){return a.a.createElement(F,e,a.a.createElement(L,{onClick:function(){e.input.onChange(!e.input.value)}},e.input.value&&a.a.createElement($.a,{color:e.theme.color.gray1})),a.a.createElement(J,null,e.label))}));function Z(){var e=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n"]);return Z=function(){return e},e}function q(){var e=Object(i.a)(["\n  width: 296px;\n  height: 48px;\n  border-radius: 6px;\n  border: solid 1px rgba(0, 0, 0, 0.35);\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return q=function(){return e},e}var M=l.c.div(q(),(function(e){return"dark"!==e.buttonStyle?e.theme.color.background:e.theme.color.black1})),P=l.c.div(Z(),(function(e){return"dark"!==e.buttonStyle?e.theme.color.gray1:e.theme.color.background})),Y=function(e){return a.a.createElement(M,Object.assign({},e,{buttonStyle:e.buttonStyle}),a.a.createElement(P,{buttonStyle:e.buttonStyle},e.label))};function G(){var e=Object(i.a)(["\n  mutation TokenAuth($email: String!, $password: String!) {\n    tokenAuth(username: $email, password: $password) {\n      token\n    }\n  }\n"]);return G=function(){return e},e}function H(){var e=Object(i.a)(["\n  max-width: 616px;\n  display: flex;\n  flex-direction: column;\n"]);return H=function(){return e},e}function K(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return K=function(){return e},e}function N(){var e=Object(i.a)(["\n  width: 204px;\n  height: 17px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: ",";\n"]);return N=function(){return e},e}function Q(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return Q=function(){return e},e}function U(){var e=Object(i.a)(["\n  min-width: 650px;\n  padding: 48px;\n"]);return U=function(){return e},e}function V(){var e=Object(i.a)(["\n  font-size: 30px;\n  font-weight: bold;\n"]);return V=function(){return e},e}function X(){var e=Object(i.a)(["\n  width: 18px;\n  height: 3px;\n  background-color: ",";\n"]);return X=function(){return e},e}function _(){var e=Object(i.a)(["\n  margin-bottom: 62px;\n"]);return _=function(){return e},e}function ee(){var e=Object(i.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"]);return ee=function(){return e},e}function ne(){var e=Object(i.a)(["\n  height: 100vh;\n\n  @media (max-width: 1024px) {\n    display: none;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n"]);return te=function(){return e},e}var re=l.c.div(te()),ae=l.c.img(ne()),oe=l.c.div(ee(),(function(e){return e.theme.color.white})),ce=l.c.div(_()),ie=l.c.div(X(),(function(e){return e.theme.color.green1})),le=l.c.div(V()),ue=l.c.form(U()),me=l.c.div(Q()),se=l.c.div(N(),(function(e){return e.theme.color.green1})),fe=l.c.div(K()),de=l.c.div(H());var pe=Object(w.a)(G()),he=function(){var e=Object(E.a)(pe),n=Object(v.a)(e,2),r=n[0],o=(n[1].data,Object(f.g)()),c=function(){var e=Object(b.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.email||!n.password){e.next=9;break}return e.prev=1,e.next=4,r({variables:Object(g.a)({},n)}).then((function(e){n.checkbox&&localStorage.setItem("jwtToken",e.data.tokenAuth.token),sessionStorage.setItem("jwtToken",e.data.tokenAuth.token),o.push("/test")}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(re,null,a.a.createElement(ae,{alt:"Office Deskt",src:t(63)}),a.a.createElement(oe,null,a.a.createElement(x.b,{onSubmit:c,render:function(e){var n=e.handleSubmit;return a.a.createElement(ue,null,a.a.createElement(ce,null,a.a.createElement(le,null,"Log in"),a.a.createElement(ie,null)),a.a.createElement(de,null,a.a.createElement(x.a,{validate:y,name:"email",component:A,style:{marginBottom:84},placeholder:"Enter your email address"}),a.a.createElement(x.a,{name:"password",component:C,placeholder:"Enter your password"}),a.a.createElement(x.a,{name:"checkbox"},(function(e){var n=e.input;return a.a.createElement(me,{style:{marginTop:8}},a.a.createElement(W,{input:n,label:"stay signed in"}),a.a.createElement(se,null,"did you forget your password?"))})),a.a.createElement(fe,{style:{marginTop:80}},a.a.createElement(Y,{label:"Sign up"}),a.a.createElement(Y,{onClick:n,buttonStyle:"dark",label:"Log in"}))))}})))},ge=function(){return a.a.createElement("div",null,"You are logged in")};function be(){var e=function(e){var n=e.children,t=Object(s.a)(e,["children"]);return a.a.createElement(f.b,Object.assign({},t,{render:function(e){var t=e.location;return localStorage.getItem("jwtToken")||sessionStorage.getItem("jwtToken")?n:a.a.createElement(f.a,{to:{pathname:"/login",state:{from:t}}})}}))},n=function(e){var n=e.children,t=Object(s.a)(e,["children"]);return a.a.createElement(f.b,Object.assign({},t,{exact:!0,render:function(){return localStorage.getItem("jwtToken")||sessionStorage.getItem("jwtToken")?a.a.createElement(f.a,{to:{pathname:"/"}}):n}}))};return a.a.createElement(d.a,null,a.a.createElement("div",null,a.a.createElement(f.d,null,a.a.createElement(f.b,{exact:!0,path:"/",render:function(){return localStorage.getItem("jwtToken")||sessionStorage.getItem("jwtToken")?a.a.createElement(f.a,{to:"/test"}):a.a.createElement(f.a,{to:"/login"})}}),a.a.createElement(n,{path:"/login"},a.a.createElement(he,null)),a.a.createElement(e,{path:"/test"},a.a.createElement(ge,null)))))}var ve=t(12),xe=(t(26),t(16)),Ee=t(15),we=new xe.a({uri:"http://zorishop-dev.us-west-2.elasticbeanstalk.com/graphql/"}),je=new Ee.a,ye=new ve.a({link:we,cache:je});function ke(){var e=Object(i.a)(["\n@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap);\n\n  *{\n    font-family: 'Rubik', sans-serif;\n  }\n"]);return ke=function(){return e},e}var Oe=Object(l.b)(ke());var Se=function(){return a.a.createElement(m.a,{client:ye},a.a.createElement(l.a,{theme:u},a.a.createElement(Oe,null),a.a.createElement(be,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.b2562150.chunk.js.map