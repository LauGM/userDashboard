import{_ as h,z as V,u as I,r as d,o as m,c as v,a as t,A as u,w as p,v as _,E as U,G as x,C,p as f,d as g,D as S}from"./index-ZM0xgcQ4.js";import{b}from"./firestore-CG1rbb85.js";const k=o=>(f("data-v-7f2269fa"),o=o(),g(),o),E={class:"registro"},G=k(()=>t("h3",null,"Create an account",-1)),P={for:"correo"},$={for:"clave"},A={__name:"RegisterComponent",setup(o){const l=V(),a=I(),r=d(""),c=d(""),w=()=>{U(a.auth,r.value,c.value).then(e=>{i(e)}).catch(e=>{alert(e.code)})},R=()=>{const e=new x;C(a.auth,e).then(s=>{i(s)}).catch(s=>{alert(s.code)})};function i(e){alert("Successful registration!"),console.log(e),b(e.user.uid,e.user.email,e.user.emailVerified).then(()=>{console.log("agregado a firestore"),a.activeUser.role="user",l.push("/home")})}return(e,s)=>(m(),v("div",E,[G,t("label",P,[u(" Email: "),p(t("input",{type:"email",name:"correo",id:"correo",placeholder:"tu correo","onUpdate:modelValue":s[0]||(s[0]=n=>r.value=n)},null,512),[[_,r.value]])]),t("label",$,[u(" Password: "),p(t("input",{type:"password",name:"clave",id:"clave","onUpdate:modelValue":s[1]||(s[1]=n=>c.value=n)},null,512),[[_,c.value]])]),t("button",{onClick:w},"Register"),t("button",{onClick:R},"Register with Google")]))}},B=h(A,[["__scopeId","data-v-7f2269fa"]]),N=o=>(f("data-v-06efc065"),o=o(),g(),o),y={class:"opciones"},D=N(()=>t("h3",null,"Register",-1)),T={__name:"RegisterView",setup(o){return(l,a)=>(m(),v("div",null,[t("div",y,[D,S(B)])]))}},M=h(T,[["__scopeId","data-v-06efc065"]]);export{M as default};