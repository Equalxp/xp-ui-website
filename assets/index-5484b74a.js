import{_ as S}from"./Topnav.vue_vue_type_style_index_0_lang-ce5cd712.js";import{d as B,i as u,h as a,r as d,c as s,b as _,a as t,n as l,F as p,j as v,k as C,o as n,t as r,l as j,w as N,f as V,m as $}from"./index-d6dd6156.js";const b={class:"layout"},A={class:"content"},F={class:"menu"},W={class:"menu-group-title text-overflow"},X=t("svg",{class:"icon","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-xiangyoujiantou"})],-1),z=[X],q=B({__name:"index",setup(D){const e=u("asideVisible"),m=u("clientWidth"),g=()=>{e.value=!e.value},f=a(()=>({left:e!=null&&e.value?"0px":"-272px"})),h=a(()=>({left:e.value?"272px":"0px",transform:e.value?"rotate(180deg) translateX(50%)":"rotate(0deg) translateX(50%)"})),x=a(()=>m.value<500?{"padding-left":"24px"}:{"padding-left":e.value?"302px":"60px"});return(E,L)=>{const y=d("router-link"),k=d("router-view");return n(),s("div",b,[_(S,{class:"nav"}),t("div",A,[t("aside",{style:l(f.value)},[t("div",F,[(n(!0),s(p,null,v(C($),(c,o)=>(n(),s("div",{class:"menu-group",key:o},[t("span",W,r(o)+r(o!=="文档"?`（${c.length}）`:""),1),(n(!0),s(p,null,v(c,(i,w)=>(n(),j(y,{key:w,class:"menu-item text-overflow",to:`/doc/${i.path}`},{default:N(()=>[V(r(i.name),1)]),_:2},1032,["to"]))),128))]))),128))])],4),t("div",{class:"toggle-button",onClick:g,style:l(h.value)},z,4),t("main",{style:l(x.value),id:"doc-content-container"},[_(k)],4)])])}}});export{q as default};
