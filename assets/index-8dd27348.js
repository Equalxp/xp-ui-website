import{P as c,D as d,a as g}from"./Preview-330fbb28.js";import{d as o,q as b,r as p,l as i,o as s,c as k,a as h,b as u}from"./index-d6dd6156.js";const y=o({__name:"SelectPreview1.preview",setup(e){const l=b("3"),r=[{label:"再见杰克",value:"1"},{label:"西湖",value:"2"},{label:"为你唱歌",value:"3"},{label:"公路之歌",value:"4"},{label:"愿爱无忧",value:"5"},{label:"无法离地的飞行",value:"6"},{label:"秦皇岛",value:"7"},{label:"十万嬉皮",value:"8"},{label:"大石碎胸口",value:"9"},{label:"山雀",value:"10"}];return(v,n)=>{const a=p("xp-select");return s(),i(a,{id:"select",style:{width:"200px"},options:r,modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=t=>l.value=t)},null,8,["modelValue"])}}});function _(e){e.__sourceCode=`<template>\r
  <xp-select\r
    id="select"\r
    style="width: 200px" \r
    :options="options" \r
    v-model="value"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("3");\r
// 下拉框的选项\r
// const options = []\r
const options = [\r
  {\r
    label: "再见杰克",\r
    value: "1",\r
  },\r
  {\r
    label: "西湖",\r
    value: "2",\r
  },\r
  {\r
    label: "为你唱歌",\r
    value: "3",\r
  },\r
  {\r
    label: "公路之歌",\r
    value: "4",\r
  },\r
  {\r
    label: "愿爱无忧",\r
    value: "5",\r
  },\r
  {\r
    label: "无法离地的飞行",\r
    value: "6",\r
  },\r
  {\r
    label: "秦皇岛",\r
    value: "7",\r
  },\r
  {\r
    label: "十万嬉皮",\r
    value: "8",\r
  },\r
  {\r
    label: "大石碎胸口",\r
    value: "9",\r
  },\r
  {\r
    label: "山雀",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="基础用法"}typeof _=="function"&&_(y);const V=o({__name:"SelectPreview2.preview",setup(e){const l=b("1"),r=[{label:"再见杰克",value:"1"},{label:"西湖",value:"2",disabled:!0},{label:"为你唱歌",value:"3"},{label:"公路之歌",value:"4",disabled:!0},{label:"愿爱无忧",value:"5"},{label:"无法离地的飞行",value:"6"},{label:"秦皇岛",value:"7"},{label:"十万嬉皮",value:"8",disabled:!0},{label:"大石碎胸口",value:"9",disabled:!0},{label:"山雀",value:"10"}];return(v,n)=>{const a=p("xp-select");return s(),i(a,{id:"select",style:{width:"200px"},options:r,modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=t=>l.value=t)},null,8,["modelValue"])}}});function m(e){e.__sourceCode=`<template>\r
  <xp-select\r
    id="select"\r
    style="width: 200px" \r
    :options="options" \r
    v-model="value"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
// 下拉框的选项\r
// const options = []\r
const options = [\r
  {\r
    label: "再见杰克",\r
    value: "1",\r
    \r
  },\r
  {\r
    label: "西湖",\r
    value: "2",\r
    disabled: true,\r
  },\r
  {\r
    label: "为你唱歌",\r
    value: "3",\r
  },\r
  {\r
    label: "公路之歌",\r
    value: "4",\r
    disabled: true,\r
  },\r
  {\r
    label: "愿爱无忧",\r
    value: "5",\r
  },\r
  {\r
    label: "无法离地的飞行",\r
    value: "6",\r
  },\r
  {\r
    label: "秦皇岛",\r
    value: "7",\r
  },\r
  {\r
    label: "十万嬉皮",\r
    value: "8",\r
    disabled: true,\r
  },\r
  {\r
    label: "大石碎胸口",\r
    value: "9",\r
    disabled: true,\r
  },\r
  {\r
    label: "山雀",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="禁用选项"}typeof m=="function"&&m(V);const P=o({__name:"SelectPreview3.preview",setup(e){const l=b("1"),r=[{label:"再见杰克",value:"1"},{label:"西湖",value:"2",disabled:!0},{label:"为你唱歌",value:"3"},{label:"公路之歌",value:"4",disabled:!0},{label:"愿爱无忧",value:"5"},{label:"无法离地的飞行",value:"6"},{label:"秦皇岛",value:"7"},{label:"十万嬉皮",value:"8",disabled:!0},{label:"大石碎胸口",value:"9",disabled:!0},{label:"山雀",value:"10"}];return(v,n)=>{const a=p("xp-select");return s(),i(a,{id:"select",style:{width:"200px"},options:r,modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=t=>l.value=t),disabled:""},null,8,["modelValue"])}}});function f(e){e.__sourceCode=`<template>\r
  <xp-select\r
    id="select"\r
    style="width: 200px"\r
    :options="options"\r
    v-model="value"\r
    disabled\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
const options = [\r
  {\r
    label: "再见杰克",\r
    value: "1",\r
    \r
  },\r
  {\r
    label: "西湖",\r
    value: "2",\r
    disabled: true,\r
  },\r
  {\r
    label: "为你唱歌",\r
    value: "3",\r
  },\r
  {\r
    label: "公路之歌",\r
    value: "4",\r
    disabled: true,\r
  },\r
  {\r
    label: "愿爱无忧",\r
    value: "5",\r
  },\r
  {\r
    label: "无法离地的飞行",\r
    value: "6",\r
  },\r
  {\r
    label: "秦皇岛",\r
    value: "7",\r
  },\r
  {\r
    label: "十万嬉皮",\r
    value: "8",\r
    disabled: true,\r
  },\r
  {\r
    label: "大石碎胸口",\r
    value: "9",\r
    disabled: true,\r
  },\r
  {\r
    label: "山雀",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="禁用状态"}typeof f=="function"&&f(P);const C=o({__name:"SelectPreview4.preview",setup(e){const l=b("1"),r=[{label:"再见杰克",value:"1"},{label:"西湖",value:"2",disabled:!0},{label:"为你唱歌",value:"3"},{label:"公路之歌",value:"4",disabled:!0},{label:"愿爱无忧",value:"5"},{label:"无法离地的飞行",value:"6"},{label:"秦皇岛",value:"7"},{label:"十万嬉皮",value:"8",disabled:!0},{label:"大石碎胸口",value:"9",disabled:!0},{label:"山雀",value:"10"}];return(v,n)=>{const a=p("xp-select");return s(),i(a,{id:"select",style:{width:"200px"},options:r,modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=t=>l.value=t),clearable:""},null,8,["modelValue"])}}});function x(e){e.__sourceCode=`<template>\r
  <xp-select\r
    id="select"\r
    style="width: 200px"\r
    :options="options"\r
    v-model="value"\r
    clearable\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
const options = [\r
  {\r
    label: "再见杰克",\r
    value: "1",\r
    \r
  },\r
  {\r
    label: "西湖",\r
    value: "2",\r
    disabled: true,\r
  },\r
  {\r
    label: "为你唱歌",\r
    value: "3",\r
  },\r
  {\r
    label: "公路之歌",\r
    value: "4",\r
    disabled: true,\r
  },\r
  {\r
    label: "愿爱无忧",\r
    value: "5",\r
  },\r
  {\r
    label: "无法离地的飞行",\r
    value: "6",\r
  },\r
  {\r
    label: "秦皇岛",\r
    value: "7",\r
  },\r
  {\r
    label: "十万嬉皮",\r
    value: "8",\r
    disabled: true,\r
  },\r
  {\r
    label: "大石碎胸口",\r
    value: "9",\r
    disabled: true,\r
  },\r
  {\r
    label: "山雀",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="可清空单选"}typeof x=="function"&&x(C);const $=o({__name:"SelectPreview5.preview",setup(e){const l=b(["3","9","1","10"]),r=[{label:"再见杰克",value:"1"},{label:"西湖",value:"2",disabled:!0},{label:"为你唱歌",value:"3"},{label:"公路之歌",value:"4"},{label:"愿爱无忧",value:"5"},{label:"无法离地的飞行",value:"6"},{label:"秦皇岛",value:"7",disabled:!0},{label:"十万嬉皮",value:"8"},{label:"大石碎胸口",value:"9"},{label:"山雀",value:"10"}];return(v,n)=>{const a=p("xp-select");return s(),i(a,{id:"select",style:{width:"400px"},options:r,modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=t=>l.value=t),multiple:"",placeholder:"Please Choose",clearable:""},null,8,["modelValue"])}}});function w(e){e.__sourceCode=`<template>\r
  <xp-select\r
    id="select"\r
    style="width: 400px"\r
    :options="options"\r
    v-model="value"\r
    multiple\r
    placeholder="Please Choose"\r
    clearable\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref(["3", "9", "1","10"]);\r
const options = [\r
  {\r
    label: "再见杰克",\r
    value: "1",\r
  },\r
  {\r
    label: "西湖",\r
    value: "2",\r
    disabled: true,\r
  },\r
  {\r
    label: "为你唱歌",\r
    value: "3",\r
  },\r
  {\r
    label: "公路之歌",\r
    value: "4",\r
  },\r
  {\r
    label: "愿爱无忧",\r
    value: "5",\r
  },\r
  {\r
    label: "无法离地的飞行",\r
    value: "6",\r
  },\r
  {\r
    label: "秦皇岛",\r
    value: "7",\r
    disabled: true,\r
  },\r
  {\r
    label: "十万嬉皮",\r
    value: "8",\r
  },\r
  {\r
    label: "大石碎胸口",\r
    value: "9",\r
  },\r
  {\r
    label: "山雀",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="多选"}typeof w=="function"&&w($);const S={class:"select-doc-wrapper"},T=h("h1",null,"Select 选择器",-1),U={class:"preview-wrapper"},N=o({__name:"index",setup(e){const l=[["v-model","绑定值","	boolean / string / number","-","-"],["placeholder","占位符","string","-","请选择"],["clearable","是否可以清空选项","boolean","-","false"],["disabled","是否禁用","boolean","-","false"],["options","配置选项内容","Array","-","[]"],["multilple","是否为多选","boolean","-","false"]],r=[["change","选中值发生变化时触发","目前的选中值"],["clear","在点击由 clearable 属性生成的清空按钮时触发","-"]];return(v,n)=>(s(),k("div",S,[T,h("div",U,[u(c,{component:y}),u(c,{component:V},null,8,["component"]),u(c,{component:P},null,8,["component"]),u(c,{component:C},null,8,["component"]),u(c,{component:$},null,8,["component"]),u(d,{title:"属性",type:"prop",body:l}),u(d,{title:"事件",type:"event",body:r}),u(g,{prev:{path:"/doc/input",name:"Input 输入框"},next:{path:"/doc/switch",name:"开关 Switch"}})])]))}});export{N as default};
