import{A as c,s as g}from"./scheduler.98dcdc08.js";const e=[];function q(o,a=c){let i;const n=new Set;function r(t){if(g(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=a(r,f)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1lgfo6q)==null?void 0:u.base)??"";var l;const d=((l=globalThis.__sveltekit_1lgfo6q)==null?void 0:l.assets)??h;export{d as a,h as b,q as w};
