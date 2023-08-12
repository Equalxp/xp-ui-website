import{P as i,D as s,a as g}from"./Preview-330fbb28.js";import{_ as p,r,o as f,l as m,w as a,b as t,f as _,c as b,d as w,a as x}from"./index-d6dd6156.js";function d(e){e.__sourceCode=`<template>\r
  <xp-affix :offset="80" position="top">\r
    <xp-button theme="primary">距离顶部80px固定</xp-button>\r
  </xp-affix>\r
</template>`,e.__sourceCodeTitle="基础用法"}const h={};function A(e,c){const o=r("xp-button"),n=r("xp-affix");return f(),m(n,{offset:80,position:"top"},{default:a(()=>[t(o,{theme:"primary"},{default:a(()=>[_("距离顶部80px固定")]),_:1})]),_:1})}typeof d=="function"&&d(h);const $=p(h,[["render",A]]);function u(e){e.__sourceCode=`<template>\r
  <div class="affix-container">\r
    <xp-affix target=".affix-container" :offset="80">\r
      <xp-button theme="primary">距离顶部80px固定 始终在target容器中</xp-button>\r
    </xp-affix>\r
  </div>\r
</template>\r
<style scoped>\r
.affix-container {\r
  text-align: center;\r
  height: 800px;\r
  border-radius: 4px;\r
  background-color: #bfbfbf;\r
  width: 100%;\r
}\r
</style>`,e.__sourceCodeTitle="为 Affix 组件指定容器"}const v={},k={class:"affix-container"};function C(e,c){const o=r("xp-button"),n=r("xp-affix");return f(),b("div",k,[t(n,{target:".affix-container",offset:80},{default:a(()=>[t(o,{theme:"primary"},{default:a(()=>[_("距离顶部80px固定 始终在target容器中")]),_:1})]),_:1})])}typeof u=="function"&&u(v);const P=p(v,[["render",C],["__scopeId","data-v-3663a04a"]]);function l(e){e.__sourceCode=`<template>\r
  <xp-affix :offset="80" position="bottom">\r
    <xp-button theme="primary">距离底部80px固定</xp-button>\r
  </xp-affix>\r
</template>`,e.__sourceCodeTitle="固定 Affix 组件的位置"}const y={};function D(e,c){const o=r("xp-button"),n=r("xp-affix");return f(),m(n,{offset:80,position:"bottom"},{default:a(()=>[t(o,{theme:"primary"},{default:a(()=>[_("距离底部80px固定")]),_:1})]),_:1})}typeof l=="function"&&l(y);const T=p(y,[["render",D]]),B={class:"affix-doc-wrapper"},N=x("h1",null,"固钉 Affix",-1),V=x("p",null,"通过滚动时对目标元素进行判断是否即将离开可视区域，当即将离开可视区域时将目标元素固定在特定可视区域",-1),E={class:"preview-wrapper"},j=w({__name:"index",setup(e){const c=[["offset","偏移距离","number","-","0"],["position","固钉位置","string","top / bottom","top"],["target","指定容器（CSS 选择器）","string","-","-"],["z-index","固钉层级","	number","-","100"]],o=[["change","固钉状态改变时触发的事件","(value: boolean)"],["scroll","滚动时触发的事件	","Event"]],n=[["update","手动更新固钉状态","-"]];return(S,z)=>(f(),b("div",B,[N,V,x("div",E,[t(i,{component:$}),t(i,{component:P}),t(i,{component:T}),t(s,{title:"属性",type:"prop",body:c}),t(s,{title:"事件",type:"event",body:o}),t(s,{title:"方法",type:"methods",body:n}),t(g,{prev:{path:"/doc/message",name:"消息框 Message"},next:{path:"/doc/tabs",name:"标签页 Tabs"}})])]))}});export{j as default};
