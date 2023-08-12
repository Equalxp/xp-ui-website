import{d as o,c as p,o as e,e as a}from"./index-d6dd6156.js";const n={class:"markdown-body"},r=a(`<h1>快速使用</h1><p>请先<a href="#/doc/install">安装</a>本组件库。</p><h3>完整引入</h3><pre><code class="language-javascript">// main.ts
import { createApp } from &quot;vue&quot;;
import App from &quot;./App.vue&quot;;

import XpUi from &quot;xp-ui&quot;;
import &quot;xp-ui/dist/lib/xp-ui.css&quot;;

const app = createApp(App);

app.use(XpUi);
app.mount(&quot;#app&quot;);
</code></pre><h3>引入某个组件</h3><pre><code class="language-javascript">import { XpButton } from &quot;xp-ui&quot;;
import &quot;xp-ui/dist/lib/xp-ui.css&quot;;
</code></pre><p>完成引入就可以使用我提供的组件啦。</p><h4>Vue 单文件组件</h4><p>代码示例：</p><pre><code class="language-html">&lt;template&gt;
  &lt;xp-button&gt;按钮&lt;/xp-button&gt;
&lt;/template&gt;
</code></pre><p>下一节：<a href="#/doc/avatar">Avatar 头像</a></p>`,11),s=[r],d={},l="",h=o({__name:"get-started",setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(u,i)=>(e(),p("div",n,s))}});export{h as default,l as excerpt,d as frontmatter};
