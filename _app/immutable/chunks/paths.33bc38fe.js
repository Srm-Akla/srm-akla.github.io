import{I as c,s as _}from"./index.a78d5d79.js";const e=[];function d(i,a=c){let o;const n=new Set;function r(t){if(_(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(i))}function h(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(o=a(r)||c),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:l,subscribe:h}}var f;const p=((f=globalThis.__sveltekit_vf5hpv)==null?void 0:f.base)??"/srm-akla.github.io";var u;const k=((u=globalThis.__sveltekit_vf5hpv)==null?void 0:u.assets)??p;export{k as a,p as b,d as w};
