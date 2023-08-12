import{P as V,D as k,a as E}from"./Preview-330fbb28.js";import{d as _,q as n,r as m,c as f,a as v,b as e,F as g,o as h,l as T,w as U,j as F}from"./index-d6dd6156.js";const L={style:{width:"100%"}},G={style:{width:"100%"}},N={style:{width:"100%"}},S={style:{width:"100%"}},B=_({__name:"CheckboxPreview1.preview",setup(c){const r=n(!1),d=n(!1),t=n(!1),s=n(!1),a=n(!1),b=n(!1),p=n(!1),l=n(!1);return(x,o)=>{const u=m("xp-checkbox");return h(),f(g,null,[v("div",L,[e(u,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=i=>r.value=i),label:"选项A",size:"large"},null,8,["modelValue"]),e(u,{modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=i=>d.value=i),label:"选项B",size:"large"},null,8,["modelValue"])]),v("div",G,[e(u,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=i=>t.value=i),label:"选项A"},null,8,["modelValue"]),e(u,{modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=i=>s.value=i),label:"选项B"},null,8,["modelValue"])]),v("div",N,[e(u,{modelValue:a.value,"onUpdate:modelValue":o[4]||(o[4]=i=>a.value=i),label:"选项A",size:"small"},null,8,["modelValue"]),e(u,{modelValue:b.value,"onUpdate:modelValue":o[5]||(o[5]=i=>b.value=i),label:"选项B",size:"small"},null,8,["modelValue"])]),v("div",S,[e(u,{modelValue:p.value,"onUpdate:modelValue":o[6]||(o[6]=i=>p.value=i),label:"选项A",size:"small",disabled:""},null,8,["modelValue"]),e(u,{modelValue:l.value,"onUpdate:modelValue":o[7]||(o[7]=i=>l.value=i),label:"选项B",size:"small",disabled:""},null,8,["modelValue"])])],64)}}});function C(c){c.__sourceCode=`<template>\r
  <div style="width: 100%">\r
    <xp-checkbox v-model="checkbox1" label="选项A" size="large" />\r
    <xp-checkbox v-model="checkbox2" label="选项B" size="large" />\r
  </div>\r
  <div style="width: 100%">\r
    <xp-checkbox v-model="checkbox3" label="选项A" />\r
    <xp-checkbox v-model="checkbox4" label="选项B" />\r
  </div>\r
  <div style="width: 100%">\r
    <xp-checkbox v-model="checkbox5" label="选项A" size="small" />\r
    <xp-checkbox v-model="checkbox6" label="选项B" size="small" />\r
  </div>\r
  <div style="width: 100%">\r
    <xp-checkbox v-model="checkbox7" label="选项A" size="small" disabled />\r
    <xp-checkbox v-model="checkbox8" label="选项B" size="small" disabled />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkbox1 = ref(false);\r
const checkbox2 = ref(false);\r
const checkbox3 = ref(false);\r
const checkbox4 = ref(false);\r
const checkbox5 = ref(false);\r
const checkbox6 = ref(false);\r
const checkbox7 = ref(false);\r
const checkbox8 = ref(false);\r
<\/script>`,c.__sourceCodeTitle="基础使用"}typeof C=="function"&&C(B);const j={style:{width:"100%",display:"flex","align-items":"center"}},$=_({__name:"CheckboxPreview2.preview",setup(c){const r=n(!1),d=n(!1),t=n(!0);return(s,a)=>{const b=m("xp-checkbox"),p=m("xp-switch");return h(),f("div",j,[e(b,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),label:"选项A",size:"large"},null,8,["modelValue"]),e(b,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=l=>d.value=l),label:"选项B",size:"large",disabled:t.value},null,8,["modelValue","disabled"]),e(p,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=l=>t.value=l)},null,8,["modelValue"])])}}});function y(c){c.__sourceCode=`<template>\r
  <div style="width: 100%; display: flex; align-items: center">\r
    <xp-checkbox \r
      v-model="checkbox1" \r
      label="选项A" \r
      size="large" \r
    />\r
    <xp-checkbox\r
      v-model="checkbox2"\r
      label="选项B"\r
      size="large"\r
      :disabled="disabled"\r
    />\r
    <!-- 绑定switch框 disabled状态的取消 -->\r
    <xp-switch v-model="disabled" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkbox1 = ref(false);\r
const checkbox2 = ref(false);\r
const disabled = ref(true);\r
<\/script>`,c.__sourceCodeTitle="禁用状态"}typeof y=="function"&&y($);const D=_({__name:"CheckboxPreview3.preview",setup(c){const r=n(["选项A"]);return(d,t)=>{const s=m("xp-checkbox"),a=m("xp-checkbox-group");return h(),T(a,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=b=>r.value=b),size:"large"},{default:U(()=>[e(s,{label:"选项A"}),e(s,{label:"选项B"}),e(s,{label:"选项C"})]),_:1},8,["modelValue"])}}});function w(c){c.__sourceCode=`<template>\r
  <xp-checkbox-group v-model="checkList" size="large">\r
    <xp-checkbox label="选项A" />\r
    <xp-checkbox label="选项B" />\r
    <xp-checkbox label="选项C" />\r
  </xp-checkbox-group>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checkList = ref(["选项A"]);\r
<\/script>`,c.__sourceCodeTitle="多选框组"}typeof w=="function"&&w(D);const P=_({__name:"CheckboxPreview4.preview",setup(c){const r=n(!1),d=n(!0),t=n(["长安","洛阳"]),s=["长安","洛阳","南京","北京"],a=p=>{t.value=p?[...s]:[],d.value=!1},b=p=>{const l=p.length;r.value=l===s.length,d.value=l>0&&s.length>l};return(p,l)=>{const x=m("xp-checkbox"),o=m("xp-checkbox-group");return h(),f(g,null,[e(x,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=u=>r.value=u),indeterminate:d.value,onChange:a,label:"全选"},null,8,["modelValue","indeterminate"]),e(o,{onChange:b,modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=u=>t.value=u),size:"large"},{default:U(()=>[(h(),f(g,null,F(s,u=>e(x,{key:u,label:u},null,8,["label"])),64))]),_:1},8,["modelValue"])],64)}}});function z(c){c.__sourceCode=`<template>\r
  <xp-checkbox\r
    v-model="checkAll"\r
    :indeterminate="isIndeterminate"\r
    @change="handleCheckAllChange"\r
    label="全选"\r
  />\r
  <xp-checkbox-group\r
    @change="handleCheckedCitiesChange"\r
    v-model="checkedCities"\r
    size="large"\r
  >\r
    <xp-checkbox v-for="city in cities" :key="city" :label="city" />\r
  </xp-checkbox-group>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkAll = ref(false);\r
const isIndeterminate = ref(true);\r
\r
const checkedCities = ref(["长安", "洛阳"]);\r
const cities = ["长安", "洛阳", "南京", "北京"];\r
\r
const handleCheckAllChange = (val: boolean) => {\r
  checkedCities.value = val ? [...cities] : [];\r
  isIndeterminate.value = false;\r
};\r
\r
const handleCheckedCitiesChange = (value: string[]) => {\r
  const checkedCount = value.length;\r
  checkAll.value = checkedCount === cities.length;\r
  isIndeterminate.value = checkedCount > 0 && cities.length > checkedCount;\r
};\r
<\/script>`,c.__sourceCodeTitle="中间状态"}typeof z=="function"&&z(P);const I=_({__name:"CheckboxPreview5.preview",setup(c){const r=n(!1),d=n(!1),t=n(!1),s=n(!1),a=n(!1),b=n(!1);return(p,l)=>{const x=m("xp-checkbox");return h(),f(g,null,[e(x,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=o=>r.value=o),label:"选项 A",size:"small",border:""},null,8,["modelValue"]),e(x,{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=o=>d.value=o),label:"选项 B",border:""},null,8,["modelValue"]),e(x,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=o=>t.value=o),label:"选项 C",size:"large",border:""},null,8,["modelValue"]),e(x,{modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=o=>s.value=o),label:"选项 D",size:"small",border:""},null,8,["modelValue"]),e(x,{modelValue:a.value,"onUpdate:modelValue":l[4]||(l[4]=o=>a.value=o),label:"选项 E",border:""},null,8,["modelValue"]),e(x,{modelValue:b.value,"onUpdate:modelValue":l[5]||(l[5]=o=>b.value=o),label:"选项 F",size:"large",border:""},null,8,["modelValue"])],64)}}});function A(c){c.__sourceCode=`<template>\r
  <xp-checkbox v-model="checkbox1" label="选项 A" size="small" border />\r
  <xp-checkbox v-model="checkbox2" label="选项 B" border />\r
  <xp-checkbox v-model="checkbox3" label="选项 C" size="large" border />\r
  <xp-checkbox v-model="checkbox4" label="选项 D" size="small" border />\r
  <xp-checkbox v-model="checkbox5" label="选项 E" border />\r
  <xp-checkbox v-model="checkbox6" label="选项 F" size="large" border />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkbox1 = ref(false);\r
const checkbox2 = ref(false);\r
const checkbox3 = ref(false);\r
const checkbox4 = ref(false);\r
const checkbox5 = ref(false);\r
const checkbox6 = ref(false);\r
<\/script>`,c.__sourceCodeTitle="带有边框"}typeof A=="function"&&A(I);const q={class:"checkbox-doc-wrapper"},H=v("h1",null,"Checkbox 单选框",-1),J={class:"preview-wrapper"},O=_({__name:"index",setup(c){const r=[["v-model","选中项绑定值","string / number / boolean","-","-"],["label","单选框对应的值","string / number / boolean","-","-"],["disabled","是否禁用单选框","boolean","-","false"],["border","是否显示边框","boolean","-","false"],["size","	Checkbox 的尺寸","string","large / default /small","-"]],d=[["change","绑定值变化时触发的事件","选中的 Checkbox label 值"],,],t=[["default","自定义默认内容"]],s=[["v-model","绑定值","array","-","[]"],["disabled","是否禁用","boolean","-","false"],["border","是否显示边框","boolean","-","false"],["size","多选框组尺寸","string","large / default /small","-"]],a=[["change","当绑定值变化时触发的事件","value"],,],b=[["default","自定义默认内容","Checkbox"]];return(p,l)=>(h(),f("div",q,[H,v("div",J,[e(V,{component:B}),e(V,{component:$}),e(V,{component:D}),e(V,{component:P}),e(V,{component:I}),e(k,{title:"Checkbox 属性",type:"prop",body:r}),e(k,{title:"Checkbox 事件",type:"event",body:d}),e(k,{title:"Checkbox 插槽",type:"slot",body:t}),e(k,{title:"Checkbox-group 属性",type:"prop",body:s}),e(k,{title:"Checkbox-group 事件",type:"event",body:a}),e(k,{title:"Checkbox-group 插槽",type:"slot",body:b,header:["插槽名","说明","子标签"]}),e(E,{prev:{path:"/doc/carousel",name:"Carousel 轮播图"},next:{path:"/doc/input",name:"输入框 Input"}})])]))}});export{O as default};
