var E=Object.defineProperty;var b=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(b(t,typeof e!="symbol"?e+"":e,n),n);import{y as $,n as c,T as p,b as C,f as I,U as O,E as v,V as U,W as x,X as V,Y as j,Z as w,_ as B,$ as L,a0 as M,a1 as N,a2 as P}from"./scheduler.DCjwvZUi.js";const u=new Set;let f;function A(){f={r:0,c:[],p:f}}function D(){f.r||$(f.c),f=f.p}function R(t,e){t&&t.i&&(u.delete(t),t.i(e))}function F(t,e,n,a){if(t&&t.o){if(u.has(t))return;u.add(t),f.c.push(()=>{u.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function G(t){t&&t.c()}function H(t,e){t&&t.l(e)}function T(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),x(()=>{const d=t.$$.on_mount.map(B).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...d):$(d),t.$$.on_mount=[]}),i.forEach(x)}function W(t,e){const n=t.$$;n.fragment!==null&&(V(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){t.$$.dirty[0]===-1&&(L.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,a,i,d,l=null,S=[-1]){const o=j;w(t);const s=t.$$={fragment:null,ctx:[],props:d,update:c,not_equal:i,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:p(),dirty:S,skip_bound:!1,root:e.target||o.$$.root};l&&l(s.root);let h=!1;if(s.ctx=n?n(t,e.props||{},(r,g,...m)=>{const y=m.length?m[0]:g;return s.ctx&&i(s.ctx[r],s.ctx[r]=y)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](y),h&&X(t,r)),g}):[],s.update(),h=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){N();const r=C(e.target);s.fragment&&s.fragment.l(r),r.forEach(I)}else s.fragment&&s.fragment.c();e.intro&&R(t.$$.fragment),T(t,e.target,e.anchor),P(),O()}w(o)}class K{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){W(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!U(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{K as S,F as a,H as b,G as c,W as d,D as e,A as g,J as i,T as m,R as t};
