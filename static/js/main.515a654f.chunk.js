(this["webpackJsonpbluepoint-pruebas"]=this["webpackJsonpbluepoint-pruebas"]||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),o=c(8),a=c.n(o),s=(c(25),c(14)),i=c.n(s),l=c(15),u=c(20),j=c(7),d=(c(27),c(44)),b=c(1),h=function(e){var t=e.repos;return t&&0!==t.length?Object(b.jsxs)(d.a,{bordered:!0,className:"tabla-color",children:[Object(b.jsx)("thead",{className:"tabla-color",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Id"}),Object(b.jsx)("th",{children:"Login"}),Object(b.jsx)("th",{children:"Nombres"}),Object(b.jsx)("th",{children:"Apellidos"}),Object(b.jsx)("th",{children:"Estado"}),Object(b.jsx)("th",{children:"Actualizaci\xf3n"}),Object(b.jsx)("th",{children:"Escojer"})]})}),Object(b.jsx)("tbody",{className:"tabla-color",children:t.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.usuario_id}),Object(b.jsx)("td",{children:t.usuario_login}),Object(b.jsx)("td",{children:t.nombres}),Object(b.jsx)("td",{children:t.primer_apellido+" "+t.segundo_apellido}),Object(b.jsx)("td",{children:t.codigo_estado}),Object(b.jsx)("td",{children:t.fecha_actualizacion}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){return e.choosePerson(t.usuario_id)},children:"Escojer"})})]},t.usuario_id)}))})]}):Object(b.jsx)("p",{className:"vacio",children:"No hay registros para mostrar"})},O=c(45),p=c(46),m=c(47);var f=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),r=c[0],o=c[1];return Object(b.jsx)(O.a,{children:Object(b.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim()&&(e.searchservice(r),o(""))},children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(m.a,{lg:"3",md:"6",sm:"12",children:"Usuario:"}),Object(b.jsx)(m.a,{lg:"9",md:"6",sm:"12",children:Object(b.jsx)("input",{type:"text",id:"cuadro_busqueda",className:"input input__lg",name:"cuadro_busqueda",autoComplete:"off",value:r,onChange:function(e){o(e.target.value)}})})]})})})};var x=function(e){var t=Object(n.useState)(e.personState),c=Object(j.a)(t,2),r=c[0],o=c[1],a=Object(n.useRef)(null),s=Object(n.useState)(!1),i=Object(j.a)(s,2),l=i[0],u=i[1],d=Object(n.useState)(!1),h=Object(j.a)(d,2),p=h[0],m=h[1];function f(t){t.preventDefault(),e.updatePerson(r),u(!1)}var x=Object(b.jsxs)("div",{className:"stack-small",children:[Object(b.jsx)("div",{className:"c-cb",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:r.usuario_id}),Object(b.jsx)("li",{children:r.tipo_documento}),Object(b.jsx)("li",{children:r.numero_documento}),Object(b.jsx)("li",{children:r.nombres})]})}),Object(b.jsx)("div",{className:"btn-group",children:Object(b.jsx)("button",{type:"button",className:"btn",onClick:function(){return u(!0)},ref:a,children:"Edit"})})]}),g=Object(b.jsxs)("form",{onSubmit:f,children:[Object(b.jsxs)(O.a,{children:["\xa8",Object(b.jsx)("input",{name:"nombres",id:"nombres",onChange:function(t){var c=t.target.name,n=t.target.value;r[c]=n,m(!0),e.wasUpdatedForm(r)},defaultValue:r.nombres,maxLength:"50",type:"text"})]}),Object(b.jsx)("button",{disabled:!p,onClick:function(){return f},children:"Actualizar"}),Object(b.jsx)("button",{onClick:function(){return m(!1),void u(!1)},children:"Cancelar"})]});return Object(n.useEffect)((function(){console.log("USE EFFECT"),o(e.personState)})),l?g:x},g=c(50),v=c(48),_=c(49);c(31);var S=function(){var e=Object(n.useState)({repos:null}),t=Object(j.a)(e,2),c=t[0],r=t[1],o=Object(n.useState)({reposBack:null}),a=Object(j.a)(o,2),s=a[0],d=a[1],O=Object(n.useState)(!1),p=Object(j.a)(O,2),m=p[0],S=p[1],C=Object(n.useState)(""),N=Object(j.a)(C,2),k=N[0],y=N[1],w=Object(n.useState)(!1),E=Object(j.a)(w,2),F=E[0],P=E[1],z=Object(n.useState)({usuario_id:"",tipo_documento:"",numero_documento:"",nombres:"",primer_apellido:"",segundo_apellido:"",tipo_usuario:"",tipo_gestor:"",email_laboral:"",telefono_laboral:"",movil_laboral:"",usuario_login:"",codigo_estado:"",usuario_actualizacion:"",fecha_actualizacion:"",extension_asterisk:"",password_asterisk:"",accion:""}),T=Object(j.a)(z,2),U=T[0],B=T[1];function D(){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(i.a.mark((function e(){var t,c,n,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",c=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){S(!m)}function M(e){return 1==e.toString().length?"0"+e.toString():e.toString()}return Object(n.useEffect)((function(){})),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h4",{children:"BluePoint Pruebas"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(f,{searchservice:function(e){D("https://app.crmetric.com/srv-crmetric-web/rest/usuario/listarUsuarioxnombre",{nombres:e}).then((function(e){if(105===e.codigo)r({repos:null});else{var t=e.data.map((function(e){return e.fecha_actualizacion=e.fecha_actualizacion.split(" ")[0],e}));r({repos:Object(l.a)(t)}),d({reposBack:Object(l.a)(t)})}}))}})}),Object(b.jsx)("div",{className:"repo-container",children:Object(b.jsx)(h,{repos:c.repos,choosePerson:function(e){if(console.log(F),F)y("<h5>Hay datos editados sin actualizar. \xbfDesea descartarlos?</h5>"),L();else{var t=c.repos.filter((function(t){return e==t.usuario_id}));B(t[0])}}})}),Object(b.jsx)("div",{className:"repo-container",children:Object(b.jsx)(x,{personState:U,updatePerson:function(e){var t=new Date;e.fecha_actualizacion=function(e){return e.getFullYear()+"-"+M(e.getMonth()+1)+"-"+M(e.getUTCDate())+" "+M(e.getHours())+":"+M(e.getMinutes())+":"+M(e.getSeconds())}(t),console.log(e),D("https://app.crmetric.com/srv-crmetric-web/rest/usuario/registrarUsuario",e).then((function(e){"100"===e.codigo?(console.log(e.codigo),console.log(100===e.codigo),y("<h5>Codigo: 100</h5><h5>Mensaje:"+e.mensaje+"</h5>"),L()):console.log(e)}))},wasUpdatedForm:function(e){var t=s.reposBack.filter((function(t){return e.usuario_id==t.usuario_id}));P(t!==e)}})}),Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"footer",children:["Hecho con "," ",Object(b.jsx)("span",{role:"img","aria-label":"love",children:"\ud83d\udc9a"})," ","por Andr\xe9s Fernando Piedra"]})}),Object(b.jsxs)(g.a,{isOpen:m,children:[Object(b.jsx)(v.a,{children:Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:k}})}),Object(b.jsx)(_.a,{children:Object(b.jsx)("button",{onClick:function(){return L()},children:"Cancelar"})})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),o(e),a(e)}))};c(42);a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),C()}},[[43,1,2]]]);
//# sourceMappingURL=main.515a654f.chunk.js.map