import{S as v,i as z,s as C,H as S,K as T,M as F,P as H,Q as q,y as J,a as N,k as w,q as P,z as Q,c as B,l as E,m as x,h as b,r as D,n as d,A as U,b as M,D as f,J as R,g as V,d as X,B as Y}from"../chunks/index.e4b580e2.js";function G(n){let a,s;return{c:S,l:S,m(e,o){a||(s=[T(document.body,"keyup",n[8]),T(document.body,"keyup",n[10]),T(document.body,"keydown",n[9]),T(document.body,"keydown",n[11])],a=!0)},p:S,i:S,o:S,d(e){a=!1,F(s)}}}function L(n,a,s){let e,o,{paused:h=!1}=a,{pauseOnInput:c=!1}=a,{separator:u="-"}=a;const l=H();let i=[],m=[];function O(t){q.call(this,n,t)}function _(t){q.call(this,n,t)}const k=({key:t})=>{s(4,m=m.filter(y=>y!==t)),!(m.length>0)&&s(2,i=[])},g=({key:t,target:y})=>{c&&y.tagName!=="BODY"||(s(4,m=[...m,t]),h||(t in o?l("combo",e):s(2,i=[...i,t]),l(t===" "?"Space":t),l("key",t)))};return n.$$set=t=>{"paused"in t&&s(0,h=t.paused),"pauseOnInput"in t&&s(1,c=t.pauseOnInput),"separator"in t&&s(7,u=t.separator)},n.$$.update=()=>{n.$$.dirty&132&&s(3,e=i.join(u)),n.$$.dirty&4&&s(5,o=i.reduce((t,y)=>({...t,[y]:!0}),{})),n.$$.dirty&12&&i.length>0&&l("combo",e)},[h,c,i,e,m,o,l,u,O,_,k,g]}class W extends v{constructor(a){super(),z(this,a,L,G,C,{paused:0,pauseOnInput:1,separator:7})}}const Z=W;function $(n){let a,s,e,o,h,c,u,l,i,m,O,_,k,g,t,y;return a=new Z({}),a.$on("Escape",n[2]),{c(){J(a.$$.fragment),s=N(),e=w("form"),o=w("textarea"),h=N(),c=w("div"),u=w("span"),l=w("span"),i=P("esc"),m=P("to cancel"),O=N(),_=w("button"),k=P("Edit"),this.h()},l(r){Q(a.$$.fragment,r),s=B(r),e=E(r,"FORM",{class:!0,action:!0,method:!0});var p=x(e);o=E(p,"TEXTAREA",{class:!0,id:!0,name:!0,placeholder:!0}),x(o).forEach(b),h=B(p),c=E(p,"DIV",{class:!0});var A=x(c);u=E(A,"SPAN",{});var I=x(u);l=E(I,"SPAN",{class:!0});var K=x(l);i=D(K,"esc"),K.forEach(b),m=D(I,"to cancel"),I.forEach(b),O=B(A),_=E(A,"BUTTON",{class:!0,type:!0});var j=x(_);k=D(j,"Edit"),j.forEach(b),A.forEach(b),p.forEach(b),this.h()},h(){d(o,"class","p-3 w-full bg-white h-80 max-h-80 min-h-[50px]"),d(o,"id","content"),d(o,"name","content"),d(o,"placeholder","Type your note here..."),d(l,"class","px-1 bg-gray-200 rounded-md mx-1"),d(_,"class","bg-blue-600 text-white px-2 rounded-md"),d(_,"type","submit"),d(c,"class","flex justify-between p-3 items-center bg-gray-100 w-full"),d(e,"class","drop-shadow-md"),d(e,"action","?/updateNote"),d(e,"method","POST")},m(r,p){U(a,r,p),M(r,s,p),M(r,e,p),f(e,o),R(o,n[0].content),f(e,h),f(e,c),f(c,u),f(u,l),f(l,i),f(u,m),f(c,O),f(c,_),f(_,k),g=!0,t||(y=T(o,"input",n[3]),t=!0)},p(r,[p]){p&1&&R(o,r[0].content)},i(r){g||(V(a.$$.fragment,r),g=!0)},o(r){X(a.$$.fragment,r),g=!1},d(r){Y(a,r),r&&b(s),r&&b(e),t=!1,y()}}}function tt(n,a,s){let e,{data:o}=a;const h=()=>history.back();function c(){e.content=this.value,s(0,e),s(1,o)}return n.$$set=u=>{"data"in u&&s(1,o=u.data)},n.$$.update=()=>{n.$$.dirty&2&&s(0,{note:e}=o,e)},[e,o,h,c]}class nt extends v{constructor(a){super(),z(this,a,tt,$,C,{data:1})}}export{nt as default};
