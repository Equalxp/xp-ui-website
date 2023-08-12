import{P as a,D as f,a as S}from"./Preview-330fbb28.js";import{d as _,o as i,c as p,a as u,_ as b,r as o,b as e,F as x,w as l,k as d,l as E}from"./index-d6dd6156.js";const C={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},P=u("path",{d:`M407.7,224c-3.4,0-14.8,0.1-18,0.3l-64.9,1.7c-0.7,0-1.4-0.3-1.7-0.9L225.8,79.4c-2.9-4.6-8.1-7.4-13.5-7.4h-23.7
	c-5.6,0-7.5,5.6-5.5,10.8l50.1,142.8c0.5,1.3-0.4,2.7-1.8,2.7l-122.4,1.8c-2.6,0.1-5-1.1-6.6-3.1l-37-45c-3-3.9-7.7-6.1-12.6-6.1H36
	c-2.8,0-4.7,2.7-3.8,5.3l19.9,68.7c1.5,3.8,1.5,8.1,0,11.9l-19.9,68.7c-0.9,2.6,1,5.3,3.8,5.3h16.7c4.9,0,9.6-2.3,12.6-6.1L103,284
	c1.6-2,4.1-3.2,6.6-3.1l121.7,2.7c1.4,0.1,2.3,1.4,1.8,2.7L183,429.2c-2,5.2-0.1,10.8,5.5,10.8h23.7c5.5,0,10.6-2.8,13.5-7.4
	L323.1,287c0.4-0.6,1-0.9,1.7-0.9l64.9,1.7c3.3,0.2,14.6,0.3,18,0.3c44.3,0,72.3-14.3,72.3-32S452.1,224,407.7,224z`},null,-1),W=[P],w=_({name:"IosAirplane",render:function(c,r){return i(),p("svg",C,W)}});function m(t){t.__sourceCode=`<template>\r
  <xp-alert title="Default 类型" />\r
  <xp-alert title="Info 类型" type="info" />\r
  <xp-alert title="Success 类型" type="success" />\r
  <xp-alert title="Warning 类型" type="warning" />\r
  <xp-alert title="Error 类型" type="error" />\r
</template>`,t.__sourceCodeTitle="基础用法"}const A={};function z(t,c){const r=o("xp-alert");return i(),p(x,null,[e(r,{title:"Default 类型"}),e(r,{title:"Info 类型",type:"info"}),e(r,{title:"Success 类型",type:"success"}),e(r,{title:"Warning 类型",type:"warning"}),e(r,{title:"Error 类型",type:"error"})],64)}typeof m=="function"&&m(A);const B=b(A,[["render",z]]),I=_({__name:"AlertPreview2.preview",setup(t){return(c,r)=>{const s=o("xp-icon"),n=o("xp-alert");return i(),p(x,null,[e(n,{title:"Default 类型"},{icon:l(()=>[e(s,{class:"xp-alert-icon",size:22},{default:l(()=>[e(d(w))]),_:1})]),_:1}),e(n,{title:"Info 类型",type:"info","show-icon":""}),e(n,{title:"Success 类型",type:"success","show-icon":""}),e(n,{title:"Warning 类型",type:"warning","show-icon":""}),e(n,{title:"Error 类型",type:"error","show-icon":""})],64)}}});function h(t){t.__sourceCode=`<template>\r
  <xp-alert title="Default 类型">\r
    <template #icon>\r
      <xp-icon class="xp-alert-icon" :size="22">\r
        <IosAirplane />\r
      </xp-icon>\r
    </template>\r
  </xp-alert>\r
  <xp-alert title="Info 类型" type="info" show-icon />\r
  <xp-alert title="Success 类型" type="success" show-icon />\r
  <xp-alert title="Warning 类型" type="warning" show-icon />\r
  <xp-alert title="Error 类型" type="error" show-icon />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,t.__sourceCodeTitle="为 Alert 设置图标"}typeof h=="function"&&h(I);const D=_({__name:"AlertPreview3.preview",setup(t){return(c,r)=>{const s=o("xp-icon"),n=o("xp-alert");return i(),p(x,null,[e(n,{title:"Default 类型",center:""},{icon:l(()=>[e(s,{class:"xp-alert-icon",size:22},{default:l(()=>[e(d(w))]),_:1})]),_:1}),e(n,{title:"Info 类型",type:"info","show-icon":"",center:""}),e(n,{title:"Success 类型",type:"success","show-icon":"",center:""}),e(n,{title:"Warning 类型",type:"warning","show-icon":"",center:""}),e(n,{title:"Error 类型",type:"error","show-icon":"",center:""})],64)}}});function y(t){t.__sourceCode=`<template>\r
  <xp-alert title="Default 类型" center>\r
    <template #icon>\r
      <xp-icon class="xp-alert-icon" :size="22">\r
        <IosAirplane />\r
      </xp-icon>\r
    </template>\r
  </xp-alert>\r
  <xp-alert title="Info 类型" type="info" show-icon center />\r
  <xp-alert title="Success 类型" type="success" show-icon center />\r
  <xp-alert title="Warning 类型" type="warning" show-icon center />\r
  <xp-alert title="Error 类型" type="error" show-icon center />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,t.__sourceCodeTitle="使文字居中"}typeof y=="function"&&y(D);function g(t){t.__sourceCode=`<template>\r
  <xp-alert\r
    title="Success 类型"\r
    type="success"\r
    show-icon\r
    center\r
    description="这是一段描述"\r
  />\r
</template>\r
<script setup lang="ts">\r
<\/script>`,t.__sourceCodeTitle="自定义描述文案"}const $={};function T(t,c){const r=o("xp-alert");return i(),E(r,{title:"Success 类型",type:"success","show-icon":"",center:"",description:"这是一段描述"})}typeof g=="function"&&g($);const L=b($,[["render",T]]),k=_({__name:"AlertPreview5.preview",setup(t){return(c,r)=>{const s=o("xp-icon"),n=o("xp-alert");return i(),p(x,null,[e(n,{title:"Default 类型",closeable:"",description:"这是一段描述"},{icon:l(()=>[e(s,{class:"xp-alert-icon",size:22},{default:l(()=>[e(d(w))]),_:1})]),_:1}),e(n,{title:"Info 类型",type:"info","show-icon":"",closeable:"",description:"这是一段描述"}),e(n,{title:"Success 类型",type:"success","show-icon":"",closeable:"",description:"这是一段描述"}),e(n,{title:"Warning 类型",type:"warning","show-icon":"",closeable:"",description:"这是一段描述"}),e(n,{title:"Error 类型",type:"error","show-icon":"",closeable:"",description:"这是一段描述"})],64)}}});function v(t){t.__sourceCode=`<template>\r
  <xp-alert title="Default 类型" closeable description="这是一段描述">\r
    <template #icon>\r
      <xp-icon class="xp-alert-icon" :size="22">\r
        <IosAirplane />\r
      </xp-icon>\r
    </template>\r
  </xp-alert>\r
  <xp-alert\r
    title="Info 类型"\r
    type="info"\r
    show-icon\r
    closeable\r
    description="这是一段描述"\r
  />\r
  <xp-alert\r
    title="Success 类型"\r
    type="success"\r
    show-icon\r
    closeable\r
    description="这是一段描述"\r
  />\r
  <xp-alert\r
    title="Warning 类型"\r
    type="warning"\r
    show-icon\r
    closeable\r
    description="这是一段描述"\r
  />\r
  <xp-alert\r
    title="Error 类型"\r
    type="error"\r
    show-icon\r
    closeable\r
    description="这是一段描述"\r
  />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,t.__sourceCodeTitle="可以关闭"}typeof v=="function"&&v(k);const N={class:"alert-doc-wrapper"},F=u("h1",null,"提示 Alert",-1),V=u("p",null,"用于页面中展示重要的提示信息。",-1),H={class:"preview-wrapper"},q=_({__name:"index",setup(t){const c=[["title","标题","string","-","-"],["type","类型","string","default / info / success / warning / error","default"],["content","辅助性文字","string","-","-"],["closable","是否可关闭","boolean","-","false"],["center","文字是否居中","boolean","-","false"],["show-icon","是否显示图标","boolean","-","false"]],r=[["close","	关闭 Alert 时触发的事件","-"]],s=[["default","辅助性文字"],["icon","图标"],["title","标题"]];return(n,M)=>(i(),p("div",N,[F,V,u("div",H,[e(a,{component:B}),e(a,{component:I}),e(a,{component:D}),e(a,{component:L}),e(a,{component:k}),e(f,{title:"属性",type:"prop",body:c}),e(f,{title:"事件",type:"event",body:r}),e(f,{title:"插槽",type:"slot",body:s}),e(S,{prev:{path:"/doc/radio",name:"单选框 Radio"},next:{path:"/doc/dialog",name:"对话框 Dialog"}})])]))}});export{q as default};
