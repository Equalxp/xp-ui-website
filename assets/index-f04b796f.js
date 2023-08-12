import{P as u,D as _,a as y}from"./Preview-330fbb28.js";import{d as m,r as d,c as i,b as e,k as s,F as v,o as p,_ as k,w as o,f as c,a as g}from"./index-d6dd6156.js";const n=""+new URL("avatar-260968a3.jpg",import.meta.url).href,z=m({__name:"AvatarPreview1.preview",setup(r){return(l,t)=>{const a=d("xp-avatar");return p(),i(v,null,[e(a,{src:s(n),size:"small"},null,8,["src"]),e(a,{src:s(n),size:"default"},null,8,["src"]),e(a,{src:s(n),size:"large"},null,8,["src"]),e(a,{src:s(n),size:100},null,8,["src"])],64)}}});function f(r){r.__sourceCode=`<template>\r
  <xp-avatar :src="imgUrl" size="small" />\r
  <xp-avatar :src="imgUrl" size="default" />\r
  <xp-avatar :src="imgUrl" size="large" />\r
  <xp-avatar :src="imgUrl" :size="100" />\r
</template>\r
<script setup lang="ts">\r
import imgUrl from "../../../assets/image/avatar.jpg";\r
<\/script>`,r.__sourceCodeTitle="尺寸"}typeof f=="function"&&f(z);const w=m({__name:"AvatarPreview2.preview",setup(r){return(l,t)=>{const a=d("xp-avatar");return p(),i(v,null,[e(a,{src:s(n),shape:"square",size:"small"},null,8,["src"]),e(a,{src:s(n),shape:"square",size:"default"},null,8,["src"]),e(a,{src:s(n),shape:"square",size:"large"},null,8,["src"]),e(a,{src:s(n),shape:"square",size:100},null,8,["src"])],64)}}});function x(r){r.__sourceCode=`<template>\r
  <xp-avatar :src="imgUrl" shape="square" size="small" />\r
  <xp-avatar :src="imgUrl" shape="square" size="default" />\r
  <xp-avatar :src="imgUrl" shape="square" size="large" />\r
  <xp-avatar :src="imgUrl" shape="square" :size="100" />\r
</template>\r
<script setup lang="ts">\r
import imgUrl from "../../../assets/image/avatar.jpg";\r
<\/script>`,r.__sourceCodeTitle="形状"}typeof x=="function"&&x(w);function h(r){r.__sourceCode=`<template>\r
  <xp-avatar size="large">默认</xp-avatar>\r
  <xp-avatar size="large">user</xp-avatar>\r
  <xp-avatar size="large" color="yellow" backgroundColor="red">M</xp-avatar>\r
  <xp-avatar size="large" shape="square" color="yellow" backgroundColor="red">\r
    M\r
  </xp-avatar>\r
</template>`,r.__sourceCodeTitle="颜色"}const b={};function U(r,l){const t=d("xp-avatar");return p(),i(v,null,[e(t,{size:"large"},{default:o(()=>[c("默认")]),_:1}),e(t,{size:"large"},{default:o(()=>[c("user")]),_:1}),e(t,{size:"large",color:"yellow",backgroundColor:"red"},{default:o(()=>[c("M")]),_:1}),e(t,{size:"large",shape:"square",color:"yellow",backgroundColor:"red"},{default:o(()=>[c(" M ")]),_:1})],64)}typeof h=="function"&&h(b);const q=k(b,[["render",U]]),C={class:"avatar-doc-wrapper"},A=g("h1",null,"Avatar 头像",-1),P=g("p",null,"Avatar 组件可以用来代表人和对象",-1),D={class:"preview-wrapper"},T=m({__name:"index",setup(r){const l=[["size","设置头像大小","number / string","number / large / default / small","default"],["shape","设置头像的形状","string","circle / square","circle"],["backgroundColor","头像框的背景颜色","string","-","white"],["src","图片头像的资源地址","string","-","-"],["alt","描述图像的替换文本","string","-","-"]],t=[["error","图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为","(e: Event)"]],a=[["default","自定义头像展示内容"]];return($,B)=>(p(),i("div",C,[A,P,g("div",D,[e(u,{component:z}),e(u,{component:w}),e(u,{component:q}),e(_,{title:"属性",type:"prop",body:l}),e(_,{title:"事件",type:"event",body:t}),e(_,{title:"插槽",type:"slot",body:a}),e(y,{prev:{path:"/doc/get-started",name:"快速使用"},next:{path:"/doc/button",name:"按钮 Button"}})])]))}});export{T as default};
