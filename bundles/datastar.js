// Datastar v1.0.0-beta.9
var Ze=/🖕JS_DS🚀/.source,be=Ze.slice(0,5),Oe=Ze.slice(4),q="datastar",et="Datastar-Request",tt=1e3,nt="type module",Se=!1,rt=!1,it=!0,U={Morph:"morph",Inner:"inner",Outer:"outer",Prepend:"prepend",Append:"append",Before:"before",After:"after",UpsertAttributes:"upsertAttributes"},ot=U.Morph,H={MergeFragments:"datastar-merge-fragments",MergeSignals:"datastar-merge-signals",RemoveFragments:"datastar-remove-fragments",RemoveSignals:"datastar-remove-signals",ExecuteScript:"datastar-execute-script"};var R=(r=>(r[r.Attribute=1]="Attribute",r[r.Watcher=2]="Watcher",r[r.Action=3]="Action",r))(R||{});var ce=`${q}-signals`;var J=t=>t.trim()==="true",fe=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,n)=>(n?"-":"")+e.toLowerCase()),Z=t=>fe(t).replace(/-./g,e=>e[1].toUpperCase()),He=t=>fe(t).replace(/-/g,"_"),xn=t=>Z(t).replace(/^./,e=>e[0].toUpperCase()),Te=t=>new Function(`return Object.assign({}, ${t})`)(),Y=t=>t.startsWith("$")?t.slice(1):t,Mn={kebab:fe,snake:He,pascal:xn};function D(t,e){for(let n of e.get("case")||[]){let r=Mn[n];r&&(t=r(t))}return t}var Nn="computed",st={type:1,name:Nn,keyReq:1,valReq:1,onLoad:({key:t,mods:e,signals:n,genRX:r})=>{t=D(t,e);let i=r();n.setComputed(t,i)}};var at={type:1,name:"signals",onLoad:t=>{let{key:e,mods:n,signals:r,value:i,genRX:o}=t,s=n.has("ifmissing");if(e!==""){let f=D(e,n),c=i===""?i:o()();s?r.upsertIfMissing(f,c):r.setValue(f,c)}else{let f=Te(t.value);t.value=JSON.stringify(f);let y=o()();r.merge(y,s)}}};var lt={type:1,name:"star",keyReq:2,valReq:2,onLoad:()=>{alert("YOU ARE PROBABLY OVERCOMPLICATING IT")}};var ne=class{#e=0;#t;constructor(e=q){this.#t=e}with(e){if(typeof e=="string")for(let n of e.split(""))this.with(n.charCodeAt(0));else typeof e=="boolean"?this.with(1<<(e?7:3)):this.#e=this.#e*33^e;return this}get value(){return this.#e}get string(){return this.#t+Math.abs(this.#e).toString(36)}};function Ee(t){if(t.id)return t.id;let e=new ne,n=t;for(;n;){if(e.with(n.tagName||""),n.id){e.with(n.id);break}let r=n?.parentNode;r&&e.with([...r.children].indexOf(n)),n=r}return e.string}function Ae(t,e){return new ne().with(t).with(e).value}function de(t,e){if(!t||!(t instanceof HTMLElement||t instanceof SVGElement))return null;let n=t.dataset;if("starIgnore"in n)return null;"starIgnore__self"in n||e(t);let r=t.firstElementChild;for(;r;)de(r,e),r=r.nextElementSibling}var Cn="https://data-star.dev/errors";function Fe(t,e,n={}){let r=new Error;r.name=`${q} ${t} error`;let i=He(e),o=new URLSearchParams({metadata:JSON.stringify(n)}).toString(),s=JSON.stringify(n,null,2);return r.message=`${e}
More info: ${Cn}/${t}/${i}?${o}
Context: ${s}`,r}function B(t,e,n={}){return Fe("internal",e,Object.assign({from:t},n))}function W(t,e,n={}){let r={plugin:{name:e.plugin.name,type:R[e.plugin.type]}};return Fe("init",t,Object.assign(r,n))}function N(t,e,n={}){let r={plugin:{name:e.plugin.name,type:R[e.plugin.type]},element:{id:e.el.id,tag:e.el.tagName},expression:{rawKey:e.rawKey,key:e.key,value:e.value,validSignals:e.signals.paths(),fnContent:e.fnContent}};return Fe("runtime",t,Object.assign(r,n))}var re="preact-signals",Pn=Symbol.for("preact-signals"),j=1,ie=2,me=4,se=8,_e=16,oe=32;function We(){we++}function $e(){if(we>1){we--;return}let t,e=!1;for(;pe!==void 0;){let n=pe;for(pe=void 0,qe++;n!==void 0;){let r=n._nextBatchedEffect;if(n._nextBatchedEffect=void 0,n._flags&=~ie,!(n._flags&se)&&ct(n))try{n._callback()}catch(i){e||(t=i,e=!0)}n=r}}if(qe=0,we--,e)throw t}var P;var pe,we=0,qe=0,Re=0;function ut(t){if(P===void 0)return;let e=t._node;if(e===void 0||e._target!==P)return e={_version:0,_source:t,_prevSource:P._sources,_nextSource:void 0,_target:P,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},P._sources!==void 0&&(P._sources._nextSource=e),P._sources=e,t._node=e,P._flags&oe&&t._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=P._sources,e._nextSource=void 0,P._sources._nextSource=e,P._sources=e),e}function V(t){this._value=t,this._version=0,this._node=void 0,this._targets=void 0}V.prototype.brand=Pn;V.prototype._refresh=()=>!0;V.prototype._subscribe=function(t){this._targets!==t&&t._prevTarget===void 0&&(t._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=t),this._targets=t)};V.prototype._unsubscribe=function(t){if(this._targets!==void 0){let e=t._prevTarget,n=t._nextTarget;e!==void 0&&(e._nextTarget=n,t._prevTarget=void 0),n!==void 0&&(n._prevTarget=e,t._nextTarget=void 0),t===this._targets&&(this._targets=n)}};V.prototype.subscribe=function(t){return xe(()=>{let e=this.value,n=P;P=void 0;try{t(e)}finally{P=n}})};V.prototype.valueOf=function(){return this.value};V.prototype.toString=function(){return`${this.value}`};V.prototype.toJSON=function(){return this.value};V.prototype.peek=function(){let t=P;P=void 0;try{return this.value}finally{P=t}};Object.defineProperty(V.prototype,"value",{get(){let t=ut(this);return t!==void 0&&(t._version=this._version),this._value},set(t){if(t!==this._value){if(qe>100)throw B(re,"SignalCycleDetected");let e=this._value,n=t;this._value=t,this._version++,Re++,We();try{for(let r=this._targets;r!==void 0;r=r._nextTarget)r._target._notify()}finally{$e()}this?._onChange({old:e,revised:n})}}});function ct(t){for(let e=t._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function ft(t){for(let e=t._sources;e!==void 0;e=e._nextSource){let n=e._source._node;if(n!==void 0&&(e._rollbackNode=n),e._source._node=e,e._version=-1,e._nextSource===void 0){t._sources=e;break}}}function dt(t){let e=t._sources,n;for(;e!==void 0;){let r=e._prevSource;e._version===-1?(e._source._unsubscribe(e),r!==void 0&&(r._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=r)):n=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=r}t._sources=n}function ee(t){V.call(this,void 0),this._fn=t,this._sources=void 0,this._globalVersion=Re-1,this._flags=me}ee.prototype=new V;ee.prototype._refresh=function(){if(this._flags&=~ie,this._flags&j)return!1;if((this._flags&(me|oe))===oe||(this._flags&=~me,this._globalVersion===Re))return!0;if(this._globalVersion=Re,this._flags|=j,this._version>0&&!ct(this))return this._flags&=~j,!0;let t=P;try{ft(this),P=this;let e=this._fn();(this._flags&_e||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~_e,this._version++)}catch(e){this._value=e,this._flags|=_e,this._version++}return P=t,dt(this),this._flags&=~j,!0};ee.prototype._subscribe=function(t){if(this._targets===void 0){this._flags|=me|oe;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}V.prototype._subscribe.call(this,t)};ee.prototype._unsubscribe=function(t){if(this._targets!==void 0&&(V.prototype._unsubscribe.call(this,t),this._targets===void 0)){this._flags&=~oe;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}};ee.prototype._notify=function(){if(!(this._flags&ie)){this._flags|=me|ie;for(let t=this._targets;t!==void 0;t=t._nextTarget)t._target._notify()}};Object.defineProperty(ee.prototype,"value",{get(){if(this._flags&j)throw B(re,"SignalCycleDetected");let t=ut(this);if(this._refresh(),t!==void 0&&(t._version=this._version),this._flags&_e)throw B(re,"GetComputedError",{value:this._value});return this._value}});function pt(t){return new ee(t)}function mt(t){let e=t._cleanup;if(t._cleanup=void 0,typeof e=="function"){We();let n=P;P=void 0;try{e()}catch(r){throw t._flags&=~j,t._flags|=se,Ge(t),B(re,"CleanupEffectError",{error:r})}finally{P=n,$e()}}}function Ge(t){for(let e=t._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);t._fn=void 0,t._sources=void 0,mt(t)}function In(t){if(P!==this)throw B(re,"EndEffectError");dt(this),P=t,this._flags&=~j,this._flags&se&&Ge(this),$e()}function ge(t){this._fn=t,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=oe}ge.prototype._callback=function(){let t=this._start();try{if(this._flags&se||this._fn===void 0)return;let e=this._fn();typeof e=="function"&&(this._cleanup=e)}finally{t()}};ge.prototype._start=function(){if(this._flags&j)throw B(re,"SignalCycleDetected");this._flags|=j,this._flags&=~se,mt(this),ft(this),We();let t=P;return P=this,In.bind(this,t)};ge.prototype._notify=function(){this._flags&ie||(this._flags|=ie,this._nextBatchedEffect=pe,pe=this)};ge.prototype._dispose=function(){this._flags|=se,this._flags&j||Ge(this)};function xe(t){let e=new ge(t);try{e._callback()}catch(n){throw e._dispose(),n}return e._dispose.bind(e)}var gt="namespacedSignals",ae=t=>{document.dispatchEvent(new CustomEvent(ce,{detail:Object.assign({added:[],removed:[],updated:[]},t)}))};function ht(t,e=!1){let n={};for(let r in t)if(Object.hasOwn(t,r)){if(e&&r.startsWith("_"))continue;let i=t[r];i instanceof V?n[r]=i.value:n[r]=ht(i)}return n}function vt(t,e,n=!1){let r={added:[],removed:[],updated:[]};for(let i in e)if(Object.hasOwn(e,i)){if(i.match(/\_\_+/))throw B(gt,"InvalidSignalKey",{key:i});let o=e[i];if(o instanceof Object&&!Array.isArray(o)){t[i]||(t[i]={});let s=vt(t[i],o,n);r.added.push(...s.added.map(f=>`${i}.${f}`)),r.removed.push(...s.removed.map(f=>`${i}.${f}`)),r.updated.push(...s.updated.map(f=>`${i}.${f}`))}else{if(Object.hasOwn(t,i)){if(n)continue;let c=t[i];if(c instanceof V){let y=c.value;c.value=o,y!==o&&r.updated.push(i);continue}}let f=new V(o);f._onChange=()=>{ae({updated:[i]})},t[i]=f,r.added.push(i)}}return r}function yt(t,e){for(let n in t)if(Object.hasOwn(t,n)){let r=t[n];r instanceof V?e(n,r):yt(r,(i,o)=>{e(`${n}.${i}`,o)})}}function Vn(t,...e){let n={};for(let r of e){let i=r.split("."),o=t,s=n;for(let c=0;c<i.length-1;c++){let y=i[c];if(!o[y])return{};s[y]||(s[y]={}),o=o[y],s=s[y]}let f=i[i.length-1];s[f]=o[f]}return n}var Me=class{#e={};exists(e){return!!this.signal(e)}signal(e){let n=e.split("."),r=this.#e;for(let s=0;s<n.length-1;s++){let f=n[s];if(!r[f])return null;r=r[f]}let i=n[n.length-1],o=r[i];if(!o)throw B(gt,"SignalNotFound",{path:e});return o}setSignal(e,n){let r=e.split("."),i=this.#e;for(let s=0;s<r.length-1;s++){let f=r[s];i[f]||(i[f]={}),i=i[f]}let o=r[r.length-1];i[o]=n}setComputed(e,n){let r=pt(()=>n());this.setSignal(e,r)}value(e){return this.signal(e)?.value}setValue(e,n){let{signal:r}=this.upsertIfMissing(e,n),i=r.value;r.value=n,i!==n&&ae({updated:[e]})}upsertIfMissing(e,n){let r=e.split("."),i=this.#e;for(let c=0;c<r.length-1;c++){let y=r[c];i[y]||(i[y]={}),i=i[y]}let o=r[r.length-1],s=i[o];if(s instanceof V)return{signal:s,inserted:!1};let f=new V(n);return f._onChange=()=>{ae({updated:[e]})},i[o]=f,ae({added:[e]}),{signal:f,inserted:!0}}remove(...e){if(!e.length){this.#e={};return}let n=Array();for(let r of e){let i=r.split("."),o=this.#e;for(let f=0;f<i.length-1;f++){let c=i[f];if(!o[c])return;o=o[c]}let s=i[i.length-1];delete o[s],n.push(r)}ae({removed:n})}merge(e,n=!1){let r=vt(this.#e,e,n);(r.added.length||r.removed.length||r.updated.length)&&ae(r)}subset(...e){return Vn(this.values(),...e)}walk(e){yt(this.#e,e)}paths(){let e=new Array;return this.walk(n=>e.push(n)),e}values(e=!1){return ht(this.#e,e)}JSON(e=!0,n=!1){let r=this.values(n);return e?JSON.stringify(r,null,2):JSON.stringify(r)}toString(){return this.JSON()}};var bt=new Me,Be=[],Ne={},Ln=[],te=new Map,Ue=null,je="";function St(t){je=t}function Ce(...t){for(let e of t){let n={plugin:e,signals:bt,effect:i=>xe(i),actions:Ne,removals:te,applyToElement:Pe},r;switch(e.type){case 2:{let i=e;Ln.push(i),r=i.onGlobalInit;break}case 3:{Ne[e.name]=e;break}case 1:{let i=e;Be.push(i),r=i.onGlobalInit;break}default:throw W("InvalidPluginType",n)}r&&r(n)}Be.sort((e,n)=>{let r=n.name.length-e.name.length;return r!==0?r:e.name.localeCompare(n.name)})}function Ke(){queueMicrotask(()=>{Pe(document.documentElement),kn()})}function Pe(t){de(t,e=>{let n=new Array,r=te.get(e.id)||new Map,i=new Map([...r]),o=new Map;for(let s of Object.keys(e.dataset)){if(!s.startsWith(je))break;let f=e.dataset[s]||"",c=Ae(s,f);o.set(s,c),r.has(c)?i.delete(c):n.push(s)}for(let[s,f]of i)f();for(let s of n){let f=o.get(s);Dn(e,s,f)}})}function kn(){Ue||(Ue=new MutationObserver(t=>{let e=new Set,n=new Set;for(let{target:r,type:i,addedNodes:o,removedNodes:s}of t)switch(i){case"childList":{for(let f of s)e.add(f);for(let f of o)n.add(f)}break;case"attributes":{n.add(r);break}}for(let r of e){let i=te.get(r.id);if(i){for(let[o,s]of i)s(),i.delete(o);i.size===0&&te.delete(r.id)}}for(let r of n)Pe(r)}),Ue.observe(document.body,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0}))}function Dn(t,e,n){let r=Z(e.slice(je.length)),i=Be.find(g=>r.startsWith(g.name));if(!i)return;t.id.length||(t.id=Ee(t));let[o,...s]=r.slice(i.name.length).split(/\_\_+/),f=o.length>0;f&&(o=Z(o));let c=t.dataset[e]||"",y=c.length>0,A={signals:bt,applyToElement:Pe,effect:g=>xe(g),actions:Ne,removals:te,genRX:()=>On(A,...i.argNames||[]),plugin:i,el:t,rawKey:r,key:o,value:c,mods:new Map},C=i.keyReq||0;if(f){if(C===2)throw N(`${i.name}KeyNotAllowed`,A)}else if(C===1)throw N(`${i.name}KeyRequired`,A);let S=i.valReq||0;if(y){if(S===2)throw N(`${i.name}ValueNotAllowed`,A)}else if(S===1)throw N(`${i.name}ValueRequired`,A);if(C===3||S===3){if(f&&y)throw N(`${i.name}KeyAndValueProvided`,A);if(!f&&!y)throw N(`${i.name}KeyOrValueRequired`,A)}for(let g of s){let[T,...v]=g.split(".");A.mods.set(Z(T),new Set(v.map(a=>a.toLowerCase())))}let _=i.onLoad(A)??(()=>{}),b=te.get(t.id);b||(b=new Map,te.set(t.id,b)),b.set(n,_)}function On(t,...e){let n="",r=/(\/(\\\/|[^\/])*\/|"(\\"|[^\"])*"|'(\\'|[^'])*'|`(\\`|[^`])*`|[^;])+/gm,i=t.value.trim().match(r);if(i){let _=i.length-1,b=i[_].trim();b.startsWith("return")||(i[_]=`return (${b});`),n=i.join(`;
`)}let o=new Map,s=new RegExp(`(?:${be})(.*?)(?:${Oe})`,"gm");for(let _ of n.matchAll(s)){let b=_[1],g=new ne("dsEscaped").with(b).string;o.set(g,b),n=n.replace(be+b+Oe,g)}let f=/@(\w*)\(/gm,c=n.matchAll(f),y=new Set;for(let _ of c)y.add(_[1]);let A=new RegExp(`@(${Object.keys(Ne).join("|")})\\(`,"gm");n=n.replaceAll(A,"ctx.actions.$1.fn(ctx,");let C=t.signals.paths();if(C.length){let _=new RegExp(`\\$(${C.join("|")})(\\W|$)`,"gm");n=n.replaceAll(_,"ctx.signals.signal('$1').value$2")}for(let[_,b]of o)n=n.replace(_,b);let S=`return (() => {
${n}
})()`;t.fnContent=S;try{let _=new Function("ctx",...e,S);return(...b)=>{try{return _(t,...b)}catch(g){throw N("ExecuteExpression",t,{error:g.message})}}}catch(_){throw N("GenerateExpression",t,{error:_.message})}}Ce(lt,at,st);async function Hn(t,e){let n=t.getReader(),r;for(;!(r=await n.read()).done;)e(r.value)}function Fn(t){let e,n,r,i=!1;return function(s){e===void 0?(e=s,n=0,r=-1):e=Wn(e,s);let f=e.length,c=0;for(;n<f;){i&&(e[n]===10&&(c=++n),i=!1);let y=-1;for(;n<f&&y===-1;++n)switch(e[n]){case 58:r===-1&&(r=n-c);break;case 13:i=!0;case 10:y=n;break}if(y===-1)break;t(e.subarray(c,y),r),c=n,r=-1}c===f?e=void 0:c!==0&&(e=e.subarray(c),n-=c)}}function qn(t,e,n){let r=Tt(),i=new TextDecoder;return function(s,f){if(s.length===0)n?.(r),r=Tt();else if(f>0){let c=i.decode(s.subarray(0,f)),y=f+(s[f+1]===32?2:1),A=i.decode(s.subarray(y));switch(c){case"data":r.data=r.data?`${r.data}
${A}`:A;break;case"event":r.event=A;break;case"id":t(r.id=A);break;case"retry":{let C=Number.parseInt(A,10);Number.isNaN(C)||e(r.retry=C);break}}}}}function Wn(t,e){let n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function Tt(){return{data:"",event:"",id:"",retry:void 0}}var $n="text/event-stream",Et="last-event-id";function At(t,{signal:e,headers:n,onopen:r,onmessage:i,onclose:o,onerror:s,openWhenHidden:f,fetch:c,retryInterval:y=1e3,retryScaler:A=2,retryMaxWaitMs:C=3e4,retryMaxCount:S=10,..._}){return new Promise((b,g)=>{let T=0,v={...n};v.accept||(v.accept=$n);let a;function p(){a.abort(),document.hidden||d()}f||document.addEventListener("visibilitychange",p);let u=0;function l(){document.removeEventListener("visibilitychange",p),window.clearTimeout(u),a.abort()}e?.addEventListener("abort",()=>{l(),b()});let h=c??window.fetch,m=r??function(){};async function d(){a=new AbortController;try{let E=await h(t,{..._,headers:v,signal:a.signal});await m(E),await Hn(E.body,Fn(qn(w=>{w?v[Et]=w:delete v[Et]},w=>{y=w},i))),o?.(),l(),b()}catch(E){if(!a.signal.aborted)try{let w=s?.(E)??y;window.clearTimeout(u),u=window.setTimeout(d,w),y*=A,y=Math.min(y,C),T++,T>S?(l(),g("Max retries reached.")):console.error(`Datastar failed to reach ${t.toString()} retrying in ${w}ms.`)}catch(w){l(),g(w)}}}d()})}var le=`${q}-sse`,Ie="started",Ve="finished",_t="error",wt="retrying";function K(t,e){document.addEventListener(le,n=>{if(n.detail.type!==t)return;let{argsRaw:r}=n.detail;e(r)})}function he(t,e){document.dispatchEvent(new CustomEvent(le,{detail:{type:t,argsRaw:e}}))}var Rt=t=>`${t}`.includes("text/event-stream"),z=async(t,e,n,r)=>{let{el:{id:i},el:o,signals:s}=t,{headers:f,contentType:c,includeLocal:y,selector:A,openWhenHidden:C,retryInterval:S,retryScaler:_,retryMaxWaitMs:b,retryMaxCount:g,abort:T}=Object.assign({headers:{},contentType:"json",includeLocal:!1,selector:null,openWhenHidden:!1,retryInterval:tt,retryScaler:2,retryMaxWaitMs:3e4,retryMaxCount:10,abort:void 0},r),v=e.toLowerCase(),a=()=>{};try{if(he(Ie,{elId:i}),!n?.length)throw N("SseNoUrlProvided",t,{action:v});let p={};p[et]=!0,c==="json"&&(p["Content-Type"]="application/json");let u=Object.assign({},p,f),l={method:e,headers:u,openWhenHidden:C,retryInterval:S,retryScaler:_,retryMaxWaitMs:b,retryMaxCount:g,signal:T,onopen:async d=>{if(d.status>=400){let E=d.status.toString();he(_t,{status:E})}},onmessage:d=>{if(!d.event.startsWith(q))return;let E=d.event,w={},M=d.data.split(`
`);for(let L of M){let I=L.indexOf(" "),O=L.slice(0,I),k=w[O];k||(k=[],w[O]=k);let $=L.slice(I+1);k.push($)}let x={};for(let[L,I]of Object.entries(w))x[L]=I.join(`
`);he(E,x)},onerror:d=>{if(Rt(d))throw N("InvalidContentType",t,{url:n});d&&(console.error(d.message),he(wt,{message:d.message}))}},h=new URL(n,window.location.origin),m=new URLSearchParams(h.search);if(c==="json"){let d=s.JSON(!1,!y);e==="GET"?m.set(q,d):l.body=d}else if(c==="form"){let d=A?document.querySelector(A):o.closest("form");if(d===null)throw A?N("SseFormNotFound",t,{action:v,selector:A}):N("SseClosestFormNotFound",t,{action:v});if(o!==d){let w=M=>M.preventDefault();d.addEventListener("submit",w),a=()=>d.removeEventListener("submit",w)}if(!d.checkValidity()){d.reportValidity(),a();return}let E=new FormData(d);if(e==="GET"){let w=new URLSearchParams(E);for(let[M,x]of w)m.set(M,x)}else l.body=E}else throw N("SseInvalidContentType",t,{action:v,contentType:c});h.search=m.toString();try{await At(h.toString(),l)}catch(d){if(!Rt(d))throw N("SseFetchFailed",t,{method:e,url:n,error:d})}}finally{he(Ve,{elId:i}),a()}};var xt={type:3,name:"delete",fn:async(t,e,n)=>z(t,"DELETE",e,{...n})};var Mt={type:3,name:"get",fn:async(t,e,n)=>z(t,"GET",e,{...n})};var Nt={type:3,name:"patch",fn:async(t,e,n)=>z(t,"PATCH",e,{...n})};var Ct={type:3,name:"post",fn:async(t,e,n)=>z(t,"POST",e,{...n})};var Pt={type:3,name:"put",fn:async(t,e,n)=>z(t,"PUT",e,{...n})};var It={type:1,name:"indicator",keyReq:3,valReq:3,onLoad:({el:t,key:e,mods:n,signals:r,value:i})=>{let o=e?D(e,n):Y(i),{signal:s}=r.upsertIfMissing(o,!1),f=c=>{let{type:y,argsRaw:{elId:A}}=c.detail;if(A===t.id)switch(y){case Ie:s.value=!0;break;case Ve:s.value=!1;break}};return document.addEventListener(le,f),()=>{s.value=!1,document.removeEventListener(le,f)}}};var Vt={type:2,name:H.ExecuteScript,onGlobalInit:async t=>{K(H.ExecuteScript,({autoRemove:e=`${it}`,attributes:n=nt,script:r})=>{let i=J(e);if(!r?.length)throw W("NoScriptProvided",t);let o=document.createElement("script");for(let s of n.split(`
`)){let f=s.indexOf(" "),c=f?s.slice(0,f):s,y=f?s.slice(f):"";o.setAttribute(c.trim(),y.trim())}o.text=r,document.head.appendChild(o),i&&o.remove()})}};var ve=document,X=!!ve.startViewTransition;var Lt=function(){"use strict";let t=()=>{},e={morphStyle:"outerHTML",callbacks:{beforeNodeAdded:t,afterNodeAdded:t,beforeNodeMorphed:t,afterNodeMorphed:t,beforeNodeRemoved:t,afterNodeRemoved:t,beforeAttributeUpdated:t},head:{style:"merge",shouldPreserve:S=>S.getAttribute("im-preserve")==="true",shouldReAppend:S=>S.getAttribute("im-re-append")==="true",shouldRemove:t,afterHeadMorphed:t},restoreFocus:!0};function n(S,_,b={}){S=A(S);let g=C(_),T=y(S,g,b),v=i(T,()=>f(T,S,g,a=>a.morphStyle==="innerHTML"?(o(a,S,g),Array.from(S.childNodes)):r(a,S,g)));return T.pantry.remove(),v}function r(S,_,b){let g=C(_);return o(S,g,b,_,_.nextSibling),Array.from(g.childNodes)}function i(S,_){if(!S.config.restoreFocus)return _();let b=document.activeElement;if(!(b instanceof HTMLInputElement||b instanceof HTMLTextAreaElement))return _();let{id:g,selectionStart:T,selectionEnd:v}=b,a=_();return g&&g!==document.activeElement?.id&&(b=S.target.querySelector(`[id="${g}"]`),b?.focus()),b&&!b.selectionEnd&&v&&b.setSelectionRange(T,v),a}let o=function(){function S(u,l,h,m=null,d=null){l instanceof HTMLTemplateElement&&h instanceof HTMLTemplateElement&&(l=l.content,h=h.content),m||=l.firstChild;for(let E of h.childNodes){if(m&&m!=d){let M=b(u,E,m,d);if(M){M!==m&&T(u,m,M),s(M,E,u),m=M.nextSibling;continue}}if(E instanceof Element&&u.persistentIds.has(E.id)){let M=v(l,E.id,m,u);s(M,E,u),m=M.nextSibling;continue}let w=_(l,E,m,u);w&&(m=w.nextSibling)}for(;m&&m!=d;){let E=m;m=m.nextSibling,g(u,E)}}function _(u,l,h,m){if(m.callbacks.beforeNodeAdded(l)===!1)return null;if(m.idMap.has(l)){let d=document.createElement(l.tagName);return u.insertBefore(d,h),s(d,l,m),m.callbacks.afterNodeAdded(d),d}else{let d=document.importNode(l,!0);return u.insertBefore(d,h),m.callbacks.afterNodeAdded(d),d}}let b=function(){function u(m,d,E,w){let M=null,x=d.nextSibling,L=0,I=E;for(;I&&I!=w;){if(h(I,d)){if(l(m,I,d))return I;M===null&&(m.idMap.has(I)||(M=I))}if(M===null&&x&&h(I,x)&&(L++,x=x.nextSibling,L>=2&&(M=void 0)),I.contains(document.activeElement))break;I=I.nextSibling}return M||null}function l(m,d,E){let w=m.idMap.get(d),M=m.idMap.get(E);if(!M||!w)return!1;for(let x of w)if(M.has(x))return!0;return!1}function h(m,d){let E=m,w=d;return E.nodeType===w.nodeType&&E.tagName===w.tagName&&(!E.id||E.id===w.id)}return u}();function g(u,l){if(u.idMap.has(l))p(u.pantry,l,null);else{if(u.callbacks.beforeNodeRemoved(l)===!1)return;l.parentNode?.removeChild(l),u.callbacks.afterNodeRemoved(l)}}function T(u,l,h){let m=l;for(;m&&m!==h;){let d=m;m=m.nextSibling,g(u,d)}return m}function v(u,l,h,m){let d=m.target.id===l&&m.target||m.target.querySelector(`[id="${l}"]`)||m.pantry.querySelector(`[id="${l}"]`);return a(d,m),p(u,d,h),d}function a(u,l){let h=u.id;for(;u=u.parentNode;){let m=l.idMap.get(u);m&&(m.delete(h),m.size||l.idMap.delete(u))}}function p(u,l,h){if(u.moveBefore)try{u.moveBefore(l,h)}catch{u.insertBefore(l,h)}else u.insertBefore(l,h)}return S}(),s=function(){function S(a,p,u){return u.ignoreActive&&a===document.activeElement?null:(u.callbacks.beforeNodeMorphed(a,p)===!1||(a instanceof HTMLHeadElement&&u.head.ignore||(a instanceof HTMLHeadElement&&u.head.style!=="morph"?c(a,p,u):(_(a,p,u),v(a,u)||o(u,a,p))),u.callbacks.afterNodeMorphed(a,p)),a)}function _(a,p,u){let l=p.nodeType;if(l===1){let h=a,m=p,d=h.attributes,E=m.attributes;for(let w of E)T(w.name,h,"update",u)||h.getAttribute(w.name)!==w.value&&h.setAttribute(w.name,w.value);for(let w=d.length-1;0<=w;w--){let M=d[w];if(M&&!m.hasAttribute(M.name)){if(T(M.name,h,"remove",u))continue;h.removeAttribute(M.name)}}v(h,u)||b(h,m,u)}(l===8||l===3)&&a.nodeValue!==p.nodeValue&&(a.nodeValue=p.nodeValue)}function b(a,p,u){if(a instanceof HTMLInputElement&&p instanceof HTMLInputElement&&p.type!=="file"){let l=p.value,h=a.value;g(a,p,"checked",u),g(a,p,"disabled",u),p.hasAttribute("value")?h!==l&&(T("value",a,"update",u)||(a.setAttribute("value",l),a.value=l)):T("value",a,"remove",u)||(a.value="",a.removeAttribute("value"))}else if(a instanceof HTMLOptionElement&&p instanceof HTMLOptionElement)g(a,p,"selected",u);else if(a instanceof HTMLTextAreaElement&&p instanceof HTMLTextAreaElement){let l=p.value,h=a.value;if(T("value",a,"update",u))return;l!==h&&(a.value=l),a.firstChild&&a.firstChild.nodeValue!==l&&(a.firstChild.nodeValue=l)}}function g(a,p,u,l){let h=p[u],m=a[u];if(h!==m){let d=T(u,a,"update",l);d||(a[u]=p[u]),h?d||a.setAttribute(u,""):T(u,a,"remove",l)||a.removeAttribute(u)}}function T(a,p,u,l){return a==="value"&&l.ignoreActiveValue&&p===document.activeElement?!0:l.callbacks.beforeAttributeUpdated(a,p,u)===!1}function v(a,p){return!!p.ignoreActiveValue&&a===document.activeElement&&a!==document.body}return S}();function f(S,_,b,g){if(S.head.block){let T=_.querySelector("head"),v=b.querySelector("head");if(T&&v){let a=c(T,v,S);return Promise.all(a).then(()=>{let p=Object.assign(S,{head:{block:!1,ignore:!0}});return g(p)})}}return g(S)}function c(S,_,b){let g=[],T=[],v=[],a=[],p=new Map;for(let l of _.children)p.set(l.outerHTML,l);for(let l of S.children){let h=p.has(l.outerHTML),m=b.head.shouldReAppend(l),d=b.head.shouldPreserve(l);h||d?m?T.push(l):(p.delete(l.outerHTML),v.push(l)):b.head.style==="append"?m&&(T.push(l),a.push(l)):b.head.shouldRemove(l)!==!1&&T.push(l)}a.push(...p.values());let u=[];for(let l of a){let h=document.createRange().createContextualFragment(l.outerHTML).firstChild;if(b.callbacks.beforeNodeAdded(h)!==!1){if("href"in h&&h.href||"src"in h&&h.src){let m,d=new Promise(function(E){m=E});h.addEventListener("load",function(){m()}),u.push(d)}S.appendChild(h),b.callbacks.afterNodeAdded(h),g.push(h)}}for(let l of T)b.callbacks.beforeNodeRemoved(l)!==!1&&(S.removeChild(l),b.callbacks.afterNodeRemoved(l));return b.head.afterHeadMorphed(S,{added:g,kept:v,removed:T}),u}let y=function(){function S(p,u,l){let{persistentIds:h,idMap:m}=v(p,u),d=_(l),E=d.morphStyle||"outerHTML";if(!["innerHTML","outerHTML"].includes(E))throw`Do not understand how to morph style ${E}`;return{target:p,newContent:u,config:d,morphStyle:E,ignoreActive:d.ignoreActive,ignoreActiveValue:d.ignoreActiveValue,restoreFocus:d.restoreFocus,idMap:m,persistentIds:h,pantry:b(),callbacks:d.callbacks,head:d.head}}function _(p){let u=Object.assign({},e);return Object.assign(u,p),u.callbacks=Object.assign({},e.callbacks,p.callbacks),u.head=Object.assign({},e.head,p.head),u}function b(){let p=document.createElement("div");return p.hidden=!0,document.body.insertAdjacentElement("afterend",p),p}function g(p){let u=Array.from(p.querySelectorAll("[id]"));return p.id&&u.push(p),u}function T(p,u,l,h){for(let m of h)if(u.has(m.id)){let d=m;for(;d;){let E=p.get(d);if(E==null&&(E=new Set,p.set(d,E)),E.add(m.id),d===l)break;d=d.parentElement}}}function v(p,u){let l=g(p),h=g(u),m=a(l,h),d=new Map;T(d,m,p,l);let E=u.__idiomorphRoot||u;return T(d,m,E,h),{persistentIds:m,idMap:d}}function a(p,u){let l=new Set,h=new Map;for(let{id:d,tagName:E}of p)h.has(d)?l.add(d):h.set(d,E);let m=new Set;for(let{id:d,tagName:E}of u)m.has(d)?l.add(d):h.get(d)===E&&m.add(d);for(let d of l)m.delete(d);return m}return S}(),{normalizeElement:A,normalizeParent:C}=function(){let S=new WeakSet;function _(v){return v instanceof Document?v.documentElement:v}function b(v){if(v==null)return document.createElement("div");if(typeof v=="string")return b(T(v));if(S.has(v))return v;if(v instanceof Node){if(v.parentNode)return new g(v);{let a=document.createElement("div");return a.append(v),a}}else{let a=document.createElement("div");for(let p of[...v])a.append(p);return a}}class g{constructor(a){this.originalNode=a,this.realParentNode=a.parentNode,this.previousSibling=a.previousSibling,this.nextSibling=a.nextSibling}get childNodes(){let a=[],p=this.previousSibling?this.previousSibling.nextSibling:this.realParentNode.firstChild;for(;p&&p!=this.nextSibling;)a.push(p),p=p.nextSibling;return a}querySelectorAll(a){return this.childNodes.reduce((p,u)=>{if(u instanceof Element){u.matches(a)&&p.push(u);let l=u.querySelectorAll(a);for(let h=0;h<l.length;h++)p.push(l[h])}return p},[])}insertBefore(a,p){return this.realParentNode.insertBefore(a,p)}moveBefore(a,p){return this.realParentNode.moveBefore(a,p)}get __idiomorphRoot(){return this.originalNode}}function T(v){let a=new DOMParser,p=v.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");if(p.match(/<\/html>/)||p.match(/<\/head>/)||p.match(/<\/body>/)){let u=a.parseFromString(v,"text/html");if(p.match(/<\/html>/))return S.add(u),u;{let l=u.firstChild;return l&&S.add(l),l}}else{let l=a.parseFromString("<body><template>"+v+"</template></body>","text/html").body.querySelector("template").content;return S.add(l),l}}return{normalizeElement:_,normalizeParent:b}}();return{morph:n,defaults:e}}();var Dt={type:2,name:H.MergeFragments,onGlobalInit:async t=>{let e=document.createElement("template");K(H.MergeFragments,({fragments:n="<div></div>",selector:r="",mergeMode:i=ot,useViewTransition:o=`${Se}`})=>{let s=J(o);e.innerHTML=n.trim();let f=[...e.content.children];for(let c of f){if(!(c instanceof Element))throw W("NoFragmentsFound",t);let y=r||`#${c.getAttribute("id")}`,A=[...document.querySelectorAll(y)||[]];if(!A.length)throw W("NoTargetsFound",t,{selectorOrID:y});s&&X?ve.startViewTransition(()=>kt(t,i,c,A)):kt(t,i,c,A)}})}};function kt(t,e,n,r){for(let i of r)switch(e){case U.Morph:{let o=n.cloneNode(!0);de(o,s=>{!s.id?.length&&Object.keys(s.dataset).length&&(s.id=Ee(s));let f=t.removals.get(s.id);if(f){let c=new Map;for(let[y,A]of f){let C=Ae(y,y);c.set(C,A),f.delete(y)}t.removals.set(s.id,c)}}),Lt.morph(i,o);break}case U.Inner:i.innerHTML=n.outerHTML;break;case U.Outer:i.replaceWith(n);break;case U.Prepend:i.prepend(n);break;case U.Append:i.append(n);break;case U.Before:i.before(n);break;case U.After:i.after(n);break;case U.UpsertAttributes:for(let o of n.getAttributeNames()){let s=n.getAttribute(o);i.setAttribute(o,s)}break;default:throw W("InvalidMergeMode",t,{mergeMode:e})}}var Ot={type:2,name:H.MergeSignals,onGlobalInit:async t=>{K(H.MergeSignals,({signals:e="{}",onlyIfMissing:n=`${rt}`})=>{let{signals:r}=t,i=J(n);r.merge(Te(e),i)})}};var Ht={type:2,name:H.RemoveFragments,onGlobalInit:async t=>{K(H.RemoveFragments,({selector:e,useViewTransition:n=`${Se}`})=>{if(!e.length)throw W("NoSelectorProvided",t);let r=J(n),i=document.querySelectorAll(e),o=()=>{for(let s of i)s.remove()};r&&X?ve.startViewTransition(()=>o()):o()})}};var Ft={type:2,name:H.RemoveSignals,onGlobalInit:async t=>{K(H.RemoveSignals,({paths:e=""})=>{let n=e.split(`
`).map(r=>r.trim());if(!n?.length)throw W("NoPathsProvided",t);t.signals.remove(...n)})}};var qt={type:3,name:"clipboard",fn:(t,e)=>{if(!navigator.clipboard)throw N("ClipboardNotAvailable",t);navigator.clipboard.writeText(e)}};var Wt={type:1,name:"customValidity",keyReq:2,valReq:1,onLoad:t=>{let{el:e,genRX:n,effect:r}=t;if(!(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement))throw N("CustomValidityInvalidElement",t);let i=n();return r(()=>{let o=i();if(typeof o!="string")throw N("CustomValidityInvalidExpression",t,{result:o});e.setCustomValidity(o)})}};var $t="once",Gt="half",Ut="full",Bt={type:1,name:"intersects",keyReq:2,mods:new Set([$t,Gt,Ut]),onLoad:({el:t,rawKey:e,mods:n,genRX:r})=>{let i={threshold:0};n.has(Ut)?i.threshold=1:n.has(Gt)&&(i.threshold=.5);let o=r(),s=new IntersectionObserver(f=>{for(let c of f)c.isIntersecting&&(o(),n.has($t)&&(s.disconnect(),delete t.dataset[e]))},i);return s.observe(t),()=>s.disconnect()}};var jt="session",Kt={type:1,name:"persist",mods:new Set([jt]),onLoad:({key:t,effect:e,mods:n,signals:r,value:i})=>{t=D(t,n),t===""&&(t=q);let o=n.has(jt)?sessionStorage:localStorage,s=i.split(/\s+/).filter(y=>y!=="");s=s.map(y=>Y(y));let f=()=>{let y=o.getItem(t)||"{}",A=JSON.parse(y);r.merge(A)},c=()=>{let y;s.length?y=r.subset(...s):y=r.values(),o.setItem(t,JSON.stringify(y))};return f(),e(()=>{c()})}};var zt={type:1,name:"replaceUrl",keyReq:2,valReq:1,onLoad:({effect:t,genRX:e})=>{let n=e();return t(()=>{let r=n(),i=window.location.href,o=new URL(r,i).toString();window.history.replaceState({},"",o)})}};var Le="smooth",ze="instant",Je="auto",Jt="hstart",Yt="hcenter",Xt="hend",Qt="hnearest",Zt="vstart",en="vcenter",tn="vend",nn="vnearest",Gn="focus",ke="center",rn="start",on="end",sn="nearest",an={type:1,name:"scrollIntoView",keyReq:2,valReq:2,mods:new Set([Le,ze,Je,Jt,Yt,Xt,Qt,Zt,en,tn,nn,Gn]),onLoad:t=>{let{el:e,mods:n,rawKey:r}=t;e.tabIndex||e.setAttribute("tabindex","0");let i={behavior:Le,block:ke,inline:ke};if(n.has(Le)&&(i.behavior=Le),n.has(ze)&&(i.behavior=ze),n.has(Je)&&(i.behavior=Je),n.has(Jt)&&(i.inline=rn),n.has(Yt)&&(i.inline=ke),n.has(Xt)&&(i.inline=on),n.has(Qt)&&(i.inline=sn),n.has(Zt)&&(i.block=rn),n.has(en)&&(i.block=ke),n.has(tn)&&(i.block=on),n.has(nn)&&(i.block=sn),!(e instanceof HTMLElement||e instanceof SVGElement))throw N("ScrollIntoViewInvalidElement",t);e.tabIndex||e.setAttribute("tabindex","0"),e.scrollIntoView(i),n.has("focus")&&e.focus(),delete e.dataset[r]}};var ln="none",un="display",cn={type:1,name:"show",keyReq:2,valReq:1,onLoad:({el:{style:t},genRX:e,effect:n})=>{let r=e();return n(async()=>{r()?t.display===ln&&t.removeProperty(un):t.setProperty(un,ln)})}};var fn="view-transition",dn={type:1,name:"viewTransition",keyReq:2,valReq:1,onGlobalInit(){let t=!1;for(let e of document.head.childNodes)e instanceof HTMLMetaElement&&e.name===fn&&(t=!0);if(!t){let e=document.createElement("meta");e.name=fn,e.content="same-origin",document.head.appendChild(e)}},onLoad:({effect:t,el:e,genRX:n})=>{if(!X){console.error("Browser does not support view transitions");return}let r=n();return t(()=>{let i=r();if(!i?.length)return;let o=e.style;o.viewTransitionName=i})}};var pn={type:1,name:"attr",valReq:1,onLoad:({el:t,key:e,effect:n,genRX:r})=>{let i=r();return e===""?n(async()=>{let o=i();for(let[s,f]of Object.entries(o))f===!1?t.removeAttribute(s):t.setAttribute(s,f)}):(e=fe(e),n(async()=>{let o=!1;try{o=i()}catch{}let s;typeof o=="string"?s=o:s=JSON.stringify(o),!s||s==="false"||s==="null"||s==="undefined"?t.removeAttribute(e):t.setAttribute(e,s)}))}};var Un=/^data:(?<mime>[^;]+);base64,(?<contents>.*)$/,mn=["change","input","keydown"],gn={type:1,name:"bind",keyReq:3,valReq:3,onLoad:t=>{let{el:e,key:n,mods:r,signals:i,value:o,effect:s}=t,f=e,c=n?D(n,r):Y(o),y=e.tagName.toLowerCase(),A=y.includes("input"),C=y.includes("select"),S=e.getAttribute("type"),_=e.hasAttribute("value"),b="",g=A&&S==="checkbox";g&&(b=_?"":!1);let T=A&&S==="number";T&&(b=0);let v=A&&S==="radio";v&&(e.getAttribute("name")?.length||e.setAttribute("name",c));let a=A&&S==="file",{signal:p,inserted:u}=i.upsertIfMissing(c,b),l=-1;Array.isArray(p.value)&&(e.getAttribute("name")===null&&e.setAttribute("name",c),l=[...document.querySelectorAll(`[name="${c}"]`)].findIndex(x=>x===t.el));let h=l>=0,m=()=>[...i.value(c)],d=()=>{let x=i.value(c);h&&!C&&(x=x[l]||b);let L=`${x}`;if(g||v)typeof x=="boolean"?f.checked=x:f.checked=L===f.value;else if(C){let I=e;if(I.multiple){if(!h)throw N("BindSelectMultiple",t);for(let O of I.options){if(O?.disabled)return;let k=T?Number(O.value):O.value;O.selected=x.includes(k)}}else I.value=L}else a||("value"in e?e.value=L:e.setAttribute("value",L))},E=async()=>{let x=i.value(c);if(h){let k=x;for(;l>=k.length;)k.push(b);x=k[l]||b}let L=(k,$)=>{let G=$;h&&!C&&(G=m(),G[l]=$),i.setValue(k,G)};if(a){let k=[...f?.files||[]],$=[],G=[],Xe=[];await Promise.all(k.map(Qe=>new Promise(Rn=>{let Q=new FileReader;Q.onload=()=>{if(typeof Q.result!="string")throw N("InvalidFileResultType",t,{resultType:typeof Q.result});let De=Q.result.match(Un);if(!De?.groups)throw N("InvalidDataUri",t,{result:Q.result});$.push(De.groups.contents),G.push(De.groups.mime),Xe.push(Qe.name)},Q.onloadend=()=>Rn(void 0),Q.readAsDataURL(Qe)}))),L(c,$),L(`${c}Mimes`,G),L(`${c}Names`,Xe);return}let I=f.value||"",O;if(g){let k=f.checked||f.getAttribute("checked")==="true";_?O=k?I:"":O=k}else if(C){let $=[...e.selectedOptions];h?O=$.filter(G=>G.selected).map(G=>G.value):O=$[0]?.value||b}else typeof x=="boolean"?O=!!I:typeof x=="number"?O=Number(I):O=I||"";L(c,O)};u&&E();for(let x of mn)e.addEventListener(x,E);let w=x=>{x.persisted&&E()};window.addEventListener("pageshow",w);let M=s(()=>d());return()=>{M();for(let x of mn)e.removeEventListener(x,E);window.removeEventListener("pageshow",w)}}};var hn={type:1,name:"class",valReq:1,onLoad:({el:t,key:e,mods:n,effect:r,genRX:i})=>{let o=t.classList,s=i();return r(()=>{if(e===""){let f=s();for(let[c,y]of Object.entries(f)){let A=c.split(/\s+/);y?o.add(...A):o.remove(...A)}}else e=D(e,n),s()?o.add(e):o.remove(e)})}};function ye(t){if(!t||t.size<=0)return 0;for(let e of t){if(e.endsWith("ms"))return Number(e.replace("ms",""));if(e.endsWith("s"))return Number(e.replace("s",""))*1e3;try{return Number.parseFloat(e)}catch{}}return 0}function ue(t,e,n=!1){return t?t.has(e.toLowerCase()):n}function vn(t,e){return(...n)=>{setTimeout(()=>{t(...n)},e)}}function yn(t,e,n=!1,r=!0){let i=-1,o=()=>i&&clearTimeout(i);return(...s)=>{o(),n&&!i&&t(...s),i=setTimeout(()=>{r&&t(...s),o()},e)}}function bn(t,e,n=!0,r=!1){let i=!1;return(...o)=>{i||(n&&t(...o),i=!0,setTimeout(()=>{i=!1,r&&t(...o)},e))}}var Bn="evt",Ye="signalsChange",jn=Ye.length,Sn={type:1,name:"on",keyReq:1,valReq:1,argNames:[Bn],onLoad:({el:t,key:e,mods:n,signals:r,effect:i,genRX:o})=>{let s=o(),f=t;n.has("window")&&(f=window);let c=g=>{g&&((n.has("prevent")||e==="submit")&&g.preventDefault(),n.has("stop")&&g.stopPropagation()),s(g)},y=n.get("delay");if(y){let g=ye(y);c=vn(c,g)}let A=n.get("debounce");if(A){let g=ye(A),T=ue(A,"leading",!1),v=!ue(A,"notrail",!1);c=yn(c,g,T,v)}let C=n.get("throttle");if(C){let g=ye(C),T=!ue(C,"noleading",!1),v=ue(C,"trail",!1);c=bn(c,g,T,v)}if(n.has("viewtransition")&&X){let g=c;c=(...T)=>document.startViewTransition(()=>g(...T))}let S={capture:!0,passive:!1,once:!1};if(n.has("capture")||(S.capture=!1),n.has("passive")&&(S.passive=!0),n.has("once")&&(S.once=!0),e==="load")return setTimeout(c,0),()=>{};if(e==="interval"){let g=1e3,T=n.get("duration");T&&(g=ye(T),ue(T,"leading",!1)&&c());let v=setInterval(c,g);return()=>{clearInterval(v)}}if(e==="raf"){let g,T=()=>{c(),g=requestAnimationFrame(T)};return g=requestAnimationFrame(T),()=>{g&&cancelAnimationFrame(g)}}if(e==="resize"){let g=new ResizeObserver(()=>{c()});return g.observe(t),()=>{g&&(g.disconnect(),g=null)}}if(e.startsWith(Ye)){if(e===Ye){let v=a=>c(a);return document.addEventListener(ce,v),()=>{document.removeEventListener(ce,v)}}let g=D(Z(e.slice(jn)),n),T=new Map;return r.walk((v,a)=>{v.startsWith(g)&&T.set(a,a.value)}),i(()=>{for(let[v,a]of T)a!==v.value&&(c(),T.set(v,v.value))})}if(n.has("outside")){f=document;let g=c;c=v=>{let a=v?.target;t.contains(a)||g(v)}}let b=D(e,n);return f.addEventListener(b,c,S),()=>{f.removeEventListener(b,c)}}};var Tn={type:1,name:"ref",keyReq:3,valReq:3,onLoad:({el:t,key:e,mods:n,signals:r,value:i})=>{let o=e?D(e,n):Y(i);r.setValue(o,t)}};var En={type:1,name:"text",keyReq:2,valReq:1,onLoad:t=>{let{el:e,effect:n,genRX:r}=t,i=r();return e instanceof HTMLElement||N("TextInvalidElement",t),n(()=>{let o=i(t);e.textContent=`${o}`})}};var{round:Kn,max:zn,min:Jn}=Math,An={type:3,name:"fit",fn:(t,e,n,r,i,o,s=!1,f=!1)=>{let c=(e-n)/(r-n)*(o-i)+i;return f&&(c=Kn(c)),s&&(c=zn(i,Jn(o,c))),c}};var _n={type:3,name:"setAll",fn:({signals:t},e,n)=>{t.walk((r,i)=>{r.startsWith(e)&&(i.value=n)})}};var wn={type:3,name:"toggleAll",fn:({signals:t},e)=>{t.walk((n,r)=>{n.startsWith(e)&&(r.value=!r.value)})}};Ce(pn,gn,hn,Sn,Tn,cn,En,It,Mt,Ct,Pt,Nt,xt,Dt,Ot,Ht,Ft,Vt,qt,Wt,Bt,Kt,zt,an,dn,An,_n,wn);Ke();export{Ke as apply,Ce as load,St as setAlias};
//# sourceMappingURL=datastar.js.map
