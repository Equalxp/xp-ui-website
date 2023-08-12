import{P as b,D as g,a as y}from"./Preview-330fbb28.js";import{d as _,q as f,r as l,l as v,w as t,o as i,b as e,f as r,c as h,a as d,F as P}from"./index-d6dd6156.js";const w=_({__name:"TabsPreview1.preview",setup(n){const o=f("半推半就");return(u,p)=>{const a=l("xp-tab"),s=l("xp-tabs");return i(),v(s,{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=c=>o.value=c)},{default:t(()=>[e(a,{title:"我们"},{default:t(()=>[r("我们")]),_:1}),e(a,{title:"半推半就"},{default:t(()=>[r("半推半就")]),_:1}),e(a,{title:"的"},{default:t(()=>[r("的")]),_:1}),e(a,{title:"人生"},{default:t(()=>[r("人生")]),_:1})]),_:1},8,["modelValue"])}}});function m(n){n.__sourceCode=`<template>\r
  <xp-tabs v-model="selected">\r
    <xp-tab title="我们">我们</xp-tab>\r
    <xp-tab title="半推半就">半推半就</xp-tab>\r
    <xp-tab title="的">的</xp-tab>\r
    <xp-tab title="人生">人生</xp-tab>\r
  </xp-tabs>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const selected = ref("半推半就");\r
<\/script>`,n.__sourceCodeTitle="基础用法"}typeof m=="function"&&m(w);const V=_({__name:"TabsPreview2.preview",setup(n){const o=f("我们");return(u,p)=>{const a=l("xp-tab"),s=l("xp-tabs");return i(),v(s,{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=c=>o.value=c),type:"card"},{default:t(()=>[e(a,{title:"我们"},{default:t(()=>[r("我们")]),_:1}),e(a,{title:"半推半就"},{default:t(()=>[r("半推半就")]),_:1}),e(a,{title:"的"},{default:t(()=>[r("的")]),_:1}),e(a,{title:"人生"},{default:t(()=>[r("人生")]),_:1})]),_:1},8,["modelValue"])}}});function x(n){n.__sourceCode=`<template>\r
  <xp-tabs v-model="selected" type="card">\r
    <xp-tab title="我们">我们</xp-tab>\r
    <xp-tab title="半推半就">半推半就</xp-tab>\r
    <xp-tab title="的">的</xp-tab>\r
    <xp-tab title="人生">人生</xp-tab>\r
  </xp-tabs>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const selected = ref("我们");\r
<\/script>`,n.__sourceCodeTitle="卡片风格"}typeof x=="function"&&x(V);const T=d("h1",null,"Tabs 标签页",-1),k=d("p",null,"在同一块区域切换内容。",-1),C={class:"preview-wrapper"},D=_({__name:"index",setup(n){const o=[["v-model","绑定值","boolean","-","-"],["type","风格类型","string","line / card","-"]];return(u,p)=>(i(),h(P,null,[T,k,d("div",C,[e(b,{component:w}),e(b,{component:V}),e(g,{title:"属性",type:"prop",body:o}),e(y,{prev:{path:"/doc/page-header",name:"页头 PggeHeader"}})])],64))}});export{D as default};
