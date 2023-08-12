import{P as b,D as m,a as v}from"./Preview-330fbb28.js";import{_ as g,r as s,o as i,l as x,w as r,b as e,f as n,a as c,d,c as f,k as B}from"./index-d6dd6156.js";function _(t){t.__sourceCode=`<template>\r
  <xp-breadcrumb>\r
    <xp-breadcrumb-item :to="{ path: '/' }">homepage</xp-breadcrumb-item>\r
    <xp-breadcrumb-item>\r
      <a href="/">promotion management</a>\r
    </xp-breadcrumb-item>\r
    <xp-breadcrumb-item>promotion list</xp-breadcrumb-item>\r
    <xp-breadcrumb-item>promotion detail</xp-breadcrumb-item>\r
  </xp-breadcrumb>\r
</template>`,t.__sourceCodeTitle="基础用法"}const h={},k=c("a",{href:"/"},"promotion management",-1);function y(t,p){const a=s("xp-breadcrumb-item"),o=s("xp-breadcrumb");return i(),x(o,null,{default:r(()=>[e(a,{to:{path:"/"}},{default:r(()=>[n("homepage")]),_:1}),e(a,null,{default:r(()=>[k]),_:1}),e(a,null,{default:r(()=>[n("promotion list")]),_:1}),e(a,null,{default:r(()=>[n("promotion detail")]),_:1})]),_:1})}typeof _=="function"&&_(h);const $=g(h,[["render",y]]),C={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},I=c("path",{d:"M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z",fill:"currentColor"},null,-1),A=[I],D=d({name:"ArrowForwardIosSharp",render:function(p,a){return i(),f("svg",C,A)}}),P=c("a",{href:"/"},"promotion management",-1),w=d({__name:"BreadcrumbPreview2.preview",setup(t){return(p,a)=>{const o=s("xp-breadcrumb-item"),u=s("xp-breadcrumb");return i(),x(u,{"separator-icon":B(D)},{default:r(()=>[e(o,{to:{path:"/"}},{default:r(()=>[n("homepage")]),_:1}),e(o,null,{default:r(()=>[P]),_:1}),e(o,null,{default:r(()=>[n("promotion list")]),_:1}),e(o,null,{default:r(()=>[n("promotion detail")]),_:1})]),_:1},8,["separator-icon"])}}});function l(t){t.__sourceCode=`<template>\r
  <xp-breadcrumb :separator-icon="ArrowForwardIosSharp">\r
    <xp-breadcrumb-item :to="{ path: '/' }">homepage</xp-breadcrumb-item>\r
    <xp-breadcrumb-item>\r
      <a href="/">promotion management</a>\r
    </xp-breadcrumb-item>\r
    <xp-breadcrumb-item>promotion list</xp-breadcrumb-item>\r
    <xp-breadcrumb-item>promotion detail</xp-breadcrumb-item>\r
  </xp-breadcrumb>\r
</template>\r
\r
<script setup lang="ts">\r
import { ArrowForwardIosSharp } from "@vicons/material";\r
<\/script>`,t.__sourceCodeTitle="图标分隔符"}typeof l=="function"&&l(w);const F={class:"breadcrumb-doc-wrapper"},L=c("h1",null,"面包屑 Breadcrumb",-1),N={class:"preview-wrapper"},j=d({__name:"index",setup(t){const p=[["separator","分隔符","string","-","/"],["separator-icon","图标分隔符的组件或组件名","Component","-","-"]],a=[["to","路由跳转目标，同 vue-router 的 to属性","object","-","/"],["separator-icon","如果设置该属性为 true, 导航将不会留下历史记录","boolean","-","false"]],o=[["default","自定义默认内容"]];return(u,S)=>(i(),f("div",F,[L,c("div",N,[e(b,{component:$}),e(b,{component:w}),e(m,{title:"Breadcrumb 属性",type:"prop",body:p}),e(m,{title:"Breadcrumb 插槽",type:"slot",body:o}),e(m,{title:"Breadcrumb Item 属性",type:"prop",body:a}),e(m,{title:"Breadcrumb Item 插槽",type:"slot",body:o}),e(v,{prev:{path:"/doc/backtop",name:"回到顶部 Backtop"},next:{path:"/doc/tabs",name:"标签页 Tabs"}})])]))}});export{j as default};
