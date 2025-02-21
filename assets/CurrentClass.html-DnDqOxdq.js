import{_ as s,o as e,c as a,a as n}from"./app-BFk-K-88.js";const o={},l=n(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="currentclass-class" tabindex="-1"><a class="header-anchor" href="#currentclass-class" aria-hidden="true">#</a> CurrentClass <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">CurrentClass</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> classSet: </span><span style="color:#F69D50;">Class</span><span style="color:#ADBAC7;">&lt;*&gt;, </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> instance: </span><span style="color:#F69D50;">Any</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.70</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>调整了构造方法的参数名称</p><p><strong>Function Illustrate</strong></p><blockquote><p>当前实例的类操作对象。</p></blockquote><h2 id="name-field" tabindex="-1"><a class="header-anchor" href="#name-field" aria-hidden="true">#</a> name <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> name: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获得当前 <code>classSet</code> 的 <code>Class.getName</code>。</p></blockquote><h2 id="simplename-field" tabindex="-1"><a class="header-anchor" href="#simplename-field" aria-hidden="true">#</a> simpleName <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> simpleName: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获得当前 <code>classSet</code> 的 <code>Class.getSimpleName</code>。</p></blockquote><h2 id="generic-method" tabindex="-1"><a class="header-anchor" href="#generic-method" aria-hidden="true">#</a> generic <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">generic</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">GenericClass</span><span style="color:#ADBAC7;">?</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获得当前实例中的泛型父类。</p></blockquote><p>如果当前实例不存在泛型将返回 <code>null</code>。</p><h2 id="generic-method-1" tabindex="-1"><a class="header-anchor" href="#generic-method-1" aria-hidden="true">#</a> generic <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">generic</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">GenericClass</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit): </span><span style="color:#F69D50;">GenericClass</span><span style="color:#ADBAC7;">?</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获得当前实例中的泛型父类。</p></blockquote><p>如果当前实例不存在泛型将返回 <code>null</code>。</p><h2 id="superclass-method" tabindex="-1"><a class="header-anchor" href="#superclass-method" aria-hidden="true">#</a> superClass <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">superClass</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">SuperClass</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.80</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>调用父类实例。</p></blockquote><h2 id="field-method" tabindex="-1"><a class="header-anchor" href="#field-method" aria-hidden="true">#</a> field <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">field</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">FieldConditions</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">FieldFinder</span><span style="color:#ADBAC7;">.Result.Instance</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.70</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>调用当前实例中的变量。</p></blockquote><h2 id="method-method" tabindex="-1"><a class="header-anchor" href="#method-method" aria-hidden="true">#</a> method <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">MethodConditions</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">MethodFinder</span><span style="color:#ADBAC7;">.Result.Instance</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.70</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>调用当前实例中的方法。</p></blockquote><h2 id="superclass-class" tabindex="-1"><a class="header-anchor" href="#superclass-class" aria-hidden="true">#</a> SuperClass <span class="symbol">- class</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inner</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">SuperClass</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> superClassSet: </span><span style="color:#F69D50;">Class</span><span style="color:#ADBAC7;">&lt;*&gt;)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.80</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>新增 <code>superClassSet</code> 参数</p><p><strong>Function Illustrate</strong></p><blockquote><p>当前类的父类实例的类操作对象。</p></blockquote><h3 id="name-field-1" tabindex="-1"><a class="header-anchor" href="#name-field-1" aria-hidden="true">#</a> name <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> name: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获得当前 <code>classSet</code> 中父类的 <code>Class.getName</code>。</p></blockquote><h3 id="simplename-field-1" tabindex="-1"><a class="header-anchor" href="#simplename-field-1" aria-hidden="true">#</a> simpleName <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> simpleName: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获得当前 <code>classSet</code> 中父类的 <code>Class.getSimpleName</code>。</p></blockquote><h3 id="generic-method-2" tabindex="-1"><a class="header-anchor" href="#generic-method-2" aria-hidden="true">#</a> generic <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">generic</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">GenericClass</span><span style="color:#ADBAC7;">?</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获得当前实例父类中的泛型父类。</p></blockquote><p>如果当前实例不存在泛型将返回 <code>null</code>。</p><h3 id="generic-method-3" tabindex="-1"><a class="header-anchor" href="#generic-method-3" aria-hidden="true">#</a> generic <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">generic</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">GenericClass</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit): </span><span style="color:#F69D50;">GenericClass</span><span style="color:#ADBAC7;">?</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获得当前实例父类中的泛型父类。</p></blockquote><p>如果当前实例不存在泛型将返回 <code>null</code>。</p><h3 id="field-method-1" tabindex="-1"><a class="header-anchor" href="#field-method-1" aria-hidden="true">#</a> field <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">field</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">FieldConditions</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">FieldFinder</span><span style="color:#ADBAC7;">.Result.Instance</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.80</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>调用父类实例中的变量。</p></blockquote><h3 id="method-method-1" tabindex="-1"><a class="header-anchor" href="#method-method-1" aria-hidden="true">#</a> method <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">MethodConditions</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">MethodFinder</span><span style="color:#ADBAC7;">.Result.Instance</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.80</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>调用父类实例中的方法。</p></blockquote>`,99),p=[l];function t(c,d){return e(),a("div",null,p)}const i=s(o,[["render",t],["__file","CurrentClass.html.vue"]]);export{i as default};
