import{P as _,D as w,a as N}from"./Preview-330fbb28.js";import{d as g,r as h,c as l,b as e,w as r,F as d,x as t,y as x,o as m,f as o,a as f}from"./index-d6dd6156.js";const X=g({__name:"MessagePreview1.preview",setup(s){const a=()=>{t("This is a Message")},c=()=>{t({message:x("p",null,[x("span",null,"Message can be "),x("i",{style:"color: teal"},"VNode")])})};return(p,i)=>{const u=h("xp-button");return m(),l(d,null,[e(u,{onClick:a},{default:r(()=>[o("Show Message")]),_:1}),e(u,{onClick:c},{default:r(()=>[o("Vnode")]),_:1})],64)}}});function C(s){s.__sourceCode=`<template>\r
  <xp-button @click="open">Show Message</xp-button>\r
  <xp-button @click="openVn">Vnode</xp-button>\r
</template>\r
\r
<script setup lang="ts">\r
import { h } from "vue";\r
import XpMessage from "@/lib/message/index.ts";\r
\r
const open = () => {\r
  XpMessage("This is a Message");\r
  // XpMessage();\r
};\r
\r
const openVn = () => {\r
  XpMessage({\r
    // h返回值会被作为组件的DOM结构 VNode\r
    message: h("p", null, [\r
      h("span", null, "Message can be "),\r
      h("i", { style: "color: teal" }, "VNode"),\r
    ]),\r
  });\r
};\r
<\/script>`,s.__sourceCodeTitle="基础使用"}typeof C=="function"&&C(X);const v=g({__name:"MessagePreview2.preview",setup(s){const a=()=>{t("this is a message.")},c=()=>{t({message:"Congrats, this is a success message.",type:"success"})},p=()=>{t({message:"Warning, this is a warning message.",type:"warning"})},i=()=>{t.error("Oops, this is a error message.")};return(u,b)=>{const n=h("xp-button");return m(),l(d,null,[e(n,{onClick:a},{default:r(()=>[o("Info")]),_:1}),e(n,{onClick:c},{default:r(()=>[o("success")]),_:1}),e(n,{onClick:p},{default:r(()=>[o("Warning")]),_:1}),e(n,{onClick:i},{default:r(()=>[o("Error")]),_:1})],64)}}});function k(s){s.__sourceCode=`<template>\r
  <xp-button @click="open1">Info</xp-button>\r
  <xp-button @click="open2">success</xp-button>\r
  <xp-button @click="open3">Warning</xp-button>\r
  <xp-button @click="open4">Error</xp-button>\r
</template>\r
\r
<script setup lang="ts">\r
import XpMessage from "@/lib/message/index.ts";\r
\r
const open1 = () => {\r
  XpMessage("this is a message.");\r
};\r
const open2 = () => {\r
  XpMessage({\r
    message: "Congrats, this is a success message.",\r
    type: "success",\r
  });\r
};\r
const open3 = () => {\r
  XpMessage({\r
    message: "Warning, this is a warning message.",\r
    type: "warning",\r
  });\r
};\r
const open4 = () => {\r
  XpMessage.error("Oops, this is a error message.");\r
};\r
<\/script>`,s.__sourceCodeTitle="不同状态"}typeof k=="function"&&k(v);const V=g({__name:"MessagePreview3.preview",setup(s){const a=()=>{t({message:"this is a message.",showClose:!0})},c=()=>{t({message:"Congrats, this is a success message.",type:"success",showClose:!0})},p=()=>{t({message:"Warning, this is a warning message.",type:"warning",showClose:!0})},i=()=>{t({type:"error",message:"Oops, this is a error message.",showClose:!0,duration:0})};return(u,b)=>{const n=h("xp-button");return m(),l(d,null,[e(n,{onClick:a},{default:r(()=>[o("Info")]),_:1}),e(n,{onClick:c},{default:r(()=>[o("success")]),_:1}),e(n,{onClick:p},{default:r(()=>[o("Warning")]),_:1}),e(n,{onClick:i},{default:r(()=>[o("Error")]),_:1})],64)}}});function M(s){s.__sourceCode=`<template>\r
  <xp-button @click="open1">Info</xp-button>\r
  <xp-button @click="open2">success</xp-button>\r
  <xp-button @click="open3">Warning</xp-button>\r
  <xp-button @click="open4">Error</xp-button>\r
</template>\r
\r
<script setup lang="ts">\r
import XpMessage from "@/lib/message/index.ts";\r
\r
const open1 = () => {\r
  XpMessage({\r
    message: "this is a message.",\r
    showClose: true,\r
  });\r
};\r
const open2 = () => {\r
  XpMessage({\r
    message: "Congrats, this is a success message.",\r
    type: "success",\r
    showClose: true,\r
  });\r
};\r
const open3 = () => {\r
  XpMessage({\r
    message: "Warning, this is a warning message.",\r
    type: "warning",\r
    showClose: true,\r
  });\r
};\r
const open4 = () => {\r
  XpMessage({\r
    type: "error",\r
    message: "Oops, this is a error message.",\r
    showClose: true,\r
    duration: 0,\r
  });\r
};\r
<\/script>`,s.__sourceCodeTitle="可关闭的消息提示"}typeof M=="function"&&M(V);const W=g({__name:"MessagePreview4.preview",setup(s){const a=()=>{t({message:"this is a message.",showClose:!0,center:!0})},c=()=>{t({message:"Congrats, this is a success message.",type:"success",showClose:!0,center:!0})},p=()=>{t({message:"Warning, this is a warning message.",type:"warning",showClose:!0,center:!0})},i=()=>{t({type:"error",message:"Oops, this is a error message.",showClose:!0,duration:0,center:!0})};return(u,b)=>{const n=h("xp-button");return m(),l(d,null,[e(n,{onClick:a},{default:r(()=>[o("Info")]),_:1}),e(n,{onClick:c},{default:r(()=>[o("success")]),_:1}),e(n,{onClick:p},{default:r(()=>[o("Warning")]),_:1}),e(n,{onClick:i},{default:r(()=>[o("Error")]),_:1})],64)}}});function y(s){s.__sourceCode=`<template>\r
  <xp-button @click="open1">Info</xp-button>\r
  <xp-button @click="open2">success</xp-button>\r
  <xp-button @click="open3">Warning</xp-button>\r
  <xp-button @click="open4">Error</xp-button>\r
</template>\r
\r
<script setup lang="ts">\r
import XpMessage from "@/lib/message/index.ts";\r
\r
const open1 = () => {\r
  XpMessage({\r
    message: "this is a message.",\r
    showClose: true,\r
    center: true,\r
  });\r
};\r
const open2 = () => {\r
  XpMessage({\r
    message: "Congrats, this is a success message.",\r
    type: "success",\r
    showClose: true,\r
    center: true,\r
  });\r
};\r
const open3 = () => {\r
  XpMessage({\r
    message: "Warning, this is a warning message.",\r
    type: "warning",\r
    showClose: true,\r
    center: true,\r
  });\r
};\r
const open4 = () => {\r
  XpMessage({\r
    type: "error",\r
    message: "Oops, this is a error message.",\r
    showClose: true,\r
    duration: 0,\r
    center: true,\r
  });\r
};\r
<\/script>`,s.__sourceCodeTitle="居中"}typeof y=="function"&&y(W);const E={class:"message-doc-wrapper"},O=f("h1",null,"消息提示",-1),P=f("p",null,"浏览器顶部降下来的旨意",-1),T={class:"preview-wrapper"},I=g({__name:"index",setup(s){const a=[["message","消息文字","string / VNode","-","-"]],c=[["close","关闭当前的 Message","-"]];return(p,i)=>(m(),l("div",E,[O,P,f("div",T,[e(_,{component:X}),e(_,{component:v}),e(_,{component:V}),e(_,{component:W}),e(w,{title:"配置项",type:"prop",body:a}),e(w,{title:"方法",type:"methods",body:c}),e(N,{prev:{path:"/doc/dialog",name:"Dialog 对话框"},next:{path:"/doc/Affix",name:"固钉 Affix"}})])]))}});export{I as default};
