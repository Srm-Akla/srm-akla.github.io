import{A as a,s as h}from"./scheduler.98dcdc08.js";const e=[];function d(i,l=a){let n;const o=new Set;function r(t){if(h(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(i))}function _(t,b=a){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,c)||a),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_bas96a)==null?void 0:f.base)??"";var u;const q=((u=globalThis.__sveltekit_bas96a)==null?void 0:u.assets)??p;export{q as a,p as b,d as w};
