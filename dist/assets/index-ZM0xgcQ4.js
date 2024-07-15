const __vite__fileDeps=["assets/UserView-BR6RYbA5.js","assets/UserView-B_MIvBcQ.css","assets/DataView-JlKTzX3a.js","assets/DataView-Bep1FEEB.css","assets/UsersView-Co8gVafC.js","assets/firestore-CG1rbb85.js","assets/UsersView-BqlBqW2i.css","assets/AllDataView-DB2GlX5y.js","assets/AllDataView-B5j32dXs.css","assets/LoginView-DbJmvgZC.js","assets/LoginView-Df2Eg9qf.css","assets/RegisterView-B0HGVNaK.js","assets/RegisterView-BywfQU6Y.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function zs(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const ne={},tn=[],Oe=()=>{},El=()=>!1,Mr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qs=t=>t.startsWith("onUpdate:"),de=Object.assign,Gs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wl=Object.prototype.hasOwnProperty,q=(t,e)=>wl.call(t,e),M=Array.isArray,nn=t=>Hn(t)==="[object Map]",xr=t=>Hn(t)==="[object Set]",Ni=t=>Hn(t)==="[object Date]",B=t=>typeof t=="function",le=t=>typeof t=="string",it=t=>typeof t=="symbol",te=t=>t!==null&&typeof t=="object",aa=t=>(te(t)||B(t))&&B(t.then)&&B(t.catch),ca=Object.prototype.toString,Hn=t=>ca.call(t),Il=t=>Hn(t).slice(8,-1),la=t=>Hn(t)==="[object Object]",Js=t=>le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tn=zs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ur=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Sl=/-(\w)/g,Ge=Ur(t=>t.replace(Sl,(e,n)=>n?n.toUpperCase():"")),Tl=/\B([A-Z])/g,_n=Ur(t=>t.replace(Tl,"-$1").toLowerCase()),Fr=Ur(t=>t.charAt(0).toUpperCase()+t.slice(1)),ns=Ur(t=>t?`on${Fr(t)}`:""),Ct=(t,e)=>!Object.is(t,e),ar=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ua=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},mr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Di;const fa=()=>Di||(Di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ys(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=le(r)?Pl(r):Ys(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(le(t)||te(t))return t}const Rl=/;(?![^(]*\))/g,Cl=/:([^]+)/,Al=/\/\*[^]*?\*\//g;function Pl(t){const e={};return t.replace(Al,"").split(Rl).forEach(n=>{if(n){const r=n.split(Cl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xs(t){let e="";if(le(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const r=Xs(t[n]);r&&(e+=r+" ")}else if(te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ol="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kl=zs(Ol);function da(t){return!!t||t===""}function Nl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=$r(t[r],e[r]);return n}function $r(t,e){if(t===e)return!0;let n=Ni(t),r=Ni(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=it(t),r=it(e),n||r)return t===e;if(n=M(t),r=M(e),n||r)return n&&r?Nl(t,e):!1;if(n=te(t),r=te(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!$r(t[o],e[o]))return!1}}return String(t)===String(e)}function Dl(t,e){return t.findIndex(n=>$r(n,e))}const Ll=t=>le(t)?t:t==null?"":M(t)||te(t)&&(t.toString===ca||!B(t.toString))?JSON.stringify(t,ha,2):String(t),ha=(t,e)=>e&&e.__v_isRef?ha(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[rs(r,i)+" =>"]=s,n),{})}:xr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>rs(n))}:it(e)?rs(e):te(e)&&!M(e)&&!la(e)?String(e):e,rs=(t,e="")=>{var n;return it(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ce;class pa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!e&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ce;try{return Ce=this,e()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ga(t){return new pa(t)}function Ml(t,e=Ce){e&&e.active&&e.effects.push(t)}function Qs(){return Ce}function ma(t){Ce&&Ce.cleanups.push(t)}let Vt;class Zs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ml(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,At();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(xl(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Pt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=It,n=Vt;try{return It=!0,Vt=this,this._runnings++,Li(this),this.fn()}finally{Mi(this),this._runnings--,Vt=n,It=e}}stop(){this.active&&(Li(this),Mi(this),this.onStop&&this.onStop(),this.active=!1)}}function xl(t){return t.value}function Li(t){t._trackId++,t._depsLength=0}function Mi(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)_a(t.deps[e],t);t.deps.length=t._depsLength}}function _a(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let It=!0,Es=0;const va=[];function At(){va.push(It),It=!1}function Pt(){const t=va.pop();It=t===void 0?!0:t}function ei(){Es++}function ti(){for(Es--;!Es&&ws.length;)ws.shift()()}function ya(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&_a(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ws=[];function ba(t,e,n){ei();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&ws.push(r.scheduler)))}ti()}const Ea=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},_r=new WeakMap,jt=Symbol(""),Is=Symbol("");function Se(t,e,n){if(It&&Vt){let r=_r.get(t);r||_r.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ea(()=>r.delete(n))),ya(Vt,s)}}function rt(t,e,n,r,s,i){const o=_r.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&M(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!it(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":M(t)?Js(n)&&a.push(o.get("length")):(a.push(o.get(jt)),nn(t)&&a.push(o.get(Is)));break;case"delete":M(t)||(a.push(o.get(jt)),nn(t)&&a.push(o.get(Is)));break;case"set":nn(t)&&a.push(o.get(jt));break}ei();for(const c of a)c&&ba(c,4);ti()}function Ul(t,e){const n=_r.get(t);return n&&n.get(e)}const Fl=zs("__proto__,__v_isRef,__isVue"),wa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(it)),xi=$l();function $l(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){At(),ei();const r=G(this)[e].apply(this,n);return ti(),Pt(),r}}),t}function Bl(t){it(t)||(t=String(t));const e=G(this);return Se(e,"has",t),e.hasOwnProperty(t)}class Ia{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Zl:Ca:i?Ra:Ta).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=M(e);if(!s){if(o&&q(xi,n))return Reflect.get(xi,n,r);if(n==="hasOwnProperty")return Bl}const a=Reflect.get(e,n,r);return(it(n)?wa.has(n):Fl(n))||(s||Se(e,"get",n),i)?a:ce(a)?o&&Js(n)?a:a.value:te(a)?s?si(a):Wn(a):a}}class Sa extends Ia{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Dn(i);if(!vr(r)&&!Dn(r)&&(i=G(i),r=G(r)),!M(e)&&ce(i)&&!ce(r))return c?!1:(i.value=r,!0)}const o=M(e)&&Js(n)?Number(n)<e.length:q(e,n),a=Reflect.set(e,n,r,s);return e===G(s)&&(o?Ct(r,i)&&rt(e,"set",n,r):rt(e,"add",n,r)),a}deleteProperty(e,n){const r=q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!it(n)||!wa.has(n))&&Se(e,"has",n),r}ownKeys(e){return Se(e,"iterate",M(e)?"length":jt),Reflect.ownKeys(e)}}class Vl extends Ia{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jl=new Sa,Hl=new Vl,Wl=new Sa(!0);const ni=t=>t,Br=t=>Reflect.getPrototypeOf(t);function er(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(Ct(e,i)&&Se(s,"get",e),Se(s,"get",i));const{has:o}=Br(s),a=r?ni:n?ai:Ln;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function tr(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(Ct(t,s)&&Se(r,"has",t),Se(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function nr(t,e=!1){return t=t.__v_raw,!e&&Se(G(t),"iterate",jt),Reflect.get(t,"size",t)}function Ui(t){t=G(t);const e=G(this);return Br(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function Fi(t,e){e=G(e);const n=G(this),{has:r,get:s}=Br(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ct(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function $i(t){const e=G(this),{has:n,get:r}=Br(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function Bi(){const t=G(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function rr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?ni:t?ai:Ln;return!t&&Se(a,"iterate",jt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function sr(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=nn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ni:e?ai:Ln;return!e&&Se(i,"iterate",c?Is:jt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Kl(){const t={get(i){return er(this,i)},get size(){return nr(this)},has:tr,add:Ui,set:Fi,delete:$i,clear:Bi,forEach:rr(!1,!1)},e={get(i){return er(this,i,!1,!0)},get size(){return nr(this)},has:tr,add:Ui,set:Fi,delete:$i,clear:Bi,forEach:rr(!1,!0)},n={get(i){return er(this,i,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:rr(!0,!1)},r={get(i){return er(this,i,!0,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),e[i]=sr(i,!1,!0),r[i]=sr(i,!0,!0)}),[t,n,e,r]}const[zl,ql,Gl,Jl]=Kl();function ri(t,e){const n=e?t?Jl:Gl:t?ql:zl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const Yl={get:ri(!1,!1)},Xl={get:ri(!1,!0)},Ql={get:ri(!0,!1)};const Ta=new WeakMap,Ra=new WeakMap,Ca=new WeakMap,Zl=new WeakMap;function eu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tu(t){return t.__v_skip||!Object.isExtensible(t)?0:eu(Il(t))}function Wn(t){return Dn(t)?t:ii(t,!1,jl,Yl,Ta)}function Aa(t){return ii(t,!1,Wl,Xl,Ra)}function si(t){return ii(t,!0,Hl,Ql,Ca)}function ii(t,e,n,r,s){if(!te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=tu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ht(t){return Dn(t)?Ht(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function vr(t){return!!(t&&t.__v_isShallow)}function Pa(t){return t?!!t.__v_raw:!1}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function oi(t){return Object.isExtensible(t)&&ua(t,"__v_skip",!0),t}const Ln=t=>te(t)?Wn(t):t,ai=t=>te(t)?si(t):t;class Oa{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Zs(()=>e(this._value),()=>Rn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return(!e._cacheable||e.effect.dirty)&&Ct(e._value,e._value=e.effect.run())&&Rn(e,4),ci(e),e.effect._dirtyLevel>=2&&Rn(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function nu(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=Oe):(r=t.get,s=t.set),new Oa(r,s,i||!s,n)}function ci(t){var e;It&&Vt&&(t=G(t),ya(Vt,(e=t.dep)!=null?e:t.dep=Ea(()=>t.dep=void 0,t instanceof Oa?t:void 0)))}function Rn(t,e=4,n){t=G(t);const r=t.dep;r&&ba(r,e)}function ce(t){return!!(t&&t.__v_isRef===!0)}function Je(t){return ka(t,!1)}function ru(t){return ka(t,!0)}function ka(t,e){return ce(t)?t:new su(t,e)}class su{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Ln(e)}get value(){return ci(this),this._value}set value(e){const n=this.__v_isShallow||vr(e)||Dn(e);e=n?e:G(e),Ct(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ln(e),Rn(this,4))}}function Ie(t){return ce(t)?t.value:t}const iu={get:(t,e,n)=>Ie(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Na(t){return Ht(t)?t:new Proxy(t,iu)}class ou{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>ci(this),()=>Rn(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function au(t){return new ou(t)}function cu(t){const e=M(t)?new Array(t.length):{};for(const n in t)e[n]=Da(t,n);return e}class lu{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ul(G(this._object),this._key)}}class uu{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function fu(t,e,n){return ce(t)?t:B(t)?new uu(t):te(t)&&arguments.length>1?Da(t,e,n):Je(t)}function Da(t,e,n){const r=t[e];return ce(r)?r:new lu(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function St(t,e,n,r){try{return r?t(...r):t()}catch(s){Vr(s,e,n)}}function xe(t,e,n,r){if(B(t)){const s=St(t,e,n,r);return s&&aa(s)&&s.catch(i=>{Vr(i,e,n)}),s}if(M(t)){const s=[];for(let i=0;i<t.length;i++)s.push(xe(t[i],e,n,r));return s}}function Vr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){At(),St(c,null,10,[t,o,a]),Pt();return}}du(t,n,s,r)}function du(t,e,n,r=!0){console.error(t)}let Mn=!1,Ss=!1;const me=[];let Ke=0;const rn=[];let pt=null,Ut=0;const La=Promise.resolve();let li=null;function jr(t){const e=li||La;return t?e.then(this?t.bind(this):t):e}function hu(t){let e=Ke+1,n=me.length;for(;e<n;){const r=e+n>>>1,s=me[r],i=xn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ui(t){(!me.length||!me.includes(t,Mn&&t.allowRecurse?Ke+1:Ke))&&(t.id==null?me.push(t):me.splice(hu(t.id),0,t),Ma())}function Ma(){!Mn&&!Ss&&(Ss=!0,li=La.then(Ua))}function pu(t){const e=me.indexOf(t);e>Ke&&me.splice(e,1)}function gu(t){M(t)?rn.push(...t):(!pt||!pt.includes(t,t.allowRecurse?Ut+1:Ut))&&rn.push(t),Ma()}function Vi(t,e,n=Mn?Ke+1:0){for(;n<me.length;n++){const r=me[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;me.splice(n,1),n--,r()}}}function xa(t){if(rn.length){const e=[...new Set(rn)].sort((n,r)=>xn(n)-xn(r));if(rn.length=0,pt){pt.push(...e);return}for(pt=e,Ut=0;Ut<pt.length;Ut++)pt[Ut]();pt=null,Ut=0}}const xn=t=>t.id==null?1/0:t.id,mu=(t,e)=>{const n=xn(t)-xn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ua(t){Ss=!1,Mn=!0,me.sort(mu);try{for(Ke=0;Ke<me.length;Ke++){const e=me[Ke];e&&e.active!==!1&&St(e,null,14)}}finally{Ke=0,me.length=0,xa(),Mn=!1,li=null,(me.length||rn.length)&&Ua()}}function _u(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||ne;p&&(s=n.map(_=>le(_)?_.trim():_)),h&&(s=n.map(mr))}let a,c=r[a=ns(e)]||r[a=ns(Ge(e))];!c&&i&&(c=r[a=ns(_n(e))]),c&&xe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xe(l,t,6,s)}}function Fa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const u=Fa(l,e,!0);u&&(a=!0,de(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(te(t)&&r.set(t,null),null):(M(i)?i.forEach(c=>o[c]=null):de(o,i),te(t)&&r.set(t,o),o)}function Hr(t,e){return!t||!Mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,_n(e))||q(t,e))}let _e=null,Wr=null;function yr(t){const e=_e;return _e=t,Wr=t&&t.type.__scopeId||null,e}function $a(t){Wr=t}function Ba(){Wr=null}function wt(t,e=_e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Zi(-1);const i=yr(e);let o;try{o=t(...s)}finally{yr(i),r._d&&Zi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ss(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:p,setupState:_,ctx:R,inheritAttrs:N}=t,V=yr(t);let D,O;try{if(n.shapeFlag&4){const K=s||r,z=K;D=We(l.call(z,K,u,h,_,p,R)),O=a}else{const K=e;D=We(K.length>1?K(h,{attrs:a,slots:o,emit:c}):K(h,null)),O=e.props?a:vu(a)}}catch(K){An.length=0,Vr(K,t,1),D=he(Kt)}let U=D;if(O&&N!==!1){const K=Object.keys(O),{shapeFlag:z}=U;K.length&&z&7&&(i&&K.some(qs)&&(O=yu(O,i)),U=dn(U,O,!1,!0))}return n.dirs&&(U=dn(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),D=U,yr(V),D}const vu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mr(n))&&((e||(e={}))[n]=t[n]);return e},yu=(t,e)=>{const n={};for(const r in t)(!qs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ji(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Hr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ji(r,o,l):!0:!!o;return!1}function ji(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hr(n,i))return!0}return!1}function Eu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const wu="components";function br(t,e){return Su(wu,t,!0,e)||t}const Iu=Symbol.for("v-ndc");function Su(t,e,n=!0,r=!1){const s=_e||fe;if(s){const i=s.type;{const a=_f(i,!1);if(a&&(a===e||a===Ge(e)||a===Fr(Ge(e))))return i}const o=Hi(s[t]||i[t],e)||Hi(s.appContext[t],e);return!o&&r?i:o}}function Hi(t,e){return t&&(t[e]||t[Ge(e)]||t[Fr(Ge(e))])}const Tu=t=>t.__isSuspense;function Ru(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):gu(t)}const Cu=Symbol.for("v-scx"),Au=()=>Ue(Cu),ir={};function Wt(t,e,n){return Va(t,e,n)}function Va(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=ne){if(e&&i){const F=e;e=(...re)=>{F(...re),z()}}const c=fe,l=F=>r===!0?F:$t(F,r===!1?1:void 0);let u,h=!1,p=!1;if(ce(t)?(u=()=>t.value,h=vr(t)):Ht(t)?(u=()=>l(t),h=!0):M(t)?(p=!0,h=t.some(F=>Ht(F)||vr(F)),u=()=>t.map(F=>{if(ce(F))return F.value;if(Ht(F))return l(F);if(B(F))return St(F,c,2)})):B(t)?e?u=()=>St(t,c,2):u=()=>(_&&_(),xe(t,c,3,[R])):u=Oe,e&&r){const F=u;u=()=>$t(F())}let _,R=F=>{_=U.onStop=()=>{St(F,c,4),_=U.onStop=void 0}},N;if(qr)if(R=Oe,e?n&&xe(e,c,3,[u(),p?[]:void 0,R]):u(),s==="sync"){const F=Au();N=F.__watcherHandles||(F.__watcherHandles=[])}else return Oe;let V=p?new Array(t.length).fill(ir):ir;const D=()=>{if(!(!U.active||!U.dirty))if(e){const F=U.run();(r||h||(p?F.some((re,H)=>Ct(re,V[H])):Ct(F,V)))&&(_&&_(),xe(e,c,3,[F,V===ir?void 0:p&&V[0]===ir?[]:V,R]),V=F)}else U.run()};D.allowRecurse=!!e;let O;s==="sync"?O=D:s==="post"?O=()=>Ee(D,c&&c.suspense):(D.pre=!0,c&&(D.id=c.uid),O=()=>ui(D));const U=new Zs(u,Oe,O),K=Qs(),z=()=>{U.stop(),K&&Gs(K.effects,U)};return e?n?D():V=U.run():s==="post"?Ee(U.run.bind(U),c&&c.suspense):U.run(),N&&N.push(z),z}function Pu(t,e,n){const r=this.proxy,s=le(t)?t.includes(".")?ja(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=Kn(this),a=Va(s,i.bind(r),n);return o(),a}function ja(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function $t(t,e=1/0,n){if(e<=0||!te(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))$t(t.value,e,n);else if(M(t))for(let r=0;r<t.length;r++)$t(t[r],e,n);else if(xr(t)||nn(t))t.forEach(r=>{$t(r,e,n)});else if(la(t))for(const r in t)$t(t[r],e,n);return t}function Wi(t,e){if(_e===null)return t;const n=Gr(_e)||_e.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ne]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&$t(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Lt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(At(),xe(c,n,8,[t.el,a,t,e]),Pt())}}/*! #__NO_SIDE_EFFECTS__ */function Ha(t,e){return B(t)?de({name:t.name},e,{setup:t}):t}const cr=t=>!!t.type.__asyncLoader,Wa=t=>t.type.__isKeepAlive;function Ou(t,e){Ka(t,"a",e)}function ku(t,e){Ka(t,"da",e)}function Ka(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Kr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Wa(s.parent.vnode)&&Nu(r,e,n,s),s=s.parent}}function Nu(t,e,n,r){const s=Kr(e,t,r,!0);qa(()=>{Gs(r[e],s)},n)}function Kr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;At();const a=Kn(n),c=xe(e,n,t,o);return a(),Pt(),c});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=fe)=>(!qr||t==="sp")&&Kr(t,(...r)=>e(...r),n),Du=at("bm"),fi=at("m"),Lu=at("bu"),Mu=at("u"),za=at("bum"),qa=at("um"),xu=at("sp"),Uu=at("rtg"),Fu=at("rtc");function $u(t,e=fe){Kr("ec",t,e)}function P_(t,e,n,r){let s;const i=n;if(M(t)||le(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(te(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i)}}else s=[];return s}const Ts=t=>t?lc(t)?Gr(t)||t.proxy:Ts(t.parent):null,Cn=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ts(t.parent),$root:t=>Ts(t.root),$emit:t=>t.emit,$options:t=>di(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ui(t.update)}),$nextTick:t=>t.n||(t.n=jr.bind(t.proxy)),$watch:t=>Pu.bind(t)}),is=(t,e)=>t!==ne&&!t.__isScriptSetup&&q(t,e),Bu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(is(r,e))return o[e]=1,r[e];if(s!==ne&&q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,i[e];if(n!==ne&&q(n,e))return o[e]=4,n[e];Rs&&(o[e]=0)}}const u=Cn[e];let h,p;if(u)return e==="$attrs"&&Se(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ne&&q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return is(s,e)?(s[e]=n,!0):r!==ne&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ne&&q(t,o)||is(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(Cn,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ki(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rs=!0;function Vu(t){const e=di(t),n=t.proxy,r=t.ctx;Rs=!1,e.beforeCreate&&zi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:_,updated:R,activated:N,deactivated:V,beforeDestroy:D,beforeUnmount:O,destroyed:U,unmounted:K,render:z,renderTracked:F,renderTriggered:re,errorCaptured:H,serverPrefetch:j,expose:oe,inheritAttrs:pe,components:Te,directives:Ae,filters:Dt}=e;if(l&&ju(l,r,null),o)for(const Q in o){const Y=o[Q];B(Y)&&(r[Q]=Y.bind(n))}if(s){const Q=s.call(n,n);te(Q)&&(t.data=Wn(Q))}if(Rs=!0,i)for(const Q in i){const Y=i[Q],Xe=B(Y)?Y.bind(n,n):B(Y.get)?Y.get.bind(n,n):Oe,lt=!B(Y)&&B(Y.set)?Y.set.bind(n):Oe,Be=we({get:Xe,set:lt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Be.value,set:be=>Be.value=be})}if(a)for(const Q in a)Ga(a[Q],r,n,Q);if(c){const Q=B(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(Y=>{lr(Y,Q[Y])})}u&&zi(u,t,"c");function J(Q,Y){M(Y)?Y.forEach(Xe=>Q(Xe.bind(n))):Y&&Q(Y.bind(n))}if(J(Du,h),J(fi,p),J(Lu,_),J(Mu,R),J(Ou,N),J(ku,V),J($u,H),J(Fu,F),J(Uu,re),J(za,O),J(qa,K),J(xu,j),M(oe))if(oe.length){const Q=t.exposed||(t.exposed={});oe.forEach(Y=>{Object.defineProperty(Q,Y,{get:()=>n[Y],set:Xe=>n[Y]=Xe})})}else t.exposed||(t.exposed={});z&&t.render===Oe&&(t.render=z),pe!=null&&(t.inheritAttrs=pe),Te&&(t.components=Te),Ae&&(t.directives=Ae)}function ju(t,e,n=Oe){M(t)&&(t=Cs(t));for(const r in t){const s=t[r];let i;te(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function zi(t,e,n){xe(M(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ga(t,e,n,r){const s=r.includes(".")?ja(n,r):()=>n[r];if(le(t)){const i=e[t];B(i)&&Wt(s,i)}else if(B(t))Wt(s,t.bind(n));else if(te(t))if(M(t))t.forEach(i=>Ga(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Wt(s,i,t)}}function di(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Er(c,l,o,!0)),Er(c,e,o)),te(e)&&i.set(e,c),c}function Er(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Er(t,i,n,!0),s&&s.forEach(o=>Er(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Hu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Hu={data:qi,props:Gi,emits:Gi,methods:wn,computed:wn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:wn,directives:wn,watch:Ku,provide:qi,inject:Wu};function qi(t,e){return e?t?function(){return de(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Wu(t,e){return wn(Cs(t),Cs(e))}function Cs(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function wn(t,e){return t?de(Object.create(null),t,e):e}function Gi(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:de(Object.create(null),Ki(t),Ki(e??{})):e}function Ku(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function Ja(){return{app:null,config:{isNativeTag:El,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zu=0;function qu(t,e){return function(r,s=null){B(r)||(r=de({},r)),s!=null&&!te(s)&&(s=null);const i=Ja(),o=new WeakSet;let a=!1;const c=i.app={_uid:zu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...u)):B(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const p=he(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Gr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=sn;sn=c;try{return l()}finally{sn=u}}};return c}}let sn=null;function lr(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Ue(t,e,n=!1){const r=fe||_e;if(r||sn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:sn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function Gu(){return!!(fe||_e||sn)}const Ya={},Xa=()=>Object.create(Ya),Qa=t=>Object.getPrototypeOf(t)===Ya;function Ju(t,e,n,r=!1){const s={},i=Xa();t.propsDefaults=Object.create(null),Za(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Aa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Yu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Hr(t.emitsOptions,p))continue;const _=e[p];if(c)if(q(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const R=Ge(p);s[R]=As(c,a,R,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Za(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!q(e,h)&&((u=_n(h))===h||!q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=As(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!q(e,h))&&(delete i[h],l=!0)}l&&rt(t.attrs,"set","")}function Za(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Tn(c))continue;const l=e[c];let u;s&&q(s,u=Ge(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Hr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||ne;for(let u=0;u<i.length;u++){const h=i[u];n[h]=As(s,c,h,l[h],t,!q(l,h))}}return o}function As(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&B(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Kn(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===_n(n))&&(r=!0))}return r}function ec(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const u=h=>{c=!0;const[p,_]=ec(h,e,!0);de(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return te(t)&&r.set(t,tn),tn;if(M(i))for(let u=0;u<i.length;u++){const h=Ge(i[u]);Ji(h)&&(o[h]=ne)}else if(i)for(const u in i){const h=Ge(u);if(Ji(h)){const p=i[u],_=o[h]=M(p)||B(p)?{type:p}:de({},p);if(_){const R=Qi(Boolean,_.type),N=Qi(String,_.type);_[0]=R>-1,_[1]=N<0||R<N,(R>-1||q(_,"default"))&&a.push(h)}}}const l=[o,a];return te(t)&&r.set(t,l),l}function Ji(t){return t[0]!=="$"&&!Tn(t)}function Yi(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Xi(t,e){return Yi(t)===Yi(e)}function Qi(t,e){return M(e)?e.findIndex(n=>Xi(n,t)):B(e)&&Xi(e,t)?0:-1}const tc=t=>t[0]==="_"||t==="$stable",hi=t=>M(t)?t.map(We):[We(t)],Xu=(t,e,n)=>{if(e._n)return e;const r=wt((...s)=>hi(e(...s)),n);return r._c=!1,r},nc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(tc(s))continue;const i=t[s];if(B(i))e[s]=Xu(s,i,r);else if(i!=null){const o=hi(i);e[s]=()=>o}}},rc=(t,e)=>{const n=hi(e);t.slots.default=()=>n},Qu=(t,e)=>{const n=t.slots=Xa();if(t.vnode.shapeFlag&32){const r=e._;r?(de(n,e),ua(n,"_",r,!0)):nc(e,n)}else e&&rc(t,e)},Zu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ne;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(de(s,e),!n&&a===1&&delete s._):(i=!e.$stable,nc(e,s)),o=e}else e&&(rc(t,e),o={default:1});if(i)for(const a in s)!tc(a)&&o[a]==null&&delete s[a]};function Ps(t,e,n,r,s=!1){if(M(t)){t.forEach((p,_)=>Ps(p,e&&(M(e)?e[_]:e),n,r,s));return}if(cr(r)&&!s)return;const i=r.shapeFlag&4?Gr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ne?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(le(l)?(u[l]=null,q(h,l)&&(h[l]=null)):ce(l)&&(l.value=null)),B(c))St(c,a,12,[o,u]);else{const p=le(c),_=ce(c);if(p||_){const R=()=>{if(t.f){const N=p?q(h,c)?h[c]:u[c]:c.value;s?M(N)&&Gs(N,i):M(N)?N.includes(i)||N.push(i):p?(u[c]=[i],q(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,q(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(R.id=-1,Ee(R,n)):R()}}}const Ee=Ru;function ef(t){return tf(t)}function tf(t,e){const n=fa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:_=Oe,insertStaticContent:R}=t,N=(f,d,g,y=null,m=null,w=null,T=void 0,E=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!bn(f,d)&&(y=v(f),be(f,m,w,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:A,shapeFlag:L}=d;switch(b){case zr:V(f,d,g,y);break;case Kt:D(f,d,g,y);break;case as:f==null&&O(d,g,y,T);break;case He:Te(f,d,g,y,m,w,T,E,I);break;default:L&1?z(f,d,g,y,m,w,T,E,I):L&6?Ae(f,d,g,y,m,w,T,E,I):(L&64||L&128)&&b.process(f,d,g,y,m,w,T,E,I,P)}A!=null&&m&&Ps(A,f&&f.ref,w,d||f,!d)},V=(f,d,g,y)=>{if(f==null)r(d.el=a(d.children),g,y);else{const m=d.el=f.el;d.children!==f.children&&l(m,d.children)}},D=(f,d,g,y)=>{f==null?r(d.el=c(d.children||""),g,y):d.el=f.el},O=(f,d,g,y)=>{[f.el,f.anchor]=R(f.children,d,g,y,f.el,f.anchor)},U=({el:f,anchor:d},g,y)=>{let m;for(;f&&f!==d;)m=p(f),r(f,g,y),f=m;r(d,g,y)},K=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),s(f),f=g;s(d)},z=(f,d,g,y,m,w,T,E,I)=>{d.type==="svg"?T="svg":d.type==="math"&&(T="mathml"),f==null?F(d,g,y,m,w,T,E,I):j(f,d,m,w,T,E,I)},F=(f,d,g,y,m,w,T,E)=>{let I,b;const{props:A,shapeFlag:L,transition:k,dirs:$}=f;if(I=f.el=o(f.type,w,A&&A.is,A),L&8?u(I,f.children):L&16&&H(f.children,I,null,y,m,os(f,w),T,E),$&&Lt(f,null,y,"created"),re(I,f,f.scopeId,T,y),A){for(const Z in A)Z!=="value"&&!Tn(Z)&&i(I,Z,null,A[Z],w,f.children,y,m,ge);"value"in A&&i(I,"value",null,A.value,w),(b=A.onVnodeBeforeMount)&&je(b,y,f)}$&&Lt(f,null,y,"beforeMount");const W=nf(m,k);W&&k.beforeEnter(I),r(I,d,g),((b=A&&A.onVnodeMounted)||W||$)&&Ee(()=>{b&&je(b,y,f),W&&k.enter(I),$&&Lt(f,null,y,"mounted")},m)},re=(f,d,g,y,m)=>{if(g&&_(f,g),y)for(let w=0;w<y.length;w++)_(f,y[w]);if(m){let w=m.subTree;if(d===w){const T=m.vnode;re(f,T,T.scopeId,T.slotScopeIds,m.parent)}}},H=(f,d,g,y,m,w,T,E,I=0)=>{for(let b=I;b<f.length;b++){const A=f[b]=E?gt(f[b]):We(f[b]);N(null,A,d,g,y,m,w,T,E)}},j=(f,d,g,y,m,w,T)=>{const E=d.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:A}=d;I|=f.patchFlag&16;const L=f.props||ne,k=d.props||ne;let $;if(g&&Mt(g,!1),($=k.onVnodeBeforeUpdate)&&je($,g,d,f),A&&Lt(d,f,g,"beforeUpdate"),g&&Mt(g,!0),b?oe(f.dynamicChildren,b,E,g,y,os(d,m),w):T||Y(f,d,E,null,g,y,os(d,m),w,!1),I>0){if(I&16)pe(E,d,L,k,g,y,m);else if(I&2&&L.class!==k.class&&i(E,"class",null,k.class,m),I&4&&i(E,"style",L.style,k.style,m),I&8){const W=d.dynamicProps;for(let Z=0;Z<W.length;Z++){const se=W[Z],ue=L[se],Ne=k[se];(Ne!==ue||se==="value")&&i(E,se,ue,Ne,m,f.children,g,y,ge)}}I&1&&f.children!==d.children&&u(E,d.children)}else!T&&b==null&&pe(E,d,L,k,g,y,m);(($=k.onVnodeUpdated)||A)&&Ee(()=>{$&&je($,g,d,f),A&&Lt(d,f,g,"updated")},y)},oe=(f,d,g,y,m,w,T)=>{for(let E=0;E<d.length;E++){const I=f[E],b=d[E],A=I.el&&(I.type===He||!bn(I,b)||I.shapeFlag&70)?h(I.el):g;N(I,b,A,null,y,m,w,T,!0)}},pe=(f,d,g,y,m,w,T)=>{if(g!==y){if(g!==ne)for(const E in g)!Tn(E)&&!(E in y)&&i(f,E,g[E],null,T,d.children,m,w,ge);for(const E in y){if(Tn(E))continue;const I=y[E],b=g[E];I!==b&&E!=="value"&&i(f,E,b,I,T,d.children,m,w,ge)}"value"in y&&i(f,"value",g.value,y.value,T)}},Te=(f,d,g,y,m,w,T,E,I)=>{const b=d.el=f?f.el:a(""),A=d.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:k,slotScopeIds:$}=d;$&&(E=E?E.concat($):$),f==null?(r(b,g,y),r(A,g,y),H(d.children||[],g,A,m,w,T,E,I)):L>0&&L&64&&k&&f.dynamicChildren?(oe(f.dynamicChildren,k,g,m,w,T,E),(d.key!=null||m&&d===m.subTree)&&sc(f,d,!0)):Y(f,d,g,A,m,w,T,E,I)},Ae=(f,d,g,y,m,w,T,E,I)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?m.ctx.activate(d,g,y,T,I):Dt(d,g,y,m,w,T,I):Pe(f,d,I)},Dt=(f,d,g,y,m,w,T)=>{const E=f.component=df(f,y,m);if(Wa(f)&&(E.ctx.renderer=P),hf(E),E.asyncDep){if(m&&m.registerDep(E,J),!f.el){const I=E.subTree=he(Kt);D(null,I,d,g)}}else J(E,f,d,g,m,w,T)},Pe=(f,d,g)=>{const y=d.component=f.component;if(bu(f,d,g))if(y.asyncDep&&!y.asyncResolved){Q(y,d,g);return}else y.next=d,pu(y.update),y.effect.dirty=!0,y.update();else d.el=f.el,y.vnode=d},J=(f,d,g,y,m,w,T)=>{const E=()=>{if(f.isMounted){let{next:A,bu:L,u:k,parent:$,vnode:W}=f;{const Xt=ic(f);if(Xt){A&&(A.el=W.el,Q(f,A,T)),Xt.asyncDep.then(()=>{f.isUnmounted||E()});return}}let Z=A,se;Mt(f,!1),A?(A.el=W.el,Q(f,A,T)):A=W,L&&ar(L),(se=A.props&&A.props.onVnodeBeforeUpdate)&&je(se,$,A,W),Mt(f,!0);const ue=ss(f),Ne=f.subTree;f.subTree=ue,N(Ne,ue,h(Ne.el),v(Ne),f,m,w),A.el=ue.el,Z===null&&Eu(f,ue.el),k&&Ee(k,m),(se=A.props&&A.props.onVnodeUpdated)&&Ee(()=>je(se,$,A,W),m)}else{let A;const{el:L,props:k}=d,{bm:$,m:W,parent:Z}=f,se=cr(d);if(Mt(f,!1),$&&ar($),!se&&(A=k&&k.onVnodeBeforeMount)&&je(A,Z,d),Mt(f,!0),L&&ae){const ue=()=>{f.subTree=ss(f),ae(L,f.subTree,f,m,null)};se?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ue()):ue()}else{const ue=f.subTree=ss(f);N(null,ue,g,y,f,m,w),d.el=ue.el}if(W&&Ee(W,m),!se&&(A=k&&k.onVnodeMounted)){const ue=d;Ee(()=>je(A,Z,ue),m)}(d.shapeFlag&256||Z&&cr(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&Ee(f.a,m),f.isMounted=!0,d=g=y=null}},I=f.effect=new Zs(E,Oe,()=>ui(b),f.scope),b=f.update=()=>{I.dirty&&I.run()};b.id=f.uid,Mt(f,!0),b()},Q=(f,d,g)=>{d.component=f;const y=f.vnode.props;f.vnode=d,f.next=null,Yu(f,d.props,y,g),Zu(f,d.children,g),At(),Vi(f),Pt()},Y=(f,d,g,y,m,w,T,E,I=!1)=>{const b=f&&f.children,A=f?f.shapeFlag:0,L=d.children,{patchFlag:k,shapeFlag:$}=d;if(k>0){if(k&128){lt(b,L,g,y,m,w,T,E,I);return}else if(k&256){Xe(b,L,g,y,m,w,T,E,I);return}}$&8?(A&16&&ge(b,m,w),L!==b&&u(g,L)):A&16?$&16?lt(b,L,g,y,m,w,T,E,I):ge(b,m,w,!0):(A&8&&u(g,""),$&16&&H(L,g,y,m,w,T,E,I))},Xe=(f,d,g,y,m,w,T,E,I)=>{f=f||tn,d=d||tn;const b=f.length,A=d.length,L=Math.min(b,A);let k;for(k=0;k<L;k++){const $=d[k]=I?gt(d[k]):We(d[k]);N(f[k],$,g,null,m,w,T,E,I)}b>A?ge(f,m,w,!0,!1,L):H(d,g,y,m,w,T,E,I,L)},lt=(f,d,g,y,m,w,T,E,I)=>{let b=0;const A=d.length;let L=f.length-1,k=A-1;for(;b<=L&&b<=k;){const $=f[b],W=d[b]=I?gt(d[b]):We(d[b]);if(bn($,W))N($,W,g,null,m,w,T,E,I);else break;b++}for(;b<=L&&b<=k;){const $=f[L],W=d[k]=I?gt(d[k]):We(d[k]);if(bn($,W))N($,W,g,null,m,w,T,E,I);else break;L--,k--}if(b>L){if(b<=k){const $=k+1,W=$<A?d[$].el:y;for(;b<=k;)N(null,d[b]=I?gt(d[b]):We(d[b]),g,W,m,w,T,E,I),b++}}else if(b>k)for(;b<=L;)be(f[b],m,w,!0),b++;else{const $=b,W=b,Z=new Map;for(b=W;b<=k;b++){const Re=d[b]=I?gt(d[b]):We(d[b]);Re.key!=null&&Z.set(Re.key,b)}let se,ue=0;const Ne=k-W+1;let Xt=!1,Pi=0;const yn=new Array(Ne);for(b=0;b<Ne;b++)yn[b]=0;for(b=$;b<=L;b++){const Re=f[b];if(ue>=Ne){be(Re,m,w,!0);continue}let Ve;if(Re.key!=null)Ve=Z.get(Re.key);else for(se=W;se<=k;se++)if(yn[se-W]===0&&bn(Re,d[se])){Ve=se;break}Ve===void 0?be(Re,m,w,!0):(yn[Ve-W]=b+1,Ve>=Pi?Pi=Ve:Xt=!0,N(Re,d[Ve],g,null,m,w,T,E,I),ue++)}const Oi=Xt?rf(yn):tn;for(se=Oi.length-1,b=Ne-1;b>=0;b--){const Re=W+b,Ve=d[Re],ki=Re+1<A?d[Re+1].el:y;yn[b]===0?N(null,Ve,g,ki,m,w,T,E,I):Xt&&(se<0||b!==Oi[se]?Be(Ve,g,ki,2):se--)}}},Be=(f,d,g,y,m=null)=>{const{el:w,type:T,transition:E,children:I,shapeFlag:b}=f;if(b&6){Be(f.component.subTree,d,g,y);return}if(b&128){f.suspense.move(d,g,y);return}if(b&64){T.move(f,d,g,P);return}if(T===He){r(w,d,g);for(let L=0;L<I.length;L++)Be(I[L],d,g,y);r(f.anchor,d,g);return}if(T===as){U(f,d,g);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(w),r(w,d,g),Ee(()=>E.enter(w),m);else{const{leave:L,delayLeave:k,afterLeave:$}=E,W=()=>r(w,d,g),Z=()=>{L(w,()=>{W(),$&&$()})};k?k(w,W,Z):Z()}else r(w,d,g)},be=(f,d,g,y=!1,m=!1)=>{const{type:w,props:T,ref:E,children:I,dynamicChildren:b,shapeFlag:A,patchFlag:L,dirs:k}=f;if(E!=null&&Ps(E,null,g,f,!0),A&256){d.ctx.deactivate(f);return}const $=A&1&&k,W=!cr(f);let Z;if(W&&(Z=T&&T.onVnodeBeforeUnmount)&&je(Z,d,f),A&6)Zn(f.component,g,y);else{if(A&128){f.suspense.unmount(g,y);return}$&&Lt(f,null,d,"beforeUnmount"),A&64?f.type.remove(f,d,g,m,P,y):b&&(w!==He||L>0&&L&64)?ge(b,d,g,!1,!0):(w===He&&L&384||!m&&A&16)&&ge(I,d,g),y&&Jt(f)}(W&&(Z=T&&T.onVnodeUnmounted)||$)&&Ee(()=>{Z&&je(Z,d,f),$&&Lt(f,null,d,"unmounted")},g)},Jt=f=>{const{type:d,el:g,anchor:y,transition:m}=f;if(d===He){Yt(g,y);return}if(d===as){K(f);return}const w=()=>{s(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:E}=m,I=()=>T(g,w);E?E(f.el,w,I):I()}else w()},Yt=(f,d)=>{let g;for(;f!==d;)g=p(f),s(f),f=g;s(d)},Zn=(f,d,g)=>{const{bum:y,scope:m,update:w,subTree:T,um:E}=f;y&&ar(y),m.stop(),w&&(w.active=!1,be(T,f,d,g)),E&&Ee(E,d),Ee(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ge=(f,d,g,y=!1,m=!1,w=0)=>{for(let T=w;T<f.length;T++)be(f[T],d,g,y,m)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let C=!1;const S=(f,d,g)=>{f==null?d._vnode&&be(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,g),C||(C=!0,Vi(),xa(),C=!1),d._vnode=f},P={p:N,um:be,m:Be,r:Jt,mt:Dt,mc:H,pc:Y,pbc:oe,n:v,o:t};let X,ae;return{render:S,hydrate:X,createApp:qu(S,X)}}function os({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function sc(t,e,n=!1){const r=t.children,s=e.children;if(M(r)&&M(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gt(s[i]),a.el=o.el),n||sc(o,a)),a.type===zr&&(a.el=o.el)}}function rf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ic(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ic(e)}const sf=t=>t.__isTeleport,He=Symbol.for("v-fgt"),zr=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),An=[];let Le=null;function ze(t=!1){An.push(Le=t?null:[])}function of(){An.pop(),Le=An[An.length-1]||null}let Un=1;function Zi(t){Un+=t}function oc(t){return t.dynamicChildren=Un>0?Le||tn:null,of(),Un>0&&Le&&Le.push(t),t}function wr(t,e,n,r,s,i){return oc(De(t,e,n,r,s,i,!0))}function on(t,e,n,r,s){return oc(he(t,e,n,r,s,!0))}function Os(t){return t?t.__v_isVNode===!0:!1}function bn(t,e){return t.type===e.type&&t.key===e.key}const ac=({key:t})=>t??null,ur=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?le(t)||ce(t)||B(t)?{i:_e,r:t,k:e,f:!!n}:t:null);function De(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ac(e),ref:e&&ur(e),scopeId:Wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_e};return a?(pi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=le(n)?8:16),Un>0&&!o&&Le&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Le.push(c),c}const he=af;function af(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Iu)&&(t=Kt),Os(t)){const a=dn(t,e,!0);return n&&pi(a,n),Un>0&&!i&&Le&&(a.shapeFlag&6?Le[Le.indexOf(t)]=a:Le.push(a)),a.patchFlag|=-2,a}if(vf(t)&&(t=t.__vccOpts),e){e=cf(e);let{class:a,style:c}=e;a&&!le(a)&&(e.class=Xs(a)),te(c)&&(Pa(c)&&!M(c)&&(c=de({},c)),e.style=Ys(c))}const o=le(t)?1:Tu(t)?128:sf(t)?64:te(t)?4:B(t)?2:0;return De(t,e,n,r,s,o,i,!0)}function cf(t){return t?Pa(t)||Qa(t)?de({},t):t:null}function dn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?lf(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ac(l),ref:e&&e.ref?n&&i?M(i)?i.concat(ur(e)):[i,ur(e)]:ur(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&(u.transition=c.clone(u)),u}function Ze(t=" ",e=0){return he(zr,null,t,e)}function Pn(t="",e=!1){return e?(ze(),on(Kt,null,t)):he(Kt,null,t)}function We(t){return t==null||typeof t=="boolean"?he(Kt):M(t)?he(He,null,t.slice()):typeof t=="object"?gt(t):he(zr,null,String(t))}function gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dn(t)}function pi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qa(e)?e._ctx=_e:s===3&&_e&&(_e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:_e},n=32):(e=String(e),r&64?(n=16,e=[Ze(e)]):n=8);t.children=e,t.shapeFlag|=n}function lf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xs([e.class,r.class]));else if(s==="style")e.style=Ys([e.style,r.style]);else if(Mr(s)){const i=e[s],o=r[s];o&&i!==o&&!(M(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function je(t,e,n,r=null){xe(t,e,7,[n,r])}const uf=Ja();let ff=0;function df(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uf,i={uid:ff++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new pa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ec(r,s),emitsOptions:Fa(r,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_u.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const cc=()=>fe||_e;let Ir,ks;{const t=fa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ir=e("__VUE_INSTANCE_SETTERS__",n=>fe=n),ks=e("__VUE_SSR_SETTERS__",n=>qr=n)}const Kn=t=>{const e=fe;return Ir(t),t.scope.on(),()=>{t.scope.off(),Ir(e)}},eo=()=>{fe&&fe.scope.off(),Ir(null)};function lc(t){return t.vnode.shapeFlag&4}let qr=!1;function hf(t,e=!1){e&&ks(e);const{props:n,children:r}=t.vnode,s=lc(t);Ju(t,n,s,e),Qu(t,r);const i=s?pf(t,e):void 0;return e&&ks(!1),i}function pf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Bu);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?mf(t):null,i=Kn(t);At();const o=St(r,t,0,[t.props,s]);if(Pt(),i(),aa(o)){if(o.then(eo,eo),e)return o.then(a=>{to(t,a,e)}).catch(a=>{Vr(a,t,0)});t.asyncDep=o}else to(t,o,e)}else uc(t,e)}function to(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:te(e)&&(t.setupState=Na(e)),uc(t,n)}let no;function uc(t,e,n){const r=t.type;if(!t.render){if(!e&&no&&!r.render){const s=r.template||di(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=de(de({isCustomElement:i,delimiters:a},o),c);r.render=no(s,l)}}t.render=r.render||Oe}{const s=Kn(t);At();try{Vu(t)}finally{Pt(),s()}}}const gf={get(t,e){return Se(t,"get",""),t[e]}};function mf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gf),slots:t.slots,emit:t.emit,expose:e}}function Gr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Na(oi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cn)return Cn[n](t)},has(e,n){return n in e||n in Cn}}))}function _f(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function vf(t){return B(t)&&"__vccOpts"in t}const we=(t,e)=>nu(t,e,qr);function fc(t,e,n){const r=arguments.length;return r===2?te(e)&&!M(e)?Os(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Os(n)&&(n=[n]),he(t,e,n))}const yf="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const bf="http://www.w3.org/2000/svg",Ef="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,ro=mt&&mt.createElement("template"),wf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?mt.createElementNS(bf,t):e==="mathml"?mt.createElementNS(Ef,t):mt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mt.createTextNode(t),createComment:t=>mt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ro.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=ro.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},If=Symbol("_vtc");function Sf(t,e,n){const r=t[If];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const so=Symbol("_vod"),Tf=Symbol("_vsh"),Rf=Symbol(""),Cf=/(^|;)\s*display\s*:/;function Af(t,e,n){const r=t.style,s=le(n);let i=!1;if(n&&!s){if(e)if(le(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&fr(r,a,"")}else for(const o in e)n[o]==null&&fr(r,o,"");for(const o in n)o==="display"&&(i=!0),fr(r,o,n[o])}else if(s){if(e!==n){const o=r[Rf];o&&(n+=";"+o),r.cssText=n,i=Cf.test(n)}}else e&&t.removeAttribute("style");so in t&&(t[so]=i?r.display:"",t[Tf]&&(r.display="none"))}const io=/\s*!important$/;function fr(t,e,n){if(M(n))n.forEach(r=>fr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Pf(t,e);io.test(n)?t.setProperty(_n(r),n.replace(io,""),"important"):t[r]=n}}const oo=["Webkit","Moz","ms"],cs={};function Pf(t,e){const n=cs[e];if(n)return n;let r=Ge(e);if(r!=="filter"&&r in t)return cs[e]=r;r=Fr(r);for(let s=0;s<oo.length;s++){const i=oo[s]+r;if(i in t)return cs[e]=i}return e}const ao="http://www.w3.org/1999/xlink";function Of(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ao,e.slice(6,e.length)):t.setAttributeNS(ao,e,n);else{const i=kl(e);n==null||i&&!da(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function kf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=da(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ft(t,e,n,r){t.addEventListener(e,n,r)}function Nf(t,e,n,r){t.removeEventListener(e,n,r)}const co=Symbol("_vei");function Df(t,e,n,r,s=null){const i=t[co]||(t[co]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Lf(e);if(r){const l=i[e]=Uf(r,s);Ft(t,a,l,c)}else o&&(Nf(t,a,o,c),i[e]=void 0)}}const lo=/(?:Once|Passive|Capture)$/;function Lf(t){let e;if(lo.test(t)){e={};let r;for(;r=t.match(lo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_n(t.slice(2)),e]}let ls=0;const Mf=Promise.resolve(),xf=()=>ls||(Mf.then(()=>ls=0),ls=Date.now());function Uf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xe(Ff(r,n.value),e,5,[r])};return n.value=t,n.attached=xf(),n}function Ff(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const uo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$f=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?Sf(t,r,l):e==="style"?Af(t,n,r):Mr(e)?qs(e)||Df(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bf(t,e,r,l))?kf(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Of(t,e,r,l))};function Bf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&uo(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return uo(e)&&le(n)?!1:e in t}const Sr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>ar(e,n):e};function Vf(t){t.target.composing=!0}function fo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const an=Symbol("_assign"),O_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[an]=Sr(s);const i=r||s.props&&s.props.type==="number";Ft(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=mr(a)),t[an](a)}),n&&Ft(t,"change",()=>{t.value=t.value.trim()}),e||(Ft(t,"compositionstart",Vf),Ft(t,"compositionend",fo),Ft(t,"change",fo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[an]=Sr(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?mr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},k_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=xr(e);Ft(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?mr(Tr(o)):Tr(o));t[an](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,jr(()=>{t._assigning=!1})}),t[an]=Sr(r)},mounted(t,{value:e,modifiers:{number:n}}){ho(t,e)},beforeUpdate(t,e,n){t[an]=Sr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||ho(t,e)}};function ho(t,e,n){const r=t.multiple,s=M(e);if(!(r&&!s&&!xr(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],c=Tr(a);if(r)if(s){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(u=>String(u)===String(c)):a.selected=Dl(e,c)>-1}else a.selected=e.has(c);else if($r(Tr(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Tr(t){return"_value"in t?t._value:t.value}const jf=de({patchProp:$f},wf);let po;function Hf(){return po||(po=ef(jf))}const Wf=(...t)=>{const e=Hf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=zf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Kf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Kf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zf(t){return le(t)?document.querySelector(t):t}var qf=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let dc;const Jr=t=>dc=t,hc=Symbol();function Ns(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var On;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(On||(On={}));function Gf(){const t=ga(!0),e=t.run(()=>Je({}));let n=[],r=[];const s=oi({install(i){Jr(s),s._a=i,i.provide(hc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!qf?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const pc=()=>{};function go(t,e,n,r=pc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qs()&&ma(s),s}function Qt(t,...e){t.slice().forEach(n=>{n(...e)})}const Jf=t=>t();function Ds(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ns(s)&&Ns(r)&&t.hasOwnProperty(n)&&!ce(r)&&!Ht(r)?t[n]=Ds(s,r):t[n]=r}return t}const Yf=Symbol();function Xf(t){return!Ns(t)||!t.hasOwnProperty(Yf)}const{assign:ht}=Object;function Qf(t){return!!(ce(t)&&t.effect)}function Zf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=cu(n.state.value[t]);return ht(u,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=oi(we(()=>{Jr(n);const _=n._s.get(t);return o[p].call(_,_)})),h),{}))}return c=gc(t,l,e,n,r,!0),c}function gc(t,e,n={},r,s,i){let o;const a=ht({actions:{}},n),c={deep:!0};let l,u,h=[],p=[],_;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),Je({});let N;function V(H){let j;l=u=!1,typeof H=="function"?(H(r.state.value[t]),j={type:On.patchFunction,storeId:t,events:_}):(Ds(r.state.value[t],H),j={type:On.patchObject,payload:H,storeId:t,events:_});const oe=N=Symbol();jr().then(()=>{N===oe&&(l=!0)}),u=!0,Qt(h,j,r.state.value[t])}const D=i?function(){const{state:j}=n,oe=j?j():{};this.$patch(pe=>{ht(pe,oe)})}:pc;function O(){o.stop(),h=[],p=[],r._s.delete(t)}function U(H,j){return function(){Jr(r);const oe=Array.from(arguments),pe=[],Te=[];function Ae(J){pe.push(J)}function Dt(J){Te.push(J)}Qt(p,{args:oe,name:H,store:z,after:Ae,onError:Dt});let Pe;try{Pe=j.apply(this&&this.$id===t?this:z,oe)}catch(J){throw Qt(Te,J),J}return Pe instanceof Promise?Pe.then(J=>(Qt(pe,J),J)).catch(J=>(Qt(Te,J),Promise.reject(J))):(Qt(pe,Pe),Pe)}}const K={_p:r,$id:t,$onAction:go.bind(null,p),$patch:V,$reset:D,$subscribe(H,j={}){const oe=go(h,H,j.detached,()=>pe()),pe=o.run(()=>Wt(()=>r.state.value[t],Te=>{(j.flush==="sync"?u:l)&&H({storeId:t,type:On.direct,events:_},Te)},ht({},c,j)));return oe},$dispose:O},z=Wn(K);r._s.set(t,z);const re=(r._a&&r._a.runWithContext||Jf)(()=>r._e.run(()=>(o=ga()).run(e)));for(const H in re){const j=re[H];if(ce(j)&&!Qf(j)||Ht(j))i||(R&&Xf(j)&&(ce(j)?j.value=R[H]:Ds(j,R[H])),r.state.value[t][H]=j);else if(typeof j=="function"){const oe=U(H,j);re[H]=oe,a.actions[H]=j}}return ht(z,re),ht(G(z),re),Object.defineProperty(z,"$state",{get:()=>r.state.value[t],set:H=>{V(j=>{ht(j,H)})}}),r._p.forEach(H=>{ht(z,o.run(()=>H({store:z,app:r._a,pinia:r,options:a})))}),R&&i&&n.hydrate&&n.hydrate(z.$state,R),l=!0,u=!0,z}function ed(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,c){const l=Gu();return a=a||(l?Ue(hc,null):null),a&&Jr(a),a=dc,a._s.has(r)||(i?gc(r,e,s,a):Zf(r,s,a)),a._s.get(r)}return o.$id=r,o}var mo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},td=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[u],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):td(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new nd;const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rd=function(t){const e=mc(t);return _c.encodeByteArray(e,!0)},Rr=function(t){return rd(t).replace(/\./g,"")},vc=function(t){try{return _c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=()=>sd().__FIREBASE_DEFAULTS__,od=()=>{if(typeof process>"u"||typeof mo>"u")return;const t=mo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ad=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vc(t[1]);return e&&JSON.parse(e)},Yr=()=>{try{return id()||od()||ad()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yc=t=>{var e,n;return(n=(e=Yr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},N_=t=>{const e=yc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bc=()=>{var t;return(t=Yr())===null||t===void 0?void 0:t.config},Ec=t=>{var e;return(e=Yr())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rr(JSON.stringify(n)),Rr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function ud(){var t;const e=(t=Yr())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hd(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function L_(){return!ud()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pd(){try{return typeof indexedDB=="object"}catch{return!1}}function gd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=md,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_d(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ot(s,a,r)}}function _d(t,e){return t.replace(vd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vd=/\{\$([^}]+)}/g;function yd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_o(i)&&_o(o)){if(!Cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _o(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function In(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Sn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bd(t,e){const n=new Ed(t,e);return n.subscribe.bind(n)}class Ed{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=us),s.error===void 0&&(s.error=us),s.complete===void 0&&(s.complete=us);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function us(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Td(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sd(t){return t===xt?void 0:t}function Td(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Id(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Cd={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ad=ee.INFO,Pd={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Od=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Pd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=Ad,this._logHandler=Od,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const kd=(t,e)=>e.some(n=>t instanceof n);let vo,yo;function Nd(){return vo||(vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dd(){return yo||(yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ic=new WeakMap,Ls=new WeakMap,Sc=new WeakMap,fs=new WeakMap,gi=new WeakMap;function Ld(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ic.set(n,t)}).catch(()=>{}),gi.set(e,t),e}function Md(t){if(Ls.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ls.set(t,e)}let Ms={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ls.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xd(t){Ms=t(Ms)}function Ud(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ds(this),e,...n);return Sc.set(r,e.sort?e.sort():[e]),Tt(r)}:Dd().includes(t)?function(...e){return t.apply(ds(this),e),Tt(Ic.get(this))}:function(...e){return Tt(t.apply(ds(this),e))}}function Fd(t){return typeof t=="function"?Ud(t):(t instanceof IDBTransaction&&Md(t),kd(t,Nd())?new Proxy(t,Ms):t)}function Tt(t){if(t instanceof IDBRequest)return Ld(t);if(fs.has(t))return fs.get(t);const e=Fd(t);return e!==t&&(fs.set(t,e),gi.set(e,t)),e}const ds=t=>gi.get(t);function $d(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Tt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Bd=["get","getKey","getAll","getAllKeys","count"],Vd=["put","add","delete","clear"],hs=new Map;function bo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hs.get(e))return hs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Vd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return hs.set(e,i),i}xd(t=>({...t,get:(e,n,r)=>bo(e,n)||t.get(e,n,r),has:(e,n)=>!!bo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xs="@firebase/app",Eo="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new wc("@firebase/app"),Wd="@firebase/app-compat",Kd="@firebase/analytics-compat",zd="@firebase/analytics",qd="@firebase/app-check-compat",Gd="@firebase/app-check",Jd="@firebase/auth",Yd="@firebase/auth-compat",Xd="@firebase/database",Qd="@firebase/database-compat",Zd="@firebase/functions",eh="@firebase/functions-compat",th="@firebase/installations",nh="@firebase/installations-compat",rh="@firebase/messaging",sh="@firebase/messaging-compat",ih="@firebase/performance",oh="@firebase/performance-compat",ah="@firebase/remote-config",ch="@firebase/remote-config-compat",lh="@firebase/storage",uh="@firebase/storage-compat",fh="@firebase/firestore",dh="@firebase/vertexai-preview",hh="@firebase/firestore-compat",ph="firebase",gh="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="[DEFAULT]",mh={[xs]:"fire-core",[Wd]:"fire-core-compat",[zd]:"fire-analytics",[Kd]:"fire-analytics-compat",[Gd]:"fire-app-check",[qd]:"fire-app-check-compat",[Jd]:"fire-auth",[Yd]:"fire-auth-compat",[Xd]:"fire-rtdb",[Qd]:"fire-rtdb-compat",[Zd]:"fire-fn",[eh]:"fire-fn-compat",[th]:"fire-iid",[nh]:"fire-iid-compat",[rh]:"fire-fcm",[sh]:"fire-fcm-compat",[ih]:"fire-perf",[oh]:"fire-perf-compat",[ah]:"fire-rc",[ch]:"fire-rc-compat",[lh]:"fire-gcs",[uh]:"fire-gcs-compat",[fh]:"fire-fst",[hh]:"fire-fst-compat",[dh]:"fire-vertex","fire-js":"fire-js",[ph]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map,_h=new Map,Fs=new Map;function wo(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(Fs.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;Fs.set(e,t);for(const n of Ar.values())wo(n,t);for(const n of _h.values())wo(n,t);return!0}function Tc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Me(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new zn("app","Firebase",vh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=gh;function Rc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Us,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rt.create("bad-app-name",{appName:String(s)});if(n||(n=bc()),!n)throw Rt.create("no-options");const i=Ar.get(s);if(i){if(Cr(n,i.options)&&Cr(r,i.config))return i;throw Rt.create("duplicate-app",{appName:s})}const o=new Rd(s);for(const c of Fs.values())o.addComponent(c);const a=new yh(n,r,o);return Ar.set(s,a),a}function bh(t=Us){const e=Ar.get(t);if(!e&&t===Us&&bc())return Rc();if(!e)throw Rt.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let s=(r=mh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}Fn(new hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="firebase-heartbeat-database",wh=1,$n="firebase-heartbeat-store";let ps=null;function Cc(){return ps||(ps=$d(Eh,wh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($n)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),ps}async function Ih(t){try{const n=(await Cc()).transaction($n),r=await n.objectStore($n).get(Ac(t));return await n.done,r}catch(e){if(e instanceof Ot)zt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(n.message)}}}async function Io(t,e){try{const r=(await Cc()).transaction($n,"readwrite");await r.objectStore($n).put(e,Ac(t)),await r.done}catch(n){if(n instanceof Ot)zt.warn(n.message);else{const r=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(r.message)}}}function Ac(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=1024,Th=30*24*60*60*1e3;class Rh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ah(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=So();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Th}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=So(),{heartbeatsToSend:r,unsentEntries:s}=Ch(this._heartbeatsCache.heartbeats),i=Rr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function So(){return new Date().toISOString().substring(0,10)}function Ch(t,e=Sh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),To(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),To(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ah{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pd()?gd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ih(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function To(t){return Rr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t){Fn(new hn("platform-logger",e=>new jd(e),"PRIVATE")),Fn(new hn("heartbeat",e=>new Rh(e),"PRIVATE")),cn(xs,Eo,t),cn(xs,Eo,"esm2017"),cn("fire-js","")}Ph("");function mi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Pc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oh=Pc,Oc=new zn("auth","Firebase",Pc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new wc("@firebase/auth");function kh(t,...e){Pr.logLevel<=ee.WARN&&Pr.warn(`Auth (${Gn}): ${t}`,...e)}function dr(t,...e){Pr.logLevel<=ee.ERROR&&Pr.error(`Auth (${Gn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,...e){throw vi(t,...e)}function Fe(t,...e){return vi(t,...e)}function _i(t,e,n){const r=Object.assign(Object.assign({},Oh()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function st(t){return _i(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ke(t,"argument-error"),_i(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Oc.create(t,...e)}function x(t,e,...n){if(!t)throw vi(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dr(e),new Error(e)}function ot(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dh(){return Ro()==="http:"||Ro()==="https:"}function Ro(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dh()||fd()||"connection"in navigator)?navigator.onLine:!0}function Mh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=ld()||dd()}get(){return Lh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Jn(3e4,6e4);function kt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ct(t,e,n,r,s={}){return Nc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),kc.fetch()(Dc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Nc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xh),e);try{const s=new $h(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw _i(t,u,l);ke(t,u)}}catch(s){if(s instanceof Ot)throw s;ke(t,"network-request-failed",{message:String(s)})}}async function Yn(t,e,n,r,s={}){const i=await ct(t,e,n,r,s);return"mfaPendingCredential"in i&&ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Dc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?yi(t.config,s):`${t.config.apiScheme}://${s}`}function Fh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $h{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),Uh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function or(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fe(t,e,r);return s.customData._tokenResponse=n,s}function Co(t){return t!==void 0&&t.enterprise!==void 0}class Bh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Vh(t,e){return ct(t,"GET","/v2/recaptchaConfig",kt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jh(t,e){return ct(t,"POST","/v1/accounts:delete",e)}async function Lc(t,e){return ct(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hh(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=bi(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:kn(gs(s.auth_time)),issuedAtTime:kn(gs(s.iat)),expirationTime:kn(gs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gs(t){return Number(t)*1e3}function bi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dr("JWT malformed, contained fewer than 3 sections"),null;try{const s=vc(n);return s?JSON.parse(s):(dr("Failed to decode base64 JWT payload"),null)}catch(s){return dr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ao(t){const e=bi(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&Wh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kn(this.lastLoginAt),this.creationTime=kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t){var e;const n=t.auth,r=await t.getIdToken(),s=await pn(t,Lc(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Mc(i.providerUserInfo):[],a=qh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Bs(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function zh(t){const e=Ye(t);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Mc(t){return t.map(e=>{var{providerId:n}=e,r=mi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gh(t,e){const n=await Nc(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Dc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jh(t,e){return ct(t,"POST","/v2/accounts:revokeToken",kt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ao(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=Ao(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ln;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ln,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=mi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Bs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hh(this,e)}reload(){return zh(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Or(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await pn(this,jh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:K,isAnonymous:z,providerData:F,stsTokenManager:re}=n;x(U&&re,e,"internal-error");const H=ln.fromJSON(this.name,re);x(typeof U=="string",e,"internal-error"),ft(h,e.name),ft(p,e.name),x(typeof K=="boolean",e,"internal-error"),x(typeof z=="boolean",e,"internal-error"),ft(_,e.name),ft(R,e.name),ft(N,e.name),ft(V,e.name),ft(D,e.name),ft(O,e.name);const j=new tt({uid:U,auth:e,email:p,emailVerified:K,displayName:h,isAnonymous:z,photoURL:R,phoneNumber:_,tenantId:N,stsTokenManager:H,createdAt:D,lastLoginAt:O});return F&&Array.isArray(F)&&(j.providerData=F.map(oe=>Object.assign({},oe))),V&&(j._redirectEventId=V),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new ln;s.updateFromServerResponse(n);const i=new tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Or(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];x(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Mc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ln;a.updateFromIdToken(r);const c=new tt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map;function nt(t){ot(t instanceof Function,"Expected a class definition");let e=Po.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Po.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xc.type="NONE";const Oo=xc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e,n){return`firebase:${t}:${e}:${n}`}class un{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hr(this.userKey,s.apiKey,i),this.fullPersistenceKey=hr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new un(nt(Oo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||nt(Oo);const o=hr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=tt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new un(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new un(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($c(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vc(e))return"Blackberry";if(jc(e))return"Webos";if(Ei(e))return"Safari";if((e.includes("chrome/")||Fc(e))&&!e.includes("edge/"))return"Chrome";if(Bc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uc(t=ve()){return/firefox\//i.test(t)}function Ei(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fc(t=ve()){return/crios\//i.test(t)}function $c(t=ve()){return/iemobile/i.test(t)}function Bc(t=ve()){return/android/i.test(t)}function Vc(t=ve()){return/blackberry/i.test(t)}function jc(t=ve()){return/webos/i.test(t)}function Xr(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yh(t=ve()){var e;return Xr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xh(){return hd()&&document.documentMode===10}function Hc(t=ve()){return Xr(t)||Bc(t)||jc(t)||Vc(t)||/windows phone/i.test(t)||$c(t)}function Qh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t,e=[]){let n;switch(t){case"Browser":n=ko(ve());break;case"Worker":n=`${ko(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t,e={}){return ct(t,"GET","/v2/passwordPolicy",kt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=6;class np{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new Zh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Lc(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(st(this));const n=e?Ye(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ep(this),n=new np(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nt(t){return Ye(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=bd(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sp(t){Qr=t}function Kc(t){return Qr.loadJS(t)}function ip(){return Qr.recaptchaEnterpriseScript}function op(){return Qr.gapiScript}function ap(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cp="recaptcha-enterprise",lp="NO_RECAPTCHA";class up{constructor(e){this.type=cp,this.auth=Nt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Vh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Bh(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Co(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(lp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Co(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ip();c.length!==0&&(c+=a),Kc(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Do(t,e,n,r=!1){const s=new up(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Vs(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Do(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Do(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t,e){const n=Tc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cr(i,e??{}))return s;ke(s,"already-initialized")}return n.initialize({options:e})}function dp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hp(t,e,n){const r=Nt(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=zc(e),{host:o,port:a}=pp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),gp()}function zc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pp(t){const e=zc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lo(o)}}}function Lo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function mp(t,e){return ct(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",kt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",kt(t,e))}async function yp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",kt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends wi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vs(e,n,"signInWithPassword",_p);case"emailLink":return vp(e,{email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vs(e,r,"signUpPassword",mp);case"emailLink":return yp(e,{idToken:n,email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",kt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="http://localhost";class qt extends wi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=mi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new qt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fn(e,n)}buildRequest(){const e={requestUri:bp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wp(t){const e=In(Sn(t)).link,n=e?In(Sn(e)).deep_link_id:null,r=In(Sn(t)).deep_link_id;return(r?In(Sn(r)).link:null)||r||n||e||t}class Ii{constructor(e){var n,r,s,i,o,a;const c=In(Sn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ep((s=c.mode)!==null&&s!==void 0?s:null);x(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=wp(e);try{return new Ii(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(e,n){return Bn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ii.parseLink(n);return x(r,"argument-error"),Bn._fromEmailAndCode(e,r.code,r.tenantId)}}vn.PROVIDER_ID="password";vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Si{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Xn{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Xn{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Xn{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(t,e){return Yn(t,"POST","/v1/accounts:signUp",kt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),o=Mo(r);return new Gt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mo(r);return new Gt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Ot{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,kr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new kr(e,n,r,s)}}function qc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?kr._fromErrorAndOperation(t,i,e,r):i})}async function Sp(t,e,n=!1){const r=await pn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(t,e,n=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const i=await pn(t,qc(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=bi(i.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Gt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(t,e,n=!1){if(Me(t.app))return Promise.reject(st(t));const r="signIn",s=await qc(t,r,e),i=await Gt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Rp(t,e){return Gc(Nt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(t){const e=Nt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function M_(t,e,n){if(Me(t.app))return Promise.reject(st(t));const r=Nt(t),o=await Vs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ip).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Jc(t),c}),a=await Gt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function x_(t,e,n){return Me(t.app)?Promise.reject(st(t)):Rp(Ye(t),vn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jc(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(t,e){return ct(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pn(r,Cp(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Ap(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function Pp(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function Op(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function kp(t){return Ye(t).signOut()}const Nr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nr,"1"),this.storage.removeItem(Nr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(){const t=ve();return Ei(t)||Xr(t)}const Dp=1e3,Lp=10;class Xc extends Yc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Np()&&Qh(),this.fallbackToPolling=Hc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Xh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Lp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xc.type="LOCAL";const Mp=Xc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends Yc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qc.type="SESSION";const Zc=Qc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Zr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await xp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ti("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function Fp(t){qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function $p(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Vp(){return el()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="firebaseLocalStorageDb",jp=1,Dr="firebaseLocalStorage",nl="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function es(t,e){return t.transaction([Dr],e?"readwrite":"readonly").objectStore(Dr)}function Hp(){const t=indexedDB.deleteDatabase(tl);return new Qn(t).toPromise()}function js(){const t=indexedDB.open(tl,jp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dr,{keyPath:nl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dr)?e(r):(r.close(),await Hp(),e(await js()))})})}async function Uo(t,e,n){const r=es(t,!0).put({[nl]:e,value:n});return new Qn(r).toPromise()}async function Wp(t,e){const n=es(t,!1).get(e),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function Fo(t,e){const n=es(t,!0).delete(e);return new Qn(n).toPromise()}const Kp=800,zp=3;class rl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await js(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return el()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zr._getInstance(Vp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $p(),!this.activeServiceWorker)return;this.sender=new Up(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await js();return await Uo(e,Nr,"1"),await Fo(e,Nr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Wp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=es(s,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rl.type="LOCAL";const qp=rl;new Jn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t,e){return e?nt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends wi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gp(t){return Gc(t.auth,new Ri(t),t.bypassAuthState)}function Jp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Tp(n,new Ri(t),t.bypassAuthState)}async function Yp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Sp(n,new Ri(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gp;case"linkViaPopup":case"linkViaRedirect":return Yp;case"reauthViaPopup":case"reauthViaRedirect":return Jp;default:ke(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=new Jn(2e3,1e4);async function U_(t,e,n){if(Me(t.app))return Promise.reject(Fe(t,"operation-not-supported-in-this-environment"));const r=Nt(t);Nh(t,e,Si);const s=sl(r,n);return new Bt(r,"signInViaPopup",e,s).executeNotNull()}class Bt extends il{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Xp.get())};e()}}Bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="pendingRedirect",pr=new Map;class Zp extends il{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pr.get(this.auth._key());if(!e){try{const r=await eg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pr.set(this.auth._key(),e)}return this.bypassAuthState||pr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eg(t,e){const n=rg(e),r=ng(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tg(t,e){pr.set(t._key(),e)}function ng(t){return nt(t._redirectPersistence)}function rg(t){return hr(Qp,t.config.apiKey,t.name)}async function sg(t,e,n=!1){if(Me(t.app))return Promise.reject(st(t));const r=Nt(t),s=sl(r,e),o=await new Zp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=10*60*1e3;class og{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ag(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ol(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ig&&this.cachedEventUids.clear(),this.cachedEventUids.has($o(e))}saveEventToCache(e){this.cachedEventUids.add($o(e)),this.lastProcessedEventTime=Date.now()}}function $o(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ol({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ag(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ol(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t,e={}){return ct(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ug=/^https?/;async function fg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cg(t);for(const n of e)try{if(dg(n))return}catch{}ke(t,"unauthorized-domain")}function dg(t){const e=$s(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ug.test(n))return!1;if(lg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Jn(3e4,6e4);function Bo(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pg(t){return new Promise((e,n)=>{var r,s,i;function o(){Bo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bo(),n(Fe(t,"network-request-failed"))},timeout:hg.get()})}if(!((s=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qe().gapi)===null||i===void 0)&&i.load)o();else{const a=ap("iframefcb");return qe()[a]=()=>{gapi.load?o():n(Fe(t,"network-request-failed"))},Kc(`${op()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw gr=null,e})}let gr=null;function gg(t){return gr=gr||pg(t),gr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new Jn(5e3,15e3),_g="__/auth/iframe",vg="emulator/auth/iframe",yg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Eg(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yi(e,vg):`https://${t.config.authDomain}/${_g}`,r={apiKey:e.apiKey,appName:t.name,v:Gn},s=bg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qn(r).slice(1)}`}async function wg(t){const e=await gg(t),n=qe().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Eg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Fe(t,"network-request-failed"),a=qe().setTimeout(()=>{i(o)},mg.get());function c(){qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sg=500,Tg=600,Rg="_blank",Cg="http://localhost";class Vo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ag(t,e,n,r=Sg,s=Tg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ig),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ve().toLowerCase();n&&(a=Fc(l)?Rg:n),Uc(l)&&(e=e||Cg,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,R])=>`${p}${_}=${R},`,"");if(Yh(l)&&a!=="_self")return Pg(e||"",a),new Vo(null);const h=window.open(e||"",a,u);x(h,t,"popup-blocked");try{h.focus()}catch{}return new Vo(h)}function Pg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="__/auth/handler",kg="emulator/auth/handler",Ng=encodeURIComponent("fac");async function jo(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gn,eventId:s};if(e instanceof Si){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Xn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Ng}=${encodeURIComponent(c)}`:"";return`${Dg(t)}?${qn(a).slice(1)}${l}`}function Dg({config:t}){return t.emulator?yi(t,kg):`https://${t.authDomain}/${Og}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="webStorageSupport";class Lg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zc,this._completeRedirectFn=sg,this._overrideRedirectResult=tg}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jo(e,n,r,$s(),s);return Ag(e,o,Ti())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jo(e,n,r,$s(),s);return Fp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wg(e),r=new og(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ms,{type:ms},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ms];o!==void 0&&n(!!o),ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hc()||Ei()||Xr()}}const Mg=Lg;var Ho="@firebase/auth",Wo="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fg(t){Fn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wc(t)},l=new rp(r,s,i,c);return dp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new hn("auth-internal",e=>{const n=Nt(e.getProvider("auth").getImmediate());return(r=>new xg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Ho,Wo,Ug(t)),cn(Ho,Wo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=5*60,Bg=Ec("authIdTokenMaxAge")||$g;let Ko=null;const Vg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bg)return;const s=n==null?void 0:n.token;Ko!==s&&(Ko=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jg(t=bh()){const e=Tc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fp(t,{popupRedirectResolver:Mg,persistence:[qp,Mp,Zc]}),r=Ec("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Vg(i.toString());Pp(n,o,()=>o(n.currentUser)),Ap(n,a=>o(a))}}const s=yc("auth");return s&&hp(n,`http://${s}`),n}function Hg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sp({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Fe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Hg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fg("Browser");function Wg(t){return Qs()?(ma(t),!0):!1}function Ci(t){return typeof t=="function"?t():Ie(t)}const al=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Kg=t=>t!=null,zg=()=>{};function qg(t){return cc()}function Gg(...t){if(t.length!==1)return fu(...t);const e=t[0];return typeof e=="function"?si(au(()=>({get:e,set:zg}))):Je(e)}function Jg(t,e){qg()&&za(t,e)}function Yg(t){var e;const n=Ci(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Xg=al?window:void 0,Qg=al?window.document:void 0;function Zg(){const t=Je(!1),e=cc();return e&&fi(()=>{t.value=!0},e),t}function em(t){const e=Zg();return we(()=>(e.value,!!t()))}function tm(t,e,n={}){const{window:r=Xg,...s}=n;let i;const o=em(()=>r&&"MutationObserver"in r),a=()=>{i&&(i.disconnect(),i=void 0)},c=we(()=>{const p=Ci(t),_=(Array.isArray(p)?p:[p]).map(Yg).filter(Kg);return new Set(_)}),l=Wt(()=>c.value,p=>{a(),o.value&&p.size&&(i=new MutationObserver(e),p.forEach(_=>i.observe(_,s)))},{immediate:!0,flush:"post"}),u=()=>i==null?void 0:i.takeRecords(),h=()=>{a(),l()};return Wg(h),{isSupported:o,stop:h,takeRecords:u}}function nm(t=null,e={}){var n,r,s;const{document:i=Qg,restoreOnUnmount:o=h=>h}=e,a=(n=i==null?void 0:i.title)!=null?n:"",c=Gg((r=t??(i==null?void 0:i.title))!=null?r:null),l=t&&typeof t=="function";function u(h){if(!("titleTemplate"in e))return h;const p=e.titleTemplate||"%s";return typeof p=="function"?p(h):Ci(p).replace(/%s/g,h)}return Wt(c,(h,p)=>{h!==p&&i&&(i.title=u(typeof h=="string"?h:""))},{immediate:!0}),e.observe&&!e.titleTemplate&&i&&!l&&tm((s=i.head)==null?void 0:s.querySelector("title"),()=>{i&&i.title!==c.value&&(c.value=u(i.title))},{childList:!0}),Jg(()=>{if(o){const h=o(a,c.value||"");h!=null&&i&&(i.title=h)}}),c}const cl=ed("user",()=>{const t=Je(null),e=Je(null),n=nm(),r=()=>{t.value=jg(),Op(t.value,l=>{l&&s(l)})},s=l=>{e.value={name:l.displayName,email:l.email,registerDate:l.metadata.creationTime,lastLogin:l.metadata.lastSignInTime,verified:l.emailVerified,avatar:l.photoURL},e.value.name&&(n.value=e.value.name+"`s dashboard")},i=()=>{e.value=null};return{auth:t,activeUser:e,getAuthState:r,logOut:()=>{kp(t.value).then(()=>{i(),n.value="Dashboard usuarios"})},postNewName:async l=>{e.value.name=l;try{await xo(t.value.currentUser,{displayName:l}),console.log("Nombre del usuario actualizado en Firebase Auth")}catch{console.log("No se pudo actualizar")}},postNewAvatar:async l=>{console.log(l),e.value.avatar=l;try{await xo(t.value.currentUser,{photoURL:l}),console.log("Avatar actualizado en Firebase Auth")}catch{console.log("No se pudo actualizar")}}}}),ll=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},rm=t=>($a("data-v-67fab697"),t=t(),Ba(),t),sm={class:"topContainer"},im=rm(()=>De("h1",null,"User analytics dashboard",-1)),om={class:"upperRoutes"},am={class:"upperButton"},cm={__name:"App",setup(t){const e=cl();fi(()=>{e.getAuthState()});const n=()=>{e.logOut(),alert("Bye bye")},r=Je("homeClass"),s=Je("logoutClass"),i={mounted:(o,a)=>o.classList.add(a.value)};return(o,a)=>{const c=br("RouterLink"),l=br("RouterView");return ze(),wr(He,null,[De("section",sm,[im,De("nav",null,[De("section",om,[Wi((ze(),on(c,{activeClass:"mainActive",to:"/home"},{default:wt(()=>[Ze("Home")]),_:1})),[[i,r.value]]),Ie(e).activeUser?Pn("",!0):(ze(),on(c,{key:0,activeClass:"mainActive",to:"/login"},{default:wt(()=>[Ze("Log in")]),_:1})),Ie(e).activeUser?Pn("",!0):(ze(),on(c,{key:1,activeClass:"mainActive",to:"/register"},{default:wt(()=>[Ze("Register")]),_:1}))]),De("section",am,[Ie(e).activeUser?Wi((ze(),wr("button",{key:0,onClick:n},[Ze("Log out "+Ll(Ie(e).activeUser.name),1)])),[[i,s.value]]):Pn("",!0)])])]),De("main",null,[he(l)])],64)}}},lm=ll(cm,[["__scopeId","data-v-67fab697"]]),um="modulepreload",fm=function(t){return"/"+t},zo={},Zt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=fm(a),a in zo)return;zo[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":um,c||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const en=typeof document<"u";function dm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function _s(t,e){const n={};for(const r in e){const s=e[r];n[r]=$e(s)?s.map(t):t(s)}return n}const Nn=()=>{},$e=Array.isArray,ul=/#/g,hm=/&/g,pm=/\//g,gm=/=/g,mm=/\?/g,fl=/\+/g,_m=/%5B/g,vm=/%5D/g,dl=/%5E/g,ym=/%60/g,hl=/%7B/g,bm=/%7C/g,pl=/%7D/g,Em=/%20/g;function Ai(t){return encodeURI(""+t).replace(bm,"|").replace(_m,"[").replace(vm,"]")}function wm(t){return Ai(t).replace(hl,"{").replace(pl,"}").replace(dl,"^")}function Hs(t){return Ai(t).replace(fl,"%2B").replace(Em,"+").replace(ul,"%23").replace(hm,"%26").replace(ym,"`").replace(hl,"{").replace(pl,"}").replace(dl,"^")}function Im(t){return Hs(t).replace(gm,"%3D")}function Sm(t){return Ai(t).replace(ul,"%23").replace(mm,"%3F")}function Tm(t){return t==null?"":Sm(t).replace(pm,"%2F")}function Vn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Rm=/\/$/,Cm=t=>t.replace(Rm,"");function vs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=km(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Vn(o)}}function Am(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pm(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gn(e.matched[r],n.matched[s])&&gl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Om(t[n],e[n]))return!1;return!0}function Om(t,e){return $e(t)?qo(t,e):$e(e)?qo(e,t):t===e}function qo(t,e){return $e(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function km(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var jn;(function(t){t.pop="pop",t.push="push"})(jn||(jn={}));var Lr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Lr||(Lr={}));const ys="";function Nm(t){if(!t)if(en){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Cm(t)}const Dm=/^[^#]+#/;function Lm(t,e){return t.replace(Dm,"#")+e}function Mm(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xm=()=>({left:window.scrollX,top:window.scrollY});function Um(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Mm(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Go(t,e){return(history.state?history.state.position-e:-1)+t}const Ws=new Map;function Fm(t,e){Ws.set(t,e)}function $m(t){const e=Ws.get(t);return Ws.delete(t),e}function Bm(t=""){let e=[],n=[ys],r=0;t=Nm(t);function s(a){r++,r!==n.length&&n.splice(r),n.push(a)}function i(a,c,{direction:l,delta:u}){const h={direction:l,delta:u,type:jn.pop};for(const p of e)p(a,c,h)}const o={location:ys,state:{},base:t,createHref:Lm.bind(null,t),replace(a){n.splice(r--,1),s(a)},push(a,c){s(a)},listen(a){return e.push(a),()=>{const c=e.indexOf(a);c>-1&&e.splice(c,1)}},destroy(){e=[],n=[ys],r=0},go(a,c=!0){const l=this.location,u=a<0?Lr.back:Lr.forward;r=Math.max(0,Math.min(r+a,n.length-1)),c&&i(this.location,l,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[r]}),o}function Vm(t){return typeof t=="string"||t&&typeof t=="object"}function ml(t){return typeof t=="string"||typeof t=="symbol"}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_l=Symbol("");var Jo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jo||(Jo={}));function mn(t,e){return ie(new Error,{type:t,[_l]:!0},e)}function Qe(t,e){return t instanceof Error&&_l in t&&(e==null||!!(t.type&e))}const Yo="[^/]+?",jm={sensitive:!1,strict:!1,start:!0,end:!0},Hm=/[.+*?^${}()[\]/\\]/g;function Wm(t,e){const n=ie({},jm,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Hm,"\\$&"),_+=40;else if(p.type===1){const{value:R,repeatable:N,optional:V,regexp:D}=p;i.push({name:R,repeatable:N,optional:V});const O=D||Yo;if(O!==Yo){_+=10;try{new RegExp(`(${O})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${R}" (${O}): `+K.message)}}let U=N?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(U=V&&l.length<2?`(?:/${U})`:"/"+U),V&&(U+="?"),s+=U,_+=20,V&&(_+=-8),N&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",R=i[p-1];h[R.name]=_&&R.repeatable?_.split("/"):_}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:R,repeatable:N,optional:V}=_,D=R in l?l[R]:"";if($e(D)&&!N)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const O=$e(D)?D.join("/"):D;if(!O)if(V)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Km(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vl(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Km(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xo(r))return 1;if(Xo(s))return-1}return s.length-r.length}function Xo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zm={type:0,value:""},qm=/[a-zA-Z0-9_]/;function Gm(t){if(!t)return[[]];if(t==="/")return[[zm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:qm.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Jm(t,e,n){const r=Wm(Gm(t.path),n),s=ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ym(t,e){const n=[],r=new Map;e=ea({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const _=!p,R=Xm(u);R.aliasOf=p&&p.record;const N=ea(e,u),V=[R];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of U)V.push(ie({},R,{components:p?p.record.components:R.components,path:K,aliasOf:p?p.record:R}))}let D,O;for(const U of V){const{path:K}=U;if(h&&K[0]!=="/"){const z=h.record.path,F=z[z.length-1]==="/"?"":"/";U.path=h.record.path+(K&&F+K)}if(D=Jm(U,h,N),p?p.alias.push(D):(O=O||D,O!==D&&O.alias.push(D),_&&u.name&&!Zo(D)&&o(u.name)),yl(D)&&c(D),R.children){const z=R.children;for(let F=0;F<z.length;F++)i(z[F],D,p&&p.children[F])}p=p||D}return O?()=>{o(O)}:Nn}function o(u){if(ml(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){const h=e_(u,n);n.splice(h,0,u),u.record.name&&!Zo(u)&&r.set(u.record.name,u)}function l(u,h){let p,_={},R,N;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw mn(1,{location:u});N=p.record.name,_=ie(Qo(h.params,p.keys.filter(O=>!O.optional).concat(p.parent?p.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),u.params&&Qo(u.params,p.keys.map(O=>O.name))),R=p.stringify(_)}else if(u.path!=null)R=u.path,p=n.find(O=>O.re.test(R)),p&&(_=p.parse(R),N=p.record.name);else{if(p=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!p)throw mn(1,{location:u,currentLocation:h});N=p.record.name,_=ie({},h.params,u.params),R=p.stringify(_)}const V=[];let D=p;for(;D;)V.unshift(D.record),D=D.parent;return{name:N,path:R,params:_,matched:V,meta:Zm(V)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Xm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Qm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Qm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zm(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function ea(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function e_(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;vl(t,e[i])<0?r=i:n=i+1}const s=t_(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function t_(t){let e=t;for(;e=e.parent;)if(yl(e)&&vl(t,e)===0)return e}function yl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function n_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(fl," "),o=i.indexOf("="),a=Vn(o<0?i:i.slice(0,o)),c=o<0?null:Vn(i.slice(o+1));if(a in e){let l=e[a];$e(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ta(t){let e="";for(let n in t){const r=t[n];if(n=Im(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&Hs(i)):[r&&Hs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function r_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$e(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const s_=Symbol(""),na=Symbol(""),ts=Symbol(""),bl=Symbol(""),Ks=Symbol("");function En(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _t(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(mn(4,{from:n,to:e})):p instanceof Error?c(p):Vm(p)?c(mn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(p=>c(p))})}function bs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(i_(c)){const u=(c.__vccOpts||c)[e];u&&i.push(_t(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=dm(u)?u.default:u;o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&_t(_,n,r,o,a,s)()}))}}return i}function i_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ra(t){const e=Ue(ts),n=Ue(bl),r=we(()=>{const c=Ie(t.to);return e.resolve(c)}),s=we(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(gn.bind(null,u));if(p>-1)return p;const _=sa(c[l-2]);return l>1&&sa(u)===_&&h[h.length-1].path!==_?h.findIndex(gn.bind(null,c[l-2])):p}),i=we(()=>s.value>-1&&l_(n.params,r.value.params)),o=we(()=>s.value>-1&&s.value===n.matched.length-1&&gl(n.params,r.value.params));function a(c={}){return c_(c)?e[Ie(t.replace)?"replace":"push"](Ie(t.to)).catch(Nn):Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const o_=Ha({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ra,setup(t,{slots:e}){const n=Wn(ra(t)),{options:r}=Ue(ts),s=we(()=>({[ia(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ia(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:fc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),a_=o_;function c_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function l_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$e(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ia=(t,e,n)=>t??e??n,u_=Ha({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ue(Ks),s=we(()=>t.route||r.value),i=Ue(na,0),o=we(()=>{let l=Ie(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=we(()=>s.value.matched[o.value]);lr(na,we(()=>o.value+1)),lr(s_,a),lr(Ks,s);const c=Je();return Wt(()=>[c.value,a.value,t.name],([l,u,h],[p,_,R])=>{u&&(u.instances[h]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!gn(u,_)||!p)&&(u.enterCallbacks[h]||[]).forEach(N=>N(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return oa(n.default,{Component:p,route:l});const _=h.props[u],R=_?_===!0?l.params:typeof _=="function"?_(l):_:null,V=fc(p,ie({},R,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return oa(n.default,{Component:V,route:l})||V}}});function oa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const f_=u_;function d_(t){const e=Ym(t.routes,t),n=t.parseQuery||n_,r=t.stringifyQuery||ta,s=t.history,i=En(),o=En(),a=En(),c=ru(dt);let l=dt;en&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_s.bind(null,v=>""+v),h=_s.bind(null,Tm),p=_s.bind(null,Vn);function _(v,C){let S,P;return ml(v)?(S=e.getRecordMatcher(v),P=C):P=v,e.addRoute(P,S)}function R(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function N(){return e.getRoutes().map(v=>v.record)}function V(v){return!!e.getRecordMatcher(v)}function D(v,C){if(C=ie({},C||c.value),typeof v=="string"){const d=vs(n,v,C.path),g=e.resolve({path:d.path},C),y=s.createHref(d.fullPath);return ie(d,g,{params:p(g.params),hash:Vn(d.hash),redirectedFrom:void 0,href:y})}let S;if(v.path!=null)S=ie({},v,{path:vs(n,v.path,C.path).path});else{const d=ie({},v.params);for(const g in d)d[g]==null&&delete d[g];S=ie({},v,{params:h(d)}),C.params=h(C.params)}const P=e.resolve(S,C),X=v.hash||"";P.params=u(p(P.params));const ae=Am(r,ie({},v,{hash:wm(X),path:P.path})),f=s.createHref(ae);return ie({fullPath:ae,hash:X,query:r===ta?r_(v.query):v.query||{}},P,{redirectedFrom:void 0,href:f})}function O(v){return typeof v=="string"?vs(n,v,c.value.path):ie({},v)}function U(v,C){if(l!==v)return mn(8,{from:C,to:v})}function K(v){return re(v)}function z(v){return K(ie(O(v),{replace:!0}))}function F(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:S}=C;let P=typeof S=="function"?S(v):S;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=O(P):{path:P},P.params={}),ie({query:v.query,hash:v.hash,params:P.path!=null?{}:v.params},P)}}function re(v,C){const S=l=D(v),P=c.value,X=v.state,ae=v.force,f=v.replace===!0,d=F(S);if(d)return re(ie(O(d),{state:typeof d=="object"?ie({},X,d.state):X,force:ae,replace:f}),C||S);const g=S;g.redirectedFrom=C;let y;return!ae&&Pm(r,P,S)&&(y=mn(16,{to:g,from:P}),Be(P,P,!0,!1)),(y?Promise.resolve(y):oe(g,P)).catch(m=>Qe(m)?Qe(m,2)?m:lt(m):Y(m,g,P)).then(m=>{if(m){if(Qe(m,2))return re(ie({replace:f},O(m.to),{state:typeof m.to=="object"?ie({},X,m.to.state):X,force:ae}),C||g)}else m=Te(g,P,!0,f,X);return pe(g,P,m),m})}function H(v,C){const S=U(v,C);return S?Promise.reject(S):Promise.resolve()}function j(v){const C=Yt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(v):v()}function oe(v,C){let S;const[P,X,ae]=h_(v,C);S=bs(P.reverse(),"beforeRouteLeave",v,C);for(const d of P)d.leaveGuards.forEach(g=>{S.push(_t(g,v,C))});const f=H.bind(null,v,C);return S.push(f),ge(S).then(()=>{S=[];for(const d of i.list())S.push(_t(d,v,C));return S.push(f),ge(S)}).then(()=>{S=bs(X,"beforeRouteUpdate",v,C);for(const d of X)d.updateGuards.forEach(g=>{S.push(_t(g,v,C))});return S.push(f),ge(S)}).then(()=>{S=[];for(const d of ae)if(d.beforeEnter)if($e(d.beforeEnter))for(const g of d.beforeEnter)S.push(_t(g,v,C));else S.push(_t(d.beforeEnter,v,C));return S.push(f),ge(S)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),S=bs(ae,"beforeRouteEnter",v,C,j),S.push(f),ge(S))).then(()=>{S=[];for(const d of o.list())S.push(_t(d,v,C));return S.push(f),ge(S)}).catch(d=>Qe(d,8)?d:Promise.reject(d))}function pe(v,C,S){a.list().forEach(P=>j(()=>P(v,C,S)))}function Te(v,C,S,P,X){const ae=U(v,C);if(ae)return ae;const f=C===dt,d=en?history.state:{};S&&(P||f?s.replace(v.fullPath,ie({scroll:f&&d&&d.scroll},X)):s.push(v.fullPath,X)),c.value=v,Be(v,C,S,f),lt()}let Ae;function Dt(){Ae||(Ae=s.listen((v,C,S)=>{if(!Zn.listening)return;const P=D(v),X=F(P);if(X){re(ie(X,{replace:!0}),P).catch(Nn);return}l=P;const ae=c.value;en&&Fm(Go(ae.fullPath,S.delta),xm()),oe(P,ae).catch(f=>Qe(f,12)?f:Qe(f,2)?(re(f.to,P).then(d=>{Qe(d,20)&&!S.delta&&S.type===jn.pop&&s.go(-1,!1)}).catch(Nn),Promise.reject()):(S.delta&&s.go(-S.delta,!1),Y(f,P,ae))).then(f=>{f=f||Te(P,ae,!1),f&&(S.delta&&!Qe(f,8)?s.go(-S.delta,!1):S.type===jn.pop&&Qe(f,20)&&s.go(-1,!1)),pe(P,ae,f)}).catch(Nn)}))}let Pe=En(),J=En(),Q;function Y(v,C,S){lt(v);const P=J.list();return P.length?P.forEach(X=>X(v,C,S)):console.error(v),Promise.reject(v)}function Xe(){return Q&&c.value!==dt?Promise.resolve():new Promise((v,C)=>{Pe.add([v,C])})}function lt(v){return Q||(Q=!v,Dt(),Pe.list().forEach(([C,S])=>v?S(v):C()),Pe.reset()),v}function Be(v,C,S,P){const{scrollBehavior:X}=t;if(!en||!X)return Promise.resolve();const ae=!S&&$m(Go(v.fullPath,0))||(P||!S)&&history.state&&history.state.scroll||null;return jr().then(()=>X(v,C,ae)).then(f=>f&&Um(f)).catch(f=>Y(f,v,C))}const be=v=>s.go(v);let Jt;const Yt=new Set,Zn={currentRoute:c,listening:!0,addRoute:_,removeRoute:R,hasRoute:V,getRoutes:N,resolve:D,options:t,push:K,replace:z,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:Xe,install(v){const C=this;v.component("RouterLink",a_),v.component("RouterView",f_),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(c)}),en&&!Jt&&c.value===dt&&(Jt=!0,K(s.location).catch(X=>{}));const S={};for(const X in dt)Object.defineProperty(S,X,{get:()=>c.value[X],enumerable:!0});v.provide(ts,C),v.provide(bl,Aa(S)),v.provide(Ks,c);const P=v.unmount;Yt.add(v),v.unmount=function(){Yt.delete(v),Yt.size<1&&(l=dt,Ae&&Ae(),Ae=null,c.value=dt,Jt=!1,Q=!1),P()}}};function ge(v){return v.reduce((C,S)=>C.then(()=>j(S)),Promise.resolve())}return Zn}function h_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>gn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>gn(l,c))||s.push(c))}return[n,r,s]}function F_(){return Ue(ts)}const p_=t=>($a("data-v-4f737090"),t=t(),Ba(),t),g_={key:0},m_={class:"all"},__={class:"asideContainer"},v_={key:1},y_=p_(()=>De("p",null,"You must register or log in first 🤷‍♀️",-1)),b_=[y_],E_={__name:"HomeView",setup(t){const e=cl();return(n,r)=>{const s=br("RouterLink"),i=br("RouterView");return Ie(e).activeUser?(ze(),wr("div",g_,[De("section",m_,[De("aside",__,[he(s,{activeClass:"active",to:"/home/user"},{default:wt(()=>[Ze("Manage my user")]),_:1}),he(s,{activeClass:"active",to:"/home/data"},{default:wt(()=>[Ze("My info")]),_:1}),Ie(e).activeUser.role=="admin"?(ze(),on(s,{key:0,activeClass:"active",to:"/home/users"},{default:wt(()=>[Ze("Manage users")]),_:1})):Pn("",!0),Ie(e).activeUser.role=="admin"?(ze(),on(s,{key:1,activeClass:"active",to:"/home/all"},{default:wt(()=>[Ze("Data analysis")]),_:1})):Pn("",!0)]),he(i)])])):(ze(),wr("div",v_,b_))}}},w_=ll(E_,[["__scopeId","data-v-4f737090"]]),I_=[{path:"/home",component:w_,children:[{path:"user",name:"User",component:()=>Zt(()=>import("./UserView-BR6RYbA5.js"),__vite__mapDeps([0,1]))},{path:"data",name:"Data",component:()=>Zt(()=>import("./DataView-JlKTzX3a.js"),__vite__mapDeps([2,3]))},{path:"users",name:"Users",component:()=>Zt(()=>import("./UsersView-Co8gVafC.js"),__vite__mapDeps([4,5,6]))},{path:"all",name:"All",component:()=>Zt(()=>import("./AllDataView-DB2GlX5y.js"),__vite__mapDeps([7,5,8]))}]},{path:"/login",component:()=>Zt(()=>import("./LoginView-DbJmvgZC.js"),__vite__mapDeps([9,5,10]))},{path:"/register",component:()=>Zt(()=>import("./RegisterView-B0HGVNaK.js"),__vite__mapDeps([11,5,12]))}],S_=d_({history:Bm(),routes:I_});var T_="firebase",R_="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(T_,R_,"app");const C_=JSON.parse('{"apiKey":"AIzaSyBOlVtvB50nEDJe-7yBkmKDXvEklhMp1ZE","authDomain":"users-test-1271f.firebaseapp.com","projectId":"users-test-1271f","storageBucket":"users-test-1271f.appspot.com","messagingSenderId":"653618458021","appId":"1:653618458021:web:c9897d33052b3f3100cc4c"}'),$_=Rc(C_),A_=Gf();Wf(lm).use(S_).use(A_).mount("#app");export{Ze as A,x_ as B,U_ as C,he as D,M_ as E,He as F,yt as G,Fn as H,hn as I,cn as J,Ot as K,wc as L,bh as M,Tc as N,N_ as O,ee as P,D_ as Q,Ye as R,Gn as S,L_ as T,ve as U,$_ as V,ll as _,De as a,Ie as b,wr as c,Ba as d,fi as e,P_ as f,k_ as g,Ha as h,fc as i,yf as j,qa as k,Wt as l,G as m,jr as n,ze as o,$a as p,Pa as q,Je as r,ru as s,Ll as t,cl as u,O_ as v,Wi as w,on as x,Pn as y,F_ as z};
