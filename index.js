(()=>{var Fe=Object.defineProperty;var Pe=Object.getOwnPropertySymbols;var Et=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable;var Ne=(e,t,r)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))Et.call(t,r)&&Ne(e,r,t[r]);if(Pe)for(var r of Pe(t))bt.call(t,r)&&Ne(e,r,t[r]);return e};var wt=(e,t)=>{for(var r in t)Fe(e,r,{get:t[r],enumerable:!0})};var k=(e,t,r)=>new Promise((n,o)=>{var s=f=>{try{c(r.next(f))}catch(m){o(m)}},i=f=>{try{c(r.throw(f))}catch(m){o(m)}},c=f=>f.done?n(f.value):Promise.resolve(f.value).then(s,i);c((r=r.apply(e,t)).next())});function I(e,t){return function(){return e.apply(t,arguments)}}var{toString:xt}=Object.prototype,{getPrototypeOf:ue}=Object,v=(e=>t=>{let r=xt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>v(t)===e),X=e=>t=>typeof t===e,{isArray:D}=Array,H=X("undefined");function St(e){return e!==null&&!H(e)&&e.constructor!==null&&!H(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Le=O("ArrayBuffer");function At(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}var Rt=X("string"),R=X("function"),Ue=X("number"),G=e=>e!==null&&typeof e=="object",Ot=e=>e===!0||e===!1,$=e=>{if(v(e)!=="object")return!1;let t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},gt=O("Date"),Tt=O("File"),Ct=O("Blob"),Pt=O("FileList"),Nt=e=>G(e)&&R(e.pipe),Ft=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=v(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Dt=O("URLSearchParams"),jt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e=="undefined")return;let n,o;if(typeof e!="object"&&(e=[e]),D(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length,c;for(n=0;n<i;n++)c=s[n],t.call(null,e[c],c,e)}}function Be(e,t){t=t.toLowerCase();let r=Object.keys(e),n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}var _e=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global,ke=e=>!H(e)&&e!==_e;function ce(){let{caseless:e}=ke(this)&&this||{},t={},r=(n,o)=>{let s=e&&Be(t,o)||o;$(t[s])&&$(n)?t[s]=ce(t[s],n):$(n)?t[s]=ce({},n):D(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&q(arguments[n],r);return t}var Lt=(e,t,r,{allOwnKeys:n}={})=>(q(t,(o,s)=>{r&&R(o)?e[s]=I(o,r):e[s]=o},{allOwnKeys:n}),e),Ut=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Bt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},_t=(e,t,r,n)=>{let o,s,i,c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&ue(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return n!==-1&&n===r},It=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Ue(t))return null;let r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Ht=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&ue(Uint8Array)),qt=(e,t)=>{let n=(e&&e[Symbol.iterator]).call(e),o;for(;(o=n.next())&&!o.done;){let s=o.value;t.call(e,s[0],s[1])}},Mt=(e,t)=>{let r,n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},zt=O("HTMLFormElement"),Jt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),De=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Vt=O("RegExp"),Ie=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};q(r,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(n[s]=i||o)}),Object.defineProperties(e,n)},Wt=e=>{Ie(e,(t,r)=>{if(R(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let n=e[r];if(R(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Kt=(e,t)=>{let r={},n=o=>{o.forEach(s=>{r[s]=!0})};return D(e)?n(e):n(String(e).split(t)),r},$t=()=>{},vt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ae="abcdefghijklmnopqrstuvwxyz",je="0123456789",He={DIGIT:je,ALPHA:ae,ALPHA_DIGIT:ae+ae.toUpperCase()+je},Xt=(e=16,t=He.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Gt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var Qt=e=>{let t=new Array(10),r=(n,o)=>{if(G(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;let s=D(n)?[]:{};return q(n,(i,c)=>{let f=r(i,o+1);!H(f)&&(s[c]=f)}),t[o]=void 0,s}}return n};return r(e,0)},Zt=O("AsyncFunction"),Yt=e=>e&&(G(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:D,isArrayBuffer:Le,isBuffer:St,isFormData:Ft,isArrayBufferView:At,isString:Rt,isNumber:Ue,isBoolean:Ot,isObject:G,isPlainObject:$,isUndefined:H,isDate:gt,isFile:Tt,isBlob:Ct,isRegExp:Vt,isFunction:R,isStream:Nt,isURLSearchParams:Dt,isTypedArray:Ht,isFileList:Pt,forEach:q,merge:ce,extend:Lt,trim:jt,stripBOM:Ut,inherits:Bt,toFlatObject:_t,kindOf:v,kindOfTest:O,endsWith:kt,toArray:It,forEachEntry:qt,matchAll:Mt,isHTMLForm:zt,hasOwnProperty:De,hasOwnProp:De,reduceDescriptors:Ie,freezeMethods:Wt,toObjectSet:Kt,toCamelCase:Jt,noop:$t,toFiniteNumber:vt,findKey:Be,global:_e,isContextDefined:ke,ALPHABET:He,generateString:Xt,isSpecCompliantForm:Gt,toJSONObject:Qt,isAsyncFn:Zt,isThenable:Yt};function j(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}a.inherits(j,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var qe=j.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(j,Me);Object.defineProperty(qe,"isAxiosError",{value:!0});j.from=(e,t,r,n,o,s)=>{let i=Object.create(qe);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),j.call(i,e.message,t,r,n,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var h=j;var Q=null;function le(e){return a.isPlainObject(e)||a.isArray(e)}function Je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ze(e,t,r){return e?e.concat(t).map(function(o,s){return o=Je(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function er(e){return a.isArray(e)&&!e.some(le)}var tr=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function rr(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(Q||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,b){return!a.isUndefined(b[d])});let n=r.metaTokens,o=r.visitor||l,s=r.dots,i=r.indexes,f=(r.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function m(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,d,b){let w=p;if(p&&!b&&typeof p=="object"){if(a.endsWith(d,"{}"))d=n?d:d.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&er(p)||(a.isFileList(p)||a.endsWith(d,"[]"))&&(w=a.toArray(p)))return d=Je(d),w.forEach(function(C,yt){!(a.isUndefined(C)||C===null)&&t.append(i===!0?ze([d],yt,s):i===null?d:d+"[]",m(C))}),!1}return le(p)?!0:(t.append(ze(b,d,s),m(p)),!1)}let u=[],E=Object.assign(tr,{defaultVisitor:l,convertValue:m,isVisitable:le});function A(p,d){if(!a.isUndefined(p)){if(u.indexOf(p)!==-1)throw Error("Circular reference detected in "+d.join("."));u.push(p),a.forEach(p,function(w,T){(!(a.isUndefined(w)||w===null)&&o.call(t,w,a.isString(T)?T.trim():T,d,E))===!0&&A(w,d?d.concat(T):[T])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return A(e),t}var P=rr;function Ve(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function We(e,t){this._pairs=[],e&&P(e,this,t)}var Ke=We.prototype;Ke.append=function(t,r){this._pairs.push([t,r])};Ke.toString=function(t){let r=t?function(n){return t.call(this,n,Ve)}:Ve;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};var Z=We;function nr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function M(e,t,r){if(!t)return e;let n=r&&r.encode||nr,o=r&&r.serialize,s;if(o?s=o(t,r):s=a.isURLSearchParams(t)?t.toString():new Z(t,r).toString(n),s){let i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}var fe=class{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}},pe=fe;var Y={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var $e=typeof URLSearchParams!="undefined"?URLSearchParams:Z;var ve=typeof FormData!="undefined"?FormData:null;var Xe=typeof Blob!="undefined"?Blob:null;var Ge={isBrowser:!0,classes:{URLSearchParams:$e,FormData:ve,Blob:Xe},protocols:["http","https","file","blob","url","data"]};var de={};wt(de,{hasBrowserEnv:()=>Qe,hasStandardBrowserEnv:()=>or,hasStandardBrowserWebWorkerEnv:()=>sr});var Qe=typeof window!="undefined"&&typeof document!="undefined",or=(e=>Qe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator!="undefined"&&navigator.product),sr=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";var x=_(_({},de),Ge);function me(e,t){return P(e,new x.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return x.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function ir(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ar(e){let t={},r=Object.keys(e),n,o=r.length,s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function cr(e){function t(r,n,o,s){let i=r[s++];if(i==="__proto__")return!0;let c=Number.isFinite(+i),f=s>=r.length;return i=!i&&a.isArray(o)?o.length:i,f?(a.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(r,n,o[i],s)&&a.isArray(o[i])&&(o[i]=ar(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){let r={};return a.forEachEntry(e,(n,o)=>{t(ir(n),o,r,0)}),r}return null}var ee=cr;function ur(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}var he={transitional:Y,adapter:["xhr","http"],transformRequest:[function(t,r){let n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o?JSON.stringify(ee(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return me(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){let f=this.env&&this.env.FormData;return P(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),ur(t)):t}],transformResponse:[function(t){let r=this.transitional||he.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||o)){let i=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{he.headers[e]={}});var L=he;var lr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ze=e=>{let t={},r,n,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),r=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!r||t[r]&&lr[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};var Ye=Symbol("internals");function z(e){return e&&String(e).trim().toLowerCase()}function te(e){return e===!1||e==null?e:a.isArray(e)?e.map(te):String(e)}function fr(e){let t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}var pr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ye(e,t,r,n,o){if(a.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function dr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function mr(e,t){let r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,i){return this[n].call(this,t,o,s,i)},configurable:!0})})}var U=class{constructor(t){t&&this.set(t)}set(t,r,n){let o=this;function s(c,f,m){let l=z(f);if(!l)throw new Error("header name must be a non-empty string");let u=a.findKey(o,l);(!u||o[u]===void 0||m===!0||m===void 0&&o[u]!==!1)&&(o[u||f]=te(c))}let i=(c,f)=>a.forEach(c,(m,l)=>s(m,l,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!pr(t)?i(Ze(t),r):t!=null&&s(r,t,n),this}get(t,r){if(t=z(t),t){let n=a.findKey(this,t);if(n){let o=this[n];if(!r)return o;if(r===!0)return fr(o);if(a.isFunction(r))return r.call(this,o,n);if(a.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=z(t),t){let n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||ye(this,this[n],n,r)))}return!1}delete(t,r){let n=this,o=!1;function s(i){if(i=z(i),i){let c=a.findKey(n,i);c&&(!r||ye(n,n[c],c,r))&&(delete n[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){let r=Object.keys(this),n=r.length,o=!1;for(;n--;){let s=r[n];(!t||ye(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){let r=this,n={};return a.forEach(this,(o,s)=>{let i=a.findKey(n,s);if(i){r[i]=te(o),delete r[s];return}let c=t?dr(s):String(s).trim();c!==s&&delete r[s],r[c]=te(o),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return a.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){let n=(this[Ye]=this[Ye]={accessors:{}}).accessors,o=this.prototype;function s(i){let c=z(i);n[c]||(mr(o,i),n[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}};U.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(U.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(U);var S=U;function J(e,t){let r=this||L,n=t||r,o=S.from(n.headers),s=n.data;return a.forEach(e,function(c){s=c.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function V(e){return!!(e&&e.__CANCEL__)}function et(e,t,r){h.call(this,e==null?"canceled":e,h.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(et,h,{__CANCEL__:!0});var N=et;function Ee(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new h("Request failed with status code "+r.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var tt=x.hasStandardBrowserEnv?{write(e,t,r,n,o,s){let i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){let t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function be(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function we(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function W(e,t){return e&&!be(t)?we(e,t):t}var rt=x.hasStandardBrowserEnv?function(){let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function o(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(i){let c=a.isString(i)?o(i):i;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}();function xe(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function hr(e,t){e=e||10;let r=new Array(e),n=new Array(e),o=0,s=0,i;return t=t!==void 0?t:1e3,function(f){let m=Date.now(),l=n[s];i||(i=m),r[o]=f,n[o]=m;let u=s,E=0;for(;u!==o;)E+=r[u++],u=u%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),m-i<t)return;let A=l&&m-l;return A?Math.round(E*1e3/A):void 0}}var nt=hr;function ot(e,t){let r=0,n=nt(50,250);return o=>{let s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-r,f=n(c),m=s<=i;r=s;let l={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:f||void 0,estimated:f&&i&&m?(i-s)/f:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}var yr=typeof XMLHttpRequest!="undefined",st=yr&&function(e){return new Promise(function(r,n){let o=e.data,s=S.from(e.headers).normalize(),{responseType:i,withXSRFToken:c}=e,f;function m(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}let l;if(a.isFormData(o)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((l=s.getContentType())!==!1){let[d,...b]=l?l.split(";").map(w=>w.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...b].join("; "))}}let u=new XMLHttpRequest;if(e.auth){let d=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(d+":"+b))}let E=W(e.baseURL,e.url);u.open(e.method.toUpperCase(),M(E,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function A(){if(!u)return;let d=S.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:d,config:e,request:u};Ee(function(C){r(C),m()},function(C){n(C),m()},w),u=null}if("onloadend"in u?u.onloadend=A:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(A)},u.onabort=function(){u&&(n(new h("Request aborted",h.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",w=e.transitional||Y;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),n(new h(b,w.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,u)),u=null},x.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&rt(E))){let d=e.xsrfHeaderName&&e.xsrfCookieName&&tt.read(e.xsrfCookieName);d&&s.set(e.xsrfHeaderName,d)}o===void 0&&s.setContentType(null),"setRequestHeader"in u&&a.forEach(s.toJSON(),function(b,w){u.setRequestHeader(w,b)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",ot(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",ot(e.onUploadProgress)),(e.cancelToken||e.signal)&&(f=d=>{u&&(n(!d||d.type?new N(null,e,u):d),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f)));let p=xe(E);if(p&&x.protocols.indexOf(p)===-1){n(new h("Unsupported protocol "+p+":",h.ERR_BAD_REQUEST,e));return}u.send(o||null)})};var Se={http:Q,xhr:st};a.forEach(Se,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}});var it=e=>`- ${e}`,Er=e=>a.isFunction(e)||e===null||e===!1,re={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:t}=e,r,n,o={};for(let s=0;s<t;s++){r=e[s];let i;if(n=r,!Er(r)&&(n=Se[(i=String(r)).toLowerCase()],n===void 0))throw new h(`Unknown adapter '${i}'`);if(n)break;o[i||"#"+s]=n}if(!n){let s=Object.entries(o).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build")),i=t?s.length>1?`since :
`+s.map(it).join(`
`):" "+it(s[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:Se};function Ae(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new N(null,e)}function ne(e){return Ae(e),e.headers=S.from(e.headers),e.data=J.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),re.getAdapter(e.adapter||L.adapter)(e).then(function(n){return Ae(e),n.data=J.call(e,e.transformResponse,n),n.headers=S.from(n.headers),n},function(n){return V(n)||(Ae(e),n&&n.response&&(n.response.data=J.call(e,e.transformResponse,n.response),n.response.headers=S.from(n.response.headers))),Promise.reject(n)})}var at=e=>e instanceof S?_({},e):e;function g(e,t){t=t||{};let r={};function n(m,l,u){return a.isPlainObject(m)&&a.isPlainObject(l)?a.merge.call({caseless:u},m,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function o(m,l,u){if(a.isUndefined(l)){if(!a.isUndefined(m))return n(void 0,m,u)}else return n(m,l,u)}function s(m,l){if(!a.isUndefined(l))return n(void 0,l)}function i(m,l){if(a.isUndefined(l)){if(!a.isUndefined(m))return n(void 0,m)}else return n(void 0,l)}function c(m,l,u){if(u in t)return n(m,l);if(u in e)return n(void 0,m)}let f={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(m,l)=>o(at(m),at(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){let u=f[l]||o,E=u(e[l],t[l],l);a.isUndefined(E)&&u!==c||(r[l]=E)}),r}var oe="1.6.8";var Re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Re[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});var ct={};Re.transitional=function(t,r,n){function o(s,i){return"[Axios v"+oe+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return(s,i,c)=>{if(t===!1)throw new h(o(i," has been removed"+(r?" in "+r:"")),h.ERR_DEPRECATED);return r&&!ct[i]&&(ct[i]=!0,console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,c):!0}};function br(e,t,r){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let s=n[o],i=t[s];if(i){let c=e[s],f=c===void 0||i(c,s,e);if(f!==!0)throw new h("option "+s+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}var se={assertOptions:br,validators:Re};var F=se.validators,B=class{constructor(t){this.defaults=t,this.interceptors={request:new pe,response:new pe}}request(t,r){return k(this,null,function*(){try{return yield this._request(t,r)}catch(n){if(n instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;let s=o.stack?o.stack.replace(/^.+\n/,""):"";n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}throw n}})}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=g(this.defaults,r);let{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&se.assertOptions(n,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),o!=null&&(a.isFunction(o)?r.paramsSerializer={serialize:o}:se.assertOptions(o,{encode:F.function,serialize:F.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[r.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),r.headers=S.concat(i,s);let c=[],f=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(f=f&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});let m=[];this.interceptors.response.forEach(function(d){m.push(d.fulfilled,d.rejected)});let l,u=0,E;if(!f){let p=[ne.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,m),E=p.length,l=Promise.resolve(r);u<E;)l=l.then(p[u++],p[u++]);return l}E=c.length;let A=r;for(u=0;u<E;){let p=c[u++],d=c[u++];try{A=p(A)}catch(b){d.call(this,b);break}}try{l=ne.call(this,A)}catch(p){return Promise.reject(p)}for(u=0,E=m.length;u<E;)l=l.then(m[u++],m[u++]);return l}getUri(t){t=g(this.defaults,t);let r=W(t.baseURL,t.url);return M(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(r,n){return this.request(g(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(s,i,c){return this.request(g(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}B.prototype[t]=r(),B.prototype[t+"Form"]=r(!0)});var K=B;var Oe=class e{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});let n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s,i=new Promise(c=>{n.subscribe(c),s=c}).then(o);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s,i,c){n.reason||(n.reason=new N(s,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new e(function(o){t=o}),cancel:t}}},ut=Oe;function ge(e){return function(r){return e.apply(null,r)}}function Te(e){return a.isObject(e)&&e.isAxiosError===!0}var Ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ce).forEach(([e,t])=>{Ce[t]=e});var lt=Ce;function ft(e){let t=new K(e),r=I(K.prototype.request,t);return a.extend(r,K.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return ft(g(e,o))},r}var y=ft(L);y.Axios=K;y.CanceledError=N;y.CancelToken=ut;y.isCancel=V;y.VERSION=oe;y.toFormData=P;y.AxiosError=h;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=ge;y.isAxiosError=Te;y.mergeConfig=g;y.AxiosHeaders=S;y.formToJSON=e=>ee(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=re.getAdapter;y.HttpStatusCode=lt;y.default=y;var ie=y;var{Axios:ls,AxiosError:fs,CanceledError:ps,isCancel:ds,CancelToken:ms,VERSION:hs,all:ys,Cancel:Es,isAxiosError:bs,spread:ws,toFormData:xs,AxiosHeaders:Ss,HttpStatusCode:As,formToJSON:Rs,getAdapter:Os,mergeConfig:gs}=ie;var wr="85db9f63a96a4c34a8b202116241504",xr=document.getElementById("weather-form"),dt=document.getElementById("city"),Sr=document.getElementById("temp-div"),Ar=document.getElementById("weather-info"),mt=document.getElementById("weather-icon"),Rr=document.getElementById("city-name"),ht=document.getElementById("fav");xr.addEventListener("submit",gr);function Or(){mt.style.display="block",ht.style.display="inline"}function gr(e){return k(this,null,function*(){e.preventDefault();let t=dt.value,r=`http://api.weatherapi.com/v1/current.json?key=${wr}&q=${t}`;if(console.log(r),!t){alert("Enter a major city!");return}yield fetch(r).then(n=>n.json()).then(n=>{Tr(n),console.log(n)}).catch(n=>{console.log("Eroor:",n),alert("Error! Please try again!")}),Or()})}function Tr(e){let t=Math.round(e.current.temp_f),r=e.current.condition.icon,n=e.current.condition.text,o=e.location.name;mt.src=`https:${r}`,Ar.innerHTML=`<p>${n}</p>`,Sr.innerHTML=`<p>${t}\xB0F</p>`,Rr.innerHTML=`<p>${o}</p>`}var pt=[],Cr="";ht.addEventListener("click",Pr);function Pr(){return k(this,null,function*(){let e=dt.value;pt.push(e);let t={method:"POST",url:"https://json-storage-api.p.rapidapi.com/datalake",headers:{"content-type":"application/json","X-RapidAPI-Key":"f930ce2bc4mshce1ac230f341dcep172ccdjsn3d707b1eb240","X-RapidAPI-Host":"json-storage-api.p.rapidapi.com"},data:{"@context":["http://schema4i.org/Thing.jsonld","http://schema4i.org/Action.jsonld","http://schema4i.org/CreateAction.jsonld"],"@type":"CreateAction",Result:{"@context":["http://schema4i.org/DataLakeItem.jsonld","http://schema4i.org/UserAccount.jsonld","http://schema4i.org/OfferForPurchase.jsonld","http://schema4i.org/Offer.jsonld","http://schema4i.org/Organization.jsonld","http://schema4i.org/PostalAddress.jsonld"],"@type":"DataLakeItem",Name:"Weather App",Creator:{"@type":"UserAccount",Identifier:"USERID-1111"},About:{"@type":"Cities",Cities:pt}}}};try{let r=yield ie.request(t);console.log(r.data),Cr=r.data.Object.Identifier}catch(r){console.error(r)}})}})();