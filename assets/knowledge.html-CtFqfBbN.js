import{_ as r,r as t,o as p,c as l,b as o,d as e,e as s,a as n}from"./app-BFk-K-88.js";const d={},c=n(`<h1 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h1><blockquote><p>这里收集了 Xposed 相关的介绍以及开启前需要掌握的知识要点，已经了解的同学可以略过。</p></blockquote><p>基础知识内容<u><strong>并不一定完全准确</strong></u>，请根据自己的见解酌情阅读，若发现内容<strong>有错误欢迎指正并帮助我们完善和改进</strong>。</p><h2 id="相关介绍" tabindex="-1"><a class="header-anchor" href="#相关介绍" aria-hidden="true">#</a> 相关介绍</h2><blockquote><p>这里介绍了 Xposed 以及 Hook 的工作原理。</p></blockquote><h3 id="xposed-是什么" tabindex="-1"><a class="header-anchor" href="#xposed-是什么" aria-hidden="true">#</a> Xposed 是什么</h3><blockquote><p>Xposed 框架 (Xposed Framework) 是一套开源的、在 Android 高权限模式下运行的框架服务，可以在不修改 APK 文件的情况下影响程序运行（修改系统）的框架服务，基于它可以制作出许多功能强大的模块，且在功能不冲突的情况下同时运作。</p></blockquote><p>上述内容复制自百度百科。</p><h3 id="xposed-能做什么" tabindex="-1"><a class="header-anchor" href="#xposed-能做什么" aria-hidden="true">#</a> Xposed 能做什么</h3><blockquote><p>下方的结构描述了 Xposed 的基本工作方式和原理。</p></blockquote><div class="language-text" data-ext="text"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#adbac7;">Xposed Framework</span></span>
<span class="line"><span style="color:#adbac7;">└── App&#39;s Environment</span></span>
<span class="line"><span style="color:#adbac7;">    └── Hooker (Hooked)</span></span>
<span class="line"><span style="color:#adbac7;">        ...</span></span>
<span class="line"><span style="color:#adbac7;">    App&#39;s Environment</span></span>
<span class="line"><span style="color:#adbac7;">    └── Hooker (Hooked)</span></span>
<span class="line"><span style="color:#adbac7;">        ...</span></span>
<span class="line"><span style="color:#adbac7;">    ...</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><p>我们可以在宿主 (APP) 运行时通过注入宿主 (APP) 来达到控制其行为的最终目的。</p><p>Xposed 的这种运行方式被称为<strong>寄生</strong>，Xposed 模块跟随宿主的生命周期，在宿主的生命周期内完成自己的生命历程。</p><p>我们可以通过反射的方式调用宿主的方法、变量、构造方法，以及使用 <code>XposedBridge</code> 所提供的 Hook 操作动态地在宿主 (APP) 要执行的方法前后插入自己的代码，或完全替换目标，甚至是拦截。</p><h3 id="发展过程" tabindex="-1"><a class="header-anchor" href="#发展过程" aria-hidden="true">#</a> 发展过程</h3><p>如今的 Xposed 管理器已完全被其衍生作品替代，而 <strong>SuperSU</strong> 的时代也已经落幕了，现在，借助 <strong>Magisk</strong> 使后面的一切又成为了可能。</p><blockquote><p>其发展史大致可分为 <strong>Xposed(Dalvik)</strong> → <strong>Xposed(ART)</strong> → <strong>Xposed(Magisk)</strong> → <strong>EdXposed(Riru)</strong>/<strong>LSPosed(Riru/Zygisk)</strong></p></blockquote><h3 id="衍生产品" tabindex="-1"><a class="header-anchor" href="#衍生产品" aria-hidden="true">#</a> 衍生产品</h3><blockquote><p>下方的结构描述了类似 Xposed 的 Hook Framework 的工作方式和原理。</p></blockquote><div class="language-text" data-ext="text"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#adbac7;">App&#39;s Environment</span></span>
<span class="line"><span style="color:#adbac7;">└── Hook Framework</span></span>
<span class="line"><span style="color:#adbac7;">    └── Hooker (Hooked)</span></span>
<span class="line"><span style="color:#adbac7;">        ...</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><p>通过 Xposed 的运行原理，从而衍生了很多同类型框架，随着当今时代的移动设备获取 Root 权限甚至刷机越来越困难且不是刚需的时候，一些免 Root 框架也随之产生，例如 <strong>LSPatch</strong>、<strong>太极</strong>。</p><p>这些在 ART 层面上的 Hook Framework 同样也可不借助 Xposed API 完成其和 Xposed 原理一样的 Hook 流程，免 Root 的运行原理为修改 APK 并将 Hook 进程注入宿主，通过外部模块对其进行控制。</p><p>另外一种产品就是利用 Android 运行环境现有的功能虚拟出一个完全与当前设备系统一样的环境，并在其中运行 APP，这个就是虚拟 APP 技术 <strong>VirtualApp</strong>，后来衍生为 <strong>VirtualXposed</strong>。</p>`,23),i={href:"https://github.com/LSPosed/LSPatch",target:"_blank",rel:"noopener noreferrer"},h={href:"https://taichi.cool/zh/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/asLody/VirtualApp",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/asLody/SandVXposed",target:"_blank",rel:"noopener noreferrer"},g=n('<h3 id="yukihookapi-做了什么" tabindex="-1"><a class="header-anchor" href="#yukihookapi-做了什么" aria-hidden="true">#</a> YukiHookAPI 做了什么</h3><p>自从 Xposed 出现到现在为止，除了开发者人人皆知的 <code>XposedHelpers</code>，依然没有一套针对 Kotlin 打造的语法糖以及用法封装十分完善的 API。</p><p>本 API 框架的诞生就是希望在 Xposed 的如今时代，能让更多有动手能力的 Xposed 模块开发者少走弯路，更容易、更简单地完成整个开发流程。</p><p>未来，<code>YukiHookAPI</code> 将在使用 Xposed API 的目标基础上适配更多第三方 Hook Framework，使得整个生态得到完善，并帮助更多开发者让 Xposed 模块开发变得更加简单和易懂。</p><h2 id="让我们开始吧" tabindex="-1"><a class="header-anchor" href="#让我们开始吧" aria-hidden="true">#</a> 让我们开始吧</h2><p>在开始之前，你需要拥有以下基础才能更好地使用 <code>YukiHookAPI</code>。</p>',6),b=o("li",null,[o("p",null,"掌握并了解 Android 开发及简单的系统运行原理")],-1),_={href:"https://github.com/skylot/jadx",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/iBotPeaches/Apktool",target:"_blank",rel:"noopener noreferrer"},f=o("li",null,[o("p",null,"掌握并熟练使用 Java 反射，了解简单的 Smali 语法，了解 DEX 文件结构，会使用逆向分析定位方法位置")],-1),X={href:"https://api.xposed.info",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.ketal.icu/cn/Xposed%E6%A8%A1%E5%9D%97%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8%E4%BF%9D%E5%A7%86%E7%BA%A7%E6%95%99%E7%A8%8B/",target:"_blank",rel:"noopener noreferrer"},x=o("strong",null,"(友情链接)",-1),P={href:"https://blog.ketal.icu/cn/kotlin-lambda%E5%85%A5%E9%97%A8/",target:"_blank",rel:"noopener noreferrer"},y=o("strong",null,"(友情链接)",-1),E=o("li",null,[o("p",null,"掌握并了解 Kotlin 与 Java 混编、互相调用以及 Kotlin 生成的 Java 字节码")],-1);function H(v,q){const a=t("ExternalLinkIcon");return p(),l("div",null,[c,o("p",null,[e("上述提到的免 Root 框架分别为 "),o("a",i,[e("LSPatch"),s(a)]),e("、"),o("a",h,[e("太极"),s(a)]),e("、"),o("a",k,[e("VirtualApp"),s(a)]),e("、"),o("a",u,[e("SandVXposed"),s(a)]),e("。")]),g,o("ul",null,[b,o("li",null,[o("p",null,[e("掌握并了解 Android APK 内部结构以及简单的反编译知识要领，可参考 "),o("a",_,[e("Jadx"),s(a)]),e(" 与 "),o("a",A,[e("ApkTool"),s(a)])])]),f,o("li",null,[o("p",null,[e("掌握基础的原生 "),o("a",X,[e("Xposed API"),s(a)]),e(" 用法，了解 Xposed 的运行原理，可参考本文以及 "),o("a",m,[e("这里"),s(a)]),e(),x])]),o("li",null,[o("p",null,[e("掌握 Kotlin 语言，学会灵活运用 "),o("a",P,[e("Kotlin lambda"),s(a)]),e(),y])]),E])])}const I=r(d,[["render",H],["__file","knowledge.html.vue"]]);export{I as default};
