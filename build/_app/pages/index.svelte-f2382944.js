import{S as s,i as e,s as t,e as a,t as r,c as o,a as l,b as c,d as i,o as n,f as u,g as h,n as m,j as f,l as g,G as p,p as v,q as d,r as y,w as $,x as b,y as E,H as I}from"../chunks/index-4575880b.js";import{N as S}from"../chunks/nav-701373c5.js";var q=[{short:"QISKit",time:"Winter 2021",page:"qis",long:"Quantum Information & Security (Kit)",image:"https://bpgc-cte.s3.ap-south-1.amazonaws.com/coverImage-qis3-1610508686415.png",about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus harum explicabo perferendis consectetur dolor repellat inventore quibusdam sint quo. Temporibus."},{short:"TOR",time:"Winter 2021",page:"tor",long:"Introduction to Theory of Relativity",image:"https://bpgc-cte.s3.ap-south-1.amazonaws.com/coverImage-tor3-1610508935146.png",about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus harum explicabo perferendis consectetur dolor repellat inventore quibusdam sint quo. Temporibus."}];function x(s){let e,t;return{c(){e=a("footer"),t=r("A SEDS Celestia Creation | A Plutoniumm Product"),this.h()},l(s){e=o(s,"FOOTER",{class:!0});var a=l(e);t=c(a,"A SEDS Celestia Creation | A Plutoniumm Product"),a.forEach(i),this.h()},h(){n(e,"class","svelte-1rsfpuc")},m(s,a){u(s,e,a),h(e,t)},p:m,i:m,o:m,d(s){s&&i(e)}}}class w extends s{constructor(s){super(),e(this,s,null,x,t,{})}}function D(s,e,t){const a=s.slice();return a[0]=e[t],a}function T(s){let e,t,v,d,y,$,b,E,I,S,q,x,w,D,T,A,C,P,N=s[0].long+"",O=s[0].short+"",V=s[0].time+"",j=s[0].about+"";return{c(){e=a("a"),t=a("div"),v=a("img"),y=f(),$=a("div"),b=a("div"),E=r(N),I=f(),S=a("div"),q=r(O),x=r(" ("),w=r(V),D=r(")"),T=f(),A=a("p"),C=r(j),P=f(),this.h()},l(s){e=o(s,"A",{href:!0,style:!0});var a=l(e);t=o(a,"DIV",{class:!0});var r=l(t);v=o(r,"IMG",{src:!0,alt:!0,class:!0}),y=g(r),$=o(r,"DIV",{class:!0});var n=l($);b=o(n,"DIV",{style:!0,class:!0});var u=l(b);E=c(u,N),u.forEach(i),I=g(n),S=o(n,"DIV",{class:!0});var h=l(S);q=c(h,O),x=c(h," ("),w=c(h,V),D=c(h,")"),h.forEach(i),T=g(n),A=o(n,"P",{class:!0});var m=l(A);C=c(m,j),m.forEach(i),n.forEach(i),r.forEach(i),P=g(a),a.forEach(i),this.h()},h(){v.src!==(d=s[0].image)&&n(v,"src",d),n(v,"alt",""),n(v,"class","svelte-1he07yy"),p(b,"font-weight","600"),n(b,"class","svelte-1he07yy"),n(S,"class","svelte-1he07yy"),n(A,"class","svelte-1he07yy"),n($,"class","svelte-1he07yy"),n(t,"class","course svelte-1he07yy"),n(e,"href","/courses/"+s[0].page),p(e,"color","unset")},m(s,a){u(s,e,a),h(e,t),h(t,v),h(t,y),h(t,$),h($,b),h(b,E),h($,I),h($,S),h(S,q),h(S,x),h(S,w),h(S,D),h($,T),h($,A),h(A,C),h(e,P)},p:m,d(s){s&&i(e)}}}function A(s){let e,t,r,c,h,m;e=new S({});let p=q,x=[];for(let a=0;a<p.length;a+=1)x[a]=T(D(s,p,a));return h=new w({}),{c(){v(e.$$.fragment),t=f(),r=a("section");for(let s=0;s<x.length;s+=1)x[s].c();c=f(),v(h.$$.fragment),this.h()},l(s){d(e.$$.fragment,s),t=g(s),r=o(s,"SECTION",{class:!0});var a=l(r);for(let e=0;e<x.length;e+=1)x[e].l(a);a.forEach(i),c=g(s),d(h.$$.fragment,s),this.h()},h(){n(r,"class","svelte-1he07yy")},m(s,a){y(e,s,a),u(s,t,a),u(s,r,a);for(let e=0;e<x.length;e+=1)x[e].m(r,null);u(s,c,a),y(h,s,a),m=!0},p(s,[e]){if(0&e){let t;for(p=q,t=0;t<p.length;t+=1){const a=D(s,p,t);x[t]?x[t].p(a,e):(x[t]=T(a),x[t].c(),x[t].m(r,null))}for(;t<x.length;t+=1)x[t].d(1);x.length=p.length}},i(s){m||($(e.$$.fragment,s),$(h.$$.fragment,s),m=!0)},o(s){b(e.$$.fragment,s),b(h.$$.fragment,s),m=!1},d(s){E(e,s),s&&i(t),s&&i(r),I(x,s),s&&i(c),E(h,s)}}}export default class extends s{constructor(s){super(),e(this,s,null,A,t,{})}}