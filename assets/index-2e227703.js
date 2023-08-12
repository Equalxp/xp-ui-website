import{P as i,D as x,a as q}from"./Preview-330fbb28.js";import{d as a,o as c,c as f,a as d,q as p,r as s,l as _,b as o,k as I,F as B,w as h,f as w}from"./index-d6dd6156.js";const M={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 28 28"},j=d("g",{fill:"none"},[d("path",{d:"M11.5 2a9.5 9.5 0 0 1 9.5 9.5c0 2.082-.67 4.007-1.805 5.573l6.366 6.366a1.5 1.5 0 0 1-2.008 2.225l-.114-.103l-6.366-6.366A9.458 9.458 0 0 1 11.5 21a9.5 9.5 0 0 1 0-19zm0 3a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13z",fill:"currentColor"})],-1),G=[j],V=a({name:"Search28Filled",render:function(n,r){return c(),f("svg",M,G)}}),P=a({__name:"InputPreview1.preview",setup(e){const n=p("hello world");return(r,t)=>{const l=s("xp-input");return c(),_(l,{placeholder:"请输入内容",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u)},null,8,["modelValue"])}}});function k(e){e.__sourceCode=`<template>\r
  <xp-input placeholder="请输入内容" v-model="value" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("hello world");\r
<\/script>`,e.__sourceCodeTitle="基础用法"}typeof k=="function"&&k(P);const T=a({__name:"InputPreview2.preview",setup(e){const n=p("hello world");return(r,t)=>{const l=s("xp-input");return c(),_(l,{placeholder:"请输入内容",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),disabled:""},null,8,["modelValue"])}}});function y(e){e.__sourceCode=`<template>\r
  <xp-input placeholder="请输入内容" v-model="value" disabled />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("hello world");\r
<\/script>`,e.__sourceCodeTitle="禁用状态"}typeof y=="function"&&y(T);const U=a({__name:"InputPreview3.preview",setup(e){const n=p("hello world");return(r,t)=>{const l=s("xp-input");return c(),_(l,{placeholder:"请输入内容",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),clearable:""},null,8,["modelValue"])}}});function g(e){e.__sourceCode=`<template>\r
  <xp-input placeholder="请输入内容" v-model="value" clearable />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello world");\r
<\/script>`,e.__sourceCodeTitle="可清空"}typeof g=="function"&&g(U);const R=a({__name:"InputPreview4.preview",setup(e){const n=p("hello world");return(r,t)=>{const l=s("xp-input");return c(),_(l,{placeholder:"请输入内容",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),"show-password":""},null,8,["modelValue"])}}});function C(e){e.__sourceCode=`<template>\r
  <!-- 显示密码type -->\r
  <xp-input placeholder="请输入内容" v-model="value" show-password />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello world");\r
<\/script>`,e.__sourceCodeTitle="密码框"}typeof C=="function"&&C(R);const D=a({__name:"InputPreview5.preview",setup(e){const n=p("hello world");return(r,t)=>{const l=s("xp-input");return c(),_(l,{placeholder:"请输入内容",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),type:"textarea",style:{width:"300px"}},null,8,["modelValue"])}}});function $(e){e.__sourceCode=`<template>\r
  <xp-input\r
    placeholder="请输入内容"\r
    v-model="value"\r
    type="textarea"\r
    style="width: 300px"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello world");\r
<\/script>`,e.__sourceCodeTitle="文本域"}typeof $=="function"&&$(D);const N=a({__name:"InputPreview6.preview",setup(e){const n=p("hello world"),r=p("hello world");return(t,l)=>{const u=s("xp-input");return c(),f(B,null,[o(u,{placeholder:"请输入内容",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=m=>n.value=m),suffixIcon:I(V),"show-password":"",clearable:""},null,8,["modelValue","suffixIcon"]),o(u,{placeholder:"请输入内容",modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=m=>r.value=m),prefixIcon:I(V)},null,8,["modelValue","prefixIcon"])],64)}}});function F(e){e.__sourceCode=`<template>\r
  <xp-input\r
    placeholder="请输入内容"\r
    v-model="value"\r
    :suffixIcon="Search28Filled"\r
    show-password\r
    clearable\r
  />\r
  <xp-input\r
    placeholder="请输入内容"\r
    v-model="value1"\r
    :prefixIcon="Search28Filled"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
import { Search28Filled } from "@vicons/fluent";\r
\r
const value = ref("hello world");\r
const value1 = ref("hello world");\r
<\/script>`,e.__sourceCodeTitle="带 icon 的输入框"}typeof F=="function"&&F(N);const E=a({__name:"InputPreview7.preview",setup(e){const n=p("life is fucking movie 人生如戏啊"),r=p(),t=()=>{r.value.focus()},l=()=>{r.value.blur()},u=()=>{r.value.select()};return(m,b)=>{const v=s("xp-button"),z=s("xp-input");return c(),f(B,null,[o(v,{onClick:t},{default:h(()=>[w("Focus")]),_:1}),o(v,{onClick:u},{default:h(()=>[w("Select")]),_:1}),o(v,{onClick:l},{default:h(()=>[w("Blur")]),_:1}),o(z,{placeholder:"请输入内容",modelValue:n.value,"onUpdate:modelValue":b[0]||(b[0]=A=>n.value=A),ref_key:"inputInstRef",ref:r},null,8,["modelValue"])],64)}}});function S(e){e.__sourceCode=`<template>\r
  <xp-button @click="handleFocus">Focus</xp-button>\r
  <xp-button @click="handleSelect">Select</xp-button>\r
  <xp-button @click="handleBlur">Blur</xp-button>\r
  <xp-input placeholder="请输入内容" v-model="value" ref="inputInstRef" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("life is fucking movie 人生如戏啊");\r
const inputInstRef = ref();\r
const handleFocus = () => {\r
  inputInstRef.value.focus();\r
};\r
const handleBlur = () => {\r
  inputInstRef.value.blur();\r
};\r
const handleSelect = () => {\r
  inputInstRef.value.select();\r
};\r
<\/script>`,e.__sourceCodeTitle="手动 focus / select / blur"}typeof S=="function"&&S(E);const H={class:"input-doc-wrapper"},J=d("h1",null,"Input输入框",-1),K=d("p",null,"通过鼠标或键盘输入字符",-1),L={class:"preview-wrapper"},W=a({__name:"index",setup(e){const n=[["type","类型","string","text，textarea 和其他 原生 input 的 type 值","text"],[" v-model","绑定值","string / number","-","-"],["placeholder","输入框占位文本","string","-","-"],["clearable","是否可清空","boolean","-","false"],["disabled","	禁用","boolean","-","false"],["prefix-icon","输入框头部图标","Component","-","-"],["suffix-icon","输入框尾部图标","Component","-","-"],["readonly","原生属性，是否只读","	boolean","-","false"]],r=[["input","在 Input 值改变时触发","(value: string / number)"],["clear","在点击由 clearable 属性生成的清空按钮时触发","-"],["blur","在 Input 失去焦点时触发","(event: Event)"],["focus","在 Input 获得焦点时触发","(event: Event)"]],t=[["input","使 input 获取焦点","-"],["blur","使 input 失去焦点","-"],["select","选中 input 中的文字","-"]];return(l,u)=>(c(),f("div",H,[J,K,d("div",L,[o(i,{component:P}),o(i,{component:T}),o(i,{component:U}),o(i,{component:R}),o(i,{component:D}),o(i,{component:N}),o(i,{component:E}),o(x,{title:"Input 属性",type:"prop",body:n}),o(x,{title:"Input 事件",type:"event",body:r}),o(x,{title:"Input 方法",type:"methods",body:t}),o(q,{prev:{path:"/doc/checkbox",name:"多选框 Checkbox"},next:{path:"/doc/select",name:"选择器 Select"}})])]))}});export{W as default};
