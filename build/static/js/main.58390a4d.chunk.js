(this.webpackJsonpletter=this.webpackJsonpletter||[]).push([[0],{30:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},39:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(23),s=c.n(n),j=(c(30),c(31),c(32),c(15)),i=c(6),o=c(13),l=c.n(o),b=c(14),d=c(9),O=(c(34),c(47)),h=c(46),u=c(48),x=c(2);var p=function(e){var t=Object(a.useState)(),c=Object(d.a)(t,2),r=c[0],n=c[1],s=Object(a.useState)(),j=Object(d.a)(s,2),i=j[0],o=j[1],p=Object(a.useState)(),v=Object(d.a)(p,2),f=v[0],m=v[1],g=Object(a.useState)(),w=Object(d.a)(g,2),y=w[0],S=w[1],C=Object(a.useState)("primary"),N=Object(d.a)(C,2),k=N[0],A=N[1];function B(){return(B=Object(b.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r&&i&&f&&y&&k)){t.next=6;break}return c={where:r,title:i,message:f,who:y,color:k,createdAt:new Date},localStorage.setItem("letter",JSON.stringify(c)),t.next=5,e.history.push("/letter");case 5:return t.abrupt("return",t.sent);case 6:window.alert("Preencha todos os campos!!!");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"form",children:Object(x.jsxs)(O.a,{children:[Object(x.jsx)(O.a.Header,{children:"Insira as informa\xe7\xf5es solicitadas para gerar a sua carta"}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsxs)("div",{className:"first-line",children:[Object(x.jsx)("section",{children:Object(x.jsxs)(h.a.Group,{className:"where",children:[Object(x.jsx)(h.a.Label,{children:"De onde voc\xea escreve?"}),Object(x.jsx)(h.a.Control,{onChange:function(e){return n(e.target.value)}})]})}),Object(x.jsx)("section",{children:Object(x.jsxs)(h.a.Group,{className:"title",children:[Object(x.jsx)(h.a.Label,{children:"Titulo da carta"}),Object(x.jsx)(h.a.Control,{onChange:function(e){return o(e.target.value)}})]})})]}),Object(x.jsx)("section",{children:Object(x.jsxs)(h.a.Group,{children:[Object(x.jsx)(h.a.Label,{children:"Mensagem"}),Object(x.jsx)(h.a.Control,{as:"textarea",rows:5,onChange:function(e){return m(e.target.value)}})]})}),Object(x.jsx)("section",{children:Object(x.jsxs)(h.a.Group,{children:[Object(x.jsx)(h.a.Label,{children:"Quem \xe9 voc\xea?"}),Object(x.jsx)(h.a.Control,{onChange:function(e){return S(e.target.value)}})]})}),Object(x.jsx)("section",{children:Object(x.jsxs)(h.a.Group,{children:[Object(x.jsx)(h.a.Label,{children:"Escolha a cor da carta"}),Object(x.jsxs)(h.a.Control,{as:"select",custom:!0,onChange:function(e){return A(e.target.value)},children:[Object(x.jsx)("option",{value:"primary",defaultValue:!0,children:"Azul"}),Object(x.jsx)("option",{value:"danger",children:"Vermelho"}),Object(x.jsx)("option",{value:"success",children:"Verde"}),Object(x.jsx)("option",{value:"warning",children:"Amarelo"}),Object(x.jsx)("option",{value:"light",children:"Branco"}),Object(x.jsx)("option",{value:"dark",children:"Preto"}),Object(x.jsx)("option",{value:"secondary",children:"Cinza"})]})]})})]}),Object(x.jsx)(u.a,{variant:"dark",onClick:function(){return B.apply(this,arguments)},children:"Criar"})]})})})},v=(c(39),c(45));var f=function(e){var t=Object(a.useState)(),c=Object(d.a)(t,2),r=c[0],n=c[1],s=Object(a.useState)(),i=Object(d.a)(s,2),o=i[0],h=i[1],u=Object(a.useState)(),p=Object(d.a)(u,2),f=p[0],m=p[1],g=Object(a.useState)(),w=Object(d.a)(g,2),y=w[0],S=w[1],C=Object(a.useState)(),N=Object(d.a)(C,2),k=N[0],A=N[1],B=Object(a.useState)(),G=Object(d.a)(B,2),L=G[0],I=G[1];return Object(a.useEffect)(Object(b.a)(l.a.mark((function t(){var c,a,r,s,j,i,o,b;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=localStorage.getItem("letter")){t.next=5;break}return window.alert("Preencha os dados da carta!"),t.next=5,e.history.push("/");case 5:a=JSON.parse(c),r=a.where,s=a.title,j=a.message,i=a.who,o=a.color,b=a.createdAt,n(r),h(s),m(j),S(i),A(o),console.log(o),I(Object(v.a)(new Date(b),"MM/dd/yyyy"));case 13:case"end":return t.stop()}}),t)}))),[]),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"letter",children:[Object(x.jsx)(j.b,{to:"/",children:"Voltar"}),Object(x.jsxs)(O.a,{bg:k,text:"light"===k?"dark":"white",children:[Object(x.jsx)("section",{className:"header",children:Object(x.jsxs)(O.a.Header,{children:[r,", ",L]})}),Object(x.jsxs)(O.a.Body,{className:"body",children:[Object(x.jsx)("section",{children:Object(x.jsx)("h2",{children:o})}),Object(x.jsx)(O.a.Body,{children:Object(x.jsx)("section",{children:Object(x.jsx)("strong",{children:Object(x.jsx)("p",{children:f})})})}),Object(x.jsx)("section",{children:Object(x.jsxs)("h3",{children:["Ass.: ",y]})})]})]},1)]})})};var m=function(){return Object(x.jsx)(j.a,{children:Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{path:"/",exact:!0,component:p}),Object(x.jsx)(i.a,{path:"/letter",component:f})]})})};var g=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(m,{})})};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.58390a4d.chunk.js.map