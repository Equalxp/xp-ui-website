import{P as f,D as x,a as v}from"./Preview-330fbb28.js";import{d as m,r as s,c as t,b as e,w as i,o,F as w,j as b,a as n,_ as C}from"./index-d6dd6156.js";const y=""+new URL("xili-051ce59f.png",import.meta.url).href,k=""+new URL("blazer-78ad3f92.png",import.meta.url).href,D=""+new URL("mdla-5b550c0b.jpg",import.meta.url).href,I=""+new URL("staple-00e1625d.jpg",import.meta.url).href,P=""+new URL("milk-2c756062.png",import.meta.url).href,B={class:"container"},L=["src"],c=m({__name:"CarouselPreview1.preview",setup(r){const a=[{img_name:y},{img_name:k},{img_name:D},{img_name:I},{img_name:P}];return(p,u)=>{const _=s("XpCarouselItem"),d=s("xp-carousel");return o(),t("div",B,[e(d,{autoplay:!0,duration:3e3,initial:0,hasDot:!0,hasDirector:!0,dotBgColor:"#000"},{default:i(()=>[(o(),t(w,null,b(a,(g,h)=>e(_,{key:h},{default:i(()=>[n("img",{src:g.img_name},null,8,L)]),_:2},1024)),64))]),_:1})])}}});function l(r){r.__sourceCode=`<template>\r
  <div class="container">\r
    <xp-carousel\r
      :autoplay="true"\r
      :duration="3000"\r
      :initial="0"\r
      :hasDot="true"\r
      :hasDirector="true"\r
      dotBgColor="#000"\r
    >\r
      <XpCarouselItem v-for="(item, index) of carouselData" :key="index">\r
        <img :src="item.img_name" />\r
      </XpCarouselItem>\r
    </xp-carousel>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
import xili from '@/assets/image/carouselImages/xili.png'\r
import blazer from "@/assets/image/carouselImages/blazer.png"\r
import mdla from "@/assets/image/carouselImages/mdla.jpg"\r
import staple from "@/assets/image/carouselImages/staple.jpg"\r
import milk from "@/assets/image/carouselImages/milk.png"\r
\r
const carouselData = [\r
  {\r
    img_name: xili,\r
  },\r
  {\r
    img_name: blazer\r
  },\r
  {\r
    img_name: mdla\r
  },\r
  {\r
    img_name: staple\r
  },\r
  {\r
    img_name: milk\r
  },\r
]\r
\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.container {\r
  overflow: hidden;\r
  margin: auto;\r
  width: 500px;\r
  height: 280px;\r
  scroll-snap-type: x mandatory;\r
}\r
img {\r
  scroll-snap-align: center;\r
  width: 100%;\r
  height: 100%;\r
}\r
</style>`,r.__sourceCodeTitle="基础使用"}typeof l=="function"&&l(c);const j=C(c,[["__scopeId","data-v-6d09340a"]]),z={class:"carsouel-doc-wrapper"},R=n("h1",null,"Carousel 轮播图",-1),U=n("p",null,"图片轮流播放给你看",-1),X={class:"preview-wrapper"},E=m({__name:"index",setup(r){const a=[["autoplay","是否自动轮播","boolean","true / false","true"],["duration","图片停留时间","number","-","3000"],["initial","起始图片 id","number","0 - (n-1)","0"],["hasDot","是否有切换圆点","boolean","true / false","true"],["hasDirector","是否有两侧方向按钮","boolean","true / false","true"],["dotBgColor","圆点颜色","string","-","-"]];return(p,u)=>(o(),t("div",z,[R,U,n("div",X,[e(f,{component:j}),e(x,{title:"Carousel 属性",type:"prop",body:a}),e(v,{prev:{path:"/doc/ellipsis",name:"Ellipsis 文本省略"},next:{path:"/doc/checkbox",name:"多选框 Checkbox"}})])]))}});export{E as default};
