import{_ as s,o as a,c as e,a as o}from"./app-BFk-K-88.js";const n={},l=o(`<h1 id="yukiresources-class" tabindex="-1"><a class="header-anchor" href="#yukiresources-class" aria-hidden="true">#</a> YukiResources <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiResources</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> baseInstance: </span><span style="color:#F69D50;">XResources</span><span style="color:#ADBAC7;">) : </span><span style="color:#F69D50;">Resources</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.80</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>对接 <code>XResources</code> 的中间层实例。</p></blockquote><h2 id="layoutinflatedparam-class" tabindex="-1"><a class="header-anchor" href="#layoutinflatedparam-class" aria-hidden="true">#</a> LayoutInflatedParam <span class="symbol">- class</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">LayoutInflatedParam</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> baseParam: </span><span style="color:#F69D50;">XC_LayoutInflated</span><span style="color:#ADBAC7;">.LayoutInflatedParam)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.80</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>装载 Hook APP 的目标布局 Resources 实现类。</p></blockquote><h3 id="variantname-field" tabindex="-1"><a class="header-anchor" href="#variantname-field" aria-hidden="true">#</a> variantName <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> variantName: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.80</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前被 Hook 的布局装载目录名称。</p></blockquote><p>例如：<code>layout</code>、<code>layout-land</code>、<code>layout-sw600dp</code>。</p><h3 id="currentview-field" tabindex="-1"><a class="header-anchor" href="#currentview-field" aria-hidden="true">#</a> currentView <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> currentView: </span><span style="color:#F69D50;">View</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.80</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前被 Hook 的布局实例。</p></blockquote><h3 id="findviewbyidentifier-method" tabindex="-1"><a class="header-anchor" href="#findviewbyidentifier-method" aria-hidden="true">#</a> findViewByIdentifier <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">reified</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">View</span><span style="color:#ADBAC7;">&gt; </span><span style="color:#F69D50;">View</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">findViewByIdentifier</span><span style="color:#ADBAC7;">(name: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">?</span></span>
<span class="line"></span></code></pre></div><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">reified</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">View</span><span style="color:#ADBAC7;">&gt; </span><span style="color:#DCBDFB;">findViewByIdentifier</span><span style="color:#ADBAC7;">(name: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">?</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.80</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>使用 Identifier 查找 Hook APP 指定 Id 的 <code>View</code>。</p></blockquote><p>扩展方法可以使用 Identifier 查找 Hook APP 当前装载布局中指定 Id 的 <code>View</code>。</p>`,33),p=[l];function t(c,r){return a(),e("div",null,p)}const i=s(n,[["render",t],["__file","YukiResources.html.vue"]]);export{i as default};
