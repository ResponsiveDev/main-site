import{S as t,i as e,s,j as n,k as r,e as a,m as l,n as o,c as i,a as c,d as h,b as f,o as u,f as p,v as $,r as g,w as m,Z as d,$ as v,a3 as w,a4 as b,t as k,g as x,h as R,J as B,l as E,Y as A,M as j}from"../../chunks/vendor-3096e885.js";import{H as y,a as L,A as D}from"../../chunks/Article-3ca39da2.js";import"../../chunks/Button-0fba133b.js";function I(t,e,s){const n=t.slice();return n[4]=e[s],n[6]=s,n}function P(t){var e;let s,n=(null!=(e=t[0].title)?e:t[0].slug)+"";return{c(){s=k(n)},l(t){s=x(t,n)},m(t,e){p(t,s,e)},p(t,e){var r;1&e&&n!==(n=(null!=(r=t[0].title)?r:t[0].slug)+"")&&R(s,n)},d(t){t&&h(s)}}}function T(t){var e;let s,n,r,l,o=(null!=(e=t[4].name)?e:"Responsive")+"",u=t[6]!==t[0].authors.length-1&&t[0].authors.length>1?", ":"";return{c(){s=a("a"),n=k(o),l=k(u),this.h()},l(t){s=i(t,"A",{target:!0,rel:!0,href:!0});var e=c(s);n=x(e,o),e.forEach(h),l=x(t,u),this.h()},h(){var e;f(s,"target","_blank"),f(s,"rel","external"),f(s,"href",r=null!=(e=t[4].link)?e:"https://twitter.com/RespDev")},m(t,e){p(t,s,e),B(s,n),p(t,l,e)},p(t,e){var a,i;1&e&&o!==(o=(null!=(a=t[4].name)?a:"Responsive")+"")&&R(n,o),1&e&&r!==(r=null!=(i=t[4].link)?i:"https://twitter.com/RespDev")&&f(s,"href",r),1&e&&u!==(u=t[6]!==t[0].authors.length-1&&t[0].authors.length>1?", ":"")&&R(l,u)},d(t){t&&h(s),t&&h(l)}}}function W(t){let e,s,n,l,u,$,g,m,v,w,b,y,L,D,P=d(t[0].date).format("LL")+"",W=(t[0].content?t[1](t[0].content):"Error: Article is missing content")+"",H=t[0].authors,J=[];for(let r=0;r<H.length;r+=1)J[r]=T(I(t,H,r));return{c(){e=a("a"),s=k("<- Back"),n=a("br"),l=r(),u=a("i"),$=k("Posted: "),g=k(P),m=a("br"),v=r(),w=a("i"),b=k("Written by:\n\t\t\t");for(let t=0;t<J.length;t+=1)J[t].c();y=r(),D=E(),this.h()},l(t){e=i(t,"A",{href:!0});var r=c(e);s=x(r,"<- Back"),r.forEach(h),n=i(t,"BR",{}),l=o(t),u=i(t,"I",{});var a=c(u);$=x(a,"Posted: "),g=x(a,P),a.forEach(h),m=i(t,"BR",{}),v=o(t),w=i(t,"I",{});var f=c(w);b=x(f,"Written by:\n\t\t\t");for(let e=0;e<J.length;e+=1)J[e].l(f);f.forEach(h),y=o(t),D=E(),this.h()},h(){f(e,"href","/blog"),L=new j(D)},m(t,r){p(t,e,r),B(e,s),p(t,n,r),p(t,l,r),p(t,u,r),B(u,$),B(u,g),p(t,m,r),p(t,v,r),p(t,w,r),B(w,b);for(let e=0;e<J.length;e+=1)J[e].m(w,null);p(t,y,r),L.m(W,t,r),p(t,D,r)},p(t,e){if(1&e&&P!==(P=d(t[0].date).format("LL")+"")&&R(g,P),1&e){let s;for(H=t[0].authors,s=0;s<H.length;s+=1){const n=I(t,H,s);J[s]?J[s].p(n,e):(J[s]=T(n),J[s].c(),J[s].m(w,null))}for(;s<J.length;s+=1)J[s].d(1);J.length=H.length}1&e&&W!==(W=(t[0].content?t[1](t[0].content):"Error: Article is missing content")+"")&&L.p(W)},d(t){t&&h(e),t&&h(n),t&&h(l),t&&h(u),t&&h(m),t&&h(v),t&&h(w),A(J,t),t&&h(y),t&&h(D),t&&L.d()}}}function H(t){var e,s;let d,v,w,b,k,x,R;return d=new y({props:{title:(null!=(e=t[0].title)?e:t[0].slug)+" | Responsive Blog",description:null!=(s=t[0].description)?s:"The Responsive Blog, who knew this existed?"}}),w=new L({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),x=new D({props:{animate:!1,$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){n(d.$$.fragment),v=r(),n(w.$$.fragment),b=r(),k=a("div"),n(x.$$.fragment),this.h()},l(t){l(d.$$.fragment,t),v=o(t),l(w.$$.fragment,t),b=o(t),k=i(t,"DIV",{id:!0});var e=c(k);l(x.$$.fragment,e),e.forEach(h),this.h()},h(){f(k,"id","post")},m(t,e){u(d,t,e),p(t,v,e),u(w,t,e),p(t,b,e),p(t,k,e),u(x,k,null),R=!0},p(t,[e]){var s,n;const r={};1&e&&(r.title=(null!=(s=t[0].title)?s:t[0].slug)+" | Responsive Blog"),1&e&&(r.description=null!=(n=t[0].description)?n:"The Responsive Blog, who knew this existed?"),d.$set(r);const a={};129&e&&(a.$$scope={dirty:e,ctx:t}),w.$set(a);const l={};129&e&&(l.$$scope={dirty:e,ctx:t}),x.$set(l)},i(t){R||($(d.$$.fragment,t),$(w.$$.fragment,t),$(x.$$.fragment,t),R=!0)},o(t){g(d.$$.fragment,t),g(w.$$.fragment,t),g(x.$$.fragment,t),R=!1},d(t){m(d,t),t&&h(v),m(w,t),t&&h(b),t&&h(k),m(x)}}}async function J({page:t,fetch:e}){const s=t.params,n=await e(`https://respdev-blog.deno.dev/post/${s.slug}`),r=await n.json();if(r)return{props:{article:r}}}const M=!1;function S(t,e,s){d.extend(v);const n=new w,r=new b({softbreak:"<br>"});let{article:a}=e;return t.$$set=t=>{"article"in t&&s(0,a=t.article)},[a,t=>r.render(n.parse(t))]}export default class extends t{constructor(t){super(),e(this,t,S,H,s,{article:0})}}export{J as load,M as prerender};
