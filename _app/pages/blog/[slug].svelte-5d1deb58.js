import{S as t,i as e,s,j as n,k as r,e as a,m as o,n as i,c as l,a as c,d as p,b as $,o as f,f as u,v as h,r as m,w as d,Y as g,_ as v,$ as w,a0 as k,t as x,g as b,h as R,a1 as B,l as E,J as A,M as L}from"../../chunks/vendor-8587846e.js";import{d as j}from"../../chunks/posts-c455c653.js";import{H as y,a as D,A as I}from"../../chunks/Article-573f3291.js";import"../../chunks/Button-655b436c.js";function P(t){var e;let s,n=(null!=(e=t[0].title)?e:t[0].slug)+"";return{c(){s=x(n)},l(t){s=b(t,n)},m(t,e){u(t,s,e)},p(t,e){var r;1&e&&n!==(n=(null!=(r=t[0].title)?r:t[0].slug)+"")&&R(s,n)},d(t){t&&p(s)}}}function T(t){var e;let s,n,o,f,h,m,d,v,w,k,j,y,D,I,P,T,W,_=g(t[0].date).format("LLL")+"",H=(null!=(e=t[0].author)?e:"Responsive")+"",J=(B(t[1]).content?t[2](B(t[1]).content):"Error: Article is missing content")+"";return{c(){s=a("a"),n=x("<- Back"),o=a("br"),f=r(),h=a("i"),m=x("Posted: "),d=x(_),v=a("br"),w=r(),k=a("i"),j=x("Written by: "),y=a("a"),D=x(H),P=r(),W=E(),this.h()},l(t){s=l(t,"A",{href:!0});var e=c(s);n=b(e,"<- Back"),e.forEach(p),o=l(t,"BR",{}),f=i(t),h=l(t,"I",{});var r=c(h);m=b(r,"Posted: "),d=b(r,_),r.forEach(p),v=l(t,"BR",{}),w=i(t),k=l(t,"I",{});var a=c(k);j=b(a,"Written by: "),y=l(a,"A",{target:!0,rel:!0,href:!0});var $=c(y);D=b($,H),$.forEach(p),a.forEach(p),P=i(t),W=E(),this.h()},h(){var e;$(s,"href","/blog"),$(y,"target","_blank"),$(y,"rel","external"),$(y,"href",I=null!=(e=t[0].link)?e:"https://twitter.com/RespDev"),T=new L(W)},m(t,e){u(t,s,e),A(s,n),u(t,o,e),u(t,f,e),u(t,h,e),A(h,m),A(h,d),u(t,v,e),u(t,w,e),u(t,k,e),A(k,j),A(k,y),A(y,D),u(t,P,e),T.m(J,t,e),u(t,W,e)},p(t,e){var s,n;1&e&&_!==(_=g(t[0].date).format("LLL")+"")&&R(d,_),1&e&&H!==(H=(null!=(s=t[0].author)?s:"Responsive")+"")&&R(D,H),1&e&&I!==(I=null!=(n=t[0].link)?n:"https://twitter.com/RespDev")&&$(y,"href",I),2&e&&J!==(J=(B(t[1]).content?t[2](B(t[1]).content):"Error: Article is missing content")+"")&&T.p(J)},d(t){t&&p(s),t&&p(o),t&&p(f),t&&p(h),t&&p(v),t&&p(w),t&&p(k),t&&p(P),t&&p(W),t&&T.d()}}}function W(t){var e,s;let g,v,w,k,x,b,R;return g=new y({props:{title:(null!=(e=t[0].title)?e:t[0].slug)+" | Responsive Blog",description:null!=(s=t[0].description)?s:"The Responsive Blog, who knew this existed?"}}),w=new D({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),b=new I({props:{animate:!1,$$slots:{default:[T]},$$scope:{ctx:t}}}),{c(){n(g.$$.fragment),v=r(),n(w.$$.fragment),k=r(),x=a("div"),n(b.$$.fragment),this.h()},l(t){o(g.$$.fragment,t),v=i(t),o(w.$$.fragment,t),k=i(t),x=l(t,"DIV",{id:!0});var e=c(x);o(b.$$.fragment,e),e.forEach(p),this.h()},h(){$(x,"id","post")},m(t,e){f(g,t,e),u(t,v,e),f(w,t,e),u(t,k,e),u(t,x,e),f(b,x,null),R=!0},p(t,[e]){var s,n;const r={};1&e&&(r.title=(null!=(s=t[0].title)?s:t[0].slug)+" | Responsive Blog"),1&e&&(r.description=null!=(n=t[0].description)?n:"The Responsive Blog, who knew this existed?"),g.$set(r);const a={};33&e&&(a.$$scope={dirty:e,ctx:t}),w.$set(a);const o={};35&e&&(o.$$scope={dirty:e,ctx:t}),b.$set(o)},i(t){R||(h(g.$$.fragment,t),h(w.$$.fragment,t),h(b.$$.fragment,t),R=!0)},o(t){m(g.$$.fragment,t),m(w.$$.fragment,t),m(b.$$.fragment,t),R=!1},d(t){d(g,t),t&&p(v),d(w,t),t&&p(k),t&&p(x),d(b)}}}async function _({page:t,fetch:e}){const s=t.params,n=j.find((t=>t.slug===s.slug));if(n)return{props:{article:n,content:await(await e(`/db/posts/${n.slug}.md`)).text()}}}function H(t,e,s){g.extend(v);const n=new w,r=new k({softbreak:"<br>"});let{article:a}=e,{content:o}=e;return t.$$set=t=>{"article"in t&&s(0,a=t.article),"content"in t&&s(1,o=t.content)},[a,o,t=>r.render(n.parse(t))]}export default class extends t{constructor(t){super(),e(this,t,H,W,s,{article:0,content:1})}}export{_ as load};