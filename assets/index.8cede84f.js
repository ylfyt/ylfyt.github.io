import{S as J,i as O,s as q,L as V,e as d,c as y,a as h,b as r,d as C,m as k,f as c,t as _,g as b,h as P,j,k as G,n as L,l as W,o as Y,p as Z,q as et,r as pt,u as at,v as $t,w as vt,x as K,y as Q,z as ht,A as _t,R as bt,B as U}from"./vendor.a6198b51.js";const wt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}};wt();function yt(a){let t;return{c(){t=d("div"),t.textContent="Yudi Alfayat",r(t,"class","nav-brand svelte-vu1u9t")},m(s,e){C(s,t,e)},d(s){s&&P(t)}}}function kt(a){let t;return{c(){t=G("About")},m(s,e){C(s,t,e)},d(s){s&&P(t)}}}function jt(a){let t;return{c(){t=G("Projects")},m(s,e){C(s,t,e)},d(s){s&&P(t)}}}function St(a){let t;return{c(){t=G("Contact")},m(s,e){C(s,t,e)},d(s){s&&P(t)}}}function xt(a){let t,s,e,n,l,u,i,g,f,$;return s=new V({props:{to:"/",class:"link",$$slots:{default:[yt]},$$scope:{ctx:a}}}),l=new V({props:{to:"about",class:"link",$$slots:{default:[kt]},$$scope:{ctx:a}}}),i=new V({props:{to:"projects",class:"link",$$slots:{default:[jt]},$$scope:{ctx:a}}}),f=new V({props:{to:"contact",class:"link",$$slots:{default:[St]},$$scope:{ctx:a}}}),{c(){t=d("div"),y(s.$$.fragment),e=h(),n=d("div"),y(l.$$.fragment),u=h(),y(i.$$.fragment),g=h(),y(f.$$.fragment),r(n,"class","nav-items svelte-vu1u9t"),r(t,"class","glass navbar svelte-vu1u9t")},m(m,p){C(m,t,p),k(s,t,null),c(t,e),c(t,n),k(l,n,null),c(n,u),k(i,n,null),c(n,g),k(f,n,null),$=!0},p(m,[p]){const o={};p&1&&(o.$$scope={dirty:p,ctx:m}),s.$set(o);const v={};p&1&&(v.$$scope={dirty:p,ctx:m}),l.$set(v);const x={};p&1&&(x.$$scope={dirty:p,ctx:m}),i.$set(x);const M={};p&1&&(M.$$scope={dirty:p,ctx:m}),f.$set(M)},i(m){$||(_(s.$$.fragment,m),_(l.$$.fragment,m),_(i.$$.fragment,m),_(f.$$.fragment,m),$=!0)},o(m){b(s.$$.fragment,m),b(l.$$.fragment,m),b(i.$$.fragment,m),b(f.$$.fragment,m),$=!1},d(m){m&&P(t),j(s),j(l),j(i),j(f)}}}class Ct extends J{constructor(t){super();O(this,t,null,xt,q,{})}}function Pt(a){let t,s;return{c(){t=d("a"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" class="svelte-1hgacx0"></path></svg>',r(t,"class","social-button glass svelte-1hgacx0"),r(t,"href","mailto:yalfayat@gmail.com"),r(t,"target","_blank")},m(e,n){C(e,t,n)},p:L,i(e){s||W(()=>{s=Y(t,Z,{}),s.start()})},o:L,d(e){e&&P(t)}}}class gt extends J{constructor(t){super();O(this,t,null,Pt,q,{})}}function Mt(a){let t,s;return{c(){t=d("a"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" class="svelte-1hgacx0"></path></svg>',r(t,"class","social-button glass svelte-1hgacx0"),r(t,"href","https://github.com/ylfyt"),r(t,"target","_blank")},m(e,n){C(e,t,n)},p:L,i(e){s||W(()=>{s=Y(t,Z,{}),s.start()})},o:L,d(e){e&&P(t)}}}class mt extends J{constructor(t){super();O(this,t,null,Mt,q,{})}}function Bt(a){let t,s;return{c(){t=d("a"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" class="svelte-1hgacx0"></path></svg>',r(t,"class","social-button glass svelte-1hgacx0"),r(t,"href","https://www.linkedin.com/in/yudi-alfayat-6371781b8/"),r(t,"target","_blank")},m(e,n){C(e,t,n)},p:L,i(e){s||W(()=>{s=Y(t,Z,{}),s.start()})},o:L,d(e){e&&P(t)}}}class dt extends J{constructor(t){super();O(this,t,null,Bt,q,{})}}function Tt(a){let t;return{c(){t=G("Contact Me")},m(s,e){C(s,t,e)},d(s){s&&P(t)}}}function At(a){let t,s,e,n,l,u,i,g,f,$,m,p,o,v,x,M,F,B,R,z,T;return o=new V({props:{to:"contact",id:"contact-button",class:"link glass",$$slots:{default:[Tt]},$$scope:{ctx:a}}}),M=new mt({}),B=new dt({}),z=new gt({}),{c(){t=d("div"),s=d("div"),s.innerHTML='<img src="./img/user.jpg" alt="" class="svelte-1r7v6ur"/>',n=h(),l=d("div"),u=d("div"),u.textContent="Hi, I'm Yudi",i=h(),g=d("div"),g.textContent="Computer Science student",f=h(),$=d("p"),$.textContent="I'm a computer science student who is very enthusiastic about technology",m=h(),p=d("div"),y(o.$$.fragment),v=h(),x=d("div"),y(M.$$.fragment),F=h(),y(B.$$.fragment),R=h(),y(z.$$.fragment),r(s,"class","profile svelte-1r7v6ur"),r(u,"class","text-title"),r(g,"class","text-secondary"),r($,"class","text-regular"),r(x,"class","social-wrapper svelte-1r7v6ur"),r(p,"class","contact-info svelte-1r7v6ur"),r(l,"class","quotes svelte-1r7v6ur"),r(t,"class","home svelte-1r7v6ur")},m(S,H){C(S,t,H),c(t,s),c(t,n),c(t,l),c(l,u),c(l,i),c(l,g),c(l,f),c(l,$),c(l,m),c(l,p),k(o,p,null),c(p,v),c(p,x),k(M,x,null),c(x,F),k(B,x,null),c(x,R),k(z,x,null),T=!0},p(S,[H]){const A={};H&1&&(A.$$scope={dirty:H,ctx:S}),o.$set(A)},i(S){T||(e||W(()=>{e=Y(s,Z,{}),e.start()}),_(o.$$.fragment,S),_(M.$$.fragment,S),_(B.$$.fragment,S),_(z.$$.fragment,S),T=!0)},o(S){b(o.$$.fragment,S),b(M.$$.fragment,S),b(B.$$.fragment,S),b(z.$$.fragment,S),T=!1},d(S){S&&P(t),j(o),j(M),j(B),j(z)}}}class Lt extends J{constructor(t){super();O(this,t,null,At,q,{})}}function Ft(a){let t;return{c(){t=d("div"),t.textContent="About"},m(s,e){C(s,t,e)},p:L,i:L,o:L,d(s){s&&P(t)}}}class Jt extends J{constructor(t){super();O(this,t,null,Ft,q,{})}}function rt(a,t,s){const e=a.slice();return e[1]=t[s],e}function it(a){let t,s=a[0].tags,e=[];for(let n=0;n<s.length;n+=1)e[n]=ot(rt(a,s,n));return{c(){t=d("div");for(let n=0;n<e.length;n+=1)e[n].c();r(t,"class","project-tags svelte-wcq0j2")},m(n,l){C(n,t,l);for(let u=0;u<e.length;u+=1)e[u].m(t,null)},p(n,l){if(l&1){s=n[0].tags;let u;for(u=0;u<s.length;u+=1){const i=rt(n,s,u);e[u]?e[u].p(i,l):(e[u]=ot(i),e[u].c(),e[u].m(t,null))}for(;u<e.length;u+=1)e[u].d(1);e.length=s.length}},d(n){n&&P(t),pt(e,n)}}}function ot(a){let t,s=a[1]+"",e;return{c(){t=d("div"),e=G(s),r(t,"class","project-tag svelte-wcq0j2")},m(n,l){C(n,t,l),c(t,e)},p(n,l){l&1&&s!==(s=n[1]+"")&&et(e,s)},d(n){n&&P(t)}}}function Ot(a){let t,s,e,n,l,u,i,g=a[0].description+"",f,$,m,p=a[0].tags.length>0&&it(a);return{c(){t=d("a"),s=d("div"),e=d("img"),l=h(),p&&p.c(),u=h(),i=d("div"),f=G(g),at(e.src,n="./img/projects/"+a[0].images[0])||r(e,"src",n),r(e,"alt",""),r(e,"class","svelte-wcq0j2"),r(i,"class","description text-regular svelte-wcq0j2"),r(s,"class","project-card glass svelte-wcq0j2"),r(t,"href",$=a[0].repository),r(t,"target","_blank"),r(t,"class","svelte-wcq0j2")},m(o,v){C(o,t,v),c(t,s),c(s,e),c(s,l),p&&p.m(s,null),c(s,u),c(s,i),c(i,f)},p(o,[v]){v&1&&!at(e.src,n="./img/projects/"+o[0].images[0])&&r(e,"src",n),o[0].tags.length>0?p?p.p(o,v):(p=it(o),p.c(),p.m(s,u)):p&&(p.d(1),p=null),v&1&&g!==(g=o[0].description+"")&&et(f,g),v&1&&$!==($=o[0].repository)&&r(t,"href",$)},i(o){m||W(()=>{m=Y(t,Z,{}),m.start()})},o:L,d(o){o&&P(t),p&&p.d()}}}function qt(a,t,s){let{project:e}=t;return a.$$set=n=>{"project"in n&&s(0,e=n.project)},[e]}class zt extends J{constructor(t){super();O(this,t,qt,Ot,q,{project:0})}}const ct=[{title:"Glassmorphism Portfolio Website",images:["glassmorphism.jpg"],repository:"https://github.com/ylfyt/Glassmorphism-Portfolio-Website",tags:["HTML","CSS","JavaScript","Bootstrap"],description:"Glassmorphism Portfolio Website using HTML, CSS, JavaScript, and Bootstrap"},{title:"Path finding using A-Star algorithm.",images:["pathfinding.gif"],repository:"https://github.com/ylfyt/A-Star_Hospital-Recommendation",tags:["Java","JavaFX"],description:"Path finding using A-Star algorithm. This app made with Java and JavaFX"},{title:"Friend Recommendation System",images:["friendrecommendation.gif"],repository:"https://github.com/ylfyt/Tubes2_13519009",tags:["C#",".NET"],description:"Friend Recommendation System using DFS and BFS algorithm. This is a desktop application made with Visual Studio C# Windows Form App (.NET Framework)"},{title:"RPG Games using JavaFX",images:["oop.gif"],repository:"https://github.com/ylfyt/Orientado-a-Objetos",tags:["Java","JavaFX"],description:"Application of Object Oriented Programming (OOP) concept in RPG Games. This game made with Java and JavaFX"},{title:"Perlu Dilindungi",images:["perlu-dilindungi/1.png"],repository:"https://github.com/ylfyt/Orientado-a-Objetos",tags:["Kotlin","Android"],description:"PerluDilindungi App, create with kotlin android"}];function ut(a,t,s){const e=a.slice();return e[0]=t[s],e}function ft(a){let t,s;return t=new zt({props:{project:a[0]}}),{c(){y(t.$$.fragment)},m(e,n){k(t,e,n),s=!0},p:L,i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}function Gt(a){let t,s,e,n=ct,l=[];for(let i=0;i<n.length;i+=1)l[i]=ft(ut(a,n,i));const u=i=>b(l[i],1,1,()=>{l[i]=null});return{c(){t=d("div"),s=d("div");for(let i=0;i<l.length;i+=1)l[i].c();r(s,"class","projects-container svelte-1rihno6"),r(t,"class","projects svelte-1rihno6")},m(i,g){C(i,t,g),c(t,s);for(let f=0;f<l.length;f+=1)l[f].m(s,null);e=!0},p(i,[g]){if(g&0){n=ct;let f;for(f=0;f<n.length;f+=1){const $=ut(i,n,f);l[f]?(l[f].p($,g),_(l[f],1)):(l[f]=ft($),l[f].c(),_(l[f],1),l[f].m(s,null))}for($t(),f=n.length;f<l.length;f+=1)u(f);vt()}},i(i){if(!e){for(let g=0;g<n.length;g+=1)_(l[g]);e=!0}},o(i){l=l.filter(Boolean);for(let g=0;g<l.length;g+=1)b(l[g]);e=!1},d(i){i&&P(t),pt(l,i)}}}class Ht extends J{constructor(t){super();O(this,t,null,Gt,q,{})}}function Nt(a){let t,s,e,n,l,u,i,g,f,$,m,p,o,v,x,M,F,B,R,z,T,S,H,A,E,st,X,nt,D,I,tt,lt;return E=new mt({}),X=new dt({}),D=new gt({}),{c(){t=d("div"),s=d("div"),e=d("form"),n=d("div"),n.textContent="Contact Me",l=h(),u=d("input"),i=h(),g=d("input"),f=h(),$=d("textarea"),m=h(),p=d("div"),o=d("button"),v=G("Submit"),M=h(),F=d("div"),B=G(a[0]),z=h(),T=d("div"),S=d("div"),S.textContent="Connect with Me",H=h(),A=d("div"),y(E.$$.fragment),st=h(),y(X.$$.fragment),nt=h(),y(D.$$.fragment),r(n,"class","text-title"),r(u,"type","text"),r(u,"placeholder","Name"),r(u,"class","glass svelte-15i9tpe"),r(g,"type","email"),r(g,"placeholder","Email"),r(g,"class","glass svelte-15i9tpe"),r($,"name","message"),r($,"id",""),r($,"cols","30"),r($,"rows","10"),r($,"placeholder","Message"),r($,"class","glass svelte-15i9tpe"),r(o,"type","submit"),r(o,"class","glass svelte-15i9tpe"),o.disabled=x=a[2]===""||a[3]===""||a[4]===""||a[1],r(F,"class","text-secondary"),r(p,"class","submit-wrapper svelte-15i9tpe"),r(e,"class","svelte-15i9tpe"),r(s,"class","form-wrapper svelte-15i9tpe"),r(S,"class","text-title"),r(A,"class","social-wrapper svelte-15i9tpe"),r(T,"class","social-container svelte-15i9tpe"),r(t,"class","contact svelte-15i9tpe")},m(w,N){C(w,t,N),c(t,s),c(s,e),c(e,n),c(e,l),c(e,u),K(u,a[2]),c(e,i),c(e,g),K(g,a[3]),c(e,f),c(e,$),K($,a[4]),c(e,m),c(e,p),c(p,o),c(o,v),c(p,M),c(p,F),c(F,B),c(t,z),c(t,T),c(T,S),c(T,H),c(T,A),k(E,A,null),c(A,st),k(X,A,null),c(A,nt),k(D,A,null),I=!0,tt||(lt=[Q(u,"input",a[6]),Q(g,"input",a[7]),Q($,"input",a[8]),Q(e,"submit",ht(a[5]))],tt=!0)},p(w,[N]){N&4&&u.value!==w[2]&&K(u,w[2]),N&8&&g.value!==w[3]&&K(g,w[3]),N&16&&K($,w[4]),(!I||N&30&&x!==(x=w[2]===""||w[3]===""||w[4]===""||w[1]))&&(o.disabled=x),(!I||N&1)&&et(B,w[0])},i(w){I||(R||W(()=>{R=Y(s,Z,{}),R.start()}),_(E.$$.fragment,w),_(X.$$.fragment,w),_(D.$$.fragment,w),I=!0)},o(w){b(E.$$.fragment,w),b(X.$$.fragment,w),b(D.$$.fragment,w),I=!1},d(w){w&&P(t),j(E),j(X),j(D),tt=!1,_t(lt)}}}function Rt(a,t,s){let e="",n=!1,l="",u="",i="";const g=async()=>{s(0,e="Please wait..."),s(1,n=!0);const p={name:l,email:u,message:i};fetch("https://script.google.com/macros/s/AKfycbxi-YF8VdT6mexJS6-1_GBhmvqIQkFloa6vZxTZTy2UJT6JiwDuvqROLmFoDZKmK_SX5w/exec",{method:"POST",body:JSON.stringify(p),headers:{"Content-type":"text/plain"}}).then(o=>o.text()).then(o=>{o==="true"?(s(0,e="Message sent"),s(2,l=""),s(3,u=""),s(4,i="")):s(0,e="Message failed to send"),s(1,n=!1)}).catch(o=>{s(0,e="Message failed to send"),s(1,n=!1)})};function f(){l=this.value,s(2,l)}function $(){u=this.value,s(3,u)}function m(){i=this.value,s(4,i)}return[e,n,l,u,i,g,f,$,m]}class Et extends J{constructor(t){super();O(this,t,Rt,Nt,q,{})}}function Xt(a){let t,s;return t=new Lt({}),{c(){y(t.$$.fragment)},m(e,n){k(t,e,n),s=!0},i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}function Dt(a){let t,s;return t=new Jt({}),{c(){y(t.$$.fragment)},m(e,n){k(t,e,n),s=!0},i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}function It(a){let t,s;return t=new Ht({}),{c(){y(t.$$.fragment)},m(e,n){k(t,e,n),s=!0},i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}function Kt(a){let t,s;return t=new Et({}),{c(){y(t.$$.fragment)},m(e,n){k(t,e,n),s=!0},i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}function Wt(a){let t,s,e,n,l,u,i,g,f,$,m,p;return s=new Ct({}),l=new U({props:{path:"/",$$slots:{default:[Xt]},$$scope:{ctx:a}}}),i=new U({props:{path:"about",$$slots:{default:[Dt]},$$scope:{ctx:a}}}),f=new U({props:{path:"projects",$$slots:{default:[It]},$$scope:{ctx:a}}}),m=new U({props:{path:"contact",$$slots:{default:[Kt]},$$scope:{ctx:a}}}),{c(){t=d("main"),y(s.$$.fragment),e=h(),n=d("div"),y(l.$$.fragment),u=h(),y(i.$$.fragment),g=h(),y(f.$$.fragment),$=h(),y(m.$$.fragment),r(n,"class","content glass svelte-1ahi7n7"),r(t,"class","svelte-1ahi7n7")},m(o,v){C(o,t,v),k(s,t,null),c(t,e),c(t,n),k(l,n,null),c(n,u),k(i,n,null),c(n,g),k(f,n,null),c(n,$),k(m,n,null),p=!0},p(o,v){const x={};v&1&&(x.$$scope={dirty:v,ctx:o}),l.$set(x);const M={};v&1&&(M.$$scope={dirty:v,ctx:o}),i.$set(M);const F={};v&1&&(F.$$scope={dirty:v,ctx:o}),f.$set(F);const B={};v&1&&(B.$$scope={dirty:v,ctx:o}),m.$set(B)},i(o){p||(_(s.$$.fragment,o),_(l.$$.fragment,o),_(i.$$.fragment,o),_(f.$$.fragment,o),_(m.$$.fragment,o),p=!0)},o(o){b(s.$$.fragment,o),b(l.$$.fragment,o),b(i.$$.fragment,o),b(f.$$.fragment,o),b(m.$$.fragment,o),p=!1},d(o){o&&P(t),j(s),j(l),j(i),j(f),j(m)}}}function Yt(a){let t,s;return t=new bt({props:{$$slots:{default:[Wt]},$$scope:{ctx:a}}}),{c(){y(t.$$.fragment)},m(e,n){k(t,e,n),s=!0},p(e,[n]){const l={};n&1&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}class Zt extends J{constructor(t){super();O(this,t,null,Yt,q,{})}}new Zt({target:document.getElementById("app")});
