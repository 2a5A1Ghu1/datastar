// Datastar v1.0.0-beta.9
var rt=/🖕JS_DS🚀/.source,Se=rt.slice(0,5),Fe=rt.slice(4),H="datastar";var it="Datastar-Request",Te=300,ot=1e3,st="type module",Ae=!1,at=!1,lt=!0,U={Morph:"morph",Inner:"inner",Outer:"outer",Prepend:"prepend",Append:"append",Before:"before",After:"after",UpsertAttributes:"upsertAttributes"},ut=U.Morph,F={MergeFragments:"datastar-merge-fragments",MergeSignals:"datastar-merge-signals",RemoveFragments:"datastar-remove-fragments",RemoveSignals:"datastar-remove-signals",ExecuteScript:"datastar-execute-script"};var M=(r=>(r[r.Attribute=1]="Attribute",r[r.Watcher=2]="Watcher",r[r.Action=3]="Action",r))(M||{});var fe=`${H}-signals`;var z=t=>t.trim()==="true",de=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,n)=>(n?"-":"")+e.toLowerCase()),Z=t=>de(t).replace(/-./g,e=>e[1].toUpperCase()),qe=t=>de(t).replace(/-/g,"_"),Cn=t=>Z(t).replace(/^./,e=>e[0].toUpperCase()),Ee=t=>new Function(`return Object.assign({}, ${t})`)(),Y=t=>t.startsWith("$")?t.slice(1):t,Pn={kebab:de,snake:qe,pascal:Cn};function k(t,e){for(let n of e.get("case")||[]){let r=Pn[n];r&&(t=r(t))}return t}var In="computed",ct={type:1,name:In,keyReq:1,valReq:1,onLoad:({key:t,mods:e,signals:n,genRX:r})=>{t=k(t,e);let i=r();n.setComputed(t,i)}};var ft={type:1,name:"signals",onLoad:t=>{let{key:e,mods:n,signals:r,value:i,genRX:s}=t,u=n.has("ifmissing");if(e!==""){let a=k(e,n),p=i===""?i:s()();u?r.upsertIfMissing(a,p):r.setValue(a,p)}else{let a=Ee(t.value);t.value=JSON.stringify(a);let S=s()();r.merge(S,u)}}};var dt={type:1,name:"star",keyReq:2,valReq:2,onLoad:()=>{alert("YOU ARE PROBABLY OVERCOMPLICATING IT")}};var re=class{#e=0;#t;constructor(e=H){this.#t=e}with(e){if(typeof e=="string")for(let n of e.split(""))this.with(n.charCodeAt(0));else typeof e=="boolean"?this.with(1<<(e?7:3)):this.#e=this.#e*33^e;return this}get value(){return this.#e}get string(){return this.#t+Math.abs(this.#e).toString(36)}};function _e(t){if(t.id)return t.id;let e=new re,n=t;for(;n;){if(e.with(n.tagName||""),n.id){e.with(n.id);break}let r=n?.parentNode;r&&e.with([...r.children].indexOf(n)),n=r}return e.string}function Re(t,e){return new re().with(t).with(e).value}function pe(t,e){if(!t||!(t instanceof HTMLElement||t instanceof SVGElement))return null;let n=t.dataset;if("starIgnore"in n)return null;"starIgnore__self"in n||e(t);let r=t.firstElementChild;for(;r;)pe(r,e),r=r.nextElementSibling}var Ln="https://data-star.dev/errors";function We(t,e,n={}){let r=new Error;r.name=`${H} ${t} error`;let i=qe(e),s=new URLSearchParams({metadata:JSON.stringify(n)}).toString(),u=JSON.stringify(n,null,2);return r.message=`${e}
More info: ${Ln}/${t}/${i}?${s}
Context: ${u}`,r}function B(t,e,n={}){return We("internal",e,Object.assign({from:t},n))}function W(t,e,n={}){let r={plugin:{name:e.plugin.name,type:M[e.plugin.type]}};return We("init",t,Object.assign(r,n))}function C(t,e,n={}){let r={plugin:{name:e.plugin.name,type:M[e.plugin.type]},element:{id:e.el.id,tag:e.el.tagName},expression:{rawKey:e.rawKey,key:e.key,value:e.value,validSignals:e.signals.paths(),fnContent:e.fnContent}};return We("runtime",t,Object.assign(r,n))}var ie="preact-signals",Dn=Symbol.for("preact-signals"),j=1,oe=2,ge=4,ae=8,xe=16,se=32;function Ge(){we++}function Ue(){if(we>1){we--;return}let t,e=!1;for(;me!==void 0;){let n=me;for(me=void 0,$e++;n!==void 0;){let r=n._nextBatchedEffect;if(n._nextBatchedEffect=void 0,n._flags&=~oe,!(n._flags&ae)&&mt(n))try{n._callback()}catch(i){e||(t=i,e=!0)}n=r}}if($e=0,we--,e)throw t}var P;var me,we=0,$e=0,Me=0;function pt(t){if(P===void 0)return;let e=t._node;if(e===void 0||e._target!==P)return e={_version:0,_source:t,_prevSource:P._sources,_nextSource:void 0,_target:P,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},P._sources!==void 0&&(P._sources._nextSource=e),P._sources=e,t._node=e,P._flags&se&&t._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=P._sources,e._nextSource=void 0,P._sources._nextSource=e,P._sources=e),e}function L(t){this._value=t,this._version=0,this._node=void 0,this._targets=void 0}L.prototype.brand=Dn;L.prototype._refresh=()=>!0;L.prototype._subscribe=function(t){this._targets!==t&&t._prevTarget===void 0&&(t._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=t),this._targets=t)};L.prototype._unsubscribe=function(t){if(this._targets!==void 0){let e=t._prevTarget,n=t._nextTarget;e!==void 0&&(e._nextTarget=n,t._prevTarget=void 0),n!==void 0&&(n._prevTarget=e,t._nextTarget=void 0),t===this._targets&&(this._targets=n)}};L.prototype.subscribe=function(t){return Ne(()=>{let e=this.value,n=P;P=void 0;try{t(e)}finally{P=n}})};L.prototype.valueOf=function(){return this.value};L.prototype.toString=function(){return`${this.value}`};L.prototype.toJSON=function(){return this.value};L.prototype.peek=function(){let t=P;P=void 0;try{return this.value}finally{P=t}};Object.defineProperty(L.prototype,"value",{get(){let t=pt(this);return t!==void 0&&(t._version=this._version),this._value},set(t){if(t!==this._value){if($e>100)throw B(ie,"SignalCycleDetected");let e=this._value,n=t;this._value=t,this._version++,Me++,Ge();try{for(let r=this._targets;r!==void 0;r=r._nextTarget)r._target._notify()}finally{Ue()}this?._onChange({old:e,revised:n})}}});function mt(t){for(let e=t._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function gt(t){for(let e=t._sources;e!==void 0;e=e._nextSource){let n=e._source._node;if(n!==void 0&&(e._rollbackNode=n),e._source._node=e,e._version=-1,e._nextSource===void 0){t._sources=e;break}}}function ht(t){let e=t._sources,n;for(;e!==void 0;){let r=e._prevSource;e._version===-1?(e._source._unsubscribe(e),r!==void 0&&(r._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=r)):n=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=r}t._sources=n}function ee(t){L.call(this,void 0),this._fn=t,this._sources=void 0,this._globalVersion=Me-1,this._flags=ge}ee.prototype=new L;ee.prototype._refresh=function(){if(this._flags&=~oe,this._flags&j)return!1;if((this._flags&(ge|se))===se||(this._flags&=~ge,this._globalVersion===Me))return!0;if(this._globalVersion=Me,this._flags|=j,this._version>0&&!mt(this))return this._flags&=~j,!0;let t=P;try{gt(this),P=this;let e=this._fn();(this._flags&xe||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~xe,this._version++)}catch(e){this._value=e,this._flags|=xe,this._version++}return P=t,ht(this),this._flags&=~j,!0};ee.prototype._subscribe=function(t){if(this._targets===void 0){this._flags|=ge|se;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}L.prototype._subscribe.call(this,t)};ee.prototype._unsubscribe=function(t){if(this._targets!==void 0&&(L.prototype._unsubscribe.call(this,t),this._targets===void 0)){this._flags&=~se;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}};ee.prototype._notify=function(){if(!(this._flags&oe)){this._flags|=ge|oe;for(let t=this._targets;t!==void 0;t=t._nextTarget)t._target._notify()}};Object.defineProperty(ee.prototype,"value",{get(){if(this._flags&j)throw B(ie,"SignalCycleDetected");let t=pt(this);if(this._refresh(),t!==void 0&&(t._version=this._version),this._flags&xe)throw B(ie,"GetComputedError",{value:this._value});return this._value}});function vt(t){return new ee(t)}function yt(t){let e=t._cleanup;if(t._cleanup=void 0,typeof e=="function"){Ge();let n=P;P=void 0;try{e()}catch(r){throw t._flags&=~j,t._flags|=ae,Be(t),B(ie,"CleanupEffectError",{error:r})}finally{P=n,Ue()}}}function Be(t){for(let e=t._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);t._fn=void 0,t._sources=void 0,yt(t)}function Vn(t){if(P!==this)throw B(ie,"EndEffectError");ht(this),P=t,this._flags&=~j,this._flags&ae&&Be(this),Ue()}function he(t){this._fn=t,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=se}he.prototype._callback=function(){let t=this._start();try{if(this._flags&ae||this._fn===void 0)return;let e=this._fn();typeof e=="function"&&(this._cleanup=e)}finally{t()}};he.prototype._start=function(){if(this._flags&j)throw B(ie,"SignalCycleDetected");this._flags|=j,this._flags&=~ae,yt(this),gt(this),Ge();let t=P;return P=this,Vn.bind(this,t)};he.prototype._notify=function(){this._flags&oe||(this._flags|=oe,this._nextBatchedEffect=me,me=this)};he.prototype._dispose=function(){this._flags|=ae,this._flags&j||Be(this)};function Ne(t){let e=new he(t);try{e._callback()}catch(n){throw e._dispose(),n}return e._dispose.bind(e)}var bt="namespacedSignals",le=t=>{document.dispatchEvent(new CustomEvent(fe,{detail:Object.assign({added:[],removed:[],updated:[]},t)}))};function St(t,e=!1){let n={};for(let r in t)if(Object.hasOwn(t,r)){if(e&&r.startsWith("_"))continue;let i=t[r];i instanceof L?n[r]=i.value:n[r]=St(i)}return n}function Tt(t,e,n=!1){let r={added:[],removed:[],updated:[]};for(let i in e)if(Object.hasOwn(e,i)){if(i.match(/\_\_+/))throw B(bt,"InvalidSignalKey",{key:i});let s=e[i];if(s instanceof Object&&!Array.isArray(s)){t[i]||(t[i]={});let u=Tt(t[i],s,n);r.added.push(...u.added.map(a=>`${i}.${a}`)),r.removed.push(...u.removed.map(a=>`${i}.${a}`)),r.updated.push(...u.updated.map(a=>`${i}.${a}`))}else{if(Object.hasOwn(t,i)){if(n)continue;let p=t[i];if(p instanceof L){let S=p.value;p.value=s,S!==s&&r.updated.push(i);continue}}let a=new L(s);a._onChange=()=>{le({updated:[i]})},t[i]=a,r.added.push(i)}}return r}function At(t,e){for(let n in t)if(Object.hasOwn(t,n)){let r=t[n];r instanceof L?e(n,r):At(r,(i,s)=>{e(`${n}.${i}`,s)})}}function kn(t,...e){let n={};for(let r of e){let i=r.split("."),s=t,u=n;for(let p=0;p<i.length-1;p++){let S=i[p];if(!s[S])return{};u[S]||(u[S]={}),s=s[S],u=u[S]}let a=i[i.length-1];u[a]=s[a]}return n}var Ce=class{#e={};exists(e){return!!this.signal(e)}signal(e){let n=e.split("."),r=this.#e;for(let u=0;u<n.length-1;u++){let a=n[u];if(!r[a])return null;r=r[a]}let i=n[n.length-1],s=r[i];if(!s)throw B(bt,"SignalNotFound",{path:e});return s}setSignal(e,n){let r=e.split("."),i=this.#e;for(let u=0;u<r.length-1;u++){let a=r[u];i[a]||(i[a]={}),i=i[a]}let s=r[r.length-1];i[s]=n}setComputed(e,n){let r=vt(()=>n());this.setSignal(e,r)}value(e){return this.signal(e)?.value}setValue(e,n){let{signal:r}=this.upsertIfMissing(e,n),i=r.value;r.value=n,i!==n&&le({updated:[e]})}upsertIfMissing(e,n){let r=e.split("."),i=this.#e;for(let p=0;p<r.length-1;p++){let S=r[p];i[S]||(i[S]={}),i=i[S]}let s=r[r.length-1],u=i[s];if(u instanceof L)return{signal:u,inserted:!1};let a=new L(n);return a._onChange=()=>{le({updated:[e]})},i[s]=a,le({added:[e]}),{signal:a,inserted:!0}}remove(...e){if(!e.length){this.#e={};return}let n=Array();for(let r of e){let i=r.split("."),s=this.#e;for(let a=0;a<i.length-1;a++){let p=i[a];if(!s[p])return;s=s[p]}let u=i[i.length-1];delete s[u],n.push(r)}le({removed:n})}merge(e,n=!1){let r=Tt(this.#e,e,n);(r.added.length||r.removed.length||r.updated.length)&&le(r)}subset(...e){return kn(this.values(),...e)}walk(e){At(this.#e,e)}paths(){let e=new Array;return this.walk(n=>e.push(n)),e}values(e=!1){return St(this.#e,e)}JSON(e=!0,n=!1){let r=this.values(n);return e?JSON.stringify(r,null,2):JSON.stringify(r)}toString(){return this.JSON()}};var Et=new Ce,Ke=[],Pe={},On=[],te=new Map,je=null,Je="";function ze(t){Je=t}function Ie(...t){for(let e of t){let n={plugin:e,signals:Et,effect:i=>Ne(i),actions:Pe,removals:te,applyToElement:Le},r;switch(e.type){case 2:{let i=e;On.push(i),r=i.onGlobalInit;break}case 3:{Pe[e.name]=e;break}case 1:{let i=e;Ke.push(i),r=i.onGlobalInit;break}default:throw W("InvalidPluginType",n)}r&&r(n)}Ke.sort((e,n)=>{let r=n.name.length-e.name.length;return r!==0?r:e.name.localeCompare(n.name)})}function Ye(){Le(document.documentElement),Hn()}function Le(t){pe(t,e=>{let n=new Array,r=te.get(e.id)||new Map,i=new Map([...r]),s=new Map;for(let u of Object.keys(e.dataset)){if(!u.startsWith(Je))break;let a=e.dataset[u]||"",p=Re(u,a);s.set(u,p),r.has(p)?i.delete(p):n.push(u)}for(let[u,a]of i)a();for(let u of n){let a=s.get(u);Fn(e,u,a)}})}function Hn(){je||(je=new MutationObserver(t=>{let e=new Set,n=new Set;for(let{target:r,type:i,addedNodes:s,removedNodes:u}of t)switch(i){case"childList":{for(let a of u)e.add(a);for(let a of s)n.add(a)}break;case"attributes":{n.add(r);break}}for(let r of e){let i=te.get(r.id);if(i){for(let[s,u]of i)u(),i.delete(s);i.size===0&&te.delete(r.id)}}for(let r of n)Le(r)}),je.observe(document.body,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0}))}function Fn(t,e,n){let r=Z(e.slice(Je.length)),i=Ke.find(A=>r.startsWith(A.name));if(!i)return;t.id.length||(t.id=_e(t));let[s,...u]=r.slice(i.name.length).split(/\_\_+/),a=s.length>0;a&&(s=Z(s));let p=t.dataset[e]||"",S=p.length>0,v={signals:Et,applyToElement:Le,effect:A=>Ne(A),actions:Pe,removals:te,genRX:()=>qn(v,...i.argNames||[]),plugin:i,el:t,rawKey:r,key:s,value:p,mods:new Map},w=i.keyReq||0;if(a){if(w===2)throw C(`${i.name}KeyNotAllowed`,v)}else if(w===1)throw C(`${i.name}KeyRequired`,v);let b=i.valReq||0;if(S){if(b===2)throw C(`${i.name}ValueNotAllowed`,v)}else if(b===1)throw C(`${i.name}ValueRequired`,v);if(w===3||b===3){if(a&&S)throw C(`${i.name}KeyAndValueProvided`,v);if(!a&&!S)throw C(`${i.name}KeyOrValueRequired`,v)}for(let A of u){let[_,...m]=A.split(".");v.mods.set(Z(_),new Set(m.map(o=>o.toLowerCase())))}let T=i.onLoad(v)??(()=>{}),y=te.get(t.id);y||(y=new Map,te.set(t.id,y)),y.set(n,T)}function qn(t,...e){let n="",r=/(\/(\\\/|[^\/])*\/|"(\\"|[^\"])*"|'(\\'|[^'])*'|`(\\`|[^`])*`|[^;])+/gm,i=t.value.trim().match(r);if(i){let T=i.length-1,y=i[T].trim();y.startsWith("return")||(i[T]=`return (${y});`),n=i.join(`;
`)}let s=new Map,u=new RegExp(`(?:${Se})(.*?)(?:${Fe})`,"gm");for(let T of n.matchAll(u)){let y=T[1],A=new re("dsEscaped").with(y).string;s.set(A,y),n=n.replace(Se+y+Fe,A)}let a=/@(\w*)\(/gm,p=n.matchAll(a),S=new Set;for(let T of p)S.add(T[1]);let v=new RegExp(`@(${Object.keys(Pe).join("|")})\\(`,"gm");n=n.replaceAll(v,"ctx.actions.$1.fn(ctx,");let w=t.signals.paths();if(w.length){let T=new RegExp(`\\$(${w.join("|")})(\\W|$)`,"gm");n=n.replaceAll(T,"ctx.signals.signal('$1').value$2")}for(let[T,y]of s)n=n.replace(T,y);let b=`return (()=> {
${n}
})()`;t.fnContent=b;try{let T=new Function("ctx",...e,b);return(...y)=>{try{return T(t,...y)}catch(A){throw C("ExecuteExpression",t,{error:A.message})}}}catch(T){throw C("GenerateExpression",t,{error:T.message})}}Ie(dt,ft,ct);async function Wn(t,e){let n=t.getReader(),r;for(;!(r=await n.read()).done;)e(r.value)}function $n(t){let e,n,r,i=!1;return function(u){e===void 0?(e=u,n=0,r=-1):e=Un(e,u);let a=e.length,p=0;for(;n<a;){i&&(e[n]===10&&(p=++n),i=!1);let S=-1;for(;n<a&&S===-1;++n)switch(e[n]){case 58:r===-1&&(r=n-p);break;case 13:i=!0;case 10:S=n;break}if(S===-1)break;t(e.subarray(p,S),r),p=n,r=-1}p===a?e=void 0:p!==0&&(e=e.subarray(p),n-=p)}}function Gn(t,e,n){let r=_t(),i=new TextDecoder;return function(u,a){if(u.length===0)n?.(r),r=_t();else if(a>0){let p=i.decode(u.subarray(0,a)),S=a+(u[a+1]===32?2:1),v=i.decode(u.subarray(S));switch(p){case"data":r.data=r.data?`${r.data}
${v}`:v;break;case"event":r.event=v;break;case"id":t(r.id=v);break;case"retry":{let w=Number.parseInt(v,10);Number.isNaN(w)||e(r.retry=w);break}}}}}function Un(t,e){let n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function _t(){return{data:"",event:"",id:"",retry:void 0}}var Bn="text/event-stream",Rt="last-event-id";function xt(t,e,{signal:n,headers:r,onopen:i,onmessage:s,onclose:u,onerror:a,openWhenHidden:p,fetch:S,retryInterval:v=1e3,retryScaler:w=2,retryMaxWaitMs:b=3e4,retryMaxCount:T=10,...y}){return new Promise((A,_)=>{let m=0,o={...r};o.accept||(o.accept=Bn);let c;function l(){c.abort(),document.hidden||E()}p||document.addEventListener("visibilitychange",l);let f=0;function h(){document.removeEventListener("visibilitychange",l),window.clearTimeout(f),c.abort()}n?.addEventListener("abort",()=>{h(),A()});let g=S??window.fetch,d=i??function(){};async function E(){c=new AbortController;try{let x=await g(e,{...y,headers:o,signal:c.signal});await d(x),await Wn(x.body,$n(Gn(R=>{R?o[Rt]=R:delete o[Rt]},R=>{v=R},s))),u?.(),h(),A()}catch(x){if(!c.signal.aborted)try{let R=a?.(x)??v;window.clearTimeout(f),f=window.setTimeout(E,R),v*=w,v=Math.min(v,b),m++,m>=T?(h(),_(C("SseMaxRetries",t,{retryMaxCount:T}))):console.error(`Datastar failed to reach ${y.method}: ${e.toString()} retry in ${R}ms`)}catch(R){h(),_(R)}}}E()})}var ue=`${H}-sse`,Xe=`${H}-settling`,ne=`${H}-swapping`,De="started",Ve="finished",wt="error",Mt="retrying";function K(t,e){document.addEventListener(ue,n=>{if(n.detail.type!==t)return;let{argsRaw:r}=n.detail;e(r)})}function ve(t,e){document.dispatchEvent(new CustomEvent(ue,{detail:{type:t,argsRaw:e}}))}var Nt=t=>`${t}`.includes("text/event-stream"),J=async(t,e,n,r)=>{let{el:{id:i},el:s,signals:u}=t,{headers:a,contentType:p,includeLocal:S,selector:v,openWhenHidden:w,retryInterval:b,retryScaler:T,retryMaxWaitMs:y,retryMaxCount:A,abort:_}=Object.assign({headers:{},contentType:"json",includeLocal:!1,selector:null,openWhenHidden:!1,retryInterval:ot,retryScaler:2,retryMaxWaitMs:3e4,retryMaxCount:10,abort:void 0},r),m=e.toLowerCase(),o=()=>{};try{if(ve(De,{elId:i}),!n?.length)throw C("SseNoUrlProvided",t,{action:m});let c={};c[it]=!0,p==="json"&&(c["Content-Type"]="application/json");let l=Object.assign({},c,a),f={method:e,headers:l,openWhenHidden:w,retryInterval:b,retryScaler:T,retryMaxWaitMs:y,retryMaxCount:A,signal:_,onopen:async d=>{if(d.status>=400){let E=d.status.toString();ve(wt,{status:E})}},onmessage:d=>{if(!d.event.startsWith(H))return;let E=d.event,x={},R=d.data.split(`
`);for(let D of R){let I=D.indexOf(" "),O=D.slice(0,I),V=x[O];V||(V=[],x[O]=V);let $=D.slice(I+1);V.push($)}let N={};for(let[D,I]of Object.entries(x))N[D]=I.join(`
`);ve(E,N)},onerror:d=>{if(Nt(d))throw C("InvalidContentType",t,{url:n});d&&(console.error(d.message),ve(Mt,{message:d.message}))}},h=new URL(n,window.location.origin),g=new URLSearchParams(h.search);if(p==="json"){let d=u.JSON(!1,!S);e==="GET"?g.set(H,d):f.body=d}else if(p==="form"){let d=v?document.querySelector(v):s.closest("form");if(d===null)throw v?C("SseFormNotFound",t,{action:m,selector:v}):C("SseClosestFormNotFound",t,{action:m});if(s!==d){let x=R=>R.preventDefault();d.addEventListener("submit",x),o=()=>d.removeEventListener("submit",x)}if(!d.checkValidity()){d.reportValidity(),o();return}let E=new FormData(d);if(e==="GET"){let x=new URLSearchParams(E);for(let[R,N]of x)g.set(R,N)}else f.body=E}else throw C("SseInvalidContentType",t,{action:m,contentType:p});h.search=g.toString();try{await xt(t,h.toString(),f)}catch(d){if(!Nt(d))throw C("SseFetchFailed",t,{method:e,url:n,error:d})}}finally{ve(Ve,{elId:i}),o()}};var Ct={type:3,name:"delete",fn:async(t,e,n)=>J(t,"DELETE",e,{...n})};var Pt={type:3,name:"get",fn:async(t,e,n)=>J(t,"GET",e,{...n})};var It={type:3,name:"patch",fn:async(t,e,n)=>J(t,"PATCH",e,{...n})};var Lt={type:3,name:"post",fn:async(t,e,n)=>J(t,"POST",e,{...n})};var Dt={type:3,name:"put",fn:async(t,e,n)=>J(t,"PUT",e,{...n})};var Vt={type:1,name:"indicator",keyReq:3,valReq:3,onLoad:({el:t,key:e,mods:n,signals:r,value:i})=>{let s=e?k(e,n):Y(i),{signal:u}=r.upsertIfMissing(s,!1),a=p=>{let{type:S,argsRaw:{elId:v}}=p.detail;if(v===t.id)switch(S){case De:u.value=!0;break;case Ve:u.value=!1;break}};return document.addEventListener(ue,a),()=>{document.removeEventListener(ue,a)}}};var kt={type:2,name:F.ExecuteScript,onGlobalInit:async t=>{K(F.ExecuteScript,({autoRemove:e=`${lt}`,attributes:n=st,script:r})=>{let i=z(e);if(!r?.length)throw W("NoScriptProvided",t);let s=document.createElement("script");for(let u of n.split(`
`)){let a=u.indexOf(" "),p=a?u.slice(0,a):u,S=a?u.slice(a):"";s.setAttribute(p.trim(),S.trim())}s.text=r,document.head.appendChild(s),i&&s.remove()})}};var ye=document,X=!!ye.startViewTransition;var Ot=function(){"use strict";let t=()=>{},e={morphStyle:"outerHTML",callbacks:{beforeNodeAdded:t,afterNodeAdded:t,beforeNodeMorphed:t,afterNodeMorphed:t,beforeNodeRemoved:t,afterNodeRemoved:t,beforeAttributeUpdated:t},head:{style:"merge",shouldPreserve:b=>b.getAttribute("im-preserve")==="true",shouldReAppend:b=>b.getAttribute("im-re-append")==="true",shouldRemove:t,afterHeadMorphed:t},restoreFocus:!0};function n(b,T,y={}){b=v(b);let A=w(T),_=S(b,A,y),m=i(_,()=>a(_,b,A,o=>o.morphStyle==="innerHTML"?(s(o,b,A),Array.from(b.childNodes)):r(o,b,A)));return _.pantry.remove(),m}function r(b,T,y){let A=w(T),_=Array.from(A.childNodes),m=_.indexOf(T),o=_.length-(m+1);return s(b,A,y,T,T.nextSibling),_=Array.from(A.childNodes),_.slice(m,_.length-o)}function i(b,T){if(!b.config.restoreFocus)return T();let y=document.activeElement;if(!(y instanceof HTMLInputElement||y instanceof HTMLTextAreaElement))return T();let{id:A,selectionStart:_,selectionEnd:m}=y,o=T();return A&&A!==document.activeElement?.id&&(y=b.target.querySelector(`#${A}`),y?.focus()),y&&!y.selectionEnd&&m&&y.setSelectionRange(_,m),o}let s=function(){function b(l,f,h,g=null,d=null){f instanceof HTMLTemplateElement&&h instanceof HTMLTemplateElement&&(f=f.content,h=h.content),g||=f.firstChild;for(let E of h.childNodes){if(g&&g!=d){let R=y(l,E,g,d);if(R){R!==g&&_(l,g,R),u(R,E,l),g=R.nextSibling;continue}}if(E instanceof Element&&l.persistentIds.has(E.id)){let R=m(f,E.id,g,l);u(R,E,l),g=R.nextSibling;continue}let x=T(f,E,g,l);x&&(g=x.nextSibling)}for(;g&&g!=d;){let E=g;g=g.nextSibling,A(l,E)}}function T(l,f,h,g){if(g.callbacks.beforeNodeAdded(f)===!1)return null;if(g.idMap.has(f)){let d=document.createElement(f.tagName);return l.insertBefore(d,h),u(d,f,g),g.callbacks.afterNodeAdded(d),d}else{let d=document.importNode(f,!0);return l.insertBefore(d,h),g.callbacks.afterNodeAdded(d),d}}let y=function(){function l(g,d,E,x){let R=null,N=d.nextSibling,D=0,I=E;for(;I&&I!=x;){if(h(I,d)){if(f(g,I,d))return I;R===null&&(g.idMap.has(I)||(R=I))}if(R===null&&N&&h(I,N)&&(D++,N=N.nextSibling,D>=2&&(R=void 0)),I.contains(document.activeElement))break;I=I.nextSibling}return R||null}function f(g,d,E){let x=g.idMap.get(d),R=g.idMap.get(E);if(!R||!x)return!1;for(let N of x)if(R.has(N))return!0;return!1}function h(g,d){let E=g,x=d;return E.nodeType===x.nodeType&&E.tagName===x.tagName&&(!E.id||E.id===x.id)}return l}();function A(l,f){if(l.idMap.has(f))c(l.pantry,f,null);else{if(l.callbacks.beforeNodeRemoved(f)===!1)return;f.parentNode?.removeChild(f),l.callbacks.afterNodeRemoved(f)}}function _(l,f,h){let g=f;for(;g&&g!==h;){let d=g;g=g.nextSibling,A(l,d)}return g}function m(l,f,h,g){let d=g.target.querySelector(`#${f}`)||g.pantry.querySelector(`#${f}`);return o(d,g),c(l,d,h),d}function o(l,f){let h=l.id;for(;l=l.parentNode;){let g=f.idMap.get(l);g&&(g.delete(h),g.size||f.idMap.delete(l))}}function c(l,f,h){if(l.moveBefore)try{l.moveBefore(f,h)}catch{l.insertBefore(f,h)}else l.insertBefore(f,h)}return b}(),u=function(){function b(o,c,l){return l.ignoreActive&&o===document.activeElement?null:(l.callbacks.beforeNodeMorphed(o,c)===!1||(o instanceof HTMLHeadElement&&l.head.ignore||(o instanceof HTMLHeadElement&&l.head.style!=="morph"?p(o,c,l):(T(o,c,l),m(o,l)||s(l,o,c))),l.callbacks.afterNodeMorphed(o,c)),o)}function T(o,c,l){let f=c.nodeType;if(f===1){let h=o,g=c,d=h.attributes,E=g.attributes;for(let x of E)_(x.name,h,"update",l)||h.getAttribute(x.name)!==x.value&&h.setAttribute(x.name,x.value);for(let x=d.length-1;0<=x;x--){let R=d[x];if(R&&!g.hasAttribute(R.name)){if(_(R.name,h,"remove",l))continue;h.removeAttribute(R.name)}}m(h,l)||y(h,g,l)}(f===8||f===3)&&o.nodeValue!==c.nodeValue&&(o.nodeValue=c.nodeValue)}function y(o,c,l){if(o instanceof HTMLInputElement&&c instanceof HTMLInputElement&&c.type!=="file"){let f=c.value,h=o.value;A(o,c,"checked",l),A(o,c,"disabled",l),c.hasAttribute("value")?h!==f&&(_("value",o,"update",l)||(o.setAttribute("value",f),o.value=f)):_("value",o,"remove",l)||(o.value="",o.removeAttribute("value"))}else if(o instanceof HTMLOptionElement&&c instanceof HTMLOptionElement)A(o,c,"selected",l);else if(o instanceof HTMLTextAreaElement&&c instanceof HTMLTextAreaElement){let f=c.value,h=o.value;if(_("value",o,"update",l))return;f!==h&&(o.value=f),o.firstChild&&o.firstChild.nodeValue!==f&&(o.firstChild.nodeValue=f)}}function A(o,c,l,f){let h=c[l],g=o[l];if(h!==g){let d=_(l,o,"update",f);d||(o[l]=c[l]),h?d||o.setAttribute(l,""):_(l,o,"remove",f)||o.removeAttribute(l)}}function _(o,c,l,f){return o==="value"&&f.ignoreActiveValue&&c===document.activeElement?!0:f.callbacks.beforeAttributeUpdated(o,c,l)===!1}function m(o,c){return!!c.ignoreActiveValue&&o===document.activeElement&&o!==document.body}return b}();function a(b,T,y,A){if(b.head.block){let _=T.querySelector("head"),m=y.querySelector("head");if(_&&m){let o=p(_,m,b);return Promise.all(o).then(()=>{let c=Object.assign(b,{head:{block:!1,ignore:!0}});return A(c)})}}return A(b)}function p(b,T,y){let A=[],_=[],m=[],o=[],c=new Map;for(let f of T.children)c.set(f.outerHTML,f);for(let f of b.children){let h=c.has(f.outerHTML),g=y.head.shouldReAppend(f),d=y.head.shouldPreserve(f);h||d?g?_.push(f):(c.delete(f.outerHTML),m.push(f)):y.head.style==="append"?g&&(_.push(f),o.push(f)):y.head.shouldRemove(f)!==!1&&_.push(f)}o.push(...c.values());let l=[];for(let f of o){let h=document.createRange().createContextualFragment(f.outerHTML).firstChild;if(y.callbacks.beforeNodeAdded(h)!==!1){if("href"in h&&h.href||"src"in h&&h.src){let g,d=new Promise(function(E){g=E});h.addEventListener("load",function(){g()}),l.push(d)}b.appendChild(h),y.callbacks.afterNodeAdded(h),A.push(h)}}for(let f of _)y.callbacks.beforeNodeRemoved(f)!==!1&&(b.removeChild(f),y.callbacks.afterNodeRemoved(f));return y.head.afterHeadMorphed(b,{added:A,kept:m,removed:_}),l}let S=function(){function b(c,l,f){let{persistentIds:h,idMap:g}=m(c,l),d=T(f),E=d.morphStyle||"outerHTML";if(!["innerHTML","outerHTML"].includes(E))throw`Do not understand how to morph style ${E}`;return{target:c,newContent:l,config:d,morphStyle:E,ignoreActive:d.ignoreActive,ignoreActiveValue:d.ignoreActiveValue,restoreFocus:d.restoreFocus,idMap:g,persistentIds:h,pantry:y(),callbacks:d.callbacks,head:d.head}}function T(c){let l=Object.assign({},e);return Object.assign(l,c),l.callbacks=Object.assign({},e.callbacks,c.callbacks),l.head=Object.assign({},e.head,c.head),l}function y(){let c=document.createElement("div");return c.hidden=!0,document.body.insertAdjacentElement("afterend",c),c}function A(c){let l=Array.from(c.querySelectorAll("[id]"));return c.id&&l.push(c),l}function _(c,l,f,h){for(let g of h)if(l.has(g.id)){let d=g;for(;d;){let E=c.get(d);if(E==null&&(E=new Set,c.set(d,E)),E.add(g.id),d===f)break;d=d.parentElement}}}function m(c,l){let f=A(c),h=A(l),g=o(f,h),d=new Map;_(d,g,c,f);let E=l.__idiomorphRoot||l;return _(d,g,E,h),{persistentIds:g,idMap:d}}function o(c,l){let f=new Set,h=new Map;for(let{id:d,tagName:E}of c)h.has(d)?f.add(d):h.set(d,E);let g=new Set;for(let{id:d,tagName:E}of l)g.has(d)?f.add(d):h.get(d)===E&&g.add(d);for(let d of f)g.delete(d);return g}return b}(),{normalizeElement:v,normalizeParent:w}=function(){let b=new WeakSet;function T(m){return m instanceof Document?m.documentElement:m}function y(m){if(m==null)return document.createElement("div");if(typeof m=="string")return y(_(m));if(b.has(m))return m;if(m instanceof Node){if(m.parentNode)return A(m);{let o=document.createElement("div");return o.append(m),o}}else{let o=document.createElement("div");for(let c of[...m])o.append(c);return o}}function A(m){return{childNodes:[m],querySelectorAll:o=>{let c=m.querySelectorAll(o);return m.matches(o)?[m,...c]:c},insertBefore:(o,c)=>m.parentNode.insertBefore(o,c),moveBefore:(o,c)=>m.parentNode.moveBefore(o,c),get __idiomorphRoot(){return m}}}function _(m){let o=new DOMParser,c=m.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");if(c.match(/<\/html>/)||c.match(/<\/head>/)||c.match(/<\/body>/)){let l=o.parseFromString(m,"text/html");if(c.match(/<\/html>/))return b.add(l),l;{let f=l.firstChild;return f&&b.add(f),f}}else{let f=o.parseFromString("<body><template>"+m+"</template></body>","text/html").body.querySelector("template").content;return b.add(f),f}}return{normalizeElement:T,normalizeParent:y}}();return{morph:n,defaults:e}}();var Ft={type:2,name:F.MergeFragments,onGlobalInit:async t=>{let e=document.createElement("template");K(F.MergeFragments,({fragments:n="<div></div>",selector:r="",mergeMode:i=ut,settleDuration:s=`${Te}`,useViewTransition:u=`${Ae}`})=>{let a=Number.parseInt(s),p=z(u);e.innerHTML=n.trim();let S=[...e.content.children];for(let v of S){if(!(v instanceof Element))throw W("NoFragmentsFound",t);let w=r||`#${v.getAttribute("id")}`,b=[...document.querySelectorAll(w)||[]];if(!b.length)throw W("NoTargetsFound",t,{selectorOrID:w});p&&X?ye.startViewTransition(()=>Ht(t,i,a,v,b)):Ht(t,i,a,v,b)}})}};function Ht(t,e,n,r,i){for(let s of i){s.classList.add(ne);let u=s.outerHTML,a=s;switch(e){case U.Morph:{let v=r.cloneNode(!0);pe(v,w=>{!w.id?.length&&Object.keys(w.dataset).length&&(w.id=_e(w));let b=t.removals.get(w.id);if(b){let T=new Map;for(let[y,A]of b){let _=Re(y,y);T.set(_,A),b.delete(y)}t.removals.set(w.id,T)}}),Ot.morph(a,v);break}case U.Inner:a.innerHTML=r.outerHTML;break;case U.Outer:a.replaceWith(r);break;case U.Prepend:a.prepend(r);break;case U.Append:a.append(r);break;case U.Before:a.before(r);break;case U.After:a.after(r);break;case U.UpsertAttributes:for(let v of r.getAttributeNames()){let w=r.getAttribute(v);a.setAttribute(v,w)}break;default:throw W("InvalidMergeMode",t,{mergeMode:e})}let p=a.classList;p?.add(ne),setTimeout(()=>{s.classList.remove(ne),p?.remove(ne)},n);let S=a.outerHTML;p&&u!==S&&(p.add(Xe),setTimeout(()=>{p.remove(Xe)},n))}}var qt={type:2,name:F.MergeSignals,onGlobalInit:async t=>{K(F.MergeSignals,({signals:e="{}",onlyIfMissing:n=`${at}`})=>{let{signals:r}=t,i=z(n);r.merge(Ee(e),i)})}};var Wt={type:2,name:F.RemoveFragments,onGlobalInit:async t=>{K(F.RemoveFragments,({selector:e,settleDuration:n=`${Te}`,useViewTransition:r=`${Ae}`})=>{if(!e.length)throw W("NoSelectorProvided",t);let i=Number.parseInt(n),s=z(r),u=document.querySelectorAll(e),a=()=>{for(let p of u)p.classList.add(ne);setTimeout(()=>{for(let p of u)p.remove()},i)};s&&X?ye.startViewTransition(()=>a()):a()})}};var $t={type:2,name:F.RemoveSignals,onGlobalInit:async t=>{K(F.RemoveSignals,({paths:e=""})=>{let n=e.split(`
`).map(r=>r.trim());if(!n?.length)throw W("NoPathsProvided",t);t.signals.remove(...n)})}};var Gt={type:3,name:"clipboard",fn:(t,e)=>{if(!navigator.clipboard)throw C("ClipboardNotAvailable",t);navigator.clipboard.writeText(e)}};var Ut={type:1,name:"customValidity",keyReq:2,valReq:1,onLoad:t=>{let{el:e,genRX:n,effect:r}=t;if(!(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement))throw C("CustomValidityInvalidElement",t);let i=n();return r(()=>{let s=i();if(typeof s!="string")throw C("CustomValidityInvalidExpression",t,{result:s});e.setCustomValidity(s)})}};var Bt="once",jt="half",Kt="full",Jt={type:1,name:"intersects",keyReq:2,mods:new Set([Bt,jt,Kt]),onLoad:({el:t,rawKey:e,mods:n,genRX:r})=>{let i={threshold:0};n.has(Kt)?i.threshold=1:n.has(jt)&&(i.threshold=.5);let s=r(),u=new IntersectionObserver(a=>{for(let p of a)p.isIntersecting&&(s(),n.has(Bt)&&(u.disconnect(),delete t.dataset[e]))},i);return u.observe(t),()=>u.disconnect()}};var zt="session",Yt={type:1,name:"persist",mods:new Set([zt]),onLoad:({key:t,effect:e,mods:n,signals:r,value:i})=>{t=k(t,n),t===""&&(t=H);let s=n.has(zt)?sessionStorage:localStorage,u=i.split(/\s+/).filter(S=>S!=="");u=u.map(S=>Y(S));let a=()=>{let S=s.getItem(t)||"{}",v=JSON.parse(S);r.merge(v)},p=()=>{let S;u.length?S=r.subset(...u):S=r.values(),s.setItem(t,JSON.stringify(S))};return a(),e(()=>{p()})}};var Xt={type:1,name:"replaceUrl",keyReq:2,valReq:1,onLoad:({effect:t,genRX:e})=>{let n=e();return t(()=>{let r=n(),i=window.location.href,s=new URL(r,i).toString();window.history.replaceState({},"",s)})}};var ke="smooth",Qe="instant",Ze="auto",Qt="hstart",Zt="hcenter",en="hend",tn="hnearest",nn="vstart",rn="vcenter",on="vend",sn="vnearest",jn="focus",Oe="center",an="start",ln="end",un="nearest",cn={type:1,name:"scrollIntoView",keyReq:2,valReq:2,mods:new Set([ke,Qe,Ze,Qt,Zt,en,tn,nn,rn,on,sn,jn]),onLoad:t=>{let{el:e,mods:n,rawKey:r}=t;e.tabIndex||e.setAttribute("tabindex","0");let i={behavior:ke,block:Oe,inline:Oe};if(n.has(ke)&&(i.behavior=ke),n.has(Qe)&&(i.behavior=Qe),n.has(Ze)&&(i.behavior=Ze),n.has(Qt)&&(i.inline=an),n.has(Zt)&&(i.inline=Oe),n.has(en)&&(i.inline=ln),n.has(tn)&&(i.inline=un),n.has(nn)&&(i.block=an),n.has(rn)&&(i.block=Oe),n.has(on)&&(i.block=ln),n.has(sn)&&(i.block=un),!(e instanceof HTMLElement||e instanceof SVGElement))throw C("ScrollIntoViewInvalidElement",t);e.tabIndex||e.setAttribute("tabindex","0"),e.scrollIntoView(i),n.has("focus")&&e.focus(),delete e.dataset[r]}};var fn="none",dn="display",pn={type:1,name:"show",keyReq:2,valReq:1,onLoad:({el:{style:t},genRX:e,effect:n})=>{let r=e();return n(async()=>{r()?t.display===fn&&t.removeProperty(dn):t.setProperty(dn,fn)})}};var mn="view-transition",gn={type:1,name:"viewTransition",keyReq:2,valReq:1,onGlobalInit(){let t=!1;for(let e of document.head.childNodes)e instanceof HTMLMetaElement&&e.name===mn&&(t=!0);if(!t){let e=document.createElement("meta");e.name=mn,e.content="same-origin",document.head.appendChild(e)}},onLoad:({effect:t,el:e,genRX:n})=>{if(!X){console.error("Browser does not support view transitions");return}let r=n();return t(()=>{let i=r();if(!i?.length)return;let s=e.style;s.viewTransitionName=i})}};var hn={type:1,name:"attr",valReq:1,onLoad:({el:t,key:e,effect:n,genRX:r})=>{let i=r();return e===""?n(async()=>{let s=i();for(let[u,a]of Object.entries(s))a===!1?t.removeAttribute(u):t.setAttribute(u,a)}):(e=de(e),n(async()=>{let s=!1;try{s=i()}catch{}let u;typeof s=="string"?u=s:u=JSON.stringify(s),!u||u==="false"||u==="null"||u==="undefined"?t.removeAttribute(e):t.setAttribute(e,u)}))}};var Kn=/^data:(?<mime>[^;]+);base64,(?<contents>.*)$/,vn=["change","input","keydown"],yn={type:1,name:"bind",keyReq:3,valReq:3,onLoad:t=>{let{el:e,key:n,mods:r,signals:i,value:s,effect:u}=t,a=e,p=n?k(n,r):Y(s),S=e.tagName.toLowerCase(),v=S.includes("input"),w=S.includes("select"),b=e.getAttribute("type"),T=e.hasAttribute("value"),y="",A=v&&b==="checkbox";A&&(y=T?"":!1);let _=v&&b==="number";_&&(y=0);let m=v&&b==="radio";m&&(e.getAttribute("name")?.length||e.setAttribute("name",p));let o=v&&b==="file",{signal:c,inserted:l}=i.upsertIfMissing(p,y),f=-1;Array.isArray(c.value)&&(e.getAttribute("name")===null&&e.setAttribute("name",p),f=[...document.querySelectorAll(`[name="${p}"]`)].findIndex(N=>N===t.el));let h=f>=0,g=()=>[...i.value(p)],d=()=>{let N=i.value(p);h&&!w&&(N=N[f]||y);let D=`${N}`;if(A||m)typeof N=="boolean"?a.checked=N:a.checked=D===a.value;else if(w){let I=e;if(I.multiple){if(!h)throw C("BindSelectMultiple",t);for(let O of I.options){if(O?.disabled)return;let V=_?Number(O.value):O.value;O.selected=N.includes(V)}}else I.value=D}else o||("value"in e?e.value=D:e.setAttribute("value",D))},E=async()=>{let N=i.value(p);if(h){let V=N;for(;f>=V.length;)V.push(y);N=V[f]||y}let D=(V,$)=>{let G=$;h&&!w&&(G=g(),G[f]=$),i.setValue(V,G)};if(o){let V=[...a?.files||[]],$=[],G=[],tt=[];await Promise.all(V.map(nt=>new Promise(Nn=>{let Q=new FileReader;Q.onload=()=>{if(typeof Q.result!="string")throw C("InvalidFileResultType",t,{resultType:typeof Q.result});let He=Q.result.match(Kn);if(!He?.groups)throw C("InvalidDataUri",t,{result:Q.result});$.push(He.groups.contents),G.push(He.groups.mime),tt.push(nt.name)},Q.onloadend=()=>Nn(void 0),Q.readAsDataURL(nt)}))),D(p,$),D(`${p}Mimes`,G),D(`${p}Names`,tt);return}let I=a.value||"",O;if(A){let V=a.checked||a.getAttribute("checked")==="true";T?O=V?I:"":O=V}else if(w){let $=[...e.selectedOptions];h?O=$.filter(G=>G.selected).map(G=>G.value):O=$[0]?.value||y}else typeof N=="boolean"?O=!!I:typeof N=="number"?O=Number(I):O=I||"";D(p,O)};l&&E();for(let N of vn)e.addEventListener(N,E);let x=N=>{N.persisted&&E()};window.addEventListener("pageshow",x);let R=u(()=>d());return()=>{R();for(let N of vn)e.removeEventListener(N,E);window.removeEventListener("pageshow",x)}}};var bn={type:1,name:"class",valReq:1,onLoad:({el:t,key:e,mods:n,effect:r,genRX:i})=>{let s=t.classList,u=i();return r(()=>{if(e===""){let a=u();for(let[p,S]of Object.entries(a)){let v=p.split(/\s+/);S?s.add(...v):s.remove(...v)}}else e=k(e,n),u()?s.add(e):s.remove(e)})}};function be(t){if(!t||t.size<=0)return 0;for(let e of t){if(e.endsWith("ms"))return Number(e.replace("ms",""));if(e.endsWith("s"))return Number(e.replace("s",""))*1e3;try{return Number.parseFloat(e)}catch{}}return 0}function ce(t,e,n=!1){return t?t.has(e.toLowerCase()):n}function Sn(t,e){return(...n)=>{setTimeout(()=>{t(...n)},e)}}function Tn(t,e,n=!1,r=!0){let i=-1,s=()=>i&&clearTimeout(i);return(...u)=>{s(),n&&!i&&t(...u),i=setTimeout(()=>{r&&t(...u),s()},e)}}function An(t,e,n=!0,r=!1){let i=!1;return(...s)=>{i||(n&&t(...s),i=!0,setTimeout(()=>{i=!1,r&&t(...s)},e))}}var Jn="evt",et="signalsChange",zn=et.length,En={type:1,name:"on",keyReq:1,valReq:1,argNames:[Jn],onLoad:({el:t,key:e,mods:n,rawKey:r,signals:i,value:s,effect:u,genRX:a})=>{let p=a(),S=t;n.has("window")&&(S=window);let v=m=>{m&&((n.has("prevent")||e==="submit")&&m.preventDefault(),n.has("stop")&&m.stopPropagation()),p(m)},w=n.get("delay");if(w){let m=be(w);v=Sn(v,m)}let b=n.get("debounce");if(b){let m=be(b),o=ce(b,"leading",!1),c=!ce(b,"notrail",!1);v=Tn(v,m,o,c)}let T=n.get("throttle");if(T){let m=be(T),o=!ce(T,"noleading",!1),c=ce(T,"trail",!1);v=An(v,m,o,c)}if(n.has("viewtransition")&&X){let m=v;v=(...o)=>document.startViewTransition(()=>m(...o))}let y={capture:!0,passive:!1,once:!1};if(n.has("capture")||(y.capture=!1),n.has("passive")&&(y.passive=!0),n.has("once")&&(y.once=!0),e==="load")return setTimeout(v,0),()=>{};if(e==="interval"){let m=1e3,o=n.get("duration");o&&(m=be(o),ce(o,"leading",!1)&&v());let c=setInterval(v,m);return()=>{clearInterval(c)}}if(e==="raf"){let m,o=()=>{v(),m=requestAnimationFrame(o)};return m=requestAnimationFrame(o),()=>{m&&cancelAnimationFrame(m)}}if(e.startsWith(et)){if(e===et){let c=l=>v(l);return document.addEventListener(fe,c),()=>{document.removeEventListener(fe,c)}}let m=k(Z(e.slice(zn)),n),o=new Map;return i.walk((c,l)=>{c.startsWith(m)&&o.set(l,l.value)}),u(()=>{for(let[c,l]of o)l!==c.value&&(v(),o.set(c,c.value))})}if(n.has("outside")){S=document;let m=v;v=c=>{let l=c?.target;t.contains(l)||m(c)}}let _=k(e,n);return S.addEventListener(_,v,y),()=>{S.removeEventListener(_,v)}}};var _n={type:1,name:"ref",keyReq:3,valReq:3,onLoad:({el:t,key:e,mods:n,signals:r,value:i})=>{let s=e?k(e,n):Y(i);r.setValue(s,t)}};var Rn={type:1,name:"text",keyReq:2,valReq:1,onLoad:t=>{let{el:e,effect:n,genRX:r}=t,i=r();return e instanceof HTMLElement||C("TextInvalidElement",t),n(()=>{let s=i(t);e.textContent=`${s}`})}};var{round:Yn,max:Xn,min:Qn}=Math,xn={type:3,name:"fit",fn:(t,e,n,r,i,s,u=!1,a=!1)=>{let p=(e-n)/(r-n)*(s-i)+i;return a&&(p=Yn(p)),u&&(p=Xn(i,Qn(s,p))),p}};var wn={type:3,name:"setAll",fn:({signals:t},e,n)=>{t.walk((r,i)=>{r.startsWith(e)&&(i.value=n)})}};var Mn={type:3,name:"toggleAll",fn:({signals:t},e)=>{t.walk((n,r)=>{n.startsWith(e)&&(r.value=!r.value)})}};ze("ds");Ie(hn,yn,bn,En,_n,pn,Rn,Vt,Pt,Lt,Dt,It,Ct,Ft,qt,Wt,$t,kt,Gt,Ut,Jt,Yt,Xt,cn,gn,xn,wn,Mn);Ye();export{Ye as apply,Ie as load,ze as setAlias};
//# sourceMappingURL=datastar-aliased.js.map
