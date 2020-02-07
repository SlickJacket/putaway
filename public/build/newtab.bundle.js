var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const l="undefined"!=typeof window;let s=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const a=new Set;function f(t){a.forEach(n=>{n.c(t)||(a.delete(n),n.f())}),0!==a.size&&u(f)}function d(t){let n;return 0===a.size&&u(f),{promise:new Promise(e=>{a.add(n={c:t,f:e})}),abort(){a.delete(n)}}}function m(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function $(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function y(){return v(" ")}function b(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function x(t){return function(n){return n.preventDefault(),t.call(this,n)}}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t,n){n=""+n,t.data!==n&&(t.data=n)}function k(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}let C,E,q=0,A={};function N(t,n,e,r,o,i,c,l=0){const s=16.666/r;let u="{\n";for(let t=0;t<=1;t+=s){const r=n+(e-n)*i(t);u+=100*t+`%{${c(r,1-r)}}\n`}const a=u+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${l}`;if(!A[f]){if(!C){const t=$("style");document.head.appendChild(t),C=t.sheet}A[f]=!0,C.insertRule(`@keyframes ${f} ${a}`,C.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${r}ms linear ${o}ms 1 both`,q+=1,f}function O(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--q&&u(()=>{if(q)return;let t=C.cssRules.length;for(;t--;)C.deleteRule(t);A={}})}function P(t){E=t}function S(t){(function(){if(!E)throw new Error("Function called outside component initialization");return E})().$$.on_mount.push(t)}const R=[],T=[],j=[],z=[],B=Promise.resolve();let L=!1;function D(t){j.push(t)}const F=new Set;function I(){do{for(;R.length;){const t=R.shift();P(t),M(t.$$)}for(;T.length;)T.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];F.has(n)||(F.add(n),n())}j.length=0}while(R.length);for(;z.length;)z.pop()();L=!1,F.clear()}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(D)}}let U;function H(){return U||(U=Promise.resolve(),U.then(()=>{U=null})),U}function W(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const G=new Set;let J;function K(t,n){t&&t.i&&(G.delete(t),t.i(n))}function Q(t,n,e,r){if(t&&t.o){if(G.has(t))return;G.add(t),J.c.push(()=>{G.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}const V={duration:0};function X(t){t&&t.c()}function Y(t,n,r){const{fragment:c,on_mount:l,on_destroy:s,after_update:u}=t.$$;c&&c.m(n,r),D(()=>{const n=l.map(e).filter(i);s?s.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(D)}function Z(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function tt(t,n){-1===t.$$.dirty[0]&&(R.push(t),L||(L=!0,B.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function nt(n,e,i,c,l,s,u=[-1]){const a=E;P(n);const f=e.props||{},d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:r(),dirty:u};let m=!1;d.ctx=i?i(n,f,(t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&l(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),m&&tt(n,t)),e}):[],d.update(),m=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(e.target)):d.fragment&&d.fragment.c(),e.intro&&K(n.$$.fragment),Y(n,e.target,e.anchor),I()),P(a)}class et{$destroy(){Z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function rt(n){let e;return{c(){e=$("main"),e.innerHTML="<h1>TopBar</h1>"},m(t,n){h(t,e,n)},p:t,i:t,o:t,d(t){t&&g(e)}}}class ot extends et{constructor(t){super(),nt(this,t,null,rt,c,{})}}function it(t){const n=t-1;return n*n*n+1}function ct(t,{delay:e=0,duration:r=400,easing:o=n}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:o,css:t=>`opacity: ${t*i}`}}function lt(t,{delay:n=0,duration:e=400,easing:r=it,x:o=0,y:i=0,opacity:c=0}){const l=getComputedStyle(t),s=+l.opacity,u="none"===l.transform?"":l.transform,a=s*(1-c);return{delay:n,duration:e,easing:r,css:(t,n)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*o}px, ${(1-t)*i}px);\n\t\t\topacity: ${s-a*n}`}}function st(t,n,e){const r=t.slice();return r[1]=n[e],r[3]=e,r}function ut(t){let n;return{c(){n=$("h3"),n.textContent="No Collections"},m(t,e){h(t,n,e)},d(t){t&&g(n)}}}function at(t){let n,e,r=t[1].title+"";return{c(){n=$("div"),e=v(r),w(n,"class","collection svelte-q8nnl2")},m(t,r){h(t,n,r),m(n,e)},p(t,n){1&n&&r!==(r=t[1].title+"")&&_(e,r)},d(t){t&&g(n)}}}function ft(n){let e,r,o,i,c,l=0==n[0].length&&ut(),s=n[0],u=[];for(let t=0;t<s.length;t+=1)u[t]=at(st(n,s,t));return{c(){e=$("main"),l&&l.c(),r=y(),o=$("div");for(let t=0;t<u.length;t+=1)u[t].c();i=y(),c=$("div"),k(c,"height","200px"),w(o,"class","scroll")},m(t,n){h(t,e,n),l&&l.m(e,null),m(e,r),m(e,o);for(let t=0;t<u.length;t+=1)u[t].m(o,null);m(o,i),m(o,c)},p(t,[n]){if(0==t[0].length?l||(l=ut(),l.c(),l.m(e,r)):l&&(l.d(1),l=null),1&n){let e;for(s=t[0],e=0;e<s.length;e+=1){const r=st(t,s,e);u[e]?u[e].p(r,n):(u[e]=at(r),u[e].c(),u[e].m(o,i))}for(;e<u.length;e+=1)u[e].d(1);u.length=s.length}},i:t,o:t,d(t){t&&g(e),l&&l.d(),p(u,t)}}}function dt(t,n,e){let r=[];return S(()=>{chrome.storage.local.get("pid",(function(t){chrome.bookmarks.getChildren(t.pid,(function(t){e(0,r=t)}))}))}),[r]}class mt extends et{constructor(t){super(),nt(this,t,dt,ft,c,{})}}function ht(t,n,e){const r=t.slice();return r[5]=n[e],r[7]=e,r}function gt(t){let n;return{c(){n=$("h3"),n.textContent="No open tabs"},m(t,e){h(t,n,e)},d(t){t&&g(n)}}}function pt(e){let r,c,l,u,a,f,p,C,E,q,A,P,S,R=e[5].title+"";function T(...t){return e[3](e[5],e[7],...t)}function j(...t){return e[4](e[5],...t)}return{c(){r=$("div"),c=$("button"),l=y(),u=$("div"),a=$("img"),p=y(),C=$("div"),E=v(R),w(c,"class","close-icon svelte-1rm5iiq"),w(a,"alt","tab"),a.src!==(f=e[5].favIconUrl)&&w(a,"src",f),w(a,"height","20px"),k(a,"margin-right","10px"),w(C,"class","text-concat svelte-1rm5iiq"),w(u,"class","flex-row-container"),w(r,"class","card svelte-1rm5iiq"),w(r,"draggable","true")},m(t,n){var e;h(t,r,n),m(r,c),m(r,l),m(r,u),m(u,a),m(u,p),m(u,C),m(C,E),P=!0,S=[b(c,"click",(e=x(T),function(t){return t.stopPropagation(),e.call(this,t)})),b(r,"click",x(j))]},p(t,n){e=t,(!P||1&n&&a.src!==(f=e[5].favIconUrl))&&w(a,"src",f),(!P||1&n)&&R!==(R=e[5].title+"")&&_(E,R)},i(e){P||(D(()=>{A&&A.end(1),q||(q=function(e,r,o){let c,l,u=r(e,o),a=!1,f=0;function m(){c&&O(e,c)}function h(){const{delay:r=0,duration:o=300,easing:i=n,tick:h=t,css:g}=u||V;g&&(c=N(e,0,1,o,r,i,g,f++)),h(0,1);const p=s()+r,$=p+o;l&&l.abort(),a=!0,D(()=>W(e,!0,"start")),l=d(t=>{if(a){if(t>=$)return h(1,0),W(e,!0,"end"),m(),a=!1;if(t>=p){const n=i((t-p)/o);h(n,1-n)}}return a})}let g=!1;return{start(){g||(O(e),i(u)?(u=u(),H().then(h)):h())},invalidate(){g=!1},end(){a&&(m(),a=!1)}}}(r,lt,{x:500,duration:400})),q.start()}),P=!0)},o(e){q&&q.invalidate(),A=function(e,r,c){let l,u=r(e,c),a=!0;const f=J;function m(){const{delay:r=0,duration:i=300,easing:c=n,tick:m=t,css:h}=u||V;h&&(l=N(e,1,0,i,r,c,h));const g=s()+r,p=g+i;D(()=>W(e,!1,"start")),d(t=>{if(a){if(t>=p)return m(0,1),W(e,!1,"end"),--f.r||o(f.c),!1;if(t>=g){const n=c((t-g)/i);m(1-n,n)}}return a})}return f.r+=1,i(u)?H().then(()=>{u=u(),m()}):m(),{end(t){t&&u.tick&&u.tick(1,0),a&&(l&&O(e,l),a=!1)}}}(r,ct,{}),P=!1},d(t){t&&g(r),t&&A&&A.end(),o(S)}}}function $t(t){let n,e,r,i,c,l,s,u,a,f,d=t[0].length+"",b=0==t[0].length&&gt(),x=t[0],C=[];for(let n=0;n<x.length;n+=1)C[n]=pt(ht(t,x,n));const E=t=>Q(C[t],1,1,()=>{C[t]=null});return{c(){n=$("main"),e=$("h2"),r=v("Open Tabs - "),i=v(d),c=y(),b&&b.c(),l=y(),s=$("div");for(let t=0;t<C.length;t+=1)C[t].c();u=y(),a=$("div"),k(a,"height","200px"),w(s,"class","scroll"),k(n,"height","100%")},m(t,o){h(t,n,o),m(n,e),m(e,r),m(e,i),m(n,c),b&&b.m(n,null),m(n,l),m(n,s);for(let t=0;t<C.length;t+=1)C[t].m(s,null);m(s,u),m(s,a),f=!0},p(t,[e]){if((!f||1&e)&&d!==(d=t[0].length+"")&&_(i,d),0==t[0].length?b||(b=gt(),b.c(),b.m(n,l)):b&&(b.d(1),b=null),7&e){let n;for(x=t[0],n=0;n<x.length;n+=1){const r=ht(t,x,n);C[n]?(C[n].p(r,e),K(C[n],1)):(C[n]=pt(r),C[n].c(),K(C[n],1),C[n].m(s,u))}for(J={r:0,c:[],p:J},n=x.length;n<C.length;n+=1)E(n);J.r||o(J.c),J=J.p}},i(t){if(!f){for(let t=0;t<x.length;t+=1)K(C[t]);f=!0}},o(t){C=C.filter(Boolean);for(let t=0;t<C.length;t+=1)Q(C[t]);f=!1},d(t){t&&g(n),b&&b.d(),p(C,t)}}}function vt(t,n,e){let r=[];S(()=>{chrome.tabs.query({currentWindow:!0},t=>{e(0,r=t.filter((function(t){return"chrome://newtab/"!=t.url})))})});var o=t=>{chrome.tabs.update(t.id,{active:!0})},i=(t,n)=>{r.splice(n,1),e(0,r),chrome.tabs.remove(t.id)};return[r,o,i,(t,n)=>i(t,n),t=>o(t)]}class yt extends et{constructor(t){super(),nt(this,t,vt,$t,c,{})}}function bt(n){let e,r,o,i,c,l,s,u,a;const f=new ot({}),d=new mt({}),p=new yt({});return{c(){e=$("div"),r=$("div"),o=$("div"),i=$("div"),X(f.$$.fragment),c=y(),l=$("div"),X(d.$$.fragment),s=y(),u=$("div"),X(p.$$.fragment),w(i,"id","top-bar-container"),w(i,"class","svelte-f2g6tu"),w(o,"id","top-bar"),w(o,"class","svelte-f2g6tu"),w(l,"id","main-free-area"),w(l,"class","svelte-f2g6tu"),w(r,"id","left-free-area"),w(r,"class","svelte-f2g6tu"),w(u,"id","right-fixed-bar"),w(u,"class","svelte-f2g6tu"),w(e,"class","container-table svelte-f2g6tu")},m(t,n){h(t,e,n),m(e,r),m(r,o),m(o,i),Y(f,i,null),m(r,c),m(r,l),Y(d,l,null),m(e,s),m(e,u),Y(p,u,null),a=!0},p:t,i(t){a||(K(f.$$.fragment,t),K(d.$$.fragment,t),K(p.$$.fragment,t),a=!0)},o(t){Q(f.$$.fragment,t),Q(d.$$.fragment,t),Q(p.$$.fragment,t),a=!1},d(t){t&&g(e),Z(f),Z(d),Z(p)}}}return new class extends et{constructor(t){super(),nt(this,t,null,bt,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=newtab.bundle.js.map
