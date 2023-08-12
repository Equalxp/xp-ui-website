import{P as V,D as v,a as B}from"./Preview-330fbb28.js";import{d as f,q as m,r as _,c,a as b,b as e,w as d,F as g,o as x,f as i,l as T}from"./index-d6dd6156.js";const A={style:{width:"100%"}},N={style:{width:"100%"}},E={style:{width:"100%"}},G={style:{width:"100%"}},$=f({__name:"RaidoPreview1.preview",setup(n){const a=m("1"),s=m("1"),r=m("1"),o=m("1");return(t,l)=>{const p=_("xp-radio");return x(),c(g,null,[b("div",A,[e(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=u=>a.value=u),label:"1",size:"large"},{default:d(()=>[i("选项1")]),_:1},8,["modelValue"]),e(p,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=u=>a.value=u),label:"2",size:"large"},{default:d(()=>[i("选项2")]),_:1},8,["modelValue"])]),b("div",N,[e(p,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=u=>s.value=u),label:"1"},{default:d(()=>[i("选项1")]),_:1},8,["modelValue"]),e(p,{modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=u=>s.value=u),label:"2"},{default:d(()=>[i("选项2")]),_:1},8,["modelValue"])]),b("div",E,[e(p,{modelValue:r.value,"onUpdate:modelValue":l[4]||(l[4]=u=>r.value=u),label:"1",size:"small"},{default:d(()=>[i("选项1")]),_:1},8,["modelValue"]),e(p,{modelValue:r.value,"onUpdate:modelValue":l[5]||(l[5]=u=>r.value=u),label:"2",size:"small"},{default:d(()=>[i("选项2")]),_:1},8,["modelValue"])]),b("div",G,[e(p,{modelValue:o.value,"onUpdate:modelValue":l[6]||(l[6]=u=>o.value=u),label:"1",size:"small",disabled:""},{default:d(()=>[i("选项1")]),_:1},8,["modelValue"]),e(p,{modelValue:o.value,"onUpdate:modelValue":l[7]||(l[7]=u=>o.value=u),label:"2",size:"small",disabled:""},{default:d(()=>[i("选项2")]),_:1},8,["modelValue"])])],64)}}});function z(n){n.__sourceCode=`<template>\r
  <div style="width: 100%">\r
    <xp-radio v-model="radio1" label="1" size="large">选项1</xp-radio>\r
    <xp-radio v-model="radio1" label="2" size="large">选项2</xp-radio>\r
  </div>\r
  <div style="width: 100%">\r
    <xp-radio v-model="radio2" label="1">选项1</xp-radio>\r
    <xp-radio v-model="radio2" label="2">选项2</xp-radio>\r
  </div>\r
  <div style="width: 100%">\r
    <xp-radio v-model="radio3" label="1" size="small">选项1</xp-radio>\r
    <xp-radio v-model="radio3" label="2" size="small">选项2</xp-radio>\r
  </div>\r
  <div style="width: 100%">\r
    <xp-radio v-model="radio4" label="1" size="small" disabled>选项1</xp-radio>\r
    <xp-radio v-model="radio4" label="2" size="small" disabled>选项2</xp-radio>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio1 = ref("1");\r
const radio2 = ref("1");\r
const radio3 = ref("1");\r
const radio4 = ref("1");\r
<\/script>`,n.__sourceCodeTitle="基础用法"}typeof z=="function"&&z($);const C=f({__name:"RaidoPreview2.preview",setup(n){const a=m("1");return(s,r)=>{const o=_("xp-radio");return x(),c(g,null,[e(o,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=t=>a.value=t),label:"1",disabled:""},{default:d(()=>[i("选项1")]),_:1},8,["modelValue"]),e(o,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=t=>a.value=t),label:"2",disabled:""},{default:d(()=>[i("选项2")]),_:1},8,["modelValue"])],64)}}});function w(n){n.__sourceCode=`<template>\r
  <xp-radio v-model="radio" label="1" disabled>选项1</xp-radio>\r
  <xp-radio v-model="radio" label="2" disabled>选项2</xp-radio>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
<\/script>`,n.__sourceCodeTitle="禁用状态"}typeof w=="function"&&w(C);const P=f({__name:"RaidoPreview3.preview",setup(n){const a=m("1");return(s,r)=>{const o=_("xp-radio");return x(),c(g,null,[e(o,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=t=>a.value=t),label:"1",size:"small"},{default:d(()=>[i("选项1")]),_:1},8,["modelValue"]),e(o,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=t=>a.value=t),label:"2"},{default:d(()=>[i("选项2")]),_:1},8,["modelValue"]),e(o,{modelValue:a.value,"onUpdate:modelValue":r[2]||(r[2]=t=>a.value=t),label:"3",size:"large"},{default:d(()=>[i("选项3")]),_:1},8,["modelValue"])],64)}}});function y(n){n.__sourceCode=`<template>\r
  <xp-radio v-model="radio" label="1" size="small">选项1</xp-radio>\r
  <xp-radio v-model="radio" label="2">选项2</xp-radio>\r
  <xp-radio v-model="radio" label="3" size="large">选项3</xp-radio>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
<\/script>`,n.__sourceCodeTitle="尺寸"}typeof y=="function"&&y(P);const k=f({__name:"RaidoPreview4.preview",setup(n){const a=m("1");return(s,r)=>{const o=_("xp-radio"),t=_("xp-radio-group");return x(),T(t,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=l=>a.value=l),size:"large"},{default:d(()=>[e(o,{label:"1"},{default:d(()=>[i("选项 A")]),_:1}),e(o,{label:"2"},{default:d(()=>[i("选项 B")]),_:1}),e(o,{label:"3",disabled:""},{default:d(()=>[i("选项 C")]),_:1})]),_:1},8,["modelValue"])}}});function U(n){n.__sourceCode=`<template>\r
  <xp-radio-group v-model="radio" size="large">\r
    <xp-radio label="1">选项 A</xp-radio>\r
    <xp-radio label="2">选项 B</xp-radio>\r
    <xp-radio label="3" disabled>选项 C</xp-radio>\r
  </xp-radio-group>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const radio = ref("1");\r
\r
<\/script>`,n.__sourceCodeTitle="单选框组"}typeof U=="function"&&U(k);const D=f({__name:"RaidoPreview5.preview",setup(n){const a=m("1"),s=m("4");return(r,o)=>{const t=_("xp-radio");return x(),c(g,null,[e(t,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value=l),label:"1",size:"small",border:""},{default:d(()=>[i("选项1")]),_:1},8,["modelValue"]),e(t,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=l=>a.value=l),label:"2",border:""},{default:d(()=>[i("选项2")]),_:1},8,["modelValue"]),e(t,{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value=l),label:"3",size:"large",border:""},{default:d(()=>[i("选项3")]),_:1},8,["modelValue"]),e(t,{modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=l=>s.value=l),label:"4",size:"small",border:"",disabled:""},{default:d(()=>[i("选项1")]),_:1},8,["modelValue"]),e(t,{modelValue:s.value,"onUpdate:modelValue":o[4]||(o[4]=l=>s.value=l),label:"5",border:"",disabled:""},{default:d(()=>[i("选项2")]),_:1},8,["modelValue"]),e(t,{modelValue:s.value,"onUpdate:modelValue":o[5]||(o[5]=l=>s.value=l),label:"6",size:"large",border:"",disabled:""},{default:d(()=>[i("选项3")]),_:1},8,["modelValue"])],64)}}});function R(n){n.__sourceCode=`<template>\r
  <xp-radio v-model="radio" label="1" size="small" border>选项1</xp-radio>\r
  <xp-radio v-model="radio" label="2" border>选项2</xp-radio>\r
  <xp-radio v-model="radio" label="3" size="large" border>选项3</xp-radio>\r
\r
  <xp-radio v-model="radio1" label="4" size="small" border disabled\r
    >选项1</xp-radio\r
  >\r
  <xp-radio v-model="radio1" label="5" border disabled>选项2</xp-radio>\r
  <xp-radio v-model="radio1" label="6" size="large" border disabled\r
    >选项3</xp-radio\r
  >\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
const radio1 = ref("4");\r
<\/script>`,n.__sourceCodeTitle="是否有边框"}typeof R=="function"&&R(D);const S={class:"radio-doc-wrapper"},F=b("h1",null,"Radio 单选框",-1),q=b("p",null,"在一组备选项中进行单选",-1),j={class:"preview-wrapper"},J=f({__name:"index",setup(n){const a=[["v-model","选中项绑定值","string / number / boolean","-","-"],["label","多选框对应的值","string / number / boolean","-","-"],["disabled","是否禁用单选框","boolean","-","false"],["border","是否显示边框","boolean","-","false"],["size","	Radio 的尺寸","string","large / default /small","-"],["indeterminate","设置 indeterminate 状态，只负责样式控制","boolean","","false"]],s=[["change","当绑定值变化时触发的事件","value"],,],r=[["default","自定义默认内容"]],o=[["v-model","绑定值","string / number / boolean","-","-"],["disabled","是否禁用","boolean","-","false"],["border","是否显示边框","boolean","-","false"],["size","单选框组尺寸","string","large / default /small","-"]],t=[["change","绑定值变化时触发的事件","选中的 Radio label 值"],,],l=[["default","自定义默认内容","Radio"]];return(p,u)=>(x(),c("div",S,[F,q,b("div",j,[e(V,{component:$}),e(V,{component:C}),e(V,{component:P}),e(V,{component:k}),e(V,{component:D}),e(v,{title:"Radio 属性",type:"prop",body:a}),e(v,{title:"Radio 事件",type:"event",body:s}),e(v,{title:"Radio 插槽",type:"slot",body:r}),e(v,{title:"Radio-group 属性",type:"prop",body:o}),e(v,{title:"Radio-group 事件",type:"event",body:t}),e(v,{title:"Radio-group 插槽",type:"slot",body:l,header:["插槽名","说明","子标签"]}),e(B,{prev:{path:"/doc/switch",name:"开关 Switch"},next:{path:"/doc/alert",name:"提示 Alert"}})])]))}});export{J as default};
