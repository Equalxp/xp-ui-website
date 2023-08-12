import{P as u,D as g,a as y}from"./Preview-330fbb28.js";import{d as i,q as a,r as m,c as _,b as n,F as f,o as d,l as z,a as v}from"./index-d6dd6156.js";const x=i({__name:"SwitchPreview1.preview",setup(e){const t=a(!1);return(c,o)=>{const s=m("xp-switch");return d(),_(f,null,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l)},null,8,["modelValue"]),n(s,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=l=>t.value=l),disabled:""},null,8,["modelValue"])],64)}}});function h(e){e.__sourceCode=`<template>\r
  <xp-switch v-model="checked" />\r
  <xp-switch v-model="checked" disabled />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,e.__sourceCodeTitle=" 基础用法 "}typeof h=="function"&&h(x);const V=i({__name:"SwitchPreview2.preview",setup(e){const t=a(!1);return(c,o)=>{const s=m("xp-switch");return d(),z(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l),"active-color":"red","inactive-color":"pink"},null,8,["modelValue"])}}});function w(e){e.__sourceCode=`<template>\r
  <xp-switch v-model="checked" active-color="red" inactive-color="pink"></xp-switch>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,e.__sourceCodeTitle="自定义颜色"}typeof w=="function"&&w(V);const b=i({__name:"SwitchPreview3.preview",setup(e){const t=a(!1),c=a(!1),o=a(!1);return(s,l)=>{const p=m("xp-switch");return d(),_(f,null,[n(p,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=r=>t.value=r),size:"small"},null,8,["modelValue"]),n(p,{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=r=>c.value=r),size:"default"},null,8,["modelValue"]),n(p,{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=r=>o.value=r),size:"large"},null,8,["modelValue"])],64)}}});function k(e){e.__sourceCode=`<template>\r
  <xp-switch v-model="checked" size="small" />\r
  <xp-switch v-model="checked1" size="default" />\r
  <xp-switch v-model="checked2" size="large" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
const checked1 = ref(false);\r
const checked2 = ref(false);\r
<\/script>`,e.__sourceCodeTitle="尺寸"}typeof k=="function"&&k(b);const P=v("h1",null,"Switch 开关",-1),U=v("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1),C={class:"preview-wrapper"},B=i({__name:"index",setup(e){const t=[["v-model","绑定值","boolean","-","false"],["active-color","在开启状态时的背景颜色","string","-","#18a058"],["inactive-color","在关闭状态时的背景颜色","string","-","#dbdbdb"],["disabled","是否禁用","boolean","-","false"],["size","大小","string","small / default / large","default"]];return(c,o)=>(d(),_(f,null,[P,U,v("div",C,[n(u,{component:x}),n(u,{component:V}),n(u,{component:b}),n(g,{title:"属性",type:"prop",body:t}),n(y,{prev:{path:"/doc/select",name:"选择器 Select"},next:{path:"/doc/radio",name:"单选框 Radio"}})])],64))}});export{B as default};
