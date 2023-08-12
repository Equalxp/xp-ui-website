import{P as b,D as p,a as w}from"./Preview-330fbb28.js";import{d as _,q as k,r as s,c as m,b as o,w as u,F as d,o as f,f as v,a as g}from"./index-d6dd6156.js";const C=_({__name:"DialogPreview1.preview",setup(t){const e=k(!1),l=()=>{e.value=!e.value};return(r,a)=>{const n=s("xp-button"),i=s("xp-dialog");return f(),m(d,null,[o(n,{theme:"primary",onClick:l},{default:u(()=>[v("点击打开对话框")]),_:1}),o(i,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c)},null,8,["modelValue"])],64)}}});function x(t){t.__sourceCode=`<template>\r
  <xp-button theme="primary" @click="toggle">点击打开对话框</xp-button>\r
  <xp-dialog v-model="visible" />\r
</template>\r
  \r
<script setup lang="ts">\r
import { ref } from "vue";\r
const visible = ref(false);\r
\r
const toggle = () => {\r
  visible.value = !visible.value;\r
};\r
<\/script>`,t.__sourceCodeTitle="基础用法"}typeof x=="function"&&x(C);const D=_({__name:"DialogPreview2.preview",setup(t){const e=k(!1),l=()=>{e.value=!e.value},r=()=>{console.log("我觉得用户应该聪明到点遮罩没用的时候就去点确认了。")};return(a,n)=>{const i=s("xp-button"),c=s("xp-dialog");return f(),m(d,null,[o(i,{theme:"primary",onClick:l},{default:u(()=>[v("点击打开对话框")]),_:1}),o(c,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=h=>e.value=h),"overlay-closable":!1,onOnOverlayClick:r},{default:u(()=>[v(" 我觉得用户应该聪明到点遮罩没用的时候就去点确认了。 ")]),_:1},8,["modelValue"])],64)}}});function y(t){t.__sourceCode=`<template>\r
  <xp-button theme="primary" @click="toggle">点击打开对话框</xp-button>\r
  <xp-dialog\r
    v-model="visible"\r
    :overlay-closable="false"\r
    @onOverlayClick="onOverlayClick"\r
  >\r
    我觉得用户应该聪明到点遮罩没用的时候就去点确认了。\r
  </xp-dialog>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const visible = ref(false);\r
\r
const toggle = () => {\r
  visible.value = !visible.value;\r
};\r
\r
const onOverlayClick = () => {\r
  console.log("我觉得用户应该聪明到点遮罩没用的时候就去点确认了。");\r
};\r
<\/script>`,t.__sourceCodeTitle=" 点击遮罩 "}typeof y=="function"&&y(D);const V=g("h1",null,"Dialog 对话框",-1),O=g("p",null,"在保留当前页面状态的情况下，告知用户并承载相关操作。",-1),P={class:"preview-wrapper"},T=_({__name:"index",setup(t){const e=[["v-model","绑定值","boolean","-","flase"],["overlay","是否需要背景遮罩","boolean","-","true"],["title","标题","string","-","标题"],["overlay-closebale","是否可以通过点击overlay关闭对话框","boolean","-","true"]],l=[["-","Dialog 的内容"],["title","Dialog 标题区的内容"],["footer","Dialog 按钮操作区的内容"]],r=[["confirm","点击确认按钮的回调","-"],["cancel","点击取消按钮的回调","-"],["onOverlayClick","点击遮罩的回调","-"]];return(a,n)=>(f(),m(d,null,[V,O,g("div",P,[o(b,{component:C}),o(b,{component:D}),o(p,{title:"属性",type:"prop",body:e}),o(p,{title:"插槽",type:"slot",body:l}),o(p,{title:"事件",type:"event",body:r}),o(w,{prev:{path:"/doc/alert",name:"Alert 提示"},next:{path:"/doc/message",name:"信息 Message"}})])],64))}});export{T as default};
