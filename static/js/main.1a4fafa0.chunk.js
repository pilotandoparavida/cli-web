(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.90f64a36.png"},33:function(e,t,a){e.exports=a(62)},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),l=a.n(o),c=a(15),i=a(10),u=a(5),s=a.n(u),m=a(9),d=a(2),p=a(29),f=a.n(p).a.create({baseURL:"https://cli-backend.herokuapp.com",timeout:3e4}),h=a(12),b=a.n(h);function g(e){var t=e.history,a=Object(n.useState)(""),o=Object(d.a)(a,2),l=o[0],i=o[1],u=Object(n.useState)(""),p=Object(d.a)(u,2),h=p[0],g=p[1],v=Object(n.useState)(""),E=Object(d.a)(v,2),j=E[0],O=E[1],S=Object(n.useState)(""),X=Object(d.a)(S,2),w=X[0],y=X[1],C=Object(n.useState)(""),x=Object(d.a)(C,2),F=x[0],A=x[1],I=Object(n.useState)(!1),D=Object(d.a)(I,2),N=D[0],M=D[1];function k(){var e=!0;if(h?y(""):(y("Informe a CNH."),e=!1),j){A("");var t=/[^\d]/,a=/^\s+|\s+$/g;if(10!==j.length)A("Data fora do padr\xe3o DD/MM/AAAA."),e=!1;else{var n=j.split("/");3!==n.length?(A("Data fora do padr\xe3o DD/MM/AAAA."),e=!1):(n[0]=n[0].replace(a,""),n[1]=n[1].replace(a,""),n[2]=n[2].replace(a,""),2===n[0].length&&2===n[1].length&&4===n[2].length||(A("Data fora do padr\xe3o DD/MM/AAAA"),e=!1),(t.test(n[0])||t.test(n[1])||t.test(n[2]))&&(A("Caracter inv\xe1lido encontrado!"),e=!1))}}else A("Informe a data de nascimento."),e=!1;return e}function _(){return(_=Object(m.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(""),a.preventDefault(),k()&&(M(!0),f.get("/login",{headers:{cnh:h,nascimento:j}}).then((function(e){M(!1);var a=e.data.dados._id;localStorage.setItem("@webppv/aluno_id",a),t&&t.push("/")})).catch((function(e){M(!1),e.response&&i(e.response.data.msg)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:b.a,style:{cursor:"pointer"},alt:"Pilotando para Vida",className:"logo",onClick:function(){return localStorage.removeItem("@webppv/aluno_id"),void localStorage.removeItem("@webppv/turma_id")}}),r.a.createElement("div",{className:"content"},r.a.createElement("form",{onSubmit:function(e){return _.apply(this,arguments)}},r.a.createElement("label",{htmlFor:"cnh"},"CNH*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},w),r.a.createElement("input",{type:"text",id:"cnh",placeholder:"CNH",onChange:function(e){return g(e.target.value)},value:h}),r.a.createElement("label",{htmlFor:"nascimento"},"Data de nascimento*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},F),r.a.createElement("input",{type:"text",id:"nascimento",placeholder:"Data de nascimento",onChange:function(e){return O(e.target.value)},value:j}),r.a.createElement("div",{style:{fontSize:12,color:"red"}},l),r.a.createElement("button",{type:"submit",disabled:N},N&&r.a.createElement("i",{className:"fa fa-refresh fa-spin"}),"Entrar")),r.a.createElement("p",null),r.a.createElement(c.b,{to:"/cad"},r.a.createElement("button",null,"Cadastro")))))}function v(e){var t=e.history,a="WEBPPV:Cadastro",o=Object(n.useState)(""),l=Object(d.a)(o,2),c=l[0],i=l[1],u=Object(n.useState)(""),p=Object(d.a)(u,2),h=p[0],g=p[1],v=Object(n.useState)(""),E=Object(d.a)(v,2),j=E[0],O=E[1],S=Object(n.useState)(""),X=Object(d.a)(S,2),w=X[0],y=X[1],C=Object(n.useState)(""),x=Object(d.a)(C,2),F=x[0],A=x[1],I=Object(n.useState)(""),D=Object(d.a)(I,2),N=D[0],M=D[1],k=Object(n.useState)(""),_=Object(d.a)(k,2),z=_[0],P=_[1],H=Object(n.useState)(""),W=Object(d.a)(H,2),V=W[0],J=W[1],L=Object(n.useState)(""),R=Object(d.a)(L,2),U=R[0],T=R[1],B=Object(n.useState)(""),G=Object(d.a)(B,2),$=G[0],q=G[1],Q=Object(n.useState)(""),Y=Object(d.a)(Q,2),Z=Y[0],K=Y[1],ee=Object(n.useState)(""),te=Object(d.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),oe=Object(d.a)(re,2),le=oe[0],ce=oe[1],ie=Object(n.useState)(""),ue=Object(d.a)(ie,2),se=ue[0],me=ue[1],de=Object(n.useState)(""),pe=Object(d.a)(de,2),fe=pe[0],he=pe[1],be=Object(n.useState)(""),ge=Object(d.a)(be,2),ve=ge[0],Ee=ge[1],je=Object(n.useState)(""),Oe=Object(d.a)(je,2),Se=Oe[0],Xe=Oe[1],we=Object(n.useState)(""),ye=Object(d.a)(we,2),Ce=ye[0],xe=ye[1],Fe=Object(n.useState)(""),Ae=Object(d.a)(Fe,2),Ie=Ae[0],De=Ae[1],Ne=Object(n.useState)(""),Me=Object(d.a)(Ne,2),ke=Me[0],_e=Me[1],ze=Object(n.useState)(""),Pe=Object(d.a)(ze,2),He=Pe[0],We=Pe[1],Ve=Object(n.useState)(""),Je=Object(d.a)(Ve,2),Le=Je[0],Re=Je[1],Ue=Object(n.useState)(""),Te=Object(d.a)(Ue,2),Be=Te[0],Ge=Te[1],$e=Object(n.useState)(!1),qe=Object(d.a)($e,2),Qe=qe[0],Ye=qe[1];function Ze(){console.log(a+":validateForm inside");var e=!0;if(Le){Ge(""),8!==Le.length&&(Ge("Placa fora do padr\xe3o XXX-XXXX."),e=!1);/^[a-z,A-Z]{3}-\d.\d{2}/.test(Le)||(Ge("Placa fora do padr\xe3o XXX-XXXX."),e=!1)}else Ge("Informe a placa da moto no padr\xe3o XXX-XXXX."),e=!1;if(Ce?De(""):(De("Informe o email."),e=!1),fe?Ee(""):(Ee("Informe o WhastApp."),e=!1),Z?(ne(""),2!==Z.length&&(ne("Informe a sigla da unidade federativa da CNH."),e=!1)):(ne("Informe a Unidade Federativa da CNH."),e=!1),F?M(""):(M("Informe o rg."),e=!1),j){y("");var t=j.split(".");if(3!==t.length)y("Informe o CPF no formato XXX.XXX.XXX-XX"),e=!1;else 2!==t[2].split("-").length?(y("Informe o d\xedgito do CPF."),e=!1):function(e){if("00000000000"===(e=(e=e[0]+e[1]+e[2]+e[3]).split("")))return!1;var t,a,n;for(t=0,n=0;n<9;n++)t+=e[n]*(10-n);if(10!==(a=10*t%11)&&11!==a||(a=0),a!==parseInt(e[9]))return!1;for(t=0,n=0;n<10;n++)t+=e[n]*(11-n);return 10!==(a=10*t%11)&&11!==a||(a=0),a===parseInt(e[10])}(j.split(/[\s.-]+/))||(y("CPF inv\xe1lido."),e=!1)}else y("Informe o CPF."),e=!1;if(c?g(""):(g("Informe o nome."),e=!1),U?(q(""),function(e){var t,a,n=e.charAt(0);if(11!==(e=e.replace(/[^\d]/g,"")).length&&9!==e.length||n.repeat(11)===e)return!1;9===e.length&&(e="00"+e);for(var r=0,o=0,l=9;o<=8;o++,l--)r+=l*+e[o];var c=10===(t=r%11)?-2:0;for(t>9&&(t=0),r=0,o=0,l=1;o<=8;o++,l++)r+=l*+e[o];return(a=r%11+c<0?11+r%11+c:r%11+c)>9&&(a=0),t===parseInt(e[9])&&a===parseInt(e[10])}(U)||(q("CNH inv\xe1lida."),e=!1)):(q("Informe a CNH."),e=!1),z){J("");var n=/[^\d]/,r=/^\s+|\s+$/g;if(10!==z.length)J("Data fora do padr\xe3o DD/MM/AAAA."),e=!1;else{var o=z.split("/");3!==o.length?(J("Data fora do padr\xe3o DD/MM/AAAA."),e=!1):(o[0]=o[0].replace(r,""),o[1]=o[1].replace(r,""),o[2]=o[2].replace(r,""),2===o[0].length&&2===o[1].length&&4===o[2].length||(J("Data fora do padr\xe3o DD/MM/AAAA"),e=!1),(n.test(o[0])||n.test(o[1])||n.test(o[2]))&&(J("Caracter inv\xe1lido encontrado!"),e=!1))}}else J("Informe a data de nascimento no padr\xe3o DD/MM/AAAA."),e=!1;return e}function Ke(){return(Ke=Object(m.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a+":handleSubmit:"+n),n.preventDefault(),Ze()&&(Ye(!0),f.post("/aluno/cadastro",{nome:c,cpf:j,rg:F,nascimento:z,cnh:U,ufcnh:Z,tempocnh:le,cidade:se,celular:fe,sexo:Se,email:Ce,marca:ke,modelo:He,placa:Le}).then((function(e){Ye(!1);var a=e.data,n=a.msg,r=a.dados;alert(n);var o=r._id,l=r.turma;localStorage.setItem("@webppv/aluno_id",o),localStorage.setItem("@webppv/turma_id",l),t&&t.push("/")})).catch((function(e){Ye(!1),e.response&&console.log(e.response.data.msg)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:b.a,alt:"Pilotando para Vida",className:"logo",onClick:function(){return console.log(a+":handleLogout"),void(t&&t.push("/"))}}),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Cadastre-se no ",r.a.createElement("strong",null,"Pilotando para Vida")),r.a.createElement("form",{onSubmit:function(e){return Ke.apply(this,arguments)}},r.a.createElement("label",{htmlFor:"nome"},"Nome*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},h),r.a.createElement("input",{type:"text",id:"nome",placeholder:"Nome",onChange:function(e){return i(e.target.value)},value:c}),r.a.createElement("label",{htmlFor:"cpf"},"CPF*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},w),r.a.createElement("input",{type:"text",id:"cpf",placeholder:"CPF no formato XXX.XXX.XXX-XX",onChange:function(e){return O(e.target.value)},value:j}),r.a.createElement("label",{htmlFor:"rg"},"RG*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},N),r.a.createElement("input",{type:"text",id:"rg",placeholder:"RG",onChange:function(e){return A(e.target.value)},value:F}),r.a.createElement("label",{htmlFor:"nascimento"},"Data de nascimento*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},V),r.a.createElement("input",{type:"text",id:"nascimento",placeholder:"Data de nascimento no formato XX/XX/XXXX",onChange:function(e){return P(e.target.value)},value:z}),r.a.createElement("label",{htmlFor:"cnh"},"CNH*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},$),r.a.createElement("input",{type:"text",id:"cnh",placeholder:"CNH",onChange:function(e){return T(e.target.value)},value:U}),r.a.createElement("label",{htmlFor:"ufcnh"},"UF da CNH*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},ae),r.a.createElement("input",{type:"text",id:"ufcnh",placeholder:"UF da CNH",onChange:function(e){return K(e.target.value)},value:Z}),r.a.createElement("label",{htmlFor:"tempocnh"},"Tempo de habilita\xe7\xe3o de moto"),r.a.createElement("input",{type:"text",id:"tempocnh",placeholder:"Tempo de habilita\xe7\xe3o de moto",onChange:function(e){return ce(e.target.value)},value:le}),r.a.createElement("label",{htmlFor:"cidade"},"Cidade"),r.a.createElement("input",{type:"text",id:"cidade",placeholder:"Cidade",onChange:function(e){return me(e.target.value)},value:se}),r.a.createElement("label",{htmlFor:"whats"},"WhatsApp*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},ve),r.a.createElement("input",{type:"text",id:"whats",placeholder:"WhatsApp (XX) xxxxx-xxxx",onChange:function(e){return he(e.target.value)},value:fe}),r.a.createElement("label",{htmlFor:"email"},"E-mail*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},Ie),r.a.createElement("input",{type:"email",id:"email",placeholder:"E-mail",onChange:function(e){return xe(e.target.value)},value:Ce}),r.a.createElement("label",{htmlFor:"sexo"},"Sexo"),r.a.createElement("select",{name:"sexo",id:"sexo",onChange:function(e){return Xe(e.target.value)},value:Se},r.a.createElement("option",{value:"M"},"Masculino"),r.a.createElement("option",{value:"F"},"Feminino")),r.a.createElement("label",null,"Dados da moto"),r.a.createElement("label",{htmlFor:"marca"},"Marca"),r.a.createElement("input",{type:"text",id:"marca",placeholder:"Marca",onChange:function(e){return _e(e.target.value)},value:ke}),r.a.createElement("label",{htmlFor:"modelo"},"Modelo"),r.a.createElement("input",{type:"text",id:"modelo",placeholder:"Modelo",onChange:function(e){return We(e.target.value)},value:He}),r.a.createElement("label",{htmlFor:"placa"},"Placa*"),r.a.createElement("div",{style:{fontSize:12,color:"red"}},Be),r.a.createElement("input",{type:"text",id:"placa",placeholder:"Placa no formato XXX-XXXX",onChange:function(e){return Re(e.target.value)},value:Le}),r.a.createElement("button",{type:"submit",disabled:Qe},Qe&&r.a.createElement("i",{className:"fa fa-cog fa-spin"}),"Cadastrar")))))}var E=a(32);function j(e){var t=e.history,a=["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],o=Object(n.useState)(!1),l=Object(d.a)(o,2),c=l[0],i=l[1],u=Object(n.useState)(!0),p=Object(d.a)(u,2),h=p[0],g=p[1],v=Object(n.useState)(localStorage.getItem("@webppv/aluno_id")||""),j=Object(d.a)(v,1)[0],O=Object(n.useState)(""),S=Object(d.a)(O,2),X=S[0],w=S[1],y=Object(n.useState)(""),C=Object(d.a)(y,2),x=C[0],F=C[1],A=Object(n.useState)(""),I=Object(d.a)(A,2),D=I[0],N=I[1],M=Object(n.useState)(""),k=Object(d.a)(M,2),_=k[0],z=k[1],P=Object(n.useState)(""),H=Object(d.a)(P,2),W=H[0],V=H[1],J=Object(n.useCallback)((function(e){if(localStorage.setItem("@webppv/turma_id",e.turma._id),"ESPERA"===e.turma.descricao)w("Lista de Espera"),F("\xe0 definir"),N("\xe0 definir"),V("");else{w(e.estado),F(e.turma.endereco);var t=new Date(e.turma.data);N(t.getDate()+" de "+a[t.getMonth()]+" de "+t.getFullYear()),V(e.turma.googlemaps)}z(e.confirmar)}),[a]);function L(){return(L=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(!0),f.get("/aluno/turma/aceitar",{headers:{aluno_id:j,turma_id:localStorage.getItem("@webppv/turma_id")}}).then((function(e){J(e.data.dados),i(!1)})).catch((function(e){i(!1),e.response&&console.log(e.response.data.msg),U()}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(!0),f.get("/aluno/turma/negar",{headers:{aluno_id:j,turma_id:localStorage.getItem("@webppv/turma_id")}}).then((function(e){200===e.status?(J(e.data.dados),i(!1),alert("Voc\xea foi transferido de turma!")):210===e.status?(i(!1),alert("Voc\xea foi removido do sistema. Caso tenha interesse em realizar o curso, realize novamente sua inscri\xe7\xe3o."),localStorage.removeItem("@webppv/aluno_id"),localStorage.removeItem("@webppv/turma_id"),t&&t.push("/login")):220===e.status&&(J(e.data.dados),i(!1),alert("Voc\xea j\xe1 fez o curso."))})).catch((function(e){i(!1),e.response&&console.log(e.response.data.msg),U()}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){localStorage.removeItem("@webppv/aluno_id"),localStorage.removeItem("@webppv/turma_id"),t&&t.push("/login")}function T(e){return r.a.createElement("div",null,r.a.createElement("p",null),r.a.createElement("label",null,"Voc\xea deve confirmar a sua presen\xe7a para que sua vaga seja garantida!"),r.a.createElement("p",null),r.a.createElement("button",{style:{width:"40%",margin:"10px"},onClick:function(){return function(){return L.apply(this,arguments)}()},disabled:c},r.a.createElement("label",null,"Sim")),r.a.createElement("button",{style:{width:"40%",margin:"10px"},onClick:function(){return function(){return R.apply(this,arguments)}()},disabled:c},r.a.createElement("label",null,"N\xe3o")))}return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.get("/aluno/turma",{headers:{aluno_id:j}}).then((function(e){g(!1),J(e.data.dados)})).catch((function(e){g(!1),e.response&&console.log(e.response.data.msg),U()}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}""===j?(localStorage.removeItem("@webppv/aluno_id"),localStorage.removeItem("@webppv/turma_id"),t&&t.push("/login")):(g(!0),function(){e.apply(this,arguments)}())}),[j,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:b.a,style:{cursor:"pointer"},alt:"Pilotando para Vida",className:"logo",onClick:function(){return U()}}),r.a.createElement("div",{className:"content"},h&&r.a.createElement("div",{className:"fetching"},r.a.createElement(E.a,{color:"#F58D50",loading:h})),!h&&r.a.createElement((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{justifyContent:"center"}},X),r.a.createElement("label",{style:{fontWeight:"bold"}},"Data: "),r.a.createElement("label",{htmlFor:"data"},D),r.a.createElement("p",null),r.a.createElement("label",{style:{fontWeight:"bold"}},"Endere\xe7o: "),r.a.createElement("label",{htmlFor:"data"},x),r.a.createElement("p",null),""!==W&&r.a.createElement("center",null,r.a.createElement("iframe",{title:"GoogleMaps",src:W,style:{border:0,width:"100%",height:"200"}})),r.a.createElement("p",null),!0===_&&r.a.createElement(T,null))}),null))))}function O(){return r.a.createElement(c.a,{basename:"/cli-web"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/login",component:g}),r.a.createElement(i.a,{path:"/cad",component:v}),r.a.createElement(i.a,{path:"/",exact:!0,component:j})))}a(61);var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null))},X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/cli-web",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/cli-web","/service-worker.js");X?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):w(e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.1a4fafa0.chunk.js.map