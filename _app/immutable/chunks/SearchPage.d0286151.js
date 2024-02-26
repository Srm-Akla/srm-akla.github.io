import{S as E,i as L,s as k,k as w,l as b,n as d,b as g,$ as I,E as T,I as P,h as _,w as S,y as q,z as D,A as U,g as v,d as C,B as M,H as V,a0 as z,o as A,a1 as B,K as H,a as K,m as y,c as W,a2 as j,L as F,M as G,N as J}from"./index.a78d5d79.js";import{C as O}from"./CommonPage.9299fccf.js";import{p as Q}from"./stores.54fb6505.js";import{b as X}from"./paths.a391c1df.js";function Y(n){let e,t,a;return{c(){e=w("input"),this.h()},l(l){e=b(l,"INPUT",{placeholder:!0,class:!0}),this.h()},h(){d(e,"placeholder",n[1]),d(e,"class","text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em]  svelte-c0g44u")},m(l,i){g(l,e,i),n[4](e),I(e,n[0]),t||(a=T(e,"input",n[5]),t=!0)},p(l,[i]){i&2&&d(e,"placeholder",l[1]),i&1&&e.value!==l[0]&&I(e,l[0])},i:P,o:P,d(l){l&&_(e),n[4](null),t=!1,a()}}}function Z(n,e,t){let{value:a=""}=e,{placeholder:l=""}=e,i;function f(){i.focus()}function h(r){S[r?"unshift":"push"](()=>{i=r,t(2,i)})}function p(){a=this.value,t(0,a)}return n.$$set=r=>{"value"in r&&t(0,a=r.value),"placeholder"in r&&t(1,l=r.placeholder)},[a,l,i,f,h,p]}class x extends E{constructor(e){super(),L(this,e,Z,Y,k,{value:0,placeholder:1,focus:3})}get focus(){return this.$$.ctx[3]}}function $(n){let e,t,a,l,i,f;function h(s){n[8](s)}let p={placeholder:"Search..."};n[0]!==void 0&&(p.value=n[0]),t=new x({props:p}),n[7](t),S.push(()=>B(t,"value",h));const r=n[6].default,u=H(r,n,n[9],null);return{c(){e=w("div"),q(t.$$.fragment),l=K(),i=w("div"),u&&u.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var c=y(e);D(t.$$.fragment,c),c.forEach(_),l=W(s),i=b(s,"DIV",{class:!0});var m=y(i);u&&u.l(m),m.forEach(_),this.h()},h(){d(e,"class","w-100% row"),d(i,"class","w-100% col flex-1")},m(s,c){g(s,e,c),U(t,e,null),g(s,l,c),g(s,i,c),u&&u.m(i,null),f=!0},p(s,c){const m={};!a&&c&1&&(a=!0,m.value=s[0],j(()=>a=!1)),t.$set(m),u&&u.p&&(!f||c&512)&&F(u,r,s,s[9],f?J(r,s[9],c,null):G(s[9]),null)},i(s){f||(v(t.$$.fragment,s),v(u,s),f=!0)},o(s){C(t.$$.fragment,s),C(u,s),f=!1},d(s){s&&_(e),n[7](null),M(t),s&&_(l),s&&_(i),u&&u.d(s)}}}function ee(n){let e,t;return e=new O({props:{title:n[1],titleClass:n[2],$$slots:{default:[$]},$$scope:{ctx:n}}}),{c(){q(e.$$.fragment)},l(a){D(e.$$.fragment,a)},m(a,l){U(e,a,l),t=!0},p(a,[l]){const i={};l&2&&(i.title=a[1]),l&4&&(i.titleClass=a[2]),l&521&&(i.$$scope={dirty:l,ctx:a}),e.$set(i)},i(a){t||(v(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){M(e,a)}}}function te(n,e,t){let a;V(n,Q,o=>t(5,a=o));let{$$slots:l={},$$scope:i}=e,{title:f="Title"}=e,{search:h=""}=e,{titleClass:p=""}=e,r;const u=z();let s=!1;A(()=>{let o=new URLSearchParams(window.location.search);t(0,h=o.get("q")??""),t(4,s=!0)});function c(o){S[o?"unshift":"push"](()=>{r=o,t(3,r)})}function m(o){h=o,t(0,h)}return n.$$set=o=>{"title"in o&&t(1,f=o.title),"search"in o&&t(0,h=o.search),"titleClass"in o&&t(2,p=o.titleClass),"$$scope"in o&&t(9,i=o.$$scope)},n.$$.update=()=>{if(n.$$.dirty&1&&u("search",{search:h.trim().toLowerCase()}),n.$$.dirty&57&&s){let o=new URLSearchParams(window.location.search);o.set("q",h);const N=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${o.toString()}`,R=window.history.state;window.history.replaceState(R,"",N),a.url.pathname.startsWith(`${X}/search`)&&r&&r.focus()}},[h,f,p,r,s,a,l,c,m,i]}class ie extends E{constructor(e){super(),L(this,e,te,ee,k,{title:1,search:0,titleClass:2})}}export{ie as S};