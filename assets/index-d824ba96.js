import{P as s,D as r,a as u}from"./Preview-330fbb28.js";import{_,r as l,o as a,c as i,f as x,b as e,F as b,w as k,a as n,d as g}from"./index-d6dd6156.js";function p(t){t.__sourceCode=`<template>\r
  往下滑出现Backtop\r
  <xp-backtop target="#doc-content-container" />\r
</template>`,t.__sourceCodeTitle="基础用法"}const f={};function v(t,c){const o=l("xp-backtop");return a(),i(b,null,[x(" 往下滑出现Backtop "),e(o,{target:"#doc-content-container"})],64)}typeof p=="function"&&p(f);const y=_(f,[["render",v]]);function d(t){t.__sourceCode=`<template>\r
  <div style="height: 300px">往下滑出现Backtop</div>\r
  <xp-backtop target="#doc-content-container" :bottom="100">\r
    <div\r
      style="\r
        height: 100%;\r
        width: 100%;\r
        background-color: #f2f5f6;\r
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);\r
        text-align: center;\r
        line-height: 40px;\r
        color: #5bab70;\r
      "\r
    >\r
      UP\r
    </div>\r
  </xp-backtop>\r
</template>`,t.__sourceCodeTitle="自定义内容"}const h={},w=n("div",{style:{height:"300px"}},"往下滑出现Backtop",-1),B=n("div",{style:{height:"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0, 0, 0, 0.12)","text-align":"center","line-height":"40px",color:"#5bab70"}}," UP ",-1);function P(t,c){const o=l("xp-backtop");return a(),i(b,null,[w,e(o,{target:"#doc-content-container",bottom:100},{default:k(()=>[B]),_:1})],64)}typeof d=="function"&&d(h);const $=_(h,[["render",P]]),C={class:"backtop-doc-wrapper"},D=n("h1",null,"回到顶部 BackTop",-1),N={class:"preview-wrapper"},U=g({__name:"index",setup(t){const c=[["target","触发滚动的对象	","	string	","-","document.documentElement"],["visibility-height","滚动高度达到此参数值才出现","number","-","200"],["right","控制其显示位置，距离页面右边距","number","-","40"],["bottom","控制其显示位置，距离页面底部距离","number","-","40"]],o=[["click","点击按钮触发的事件	","Event"]],m=[["default","自定义默认内容"]];return(T,E)=>(a(),i("div",C,[D,n("div",N,[e(s,{component:y}),e(s,{component:$}),e(r,{title:"属性",type:"prop",body:c}),e(r,{title:"事件",type:"event",body:o}),e(r,{title:"插槽",type:"slot",body:m}),e(u,{prev:{path:"/doc/affix",name:"回到顶部 Backtop"},next:{path:"/doc/breadcrumb",name:"面包屑 Breadcrumb"}})])]))}});export{U as default};
