import{S as O,i as R,s as C,k as I,y as L,a as T,l as $,m as E,z as P,h as b,c as B,n as m,b as S,D as y,A as j,E as z,g as D,d as M,B as q,F as oe,G as ie,o as ce,q as G,r as H,O as Y,u as ue,J as A,w as ae,P as Z,Q as J,I as N,R as fe,f as he,v as me}from"../chunks/index.a78d5d79.js";import{g as K,I as V,u as Q,M as de,b as _e,T as X,H as ge}from"../chunks/params.e6438200.js";import{U as ee}from"../chunks/UIcon.b4187675.js";import{M as pe}from"../chunks/MainTitle.83923f6d.js";import{i as ve}from"../chunks/index.97b3c5e0.js";function te(r,e,t){const s=r.slice();return s[16]=e[t],s}function re(r){let e,t,s,l,n,a,u=r[16].name+"",h,w;return{c(){e=I("div"),t=I("img"),n=T(),a=I("span"),h=G(u),w=T(),this.h()},l(g){e=$(g,"DIV",{class:!0});var k=E(e);t=$(k,"IMG",{class:!0,src:!0,alt:!0}),n=B(k),a=$(k,"SPAN",{class:!0});var x=E(a);h=H(x,u),x.forEach(b),w=B(k),k.forEach(b),this.h()},h(){m(t,"class","w-160px h-160px aspect-square"),Y(t.src,s=K(r[16].logo))||m(t,"src",s),m(t,"alt",l=r[16].name),m(a,"class","text-center m-t-20px"),m(e,"class","box-content w-150px p-15px col-center")},m(g,k){S(g,e,k),y(e,t),y(e,n),y(e,a),y(a,h),y(e,w)},p(g,k){k&1&&!Y(t.src,s=K(g[16].logo))&&m(t,"src",s),k&1&&l!==(l=g[16].name)&&m(t,"alt",l),k&1&&u!==(u=g[16].name+"")&&ue(h,u)},d(g){g&&b(e)}}}function be(r){let e,t,s,l,n,a,u,h,w,g,k;s=new ee({props:{icon:"i-carbon-chevron-left"}});let x=r[0],d=[];for(let f=0;f<x.length;f+=1)d[f]=re(te(r,x,f));return h=new ee({props:{icon:"i-carbon-chevron-right"}}),{c(){e=I("div"),t=I("button"),L(s.$$.fragment),l=T(),n=I("div");for(let f=0;f<d.length;f+=1)d[f].c();a=T(),u=I("button"),L(h.$$.fragment),this.h()},l(f){e=$(f,"DIV",{class:!0});var i=E(e);t=$(i,"BUTTON",{class:!0});var _=E(t);P(s.$$.fragment,_),_.forEach(b),l=B(i),n=$(i,"DIV",{class:!0});var o=E(n);for(let c=0;c<d.length;c+=1)d[c].l(o);o.forEach(b),a=B(i),u=$(i,"BUTTON",{class:!0});var p=E(u);P(h.$$.fragment,p),p.forEach(b),i.forEach(b),this.h()},h(){m(t,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(n,"class","row overflow-hidden box-content w-170px"),m(u,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(e,"class","carrousel flex-[0.5] row-center")},m(f,i){S(f,e,i),y(e,t),j(s,t,null),y(e,l),y(e,n);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m(n,null);r[11](n),y(e,a),y(e,u),j(h,u,null),w=!0,g||(k=[z(t,"click",r[2]),z(t,"keyup",r[8]),z(t,"keydown",r[9]),z(t,"keypress",r[10]),z(u,"click",r[3]),z(u,"keyup",r[5]),z(u,"keydown",r[6]),z(u,"keypress",r[7])],g=!0)},p(f,[i]){if(i&1){x=f[0];let _;for(_=0;_<x.length;_+=1){const o=te(f,x,_);d[_]?d[_].p(o,i):(d[_]=re(o),d[_].c(),d[_].m(n,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=x.length}},i(f){w||(D(s.$$.fragment,f),D(h.$$.fragment,f),w=!0)},o(f){M(s.$$.fragment,f),M(h.$$.fragment,f),w=!1},d(f){f&&b(e),q(s),oe(d,f),r[11](null),q(h),g=!1,ie(k)}}}const ke=2e3;function we(r,e,t){let{items:s=[]}=e,l,n,a=0,u=!0;const h=c=>{c?a<s.length-1?t(4,a=a+1):(t(4,a=a-1),u=!1):a>0?t(4,a=a-1):(t(4,a=a+1),u=!0)},w=c=>{clearTimeout(n),n=setTimeout(()=>{h(c),w(u)},ke)},g=()=>{clearTimeout(n),u=!1,h(!1),w(u)},k=()=>{clearTimeout(n),u=!0,h(!0),w(u)};ce(()=>{w(!0)});function x(c){A.call(this,r,c)}function d(c){A.call(this,r,c)}function f(c){A.call(this,r,c)}function i(c){A.call(this,r,c)}function _(c){A.call(this,r,c)}function o(c){A.call(this,r,c)}function p(c){ae[c?"unshift":"push"](()=>{l=c,t(1,l)})}return r.$$set=c=>{"items"in c&&t(0,s=c.items)},r.$$.update=()=>{r.$$.dirty&18&&l&&l.scroll({left:a*180,behavior:"smooth"})},[s,l,g,k,a,x,d,f,i,_,o,p]}class xe extends O{constructor(e){super(),R(this,e,we,be,C,{items:0})}}const ne=r=>r===V.Youtube?"0 0 461.001 461.001":r===V.Facebook?"0 0 408.788 408.788":[V.GitHub,V.Search,V.Code].includes(r)?"0 0 16 16":"0 0 24 24";function ye(r){let e,t,s;return{c(){e=Z("svg"),t=Z("path"),this.h()},l(l){e=J(l,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var n=E(e);t=J(n,"path",{d:!0}),E(t).forEach(b),n.forEach(b),this.h()},h(){m(t,"d",r[2]),m(e,"class","inline-block"),m(e,"viewBox",s=ne(r[2])),m(e,"fill",r[1]),m(e,"height",r[0]),m(e,"width",r[0])},m(l,n){S(l,e,n),y(e,t),r[4](e)},p(l,[n]){n&4&&m(t,"d",l[2]),n&4&&s!==(s=ne(l[2]))&&m(e,"viewBox",s),n&2&&m(e,"fill",l[1]),n&1&&m(e,"height",l[0]),n&1&&m(e,"width",l[0])},i:N,o:N,d(l){l&&b(e),r[4](null)}}}function Ee(r,e,t){let s,{size:l="30px"}=e,{color:n="var(--main-text)"}=e,{icon:a}=e;function u(h){ae[h?"unshift":"push"](()=>{s=h,t(3,s)})}return r.$$set=h=>{"size"in h&&t(0,l=h.size),"color"in h&&t(1,n=h.color),"icon"in h&&t(2,a=h.icon)},[l,n,a,s,u]}class Ie extends O{constructor(e){super(),R(this,e,Ee,ye,C,{size:0,color:1,icon:2})}}function se(r,e,t){const s=r.slice();return s[7]=e[t],s}function $e(r){let e;return{c(){e=G("Welcome!")},l(t){e=H(t,"Welcome!")},m(t,s){S(t,e,s)},d(t){t&&b(e)}}}function le(r){let e,t,s,l;return t=new Ie({props:{icon:_e(r[7].platform),color:"var(--accent-text)",size:"30px"}}),{c(){e=I("a"),L(t.$$.fragment),s=T(),this.h()},l(n){e=$(n,"A",{class:!0,href:!0,target:!0,rel:!0});var a=E(e);P(t.$$.fragment,a),s=B(a),a.forEach(b),this.h()},h(){m(e,"class","decoration-none"),m(e,"href",`${r[4](r[7].link)?"mailto:":""}${r[7].link}`),m(e,"target","_blank"),m(e,"rel","noreferrer")},m(n,a){S(n,e,a),j(t,e,null),y(e,s),l=!0},p:N,i(n){l||(D(t.$$.fragment,n),l=!0)},o(n){M(t.$$.fragment,n),l=!1},d(n){n&&b(e),q(t)}}}function Te(r){let e,t,s,l,n,a,u,h,w,g,k,x,d;document.title=e=Q(r[2],X),n=new pe({props:{classes:"md:text-left text-[var(--code-operator)]",$$slots:{default:[$e]},$$scope:{ctx:r}}});let f=r[1],i=[];for(let o=0;o<f.length;o+=1)i[o]=le(se(r,f,o));const _=o=>M(i[o],1,1,()=>{i[o]=null});return x=new xe({props:{items:r[3]??de}}),{c(){t=T(),s=I("div"),l=I("div"),L(n.$$.fragment),a=T(),u=I("p"),h=G(r[0]),w=T(),g=I("div");for(let o=0;o<i.length;o+=1)i[o].c();k=T(),L(x.$$.fragment),this.h()},l(o){fe("svelte-gorrxo",document.head).forEach(b),t=B(o),s=$(o,"DIV",{class:!0});var c=E(s);l=$(c,"DIV",{class:!0});var v=E(l);P(n.$$.fragment,v),a=B(v),u=$(v,"P",{class:!0});var U=E(u);h=H(U,r[0]),U.forEach(b),w=B(v),g=$(v,"DIV",{class:!0});var W=E(g);for(let F=0;F<i.length;F+=1)i[F].l(W);W.forEach(b),v.forEach(b),k=B(c),P(x.$$.fragment,c),c.forEach(b),this.h()},h(){m(u,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),m(g,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),m(l,"class","md:flex-1 gap-10px"),m(s,"class","col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(o,p){S(o,t,p),S(o,s,p),y(s,l),j(n,l,null),y(l,a),y(l,u),y(u,h),y(l,w),y(l,g);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(g,null);y(s,k),j(x,s,null),d=!0},p(o,[p]){(!d||p&4)&&e!==(e=Q(o[2],X))&&(document.title=e);const c={};if(p&1024&&(c.$$scope={dirty:p,ctx:o}),n.$set(c),p&18){f=o[1];let v;for(v=0;v<f.length;v+=1){const U=se(o,f,v);i[v]?(i[v].p(U,p),D(i[v],1)):(i[v]=le(U),i[v].c(),D(i[v],1),i[v].m(g,null))}for(me(),v=f.length;v<i.length;v+=1)_(v);he()}},i(o){if(!d){D(n.$$.fragment,o);for(let p=0;p<f.length;p+=1)D(i[p]);D(x.$$.fragment,o),d=!0}},o(o){M(n.$$.fragment,o),i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)M(i[p]);M(x.$$.fragment,o),d=!1},d(o){o&&b(t),o&&b(s),q(n),oe(i,o),q(x)}}}function Be(r){const{description:e,lastName:t,links:s,name:l,title:n,skills:a}=ge;return[e,s,n,a,h=>{const w=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!ve(h)&&w.test(h)}]}class Ue extends O{constructor(e){super(),R(this,e,Be,Te,C,{})}}export{Ue as component};
