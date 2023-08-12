import{P as f,D as h,a as j}from"./Preview-330fbb28.js";import{_ as x,r as c,o,c as u,b as t,w as a,f as r,F as _,d as y,q as d,j as I,l as m,t as z,s as q,v as A,a as v}from"./index-d6dd6156.js";function k(e){e.__sourceCode=`<template>\r
  <xp-tag>爱在西元前</xp-tag>\r
  <xp-tag type="success">听妈妈的话</xp-tag>\r
  <xp-tag type="warning">玫瑰花的葬礼</xp-tag>\r
  <xp-tag type="error">揪心的玩笑与漫长的白日梦</xp-tag>\r
  <xp-tag type="info">一丝不挂</xp-tag>\r
</template>`,e.__sourceCodeTitle="基础用法"}const P={};function M(e,s){const n=c("xp-tag");return o(),u(_,null,[t(n,null,{default:a(()=>[r("爱在西元前")]),_:1}),t(n,{type:"success"},{default:a(()=>[r("听妈妈的话")]),_:1}),t(n,{type:"warning"},{default:a(()=>[r("玫瑰花的葬礼")]),_:1}),t(n,{type:"error"},{default:a(()=>[r("揪心的玩笑与漫长的白日梦")]),_:1}),t(n,{type:"info"},{default:a(()=>[r("一丝不挂")]),_:1})],64)}typeof k=="function"&&k(P);const S=x(P,[["render",M]]);function C(e){e.__sourceCode=`<template>\r
  <xp-tag type="error" size="small">爱在西元前</xp-tag>\r
  <xp-tag type="success">一丝不挂</xp-tag>\r
  <xp-tag type="warning" size="large">玫瑰花的葬礼</xp-tag>\r
</template>`,e.__sourceCodeTitle="尺寸"}const N={};function U(e,s){const n=c("xp-tag");return o(),u(_,null,[t(n,{type:"error",size:"small"},{default:a(()=>[r("爱在西元前")]),_:1}),t(n,{type:"success"},{default:a(()=>[r("一丝不挂")]),_:1}),t(n,{type:"warning",size:"large"},{default:a(()=>[r("玫瑰花的葬礼")]),_:1})],64)}typeof C=="function"&&C(N);const G=x(N,[["render",U]]),D=y({__name:"TagPreview3.preview",setup(e){const s=d([{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"error"}]);return(n,l)=>{const i=c("xp-tag");return o(),u(_,null,[(o(!0),u(_,null,I(s.value,g=>(o(),m(i,{key:g.name,type:g.type,closeable:""},{default:a(()=>[r(z(g.name),1)]),_:2},1032,["type"]))),128)),t(i,{closeable:""},{default:a(()=>[r("Tag9")]),_:1})],64)}}});function V(e){e.__sourceCode=`<template>\r
  <xp-tag v-for="tag in tags" :key="tag.name" :type="tag.type" closeable>\r
    {{ tag.name }}\r
  </xp-tag>\r
  <xp-tag closeable>Tag9</xp-tag>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const tags = ref([\r
  { name: "Tag 1", type: "" },\r
  { name: "Tag 2", type: "success" },\r
  { name: "Tag 3", type: "info" },\r
  { name: "Tag 4", type: "warning" },\r
  { name: "Tag 5", type: "error" },\r
]);\r
<\/script>`,e.__sourceCodeTitle="可关闭"}typeof V=="function"&&V(D);function $(e){e.__sourceCode=`<template>\r
  <xp-tag :color="{ color: '#BBB', backgroundColor: '#5555555', borderColor: '#555' }">\r
    告别夜晚 等待天亮\r
  </xp-tag>\r
</template>`,e.__sourceCodeTitle="颜色"}const R={};function H(e,s){const n=c("xp-tag");return o(),m(n,{color:{color:"#BBB",backgroundColor:"#5555555",borderColor:"#555"}},{default:a(()=>[r(" 告别夜晚 等待天亮 ")]),_:1})}typeof $=="function"&&$(R);const J=x(R,[["render",H]]),K=y({__name:"TagPreview5.preview",setup(e){const s=d(["Tag 1","Tag 2","Tag 3"]),n=d(!1),l=d(""),i=d(),g=b=>{s.value.splice(s.value.indexOf(b),1)},E=()=>{n.value=!0,A(()=>{console.log(i.value.focus())})},T=()=>{l.value&&s.value.push(l.value),n.value=!1,l.value=""};return(b,w)=>{const F=c("xp-tag"),L=c("xp-input"),O=c("xp-button");return o(),u(_,null,[(o(!0),u(_,null,I(s.value,p=>(o(),m(F,{key:p,closeable:"",type:"success",onClose:Z=>g(p)},{default:a(()=>[r(z(p),1)]),_:2},1032,["onClose"]))),128)),n.value?(o(),m(L,{key:0,ref:p=>i.value=p,modelValue:l.value,"onUpdate:modelValue":w[0]||(w[0]=p=>l.value=p),onKeyup:q(T,["enter"]),onBlur:T,size:"small",style:{width:"180px"}},null,8,["modelValue","onKeyup"])):(o(),m(O,{key:1,size:"samll",onClick:E},{default:a(()=>[r("+ New Tag")]),_:1}))],64)}}});function B(e){e.__sourceCode=`<template>\r
  <xp-tag\r
    v-for="tag in dynamicTags"\r
    :key="tag"\r
    closeable\r
    type="success"\r
    @close="handleClose(tag)"\r
  >\r
    {{ tag }}\r
  </xp-tag>\r
  <xp-input\r
    v-if="inputVisible"\r
    :ref="(e) => (InputRef = e)"\r
    v-model="inputValue"\r
    @keyup.enter="handleInputConfirm"\r
    @blur="handleInputConfirm"\r
    size="small"\r
    style="width: 180px"\r
  />\r
  <xp-button v-else size="samll" @click="showInput">+ New Tag</xp-button>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, nextTick, onMounted } from "vue";\r
const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);\r
const inputVisible = ref(false)\r
const inputValue = ref("")\r
const InputRef = ref()\r
const handleClose = (tag: string) => {\r
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);\r
};\r
const showInput = () => {\r
  inputVisible.value = true\r
  nextTick(() => {\r
    // 自动获取焦点\r
    console.log(InputRef.value!.focus());\r
  })\r
}\r
\r
// 在input框中输入东西后 失去焦点+点击保存\r
const handleInputConfirm = () => {\r
  if(inputValue.value) {\r
    dynamicTags.value.push(inputValue.value)\r
  }\r
  // input框消失\r
  inputVisible.value = false\r
  // input框里的数据清空\r
  inputValue.value = ""\r
}\r
\r
\r
<\/script>`,e.__sourceCodeTitle="动态编辑标签"}typeof B=="function"&&B(K);const Q={class:"tag-doc-wrapper"},W=v("h1",null,"标签 Tag",-1),X=v("p",null,"用于标记和选择",-1),Y={class:"preview-wrapper"},te=y({__name:"index",setup(e){const s=[["closable","是否可关闭","boolean","-","false"],["color","	标签颜色，设置该项后　type 无效","string","{ color?: string, borderColor?: string, textColor?: string }","undefined"],["size","尺寸","string","	small/ medium / large","false"],["type","类型","string","default / primary / info / success / warning / error","default"]],n=[["default","	标签内容","-"]];return(l,i)=>(o(),u("div",Q,[W,X,v("div",Y,[t(f,{component:S}),t(f,{component:G}),t(f,{component:D}),t(f,{component:J}),t(f,{component:K}),t(h,{title:"Tag 属性",type:"prop",body:s}),t(h,{title:"Tag 插槽",type:"slot",body:n}),t(j,{prev:{path:"/doc/link",name:"链接 Link"},next:{path:"/doc/ellipsis",name:"文本省略 Ellipsis"}})])]))}});export{te as default};
