(function () {
  'use strict';

  /*!
   * Vue.js v2.6.14
   * (c) 2014-2021 Evan You
   * Released under the MIT License.
   */
  const t=Object.freeze({});function e(t){return null==t}function n(t){return null!=t}function o(t){return !0===t}function r(t){return "string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function s(t){return null!==t&&"object"==typeof t}const i=Object.prototype.toString;function a(t){return "[object Object]"===i.call(t)}function c(t){const e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function l(t){return n(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function u(t){return null==t?"":Array.isArray(t)||a(t)&&t.toString===i?JSON.stringify(t,null,2):String(t)}function f(t){const e=parseFloat(t);return isNaN(e)?t:e}function d(t,e){const n=Object.create(null),o=t.split(",");for(let t=0;t<o.length;t++)n[o[t]]=!0;return e?t=>n[t.toLowerCase()]:t=>n[t]}const p$1=d("slot,component",!0),h=d("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){const n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}const y=Object.prototype.hasOwnProperty;function g(t,e){return y.call(t,e)}function v(t){const e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}const $$1=/-(\w)/g,_=v(t=>t.replace($$1,(t,e)=>e?e.toUpperCase():"")),b=v(t=>t.charAt(0).toUpperCase()+t.slice(1)),w=/\B([A-Z])/g,C=v(t=>t.replace(w,"-$1").toLowerCase());const x=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){const o=arguments.length;return o?o>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function k(t,e){e=e||0;let n=t.length-e;const o=new Array(n);for(;n--;)o[n]=t[n+e];return o}function A(t,e){for(const n in e)t[n]=e[n];return t}function O(t){const e={};for(let n=0;n<t.length;n++)t[n]&&A(e,t[n]);return e}function S(t,e,n){}const T=(t,e,n)=>!1,N=t=>t;function E(t,e){if(t===e)return !0;const n=s(t),o=s(e);if(!n||!o)return !n&&!o&&String(t)===String(e);try{const n=Array.isArray(t),o=Array.isArray(e);if(n&&o)return t.length===e.length&&t.every((t,n)=>E(t,e[n]));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(n||o)return !1;{const n=Object.keys(t),o=Object.keys(e);return n.length===o.length&&n.every(n=>E(t[n],e[n]))}}catch(t){return !1}}function j(t,e){for(let n=0;n<t.length;n++)if(E(t[n],e))return n;return -1}function D(t){let e=!1;return function(){e||(e=!0,t.apply(this,arguments));}}const L="data-server-rendered",I=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"];var F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:S,parsePlatformTagName:N,mustUseProp:T,async:!0,_lifecycleHooks:M};const P=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function R(t){const e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,o){Object.defineProperty(t,e,{value:n,enumerable:!!o,writable:!0,configurable:!0});}const B=new RegExp(`[^${P.source}.$_\\d]`);const U="__proto__"in{},V="undefined"!=typeof window,z="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=z&&WXEnvironment.platform.toLowerCase(),J=V&&window.navigator.userAgent.toLowerCase(),q=J&&/msie|trident/.test(J),W=J&&J.indexOf("msie 9.0")>0,Z=J&&J.indexOf("edge/")>0,G=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),X=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/)),Y={}.watch;let Q,tt=!1;if(V)try{const t={};Object.defineProperty(t,"passive",{get(){tt=!0;}}),window.addEventListener("test-passive",null,t);}catch(t){}const et=()=>(void 0===Q&&(Q=!V&&!z&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),Q),nt=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return "function"==typeof t&&/native code/.test(t.toString())}const rt="undefined"!=typeof Symbol&&ot(Symbol)&&"undefined"!=typeof Reflect&&ot(Reflect.ownKeys);let st;st="undefined"!=typeof Set&&ot(Set)?Set:class{constructor(){this.set=Object.create(null);}has(t){return !0===this.set[t]}add(t){this.set[t]=!0;}clear(){this.set=Object.create(null);}};let it=S,at=0;class ct{constructor(){this.id=at++,this.subs=[];}addSub(t){this.subs.push(t);}removeSub(t){m(this.subs,t);}depend(){ct.target&&ct.target.addDep(this);}notify(){const t=this.subs.slice();for(let e=0,n=t.length;e<n;e++)t[e].update();}}ct.target=null;const lt=[];function ut(t){lt.push(t),ct.target=t;}function ft(){lt.pop(),ct.target=lt[lt.length-1];}class dt{constructor(t,e,n,o,r,s,i,a){this.tag=t,this.data=e,this.children=n,this.text=o,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=i,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1;}get child(){return this.componentInstance}}const pt=(t="")=>{const e=new dt;return e.text=t,e.isComment=!0,e};function ht(t){return new dt(void 0,void 0,void 0,String(t))}function mt(t){const e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}const yt=Array.prototype,gt=Object.create(yt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){const e=yt[t];H(gt,t,function(...n){const o=e.apply(this,n),r=this.__ob__;let s;switch(t){case"push":case"unshift":s=n;break;case"splice":s=n.slice(2);}return s&&r.observeArray(s),r.dep.notify(),o});});const vt=Object.getOwnPropertyNames(gt);let $t=!0;function _t(t){$t=t;}class bt{constructor(t){var e;this.value=t,this.dep=new ct,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(U?(e=gt,t.__proto__=e):function(t,e,n){for(let o=0,r=n.length;o<r;o++){const r=n[o];H(t,r,e[r]);}}(t,gt,vt),this.observeArray(t)):this.walk(t);}walk(t){const e=Object.keys(t);for(let n=0;n<e.length;n++)Ct(t,e[n]);}observeArray(t){for(let e=0,n=t.length;e<n;e++)wt(t[e]);}}function wt(t,e){if(!s(t)||t instanceof dt)return;let n;return g(t,"__ob__")&&t.__ob__ instanceof bt?n=t.__ob__:$t&&!et()&&(Array.isArray(t)||a(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new bt(t)),e&&n&&n.vmCount++,n}function Ct(t,e,n,o,r){const s=new ct,i=Object.getOwnPropertyDescriptor(t,e);if(i&&!1===i.configurable)return;const a=i&&i.get,c=i&&i.set;a&&!c||2!==arguments.length||(n=t[e]);let l=!r&&wt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){const e=a?a.call(t):n;return ct.target&&(s.depend(),l&&(l.dep.depend(),Array.isArray(e)&&function t(e){for(let n,o=0,r=e.length;o<r;o++)(n=e[o])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n);}(e))),e},set:function(e){const o=a?a.call(t):n;e===o||e!=e&&o!=o||a&&!c||(c?c.call(t,e):n=e,l=!r&&wt(e),s.notify());}});}function xt(t,e,n){if(Array.isArray(t)&&c(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;const o=t.__ob__;return t._isVue||o&&o.vmCount?n:o?(Ct(o.value,e,n),o.dep.notify(),n):(t[e]=n,n)}function kt(t,e){if(Array.isArray(t)&&c(e))return void t.splice(e,1);const n=t.__ob__;t._isVue||n&&n.vmCount||g(t,e)&&(delete t[e],n&&n.dep.notify());}const At=F.optionMergeStrategies;function Ot(t,e){if(!e)return t;let n,o,r;const s=rt?Reflect.ownKeys(e):Object.keys(e);for(let i=0;i<s.length;i++)"__ob__"!==(n=s[i])&&(o=t[n],r=e[n],g(t,n)?o!==r&&a(o)&&a(r)&&Ot(o,r):xt(t,n,r));return t}function St(t,e,n){return n?function(){const o="function"==typeof e?e.call(n,n):e,r="function"==typeof t?t.call(n,n):t;return o?Ot(o,r):r}:e?t?function(){return Ot("function"==typeof e?e.call(this,this):e,"function"==typeof t?t.call(this,this):t)}:e:t}function Tt(t,e){const n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?function(t){const e=[];for(let n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(n):n}function Nt(t,e,n,o){const r=Object.create(t||null);return e?A(r,e):r}At.data=function(t,e,n){return n?St(t,e,n):e&&"function"!=typeof e?t:St(t,e)},M.forEach(t=>{At[t]=Tt;}),I.forEach(function(t){At[t+"s"]=Nt;}),At.watch=function(t,e,n,o){if(t===Y&&(t=void 0),e===Y&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;const r={};A(r,t);for(const t in e){let n=r[t];const o=e[t];n&&!Array.isArray(n)&&(n=[n]),r[t]=n?n.concat(o):Array.isArray(o)?o:[o];}return r},At.props=At.methods=At.inject=At.computed=function(t,e,n,o){if(!t)return e;const r=Object.create(null);return A(r,t),e&&A(r,e),r},At.provide=St;const Et=function(t,e){return void 0===e?t:e};function jt(t,e,n){if("function"==typeof e&&(e=e.options),function(t,e){const n=t.props;if(!n)return;const o={};let r,s;if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(s=n[r])&&(o[_(s)]={type:null});else if(a(n))for(const t in n)s=n[t],o[_(t)]=a(s)?s:{type:s};t.props=o;}(e),function(t,e){const n=t.inject;if(!n)return;const o=t.inject={};if(Array.isArray(n))for(let t=0;t<n.length;t++)o[n[t]]={from:n[t]};else if(a(n))for(const t in n){const e=n[t];o[t]=a(e)?A({from:t},e):{from:e};}}(e),function(t){const e=t.directives;if(e)for(const t in e){const n=e[t];"function"==typeof n&&(e[t]={bind:n,update:n});}}(e),!e._base&&(e.extends&&(t=jt(t,e.extends,n)),e.mixins))for(let o=0,r=e.mixins.length;o<r;o++)t=jt(t,e.mixins[o],n);const o={};let r;for(r in t)s(r);for(r in e)g(t,r)||s(r);function s(r){const s=At[r]||Et;o[r]=s(t[r],e[r],n,r);}return o}function Dt(t,e,n,o){if("string"!=typeof n)return;const r=t[e];if(g(r,n))return r[n];const s=_(n);if(g(r,s))return r[s];const i=b(s);return g(r,i)?r[i]:r[n]||r[s]||r[i]}function Lt(t,e,n,o){const r=e[t],s=!g(n,t);let i=n[t];const a=Pt(Boolean,r.type);if(a>-1)if(s&&!g(r,"default"))i=!1;else if(""===i||i===C(t)){const t=Pt(String,r.type);(t<0||a<t)&&(i=!0);}if(void 0===i){i=function(t,e,n){if(!g(e,"default"))return;const o=e.default;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return "function"==typeof o&&"Function"!==Mt(e.type)?o.call(t):o}(o,r,t);const e=$t;_t(!0),wt(i),_t(e);}return i}const It=/^\s*function (\w+)/;function Mt(t){const e=t&&t.toString().match(It);return e?e[1]:""}function Ft(t,e){return Mt(t)===Mt(e)}function Pt(t,e){if(!Array.isArray(e))return Ft(e,t)?0:-1;for(let n=0,o=e.length;n<o;n++)if(Ft(e[n],t))return n;return -1}function Rt(t,e,n){ut();try{if(e){let o=e;for(;o=o.$parent;){const r=o.$options.errorCaptured;if(r)for(let s=0;s<r.length;s++)try{if(!1===r[s].call(o,t,e,n))return}catch(t){Bt(t,o,"errorCaptured hook");}}}Bt(t,e,n);}finally{ft();}}function Ht(t,e,n,o,r){let s;try{(s=n?t.apply(e,n):t.call(e))&&!s._isVue&&l(s)&&!s._handled&&(s.catch(t=>Rt(t,o,r+" (Promise/async)")),s._handled=!0);}catch(t){Rt(t,o,r);}return s}function Bt(t,e,n){if(F.errorHandler)try{return F.errorHandler.call(null,t,e,n)}catch(e){e!==t&&Ut(e);}Ut(t);}function Ut(t,e,n){if(!V&&!z||"undefined"==typeof console)throw t;console.error(t);}let Vt=!1;const zt=[];let Kt,Jt=!1;function qt(){Jt=!1;const t=zt.slice(0);zt.length=0;for(let e=0;e<t.length;e++)t[e]();}if("undefined"!=typeof Promise&&ot(Promise)){const t=Promise.resolve();Kt=(()=>{t.then(qt),G&&setTimeout(S);}),Vt=!0;}else if(q||"undefined"==typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Kt="undefined"!=typeof setImmediate&&ot(setImmediate)?()=>{setImmediate(qt);}:()=>{setTimeout(qt,0);};else {let t=1;const e=new MutationObserver(qt),n=document.createTextNode(String(t));e.observe(n,{characterData:!0}),Kt=(()=>{t=(t+1)%2,n.data=String(t);}),Vt=!0;}function Wt(t,e){let n;if(zt.push(()=>{if(t)try{t.call(e);}catch(t){Rt(t,e,"nextTick");}else n&&n(e);}),Jt||(Jt=!0,Kt()),!t&&"undefined"!=typeof Promise)return new Promise(t=>{n=t;})}const Zt=new st;function Gt(t){!function t(e,n){let o,r;const i=Array.isArray(e);if(!i&&!s(e)||Object.isFrozen(e)||e instanceof dt)return;if(e.__ob__){const t=e.__ob__.dep.id;if(n.has(t))return;n.add(t);}if(i)for(o=e.length;o--;)t(e[o],n);else for(r=Object.keys(e),o=r.length;o--;)t(e[r[o]],n);}(t,Zt),Zt.clear();}const Xt=v(t=>{const e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),o="!"===(t=n?t.slice(1):t).charAt(0);return {name:t=o?t.slice(1):t,once:n,capture:o,passive:e}});function Yt(t,e){function n(){const t=n.fns;if(!Array.isArray(t))return Ht(t,null,arguments,e,"v-on handler");{const n=t.slice();for(let t=0;t<n.length;t++)Ht(n[t],null,arguments,e,"v-on handler");}}return n.fns=t,n}function Qt(t,n,r,s,i,a){let c,u,f,d;for(c in t)u=t[c],f=n[c],d=Xt(c),e(u)||(e(f)?(e(u.fns)&&(u=t[c]=Yt(u,a)),o(d.once)&&(u=t[c]=i(d.name,u,d.capture)),r(d.name,u,d.capture,d.passive,d.params)):u!==f&&(f.fns=u,t[c]=f));for(c in n)e(t[c])&&s((d=Xt(c)).name,n[c],d.capture);}function te(t,r,s){let i;t instanceof dt&&(t=t.data.hook||(t.data.hook={}));const a=t[r];function c(){s.apply(this,arguments),m(i.fns,c);}e(a)?i=Yt([c]):n(a.fns)&&o(a.merged)?(i=a).fns.push(c):i=Yt([a,c]),i.merged=!0,t[r]=i;}function ee(t,e,o,r,s){if(n(e)){if(g(e,o))return t[o]=e[o],s||delete e[o],!0;if(g(e,r))return t[o]=e[r],s||delete e[r],!0}return !1}function ne(t){return r(t)?[ht(t)]:Array.isArray(t)?function t(s,i){const a=[];let c,l,u,f;for(c=0;c<s.length;c++)e(l=s[c])||"boolean"==typeof l||(u=a.length-1,f=a[u],Array.isArray(l)?l.length>0&&(oe((l=t(l,`${i||""}_${c}`))[0])&&oe(f)&&(a[u]=ht(f.text+l[0].text),l.shift()),a.push.apply(a,l)):r(l)?oe(f)?a[u]=ht(f.text+l):""!==l&&a.push(ht(l)):oe(l)&&oe(f)?a[u]=ht(f.text+l.text):(o(s._isVList)&&n(l.tag)&&e(l.key)&&n(i)&&(l.key=`__vlist${i}_${c}__`),a.push(l)));return a}(t):void 0}function oe(t){return n(t)&&n(t.text)&&!1===t.isComment}function re(t,e){if(t){const n=Object.create(null),o=rt?Reflect.ownKeys(t):Object.keys(t);for(let r=0;r<o.length;r++){const s=o[r];if("__ob__"===s)continue;const i=t[s].from;let a=e;for(;a;){if(a._provided&&g(a._provided,i)){n[s]=a._provided[i];break}a=a.$parent;}if(!a&&"default"in t[s]){const o=t[s].default;n[s]="function"==typeof o?o.call(e):o;}}return n}}function se(t,e){if(!t||!t.length)return {};const n={};for(let o=0,r=t.length;o<r;o++){const r=t[o],s=r.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,r.context!==e&&r.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(r);else {const t=s.slot,e=n[t]||(n[t]=[]);"template"===r.tag?e.push.apply(e,r.children||[]):e.push(r);}}for(const t in n)n[t].every(ie)&&delete n[t];return n}function ie(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ae(t){return t.isComment&&t.asyncFactory}function ce(e,n,o){let r;const s=Object.keys(n).length>0,i=e?!!e.$stable:!s,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(i&&o&&o!==t&&a===o.$key&&!s&&!o.$hasNormal)return o;r={};for(const t in e)e[t]&&"$"!==t[0]&&(r[t]=le(n,t,e[t]));}else r={};for(const t in n)t in r||(r[t]=ue(n,t));return e&&Object.isExtensible(e)&&(e._normalized=r),H(r,"$stable",i),H(r,"$key",a),H(r,"$hasNormal",s),r}function le(t,e,n){const o=function(){let t=arguments.length?n.apply(null,arguments):n({}),e=(t=t&&"object"==typeof t&&!Array.isArray(t)?[t]:ne(t))&&t[0];return t&&(!e||1===t.length&&e.isComment&&!ae(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:o,enumerable:!0,configurable:!0}),o}function ue(t,e){return ()=>t[e]}function fe(t,e){let o,r,i,a,c;if(Array.isArray(t)||"string"==typeof t)for(o=new Array(t.length),r=0,i=t.length;r<i;r++)o[r]=e(t[r],r);else if("number"==typeof t)for(o=new Array(t),r=0;r<t;r++)o[r]=e(r+1,r);else if(s(t))if(rt&&t[Symbol.iterator]){o=[];const n=t[Symbol.iterator]();let r=n.next();for(;!r.done;)o.push(e(r.value,o.length)),r=n.next();}else for(a=Object.keys(t),o=new Array(a.length),r=0,i=a.length;r<i;r++)c=a[r],o[r]=e(t[c],c,r);return n(o)||(o=[]),o._isVList=!0,o}function de(t,e,n,o){const r=this.$scopedSlots[t];let s;r?(n=n||{},o&&(n=A(A({},o),n)),s=r(n)||("function"==typeof e?e():e)):s=this.$slots[t]||("function"==typeof e?e():e);const i=n&&n.slot;return i?this.$createElement("template",{slot:i},s):s}function pe(t){return Dt(this.$options,"filters",t)||N}function he(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function me(t,e,n,o,r){const s=F.keyCodes[e]||n;return r&&o&&!F.keyCodes[e]?he(r,o):s?he(s,t):o?C(o)!==e:void 0===t}function ye(t,e,n,o,r){if(n)if(s(n)){let s;Array.isArray(n)&&(n=O(n));for(const i in n){if("class"===i||"style"===i||h(i))s=t;else {const n=t.attrs&&t.attrs.type;s=o||F.mustUseProp(e,n,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={});}const a=_(i),c=C(i);if(!(a in s||c in s)&&(s[i]=n[i],r)){(t.on||(t.on={}))[`update:${i}`]=function(t){n[i]=t;};}}}return t}function ge(t,e){const n=this._staticTrees||(this._staticTrees=[]);let o=n[t];return o&&!e?o:($e(o=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),`__static__${t}`,!1),o)}function ve(t,e,n){return $e(t,`__once__${e}${n?`_${n}`:""}`,!0),t}function $e(t,e,n){if(Array.isArray(t))for(let o=0;o<t.length;o++)t[o]&&"string"!=typeof t[o]&&_e(t[o],`${e}_${o}`,n);else _e(t,e,n);}function _e(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n;}function be(t,e){if(e)if(a(e)){const n=t.on=t.on?A({},t.on):{};for(const t in e){const o=n[t],r=e[t];n[t]=o?[].concat(o,r):r;}}return t}function we(t,e,n,o){e=e||{$stable:!n};for(let o=0;o<t.length;o++){const r=t[o];Array.isArray(r)?we(r,e,n):r&&(r.proxy&&(r.fn.proxy=!0),e[r.key]=r.fn);}return o&&(e.$key=o),e}function Ce(t,e){for(let n=0;n<e.length;n+=2){const o=e[n];"string"==typeof o&&o&&(t[e[n]]=e[n+1]);}return t}function xe(t,e){return "string"==typeof t?e+t:t}function ke(t){t._o=ve,t._n=f,t._s=u,t._l=fe,t._t=de,t._q=E,t._i=j,t._m=ge,t._f=pe,t._k=me,t._b=ye,t._v=ht,t._e=pt,t._u=we,t._g=be,t._d=Ce,t._p=xe;}function Ae(e,n,r,s,i){const a=i.options;let c;g(s,"_uid")?(c=Object.create(s))._original=s:(c=s,s=s._original);const l=o(a._compiled),u=!l;this.data=e,this.props=n,this.children=r,this.parent=s,this.listeners=e.on||t,this.injections=re(a.inject,s),this.slots=(()=>(this.$slots||ce(e.scopedSlots,this.$slots=se(r,s)),this.$slots)),Object.defineProperty(this,"scopedSlots",{enumerable:!0,get(){return ce(e.scopedSlots,this.slots())}}),l&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=ce(e.scopedSlots,this.$slots)),a._scopeId?this._c=((t,e,n,o)=>{const r=Ie(c,t,e,n,o,u);return r&&!Array.isArray(r)&&(r.fnScopeId=a._scopeId,r.fnContext=s),r}):this._c=((t,e,n,o)=>Ie(c,t,e,n,o,u));}function Oe(t,e,n,o,r){const s=mt(t);return s.fnContext=n,s.fnOptions=o,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function Se(t,e){for(const n in e)t[_(n)]=e[n];}ke(Ae.prototype);const Te={init(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){const e=t;Te.prepatch(e,e);}else {(t.componentInstance=function(t,e){const o={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;n(r)&&(o.render=r.render,o.staticRenderFns=r.staticRenderFns);return new t.componentOptions.Ctor(o)}(t,ze)).$mount(e?t.elm:void 0,e);}},prepatch(e,n){const o=n.componentOptions;!function(e,n,o,r,s){const i=r.data.scopedSlots,a=e.$scopedSlots,c=!!(i&&!i.$stable||a!==t&&!a.$stable||i&&e.$scopedSlots.$key!==i.$key||!i&&e.$scopedSlots.$key),l=!!(s||e.$options._renderChildren||c);e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r);if(e.$options._renderChildren=s,e.$attrs=r.data.attrs||t,e.$listeners=o||t,n&&e.$options.props){_t(!1);const t=e._props,o=e.$options._propKeys||[];for(let r=0;r<o.length;r++){const s=o[r],i=e.$options.props;t[s]=Lt(s,i,n,e);}_t(!0),e.$options.propsData=n;}o=o||t;const u=e.$options._parentListeners;e.$options._parentListeners=o,Ve(e,o,u),l&&(e.$slots=se(s,r.context),e.$forceUpdate());}(n.componentInstance=e.componentInstance,o.propsData,o.listeners,n,o.children);},insert(t){const{context:e,componentInstance:n}=t;var o;n._isMounted||(n._isMounted=!0,We(n,"mounted")),t.data.keepAlive&&(e._isMounted?((o=n)._inactive=!1,Ge.push(o)):qe(n,!0));},destroy(t){const{componentInstance:e}=t;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(n&&(e._directInactive=!0,Je(e)))return;if(!e._inactive){e._inactive=!0;for(let n=0;n<e.$children.length;n++)t(e.$children[n]);We(e,"deactivated");}}(e,!0):e.$destroy());}},Ne=Object.keys(Te);function Ee(r,i,a,c,u){if(e(r))return;const f=a.$options._base;if(s(r)&&(r=f.extend(r)),"function"!=typeof r)return;let d;if(e(r.cid)&&void 0===(r=function(t,r){if(o(t.error)&&n(t.errorComp))return t.errorComp;if(n(t.resolved))return t.resolved;const i=Fe;i&&n(t.owners)&&-1===t.owners.indexOf(i)&&t.owners.push(i);if(o(t.loading)&&n(t.loadingComp))return t.loadingComp;if(i&&!n(t.owners)){const o=t.owners=[i];let a=!0,c=null,u=null;i.$on("hook:destroyed",()=>m(o,i));const f=t=>{for(let t=0,e=o.length;t<e;t++)o[t].$forceUpdate();t&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null));},d=D(e=>{t.resolved=Pe(e,r),a?o.length=0:f(!0);}),p=D(e=>{n(t.errorComp)&&(t.error=!0,f(!0));}),h=t(d,p);return s(h)&&(l(h)?e(t.resolved)&&h.then(d,p):l(h.component)&&(h.component.then(d,p),n(h.error)&&(t.errorComp=Pe(h.error,r)),n(h.loading)&&(t.loadingComp=Pe(h.loading,r),0===h.delay?t.loading=!0:c=setTimeout(()=>{c=null,e(t.resolved)&&e(t.error)&&(t.loading=!0,f(!1));},h.delay||200)),n(h.timeout)&&(u=setTimeout(()=>{u=null,e(t.resolved)&&p(null);},h.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}(d=r,f)))return function(t,e,n,o,r){const s=pt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:o,tag:r},s}(d,i,a,c,u);i=i||{},yn(r),n(i.model)&&function(t,e){const o=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[o]=e.model.value;const s=e.on||(e.on={}),i=s[r],a=e.model.callback;n(i)?(Array.isArray(i)?-1===i.indexOf(a):i!==a)&&(s[r]=[a].concat(i)):s[r]=a;}(r.options,i);const p=function(t,o,r){const s=o.options.props;if(e(s))return;const i={},{attrs:a,props:c}=t;if(n(a)||n(c))for(const t in s){const e=C(t);ee(i,c,t,e,!0)||ee(i,a,t,e,!1);}return i}(i,r);if(o(r.options.functional))return function(e,o,r,s,i){const a=e.options,c={},l=a.props;if(n(l))for(const e in l)c[e]=Lt(e,l,o||t);else n(r.attrs)&&Se(c,r.attrs),n(r.props)&&Se(c,r.props);const u=new Ae(r,c,i,s,e),f=a.render.call(null,u._c,u);if(f instanceof dt)return Oe(f,r,u.parent,a);if(Array.isArray(f)){const t=ne(f)||[],e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=Oe(t[n],r,u.parent,a);return e}}(r,p,i,a,c);const h=i.on;if(i.on=i.nativeOn,o(r.options.abstract)){const t=i.slot;i={},t&&(i.slot=t);}!function(t){const e=t.hook||(t.hook={});for(let t=0;t<Ne.length;t++){const n=Ne[t],o=e[n],r=Te[n];o===r||o&&o._merged||(e[n]=o?je(r,o):r);}}(i);const y=r.options.name||u;return new dt(`vue-component-${r.cid}${y?`-${y}`:""}`,i,void 0,void 0,void 0,a,{Ctor:r,propsData:p,listeners:h,tag:u,children:c},d)}function je(t,e){const n=(n,o)=>{t(n,o),e(n,o);};return n._merged=!0,n}const De=1,Le=2;function Ie(t,i,a,c,l,u){return (Array.isArray(a)||r(a))&&(l=c,c=a,a=void 0),o(u)&&(l=Le),function(t,r,i,a,c){if(n(i)&&n(i.__ob__))return pt();n(i)&&n(i.is)&&(r=i.is);if(!r)return pt();Array.isArray(a)&&"function"==typeof a[0]&&((i=i||{}).scopedSlots={default:a[0]},a.length=0);c===Le?a=ne(a):c===De&&(a=function(t){for(let e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(a));let l,u;if("string"==typeof r){let e;u=t.$vnode&&t.$vnode.ns||F.getTagNamespace(r),l=F.isReservedTag(r)?new dt(F.parsePlatformTagName(r),i,a,void 0,void 0,t):i&&i.pre||!n(e=Dt(t.$options,"components",r))?new dt(r,i,a,void 0,void 0,t):Ee(e,i,t,a,r);}else l=Ee(r,i,t,a);return Array.isArray(l)?l:n(l)?(n(u)&&function t(r,s,i){r.ns=s;"foreignObject"===r.tag&&(s=void 0,i=!0);if(n(r.children))for(let a=0,c=r.children.length;a<c;a++){const c=r.children[a];n(c.tag)&&(e(c.ns)||o(i)&&"svg"!==c.tag)&&t(c,s,i);}}(l,u),n(i)&&function(t){s(t.style)&&Gt(t.style);s(t.class)&&Gt(t.class);}(i),l):pt()}(t,i,a,c,l)}let Me,Fe=null;function Pe(t,e){return (t.__esModule||rt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),s(t)?e.extend(t):t}function Re(t){if(Array.isArray(t))for(let e=0;e<t.length;e++){const o=t[e];if(n(o)&&(n(o.componentOptions)||ae(o)))return o}}function He(t,e){Me.$on(t,e);}function Be(t,e){Me.$off(t,e);}function Ue(t,e){const n=Me;return function o(){null!==e.apply(null,arguments)&&n.$off(t,o);}}function Ve(t,e,n){Me=t,Qt(e,n||{},He,Be,Ue,t),Me=void 0;}let ze=null;function Ke(t){const e=ze;return ze=t,()=>{ze=e;}}function Je(t){for(;t&&(t=t.$parent);)if(t._inactive)return !0;return !1}function qe(t,e){if(e){if(t._directInactive=!1,Je(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(let e=0;e<t.$children.length;e++)qe(t.$children[e]);We(t,"activated");}}function We(t,e){ut();const n=t.$options[e],o=`${e} hook`;if(n)for(let e=0,r=n.length;e<r;e++)Ht(n[e],t,null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),ft();}const Ze=[],Ge=[];let Xe={},Ye=!1,Qe=!1,tn=0;let en$1=0,nn=Date.now;if(V&&!q){const t=window.performance;t&&"function"==typeof t.now&&nn()>document.createEvent("Event").timeStamp&&(nn=(()=>t.now()));}function on(){let t,e;for(en$1=nn(),Qe=!0,Ze.sort((t,e)=>t.id-e.id),tn=0;tn<Ze.length;tn++)(t=Ze[tn]).before&&t.before(),e=t.id,Xe[e]=null,t.run();const n=Ge.slice(),o=Ze.slice();tn=Ze.length=Ge.length=0,Xe={},Ye=Qe=!1,function(t){for(let e=0;e<t.length;e++)t[e]._inactive=!0,qe(t[e],!0);}(n),function(t){let e=t.length;for(;e--;){const n=t[e],o=n.vm;o._watcher===n&&o._isMounted&&!o._isDestroyed&&We(o,"updated");}}(o),nt&&F.devtools&&nt.emit("flush");}let rn=0;class sn{constructor(t,e,n,o,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.before=o.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++rn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(B.test(t))return;const e=t.split(".");return function(t){for(let n=0;n<e.length;n++){if(!t)return;t=t[e[n]];}return t}}(e),this.getter||(this.getter=S)),this.value=this.lazy?void 0:this.get();}get(){let t;ut(this);const e=this.vm;try{t=this.getter.call(e,e);}catch(t){if(!this.user)throw t;Rt(t,e,`getter for watcher "${this.expression}"`);}finally{this.deep&&Gt(t),ft(),this.cleanupDeps();}return t}addDep(t){const e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this));}cleanupDeps(){let t=this.deps.length;for(;t--;){const e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this);}let e=this.depIds;this.depIds=this.newDepIds,this.newDepIds=e,this.newDepIds.clear(),e=this.deps,this.deps=this.newDeps,this.newDeps=e,this.newDeps.length=0;}update(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){const e=t.id;if(null==Xe[e]){if(Xe[e]=!0,Qe){let e=Ze.length-1;for(;e>tn&&Ze[e].id>t.id;)e--;Ze.splice(e+1,0,t);}else Ze.push(t);Ye||(Ye=!0,Wt(on));}}(this);}run(){if(this.active){const t=this.get();if(t!==this.value||s(t)||this.deep){const e=this.value;if(this.value=t,this.user){const n=`callback for watcher "${this.expression}"`;Ht(this.cb,this.vm,[t,e],this.vm,n);}else this.cb.call(this.vm,t,e);}}}evaluate(){this.value=this.get(),this.dirty=!1;}depend(){let t=this.deps.length;for(;t--;)this.deps[t].depend();}teardown(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);let t=this.deps.length;for(;t--;)this.deps[t].removeSub(this);this.active=!1;}}}const an={enumerable:!0,configurable:!0,get:S,set:S};function cn(t,e,n){an.get=function(){return this[e][n]},an.set=function(t){this[e][n]=t;},Object.defineProperty(t,n,an);}function ln(t){t._watchers=[];const e=t.$options;e.props&&function(t,e){const n=t.$options.propsData||{},o=t._props={},r=t.$options._propKeys=[];t.$parent&&_t(!1);for(const s in e){r.push(s);const i=Lt(s,e,n,t);Ct(o,s,i),s in t||cn(t,"_props",s);}_t(!0);}(t,e.props),e.methods&&function(t,e){t.$options.props;for(const n in e)t[n]="function"!=typeof e[n]?S:x(e[n],t);}(t,e.methods),e.data?function(t){let e=t.$options.data;a(e=t._data="function"==typeof e?function(t,e){ut();try{return t.call(e,e)}catch(t){return Rt(t,e,"data()"),{}}finally{ft();}}(e,t):e||{})||(e={});const n=Object.keys(e),o=t.$options.props;t.$options.methods;let r=n.length;for(;r--;){const e=n[r];o&&g(o,e)||R(e)||cn(t,"_data",e);}wt(e,!0);}(t):wt(t._data={},!0),e.computed&&function(t,e){const n=t._computedWatchers=Object.create(null),o=et();for(const r in e){const s=e[r],i="function"==typeof s?s:s.get;o||(n[r]=new sn(t,i||S,S,un)),r in t||fn(t,r,s);}}(t,e.computed),e.watch&&e.watch!==Y&&function(t,e){for(const n in e){const o=e[n];if(Array.isArray(o))for(let e=0;e<o.length;e++)hn(t,n,o[e]);else hn(t,n,o);}}(t,e.watch);}const un={lazy:!0};function fn(t,e,n){const o=!et();"function"==typeof n?(an.get=o?dn(e):pn(n),an.set=S):(an.get=n.get?o&&!1!==n.cache?dn(e):pn(n.get):S,an.set=n.set||S),Object.defineProperty(t,e,an);}function dn(t){return function(){const e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ct.target&&e.depend(),e.value}}function pn(t){return function(){return t.call(this,this)}}function hn(t,e,n,o){return a(n)&&(o=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,o)}let mn=0;function yn(t){let e=t.options;if(t.super){const n=yn(t.super);if(n!==t.superOptions){t.superOptions=n;const o=function(t){let e;const n=t.options,o=t.sealedOptions;for(const t in n)n[t]!==o[t]&&(e||(e={}),e[t]=n[t]);return e}(t);o&&A(t.extendOptions,o),(e=t.options=jt(n,t.extendOptions)).name&&(e.components[e.name]=t);}}return e}function gn(t){this._init(t);}function vn(t){t.cid=0;let e=1;t.extend=function(t){t=t||{};const n=this,o=n.cid,r=t._Ctor||(t._Ctor={});if(r[o])return r[o];const s=t.name||n.options.name,i=function(t){this._init(t);};return (i.prototype=Object.create(n.prototype)).constructor=i,i.cid=e++,i.options=jt(n.options,t),i.super=n,i.options.props&&function(t){const e=t.options.props;for(const n in e)cn(t.prototype,"_props",n);}(i),i.options.computed&&function(t){const e=t.options.computed;for(const n in e)fn(t.prototype,n,e[n]);}(i),i.extend=n.extend,i.mixin=n.mixin,i.use=n.use,I.forEach(function(t){i[t]=n[t];}),s&&(i.options.components[s]=i),i.superOptions=n.options,i.extendOptions=t,i.sealedOptions=A({},i.options),r[o]=i,i};}function $n(t){return t&&(t.Ctor.options.name||t.tag)}function _n(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:(n=t,"[object RegExp]"===i.call(n)&&t.test(e));var n;}function bn(t,e){const{cache:n,keys:o,_vnode:r}=t;for(const t in n){const s=n[t];if(s){const i=s.name;i&&!e(i)&&wn(n,t,o,r);}}}function wn(t,e,n,o){const r=t[e];!r||o&&r.tag===o.tag||r.componentInstance.$destroy(),t[e]=null,m(n,e);}!function(e){e.prototype._init=function(e){const n=this;n._uid=mn++,n._isVue=!0,e&&e._isComponent?function(t,e){const n=t.$options=Object.create(t.constructor.options),o=e._parentVnode;n.parent=e.parent,n._parentVnode=o;const r=o.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns);}(n,e):n.$options=jt(yn(n.constructor),e||{},n),n._renderProxy=n,n._self=n,function(t){const e=t.$options;let n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t);}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1;}(n),function(t){t._events=Object.create(null),t._hasHookEvent=!1;const e=t.$options._parentListeners;e&&Ve(t,e);}(n),function(e){e._vnode=null,e._staticTrees=null;const n=e.$options,o=e.$vnode=n._parentVnode,r=o&&o.context;e.$slots=se(n._renderChildren,r),e.$scopedSlots=t,e._c=((t,n,o,r)=>Ie(e,t,n,o,r,!1)),e.$createElement=((t,n,o,r)=>Ie(e,t,n,o,r,!0));const s=o&&o.data;Ct(e,"$attrs",s&&s.attrs||t,null,!0),Ct(e,"$listeners",n._parentListeners||t,null,!0);}(n),We(n,"beforeCreate"),function(t){const e=re(t.$options.inject,t);e&&(_t(!1),Object.keys(e).forEach(n=>{Ct(t,n,e[n]);}),_t(!0));}(n),ln(n),function(t){const e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e);}(n),We(n,"created"),n.$options.el&&n.$mount(n.$options.el);};}(gn),function(t){const e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=xt,t.prototype.$delete=kt,t.prototype.$watch=function(t,e,n){const o=this;if(a(e))return hn(o,t,e,n);(n=n||{}).user=!0;const r=new sn(o,t,e,n);if(n.immediate){const t=`callback for immediate watcher "${r.expression}"`;ut(),Ht(e,o,[r.value],o,t),ft();}return function(){r.teardown();}};}(gn),function(t){const e=/^hook:/;t.prototype.$on=function(t,n){const o=this;if(Array.isArray(t))for(let e=0,r=t.length;e<r;e++)o.$on(t[e],n);else (o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){const n=this;function o(){n.$off(t,o),e.apply(n,arguments);}return o.fn=e,n.$on(t,o),n},t.prototype.$off=function(t,e){const n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(let o=0,r=t.length;o<r;o++)n.$off(t[o],e);return n}const o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;let r,s=o.length;for(;s--;)if((r=o[s])===e||r.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){const e=this;let n=e._events[t];if(n){n=n.length>1?k(n):n;const o=k(arguments,1),r=`event handler for "${t}"`;for(let t=0,s=n.length;t<s;t++)Ht(n[t],e,o,e,r);}return e};}(gn),function(t){t.prototype._update=function(t,e){const n=this,o=n.$el,r=n._vnode,s=Ke(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),s(),o&&(o.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el);},t.prototype.$forceUpdate=function(){const t=this;t._watcher&&t._watcher.update();},t.prototype.$destroy=function(){const t=this;if(t._isBeingDestroyed)return;We(t,"beforeDestroy"),t._isBeingDestroyed=!0;const e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();let n=t._watchers.length;for(;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),We(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null);};}(gn),function(t){ke(t.prototype),t.prototype.$nextTick=function(t){return Wt(t,this)},t.prototype._render=function(){const t=this,{render:e,_parentVnode:n}=t.$options;let o;n&&(t.$scopedSlots=ce(n.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=n;try{Fe=t,o=e.call(t._renderProxy,t.$createElement);}catch(e){Rt(e,t,"render"),o=t._vnode;}finally{Fe=null;}return Array.isArray(o)&&1===o.length&&(o=o[0]),o instanceof dt||(o=pt()),o.parent=n,o};}(gn);const Cn=[String,RegExp,Array];var xn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Cn,exclude:Cn,max:[String,Number]},methods:{cacheVNode(){const{cache:t,keys:e,vnodeToCache:n,keyToCache:o}=this;if(n){const{tag:r,componentInstance:s,componentOptions:i}=n;t[o]={name:$n(i),tag:r,componentInstance:s},e.push(o),this.max&&e.length>parseInt(this.max)&&wn(t,e[0],e,this._vnode),this.vnodeToCache=null;}}},created(){this.cache=Object.create(null),this.keys=[];},destroyed(){for(const t in this.cache)wn(this.cache,t,this.keys);},mounted(){this.cacheVNode(),this.$watch("include",t=>{bn(this,e=>_n(t,e));}),this.$watch("exclude",t=>{bn(this,e=>!_n(t,e));});},updated(){this.cacheVNode();},render(){const t=this.$slots.default,e=Re(t),n=e&&e.componentOptions;if(n){const t=$n(n),{include:o,exclude:r}=this;if(o&&(!t||!_n(o,t))||r&&t&&_n(r,t))return e;const{cache:s,keys:i}=this,a=null==e.key?n.Ctor.cid+(n.tag?`::${n.tag}`:""):e.key;s[a]?(e.componentInstance=s[a].componentInstance,m(i,a),i.push(a)):(this.vnodeToCache=e,this.keyToCache=a),e.data.keepAlive=!0;}return e||t&&t[0]}}};!function(t){const e={get:()=>F};Object.defineProperty(t,"config",e),t.util={warn:it,extend:A,mergeOptions:jt,defineReactive:Ct},t.set=xt,t.delete=kt,t.nextTick=Wt,t.observable=(t=>(wt(t),t)),t.options=Object.create(null),I.forEach(e=>{t.options[e+"s"]=Object.create(null);}),t.options._base=t,A(t.options.components,xn),function(t){t.use=function(t){const e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;const n=k(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this};}(t),function(t){t.mixin=function(t){return this.options=jt(this.options,t),this};}(t),vn(t),function(t){I.forEach(e=>{t[e]=function(t,n){return n?("component"===e&&a(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]};});}(t);}(gn),Object.defineProperty(gn.prototype,"$isServer",{get:et}),Object.defineProperty(gn.prototype,"$ssrContext",{get(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(gn,"FunctionalRenderContext",{value:Ae}),gn.version="2.6.14";const kn=d("style,class"),An=d("input,textarea,option,select,progress"),On=(t,e,n)=>"value"===n&&An(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t,Sn=d("contenteditable,draggable,spellcheck"),Tn=d("events,caret,typing,plaintext-only"),Nn=(t,e)=>In(e)||"false"===e?"false":"contenteditable"===t&&Tn(e)?e:"true",En=d("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),jn="http://www.w3.org/1999/xlink",Dn=t=>":"===t.charAt(5)&&"xlink"===t.slice(0,5),Ln=t=>Dn(t)?t.slice(6,t.length):"",In=t=>null==t||!1===t;function Mn(t){let e=t.data,o=t,r=t;for(;n(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(e=Fn(r.data,e));for(;n(o=o.parent);)o&&o.data&&(e=Fn(e,o.data));return function(t,e){if(n(t)||n(e))return Pn(t,Rn(e));return ""}(e.staticClass,e.class)}function Fn(t,e){return {staticClass:Pn(t.staticClass,e.staticClass),class:n(t.class)?[t.class,e.class]:e.class}}function Pn(t,e){return t?e?t+" "+e:t:e||""}function Rn(t){return Array.isArray(t)?function(t){let e,o="";for(let r=0,s=t.length;r<s;r++)n(e=Rn(t[r]))&&""!==e&&(o&&(o+=" "),o+=e);return o}(t):s(t)?function(t){let e="";for(const n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}const Hn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Bn=d("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Un=d("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Vn=t=>Bn(t)||Un(t);function zn(t){return Un(t)?"svg":"math"===t?"math":void 0}const Kn=Object.create(null);const Jn=d("text,number,password,search,email,tel,url");function qn(t){if("string"==typeof t){const e=document.querySelector(t);return e||document.createElement("div")}return t}var Wn=Object.freeze({createElement:function(t,e){const n=document.createElement(t);return "select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(Hn[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n);},removeChild:function(t,e){t.removeChild(e);},appendChild:function(t,e){t.appendChild(e);},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e;},setStyleScope:function(t,e){t.setAttribute(e,"");}}),Zn={create(t,e){Gn(e);},update(t,e){t.data.ref!==e.data.ref&&(Gn(t,!0),Gn(e));},destroy(t){Gn(t,!0);}};function Gn(t,e){const o=t.data.ref;if(!n(o))return;const r=t.context,s=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[o])?m(i[o],s):i[o]===s&&(i[o]=void 0):t.data.refInFor?Array.isArray(i[o])?i[o].indexOf(s)<0&&i[o].push(s):i[o]=[s]:i[o]=s;}const Xn=new dt("",{},[]),Yn=["create","activate","update","remove","destroy"];function Qn(t,r){return t.key===r.key&&t.asyncFactory===r.asyncFactory&&(t.tag===r.tag&&t.isComment===r.isComment&&n(t.data)===n(r.data)&&function(t,e){if("input"!==t.tag)return !0;let o;const r=n(o=t.data)&&n(o=o.attrs)&&o.type,s=n(o=e.data)&&n(o=o.attrs)&&o.type;return r===s||Jn(r)&&Jn(s)}(t,r)||o(t.isAsyncPlaceholder)&&e(r.asyncFactory.error))}function to(t,e,o){let r,s;const i={};for(r=e;r<=o;++r)n(s=t[r].key)&&(i[s]=r);return i}var eo={create:no$1,update:no$1,destroy:function(t){no$1(t,Xn);}};function no$1(t,e){(t.data.directives||e.data.directives)&&function(t,e){const n=t===Xn,o=e===Xn,r=ro(t.data.directives,t.context),s=ro(e.data.directives,e.context),i=[],a=[];let c,l,u;for(c in s)l=r[c],u=s[c],l?(u.oldValue=l.value,u.oldArg=l.arg,io(u,"update",e,t),u.def&&u.def.componentUpdated&&a.push(u)):(io(u,"bind",e,t),u.def&&u.def.inserted&&i.push(u));if(i.length){const o=()=>{for(let n=0;n<i.length;n++)io(i[n],"inserted",e,t);};n?te(e,"insert",o):o();}a.length&&te(e,"postpatch",()=>{for(let n=0;n<a.length;n++)io(a[n],"componentUpdated",e,t);});if(!n)for(c in r)s[c]||io(r[c],"unbind",t,t,o);}(t,e);}const oo=Object.create(null);function ro(t,e){const n=Object.create(null);if(!t)return n;let o,r;for(o=0;o<t.length;o++)(r=t[o]).modifiers||(r.modifiers=oo),n[so(r)]=r,r.def=Dt(e.$options,"directives",r.name);return n}function so(t){return t.rawName||`${t.name}.${Object.keys(t.modifiers||{}).join(".")}`}function io(t,e,n,o,r){const s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,o,r);}catch(o){Rt(o,n.context,`directive ${t.name} ${e} hook`);}}var ao=[Zn,eo];function co(t,o){const r=o.componentOptions;if(n(r)&&!1===r.Ctor.options.inheritAttrs)return;if(e(t.data.attrs)&&e(o.data.attrs))return;let s,i;const c=o.elm,l=t.data.attrs||{};let u=o.data.attrs||{};for(s in n(u.__ob__)&&(u=o.data.attrs=A({},u)),u)i=u[s],(l[s])!==i&&lo(c,s,i,o.data.pre);for(s in (q||Z)&&u.value!==l.value&&lo(c,"value",u.value),l)e(u[s])&&(Dn(s)?c.removeAttributeNS(jn,Ln(s)):Sn(s)||c.removeAttribute(s));}function lo(t,e,n,o){o||t.tagName.indexOf("-")>-1?uo(t,e,n):En(e)?In(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Sn(e)?t.setAttribute(e,Nn(e,n)):Dn(e)?In(n)?t.removeAttributeNS(jn,Ln(e)):t.setAttributeNS(jn,e,n):uo(t,e,n);}function uo(t,e,n){if(In(n))t.removeAttribute(e);else {if(q&&!W&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){const e=n=>{n.stopImmediatePropagation(),t.removeEventListener("input",e);};t.addEventListener("input",e),t.__ieph=!0;}t.setAttribute(e,n);}}var fo={create:co,update:co};function po(t,o){const r=o.elm,s=o.data,i=t.data;if(e(s.staticClass)&&e(s.class)&&(e(i)||e(i.staticClass)&&e(i.class)))return;let a=Mn(o);const c=r._transitionClasses;n(c)&&(a=Pn(a,Rn(c))),a!==r._prevClass&&(r.setAttribute("class",a),r._prevClass=a);}var ho={create:po,update:po};const mo=/[\w).+\-_$\]]/;function yo(t){let e,n,o,r,s,i=!1,a=!1,c=!1,l=!1,u=0,f=0,d=0,p=0;for(o=0;o<t.length;o++)if(n=e,e=t.charCodeAt(o),i)39===e&&92!==n&&(i=!1);else if(a)34===e&&92!==n&&(a=!1);else if(c)96===e&&92!==n&&(c=!1);else if(l)47===e&&92!==n&&(l=!1);else if(124!==e||124===t.charCodeAt(o+1)||124===t.charCodeAt(o-1)||u||f||d){switch(e){case 34:a=!0;break;case 39:i=!0;break;case 96:c=!0;break;case 40:d++;break;case 41:d--;break;case 91:f++;break;case 93:f--;break;case 123:u++;break;case 125:u--;}if(47===e){let e,n=o-1;for(;n>=0&&" "===(e=t.charAt(n));n--);e&&mo.test(e)||(l=!0);}}else void 0===r?(p=o+1,r=t.slice(0,o).trim()):h();function h(){(s||(s=[])).push(t.slice(p,o).trim()),p=o+1;}if(void 0===r?r=t.slice(0,o).trim():0!==p&&h(),s)for(o=0;o<s.length;o++)r=go(r,s[o]);return r}function go(t,e){const n=e.indexOf("(");if(n<0)return `_f("${e}")(${t})`;{const o=e.slice(0,n),r=e.slice(n+1);return `_f("${o}")(${t}${")"!==r?","+r:r}`}}function vo(t,e){console.error(`[Vue compiler]: ${t}`);}function $o(t,e){return t?t.map(t=>t[e]).filter(t=>t):[]}function _o(t,e,n,o,r){(t.props||(t.props=[])).push(To({name:e,value:n,dynamic:r},o)),t.plain=!1;}function bo(t,e,n,o,r){(r?t.dynamicAttrs||(t.dynamicAttrs=[]):t.attrs||(t.attrs=[])).push(To({name:e,value:n,dynamic:r},o)),t.plain=!1;}function wo(t,e,n,o){t.attrsMap[e]=n,t.attrsList.push(To({name:e,value:n},o));}function Co(t,e,n,o,r,s,i,a){(t.directives||(t.directives=[])).push(To({name:e,rawName:n,value:o,arg:r,isDynamicArg:s,modifiers:i},a)),t.plain=!1;}function xo(t,e,n){return n?`_p(${e},"${t}")`:t+e}function ko(e,n,o,r,s,i,a,c){let l;(r=r||t).right?c?n=`(${n})==='click'?'contextmenu':(${n})`:"click"===n&&(n="contextmenu",delete r.right):r.middle&&(c?n=`(${n})==='click'?'mouseup':(${n})`:"click"===n&&(n="mouseup")),r.capture&&(delete r.capture,n=xo("!",n,c)),r.once&&(delete r.once,n=xo("~",n,c)),r.passive&&(delete r.passive,n=xo("&",n,c)),r.native?(delete r.native,l=e.nativeEvents||(e.nativeEvents={})):l=e.events||(e.events={});const u=To({value:o.trim(),dynamic:c},a);r!==t&&(u.modifiers=r);const f=l[n];Array.isArray(f)?s?f.unshift(u):f.push(u):l[n]=f?s?[u,f]:[f,u]:u,e.plain=!1;}function Ao(t,e,n){const o=Oo(t,":"+e)||Oo(t,"v-bind:"+e);if(null!=o)return yo(o);if(!1!==n){const n=Oo(t,e);if(null!=n)return JSON.stringify(n)}}function Oo(t,e,n){let o;if(null!=(o=t.attrsMap[e])){const n=t.attrsList;for(let t=0,o=n.length;t<o;t++)if(n[t].name===e){n.splice(t,1);break}}return n&&delete t.attrsMap[e],o}function So(t,e){const n=t.attrsList;for(let t=0,o=n.length;t<o;t++){const o=n[t];if(e.test(o.name))return n.splice(t,1),o}}function To(t,e){return e&&(null!=e.start&&(t.start=e.start),null!=e.end&&(t.end=e.end)),t}function No(t,e,n){const{number:o,trim:r}=n||{};let s="$$v";r&&(s="(typeof $$v === 'string'? $$v.trim(): $$v)"),o&&(s=`_n(${s})`);const i=Eo(e,s);t.model={value:`(${e})`,expression:JSON.stringify(e),callback:`function ($$v) {${i}}`};}function Eo(t,e){const n=function(t){if(t=t.trim(),jo=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<jo-1)return (Io=t.lastIndexOf("."))>-1?{exp:t.slice(0,Io),key:'"'+t.slice(Io+1)+'"'}:{exp:t,key:null};Do=t,Io=Mo=Fo=0;for(;!Ro();)Ho(Lo=Po())?Uo(Lo):91===Lo&&Bo(Lo);return {exp:t.slice(0,Mo),key:t.slice(Mo+1,Fo)}}(t);return null===n.key?`${t}=${e}`:`$set(${n.exp}, ${n.key}, ${e})`}let jo,Do,Lo,Io,Mo,Fo;function Po(){return Do.charCodeAt(++Io)}function Ro(){return Io>=jo}function Ho(t){return 34===t||39===t}function Bo(t){let e=1;for(Mo=Io;!Ro();)if(Ho(t=Po()))Uo(t);else if(91===t&&e++,93===t&&e--,0===e){Fo=Io;break}}function Uo(t){const e=t;for(;!Ro()&&(t=Po())!==e;);}const Vo="__r",zo="__c";let Ko;function Jo(t,e,n){const o=Ko;return function r(){null!==e.apply(null,arguments)&&Zo(t,r,n,o);}}const qo=Vt&&!(X&&Number(X[1])<=53);function Wo(t,e,n,o){if(qo){const t=en$1,n=e;e=n._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=t||e.timeStamp<=0||e.target.ownerDocument!==document)return n.apply(this,arguments)};}Ko.addEventListener(t,e,tt?{capture:n,passive:o}:n);}function Zo(t,e,n,o){(o||Ko).removeEventListener(t,e._wrapper||e,n);}function Go(t,o){if(e(t.data.on)&&e(o.data.on))return;const r=o.data.on||{},s=t.data.on||{};Ko=o.elm,function(t){if(n(t[Vo])){const e=q?"change":"input";t[e]=[].concat(t[Vo],t[e]||[]),delete t[Vo];}n(t[zo])&&(t.change=[].concat(t[zo],t.change||[]),delete t[zo]);}(r),Qt(r,s,Wo,Zo,Jo,o.context),Ko=void 0;}var Xo={create:Go,update:Go};let Yo;function Qo(t,o){if(e(t.data.domProps)&&e(o.data.domProps))return;let r,s;const i=o.elm,a=t.data.domProps||{};let c=o.data.domProps||{};for(r in n(c.__ob__)&&(c=o.data.domProps=A({},c)),a)r in c||(i[r]="");for(r in c){if(s=c[r],"textContent"===r||"innerHTML"===r){if(o.children&&(o.children.length=0),s===a[r])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0]);}if("value"===r&&"PROGRESS"!==i.tagName){i._value=s;const t=e(s)?"":String(s);tr(i,t)&&(i.value=t);}else if("innerHTML"===r&&Un(i.tagName)&&e(i.innerHTML)){(Yo=Yo||document.createElement("div")).innerHTML=`<svg>${s}</svg>`;const t=Yo.firstChild;for(;i.firstChild;)i.removeChild(i.firstChild);for(;t.firstChild;)i.appendChild(t.firstChild);}else if(s!==a[r])try{i[r]=s;}catch(t){}}}function tr(t,e){return !t.composing&&("OPTION"===t.tagName||function(t,e){let n=!0;try{n=document.activeElement!==t;}catch(t){}return n&&t.value!==e}(t,e)||function(t,e){const o=t.value,r=t._vModifiers;if(n(r)){if(r.number)return f(o)!==f(e);if(r.trim)return o.trim()!==e.trim()}return o!==e}(t,e))}var er={create:Qo,update:Qo};const nr=v(function(t){const e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){const o=t.split(n);o.length>1&&(e[o[0].trim()]=o[1].trim());}}),e});function or(t){const e=rr(t.style);return t.staticStyle?A(t.staticStyle,e):e}function rr(t){return Array.isArray(t)?O(t):"string"==typeof t?nr(t):t}const sr=/^--/,ir=/\s*!important$/,ar=(t,e,n)=>{if(sr.test(e))t.style.setProperty(e,n);else if(ir.test(n))t.style.setProperty(C(e),n.replace(ir,""),"important");else {const o=ur(e);if(Array.isArray(n))for(let e=0,r=n.length;e<r;e++)t.style[o]=n[e];else t.style[o]=n;}},cr=["Webkit","Moz","ms"];let lr;const ur=v(function(t){if(lr=lr||document.createElement("div").style,"filter"!==(t=_(t))&&t in lr)return t;const e=t.charAt(0).toUpperCase()+t.slice(1);for(let t=0;t<cr.length;t++){const n=cr[t]+e;if(n in lr)return n}});function fr(t,o){const r=o.data,s=t.data;if(e(r.staticStyle)&&e(r.style)&&e(s.staticStyle)&&e(s.style))return;let i,a;const c=o.elm,l=s.staticStyle,u=s.normalizedStyle||s.style||{},f=l||u,d=rr(o.data.style)||{};o.data.normalizedStyle=n(d.__ob__)?A({},d):d;const p=function(t,e){const n={};let o;if(e){let e=t;for(;e.componentInstance;)(e=e.componentInstance._vnode)&&e.data&&(o=or(e.data))&&A(n,o);}(o=or(t.data))&&A(n,o);let r=t;for(;r=r.parent;)r.data&&(o=or(r.data))&&A(n,o);return n}(o,!0);for(a in f)e(p[a])&&ar(c,a,"");for(a in p)(i=p[a])!==f[a]&&ar(c,a,null==i?"":i);}var dr={create:fr,update:fr};const pr=/\s+/;function hr(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(pr).forEach(e=>t.classList.add(e)):t.classList.add(e);else {const n=` ${t.getAttribute("class")||""} `;n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim());}}function mr(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(pr).forEach(e=>t.classList.remove(e)):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else {let n=` ${t.getAttribute("class")||""} `;const o=" "+e+" ";for(;n.indexOf(o)>=0;)n=n.replace(o," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class");}}function yr(t){if(t){if("object"==typeof t){const e={};return !1!==t.css&&A(e,gr(t.name||"v")),A(e,t),e}return "string"==typeof t?gr(t):void 0}}const gr=v(t=>({enterClass:`${t}-enter`,enterToClass:`${t}-enter-to`,enterActiveClass:`${t}-enter-active`,leaveClass:`${t}-leave`,leaveToClass:`${t}-leave-to`,leaveActiveClass:`${t}-leave-active`})),vr=V&&!W,$r="transition",_r="animation";let br="transition",wr="transitionend",Cr="animation",xr="animationend";vr&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(br="WebkitTransition",wr="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Cr="WebkitAnimation",xr="webkitAnimationEnd"));const kr=V?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:t=>t();function Ar(t){kr(()=>{kr(t);});}function Or(t,e){const n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),hr(t,e));}function Sr(t,e){t._transitionClasses&&m(t._transitionClasses,e),mr(t,e);}function Tr(t,e,n){const{type:o,timeout:r,propCount:s}=Er(t,e);if(!o)return n();const i=o===$r?wr:xr;let a=0;const c=()=>{t.removeEventListener(i,l),n();},l=e=>{e.target===t&&++a>=s&&c();};setTimeout(()=>{a<s&&c();},r+1),t.addEventListener(i,l);}const Nr=/\b(transform|all)(,|$)/;function Er(t,e){const n=window.getComputedStyle(t),o=(n[br+"Delay"]||"").split(", "),r=(n[br+"Duration"]||"").split(", "),s=jr(o,r),i=(n[Cr+"Delay"]||"").split(", "),a=(n[Cr+"Duration"]||"").split(", "),c=jr(i,a);let l,u=0,f=0;return e===$r?s>0&&(l=$r,u=s,f=r.length):e===_r?c>0&&(l=_r,u=c,f=a.length):f=(l=(u=Math.max(s,c))>0?s>c?$r:_r:null)?l===$r?r.length:a.length:0,{type:l,timeout:u,propCount:f,hasTransform:l===$r&&Nr.test(n[br+"Property"])}}function jr(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map((e,n)=>Dr(e)+Dr(t[n])))}function Dr(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Lr(t,o){const r=t.elm;n(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());const i=yr(t.data.transition);if(e(i))return;if(n(r._enterCb)||1!==r.nodeType)return;const{css:a,type:c,enterClass:l,enterToClass:u,enterActiveClass:d,appearClass:p,appearToClass:h,appearActiveClass:m,beforeEnter:y,enter:g,afterEnter:v,enterCancelled:$,beforeAppear:_,appear:b,afterAppear:w,appearCancelled:C,duration:x}=i;let k=ze,A=ze.$vnode;for(;A&&A.parent;)k=A.context,A=A.parent;const O=!k._isMounted||!t.isRootInsert;if(O&&!b&&""!==b)return;const S=O&&p?p:l,T=O&&m?m:d,N=O&&h?h:u,E=O&&_||y,j=O&&"function"==typeof b?b:g,L=O&&w||v,I=O&&C||$,M=f(s(x)?x.enter:x),F=!1!==a&&!W,P=Fr(j),R=r._enterCb=D(()=>{F&&(Sr(r,N),Sr(r,T)),R.cancelled?(F&&Sr(r,S),I&&I(r)):L&&L(r),r._enterCb=null;});t.data.show||te(t,"insert",()=>{const e=r.parentNode,n=e&&e._pending&&e._pending[t.key];n&&n.tag===t.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(r,R);}),E&&E(r),F&&(Or(r,S),Or(r,T),Ar(()=>{Sr(r,S),R.cancelled||(Or(r,N),P||(Mr(M)?setTimeout(R,M):Tr(r,c,R)));})),t.data.show&&(o&&o(),j&&j(r,R)),F||P||R();}function Ir(t,o){const r=t.elm;n(r._enterCb)&&(r._enterCb.cancelled=!0,r._enterCb());const i=yr(t.data.transition);if(e(i)||1!==r.nodeType)return o();if(n(r._leaveCb))return;const{css:a,type:c,leaveClass:l,leaveToClass:u,leaveActiveClass:d,beforeLeave:p,leave:h,afterLeave:m,leaveCancelled:y,delayLeave:g,duration:v}=i,$=!1!==a&&!W,_=Fr(h),b=f(s(v)?v.leave:v),w=r._leaveCb=D(()=>{r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[t.key]=null),$&&(Sr(r,u),Sr(r,d)),w.cancelled?($&&Sr(r,l),y&&y(r)):(o(),m&&m(r)),r._leaveCb=null;});function C(){w.cancelled||(!t.data.show&&r.parentNode&&((r.parentNode._pending||(r.parentNode._pending={}))[t.key]=t),p&&p(r),$&&(Or(r,l),Or(r,d),Ar(()=>{Sr(r,l),w.cancelled||(Or(r,u),_||(Mr(b)?setTimeout(w,b):Tr(r,c,w)));})),h&&h(r,w),$||_||w());}g?g(C):C();}function Mr(t){return "number"==typeof t&&!isNaN(t)}function Fr(t){if(e(t))return !1;const o=t.fns;return n(o)?Fr(Array.isArray(o)?o[0]:o):(t._length||t.length)>1}function Pr(t,e){!0!==e.data.show&&Lr(e);}const Rr=function(t){let s,i;const a={},{modules:c,nodeOps:l}=t;for(s=0;s<Yn.length;++s)for(a[Yn[s]]=[],i=0;i<c.length;++i)n(c[i][Yn[s]])&&a[Yn[s]].push(c[i][Yn[s]]);function u(t){const e=l.parentNode(t);n(e)&&l.removeChild(e,t);}function f(t,e,r,s,i,c,u){if(n(t.elm)&&n(c)&&(t=c[u]=mt(t)),t.isRootInsert=!i,function(t,e,r,s){let i=t.data;if(n(i)){const c=n(t.componentInstance)&&i.keepAlive;if(n(i=i.hook)&&n(i=i.init)&&i(t,!1),n(t.componentInstance))return p(t,e),h(r,t.elm,s),o(c)&&function(t,e,o,r){let s,i=t;for(;i.componentInstance;)if(i=i.componentInstance._vnode,n(s=i.data)&&n(s=s.transition)){for(s=0;s<a.activate.length;++s)a.activate[s](Xn,i);e.push(i);break}h(o,t.elm,r);}(t,e,r,s),!0}}(t,e,r,s))return;const f=t.data,d=t.children,y=t.tag;n(y)?(t.elm=t.ns?l.createElementNS(t.ns,y):l.createElement(y,t),v(t),m(t,d,e),n(f)&&g(t,e),h(r,t.elm,s)):o(t.isComment)?(t.elm=l.createComment(t.text),h(r,t.elm,s)):(t.elm=l.createTextNode(t.text),h(r,t.elm,s));}function p(t,e){n(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,y(t)?(g(t,e),v(t)):(Gn(t),e.push(t));}function h(t,e,o){n(t)&&(n(o)?l.parentNode(o)===t&&l.insertBefore(t,e,o):l.appendChild(t,e));}function m(t,e,n){if(Array.isArray(e))for(let o=0;o<e.length;++o)f(e[o],n,t.elm,null,!0,e,o);else r(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)));}function y(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return n(t.tag)}function g(t,e){for(let e=0;e<a.create.length;++e)a.create[e](Xn,t);n(s=t.data.hook)&&(n(s.create)&&s.create(Xn,t),n(s.insert)&&e.push(t));}function v(t){let e;if(n(e=t.fnScopeId))l.setStyleScope(t.elm,e);else {let o=t;for(;o;)n(e=o.context)&&n(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),o=o.parent;}n(e=ze)&&e!==t.context&&e!==t.fnContext&&n(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e);}function $(t,e,n,o,r,s){for(;o<=r;++o)f(n[o],s,t,e,!1,n,o);}function _(t){let e,o;const r=t.data;if(n(r))for(n(e=r.hook)&&n(e=e.destroy)&&e(t),e=0;e<a.destroy.length;++e)a.destroy[e](t);if(n(e=t.children))for(o=0;o<t.children.length;++o)_(t.children[o]);}function b(t,e,o){for(;e<=o;++e){const o=t[e];n(o)&&(n(o.tag)?(w(o),_(o)):u(o.elm));}}function w(t,e){if(n(e)||n(t.data)){let o;const r=a.remove.length+1;for(n(e)?e.listeners+=r:e=function(t,e){function n(){0==--n.listeners&&u(t);}return n.listeners=e,n}(t.elm,r),n(o=t.componentInstance)&&n(o=o._vnode)&&n(o.data)&&w(o,e),o=0;o<a.remove.length;++o)a.remove[o](t,e);n(o=t.data.hook)&&n(o=o.remove)?o(t,e):e();}else u(t.elm);}function C(t,e,o,r){for(let s=o;s<r;s++){const o=e[s];if(n(o)&&Qn(t,o))return s}}function x(t,r,s,i,c,u){if(t===r)return;n(r.elm)&&n(i)&&(r=i[c]=mt(r));const d=r.elm=t.elm;if(o(t.isAsyncPlaceholder))return void(n(r.asyncFactory.resolved)?O(t.elm,r,s):r.isAsyncPlaceholder=!0);if(o(r.isStatic)&&o(t.isStatic)&&r.key===t.key&&(o(r.isCloned)||o(r.isOnce)))return void(r.componentInstance=t.componentInstance);let p;const h=r.data;n(h)&&n(p=h.hook)&&n(p=p.prepatch)&&p(t,r);const m=t.children,g=r.children;if(n(h)&&y(r)){for(p=0;p<a.update.length;++p)a.update[p](t,r);n(p=h.hook)&&n(p=p.update)&&p(t,r);}e(r.text)?n(m)&&n(g)?m!==g&&function(t,o,r,s,i){let a,c,u,p=0,h=0,m=o.length-1,y=o[0],g=o[m],v=r.length-1,_=r[0],w=r[v];const k=!i;for(;p<=m&&h<=v;)e(y)?y=o[++p]:e(g)?g=o[--m]:Qn(y,_)?(x(y,_,s,r,h),y=o[++p],_=r[++h]):Qn(g,w)?(x(g,w,s,r,v),g=o[--m],w=r[--v]):Qn(y,w)?(x(y,w,s,r,v),k&&l.insertBefore(t,y.elm,l.nextSibling(g.elm)),y=o[++p],w=r[--v]):Qn(g,_)?(x(g,_,s,r,h),k&&l.insertBefore(t,g.elm,y.elm),g=o[--m],_=r[++h]):(e(a)&&(a=to(o,p,m)),e(c=n(_.key)?a[_.key]:C(_,o,p,m))?f(_,s,t,y.elm,!1,r,h):Qn(u=o[c],_)?(x(u,_,s,r,h),o[c]=void 0,k&&l.insertBefore(t,u.elm,y.elm)):f(_,s,t,y.elm,!1,r,h),_=r[++h]);p>m?$(t,e(r[v+1])?null:r[v+1].elm,r,h,v,s):h>v&&b(o,p,m);}(d,m,g,s,u):n(g)?(n(t.text)&&l.setTextContent(d,""),$(d,null,g,0,g.length-1,s)):n(m)?b(m,0,m.length-1):n(t.text)&&l.setTextContent(d,""):t.text!==r.text&&l.setTextContent(d,r.text),n(h)&&n(p=h.hook)&&n(p=p.postpatch)&&p(t,r);}function k(t,e,r){if(o(r)&&n(t.parent))t.parent.data.pendingInsert=e;else for(let t=0;t<e.length;++t)e[t].data.hook.insert(e[t]);}const A=d("attrs,class,staticClass,staticStyle,key");function O(t,e,r,s){let i;const{tag:a,data:c,children:l}=e;if(s=s||c&&c.pre,e.elm=t,o(e.isComment)&&n(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(n(c)&&(n(i=c.hook)&&n(i=i.init)&&i(e,!0),n(i=e.componentInstance)))return p(e,r),!0;if(n(a)){if(n(l))if(t.hasChildNodes())if(n(i=c)&&n(i=i.domProps)&&n(i=i.innerHTML)){if(i!==t.innerHTML)return !1}else {let e=!0,n=t.firstChild;for(let t=0;t<l.length;t++){if(!n||!O(n,l[t],r,s)){e=!1;break}n=n.nextSibling;}if(!e||n)return !1}else m(e,l,r);if(n(c)){let t=!1;for(const n in c)if(!A(n)){t=!0,g(e,r);break}!t&&c.class&&Gt(c.class);}}else t.data!==e.text&&(t.data=e.text);return !0}return function(t,r,s,i){if(e(r))return void(n(t)&&_(t));let c=!1;const u=[];if(e(t))c=!0,f(r,u);else {const e=n(t.nodeType);if(!e&&Qn(t,r))x(t,r,u,null,null,i);else {if(e){if(1===t.nodeType&&t.hasAttribute(L)&&(t.removeAttribute(L),s=!0),o(s)&&O(t,r,u))return k(r,u,!0),t;d=t,t=new dt(l.tagName(d).toLowerCase(),{},[],void 0,d);}const i=t.elm,c=l.parentNode(i);if(f(r,u,i._leaveCb?null:c,l.nextSibling(i)),n(r.parent)){let t=r.parent;const e=y(r);for(;t;){for(let e=0;e<a.destroy.length;++e)a.destroy[e](t);if(t.elm=r.elm,e){for(let e=0;e<a.create.length;++e)a.create[e](Xn,t);const e=t.data.hook.insert;if(e.merged)for(let t=1;t<e.fns.length;t++)e.fns[t]();}else Gn(t);t=t.parent;}}n(c)?b([t],0,0):n(t.tag)&&_(t);}}var d;return k(r,u,c),r.elm}}({nodeOps:Wn,modules:[fo,ho,Xo,er,dr,V?{create:Pr,activate:Pr,remove(t,e){!0!==t.data.show?Ir(t,e):e();}}:{}].concat(ao)});W&&document.addEventListener("selectionchange",()=>{const t=document.activeElement;t&&t.vmodel&&qr(t,"input");});const Hr={inserted(t,e,n,o){"select"===n.tag?(o.elm&&!o.elm._vOptions?te(n,"postpatch",()=>{Hr.componentUpdated(t,e,n);}):Br(t,e,n.context),t._vOptions=[].map.call(t.options,zr)):("textarea"===n.tag||Jn(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Kr),t.addEventListener("compositionend",Jr),t.addEventListener("change",Jr),W&&(t.vmodel=!0)));},componentUpdated(t,e,n){if("select"===n.tag){Br(t,e,n.context);const o=t._vOptions,r=t._vOptions=[].map.call(t.options,zr);if(r.some((t,e)=>!E(t,o[e]))){(t.multiple?e.value.some(t=>Vr(t,r)):e.value!==e.oldValue&&Vr(e.value,r))&&qr(t,"change");}}}};function Br(t,e,n){Ur(t,e),(q||Z)&&setTimeout(()=>{Ur(t,e);},0);}function Ur(t,e,n){const o=e.value,r=t.multiple;if(r&&!Array.isArray(o))return;let s,i;for(let e=0,n=t.options.length;e<n;e++)if(i=t.options[e],r)s=j(o,zr(i))>-1,i.selected!==s&&(i.selected=s);else if(E(zr(i),o))return void(t.selectedIndex!==e&&(t.selectedIndex=e));r||(t.selectedIndex=-1);}function Vr(t,e){return e.every(e=>!E(e,t))}function zr(t){return "_value"in t?t._value:t.value}function Kr(t){t.target.composing=!0;}function Jr(t){t.target.composing&&(t.target.composing=!1,qr(t.target,"input"));}function qr(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n);}function Wr(t){return !t.componentInstance||t.data&&t.data.transition?t:Wr(t.componentInstance._vnode)}var Zr={model:Hr,show:{bind(t,{value:e},n){const o=(n=Wr(n)).data&&n.data.transition,r=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;e&&o?(n.data.show=!0,Lr(n,()=>{t.style.display=r;})):t.style.display=e?r:"none";},update(t,{value:e,oldValue:n},o){if(!e==!n)return;(o=Wr(o)).data&&o.data.transition?(o.data.show=!0,e?Lr(o,()=>{t.style.display=t.__vOriginalDisplay;}):Ir(o,()=>{t.style.display="none";})):t.style.display=e?t.__vOriginalDisplay:"none";},unbind(t,e,n,o,r){r||(t.style.display=t.__vOriginalDisplay);}}};const Gr={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Xr(t){const e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Xr(Re(e.children)):t}function Yr(t){const e={},n=t.$options;for(const o in n.propsData)e[o]=t[o];const o=n._parentListeners;for(const t in o)e[_(t)]=o[t];return e}function Qr(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}const ts=t=>t.tag||ae(t),es=t=>"show"===t.name;var ns={name:"transition",props:Gr,abstract:!0,render(t){let e=this.$slots.default;if(!e)return;if(!(e=e.filter(ts)).length)return;const n=this.mode,o=e[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return !0}(this.$vnode))return o;const s=Xr(o);if(!s)return o;if(this._leaving)return Qr(t,o);const i=`__transition-${this._uid}-`;s.key=null==s.key?s.isComment?i+"comment":i+s.tag:r(s.key)?0===String(s.key).indexOf(i)?s.key:i+s.key:s.key;const a=(s.data||(s.data={})).transition=Yr(this),c=this._vnode,l=Xr(c);if(s.data.directives&&s.data.directives.some(es)&&(s.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(s,l)&&!ae(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){const e=l.data.transition=A({},a);if("out-in"===n)return this._leaving=!0,te(e,"afterLeave",()=>{this._leaving=!1,this.$forceUpdate();}),Qr(t,o);if("in-out"===n){if(ae(s))return c;let t;const n=()=>{t();};te(a,"afterEnter",n),te(a,"enterCancelled",n),te(e,"delayLeave",e=>{t=e;});}}return o}};const os=A({tag:String,moveClass:String},Gr);function rs(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb();}function ss(t){t.data.newPos=t.elm.getBoundingClientRect();}function is(t){const e=t.data.pos,n=t.data.newPos,o=e.left-n.left,r=e.top-n.top;if(o||r){t.data.moved=!0;const e=t.elm.style;e.transform=e.WebkitTransform=`translate(${o}px,${r}px)`,e.transitionDuration="0s";}}delete os.mode;var as={Transition:ns,TransitionGroup:{props:os,beforeMount(){const t=this._update;this._update=((e,n)=>{const o=Ke(this);this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept,o(),t.call(this,e,n);});},render(t){const e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),o=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],i=Yr(this);for(let t=0;t<r.length;t++){const e=r[t];e.tag&&null!=e.key&&0!==String(e.key).indexOf("__vlist")&&(s.push(e),n[e.key]=e,(e.data||(e.data={})).transition=i);}if(o){const r=[],s=[];for(let t=0;t<o.length;t++){const e=o[t];e.data.transition=i,e.data.pos=e.elm.getBoundingClientRect(),n[e.key]?r.push(e):s.push(e);}this.kept=t(e,null,r),this.removed=s;}return t(e,null,s)},updated(){const t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(rs),t.forEach(ss),t.forEach(is),this._reflow=document.body.offsetHeight,t.forEach(t=>{if(t.data.moved){const n=t.elm,o=n.style;Or(n,e),o.transform=o.WebkitTransform=o.transitionDuration="",n.addEventListener(wr,n._moveCb=function t(o){o&&o.target!==n||o&&!/transform$/.test(o.propertyName)||(n.removeEventListener(wr,t),n._moveCb=null,Sr(n,e));});}}));},methods:{hasMove(t,e){if(!vr)return !1;if(this._hasMove)return this._hasMove;const n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(t=>{mr(n,t);}),hr(n,e),n.style.display="none",this.$el.appendChild(n);const o=Er(n);return this.$el.removeChild(n),this._hasMove=o.hasTransform}}}};gn.config.mustUseProp=On,gn.config.isReservedTag=Vn,gn.config.isReservedAttr=kn,gn.config.getTagNamespace=zn,gn.config.isUnknownElement=function(t){if(!V)return !0;if(Vn(t))return !1;if(t=t.toLowerCase(),null!=Kn[t])return Kn[t];const e=document.createElement(t);return t.indexOf("-")>-1?Kn[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Kn[t]=/HTMLUnknownElement/.test(e.toString())},A(gn.options.directives,Zr),A(gn.options.components,as),gn.prototype.__patch__=V?Rr:S,gn.prototype.$mount=function(t,e){return function(t,e,n){let o;return t.$el=e,t.$options.render||(t.$options.render=pt),We(t,"beforeMount"),o=(()=>{t._update(t._render(),n);}),new sn(t,o,S,{before(){t._isMounted&&!t._isDestroyed&&We(t,"beforeUpdate");}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,We(t,"mounted")),t}(this,t=t&&V?qn(t):void 0,e)},V&&setTimeout(()=>{F.devtools&&nt&&nt.emit("init",gn);},0);const cs=/\{\{((?:.|\r?\n)+?)\}\}/g,ls=/[-.*+?^${}()|[\]\/\\]/g,us=v(t=>{const e=t[0].replace(ls,"\\$&"),n=t[1].replace(ls,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")});var fs={staticKeys:["staticClass"],transformNode:function(t,e){e.warn;const n=Oo(t,"class");n&&(t.staticClass=JSON.stringify(n));const o=Ao(t,"class",!1);o&&(t.classBinding=o);},genData:function(t){let e="";return t.staticClass&&(e+=`staticClass:${t.staticClass},`),t.classBinding&&(e+=`class:${t.classBinding},`),e}};var ds={staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;const n=Oo(t,"style");n&&(t.staticStyle=JSON.stringify(nr(n)));const o=Ao(t,"style",!1);o&&(t.styleBinding=o);},genData:function(t){let e="";return t.staticStyle&&(e+=`staticStyle:${t.staticStyle},`),t.styleBinding&&(e+=`style:(${t.styleBinding}),`),e}};let ps;var hs={decode:t=>((ps=ps||document.createElement("div")).innerHTML=t,ps.textContent)};const ms=d("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ys=d("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),gs=d("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),vs=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,$s=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,_s=`[a-zA-Z_][\\-\\.0-9_a-zA-Z${P.source}]*`,bs=`((?:${_s}\\:)?${_s})`,ws=new RegExp(`^<${bs}`),Cs=/^\s*(\/?)>/,xs=new RegExp(`^<\\/${bs}[^>]*>`),ks=/^<!DOCTYPE [^>]+>/i,As=/^<!\--/,Os=/^<!\[/,Ss=d("script,style,textarea",!0),Ts={},Ns={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Es=/&(?:lt|gt|quot|amp|#39);/g,js=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Ds=d("pre,textarea",!0),Ls=(t,e)=>t&&Ds(t)&&"\n"===e[0];function Is(t,e){const n=e?js:Es;return t.replace(n,t=>Ns[t])}const Ms=/^@|^v-on:/,Fs=/^v-|^@|^:|^#/,Ps=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Rs=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Hs=/^\(|\)$/g,Bs=/^\[.*\]$/,Us=/:(.*)$/,Vs=/^:|^\.|^v-bind:/,zs=/\.[^.\]]+(?=[^\]]*$)/g,Ks=/^v-slot(:|$)|^#/,Js=/[\r\n]/,qs=/[ \f\t\r\n]+/g,Ws=v(hs.decode),Zs="_empty_";let Gs,Xs,Ys,Qs,ti,ei,ni,oi;function ri(t,e,n){return {type:1,tag:t,attrsList:e,attrsMap:fi(e),rawAttrsMap:{},parent:n,children:[]}}function si(t,e){Gs=e.warn||vo,ei=e.isPreTag||T,ni=e.mustUseProp||T,oi=e.getTagNamespace||T;e.isReservedTag;Ys=$o(e.modules,"transformNode"),Qs=$o(e.modules,"preTransformNode"),ti=$o(e.modules,"postTransformNode"),Xs=e.delimiters;const n=[],o=!1!==e.preserveWhitespace,r=e.whitespace;let s,i,a=!1,c=!1;function l(t){if(u(t),a||t.processed||(t=ii(t,e)),n.length||t===s||s.if&&(t.elseif||t.else)&&ci(s,{exp:t.elseif,block:t}),i&&!t.forbidden)if(t.elseif||t.else)!function(t,e){const n=function(t){let e=t.length;for(;e--;){if(1===t[e].type)return t[e];t.pop();}}(e.children);n&&n.if&&ci(n,{exp:t.elseif,block:t});}(t,i);else {if(t.slotScope){const e=t.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[e]=t;}i.children.push(t),t.parent=i;}t.children=t.children.filter(t=>!t.slotScope),u(t),t.pre&&(a=!1),ei(t.tag)&&(c=!1);for(let n=0;n<ti.length;n++)ti[n](t,e);}function u(t){if(!c){let e;for(;(e=t.children[t.children.length-1])&&3===e.type&&" "===e.text;)t.children.pop();}}return function(t,e){const n=[],o=e.expectHTML,r=e.isUnaryTag||T,s=e.canBeLeftOpenTag||T;let i,a,c=0;for(;t;){if(i=t,a&&Ss(a)){let n=0;const o=a.toLowerCase(),r=Ts[o]||(Ts[o]=new RegExp("([\\s\\S]*?)(</"+o+"[^>]*>)","i")),s=t.replace(r,function(t,r,s){return n=s.length,Ss(o)||"noscript"===o||(r=r.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ls(o,r)&&(r=r.slice(1)),e.chars&&e.chars(r),""});c+=t.length-s.length,t=s,d(o,c-n,c);}else {let n,o,r,s=t.indexOf("<");if(0===s){if(As.test(t)){const n=t.indexOf("--\x3e");if(n>=0){e.shouldKeepComment&&e.comment(t.substring(4,n),c,c+n+3),l(n+3);continue}}if(Os.test(t)){const e=t.indexOf("]>");if(e>=0){l(e+2);continue}}const n=t.match(ks);if(n){l(n[0].length);continue}const o=t.match(xs);if(o){const t=c;l(o[0].length),d(o[1],t,c);continue}const r=u();if(r){f(r),Ls(r.tagName,t)&&l(1);continue}}if(s>=0){for(o=t.slice(s);!(xs.test(o)||ws.test(o)||As.test(o)||Os.test(o)||(r=o.indexOf("<",1))<0);)s+=r,o=t.slice(s);n=t.substring(0,s);}s<0&&(n=t),n&&l(n.length),e.chars&&n&&e.chars(n,c-n.length,c);}if(t===i){e.chars&&e.chars(t);break}}function l(e){c+=e,t=t.substring(e);}function u(){const e=t.match(ws);if(e){const n={tagName:e[1],attrs:[],start:c};let o,r;for(l(e[0].length);!(o=t.match(Cs))&&(r=t.match($s)||t.match(vs));)r.start=c,l(r[0].length),r.end=c,n.attrs.push(r);if(o)return n.unarySlash=o[1],l(o[0].length),n.end=c,n}}function f(t){const i=t.tagName,c=t.unarySlash;o&&("p"===a&&gs(i)&&d(a),s(i)&&a===i&&d(i));const l=r(i)||!!c,u=t.attrs.length,f=new Array(u);for(let n=0;n<u;n++){const o=t.attrs[n],r=o[3]||o[4]||o[5]||"",s="a"===i&&"href"===o[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;f[n]={name:o[1],value:Is(r,s)};}l||(n.push({tag:i,lowerCasedTag:i.toLowerCase(),attrs:f,start:t.start,end:t.end}),a=i),e.start&&e.start(i,f,l,t.start,t.end);}function d(t,o,r){let s,i;if(null==o&&(o=c),null==r&&(r=c),t)for(i=t.toLowerCase(),s=n.length-1;s>=0&&n[s].lowerCasedTag!==i;s--);else s=0;if(s>=0){for(let t=n.length-1;t>=s;t--)e.end&&e.end(n[t].tag,o,r);n.length=s,a=s&&n[s-1].tag;}else "br"===i?e.start&&e.start(t,[],!0,o,r):"p"===i&&(e.start&&e.start(t,[],!1,o,r),e.end&&e.end(t,o,r));}d();}(t,{warn:Gs,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,outputSourceRange:e.outputSourceRange,start(t,o,r,u,f){const d=i&&i.ns||oi(t);q&&"svg"===d&&(o=function(t){const e=[];for(let n=0;n<t.length;n++){const o=t[n];di.test(o.name)||(o.name=o.name.replace(pi,""),e.push(o));}return e}(o));let p=ri(t,o,i);var h;d&&(p.ns=d),"style"!==(h=p).tag&&("script"!==h.tag||h.attrsMap.type&&"text/javascript"!==h.attrsMap.type)||et()||(p.forbidden=!0);for(let t=0;t<Qs.length;t++)p=Qs[t](p,e)||p;a||(!function(t){null!=Oo(t,"v-pre")&&(t.pre=!0);}(p),p.pre&&(a=!0)),ei(p.tag)&&(c=!0),a?function(t){const e=t.attrsList,n=e.length;if(n){const o=t.attrs=new Array(n);for(let t=0;t<n;t++)o[t]={name:e[t].name,value:JSON.stringify(e[t].value)},null!=e[t].start&&(o[t].start=e[t].start,o[t].end=e[t].end);}else t.pre||(t.plain=!0);}(p):p.processed||(ai(p),function(t){const e=Oo(t,"v-if");if(e)t.if=e,ci(t,{exp:e,block:t});else {null!=Oo(t,"v-else")&&(t.else=!0);const e=Oo(t,"v-else-if");e&&(t.elseif=e);}}(p),function(t){null!=Oo(t,"v-once")&&(t.once=!0);}(p)),s||(s=p),r?l(p):(i=p,n.push(p));},end(t,e,o){const r=n[n.length-1];n.length-=1,i=n[n.length-1],l(r);},chars(t,e,n){if(!i)return;if(q&&"textarea"===i.tag&&i.attrsMap.placeholder===t)return;const s=i.children;var l;if(t=c||t.trim()?"script"===(l=i).tag||"style"===l.tag?t:Ws(t):s.length?r?"condense"===r&&Js.test(t)?"":" ":o?" ":"":""){let e,n;c||"condense"!==r||(t=t.replace(qs," ")),!a&&" "!==t&&(e=function(t,e){const n=e?us(e):cs;if(!n.test(t))return;const o=[],r=[];let s,i,a,c=n.lastIndex=0;for(;s=n.exec(t);){(i=s.index)>c&&(r.push(a=t.slice(c,i)),o.push(JSON.stringify(a)));const e=yo(s[1].trim());o.push(`_s(${e})`),r.push({"@binding":e}),c=i+s[0].length;}return c<t.length&&(r.push(a=t.slice(c)),o.push(JSON.stringify(a))),{expression:o.join("+"),tokens:r}}(t,Xs))?n={type:2,expression:e.expression,tokens:e.tokens,text:t}:" "===t&&s.length&&" "===s[s.length-1].text||(n={type:3,text:t}),n&&s.push(n);}},comment(t,e,n){if(i){const e={type:3,text:t,isComment:!0};i.children.push(e);}}}),s}function ii(t,e){var n;!function(t){const e=Ao(t,"key");e&&(t.key=e);}(t),t.plain=!t.key&&!t.scopedSlots&&!t.attrsList.length,function(t){const e=Ao(t,"ref");e&&(t.ref=e,t.refInFor=function(t){let e=t;for(;e;){if(void 0!==e.for)return !0;e=e.parent;}return !1}(t));}(t),function(t){let e;"template"===t.tag?(e=Oo(t,"scope"),t.slotScope=e||Oo(t,"slot-scope")):(e=Oo(t,"slot-scope"))&&(t.slotScope=e);const n=Ao(t,"slot");n&&(t.slotTarget='""'===n?'"default"':n,t.slotTargetDynamic=!(!t.attrsMap[":slot"]&&!t.attrsMap["v-bind:slot"]),"template"===t.tag||t.slotScope||bo(t,"slot",n,function(t,e){return t.rawAttrsMap[":"+e]||t.rawAttrsMap["v-bind:"+e]||t.rawAttrsMap[e]}(t,"slot")));if("template"===t.tag){const e=So(t,Ks);if(e){const{name:n,dynamic:o}=li(e);t.slotTarget=n,t.slotTargetDynamic=o,t.slotScope=e.value||Zs;}}else {const e=So(t,Ks);if(e){const n=t.scopedSlots||(t.scopedSlots={}),{name:o,dynamic:r}=li(e),s=n[o]=ri("template",[],t);s.slotTarget=o,s.slotTargetDynamic=r,s.children=t.children.filter(t=>{if(!t.slotScope)return t.parent=s,!0}),s.slotScope=e.value||Zs,t.children=[],t.plain=!1;}}}(t),"slot"===(n=t).tag&&(n.slotName=Ao(n,"name")),function(t){let e;(e=Ao(t,"is"))&&(t.component=e);null!=Oo(t,"inline-template")&&(t.inlineTemplate=!0);}(t);for(let n=0;n<Ys.length;n++)t=Ys[n](t,e)||t;return function(t){const e=t.attrsList;let n,o,r,s,i,a,c,l;for(n=0,o=e.length;n<o;n++)if(r=s=e[n].name,i=e[n].value,Fs.test(r))if(t.hasBindings=!0,(a=ui(r.replace(Fs,"")))&&(r=r.replace(zs,"")),Vs.test(r))r=r.replace(Vs,""),i=yo(i),(l=Bs.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!l&&"innerHtml"===(r=_(r))&&(r="innerHTML"),a.camel&&!l&&(r=_(r)),a.sync&&(c=Eo(i,"$event"),l?ko(t,`"update:"+(${r})`,c,null,!1,0,e[n],!0):(ko(t,`update:${_(r)}`,c,null,!1,0,e[n]),C(r)!==_(r)&&ko(t,`update:${C(r)}`,c,null,!1,0,e[n])))),a&&a.prop||!t.component&&ni(t.tag,t.attrsMap.type,r)?_o(t,r,i,e[n],l):bo(t,r,i,e[n],l);else if(Ms.test(r))r=r.replace(Ms,""),(l=Bs.test(r))&&(r=r.slice(1,-1)),ko(t,r,i,a,!1,0,e[n],l);else {const o=(r=r.replace(Fs,"")).match(Us);let c=o&&o[1];l=!1,c&&(r=r.slice(0,-(c.length+1)),Bs.test(c)&&(c=c.slice(1,-1),l=!0)),Co(t,r,s,i,c,l,a,e[n]);}else bo(t,r,JSON.stringify(i),e[n]),!t.component&&"muted"===r&&ni(t.tag,t.attrsMap.type,r)&&_o(t,r,"true",e[n]);}(t),t}function ai(t){let e;if(e=Oo(t,"v-for")){const n=function(t){const e=t.match(Ps);if(!e)return;const n={};n.for=e[2].trim();const o=e[1].trim().replace(Hs,""),r=o.match(Rs);r?(n.alias=o.replace(Rs,"").trim(),n.iterator1=r[1].trim(),r[2]&&(n.iterator2=r[2].trim())):n.alias=o;return n}(e);n&&A(t,n);}}function ci(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e);}function li(t){let e=t.name.replace(Ks,"");return e||"#"!==t.name[0]&&(e="default"),Bs.test(e)?{name:e.slice(1,-1),dynamic:!0}:{name:`"${e}"`,dynamic:!1}}function ui(t){const e=t.match(zs);if(e){const t={};return e.forEach(e=>{t[e.slice(1)]=!0;}),t}}function fi(t){const e={};for(let n=0,o=t.length;n<o;n++)e[t[n].name]=t[n].value;return e}const di=/^xmlns:NS\d+/,pi=/^NS\d+:/;function hi(t){return ri(t.tag,t.attrsList.slice(),t.parent)}var mi=[fs,ds,{preTransformNode:function(t,e){if("input"===t.tag){const n=t.attrsMap;if(!n["v-model"])return;let o;if((n[":type"]||n["v-bind:type"])&&(o=Ao(t,"type")),n.type||o||!n["v-bind"]||(o=`(${n["v-bind"]}).type`),o){const n=Oo(t,"v-if",!0),r=n?`&&(${n})`:"",s=null!=Oo(t,"v-else",!0),i=Oo(t,"v-else-if",!0),a=hi(t);ai(a),wo(a,"type","checkbox"),ii(a,e),a.processed=!0,a.if=`(${o})==='checkbox'`+r,ci(a,{exp:a.if,block:a});const c=hi(t);Oo(c,"v-for",!0),wo(c,"type","radio"),ii(c,e),ci(a,{exp:`(${o})==='radio'`+r,block:c});const l=hi(t);return Oo(l,"v-for",!0),wo(l,":type",o),ii(l,e),ci(a,{exp:n,block:l}),s?a.else=!0:i&&(a.elseif=i),a}}}}];const yi={expectHTML:!0,modules:mi,directives:{model:function(t,e,n){const o=e.value,r=e.modifiers,s=t.tag,i=t.attrsMap.type;if(t.component)return No(t,o,r),!1;if("select"===s)!function(t,e,n){let o=`var $$selectedVal = ${'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;'+`return ${n&&n.number?"_n(val)":"val"}})`};`;o=`${o} ${Eo(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]")}`,ko(t,"change",o,null,!0);}(t,o,r);else if("input"===s&&"checkbox"===i)!function(t,e,n){const o=n&&n.number,r=Ao(t,"value")||"null",s=Ao(t,"true-value")||"true",i=Ao(t,"false-value")||"false";_o(t,"checked",`Array.isArray(${e})`+`?_i(${e},${r})>-1`+("true"===s?`:(${e})`:`:_q(${e},${s})`)),ko(t,"change",`var $$a=${e},`+"$$el=$event.target,"+`$$c=$$el.checked?(${s}):(${i});`+"if(Array.isArray($$a)){"+`var $$v=${o?"_n("+r+")":r},`+"$$i=_i($$a,$$v);"+`if($$el.checked){$$i<0&&(${Eo(e,"$$a.concat([$$v])")})}`+`else{$$i>-1&&(${Eo(e,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")})}`+`}else{${Eo(e,"$$c")}}`,null,!0);}(t,o,r);else if("input"===s&&"radio"===i)!function(t,e,n){const o=n&&n.number;let r=Ao(t,"value")||"null";_o(t,"checked",`_q(${e},${r=o?`_n(${r})`:r})`),ko(t,"change",Eo(e,r),null,!0);}(t,o,r);else if("input"===s||"textarea"===s)!function(t,e,n){const o=t.attrsMap.type,{lazy:r,number:s,trim:i}=n||{},a=!r&&"range"!==o,c=r?"change":"range"===o?Vo:"input";let l="$event.target.value";i&&(l="$event.target.value.trim()"),s&&(l=`_n(${l})`);let u=Eo(e,l);a&&(u=`if($event.target.composing)return;${u}`),_o(t,"value",`(${e})`),ko(t,c,u,null,!0),(i||s)&&ko(t,"blur","$forceUpdate()");}(t,o,r);else if(!F.isReservedTag(s))return No(t,o,r),!1;return !0},text:function(t,e){e.value&&_o(t,"textContent",`_s(${e.value})`,e);},html:function(t,e){e.value&&_o(t,"innerHTML",`_s(${e.value})`,e);}},isPreTag:t=>"pre"===t,isUnaryTag:ms,mustUseProp:On,canBeLeftOpenTag:ys,isReservedTag:Vn,getTagNamespace:zn,staticKeys:function(t){return t.reduce((t,e)=>t.concat(e.staticKeys||[]),[]).join(",")}(mi)};let gi,vi;const $i=v(function(t){return d("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(t?","+t:""))});function _i(t,e){t&&(gi=$i(e.staticKeys||""),vi=e.isReservedTag||T,function t(e){e.static=function(t){if(2===t.type)return !1;if(3===t.type)return !0;return !(!t.pre&&(t.hasBindings||t.if||t.for||p$1(t.tag)||!vi(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return !1;if(t.for)return !0}return !1}(t)||!Object.keys(t).every(gi)))}(e);if(1===e.type){if(!vi(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(let n=0,o=e.children.length;n<o;n++){const o=e.children[n];t(o),o.static||(e.static=!1);}if(e.ifConditions)for(let n=1,o=e.ifConditions.length;n<o;n++){const o=e.ifConditions[n].block;t(o),o.static||(e.static=!1);}}}(t),function t(e,n){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=n),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(let o=0,r=e.children.length;o<r;o++)t(e.children[o],n||!!e.for);if(e.ifConditions)for(let o=1,r=e.ifConditions.length;o<r;o++)t(e.ifConditions[o].block,n);}}(t,!1));}const bi=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,wi=/\([^)]*?\);*$/,Ci=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,xi={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},ki={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},Ai=t=>`if(${t})return null;`,Oi={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Ai("$event.target !== $event.currentTarget"),ctrl:Ai("!$event.ctrlKey"),shift:Ai("!$event.shiftKey"),alt:Ai("!$event.altKey"),meta:Ai("!$event.metaKey"),left:Ai("'button' in $event && $event.button !== 0"),middle:Ai("'button' in $event && $event.button !== 1"),right:Ai("'button' in $event && $event.button !== 2")};function Si(t,e){const n=e?"nativeOn:":"on:";let o="",r="";for(const e in t){const n=Ti(t[e]);t[e]&&t[e].dynamic?r+=`${e},${n},`:o+=`"${e}":${n},`;}return o=`{${o.slice(0,-1)}}`,r?n+`_d(${o},[${r.slice(0,-1)}])`:n+o}function Ti(t){if(!t)return "function(){}";if(Array.isArray(t))return `[${t.map(t=>Ti(t)).join(",")}]`;const e=Ci.test(t.value),n=bi.test(t.value),o=Ci.test(t.value.replace(wi,""));if(t.modifiers){let r="",s="";const i=[];for(const e in t.modifiers)if(Oi[e])s+=Oi[e],xi[e]&&i.push(e);else if("exact"===e){const e=t.modifiers;s+=Ai(["ctrl","shift","alt","meta"].filter(t=>!e[t]).map(t=>`$event.${t}Key`).join("||"));}else i.push(e);return i.length&&(r+=function(t){return "if(!$event.type.indexOf('key')&&"+`${t.map(Ni).join("&&")})return null;`}(i)),s&&(r+=s),`function($event){${r}${e?`return ${t.value}.apply(null, arguments)`:n?`return (${t.value}).apply(null, arguments)`:o?`return ${t.value}`:t.value}}`}return e||n?t.value:`function($event){${o?`return ${t.value}`:t.value}}`}function Ni(t){const e=parseInt(t,10);if(e)return `$event.keyCode!==${e}`;const n=xi[t],o=ki[t];return "_k($event.keyCode,"+`${JSON.stringify(t)},`+`${JSON.stringify(n)},`+"$event.key,"+`${JSON.stringify(o)}`+")"}var Ei={on:function(t,e){t.wrapListeners=(t=>`_g(${t},${e.value})`);},bind:function(t,e){t.wrapData=(n=>`_b(${n},'${t.tag}',${e.value},${e.modifiers&&e.modifiers.prop?"true":"false"}${e.modifiers&&e.modifiers.sync?",true":""})`);},cloak:S};class ji{constructor(t){this.options=t,this.warn=t.warn||vo,this.transforms=$o(t.modules,"transformCode"),this.dataGenFns=$o(t.modules,"genData"),this.directives=A(A({},Ei),t.directives);const e=t.isReservedTag||T;this.maybeComponent=(t=>!!t.component||!e(t.tag)),this.onceId=0,this.staticRenderFns=[],this.pre=!1;}}function Di(t,e){const n=new ji(e);return {render:`with(this){return ${t?"script"===t.tag?"null":Li(t,n):'_c("div")'}}`,staticRenderFns:n.staticRenderFns}}function Li(t,e){if(t.parent&&(t.pre=t.pre||t.parent.pre),t.staticRoot&&!t.staticProcessed)return Ii(t,e);if(t.once&&!t.onceProcessed)return Mi(t,e);if(t.for&&!t.forProcessed)return Pi(t,e);if(t.if&&!t.ifProcessed)return Fi(t,e);if("template"!==t.tag||t.slotTarget||e.pre){if("slot"===t.tag)return function(t,e){const n=t.slotName||'"default"',o=Ui(t,e);let r=`_t(${n}${o?`,function(){return ${o}}`:""}`;const s=t.attrs||t.dynamicAttrs?Ki((t.attrs||[]).concat(t.dynamicAttrs||[]).map(t=>({name:_(t.name),value:t.value,dynamic:t.dynamic}))):null,i=t.attrsMap["v-bind"];!s&&!i||o||(r+=",null");s&&(r+=`,${s}`);i&&(r+=`${s?"":",null"},${i}`);return r+")"}(t,e);{let n;if(t.component)n=function(t,e,n){const o=e.inlineTemplate?null:Ui(e,n,!0);return `_c(${t},${Ri(e,n)}${o?`,${o}`:""})`}(t.component,t,e);else {let o;(!t.plain||t.pre&&e.maybeComponent(t))&&(o=Ri(t,e));const r=t.inlineTemplate?null:Ui(t,e,!0);n=`_c('${t.tag}'${o?`,${o}`:""}${r?`,${r}`:""})`;}for(let o=0;o<e.transforms.length;o++)n=e.transforms[o](t,n);return n}}return Ui(t,e)||"void 0"}function Ii(t,e){t.staticProcessed=!0;const n=e.pre;return t.pre&&(e.pre=t.pre),e.staticRenderFns.push(`with(this){return ${Li(t,e)}}`),e.pre=n,`_m(${e.staticRenderFns.length-1}${t.staticInFor?",true":""})`}function Mi(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return Fi(t,e);if(t.staticInFor){let n="",o=t.parent;for(;o;){if(o.for){n=o.key;break}o=o.parent;}return n?`_o(${Li(t,e)},${e.onceId++},${n})`:Li(t,e)}return Ii(t,e)}function Fi(t,e,n,o){return t.ifProcessed=!0,function t(e,n,o,r){if(!e.length)return r||"_e()";const s=e.shift();return s.exp?`(${s.exp})?${i(s.block)}:${t(e,n,o,r)}`:`${i(s.block)}`;function i(t){return o?o(t,n):t.once?Mi(t,n):Li(t,n)}}(t.ifConditions.slice(),e,n,o)}function Pi(t,e,n,o){const r=t.for,s=t.alias,i=t.iterator1?`,${t.iterator1}`:"",a=t.iterator2?`,${t.iterator2}`:"";return t.forProcessed=!0,`${o||"_l"}((${r}),`+`function(${s}${i}${a}){`+`return ${(n||Li)(t,e)}`+"})"}function Ri(t,e){let n="{";const o=function(t,e){const n=t.directives;if(!n)return;let o,r,s,i,a="directives:[",c=!1;for(o=0,r=n.length;o<r;o++){s=n[o],i=!0;const r=e.directives[s.name];r&&(i=!!r(t,s,e.warn)),i&&(c=!0,a+=`{name:"${s.name}",rawName:"${s.rawName}"${s.value?`,value:(${s.value}),expression:${JSON.stringify(s.value)}`:""}${s.arg?`,arg:${s.isDynamicArg?s.arg:`"${s.arg}"`}`:""}${s.modifiers?`,modifiers:${JSON.stringify(s.modifiers)}`:""}},`);}if(c)return a.slice(0,-1)+"]"}(t,e);o&&(n+=o+","),t.key&&(n+=`key:${t.key},`),t.ref&&(n+=`ref:${t.ref},`),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+=`tag:"${t.tag}",`);for(let o=0;o<e.dataGenFns.length;o++)n+=e.dataGenFns[o](t);if(t.attrs&&(n+=`attrs:${Ki(t.attrs)},`),t.props&&(n+=`domProps:${Ki(t.props)},`),t.events&&(n+=`${Si(t.events,!1)},`),t.nativeEvents&&(n+=`${Si(t.nativeEvents,!0)},`),t.slotTarget&&!t.slotScope&&(n+=`slot:${t.slotTarget},`),t.scopedSlots&&(n+=`${function(t,e,n){let o=t.for||Object.keys(e).some(t=>{const n=e[t];return n.slotTargetDynamic||n.if||n.for||Hi(n)}),r=!!t.if;if(!o){let e=t.parent;for(;e;){if(e.slotScope&&e.slotScope!==Zs||e.for){o=!0;break}e.if&&(r=!0),e=e.parent;}}const s=Object.keys(e).map(t=>Bi(e[t],n)).join(",");return `scopedSlots:_u([${s}]${o?",null,true":""}${!o&&r?`,null,false,${function(t){let e=5381,n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e>>>0}(s)}`:""})`}(t,t.scopedSlots,e)},`),t.model&&(n+=`model:{value:${t.model.value},callback:${t.model.callback},expression:${t.model.expression}},`),t.inlineTemplate){const o=function(t,e){const n=t.children[0];if(n&&1===n.type){const t=Di(n,e.options);return `inlineTemplate:{render:function(){${t.render}},staticRenderFns:[${t.staticRenderFns.map(t=>`function(){${t}}`).join(",")}]}`}}(t,e);o&&(n+=`${o},`);}return n=n.replace(/,$/,"")+"}",t.dynamicAttrs&&(n=`_b(${n},"${t.tag}",${Ki(t.dynamicAttrs)})`),t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function Hi(t){return 1===t.type&&("slot"===t.tag||t.children.some(Hi))}function Bi(t,e){const n=t.attrsMap["slot-scope"];if(t.if&&!t.ifProcessed&&!n)return Fi(t,e,Bi,"null");if(t.for&&!t.forProcessed)return Pi(t,e,Bi);const o=t.slotScope===Zs?"":String(t.slotScope),r=`function(${o}){`+`return ${"template"===t.tag?t.if&&n?`(${t.if})?${Ui(t,e)||"undefined"}:undefined`:Ui(t,e)||"undefined":Li(t,e)}}`,s=o?"":",proxy:true";return `{key:${t.slotTarget||'"default"'},fn:${r}${s}}`}function Ui(t,e,n,o,r){const s=t.children;if(s.length){const t=s[0];if(1===s.length&&t.for&&"template"!==t.tag&&"slot"!==t.tag){const r=n?e.maybeComponent(t)?",1":",0":"";return `${(o||Li)(t,e)}${r}`}const i=n?function(t,e){let n=0;for(let o=0;o<t.length;o++){const r=t[o];if(1===r.type){if(Vi(r)||r.ifConditions&&r.ifConditions.some(t=>Vi(t.block))){n=2;break}(e(r)||r.ifConditions&&r.ifConditions.some(t=>e(t.block)))&&(n=1);}}return n}(s,e.maybeComponent):0,a=r||zi;return `[${s.map(t=>a(t,e)).join(",")}]${i?`,${i}`:""}`}}function Vi(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function zi(t,e){return 1===t.type?Li(t,e):3===t.type&&t.isComment?(o=t,`_e(${JSON.stringify(o.text)})`):`_v(${2===(n=t).type?n.expression:Ji(JSON.stringify(n.text))})`;var n,o;}function Ki(t){let e="",n="";for(let o=0;o<t.length;o++){const r=t[o],s=Ji(r.value);r.dynamic?n+=`${r.name},${s},`:e+=`"${r.name}":${s},`;}return e=`{${e.slice(0,-1)}}`,n?`_d(${e},[${n.slice(0,-1)}])`:e}function Ji(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function qi(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),S}}function Wi(t){const e=Object.create(null);return function(n,o,r){(o=A({},o)).warn;delete o.warn;const s=o.delimiters?String(o.delimiters)+n:n;if(e[s])return e[s];const i=t(n,o),a={},c=[];return a.render=qi(i.render,c),a.staticRenderFns=i.staticRenderFns.map(t=>qi(t,c)),e[s]=a}}const Zi=(Gi=function(t,e){const n=si(t.trim(),e);!1!==e.optimize&&_i(n,e);const o=Di(n,e);return {ast:n,render:o.render,staticRenderFns:o.staticRenderFns}},function(t){function e(e,n){const o=Object.create(t),r=[],s=[];if(n){n.modules&&(o.modules=(t.modules||[]).concat(n.modules)),n.directives&&(o.directives=A(Object.create(t.directives||null),n.directives));for(const t in n)"modules"!==t&&"directives"!==t&&(o[t]=n[t]);}o.warn=((t,e,n)=>{(n?s:r).push(t);});const i=Gi(e.trim(),o);return i.errors=r,i.tips=s,i}return {compile:e,compileToFunctions:Wi(e)}});var Gi;const{compile:Xi,compileToFunctions:Yi}=Zi(yi);let Qi;function ta(t){return (Qi=Qi||document.createElement("div")).innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',Qi.innerHTML.indexOf("&#10;")>0}const ea=!!V&&ta(!1),na=!!V&&ta(!0),oa=v(t=>{const e=qn(t);return e&&e.innerHTML}),ra=gn.prototype.$mount;gn.prototype.$mount=function(t,e){if((t=t&&qn(t))===document.body||t===document.documentElement)return this;const n=this.$options;if(!n.render){let e=n.template;if(e)if("string"==typeof e)"#"===e.charAt(0)&&(e=oa(e));else {if(!e.nodeType)return this;e=e.innerHTML;}else t&&(e=function(t){if(t.outerHTML)return t.outerHTML;{const e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}}(t));if(e){const{render:t,staticRenderFns:o}=Yi(e,{outputSourceRange:!1,shouldDecodeNewlines:ea,shouldDecodeNewlinesForHref:na,delimiters:n.delimiters,comments:n.comments},this);n.render=t,n.staticRenderFns=o;}}return ra.call(this,t,e)},gn.compile=Yi;

  /*!
   * Vue.js v2.6.14
   * (c) 2014-2021 Evan You
   * Released under the MIT License.
   */
  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject$1 (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject$1(a);
    var isObjectB = isObject$1(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "production" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "production" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  UA && /chrome\/\d+/.test(UA) && !isEdge;
  UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject$1(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "production" !== 'production') {
      assertObjectType(key, childVal);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else ;
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else ;
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".");
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child);
    normalizeInject(child);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  var functionTypeCheckRE = /^\s*function (\w+)/;

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(functionTypeCheckRE);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e);
        }
      }
    }
    logError(err);
  }

  function logError (err, vm, info) {
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject$1(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, cur, old, event;
    for (name in on) {
      cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) ; else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key]);
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      var vnode = res && res[0];
      return res && (
        !vnode ||
        (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject$1(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallbackRender,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        props = extend(extend({}, bindObject), props);
      }
      nodes =
        scopedSlotFn(props) ||
        (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
    } else {
      nodes =
        this.$slots[name] ||
        (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
    return eventKeyCode === undefined
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject$1(value)) ; else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) ; else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject$1(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    // we know it's MountedComponentVNode but flow doesn't
    vnode,
    // activeInstance in lifecycle state
    parent
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject$1(data.style)) {
      traverse(data.style);
    }
    if (isObject$1(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack because all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject$1(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject$1(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  null
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
      (!newScopedSlots && vm.$scopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance$1 = window.performance;
    if (
      performance$1 &&
      typeof performance$1.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance$1.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = '';
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject$1(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          var info = "callback for watcher \"" + (this.expression) + "\"";
          invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        defineReactive$$1(props, key, value);
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      if (props && hasOwn(props, key)) ; else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    vm.$options.props;
    for (var key in methods) {
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
        pushTarget();
        invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
        popTarget();
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        vm._renderProxy = vm;
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */





  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var entry = cache[key];
      if (entry) {
        var name = entry.name;
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var entry = cache[key];
    if (entry && (!current || entry.tag !== current.tag)) {
      entry.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    methods: {
      cacheVNode: function cacheVNode() {
        var ref = this;
        var cache = ref.cache;
        var keys = ref.keys;
        var vnodeToCache = ref.vnodeToCache;
        var keyToCache = ref.keyToCache;
        if (vnodeToCache) {
          var tag = vnodeToCache.tag;
          var componentInstance = vnodeToCache.componentInstance;
          var componentOptions = vnodeToCache.componentOptions;
          cache[keyToCache] = {
            name: getComponentName(componentOptions),
            tag: tag,
            componentInstance: componentInstance,
          };
          keys.push(keyToCache);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
          this.vnodeToCache = null;
        }
      }
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.cacheVNode();
      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    updated: function updated () {
      this.cacheVNode();
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          // delay setting the cache until update
          this.vnodeToCache = vnode;
          this.keyToCache = key;
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.14';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject$1(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key &&
      a.asyncFactory === b.asyncFactory && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes([oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur, vnode.data.pre);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value, isInPre) {
    if (isInPre || el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  /*  */

  /*  */

  /*  */

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject$1(duration)
        ? duration.enter
        : duration
    );

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject$1(duration)
        ? duration.leave
        : duration
    );

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      var mode = this.mode;

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        }
      }
    }, 0);
  }

  function install(Vue$1, args = {}) {
    if (install.installed) return;
    install.installed = true;

    if (Vue !== Vue$1) {
      consoleError(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
    }

    const components = args.components || {};
    const directives = args.directives || {};

    for (const name in directives) {
      const directive = directives[name];
      Vue$1.directive(name, directive);
    }

    (function registerComponents(components) {
      if (components) {
        for (const key in components) {
          const component = components[key];

          if (component && !registerComponents(component.$_vuetify_subcomponents)) {
            Vue$1.component(key, component);
          }
        }

        return true;
      }

      return false;
    })(components); // Used to avoid multiple mixins being setup
    // when in dev mode and hot module reload
    // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111


    if (Vue$1.$_vuetify_installed) return;
    Vue$1.$_vuetify_installed = true;
    Vue$1.mixin({
      beforeCreate() {
        const options = this.$options;

        if (options.vuetify) {
          options.vuetify.init(this, this.$ssrContext);
          this.$vuetify = Vue$1.observable(options.vuetify.framework);
        } else {
          this.$vuetify = options.parent && options.parent.$vuetify || this;
        }
      },

      beforeMount() {
        // @ts-ignore
        if (this.$options.vuetify && this.$el && this.$el.hasAttribute('data-server-rendered')) {
          // @ts-ignore
          this.$vuetify.isHydrating = true; // @ts-ignore

          this.$vuetify.breakpoint.update(true);
        }
      },

      mounted() {
        // @ts-ignore
        if (this.$options.vuetify && this.$vuetify.isHydrating) {
          // @ts-ignore
          this.$vuetify.isHydrating = false; // @ts-ignore

          this.$vuetify.breakpoint.update();
        }
      }

    });
  }

  class Service {
    constructor() {
      this.framework = {};
    }

    init(root, ssrContext) {}

  }

  // Extensions
  class Application extends Service {
    constructor() {
      super(...arguments);
      this.bar = 0;
      this.top = 0;
      this.left = 0;
      this.insetFooter = 0;
      this.right = 0;
      this.bottom = 0;
      this.footer = 0;
      this.application = {
        bar: {},
        top: {},
        left: {},
        insetFooter: {},
        right: {},
        bottom: {},
        footer: {}
      };
    }

    register(uid, location, size) {
      this.application[location] = {
        [uid]: size
      };
      this.update(location);
    }

    unregister(uid, location) {
      if (this.application[location][uid] == null) return;
      delete this.application[location][uid];
      this.update(location);
    }

    update(location) {
      this[location] = Object.values(this.application[location]).reduce((acc, cur) => acc + cur, 0);
    }

  }
  Application.property = 'application';

  // Extensions
  class Breakpoint extends Service {
    constructor(preset) {
      super(); // Public

      this.xs = false;
      this.sm = false;
      this.md = false;
      this.lg = false;
      this.xl = false;
      this.xsOnly = false;
      this.smOnly = false;
      this.smAndDown = false;
      this.smAndUp = false;
      this.mdOnly = false;
      this.mdAndDown = false;
      this.mdAndUp = false;
      this.lgOnly = false;
      this.lgAndDown = false;
      this.lgAndUp = false;
      this.xlOnly = false; // Value is xs to match v2.x functionality

      this.name = 'xs';
      this.height = 0;
      this.width = 0; // TODO: Add functionality to detect this dynamically in v3
      // Value is true to match v2.x functionality

      this.mobile = true;
      this.resizeTimeout = 0;
      const {
        mobileBreakpoint,
        scrollBarWidth,
        thresholds
      } = preset[Breakpoint.property];
      this.mobileBreakpoint = mobileBreakpoint;
      this.scrollBarWidth = scrollBarWidth;
      this.thresholds = thresholds;
    }

    init() {
      this.update();
      /* istanbul ignore if */

      if (typeof window === 'undefined') return;
      window.addEventListener('resize', this.onResize.bind(this), {
        passive: true
      });
    }
    /* eslint-disable-next-line max-statements */


    update(ssr = false) {
      const height = ssr ? 0 : this.getClientHeight();
      const width = ssr ? 0 : this.getClientWidth();
      const xs = width < this.thresholds.xs;
      const sm = width < this.thresholds.sm && !xs;
      const md = width < this.thresholds.md - this.scrollBarWidth && !(sm || xs);
      const lg = width < this.thresholds.lg - this.scrollBarWidth && !(md || sm || xs);
      const xl = width >= this.thresholds.lg - this.scrollBarWidth;
      this.height = height;
      this.width = width;
      this.xs = xs;
      this.sm = sm;
      this.md = md;
      this.lg = lg;
      this.xl = xl;
      this.xsOnly = xs;
      this.smOnly = sm;
      this.smAndDown = (xs || sm) && !(md || lg || xl);
      this.smAndUp = !xs && (sm || md || lg || xl);
      this.mdOnly = md;
      this.mdAndDown = (xs || sm || md) && !(lg || xl);
      this.mdAndUp = !(xs || sm) && (md || lg || xl);
      this.lgOnly = lg;
      this.lgAndDown = (xs || sm || md || lg) && !xl;
      this.lgAndUp = !(xs || sm || md) && (lg || xl);
      this.xlOnly = xl;

      switch (true) {
        case xs:
          this.name = 'xs';
          break;

        case sm:
          this.name = 'sm';
          break;

        case md:
          this.name = 'md';
          break;

        case lg:
          this.name = 'lg';
          break;

        default:
          this.name = 'xl';
          break;
      }

      if (typeof this.mobileBreakpoint === 'number') {
        this.mobile = width < parseInt(this.mobileBreakpoint, 10);
        return;
      }

      const breakpoints = {
        xs: 0,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4
      };
      const current = breakpoints[this.name];
      const max = breakpoints[this.mobileBreakpoint];
      this.mobile = current <= max;
    }

    onResize() {
      clearTimeout(this.resizeTimeout); // Added debounce to match what
      // v-resize used to do but was
      // removed due to a memory leak
      // https://github.com/vuetifyjs/vuetify/pull/2997

      this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
    } // Cross-browser support as described in:
    // https://stackoverflow.com/questions/1248081


    getClientWidth() {
      /* istanbul ignore if */
      if (typeof document === 'undefined') return 0; // SSR

      return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    getClientHeight() {
      /* istanbul ignore if */
      if (typeof document === 'undefined') return 0; // SSR

      return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

  }
  Breakpoint.property = 'breakpoint';

  // linear
  const linear = t => t; // accelerating from zero velocity

  const easeInQuad = t => t ** 2; // decelerating to zero velocity

  const easeOutQuad = t => t * (2 - t); // acceleration until halfway, then deceleration

  const easeInOutQuad = t => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t; // accelerating from zero velocity

  const easeInCubic = t => t ** 3; // decelerating to zero velocity

  const easeOutCubic = t => --t ** 3 + 1; // acceleration until halfway, then deceleration

  const easeInOutCubic = t => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // accelerating from zero velocity

  const easeInQuart = t => t ** 4; // decelerating to zero velocity

  const easeOutQuart = t => 1 - --t ** 4; // acceleration until halfway, then deceleration

  const easeInOutQuart = t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t; // accelerating from zero velocity

  const easeInQuint = t => t ** 5; // decelerating to zero velocity

  const easeOutQuint = t => 1 + --t ** 5; // acceleration until halfway, then deceleration

  const easeInOutQuint = t => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5;

  var easingPatterns = /*#__PURE__*/Object.freeze({
    __proto__: null,
    linear: linear,
    easeInQuad: easeInQuad,
    easeOutQuad: easeOutQuad,
    easeInOutQuad: easeInOutQuad,
    easeInCubic: easeInCubic,
    easeOutCubic: easeOutCubic,
    easeInOutCubic: easeInOutCubic,
    easeInQuart: easeInQuart,
    easeOutQuart: easeOutQuart,
    easeInOutQuart: easeInOutQuart,
    easeInQuint: easeInQuint,
    easeOutQuint: easeOutQuint,
    easeInOutQuint: easeInOutQuint
  });

  // Return target's cumulative offset from the top
  function getOffset(target) {
    if (typeof target === 'number') {
      return target;
    }

    let el = $(target);

    if (!el) {
      throw typeof target === 'string' ? new Error(`Target element "${target}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${type(target)} instead.`);
    }

    let totalOffset = 0;

    while (el) {
      totalOffset += el.offsetTop;
      el = el.offsetParent;
    }

    return totalOffset;
  }
  function getContainer(container) {
    const el = $(container);
    if (el) return el;
    throw typeof container === 'string' ? new Error(`Container element "${container}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${type(container)} instead.`);
  }

  function type(el) {
    return el == null ? el : el.constructor.name;
  }

  function $(el) {
    if (typeof el === 'string') {
      return document.querySelector(el);
    } else if (el && el._isVue) {
      return el.$el;
    } else if (el instanceof HTMLElement) {
      return el;
    } else {
      return null;
    }
  }

  // Extensions
  function goTo(_target, _settings = {}) {
    const settings = {
      container: document.scrollingElement || document.body || document.documentElement,
      duration: 500,
      offset: 0,
      easing: 'easeInOutCubic',
      appOffset: true,
      ..._settings
    };
    const container = getContainer(settings.container);
    /* istanbul ignore else */

    if (settings.appOffset && goTo.framework.application) {
      const isDrawer = container.classList.contains('v-navigation-drawer');
      const isClipped = container.classList.contains('v-navigation-drawer--clipped');
      const {
        bar,
        top
      } = goTo.framework.application;
      settings.offset += bar;
      /* istanbul ignore else */

      if (!isDrawer || isClipped) settings.offset += top;
    }

    const startTime = performance.now();
    let targetLocation;

    if (typeof _target === 'number') {
      targetLocation = getOffset(_target) - settings.offset;
    } else {
      targetLocation = getOffset(_target) - getOffset(container) - settings.offset;
    }

    const startLocation = container.scrollTop;
    if (targetLocation === startLocation) return Promise.resolve(targetLocation);
    const ease = typeof settings.easing === 'function' ? settings.easing : easingPatterns[settings.easing];
    /* istanbul ignore else */

    if (!ease) throw new TypeError(`Easing function "${settings.easing}" not found.`); // Cannot be tested properly in jsdom

    /* istanbul ignore next */

    return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.abs(settings.duration ? Math.min(timeElapsed / settings.duration, 1) : 1);
      container.scrollTop = Math.floor(startLocation + (targetLocation - startLocation) * ease(progress));
      const clientHeight = container === document.body ? document.documentElement.clientHeight : container.clientHeight;
      const reachBottom = clientHeight + container.scrollTop >= container.scrollHeight;

      if (progress === 1 || // Need to go lower but reach bottom
      targetLocation > container.scrollTop && reachBottom) {
        return resolve(targetLocation);
      }

      requestAnimationFrame(step);
    }));
  }
  goTo.framework = {};

  goTo.init = () => {};

  class Goto extends Service {
    constructor() {
      super();
      return goTo;
    }

  }
  Goto.property = 'goTo';

  let passiveSupported = false;

  try {
    if (typeof window !== 'undefined') {
      const testListenerOpts = Object.defineProperty({}, 'passive', {
        get: () => {
          passiveSupported = true;
        }
      });
      window.addEventListener('testListener', testListenerOpts, testListenerOpts);
      window.removeEventListener('testListener', testListenerOpts, testListenerOpts);
    }
  } catch (e) {
    console.warn(e);
  }
  function getNestedValue(obj, path, fallback) {
    const last = path.length - 1;
    if (last < 0) return obj === undefined ? fallback : obj;

    for (let i = 0; i < last; i++) {
      if (obj == null) {
        return fallback;
      }

      obj = obj[path[i]];
    }

    if (obj == null) return fallback;
    return obj[path[last]] === undefined ? fallback : obj[path[last]];
  }
  function getObjectValueByPath(obj, path, fallback) {
    // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
    if (obj == null || !path || typeof path !== 'string') return fallback;
    if (obj[path] !== undefined) return obj[path];
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties

    path = path.replace(/^\./, ''); // strip a leading dot

    return getNestedValue(obj, path.split('.'), fallback);
  }
  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  } // KeyboardEvent.keyCode aliases

  Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16
  });
  function keys(o) {
    return Object.keys(o);
  }
  function clamp(value, min = 0, max = 1) {
    return Math.max(min, Math.min(max, value));
  }
  function mergeDeep(source = {}, target = {}) {
    for (const key in target) {
      const sourceProperty = source[key];
      const targetProperty = target[key]; // Only continue deep merging if
      // both properties are objects

      if (isObject(sourceProperty) && isObject(targetProperty)) {
        source[key] = mergeDeep(sourceProperty, targetProperty);
        continue;
      }

      source[key] = targetProperty;
    }

    return source;
  }

  const icons$4 = {
    complete: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
    cancel: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
    close: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
    delete: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
    clear: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
    success: 'M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z',
    info: 'M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
    warning: 'M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z',
    error: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z',
    prev: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
    next: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
    checkboxOn: 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
    checkboxOff: 'M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
    checkboxIndeterminate: 'M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
    delimiter: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
    sort: 'M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z',
    expand: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    menu: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',
    subgroup: 'M7,10L12,15L17,10H7Z',
    dropdown: 'M7,10L12,15L17,10H7Z',
    radioOn: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z',
    radioOff: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
    edit: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
    ratingEmpty: 'M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
    ratingFull: 'M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z',
    ratingHalf: 'M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
    loading: 'M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12',
    first: 'M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z',
    last: 'M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z',
    unfold: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z',
    file: 'M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z',
    plus: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
    minus: 'M19,13H5V11H19V13Z'
  };

  const icons$3 = {
    complete: 'check',
    cancel: 'cancel',
    close: 'close',
    delete: 'cancel',
    clear: 'clear',
    success: 'check_circle',
    info: 'info',
    warning: 'priority_high',
    error: 'warning',
    prev: 'chevron_left',
    next: 'chevron_right',
    checkboxOn: 'check_box',
    checkboxOff: 'check_box_outline_blank',
    checkboxIndeterminate: 'indeterminate_check_box',
    delimiter: 'fiber_manual_record',
    sort: 'arrow_upward',
    expand: 'keyboard_arrow_down',
    menu: 'menu',
    subgroup: 'arrow_drop_down',
    dropdown: 'arrow_drop_down',
    radioOn: 'radio_button_checked',
    radioOff: 'radio_button_unchecked',
    edit: 'edit',
    ratingEmpty: 'star_border',
    ratingFull: 'star',
    ratingHalf: 'star_half',
    loading: 'cached',
    first: 'first_page',
    last: 'last_page',
    unfold: 'unfold_more',
    file: 'attach_file',
    plus: 'add',
    minus: 'remove'
  };

  const icons$2 = {
    complete: 'mdi-check',
    cancel: 'mdi-close-circle',
    close: 'mdi-close',
    delete: 'mdi-close-circle',
    clear: 'mdi-close',
    success: 'mdi-check-circle',
    info: 'mdi-information',
    warning: 'mdi-exclamation',
    error: 'mdi-alert',
    prev: 'mdi-chevron-left',
    next: 'mdi-chevron-right',
    checkboxOn: 'mdi-checkbox-marked',
    checkboxOff: 'mdi-checkbox-blank-outline',
    checkboxIndeterminate: 'mdi-minus-box',
    delimiter: 'mdi-circle',
    sort: 'mdi-arrow-up',
    expand: 'mdi-chevron-down',
    menu: 'mdi-menu',
    subgroup: 'mdi-menu-down',
    dropdown: 'mdi-menu-down',
    radioOn: 'mdi-radiobox-marked',
    radioOff: 'mdi-radiobox-blank',
    edit: 'mdi-pencil',
    ratingEmpty: 'mdi-star-outline',
    ratingFull: 'mdi-star',
    ratingHalf: 'mdi-star-half-full',
    loading: 'mdi-cached',
    first: 'mdi-page-first',
    last: 'mdi-page-last',
    unfold: 'mdi-unfold-more-horizontal',
    file: 'mdi-paperclip',
    plus: 'mdi-plus',
    minus: 'mdi-minus'
  };

  const icons$1 = {
    complete: 'fas fa-check',
    cancel: 'fas fa-times-circle',
    close: 'fas fa-times',
    delete: 'fas fa-times-circle',
    clear: 'fas fa-times-circle',
    success: 'fas fa-check-circle',
    info: 'fas fa-info-circle',
    warning: 'fas fa-exclamation',
    error: 'fas fa-exclamation-triangle',
    prev: 'fas fa-chevron-left',
    next: 'fas fa-chevron-right',
    checkboxOn: 'fas fa-check-square',
    checkboxOff: 'far fa-square',
    checkboxIndeterminate: 'fas fa-minus-square',
    delimiter: 'fas fa-circle',
    sort: 'fas fa-sort-up',
    expand: 'fas fa-chevron-down',
    menu: 'fas fa-bars',
    subgroup: 'fas fa-caret-down',
    dropdown: 'fas fa-caret-down',
    radioOn: 'far fa-dot-circle',
    radioOff: 'far fa-circle',
    edit: 'fas fa-edit',
    ratingEmpty: 'far fa-star',
    ratingFull: 'fas fa-star',
    ratingHalf: 'fas fa-star-half',
    loading: 'fas fa-sync',
    first: 'fas fa-step-backward',
    last: 'fas fa-step-forward',
    unfold: 'fas fa-arrows-alt-v',
    file: 'fas fa-paperclip',
    plus: 'fas fa-plus',
    minus: 'fas fa-minus'
  };

  const icons = {
    complete: 'fa fa-check',
    cancel: 'fa fa-times-circle',
    close: 'fa fa-times',
    delete: 'fa fa-times-circle',
    clear: 'fa fa-times-circle',
    success: 'fa fa-check-circle',
    info: 'fa fa-info-circle',
    warning: 'fa fa-exclamation',
    error: 'fa fa-exclamation-triangle',
    prev: 'fa fa-chevron-left',
    next: 'fa fa-chevron-right',
    checkboxOn: 'fa fa-check-square',
    checkboxOff: 'fa fa-square-o',
    checkboxIndeterminate: 'fa fa-minus-square',
    delimiter: 'fa fa-circle',
    sort: 'fa fa-sort-up',
    expand: 'fa fa-chevron-down',
    menu: 'fa fa-bars',
    subgroup: 'fa fa-caret-down',
    dropdown: 'fa fa-caret-down',
    radioOn: 'fa fa-dot-circle-o',
    radioOff: 'fa fa-circle-o',
    edit: 'fa fa-pencil',
    ratingEmpty: 'fa fa-star-o',
    ratingFull: 'fa fa-star',
    ratingHalf: 'fa fa-star-half-o',
    loading: 'fa fa-refresh',
    first: 'fa fa-step-backward',
    last: 'fa fa-step-forward',
    unfold: 'fa fa-angle-double-down',
    file: 'fa fa-paperclip',
    plus: 'fa fa-plus',
    minus: 'fa fa-minus'
  };

  function convertToComponentDeclarations(component, iconSet) {
    const result = {};

    for (const key in iconSet) {
      result[key] = {
        component,
        props: {
          icon: iconSet[key].split(' fa-')
        }
      };
    }

    return result;
  }
  var faSvg = convertToComponentDeclarations('font-awesome-icon', icons$1);

  var presets = Object.freeze({
    mdiSvg: icons$4,
    md: icons$3,
    mdi: icons$2,
    fa: icons$1,
    fa4: icons,
    faSvg
  });

  // Extensions
  class Icons extends Service {
    constructor(preset) {
      super();
      const {
        iconfont,
        values,
        component
      } = preset[Icons.property];
      this.component = component;
      this.iconfont = iconfont;
      this.values = mergeDeep(presets[iconfont], values);
    }

  }
  Icons.property = 'icons';

  // Extensions
  const LANG_PREFIX = '$vuetify.';
  const fallback = Symbol('Lang fallback');

  function getTranslation(locale, key, usingDefault = false, defaultLocale) {
    const shortKey = key.replace(LANG_PREFIX, '');
    let translation = getObjectValueByPath(locale, shortKey, fallback);

    if (translation === fallback) {
      if (usingDefault) {
        consoleError(`Translation key "${shortKey}" not found in fallback`);
        translation = key;
      } else {
        consoleWarn(`Translation key "${shortKey}" not found, falling back to default`);
        translation = getTranslation(defaultLocale, key, true, defaultLocale);
      }
    }

    return translation;
  }

  class Lang extends Service {
    constructor(preset) {
      super();
      this.defaultLocale = 'en';
      const {
        current,
        locales,
        t
      } = preset[Lang.property];
      this.current = current;
      this.locales = locales;
      this.translator = t || this.defaultTranslator;
    }

    currentLocale(key) {
      const translation = this.locales[this.current];
      const defaultLocale = this.locales[this.defaultLocale];
      return getTranslation(translation, key, false, defaultLocale);
    }

    t(key, ...params) {
      if (!key.startsWith(LANG_PREFIX)) return this.replace(key, params);
      return this.translator(key, ...params);
    }

    defaultTranslator(key, ...params) {
      return this.replace(this.currentLocale(key), params);
    }

    replace(str, params) {
      return str.replace(/\{(\d+)\}/g, (match, index) => {
        /* istanbul ignore next */
        return String(params[+index]);
      });
    }

  }
  Lang.property = 'lang';

  var en = {
    badge: 'Badge',
    close: 'Close',
    dataIterator: {
      noResultsText: 'No matching records found',
      loadingText: 'Loading items...'
    },
    dataTable: {
      itemsPerPageText: 'Rows per page:',
      ariaLabel: {
        sortDescending: 'Sorted descending.',
        sortAscending: 'Sorted ascending.',
        sortNone: 'Not sorted.',
        activateNone: 'Activate to remove sorting.',
        activateDescending: 'Activate to sort descending.',
        activateAscending: 'Activate to sort ascending.'
      },
      sortBy: 'Sort by'
    },
    dataFooter: {
      itemsPerPageText: 'Items per page:',
      itemsPerPageAll: 'All',
      nextPage: 'Next page',
      prevPage: 'Previous page',
      firstPage: 'First page',
      lastPage: 'Last page',
      pageText: '{0}-{1} of {2}'
    },
    datePicker: {
      itemsSelected: '{0} selected',
      nextMonthAriaLabel: 'Next month',
      nextYearAriaLabel: 'Next year',
      prevMonthAriaLabel: 'Previous month',
      prevYearAriaLabel: 'Previous year'
    },
    noDataText: 'No data available',
    carousel: {
      prev: 'Previous visual',
      next: 'Next visual',
      ariaLabel: {
        delimiter: 'Carousel slide {0} of {1}'
      }
    },
    calendar: {
      moreEvents: '{0} more'
    },
    fileInput: {
      counter: '{0} files',
      counterSize: '{0} files ({1} in total)'
    },
    timePicker: {
      am: 'AM',
      pm: 'PM'
    },
    pagination: {
      ariaLabel: {
        wrapper: 'Pagination Navigation',
        next: 'Next page',
        previous: 'Previous page',
        page: 'Goto Page {0}',
        currentPage: 'Current Page, Page {0}'
      }
    },
    rating: {
      ariaLabel: {
        icon: 'Rating {0} of {1}'
      }
    }
  };

  // Styles
  const preset = {
    breakpoint: {
      // TODO: update to MD2 spec in v3 - 1280
      mobileBreakpoint: 1264,
      scrollBarWidth: 16,
      thresholds: {
        xs: 600,
        sm: 960,
        md: 1280,
        lg: 1920
      }
    },
    icons: {
      // TODO: remove v3
      iconfont: 'mdi',
      values: {}
    },
    lang: {
      current: 'en',
      locales: {
        en
      },
      // Default translator exists in lang service
      t: undefined
    },
    rtl: false,
    theme: {
      dark: false,
      default: 'light',
      disable: false,
      options: {
        cspNonce: undefined,
        customProperties: undefined,
        minifyTheme: undefined,
        themeCache: undefined,
        variations: true
      },
      themes: {
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        },
        dark: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#FF4081',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        }
      }
    }
  };

  // Preset
  class Presets extends Service {
    constructor(parentPreset, parent) {
      super(); // The default preset

      const defaultPreset = mergeDeep({}, preset); // The user provided preset

      const {
        userPreset
      } = parent; // The user provided global preset

      const {
        preset: globalPreset = {},
        ...preset$1
      } = userPreset;

      if (globalPreset.preset != null) {
        consoleWarn('Global presets do not support the **preset** option, it can be safely omitted');
      }

      parent.preset = mergeDeep(mergeDeep(defaultPreset, globalPreset), preset$1);
    }

  }
  Presets.property = 'presets';

  const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.2040, 1.0570]]; // Forward gamma adjust

  const srgbForwardTransform = C => C <= 0.0031308 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055; // For converting sRGB to XYZ


  const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]]; // Reverse gamma adjust

  const srgbReverseTransform = C => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;

  function fromXYZ$1(xyz) {
    const rgb = Array(3);
    const transform = srgbForwardTransform;
    const matrix = srgbForwardMatrix; // Matrix transform, then gamma adjustment

    for (let i = 0; i < 3; ++i) {
      rgb[i] = Math.round(clamp(transform(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
    } // Rescale back to [0, 255]


    return (rgb[0] << 16) + (rgb[1] << 8) + (rgb[2] << 0);
  }
  function toXYZ$1(rgb) {
    const xyz = [0, 0, 0];
    const transform = srgbReverseTransform;
    const matrix = srgbReverseMatrix; // Rescale from [0, 255] to [0, 1] then adjust sRGB gamma to linear RGB

    const r = transform((rgb >> 16 & 0xff) / 255);
    const g = transform((rgb >> 8 & 0xff) / 255);
    const b = transform((rgb >> 0 & 0xff) / 255); // Matrix color space transform

    for (let i = 0; i < 3; ++i) {
      xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
    }

    return xyz;
  }

  // Utilities
  function colorToInt(color) {
    let rgb;

    if (typeof color === 'number') {
      rgb = color;
    } else if (typeof color === 'string') {
      let c = color[0] === '#' ? color.substring(1) : color;

      if (c.length === 3) {
        c = c.split('').map(char => char + char).join('');
      }

      if (c.length !== 6) {
        consoleWarn(`'${color}' is not a valid rgb color`);
      }

      rgb = parseInt(c, 16);
    } else {
      throw new TypeError(`Colors can only be numbers or strings, recieved ${color == null ? color : color.constructor.name} instead`);
    }

    if (rgb < 0) {
      consoleWarn(`Colors cannot be negative: '${color}'`);
      rgb = 0;
    } else if (rgb > 0xffffff || isNaN(rgb)) {
      consoleWarn(`'${color}' is not a valid rgb color`);
      rgb = 0xffffff;
    }

    return rgb;
  }
  function intToHex(color) {
    let hexColor = color.toString(16);
    if (hexColor.length < 6) hexColor = '0'.repeat(6 - hexColor.length) + hexColor;
    return '#' + hexColor;
  }
  function colorToHex(color) {
    return intToHex(colorToInt(color));
  }

  const delta = 0.20689655172413793; // 6÷29

  const cielabForwardTransform = t => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;

  const cielabReverseTransform = t => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);

  function fromXYZ(xyz) {
    const transform = cielabForwardTransform;
    const transformedY = transform(xyz[1]);
    return [116 * transformedY - 16, 500 * (transform(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform(xyz[2] / 1.08883))];
  }
  function toXYZ(lab) {
    const transform = cielabReverseTransform;
    const Ln = (lab[0] + 16) / 116;
    return [transform(Ln + lab[1] / 500) * 0.95047, transform(Ln), transform(Ln - lab[2] / 200) * 1.08883];
  }

  function parse(theme, isItem = false, variations = true) {
    const {
      anchor,
      ...variant
    } = theme;
    const colors = Object.keys(variant);
    const parsedTheme = {};

    for (let i = 0; i < colors.length; ++i) {
      const name = colors[i];
      const value = theme[name];
      if (value == null) continue;

      if (!variations) {
        parsedTheme[name] = {
          base: intToHex(colorToInt(value))
        };
      } else if (isItem) {
        /* istanbul ignore else */
        if (name === 'base' || name.startsWith('lighten') || name.startsWith('darken')) {
          parsedTheme[name] = colorToHex(value);
        }
      } else if (typeof value === 'object') {
        parsedTheme[name] = parse(value, true, variations);
      } else {
        parsedTheme[name] = genVariations(name, colorToInt(value));
      }
    }

    if (!isItem) {
      parsedTheme.anchor = anchor || parsedTheme.base || parsedTheme.primary.base;
    }

    return parsedTheme;
  }
  /**
   * Generate the CSS for a base color (.primary)
   */

  const genBaseColor = (name, value) => {
    return `
.v-application .${name} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
  };
  /**
   * Generate the CSS for a variant color (.primary.darken-2)
   */


  const genVariantColor = (name, variant, value) => {
    const [type, n] = variant.split(/(\d)/, 2);
    return `
.v-application .${name}.${type}-${n} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text.text--${type}-${n} {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
  };

  const genColorVariableName = (name, variant = 'base') => `--v-${name}-${variant}`;

  const genColorVariable = (name, variant = 'base') => `var(${genColorVariableName(name, variant)})`;

  function genStyles(theme, cssVar = false) {
    const {
      anchor,
      ...variant
    } = theme;
    const colors = Object.keys(variant);
    if (!colors.length) return '';
    let variablesCss = '';
    let css = '';
    const aColor = cssVar ? genColorVariable('anchor') : anchor;
    css += `.v-application a { color: ${aColor}; }`;
    cssVar && (variablesCss += `  ${genColorVariableName('anchor')}: ${anchor};\n`);

    for (let i = 0; i < colors.length; ++i) {
      const name = colors[i];
      const value = theme[name];
      css += genBaseColor(name, cssVar ? genColorVariable(name) : value.base);
      cssVar && (variablesCss += `  ${genColorVariableName(name)}: ${value.base};\n`);
      const variants = keys(value);

      for (let i = 0; i < variants.length; ++i) {
        const variant = variants[i];
        const variantValue = value[variant];
        if (variant === 'base') continue;
        css += genVariantColor(name, variant, cssVar ? genColorVariable(name, variant) : variantValue);
        cssVar && (variablesCss += `  ${genColorVariableName(name, variant)}: ${variantValue};\n`);
      }
    }

    if (cssVar) {
      variablesCss = `:root {\n${variablesCss}}\n\n`;
    }

    return variablesCss + css;
  }
  function genVariations(name, value) {
    const values = {
      base: intToHex(value)
    };

    for (let i = 5; i > 0; --i) {
      values[`lighten${i}`] = intToHex(lighten(value, i));
    }

    for (let i = 1; i <= 4; ++i) {
      values[`darken${i}`] = intToHex(darken(value, i));
    }

    return values;
  }
  function lighten(value, amount) {
    const lab = fromXYZ(toXYZ$1(value));
    lab[0] = lab[0] + amount * 10;
    return fromXYZ$1(toXYZ(lab));
  }
  function darken(value, amount) {
    const lab = fromXYZ(toXYZ$1(value));
    lab[0] = lab[0] - amount * 10;
    return fromXYZ$1(toXYZ(lab));
  }

  /* eslint-disable no-multi-spaces */
  class Theme extends Service {
    constructor(preset) {
      super();
      this.disabled = false;
      this.isDark = null;
      this.unwatch = null;
      this.vueMeta = null;
      const {
        dark,
        disable,
        options,
        themes
      } = preset[Theme.property];
      this.dark = Boolean(dark);
      this.defaults = this.themes = themes;
      this.options = options;

      if (disable) {
        this.disabled = true;
        return;
      }

      this.themes = {
        dark: this.fillVariant(themes.dark, true),
        light: this.fillVariant(themes.light, false)
      };
    } // When setting css, check for element and apply new values

    /* eslint-disable-next-line accessor-pairs */


    set css(val) {
      if (this.vueMeta) {
        if (this.isVueMeta23) {
          this.applyVueMeta23();
        }

        return;
      }

      this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = val);
    }

    set dark(val) {
      const oldDark = this.isDark;
      this.isDark = val; // Only apply theme after dark
      // has already been set before

      oldDark != null && this.applyTheme();
    }

    get dark() {
      return Boolean(this.isDark);
    } // Apply current theme default
    // only called on client side


    applyTheme() {
      if (this.disabled) return this.clearCss();
      this.css = this.generatedStyles;
    }

    clearCss() {
      this.css = '';
    } // Initialize theme for SSR and SPA
    // Attach to ssrContext head or
    // apply new theme to document


    init(root, ssrContext) {
      if (this.disabled) return;
      /* istanbul ignore else */

      if (root.$meta) {
        this.initVueMeta(root);
      } else if (ssrContext) {
        this.initSSR(ssrContext);
      }

      this.initTheme(root);
    } // Allows for you to set target theme


    setTheme(theme, value) {
      this.themes[theme] = Object.assign(this.themes[theme], value);
      this.applyTheme();
    } // Reset theme defaults


    resetThemes() {
      this.themes.light = Object.assign({}, this.defaults.light);
      this.themes.dark = Object.assign({}, this.defaults.dark);
      this.applyTheme();
    } // Check for existence of style element


    checkOrCreateStyleElement() {
      this.styleEl = document.getElementById('vuetify-theme-stylesheet');
      /* istanbul ignore next */

      if (this.styleEl) return true;
      this.genStyleElement(); // If doesn't have it, create it

      return Boolean(this.styleEl);
    }

    fillVariant(theme = {}, dark) {
      const defaultTheme = this.themes[dark ? 'dark' : 'light'];
      return Object.assign({}, defaultTheme, theme);
    } // Generate the style element
    // if applicable


    genStyleElement() {
      /* istanbul ignore if */
      if (typeof document === 'undefined') return;
      /* istanbul ignore next */

      this.styleEl = document.createElement('style');
      this.styleEl.type = 'text/css';
      this.styleEl.id = 'vuetify-theme-stylesheet';

      if (this.options.cspNonce) {
        this.styleEl.setAttribute('nonce', this.options.cspNonce);
      }

      document.head.appendChild(this.styleEl);
    }

    initVueMeta(root) {
      this.vueMeta = root.$meta();

      if (this.isVueMeta23) {
        // vue-meta needs to apply after mounted()
        root.$nextTick(() => {
          this.applyVueMeta23();
        });
        return;
      }

      const metaKeyName = typeof this.vueMeta.getOptions === 'function' ? this.vueMeta.getOptions().keyName : 'metaInfo';
      const metaInfo = root.$options[metaKeyName] || {};

      root.$options[metaKeyName] = () => {
        metaInfo.style = metaInfo.style || [];
        const vuetifyStylesheet = metaInfo.style.find(s => s.id === 'vuetify-theme-stylesheet');

        if (!vuetifyStylesheet) {
          metaInfo.style.push({
            cssText: this.generatedStyles,
            type: 'text/css',
            id: 'vuetify-theme-stylesheet',
            nonce: (this.options || {}).cspNonce
          });
        } else {
          vuetifyStylesheet.cssText = this.generatedStyles;
        }

        return metaInfo;
      };
    }

    applyVueMeta23() {
      const {
        set
      } = this.vueMeta.addApp('vuetify');
      set({
        style: [{
          cssText: this.generatedStyles,
          type: 'text/css',
          id: 'vuetify-theme-stylesheet',
          nonce: this.options.cspNonce
        }]
      });
    }

    initSSR(ssrContext) {
      // SSR
      const nonce = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : '';
      ssrContext.head = ssrContext.head || '';
      ssrContext.head += `<style type="text/css" id="vuetify-theme-stylesheet"${nonce}>${this.generatedStyles}</style>`;
    }

    initTheme(root) {
      // Only watch for reactivity on client side
      if (typeof document === 'undefined') return; // If we get here somehow, ensure
      // existing instance is removed

      if (this.unwatch) {
        this.unwatch();
        this.unwatch = null;
      } // TODO: Update to use RFC if merged
      // https://github.com/vuejs/rfcs/blob/advanced-reactivity-api/active-rfcs/0000-advanced-reactivity-api.md


      root.$once('hook:created', () => {
        const obs = Vue.observable({
          themes: this.themes
        });
        this.unwatch = root.$watch(() => obs.themes, () => this.applyTheme(), {
          deep: true
        });
      });
      this.applyTheme();
    }

    get currentTheme() {
      const target = this.dark ? 'dark' : 'light';
      return this.themes[target];
    }

    get generatedStyles() {
      const theme = this.parsedTheme;
      /* istanbul ignore next */

      const options = this.options || {};
      let css;

      if (options.themeCache != null) {
        css = options.themeCache.get(theme);
        /* istanbul ignore if */

        if (css != null) return css;
      }

      css = genStyles(theme, options.customProperties);

      if (options.minifyTheme != null) {
        css = options.minifyTheme(css);
      }

      if (options.themeCache != null) {
        options.themeCache.set(theme, css);
      }

      return css;
    }

    get parsedTheme() {
      return parse(this.currentTheme || {}, undefined, getNestedValue(this.options, ['variations'], true));
    } // Is using v2.3 of vue-meta
    // https://github.com/nuxt/vue-meta/releases/tag/v2.3.0


    get isVueMeta23() {
      return typeof this.vueMeta.addApp === 'function';
    }

  }
  Theme.property = 'theme';

  class Vuetify {
    constructor(userPreset = {}) {
      this.framework = {
        isHydrating: false
      };
      this.installed = [];
      this.preset = {};
      this.userPreset = {};
      this.userPreset = userPreset;
      this.use(Presets);
      this.use(Application);
      this.use(Breakpoint);
      this.use(Goto);
      this.use(Icons);
      this.use(Lang);
      this.use(Theme);
    } // Called on the new vuetify instance
    // bootstrap in install beforeCreate
    // Exposes ssrContext if available


    init(root, ssrContext) {
      this.installed.forEach(property => {
        const service = this.framework[property];
        service.framework = this.framework;
        service.init(root, ssrContext);
      }); // rtl is not installed and
      // will never be called by
      // the init process

      this.framework.rtl = Boolean(this.preset.rtl);
    } // Instantiate a VuetifyService


    use(Service) {
      const property = Service.property;
      if (this.installed.includes(property)) return; // TODO maybe a specific type for arg 2?

      this.framework[property] = new Service(this.preset, this);
      this.installed.push(property);
    }

  }
  Vuetify.install = install;
  Vuetify.installed = false;
  Vuetify.version = "2.6.1";
  Vuetify.config = {
    silent: false
  };

  /* eslint-disable no-console */

  function createMessage(message, vm, parent) {
    if (Vuetify.config.silent) return;

    if (parent) {
      vm = {
        _isVue: true,
        $parent: parent,
        $options: vm
      };
    }

    if (vm) {
      // Only show each message once per instance
      vm.$_alreadyWarned = vm.$_alreadyWarned || [];
      if (vm.$_alreadyWarned.includes(message)) return;
      vm.$_alreadyWarned.push(message);
    }

    return `[Vuetify] ${message}` + (vm ? generateComponentTrace(vm) : '');
  }
  function consoleWarn(message, vm, parent) {
    const newMessage = createMessage(message, vm, parent);
    newMessage != null && console.warn(newMessage);
  }
  function consoleError(message, vm, parent) {
    const newMessage = createMessage(message, vm, parent);
    newMessage != null && console.error(newMessage);
  }
  /**
   * Shamelessly stolen from vuejs/vue/blob/dev/src/core/util/debug.js
   */

  const classifyRE = /(?:^|[-_])(\w)/g;

  const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');

  function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
    let name = options.name || options._componentTag;
    const file = options.__file;

    if (!name && file) {
      const match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : '');
  }

  function generateComponentTrace(vm) {
    if (vm._isVue && vm.$parent) {
      const tree = [];
      let currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          const last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map((vm, i) => `${i === 0 ? '---> ' : ' '.repeat(5 + i * 2)}${Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join('\n');
    } else {
      return `\n\n(found in ${formatComponentName(vm)})`;
    }
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$6$1 = {
      name: "collapse-button",

      created: function () {
          this.visible = this.state === "expanded";
          this.$root.$on("collapse-toggle", this.toggle);
      },

      props: {
          name: {
              type: String,
              required: true,
          },
          state: {
              //expanded or collapsed
              type: String,
              required: true,
          },
          "keep-contents-on-toggle": {
              type: Boolean,
              required: false,
              default: false,
          },
      },

      data: function () {
          return {
              name: this.name,
              visible: true,
          };
      },

      methods: {
          click: function (event) {
              this.$root.$emit("collapse-toggle", this.name);
          },
          toggle: function (target) {
              if (this.name === target) {
                  this.visible = !this.visible;
              }
          },
      },
  };

  function normalizeComponent$5(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  const __vue_script__$6$1 = script$6$1;

  /* template */
  var __vue_render__$6$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "button",
      {
        staticClass: "collapsible-title",
        class: { visible: _vm.visible },
        attrs: {
          "data-test": _vm.name,
          "aria-label": _vm.visible
            ? "collapse " + _vm.name
            : "expand " + _vm.name
        },
        on: { click: _vm.click }
      },
      [
        _vm.visible && !_vm.keepContentsOnToggle
          ? _vm._t("expanded", function() {
              return [_vm._v("Hide")]
            })
          : _vm._e(),
        _vm._v(" "),
        !_vm.visible && !_vm.keepContentsOnToggle
          ? _vm._t("collapsed", function() {
              return [_vm._v("Show")]
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.keepContentsOnToggle
          ? _vm._t("contents", function() {
              return [_vm._v("Click here")]
            })
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__$6$1 = [];
  __vue_render__$6$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$6$1 = undefined;
    /* scoped */
    const __vue_scope_id__$6$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$6$1 = /*#__PURE__*/normalizeComponent$5(
      { render: __vue_render__$6$1, staticRenderFns: __vue_staticRenderFns__$6$1 },
      __vue_inject_styles__$6$1,
      __vue_script__$6$1,
      __vue_scope_id__$6$1,
      __vue_is_functional_template__$6$1,
      __vue_module_identifier__$6$1,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$5$1 = {
      name: "collapsible",

      created: function () {
          requestAnimationFrame(() => {
              this.visible = this.state === "expanded";
              if (!this.visible) {
                  this.$refs.target.classList.add("display-none");
              }
          });
          this.$root.$on("collapse-toggle", this.toggle);
      },

      mounted: function () {
          window.addEventListener("resize", this.resize);
          window.addEventListener("transitionend", this.toggleDisplay);
      },

      destroyed: function () {
          window.removeEventListener("resize", this.resize);
          window.removeEventListener("transitionend", this.toggleDisplay);
      },

      props: {
          name: {
              type: String,
              required: true,
          },
          state: {
              //expanded or collapsed
              type: String,
              required: true,
          },
          transition: {
              type: String,
              required: false,
              default: "0.5s",
          },
      },

      data: function () {
          return {
              name: this.name,
              height: "auto",
              visible: false,
              styles: {
                  overflow: "hidden",
                  transition: this.transition,
              },
          };
      },

      methods: {
          resize: function (e) {
              this.computeHeight();
          },
          toggleDisplay: function (e) {
              if (this.visible) {
                  this.$refs.target.style.height = "auto";
              } else {
                  this.$refs.target.classList.add("display-none");
              }
          },
          toggle: function (target) {
              if (this.name === target) {
                  this.$refs.target.classList.remove("display-none");
                  requestAnimationFrame(() => {
                      this.computeHeight();
                      requestAnimationFrame(() => {
                          this.visible = !this.visible;
                      });
                  });
              }
          },
          getStyle: function () {
              return window.getComputedStyle(this.$refs.target);
          },
          setProps: function (visibility, display, position, height) {
              this.$refs.target.style.visibility = visibility;
              this.$refs.target.style.display = display;
              this.$refs.target.style.position = position;
              this.$refs.target.style.height = height;
          },
          _computeHeight: function () {
              if (this.getStyle().display === "none") {
                  return "auto";
              }

              this.$refs.target.classList.remove("invisible");

              this.setProps("hidden", "block", "absolute", "auto");

              const height = this.getStyle().height;

              this.setProps(null, null, null, height);
              if (!this.visible) {
                  this.$refs.target.classList.add("invisible");
              }
              return height;
          },
          computeHeight: function () {
              this.height = this._computeHeight();
          },
      },
  };

  /* script */
  const __vue_script__$5$1 = script$5$1;

  /* template */
  var __vue_render__$5$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        ref: "target",
        class: { invisible: !_vm.visible },
        style: [_vm.styles],
        attrs: { "data-test": _vm.name }
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$5$1 = [];
  __vue_render__$5$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$5$1 = undefined;
    /* scoped */
    const __vue_scope_id__$5$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$5$1 = /*#__PURE__*/normalizeComponent$5(
      { render: __vue_render__$5$1, staticRenderFns: __vue_staticRenderFns__$5$1 },
      __vue_inject_styles__$5$1,
      __vue_script__$5$1,
      __vue_scope_id__$5$1,
      __vue_is_functional_template__$5$1,
      __vue_module_identifier__$5$1,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$4$1 = {
      name: "simple-spinner",

      props: {
          size: {
              type: String,
              default: "medium",
          },
          filled: {
              type: Boolean,
              default: false,
          },
      },

      computed: {
          spinnerClasses() {
              return {
                  "ds-c-spinner--filled": this.filled,
                  "ds-c-spinner--small": this.size === "small",
                  "ds-c-spinner--big": this.size === "large",
              };
          },

          spinnerStyles() {
              return {
                  margin: this.size === "small" ? "4px" : "8px",
              };
          },
      },
  };

  /* script */
  const __vue_script__$4$1 = script$4$1;

  /* template */
  var __vue_render__$4$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass:
          "ds-u-display--flex ds-u-justify-content--center ds-u-align-items--center"
      },
      [
        _c(
          "span",
          {
            staticClass: "ds-c-spinner",
            class: _vm.spinnerClasses,
            style: _vm.spinnerStyles,
            attrs: { role: "status" }
          },
          [
            _c("span", { staticClass: "ds-u-visibility--screen-reader" }, [
              _vm._v("Loading")
            ])
          ]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$4$1 = [];
  __vue_render__$4$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$4$1 = undefined;
    /* scoped */
    const __vue_scope_id__$4$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$4$1 = /*#__PURE__*/normalizeComponent$5(
      { render: __vue_render__$4$1, staticRenderFns: __vue_staticRenderFns__$4$1 },
      __vue_inject_styles__$4$1,
      __vue_script__$4$1,
      __vue_scope_id__$4$1,
      __vue_is_functional_template__$4$1,
      __vue_module_identifier__$4$1,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$3$1 = {
      name: "related-rule",

      props: {
          title: {
              type: String,
              required: true,
          },
          type: {
              type: String,
              required: true,
          },
          citation: {
              type: String,
              required: true,
          },
          publication_date: String,
          document_number: {
              type: String,
              required: true,
          },
          html_url: {
              type: String,
              required: true,
          },
          action: {
              type: String,
              required: true,
          },
      },

      computed: {
          expandedType: function () {
              if (this.type === "Rule") {
                  return "Final";
              } else if(this.type === "Proposed Rule" && this.action === "Proposed rule."){
                return "NPRM"
              } else if(this.type === "Proposed Rule" && this.action === "Request for information."){
                return "RFI"
              }
              return "Unknown";
          },
          getClassList: function(){
            return this.expandedType === "Final" ? "recent-flag indicator" : "recent-flag indicator secondary-indicator"
          }
      },

      methods: {},
      filters: {
          formatDate: function (value) {
              const date = new Date(value);
              const options = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
              };
              const format = new Intl.DateTimeFormat("en-US", options);
              return format.format(date);
          },
      },
  };

  /* script */
  const __vue_script__$3$1 = script$3$1;

  /* template */
  var __vue_render__$3$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "related-rule recent-change" }, [
      _c(
        "a",
        {
          staticClass: "related-rule-title",
          attrs: {
            href: _vm.html_url,
            target: "_blank",
            rel: "noopener noreferrer"
          }
        },
        [
          _c("span", { staticClass: "link-heading" }, [
            _c("span", { class: _vm.getClassList }, [
              _vm._v(_vm._s(_vm.expandedType))
            ]),
            _vm._v(" "),
            _vm.publication_date
              ? _c("span", { staticClass: "recent-date" }, [
                  _vm._v(_vm._s(_vm._f("formatDate")(_vm.publication_date)))
                ])
              : _vm._e(),
            _vm._v("\n            | "),
            _c("span", { staticClass: "recent-fr" }, [
              _vm._v(_vm._s(_vm.citation))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "recent-title" }, [_vm._v(_vm._s(_vm.title))])
        ]
      )
    ])
  };
  var __vue_staticRenderFns__$3$1 = [];
  __vue_render__$3$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$3$1 = undefined;
    /* scoped */
    const __vue_scope_id__$3$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$3$1 = /*#__PURE__*/normalizeComponent$5(
      { render: __vue_render__$3$1, staticRenderFns: __vue_staticRenderFns__$3$1 },
      __vue_inject_styles__$3$1,
      __vue_script__$3$1,
      __vue_scope_id__$3$1,
      __vue_is_functional_template__$3$1,
      __vue_module_identifier__$3$1,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //

  var script$2$2 = {
      name: "show-more-button",
      props: {
          count: {
              type: Number,
              default: 1,
          },
          buttonText: {
              type: String,
              required: true
          }
      },
  };

  /* script */
  const __vue_script__$2$2 = script$2$2;

  /* template */
  var __vue_render__$2$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "show-more-button" }, [
      _c("b", [_vm._v(_vm._s(_vm.buttonText))]),
      _vm._v(" (" + _vm._s(_vm.count) + ")\n")
    ])
  };
  var __vue_staticRenderFns__$2$2 = [];
  __vue_render__$2$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2$2 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2$2 = /*#__PURE__*/normalizeComponent$5(
      { render: __vue_render__$2$2, staticRenderFns: __vue_staticRenderFns__$2$2 },
      __vue_inject_styles__$2$2,
      __vue_script__$2$2,
      __vue_scope_id__$2$2,
      __vue_is_functional_template__$2$2,
      __vue_module_identifier__$2$2,
      false,
      undefined,
      undefined,
      undefined
    );

  var script$1$2 = {
      name: "related-rule-list",

      components: {
          RelatedRule: __vue_component__$3$1,
          ShowMoreButton: __vue_component__$2$2,
          CollapseButton: __vue_component__$6$1,
          Collapsible: __vue_component__$5$1,
      },

      props: {
          rules: Array,
          limit: {
              type: Number,
              default: 5,
          },
          title: {
              type: String,
          },
      },

      computed: {
          limitedRules() {
              return this.rules.slice(0, this.limit);
          },
          additionalRules() {
              return this.rules.slice(this.limit);
          },
          rulesCount() {
              return this.rules.length;
          },
          showMoreNeeded() {
              return this.rulesCount > this.limit;
          }
      },

      data() {
          return {
              limitedList: true,
              innerName: Math.random()
                  .toString(36)
                  .replace(/[^a-z]+/g, ""),
          };
      },

      methods: {
          showMore() {
              this.limitedList = !this.limitedList;
          },
      },

      filters: {},
  };

  /* script */
  const __vue_script__$1$2 = script$1$2;

  /* template */
  var __vue_render__$1$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.rules.length
      ? _c(
          "div",
          { staticClass: "related-rule-list" },
          [
            _vm._l(_vm.limitedRules, function(rule, index) {
              return _c("related-rule", {
                key: index,
                attrs: {
                  title: rule.title,
                  type: rule.type,
                  citation: rule.citation,
                  publication_date: rule.publication_date,
                  document_number: rule.document_number,
                  html_url: rule.html_url,
                  action: rule.action
                }
              })
            }),
            _vm._v(" "),
            _vm.showMoreNeeded && _vm.rulesCount > 10
              ? _c("collapse-button", {
                  staticClass: "category-title",
                  class: { subcategory: _vm.subcategory },
                  attrs: { name: _vm.innerName, state: "collapsed" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "expanded",
                        fn: function() {
                          return [
                            _c("show-more-button", {
                              attrs: {
                                buttonText: "- Show Less",
                                count: _vm.rules.length
                              }
                            })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "collapsed",
                        fn: function() {
                          return [
                            _c("show-more-button", {
                              attrs: {
                                buttonText: "+ Show More",
                                count: _vm.rules.length
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    false,
                    66893211
                  )
                })
              : _vm._e(),
            _vm._v(" "),
            _c(
              "collapsible",
              {
                staticClass: "category-content additional-rules",
                attrs: { name: _vm.innerName, state: "collapsed" }
              },
              [
                _vm._l(_vm.additionalRules, function(rule, index) {
                  return _c("related-rule", {
                    key: index,
                    attrs: {
                      title: rule.title,
                      type: rule.type,
                      citation: rule.citation,
                      publication_date: rule.publication_date,
                      document_number: rule.document_number,
                      html_url: rule.html_url,
                      action: rule.action
                    }
                  })
                }),
                _vm._v(" "),
                _vm.showMoreNeeded && _vm.rulesCount > 0
                  ? _c("collapse-button", {
                      staticClass: "category-title",
                      class: { subcategory: _vm.subcategory },
                      attrs: { name: _vm.innerName, state: "collapsed" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "expanded",
                            fn: function() {
                              return [
                                _c("show-more-button", {
                                  attrs: {
                                    buttonText: "- Show Less",
                                    count: _vm.rules.length
                                  }
                                })
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "collapsed",
                            fn: function() {
                              return [
                                _c("show-more-button", {
                                  attrs: {
                                    buttonText: "+ Show More",
                                    count: _vm.rules.length
                                  }
                                })
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        66893211
                      )
                    })
                  : _vm._e()
              ],
              2
            )
          ],
          2
        )
      : _c("div", { staticClass: "show-more-inactive" }, [
          _vm._v(
            "\n    No " +
              _vm._s(_vm.title) +
              " found in the Federal Register from 1994 to present.\n"
          )
        ])
  };
  var __vue_staticRenderFns__$1$2 = [];
  __vue_render__$1$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$1$2 = undefined;
    /* scoped */
    const __vue_scope_id__$1$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1$2 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1$2 = /*#__PURE__*/normalizeComponent$5(
      { render: __vue_render__$1$2, staticRenderFns: __vue_staticRenderFns__$1$2 },
      __vue_inject_styles__$1$2,
      __vue_script__$1$2,
      __vue_scope_id__$1$2,
      __vue_is_functional_template__$1$2,
      __vue_module_identifier__$1$2,
      false,
      undefined,
      undefined,
      undefined
    );

  var script$b = {
      components: {
          CollapseButton: __vue_component__$6$1,
          Collapsible: __vue_component__$5$1,
          RelatedRuleList: __vue_component__$1$2,
          SimpleSpinner: __vue_component__$4$1,
      },

      props: {
          title: {
              type: String,
              required: true,
          },
          part: {
              type: String,
              required: true,
          },
          limit: {
              type: Number,
              default: 5,
          },
          activeCategory: {
              type: String,
              default: "",
          },
          categoryList: {
              type: Array,
              default: ["FINAL", "PROPOSED", "RFI"],
          },
          categories: {
              type: Object,
              default: {
                  FINAL: {
                      getRules: (rules) => {
                          return rules.filter((rule) => {
                              return rule.type === "Rule";
                          });
                      },
                      title: "Final Rules",
                  },
                  PROPOSED: {
                      getRules: (rules) => {
                          return rules.filter((rule) => {
                              return (
                                  rule.type === "Proposed Rule" &&
                                  rule.action === "Proposed rule."
                              );
                          });
                      },
                      title: "Notices of Proposed Rulemaking",
                  },
                  RFI: {
                      getRules: (rules) => {
                          return rules.filter((rule) => {
                              return (
                                  rule.type === "Proposed Rule" &&
                                  rule.action === "Request for information."
                              );
                          });
                      },
                      title: "Requests for Information",
                  },
              },
          },
      },

      data() {
          return {
              isFetching: true,
              limitedList: true,
              rules: [],
          };
      },

      computed: {},

      created() {
          this.fetch_rules(this.title, this.part);
      },

      methods: {
          async fetch_rules(title, part) {
              let url = `https://www.federalregister.gov/api/v1/documents.json?fields[]=type&fields[]=abstract&fields[]=citation&fields[]=correction_of&fields[]=action&fields[]=dates&fields[]=docket_id&fields[]=docket_ids&fields[]=document_number&fields[]=effective_on&fields[]=html_url&fields[]=publication_date&fields[]=regulation_id_number_info&fields[]=regulation_id_numbers&fields[]=title&order=newest&conditions[cfr][title]=${title}&conditions[cfr][part]=${part}`;
              let results = [];
              try {
                  while (url) {
                      const response = await fetch(url);
                      const rules = await response.json();
                      results = results.concat(rules.results ?? []);
                      url = rules.next_page_url;
                  }
                  this.rules = results;
              } catch (error) {
                  console.error(error);
              } finally {
                  this.isFetching = false;
              }
          },
          showCategory(category) {
              category === this.activeCategory
                  ? (this.activeCategory = "")
                  : (this.activeCategory = category);
          },
          buttonClass(category) {
              return this.categories[category].getRules(this.rules).length > 0
                  ? "show-more-button"
                  : "show-more-button show-more-inactive";
          },
          getRules(category) {
              return this.categories[category].getRules(this.rules);
          },
      },
  };

  /* script */
  const __vue_script__$b = script$b;

  /* template */
  var __vue_render__$b = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      _vm._l(_vm.categoryList, function(category, index) {
        return _c("div", { key: index }, [
          _c(
            "div",
            { staticClass: "category" },
            [
              _c("collapse-button", {
                staticClass: "related-rules-title",
                class: { category: category },
                attrs: { name: category, state: "collapsed" },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "expanded",
                      fn: function() {
                        return [
                          _vm._v(
                            _vm._s(_vm.categories[category].title) +
                              "\n                    "
                          ),
                          _c("i", {
                            staticClass: "fa fa-chevron-up category-toggle"
                          })
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "collapsed",
                      fn: function() {
                        return [
                          _vm._v(
                            _vm._s(_vm.categories[category].title) +
                              "\n                    "
                          ),
                          _c("i", {
                            staticClass: "fa fa-chevron-down category-toggle"
                          })
                        ]
                      },
                      proxy: true
                    }
                  ],
                  null,
                  true
                )
              }),
              _vm._v(" "),
              _c(
                "collapsible",
                {
                  attrs: {
                    name: category,
                    state:
                      _vm.activeCategory === category ? "expanded" : "collapsed"
                  }
                },
                [
                  _vm.isFetching
                    ? [_c("simple-spinner", { attrs: { size: "small" } })]
                    : [
                        _c("related-rule-list", {
                          attrs: {
                            rules: _vm.getRules(category),
                            limit: _vm.limit,
                            title: _vm.categories[category].title
                          }
                        })
                      ]
                ],
                2
              )
            ],
            1
          )
        ])
      }),
      0
    )
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    const __vue_inject_styles__$b = undefined;
    /* scoped */
    const __vue_scope_id__$b = undefined;
    /* module identifier */
    const __vue_module_identifier__$b = undefined;
    /* functional template */
    const __vue_is_functional_template__$b = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$b = /*#__PURE__*/normalizeComponent$5(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$a = {
      name: "collapsible",

      created: function () {
          requestAnimationFrame(() => {
              this.visible = this.state === "expanded";
              if (!this.visible) {
                  this.$refs.target.classList.add("display-none");
              }
          });
          this.$root.$on("collapse-toggle", this.toggle);
      },

      mounted: function () {
          window.addEventListener("resize", this.resize);
          window.addEventListener("transitionend", this.toggleDisplay);
      },

      destroyed: function () {
          window.removeEventListener("resize", this.resize);
          window.removeEventListener("transitionend", this.toggleDisplay);
      },

      props: {
          name: {
              type: String,
              required: true,
          },
          state: {
              //expanded or collapsed
              type: String,
              required: true,
          },
          transition: {
              type: String,
              required: false,
              default: "0.5s",
          },
      },

      data: function () {
          return {
              name: this.name,
              height: "auto",
              visible: false,
              styles: {
                  overflow: "hidden",
                  transition: this.transition,
              },
          };
      },

      methods: {
          resize: function (e) {
              this.computeHeight();
          },
          toggleDisplay: function (e) {
              if (this.visible) {
                  this.$refs.target.style.height = "auto";
              } else {
                  this.$refs.target.classList.add("display-none");
              }
          },
          toggle: function (target) {
              if (this.name === target) {
                  this.$refs.target.classList.remove("display-none");
                  requestAnimationFrame(() => {
                      this.computeHeight();
                      requestAnimationFrame(() => {
                          this.visible = !this.visible;
                      });
                  });
              }
          },
          getStyle: function () {
              return window.getComputedStyle(this.$refs.target);
          },
          setProps: function (visibility, display, position, height) {
              this.$refs.target.style.visibility = visibility;
              this.$refs.target.style.display = display;
              this.$refs.target.style.position = position;
              this.$refs.target.style.height = height;
          },
          _computeHeight: function () {
              if (this.getStyle().display === "none") {
                  return "auto";
              }

              this.$refs.target.classList.remove("invisible");

              this.setProps("hidden", "block", "absolute", "auto");

              const height = this.getStyle().height;

              this.setProps(null, null, null, height);
              if (!this.visible) {
                  this.$refs.target.classList.add("invisible");
              }
              return height;
          },
          computeHeight: function () {
              this.height = this._computeHeight();
          },
      },
  };

  function normalizeComponent$4(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  const __vue_script__$a = script$a;

  /* template */
  var __vue_render__$a = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        ref: "target",
        class: { invisible: !_vm.visible },
        style: [_vm.styles],
        attrs: { "data-test": _vm.name }
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    const __vue_inject_styles__$a = undefined;
    /* scoped */
    const __vue_scope_id__$a = undefined;
    /* module identifier */
    const __vue_module_identifier__$a = undefined;
    /* functional template */
    const __vue_is_functional_template__$a = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$a = /*#__PURE__*/normalizeComponent$4(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$9 = {
      name: "collapse-button",

      created: function () {
          this.visible = this.state === "expanded";
          this.$root.$on("collapse-toggle", this.toggle);
      },

      props: {
          name: {
              type: String,
              required: true,
          },
          state: {
              //expanded or collapsed
              type: String,
              required: true,
          },
          "keep-contents-on-toggle": {
              type: Boolean,
              required: false,
              default: false,
          },
      },

      data: function () {
          return {
              name: this.name,
              visible: true,
          };
      },

      methods: {
          click: function (event) {
              this.$root.$emit("collapse-toggle", this.name);
          },
          toggle: function (target) {
              if (this.name === target) {
                  this.visible = !this.visible;
              }
          },
      },
  };

  function normalizeComponent$3(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  const __vue_script__$9 = script$9;

  /* template */
  var __vue_render__$9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "button",
      {
        staticClass: "collapsible-title",
        class: { visible: _vm.visible },
        attrs: {
          "data-test": _vm.name,
          "aria-label": _vm.visible
            ? "collapse " + _vm.name
            : "expand " + _vm.name
        },
        on: { click: _vm.click }
      },
      [
        _vm.visible && !_vm.keepContentsOnToggle
          ? _vm._t("expanded", function() {
              return [_vm._v("Hide")]
            })
          : _vm._e(),
        _vm._v(" "),
        !_vm.visible && !_vm.keepContentsOnToggle
          ? _vm._t("collapsed", function() {
              return [_vm._v("Show")]
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.keepContentsOnToggle
          ? _vm._t("contents", function() {
              return [_vm._v("Click here")]
            })
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    const __vue_inject_styles__$9 = undefined;
    /* scoped */
    const __vue_scope_id__$9 = undefined;
    /* module identifier */
    const __vue_module_identifier__$9 = undefined;
    /* functional template */
    const __vue_is_functional_template__$9 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$9 = /*#__PURE__*/normalizeComponent$3(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$7 = {
      name: "simple-spinner",

      props: {
          size: {
              type: String,
              default: "medium",
          },
          filled: {
              type: Boolean,
              default: false,
          },
      },

      computed: {
          spinnerClasses() {
              return {
                  "ds-c-spinner--filled": this.filled,
                  "ds-c-spinner--small": this.size === "small",
                  "ds-c-spinner--big": this.size === "large",
              };
          },

          spinnerStyles() {
              return {
                  margin: this.size === "small" ? "4px" : "8px",
              };
          },
      },
  };

  function normalizeComponent$2(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  const __vue_script__$7 = script$7;

  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass:
          "ds-u-display--flex ds-u-justify-content--center ds-u-align-items--center"
      },
      [
        _c(
          "span",
          {
            staticClass: "ds-c-spinner",
            class: _vm.spinnerClasses,
            style: _vm.spinnerStyles,
            attrs: { role: "status" }
          },
          [
            _c("span", { staticClass: "ds-u-visibility--screen-reader" }, [
              _vm._v("Loading")
            ])
          ]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = undefined;
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$7 = /*#__PURE__*/normalizeComponent$2(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //


  var script$6 = {
    name: 'supplemental-content-object',

    props: {
      name: {
        type: String,
        required: true,
      },
      description: {
          type: String,
          required: false,
      },
      date: {
          type: String,
          required: false,
      },
      url: {
        type: String,
        required: true,
      },
    },
    
    filters: {
      formatDate: function(value) {
        const date = new Date(value);
        let options = { year: 'numeric', timeZone: 'UTC' };
        const raw_date = value.split('-');
        if(raw_date.length > 1) {
          options.month = 'long';
        }
        if(raw_date.length > 2) {
          options.day = 'numeric';
        }
        const format = new Intl.DateTimeFormat("en-US", options);
        return format.format(date);
      }
    },

    methods: {
      isBlank: function(str) {
        return (!str || /^\s*$/.test(str));
      },
    },
  };

  /* script */
  const __vue_script__$6 = script$6;

  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "supplemental-content" }, [
      _c(
        "a",
        {
          staticClass: "supplemental-content-link",
          attrs: { href: _vm.url, target: "_blank", rel: "noopener noreferrer" }
        },
        [
          _vm.date
            ? _c(
                "span",
                {
                  staticClass: "supplemental-content-date",
                  class: {
                    "supplemental-content-mid-bar": !_vm.isBlank(_vm.name)
                  }
                },
                [_vm._v(_vm._s(_vm._f("formatDate")(_vm.date)))]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isBlank(_vm.name)
            ? _c(
                "span",
                {
                  staticClass: "supplemental-content-title",
                  class: {
                    "supplemental-content-external-link": _vm.isBlank(
                      _vm.description
                    )
                  }
                },
                [_vm._v(_vm._s(_vm.name))]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isBlank(_vm.description)
            ? _c(
                "div",
                {
                  staticClass:
                    "supplemental-content-description supplemental-content-external-link"
                },
                [_vm._v(_vm._s(_vm.description))]
              )
            : _vm._e()
        ]
      )
    ])
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = undefined;
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$6 = /*#__PURE__*/normalizeComponent$2(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //

  var script$5 = {
      name: "show-more-button",
      props: {
          count: {
              type: Number,
              default: 1,
          },
          buttonText: {
              type: String,
              required: true
          }
      },
  };

  /* script */
  const __vue_script__$5 = script$5;

  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "show-more-button" }, [
      _c("b", [_vm._v(_vm._s(_vm.buttonText))]),
      _vm._v(" (" + _vm._s(_vm.count) + ")\n")
    ])
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = undefined;
    /* scoped */
    const __vue_scope_id__$5 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$5 = /*#__PURE__*/normalizeComponent$2(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$4 = {
      name: "collapse-button",

      created: function () {
          this.visible = this.state === "expanded";
          this.$root.$on("collapse-toggle", this.toggle);
      },

      props: {
          name: {
              type: String,
              required: true,
          },
          state: {
              //expanded or collapsed
              type: String,
              required: true,
          },
          "keep-contents-on-toggle": {
              type: Boolean,
              required: false,
              default: false,
          },
      },

      data: function () {
          return {
              name: this.name,
              visible: true,
          };
      },

      methods: {
          click: function (event) {
              this.$root.$emit("collapse-toggle", this.name);
          },
          toggle: function (target) {
              if (this.name === target) {
                  this.visible = !this.visible;
              }
          },
      },
  };

  /* script */
  const __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "button",
      {
        staticClass: "collapsible-title",
        class: { visible: _vm.visible },
        attrs: {
          "data-test": _vm.name,
          "aria-label": _vm.visible
            ? "collapse " + _vm.name
            : "expand " + _vm.name
        },
        on: { click: _vm.click }
      },
      [
        _vm.visible && !_vm.keepContentsOnToggle
          ? _vm._t("expanded", function() {
              return [_vm._v("Hide")]
            })
          : _vm._e(),
        _vm._v(" "),
        !_vm.visible && !_vm.keepContentsOnToggle
          ? _vm._t("collapsed", function() {
              return [_vm._v("Show")]
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.keepContentsOnToggle
          ? _vm._t("contents", function() {
              return [_vm._v("Click here")]
            })
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$4 = /*#__PURE__*/normalizeComponent$2(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$3 = {
      name: "collapsible",

      created: function () {
          requestAnimationFrame(() => {
              this.visible = this.state === "expanded";
              if (!this.visible) {
                  this.$refs.target.classList.add("display-none");
              }
          });
          this.$root.$on("collapse-toggle", this.toggle);
      },

      mounted: function () {
          window.addEventListener("resize", this.resize);
          window.addEventListener("transitionend", this.toggleDisplay);
      },

      destroyed: function () {
          window.removeEventListener("resize", this.resize);
          window.removeEventListener("transitionend", this.toggleDisplay);
      },

      props: {
          name: {
              type: String,
              required: true,
          },
          state: {
              //expanded or collapsed
              type: String,
              required: true,
          },
          transition: {
              type: String,
              required: false,
              default: "0.5s",
          },
      },

      data: function () {
          return {
              name: this.name,
              height: "auto",
              visible: false,
              styles: {
                  overflow: "hidden",
                  transition: this.transition,
              },
          };
      },

      methods: {
          resize: function (e) {
              this.computeHeight();
          },
          toggleDisplay: function (e) {
              if (this.visible) {
                  this.$refs.target.style.height = "auto";
              } else {
                  this.$refs.target.classList.add("display-none");
              }
          },
          toggle: function (target) {
              if (this.name === target) {
                  this.$refs.target.classList.remove("display-none");
                  requestAnimationFrame(() => {
                      this.computeHeight();
                      requestAnimationFrame(() => {
                          this.visible = !this.visible;
                      });
                  });
              }
          },
          getStyle: function () {
              return window.getComputedStyle(this.$refs.target);
          },
          setProps: function (visibility, display, position, height) {
              this.$refs.target.style.visibility = visibility;
              this.$refs.target.style.display = display;
              this.$refs.target.style.position = position;
              this.$refs.target.style.height = height;
          },
          _computeHeight: function () {
              if (this.getStyle().display === "none") {
                  return "auto";
              }

              this.$refs.target.classList.remove("invisible");

              this.setProps("hidden", "block", "absolute", "auto");

              const height = this.getStyle().height;

              this.setProps(null, null, null, height);
              if (!this.visible) {
                  this.$refs.target.classList.add("invisible");
              }
              return height;
          },
          computeHeight: function () {
              this.height = this._computeHeight();
          },
      },
  };

  /* script */
  const __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        ref: "target",
        class: { invisible: !_vm.visible },
        style: [_vm.styles],
        attrs: { "data-test": _vm.name }
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$3 = /*#__PURE__*/normalizeComponent$2(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      false,
      undefined,
      undefined,
      undefined
    );

  var script$2$1 = {
      name: "supplemental-content-list",

      components: {
          SupplementalContentObject: __vue_component__$6,
          ShowMoreButton: __vue_component__$5,
          CollapseButton: __vue_component__$4,
          Collapsible: __vue_component__$3,
      },

      props: {
          supplemental_content: {
              type: Array,
              required: true,
          },
          has_sub_categories: {
              type: Boolean,
              required: true,
          },
          limit: {
              type: Number,
              required: false,
              default: 5,
          },
      },

      data() {
          return {
              innerName: Math.random()
                  .toString(36)
                  .replace(/[^a-z]+/g, ""),
          };
      },

      computed: {
          limitedContent() {
              return this.supplemental_content.slice(0, this.limit);
          },
          additionalContent() {
              return this.supplemental_content.slice(this.limit);
          },
          contentCount() {
              return this.supplemental_content.length;
          },
          showMoreNeeded() {
              return this.contentCount > this.limit;
          },
      },
  };

  /* script */
  const __vue_script__$2$1 = script$2$1;

  /* template */
  var __vue_render__$2$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return !_vm.has_sub_categories
      ? _c(
          "div",
          { staticClass: "supplemental-content-list" },
          [
            _vm._l(_vm.limitedContent, function(content, index) {
              return _c("supplemental-content-object", {
                key: index,
                attrs: {
                  name: content.name,
                  description: content.description,
                  date: content.date,
                  url: content.url
                }
              })
            }),
            _vm._v(" "),
            _vm.showMoreNeeded
              ? _c("collapse-button", {
                  staticClass: "category-title show-more",
                  class: { subcategory: _vm.subcategory },
                  attrs: { name: _vm.innerName, state: "collapsed" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "expanded",
                        fn: function() {
                          return [
                            _c("show-more-button", {
                              attrs: {
                                buttonText: "- Show Less",
                                count: _vm.contentCount
                              }
                            })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "collapsed",
                        fn: function() {
                          return [
                            _c("show-more-button", {
                              attrs: {
                                buttonText: "+ Show More",
                                count: _vm.contentCount
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    false,
                    1539528923
                  )
                })
              : _vm._e(),
            _vm._v(" "),
            _c(
              "collapsible",
              {
                staticClass: "category-content show-more-content",
                attrs: { name: _vm.innerName, state: "collapsed" }
              },
              [
                _vm._l(_vm.additionalContent, function(content, index) {
                  return _c("supplemental-content-object", {
                    key: index,
                    attrs: {
                      name: content.name,
                      description: content.description,
                      date: content.date,
                      url: content.url
                    }
                  })
                }),
                _vm._v(" "),
                _vm.showMoreNeeded && _vm.contentCount > 10
                  ? _c("collapse-button", {
                      staticClass: "category-title show-more",
                      class: { subcategory: _vm.subcategory },
                      attrs: { name: _vm.innerName, state: "collapsed" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "expanded",
                            fn: function() {
                              return [
                                _c("show-more-button", {
                                  attrs: {
                                    buttonText: "- Show Less",
                                    count: _vm.contentCount
                                  }
                                })
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "collapsed",
                            fn: function() {
                              return [
                                _c("show-more-button", {
                                  attrs: {
                                    buttonText: "+ Show More",
                                    count: _vm.contentCount
                                  }
                                })
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        1539528923
                      )
                    })
                  : _vm._e()
              ],
              2
            )
          ],
          2
        )
      : _vm._e()
  };
  var __vue_staticRenderFns__$2$1 = [];
  __vue_render__$2$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$2$1 = undefined;
    /* scoped */
    const __vue_scope_id__$2$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2$1 = /*#__PURE__*/normalizeComponent$2(
      { render: __vue_render__$2$1, staticRenderFns: __vue_staticRenderFns__$2$1 },
      __vue_inject_styles__$2$1,
      __vue_script__$2$1,
      __vue_scope_id__$2$1,
      __vue_is_functional_template__$2$1,
      __vue_module_identifier__$2$1,
      false,
      undefined,
      undefined,
      undefined
    );

  var script$1$1 = {
      name: "supplemental-content-category",

      components: {
          SupplementalContentList: __vue_component__$2$1,
          CollapseButton: __vue_component__$4,
          Collapsible: __vue_component__$3,
      },

      props: {
          subcategory: {
              type: Boolean,
              required: false,
              default: false,
          },
          name: {
              type: String,
              required: true,
          },
          description: {
              type: String,
              required: true,
          },
          supplemental_content: {
              type: Array,
              required: false,
          },
          sub_categories: {
              type: Array,
              required: false,
          },
      },

      computed: {
          showDescription: function () {
              return this.description && !/^\s*$/.test(this.description);
          },
          has_sub_categories() {
              return this.sub_categories.length;
          },
      },
  };

  /* script */
  const __vue_script__$1$1 = script$1$1;

  /* template */
  var __vue_render__$1$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "supplemental-content-category" }, [
      _c(
        "div",
        { staticClass: "category" },
        [
          _c("collapse-button", {
            staticClass: "category-title",
            class: { subcategory: _vm.subcategory },
            attrs: { name: _vm.name, state: "collapsed" },
            scopedSlots: _vm._u([
              {
                key: "expanded",
                fn: function() {
                  return [
                    _vm._v(_vm._s(_vm.name) + " "),
                    _c("i", { staticClass: "fa fa-chevron-up" })
                  ]
                },
                proxy: true
              },
              {
                key: "collapsed",
                fn: function() {
                  return [
                    _vm._v(_vm._s(_vm.name) + " "),
                    _c("i", { staticClass: "fa fa-chevron-down" })
                  ]
                },
                proxy: true
              }
            ])
          }),
          _vm._v(" "),
          _vm.showDescription
            ? _c("span", { staticClass: "category-description" }, [
                _vm._v(_vm._s(_vm.description))
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "collapsible",
            {
              staticClass: "category-content",
              attrs: { name: _vm.name, state: "collapsed" }
            },
            [
              _vm._l(_vm.sub_categories, function(category, index) {
                return _c("supplemental-content-category", {
                  key: index,
                  attrs: {
                    subcategory: true,
                    name: category.name,
                    description: category.description,
                    supplemental_content: category.supplemental_content,
                    sub_categories: category.sub_categories
                  }
                })
              }),
              _vm._v(" "),
              _c("supplemental-content-list", {
                attrs: {
                  supplemental_content: _vm.supplemental_content,
                  has_sub_categories: _vm.has_sub_categories
                }
              })
            ],
            2
          )
        ],
        1
      )
    ])
  };
  var __vue_staticRenderFns__$1$1 = [];
  __vue_render__$1$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1$1 = /*#__PURE__*/normalizeComponent$2(
      { render: __vue_render__$1$1, staticRenderFns: __vue_staticRenderFns__$1$1 },
      __vue_inject_styles__$1$1,
      __vue_script__$1$1,
      __vue_scope_id__$1$1,
      __vue_is_functional_template__$1$1,
      __vue_module_identifier__$1$1,
      false,
      undefined,
      undefined,
      undefined
    );

  var script$8 = {
      components: {
          SupplementalContentCategory: __vue_component__$1$1,
          SimpleSpinner: __vue_component__$7,
      },

      props: {
          api_url: {
              type: String,
              required: true,
          },
          title: {
              type: String,
              required: true,
          },
          part: {
              type: String,
              required: true,
          },
          sections: {
              type: Array,
              required: false,
              default: [],
          },
          subparts: {
              type: Array,
              required: false,
              default: [],
          },
      },

      data() {
          return {
              categories: [],
              isFetching: true,
          };
      },

      created() {
          this.fetch_content(this.title, this.part);
      },

      computed: {
          params_array: function () {
              return [
                  ["sections", this.sections],
                  ["subparts", this.subparts],
              ];
          },
          joined_locations: function () {
              let output = "";
              this.params_array.forEach(function (param) {
                  if (param[1].length > 0) {
                      const queryString = "&" + param[0] + "=";
                      output += queryString + param[1].join(queryString);
                  }
              });
              return output;
          },
      },

      methods: {
          async fetch_content(title, part) {
              try {
                  const response = await fetch(
                      `${this.api_url}title/${title}/part/${part}/supplemental_content?${this.joined_locations}`
                  );
                  const content = await response.json();
                  this.categories = content;
              } catch (error) {
                  console.error(error);
              } finally {
                  this.isFetching = false;
              }
          },
      },
  };

  /* script */
  const __vue_script__$8 = script$8;

  /* template */
  var __vue_render__$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "supplemental-content-container" },
      [
        _vm.isFetching
          ? [_c("simple-spinner")]
          : _vm._l(_vm.categories, function(category, index) {
              return _c("supplemental-content-category", {
                key: index,
                attrs: {
                  name: category.name,
                  description: category.description,
                  supplemental_content: category.supplemental_content,
                  sub_categories: category.sub_categories
                }
              })
            })
      ],
      2
    )
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = undefined;
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$8 = /*#__PURE__*/normalizeComponent$2(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$1 = {
      name: "action-button",

      props: {
          actionType: {
              type: String,
              required: true,
          },
          selectedAction: {
              type: String,
              required: true,
          },
          status: {
              type: String,
              required: true,
          },
      },

      computed: {
          selected() {
              return (
                  this.selectedAction === this.actionType &&
                  this.status !== "idle"
              );
          },
          labelState() {
              return this.selected && this.status === "success"
                  ? "copied"
                  : "copy";
          },
          label() {
              return `${this.labelState} ${this.actionType}`;
          },
          buttonClasses() {
              return {
                  "selected-btn": this.selected && this.status === "success",
                  "default-btn": !this.selected,
              };
          },
      },

      methods: {
          handleClick() {
              this.$emit("action-btn-click", {
                  actionType: this.actionType,
              });
          },
      },

      filters: {},
  };

  function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "button",
      {
        staticClass: "action-btn",
        class: _vm.buttonClasses,
        attrs: { disabled: _vm.selected && this.status === "success" },
        on: { click: _vm.handleClick }
      },
      [
        _vm.selected && this.status === "success"
          ? _c(
              "svg",
              { attrs: { width: "17", height: "17", viewBox: "0 0 17 17" } },
              [
                _c("svg", { attrs: { width: "17", height: "17" } }, [
                  _c("path", {
                    attrs: {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d:
                        "M8.50007 16C4.36452 16 1 12.6355 1 8.50007C1 4.36452 4.36452 1 8.50007 1C12.6355 1 15.9999 4.36452 15.9999 8.50007C15.9999 12.6355 12.6355 16 8.50007 16ZM8.50007 2.02937C4.93206 2.02937 2.02922 4.93221 2.02922 8.50007C2.02922 12.0681 4.93206 14.9708 8.50007 14.9708C12.0679 14.9708 14.9706 12.0681 14.9706 8.50007C14.9706 4.93221 12.0679 2.02937 8.50007 2.02937Z",
                      fill: "#2A7A3B",
                      stroke: "#2A7A3B",
                      "stroke-width": "0.25"
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "svg",
                  { attrs: { width: "17", height: "17", x: "4", y: "5" } },
                  [
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d:
                          "M3.48221 5.98237C3.34562 5.98237 3.21476 5.92812 3.11831 5.83166L1.2191 3.93246C1.01811 3.73161 1.01811 3.40565 1.2191 3.2048C1.4201 3.00366 1.74577 3.00366 1.94676 3.2048L3.48221 4.73996L7.05287 1.1693C7.25357 0.968307 7.57954 0.968307 7.78053 1.1693C7.98152 1.37014 7.98152 1.69611 7.78053 1.89696L3.84597 5.83166C3.74951 5.92812 3.61866 5.98237 3.48221 5.98237Z",
                        fill: "#2A7A3B",
                        stroke: "#2A7A3B",
                        "stroke-width": "0.25"
                      }
                    })
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v("\n    " + _vm._s(_vm.label) + "\n")
      ]
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = /*#__PURE__*/normalizeComponent$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  const getAnchorY = (el, elType) => {
      if (!el) return 0;

      return elType === "labeled-icon"
          ? el.offsetWidth / 2
          : el.offsetWidth * 0.7;
  };

  const getAnchorX = (el, elType) => {
      if (!el) return 0;

      return parseInt(window.getComputedStyle(el).fontSize, 10) + 20;
  };

  const appendPxSuffix = (int) => `${int}px`;

  const leftWarning = (el) => el.getBoundingClientRect().left < 130;

  var script$2 = {
      name: "copy-btn",

      components: {
          ActionBtn: __vue_component__$1,
      },

      props: {
          btn_type: {
              type: String,
              required: true,
          },
          title: {
              type: String,
              required: true,
          },
          hash: {
              type: String,
              required: true,
          },
          formatted_citation: {
              type: String,
              required: true,
          },
      },

      data() {
          return {
              entered: false,
              clicked: false,
              leftSafe: true,
              anchorY: 0,
              anchorX: 0,
              label: "Copy Link or Citation",
              selectedAction: null,
              copyStatus: "idle",
          };
      },

      computed: {
          ariaLabel() {
              return this.btn_type === "icon"
                  ? `${this.label} for ${this.title}`
                  : false;
          },
          buttonClasses() {
              return {
                  "copy-btn-labeled": this.btn_type === "labeled-icon",
              };
          },
          tooltipClasses() {
              return {
                  "tooltip-caret": this.leftSafe,
                  "tooltip-caret-left": !this.leftSafe,
              };
          },
          tooltipStyles() {
              return {
                  left: this.anchorY,
                  bottom: this.anchorX,
                  transform: `translate(-${this.leftSafe ? 50 : 20}%, 0)`,
              };
          },
      },

      watch: {
          copyStatus: async function (newStatus, oldStatus) {
              if (
                  newStatus === "pending" &&
                  (oldStatus === "idle" || oldStatus === "success")
              ) {
                  try {
                      // async write to clipboard
                      await navigator.clipboard.writeText(this.getCopyText());
                      this.copyStatus = "success";
                  } catch (err) {
                      console.log("Error copying to clipboard", err);
                      this.copyStatus = "idle";
                  }
              }
          },
      },

      // https://www.vuesnippets.com/posts/click-away/
      // https://dev.to/jamus/clicking-outside-the-box-making-your-vue-app-aware-of-events-outside-its-world-53nh
      directives: {
          clickaway: {
              bind(el, { value }) {
                  if (typeof value !== "function") {
                      console.warn(`Expect a function, got ${value}`);
                      return;
                  }

                  const clickawayHandler = (e) => {
                      const elementsOfInterest = Array.from(
                          el.parentElement.children
                      );
                      const clickedInside = elementsOfInterest.filter((el) =>
                          el.contains(e.target)
                      );
                      return clickedInside.length || value();
                  };

                  el.__clickawayEventHandler__ = clickawayHandler;

                  document.addEventListener("click", clickawayHandler);
              },
              unbind(el) {
                  document.removeEventListener(
                      "click",
                      el.__clickawayEventHandler__
                  );
              },
          },
      },

      methods: {
          handleEnter(e) {
              this.entered = !this.entered && !this.clicked;
              this.leftSafe = !leftWarning(e.currentTarget);
              this.anchorY = appendPxSuffix(
                  getAnchorY(e.currentTarget, this.btn_type)
              );
              this.anchorX = appendPxSuffix(getAnchorX(this.$el, this.btn_type));
          },
          handleExit() {
              if (!this.clicked) {
                  this.entered = false;
                  this.anchorY = undefined;
                  this.leftSafe = true;
              }
          },
          handleClick(e) {
              if (!this.clicked) {
                  this.entered = false;
                  this.clicked = true;
                  if (leftWarning(e.currentTarget)) {
                      this.leftSafe = false;
                  }
                  this.anchorY = appendPxSuffix(
                      getAnchorY(e.currentTarget, this.btn_type)
                  );
                  this.anchorX = appendPxSuffix(
                      getAnchorX(this.$el, this.btn_type)
                  );
              }
          },
          handleCloseClick() {
              if (this.clicked) {
                  this.clicked = false;
                  this.entered = false;
                  this.anchorY = undefined;
                  this.leftSafe = true;
                  this.selectedAction = null;
              }
          },
          handleActionClick(payload) {
              this.selectedAction = payload.actionType;
              this.copyStatus = "pending";
          },
          getCopyText() {
              return this.selectedAction === "citation"
                  ? this.formatted_citation
                  : `${new URL(window.location.href.split("#")[0]).toString()}#${
                      this.hash
                  }`;
          },
      },
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "copy-btn-container" }, [
      _c(
        "button",
        {
          staticClass: "copy-btn text-btn",
          class: _vm.buttonClasses,
          attrs: { "aria-label": _vm.ariaLabel },
          on: {
            focus: _vm.handleEnter,
            focusout: _vm.handleExit,
            mouseenter: _vm.handleEnter,
            mouseleave: _vm.handleExit,
            click: _vm.handleClick
          }
        },
        [
          _c("i", { staticClass: "fa fa-link" }),
          _vm._v(" "),
          _vm.btn_type === "labeled-icon"
            ? _c("span", [_vm._v(_vm._s(_vm.label))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.entered && _vm.btn_type === "icon",
              expression: "entered && btn_type === 'icon'"
            }
          ],
          staticClass: "copy-tooltip hovered",
          class: _vm.tooltipClasses,
          style: _vm.tooltipStyles
        },
        [_c("p", { staticClass: "hover-msg" }, [_vm._v(_vm._s(_vm.label))])]
      ),
      _vm._v(" "),
      _vm.clicked
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "clickaway",
                  rawName: "v-clickaway",
                  value: _vm.handleCloseClick,
                  expression: "handleCloseClick"
                }
              ],
              staticClass: "copy-tooltip clicked",
              class: _vm.tooltipClasses,
              style: _vm.tooltipStyles
            },
            [
              _c(
                "button",
                {
                  staticClass: "close-btn text-btn",
                  attrs: { "aria-label": "close copy link or citation dialog" },
                  on: { click: _vm.handleCloseClick }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "11",
                        height: "11",
                        viewBox: "0 0 11 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d:
                            "M1.47149 1.08383L5.49969 5.11209L9.52851 1.08383C9.63637 0.975965 9.81124 0.975965 9.91911 1.08383C10.027 1.19169 10.027 1.36656 9.91911 1.47442L5.89023 5.50262L9.91911 9.53144C10.027 9.6393 10.027 9.81417 9.91911 9.92204C9.81124 10.0299 9.63637 10.0299 9.52851 9.92204L5.49969 5.89316L1.47149 9.92204C1.36363 10.0299 1.18876 10.0299 1.0809 9.92204C0.973035 9.81417 0.973035 9.6393 1.0809 9.53144L5.10916 5.50262L1.0809 1.47442C0.973035 1.36656 0.973035 1.19169 1.0809 1.08383C1.18876 0.975965 1.36363 0.975965 1.47149 1.08383Z"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "citation-title" }, [
                _vm._v(_vm._s(this.formatted_citation))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "action-btns" },
                [
                  _c("ActionBtn", {
                    attrs: {
                      selectedAction: _vm.selectedAction,
                      status: _vm.copyStatus,
                      actionType: "link"
                    },
                    on: { "action-btn-click": _vm.handleActionClick }
                  }),
                  _vm._v(" "),
                  _c("ActionBtn", {
                    attrs: {
                      selectedAction: _vm.selectedAction,
                      status: _vm.copyStatus,
                      actionType: "citation"
                    },
                    on: { "action-btn-click": _vm.handleActionClick }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = /*#__PURE__*/normalizeComponent$1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //

  var script = {
      name: "table-component",

      props: {
          table_markup: {
              type: String,
              required: true,
          }

      },

      computed: {
          table() {
              return this.table_markup;
          }

      },
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("section", {
      staticClass: "table-section",
      domProps: { innerHTML: _vm._s(_vm.table) }
    })
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  function goToVersion() {
      const select = document.querySelector("#view-options");
      if (!select) {
          return;
      }

      const options = document.querySelectorAll("#view-options [data-url]");
      select.addEventListener("change", function () {
          location.href =
              this.options[this.selectedIndex].dataset.url + location.hash;
      });

      const closeBtn = document.getElementById("close-link");

      // Do not reload page if closing version select bar from latest version;
      // just re-hide version select bar
      closeBtn.addEventListener("click", (e) => {
          if (e.currentTarget.href === location.href) {
              const viewButton = document.querySelector("#view-button");
              viewButton.setAttribute("data-set-state", "show");
              viewButton.setAttribute("data-state", "not-selected");
              const versionSelectBar = document.getElementById(
                  "view-and-compare"
              );
              versionSelectBar.setAttribute("data-state", "hide");
          }
      });

      // append current hash to end of closeBtn a href
      // on load and on hashchange
      window.addEventListener("pageshow", () => {
          closeBtn.href = closeBtn.href.split("#")[0] + location.hash;
      });
      window.addEventListener("hashchange", () => {
          closeBtn.href = closeBtn.href.split("#")[0] + location.hash;
      });

      // if not latest version show view div
      const latest_version = options[0].dataset.url;

      if (!location.href.includes(latest_version)) {
          const state_change_target = "view";
          const view_elements = document.querySelectorAll(
              `[data-state][data-state-name='${state_change_target}']`
          );
          for (const el of view_elements) {
              el.setAttribute("data-state", "show");
          }

          // add class to content container for scroll-margin-top
          // when go to version bar is visible
          const contentContainer = document.querySelector(".content");
          contentContainer.classList.add("go-to-version");
      }

      for (const option of options) {
          const url = option.dataset.url;
          if (location.href.includes(url)) {
              option.setAttribute("selected", "");
              break;
          }
      }
  }

  gn.config.devtools = true;
  gn.use(Vuetify);

  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();

      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
              (window.innerHeight ||
                  document.documentElement
                      .clientHeight) /* or $(window).height() */ &&
          rect.right <=
              (window.innerWidth ||
                  document.documentElement.clientWidth) /* or $(window).width() */
      );
  }

  // scroll to anchor to accommodate FF's bad behavior
  function onPageShow() {
      // some magic number constants to scroll to top
      // with room for sticky header and some breathing room for content
      // investigate pulling in SCSS variables instead
      const HEADER_HEIGHT = 102;
      const HEADER_HEIGHT_MOBILE = 81;

      // if version select is open, get its height
      // and adjust scrollTo position
      const versionSelectBar = document.getElementsByClassName(
          "view-and-compare"
      );
      const versionSelectHeight = versionSelectBar.length
          ? versionSelectBar[0].offsetHeight
          : 0;

      const elId = window.location.hash;

      if (elId.length > 1) {
          const el = document.getElementById(elId.substr(1));
          if (el) {
              const position = el.getBoundingClientRect();
              const headerHeight =
                  window.innerWidth >= 1024
                      ? HEADER_HEIGHT
                      : HEADER_HEIGHT_MOBILE;
              window.scrollTo(
                  position.x,
                  el.offsetTop - headerHeight - versionSelectHeight
              );
          }
      }
  }

  function deactivateAllTOCLinks() {
      const activeEls = document.querySelectorAll(".menu-section.active");
      activeEls.forEach((el) => {
          el.classList.remove("active");
      });
  }

  function getCurrentSectionFromHash() {
      const hash = window.location.hash.substring(1);
      const citations = hash.split("-");
      return citations.slice(0, 2).join("-");
  }

  function activateTOCLink() {
      deactivateAllTOCLinks();
      const section = getCurrentSectionFromHash();

      const el = document.querySelector(`[data-section-id='${section}']`);
      if (!el) return;

      el.classList.add("active");
      if (!isElementInViewport(el)) {
          el.scrollIntoView();
      }
  }

  const setResponsiveState = (el) => {
      // left sidebar defaults to collapsed on screens
      // narrower than 1024px
      if (
          el.dataset.stateName === "left-sidebar" &&
          el.dataset.state === "expanded" &&
          window.innerWidth < 1024
      ) {
          el.setAttribute("data-state", "collapsed");
      }
  };

  function makeStateful(el) {
      const stateChangeTarget = el.getAttribute("data-state-name");
      const stateChangeButtons = document.querySelectorAll(
          `[data-set-state][data-state-name='${stateChangeTarget}']`
      );

      setResponsiveState(el);

      stateChangeButtons.forEach((btn) => {
          btn.addEventListener("click", (event) => {
              const state = event.currentTarget.getAttribute("data-set-state");
              el.setAttribute("data-state", state);
          });
      });
  }

  function viewButtonClose() {
      const viewButton = document.querySelector("#view-button");

      if (!viewButton) {
          return;
      }

      viewButton.addEventListener("click", (event) => {
          if (event.currentTarget.getAttribute("data-state") === "show") {
              // focus on select
              document.querySelector("#view-options").focus();

              event.currentTarget.setAttribute("data-set-state", "close");
          }

          if (event.currentTarget.getAttribute("data-state") === "close") {
              const closeLink = document.querySelector("#close-link");
              closeLink.click();
          }
      });
  }

  function main() {
      new gn({
          components: {
              RelatedRules: __vue_component__$b,
              Collapsible: __vue_component__$a,
              CollapseButton: __vue_component__$9,
              SupplementalContent: __vue_component__$8,
              CopyBtn: __vue_component__$2,
              TableComponent: __vue_component__,
          },
      }).$mount("#vue-app");

      const statefulElements = document.querySelectorAll("[data-state]");
      statefulElements.forEach((el) => {
          makeStateful(el);
      });

      viewButtonClose();
      goToVersion();

      window.addEventListener("hashchange", activateTOCLink);
      activateTOCLink();

      const resetButton = document.getElementById("search-reset");
      if (resetButton) {
          resetButton.addEventListener("click", (event) => {
              document.getElementById("search-field").value = "";
              event.preventDefault();
          });
      }

      window.addEventListener("pageshow", onPageShow);
  }

  main();

}());
//# sourceMappingURL=main.build.js.map
