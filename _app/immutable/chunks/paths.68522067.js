import{I as u,s as p}from"./index.a78d5d79.js";const e=[];function d(i,a=u){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(i))}function _(t,b=u){const s=[t,b];return n.add(s),n.size===1&&(o=a(r)||u),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var c;const h=((c=globalThis.__sveltekit_p1u82f)==null?void 0:c.base)??"/srm-akla.github.io";var f;const k=((f=globalThis.__sveltekit_p1u82f)==null?void 0:f.assets)??h;export{k as a,h as b,d as w};
