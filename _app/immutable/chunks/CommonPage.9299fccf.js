import{S as V,i as z,s as A,w as B,a1 as K,K as L,y as v,a as C,k as T,z as k,c as w,l as y,m as D,h as c,n as M,A as q,b as $,D as E,a2 as N,L as P,M as j,N as F,g,d as b,B as I,q as G,r as H,u as J}from"./index.a78d5d79.js";import{M as O}from"./MainTitle.83923f6d.js";import{T as Q}from"./TabTitle.fd9aa0cb.js";function R(i){let e;return{c(){e=G(i[0])},l(s){e=H(s,i[0])},m(s,_){$(s,e,_)},p(s,_){_&1&&J(e,s[0])},d(s){s&&c(e)}}}function U(i){let e,s,_,f,n,r,m,a;function S(t){i[3](t)}let h={};i[0]!==void 0&&(h.title=i[0]),e=new Q({props:h}),B.push(()=>K(e,"title",S)),n=new O({props:{classes:i[1],$$slots:{default:[R]},$$scope:{ctx:i}}});const p=i[2].default,o=L(p,i,i[4],null);return{c(){v(e.$$.fragment),_=C(),f=T("div"),v(n.$$.fragment),r=C(),m=T("div"),o&&o.c(),this.h()},l(t){k(e.$$.fragment,t),_=w(t),f=y(t,"DIV",{class:!0});var l=D(f);k(n.$$.fragment,l),r=w(l),m=y(l,"DIV",{class:!0});var u=D(m);o&&o.l(u),u.forEach(c),l.forEach(c),this.h()},h(){M(m,"class","col gap-5 flex-1"),M(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,l){q(e,t,l),$(t,_,l),$(t,f,l),q(n,f,null),E(f,r),E(f,m),o&&o.m(m,null),a=!0},p(t,[l]){const u={};!s&&l&1&&(s=!0,u.title=t[0],N(()=>s=!1)),e.$set(u);const d={};l&2&&(d.classes=t[1]),l&17&&(d.$$scope={dirty:l,ctx:t}),n.$set(d),o&&o.p&&(!a||l&16)&&P(o,p,t,t[4],a?F(p,t[4],l,null):j(t[4]),null)},i(t){a||(g(e.$$.fragment,t),g(n.$$.fragment,t),g(o,t),a=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),b(o,t),a=!1},d(t){I(e,t),t&&c(_),t&&c(f),I(n),o&&o.d(t)}}}function W(i,e,s){let{$$slots:_={},$$scope:f}=e,{title:n="Title"}=e,{titleClass:r=""}=e;function m(a){n=a,s(0,n)}return i.$$set=a=>{"title"in a&&s(0,n=a.title),"titleClass"in a&&s(1,r=a.titleClass),"$$scope"in a&&s(4,f=a.$$scope)},[n,r,_,m,f]}class x extends V{constructor(e){super(),z(this,e,W,U,A,{title:0,titleClass:1})}}export{x as C};