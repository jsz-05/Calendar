let Et=!1,Ae=!1;function Dn(){Et=!0}const On=1,Rn=2,Cn=4,Sn=8,In=16,ke=1,Ne=2,Ut="[",De="[!",Wt="]",nt={},E=Symbol(),Ln="http://www.w3.org/1999/xhtml",Mt=!1,k=2,Kt=4,mt=8,Ct=16,I=32,z=64,dt=128,A=256,pt=512,g=1024,L=2048,W=4096,X=8192,Tt=16384,Oe=32768,$t=65536,Re=1<<17,Ce=1<<19,Gt=1<<20,Y=Symbol("$state"),Mn=Symbol("");var Xt=Array.isArray,Se=Array.prototype.indexOf,Ie=Array.from,Le=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,Me=Object.getOwnPropertyDescriptors,Pe=Object.prototype,Fe=Array.prototype,Zt=Object.getPrototypeOf;const Pn=()=>{};function Fn(t){return typeof t?.then=="function"}function qn(t){return t()}function zt(t){for(var e=0;e<t.length;e++)t[e]()}const qe=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let lt=[],ut=[];function Jt(){var t=lt;lt=[],zt(t)}function Qt(){var t=ut;ut=[],zt(t)}function je(t){lt.length===0&&queueMicrotask(Jt),lt.push(t)}function jn(t){ut.length===0&&qe(Qt),ut.push(t)}function Pt(){lt.length>0&&Jt(),ut.length>0&&Qt()}function te(t){return t===this.v}function He(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ee(t){return!He(t,this.v)}function Ye(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ve(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Be(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ue(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function We(){throw new Error("https://svelte.dev/e/hydration_failed")}function Ke(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $e(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ge(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Xe(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const st=new Map;function O(t,e){var n={f:0,v:t,reactions:null,equals:te,rv:0,wv:0};return n}function Ze(t,e=!1){const n=O(t);return e||(n.equals=ee),Et&&y!==null&&y.l!==null&&(y.l.s??=[]).push(n),n}function Hn(t,e=!1){return ze(Ze(t,e))}function ze(t){return v!==null&&!N&&(v.f&k)!==0&&(R===null?en([t]):R.push(t)),t}function C(t,e){return v!==null&&!N&&kt()&&(v.f&(k|Ct))!==0&&(R===null||!R.includes(t))&&Xe(),Nt(t,e)}function Nt(t,e){if(!t.equals(e)){var n=t.v;ft?st.set(t,e):st.set(t,n),t.v=e,t.wv=ce(),ne(t,L),kt()&&p!==null&&(p.f&g)!==0&&(p.f&(I|z))===0&&(S===null?nn([t]):S.push(t))}return e}function ne(t,e){var n=t.reactions;if(n!==null)for(var r=kt(),a=n.length,l=0;l<a;l++){var s=n[l],_=s.f;(_&L)===0&&(!r&&s===p||(D(s,e),(_&(g|A))!==0&&((_&k)!==0?ne(s,W):At(s))))}}function re(t){var e=k|L,n=v!==null&&(v.f&k)!==0?v:null;return p===null||n!==null&&(n.f&A)!==0?e|=A:p.f|=Gt,{ctx:y,deps:null,effects:null,equals:te,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??p}}function Yn(t){const e=re(t);return e.equals=ee,e}function ae(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)U(e[n])}}function Je(t){for(var e=t.parent;e!==null;){if((e.f&k)===0)return e;e=e.parent}return null}function Qe(t){var e,n=p;q(Je(t));try{ae(t),e=ve(t)}finally{q(n)}return e}function le(t){var e=Qe(t),n=(P||(t.f&A)!==0)&&t.deps!==null?W:g;D(t,n),t.equals(e)||(t.v=e,t.wv=ce())}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let T=!1;function _t(t){T=t}let h;function B(t){if(t===null)throw St(),nt;return h=t}function ue(){return B(j(h))}function Vn(t){if(T){if(j(h)!==null)throw St(),nt;h=t}}function Bn(t=1){if(T){for(var e=t,n=h;e--;)n=j(n);h=n}}function Un(){for(var t=0,e=h;;){if(e.nodeType===8){var n=e.data;if(n===Wt){if(t===0)return e;t-=1}else(n===Ut||n===De)&&(t+=1)}var r=j(e);e.remove(),e=r}}function tt(t,e=null,n){if(typeof t!="object"||t===null||Y in t)return t;const r=Zt(t);if(r!==Pe&&r!==Fe)return t;var a=new Map,l=Xt(t),s=O(0);l&&a.set("length",O(t.length));var _;return new Proxy(t,{defineProperty(f,u,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Ke();var o=a.get(u);return o===void 0?(o=O(c.value),a.set(u,o)):C(o,tt(c.value,_)),!0},deleteProperty(f,u){var c=a.get(u);if(c===void 0)u in f&&a.set(u,O(E));else{if(l&&typeof u=="string"){var o=a.get("length"),i=Number(u);Number.isInteger(i)&&i<o.v&&C(o,i)}C(c,E),Ft(s)}return!0},get(f,u,c){if(u===Y)return t;var o=a.get(u),i=u in f;if(o===void 0&&(!i||rt(f,u)?.writable)&&(o=O(tt(i?f[u]:E,_)),a.set(u,o)),o!==void 0){var d=$(o);return d===E?void 0:d}return Reflect.get(f,u,c)},getOwnPropertyDescriptor(f,u){var c=Reflect.getOwnPropertyDescriptor(f,u);if(c&&"value"in c){var o=a.get(u);o&&(c.value=$(o))}else if(c===void 0){var i=a.get(u),d=i?.v;if(i!==void 0&&d!==E)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(f,u){if(u===Y)return!0;var c=a.get(u),o=c!==void 0&&c.v!==E||Reflect.has(f,u);if(c!==void 0||p!==null&&(!o||rt(f,u)?.writable)){c===void 0&&(c=O(o?tt(f[u],_):E),a.set(u,c));var i=$(c);if(i===E)return!1}return o},set(f,u,c,o){var i=a.get(u),d=u in f;if(l&&u==="length")for(var b=c;b<i.v;b+=1){var x=a.get(b+"");x!==void 0?C(x,E):b in f&&(x=O(E),a.set(b+"",x))}i===void 0?(!d||rt(f,u)?.writable)&&(i=O(void 0),C(i,tt(c,_)),a.set(u,i)):(d=i.v!==E,C(i,tt(c,_)));var ot=Reflect.getOwnPropertyDescriptor(f,u);if(ot?.set&&ot.set.call(o,c),!d){if(l&&typeof u=="string"){var ct=a.get("length"),M=Number(u);Number.isInteger(M)&&M>=ct.v&&C(ct,M+1)}Ft(s)}return!0},ownKeys(f){$(s);var u=Reflect.ownKeys(f).filter(i=>{var d=a.get(i);return d===void 0||d.v!==E});for(var[c,o]of a)o.v!==E&&!(c in f)&&u.push(c);return u},setPrototypeOf(){$e()}})}function Ft(t,e=1){C(t,t.v+e)}function qt(t){return t!==null&&typeof t=="object"&&Y in t?t[Y]:t}function Wn(t,e){return Object.is(qt(t),qt(e))}var jt,se,ie,fe;function Dt(){if(jt===void 0){jt=window,se=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype;ie=rt(e,"firstChild").get,fe=rt(e,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function it(t=""){return document.createTextNode(t)}function Z(t){return ie.call(t)}function j(t){return fe.call(t)}function Kn(t,e){if(!T)return Z(t);var n=Z(h);if(n===null)n=h.appendChild(it());else if(e&&n.nodeType!==3){var r=it();return n?.before(r),B(r),r}return B(n),n}function $n(t,e){if(!T){var n=Z(t);return n instanceof Comment&&n.data===""?j(n):n}return h}function Gn(t,e=1,n=!1){let r=T?h:t;for(var a;e--;)a=r,r=j(r);if(!T)return r;var l=r?.nodeType;if(n&&l!==3){var s=it();return r===null?a?.after(s):r.before(s),B(s),s}return B(r),r}function tn(t){t.textContent=""}let vt=!1,ht=!1,yt=null,V=!1,ft=!1;function Ht(t){ft=t}let at=[];let v=null,N=!1;function F(t){v=t}let p=null;function q(t){p=t}let R=null;function en(t){R=t}let w=null,m=0,S=null;function nn(t){S=t}let oe=1,wt=0,P=!1,H=null;function ce(){return++oe}function J(t){var e=t.f;if((e&L)!==0)return!0;if((e&W)!==0){var n=t.deps,r=(e&A)!==0;if(n!==null){var a,l,s=(e&pt)!==0,_=r&&p!==null&&!P,f=n.length;if(s||_){var u=t,c=u.parent;for(a=0;a<f;a++)l=n[a],(s||!l?.reactions?.includes(u))&&(l.reactions??=[]).push(u);s&&(u.f^=pt),_&&c!==null&&(c.f&A)===0&&(u.f^=A)}for(a=0;a<f;a++)if(l=n[a],J(l)&&le(l),l.wv>t.wv)return!0}(!r||p!==null&&!P)&&D(t,g)}return!1}function rn(t,e){for(var n=e;n!==null;){if((n.f&dt)!==0)try{n.fn(t);return}catch{n.f^=dt}n=n.parent}throw vt=!1,t}function an(t){return(t.f&Tt)===0&&(t.parent===null||(t.parent.f&dt)===0)}function bt(t,e,n,r){if(vt){if(n===null&&(vt=!1),an(e))throw t;return}n!==null&&(vt=!0);{rn(t,e);return}}function _e(t,e,n=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];(l.f&k)!==0?_e(l,e,!1):e===l&&(n?D(l,L):(l.f&g)!==0&&D(l,W),At(l))}}function ve(t){var e=w,n=m,r=S,a=v,l=P,s=R,_=y,f=N,u=t.f;w=null,m=0,S=null,P=(u&A)!==0&&(N||!V||v===null),v=(u&(I|z))===0?t:null,R=null,Yt(t.ctx),N=!1,wt++;try{var c=(0,t.fn)(),o=t.deps;if(w!==null){var i;if(gt(t,m),o!==null&&m>0)for(o.length=m+w.length,i=0;i<w.length;i++)o[m+i]=w[i];else t.deps=o=w;if(!P)for(i=m;i<o.length;i++)(o[i].reactions??=[]).push(t)}else o!==null&&m<o.length&&(gt(t,m),o.length=m);if(kt()&&S!==null&&!N&&o!==null&&(t.f&(k|W|L))===0)for(i=0;i<S.length;i++)_e(S[i],t);return a!==null&&wt++,c}finally{w=e,m=n,S=r,v=a,P=l,R=s,Yt(_),N=f}}function ln(t,e){let n=e.reactions;if(n!==null){var r=Se.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&k)!==0&&(w===null||!w.includes(e))&&(D(e,W),(e.f&(A|pt))===0&&(e.f^=pt),ae(e),gt(e,0))}function gt(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)ln(t,n[r])}function xt(t){var e=t.f;if((e&Tt)===0){D(t,g);var n=p,r=y,a=V;p=t,V=!0;try{(e&Ct)!==0?hn(t):ge(t),we(t);var l=ve(t);t.teardown=typeof l=="function"?l:null,t.wv=oe;var s=t.deps,_;Mt&&Ae&&t.f&L}catch(f){bt(f,t,n,r||t.ctx)}finally{V=a,p=n}}}function un(){try{Ue()}catch(t){if(yt!==null)bt(t,yt,null);else throw t}}function de(){var t=V;try{var e=0;for(V=!0;at.length>0;){e++>1e3&&un();var n=at,r=n.length;at=[];for(var a=0;a<r;a++){var l=fn(n[a]);sn(l)}}}finally{ht=!1,V=t,yt=null,st.clear()}}function sn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(Tt|X))===0)try{J(r)&&(xt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ee(r):r.fn=null))}catch(a){bt(a,r,null,r.ctx)}}}function At(t){ht||(ht=!0,queueMicrotask(de));for(var e=yt=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(z|I))!==0){if((n&g)===0)return;e.f^=g}}at.push(e)}function fn(t){for(var e=[],n=t;n!==null;){var r=n.f,a=(r&(I|z))!==0,l=a&&(r&g)!==0;if(!l&&(r&X)===0){if((r&Kt)!==0)e.push(n);else if(a)n.f^=g;else{var s=v;try{v=n,J(n)&&xt(n)}catch(u){bt(u,n,null,n.ctx)}finally{v=s}}var _=n.first;if(_!==null){n=_;continue}}var f=n.parent;for(n=n.next;n===null&&f!==null;)n=f.next,f=f.parent}return e}function Xn(t){var e;for(Pt();at.length>0;)ht=!0,de(),Pt();return e}function $(t){var e=t.f,n=(e&k)!==0;if(H!==null&&H.add(t),v!==null&&!N){R!==null&&R.includes(t)&&Ge();var r=v.deps;t.rv<wt&&(t.rv=wt,w===null&&r!==null&&r[m]===t?m++:w===null?w=[t]:(!P||!w.includes(t))&&w.push(t))}else if(n&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&A)===0&&(a.f^=A)}return n&&(a=t,J(a)&&le(a)),ft&&st.has(t)?st.get(t):t.v}function on(t){var e=H;H=new Set;var n=H,r;try{if(It(t),e!==null)for(r of H)e.add(r)}finally{H=e}return n}function Zn(t){var e=on(()=>It(t));for(var n of e)if((n.f&Re)!==0)for(const r of n.deps||[])(r.f&k)===0&&Nt(r,r.v);else Nt(n,n.v)}function It(t){var e=N;try{return N=!0,t()}finally{N=e}}const cn=-7169;function D(t,e){t.f=t.f&cn|e}function zn(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Y in t)Ot(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Y in n&&Ot(n)}}}function Ot(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Ot(t[r],e)}catch{}const n=Zt(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Me(n);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}function pe(t){p===null&&v===null&&Be(),v!==null&&(v.f&A)!==0&&p===null&&Ve(),ft&&Ye()}function _n(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Q(t,e,n,r=!0){var a=p,l={ctx:y,deps:null,nodes_start:null,nodes_end:null,f:t|L,first:null,fn:e,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(n)try{xt(l),l.f|=Oe}catch(f){throw U(l),f}else e!==null&&At(l);var s=n&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Gt|dt))===0;if(!s&&r&&(a!==null&&_n(l,a),v!==null&&(v.f&k)!==0)){var _=v;(_.effects??=[]).push(l)}return l}function he(t){const e=Q(mt,null,!1);return D(e,g),e.teardown=t,e}function Jn(t){pe();var e=p!==null&&(p.f&I)!==0&&y!==null&&!y.m;if(e){var n=y;(n.e??=[]).push({fn:t,effect:p,reaction:v})}else{var r=ye(t);return r}}function Qn(t){return pe(),Lt(t)}function vn(t){const e=Q(z,t,!0);return(n={})=>new Promise(r=>{n.outro?yn(e,()=>{U(e),r(void 0)}):(U(e),r(void 0))})}function ye(t){return Q(Kt,t,!1)}function tr(t,e){var n=y,r={effect:null,ran:!1};n.l.r1.push(r),r.effect=Lt(()=>{t(),!r.ran&&(r.ran=!0,C(n.l.r2,!0),It(e))})}function er(){var t=y;Lt(()=>{if($(t.l.r2)){for(var e of t.l.r1){var n=e.effect;(n.f&g)!==0&&D(n,W),J(n)&&xt(n),e.ran=!1}t.l.r2.v=!1}})}function Lt(t){return Q(mt,t,!0)}function nr(t,e=[],n=re){const r=e.map(n);return dn(()=>t(...r.map($)))}function dn(t,e=0){return Q(mt|Ct|e,t,!0)}function pn(t,e=!0){return Q(mt|I,t,!0,e)}function we(t){var e=t.teardown;if(e!==null){const n=ft,r=v;Ht(!0),F(null);try{e.call(null)}finally{Ht(n),F(r)}}}function ge(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&z)!==0?n.parent=null:U(n,e),n=r}}function hn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&I)===0&&U(e),e=n}}function U(t,e=!0){var n=!1;if((e||(t.f&Ce)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:j(r);r.remove(),r=l}n=!0}ge(t,e&&!n),gt(t,0),D(t,Tt);var s=t.transitions;if(s!==null)for(const f of s)f.stop();we(t);var _=t.parent;_!==null&&_.first!==null&&Ee(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ee(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function yn(t,e){var n=[];me(t,n,!0),wn(n,()=>{U(t),e&&e()})}function wn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function me(t,e,n){if((t.f&X)===0){if(t.f^=X,t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&e.push(s);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&$t)!==0||(r.f&I)!==0;me(r,e,l?n:!1),r=a}}}function rr(t){Te(t,!0)}function Te(t,e){if((t.f&X)!==0){t.f^=X,(t.f&g)===0&&(t.f^=g),J(t)&&(D(t,L),At(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&$t)!==0||(n.f&I)!==0;Te(n,a?e:!1),n=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&l.in()}}let y=null;function Yt(t){y=t}function gn(t,e=!1,n){var r=y={p:y,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};Et&&!e&&(y.l={s:null,u:null,r1:[],r2:O(!1)}),he(()=>{r.d=!0})}function En(t){const e=y;if(e!==null){const s=e.e;if(s!==null){var n=p,r=v;e.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];q(l.effect),F(l.reaction),ye(l.fn)}}finally{q(n),F(r)}}y=e.p,e.m=!0}return{}}function kt(){return!Et||y!==null&&y.l===null}const mn=["touchstart","touchmove"];function Tn(t){return mn.includes(t)}let Vt=!1;function bn(){Vt||(Vt=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function be(t){var e=v,n=p;F(null),q(null);try{return t()}finally{F(e),q(n)}}function ar(t,e,n,r=n){t.addEventListener(e,()=>be(n));const a=t.__on_r;a?t.__on_r=()=>{a(),r(!0)}:t.__on_r=()=>r(!0),bn()}const xn=new Set,Bt=new Set;function An(t,e,n,r={}){function a(l){if(r.capture||et.call(e,l),!l.cancelBubble)return be(()=>n?.call(this,l))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?je(()=>{e.addEventListener(t,a,r)}):e.addEventListener(t,a,r),a}function lr(t,e,n,r,a){var l={capture:r,passive:a},s=An(t,e,n,l);(e===document.body||e===window||e===document)&&he(()=>{e.removeEventListener(t,s,l)})}function et(t){var e=this,n=e.ownerDocument,r=t.type,a=t.composedPath?.()||[],l=a[0]||t.target,s=0,_=t.__root;if(_){var f=a.indexOf(_);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var u=a.indexOf(e);if(u===-1)return;f<=u&&(s=f)}if(l=a[s]||t.target,l!==e){Le(t,"currentTarget",{configurable:!0,get(){return l||n}});var c=v,o=p;F(null),q(null);try{for(var i,d=[];l!==null;){var b=l.assignedSlot||l.parentNode||l.host||null;try{var x=l["__"+r];if(x!=null&&(!l.disabled||t.target===l))if(Xt(x)){var[ot,...ct]=x;ot.apply(l,[t,...ct])}else x.call(l,t)}catch(M){i?d.push(M):i=M}if(t.cancelBubble||b===e||b===null)break;l=b}if(i){for(let M of d)queueMicrotask(()=>{throw M});throw i}}finally{t.__root=e,delete t.currentTarget,F(c),q(o)}}}function kn(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function G(t,e){var n=p;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function ur(t,e){var n=(e&ke)!==0,r=(e&Ne)!==0,a,l=!t.startsWith("<!>");return()=>{if(T)return G(h,null),h;a===void 0&&(a=kn(l?t:"<!>"+t),n||(a=Z(a)));var s=r||se?document.importNode(a,!0):a.cloneNode(!0);if(n){var _=Z(s),f=s.lastChild;G(_,f)}else G(s,s);return s}}function sr(){if(T)return G(h,null),h;var t=document.createDocumentFragment(),e=document.createComment(""),n=it();return t.append(e,n),G(e,n),t}function ir(t,e){if(T){p.nodes_end=h,ue();return}t!==null&&t.before(e)}function fr(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function Nn(t,e){return xe(t,e)}function or(t,e){Dt(),e.intro=e.intro??!1;const n=e.target,r=T,a=h;try{for(var l=Z(n);l&&(l.nodeType!==8||l.data!==Ut);)l=j(l);if(!l)throw nt;_t(!0),B(l),ue();const s=xe(t,{...e,anchor:l});if(h===null||h.nodeType!==8||h.data!==Wt)throw St(),nt;return _t(!1),s}catch(s){if(s===nt)return e.recover===!1&&We(),Dt(),tn(n),_t(!1),Nn(t,e);throw s}finally{_t(r),B(a)}}const K=new Map;function xe(t,{target:e,anchor:n,props:r={},events:a,context:l,intro:s=!0}){Dt();var _=new Set,f=o=>{for(var i=0;i<o.length;i++){var d=o[i];if(!_.has(d)){_.add(d);var b=Tn(d);e.addEventListener(d,et,{passive:b});var x=K.get(d);x===void 0?(document.addEventListener(d,et,{passive:b}),K.set(d,1)):K.set(d,x+1)}}};f(Ie(xn)),Bt.add(f);var u=void 0,c=vn(()=>{var o=n??e.appendChild(it());return pn(()=>{if(l){gn({});var i=y;i.c=l}a&&(r.$$events=a),T&&G(o,null),u=t(o,r)||{},T&&(p.nodes_end=h),l&&En()}),()=>{for(var i of _){e.removeEventListener(i,et);var d=K.get(i);--d===0?(document.removeEventListener(i,et),K.delete(i)):K.set(i,d)}Bt.delete(f),o!==n&&o.parentNode?.removeChild(o)}});return Rt.set(u,c),u}let Rt=new WeakMap;function cr(t,e){const n=Rt.get(t);return n?(Rt.delete(t),n(e)):Promise.resolve()}export{Wn as $,Yn as A,Wt as B,Ie as C,p as D,$t as E,Xt as F,Rn as G,Ut as H,X as I,me as J,tn as K,wn as L,U as M,On as N,In as O,j as P,Cn as Q,Sn as R,jn as S,bn as T,E as U,Mn as V,Ln as W,ar as X,It as Y,Lt as Z,ye as _,ue as a,Qn as a0,Jn as a1,qn as a2,zt as a3,zn as a4,re as a5,Et as a6,Pn as a7,He as a8,he as a9,Le as aa,C as ab,gn as ac,ur as ad,nr as ae,Kn as af,Gn as ag,lr as ah,ir as ai,En as aj,Hn as ak,Vn as al,Bn as am,Zn as an,tr as ao,er as ap,$n as aq,fr as ar,sr as as,kn as at,G as au,tt as av,or as aw,Nn as ax,cr as ay,dn as b,Fn as c,Nt as d,Dn as e,q as f,F as g,T as h,kt as i,Yt as j,y as k,pn as l,Ze as m,Xn as n,h as o,yn as p,je as q,rr as r,O as s,De as t,Un as u,B as v,_t as w,it as x,Z as y,$ as z};
