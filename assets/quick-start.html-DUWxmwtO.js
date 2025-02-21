import{_ as o,r as p,o as i,c,b as n,d as s,e as l,a as e}from"./app-BFk-K-88.js";const r={},t=e('<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><blockquote><p>集成 <code>YukiHookAPI</code> 到你的项目中。</p></blockquote><h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求" aria-hidden="true">#</a> 环境要求</h2><ul><li><p>Windows 7 及以上/macOS 10.14 及以上/Linux 发行版 (Arch/Debian)</p></li><li><p>Android Studio 2021.1 及以上</p></li><li><p>IntelliJ IDEA 2021.1 及以上</p></li><li><p>Kotlin 1.7.0 及以上</p></li><li><p>Android Gradle Plugin 7.0 及以上</p></li><li><p>Gradle 7.0 及以上</p></li><li><p>Java 11 及以上 (Since API <code>1.0.80</code>)</p></li><li><p>Java 17 及以上 (Since API <code>1.2.0</code>)</p></li></ul><h2 id="自动构建项目" tabindex="-1"><a class="header-anchor" href="#自动构建项目" aria-hidden="true">#</a> 自动构建项目</h2><p><code>YukiHookAPI</code> 提供了一个自动化构建工具，它可以帮助你快速构建一个拥有 Xposed 模块依赖的 Android 标准项目模板，使用构建好的模板即可直接开始下一步工作。</p><p>你可以 <a href="../tools/yukihookapi-projectbuilder">点击这里</a> 进行查看。</p><h2 id="手动配置项目" tabindex="-1"><a class="header-anchor" href="#手动配置项目" aria-hidden="true">#</a> 手动配置项目</h2><p>若你不想使用自动化构建工具，你依然可以按照以下方式手动配置项目依赖。</p><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><p>使用 <code>Android Studio</code> 或 <code>IntelliJ IDEA</code> 创建新的 Android 项目，并在 <code>Language</code> 一栏选择 Kotlin 以自动添加基础依赖。</p><h3 id="集成依赖" tabindex="-1"><a class="header-anchor" href="#集成依赖" aria-hidden="true">#</a> 集成依赖</h3>',12),d={href:"https://github.com/HighCapable/SweetDependency",target:"_blank",rel:"noopener noreferrer"},A=e(`<h4 id="sweetdependency-推荐" tabindex="-1"><a class="header-anchor" href="#sweetdependency-推荐" aria-hidden="true">#</a> SweetDependency (推荐)</h4><p>在你的项目 <code>SweetDependency</code> 配置文件中添加存储库和依赖。</p><blockquote><p>示例如下</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#8DDB8C;">repositories</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;"># 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">rovo89-xposed-api</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">url</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">https://api.xposed.info/</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;"># MavenCentral 有 2 小时缓存，若无法集成最新版本请添加</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">sonatype-oss-releases</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8DDB8C;">plugins</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;"># 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">com.google.devtools.ksp</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">version</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">+</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8DDB8C;">libraries</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;"># 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">de.robv.android.xposed</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">api</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">version</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">82</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">repositories</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#96D0FF;">rovo89-xposed-api</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">com.highcapable.yukihookapi</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">api</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">version</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">+</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;"># 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">ksp-xposed</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">version-ref</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&lt;this&gt;::api</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加完成后运行一次 Gradle Sync，所有依赖版本将自动装配。</p><p>接下来，在你的项目 <code>build.gradle.kts</code> 中部署插件。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">plugins</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">autowire</span><span style="color:#ADBAC7;">(libs.plugins.com.google.devtools.ksp)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在你的项目 <code>build.gradle.kts</code> 中部署依赖。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">dependencies</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 基础依赖</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">implementation</span><span style="color:#ADBAC7;">(com.highcapable.yukihookapi.api)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">compileOnly</span><span style="color:#ADBAC7;">(de.robv.android.xposed.api)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">ksp</span><span style="color:#ADBAC7;">(com.highcapable.yukihookapi.ksp.xposed)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传统方式" tabindex="-1"><a class="header-anchor" href="#传统方式" aria-hidden="true">#</a> 传统方式</h4><p>在你的项目 <code>build.gradle.kts</code> 或 <code>build.gradle</code> 中添加存储库。</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">repositories</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">google</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">mavenCentral</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">maven</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">url</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;https://api.xposed.info/&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// MavenCentral 有 2 小时缓存，若无法集成最新版本请添加此地址</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">maven</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">url</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;https://s01.oss.sonatype.org/content/repositories/releases/&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">repositories {</span></span>
<span class="line"><span style="color:#ADBAC7;">    google()</span></span>
<span class="line"><span style="color:#ADBAC7;">    mavenCentral()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    maven { url </span><span style="color:#96D0FF;">&#39;https://api.xposed.info/&#39;</span><span style="color:#ADBAC7;"> }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// MavenCentral 有 2 小时缓存，若无法集成最新版本请添加此地址</span></span>
<span class="line"><span style="color:#ADBAC7;">    maven { url </span><span style="color:#96D0FF;">&#39;https://s01.oss.sonatype.org/content/repositories/releases/&#39;</span><span style="color:#ADBAC7;"> }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在你的项目 <code>build.gradle.kts</code> 或 <code>build.gradle</code> 中添加插件。</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">plugins</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">id</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;com.google.devtools.ksp&quot;</span><span style="color:#ADBAC7;">) version </span><span style="color:#96D0FF;">&quot;&lt;ksp-version&gt;&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">plugins {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    id </span><span style="color:#96D0FF;">&#39;com.google.devtools.ksp&#39;</span><span style="color:#ADBAC7;"> version </span><span style="color:#96D0FF;">&#39;&lt;ksp-version&gt;&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在你的项目 <code>build.gradle.kts</code> 或 <code>build.gradle</code> 中添加依赖。</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">dependencies</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 基础依赖</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">implementation</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;com.highcapable.yukihookapi:api:&lt;yuki-version&gt;&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">compileOnly</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;de.robv.android.xposed:api:82&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">ksp</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;com.highcapable.yukihookapi:ksp-xposed:&lt;yuki-version&gt;&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">dependencies {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 基础依赖</span></span>
<span class="line"><span style="color:#ADBAC7;">    implementation </span><span style="color:#96D0FF;">&#39;com.highcapable.yukihookapi:api:&lt;yuki-version&gt;&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    compileOnly </span><span style="color:#96D0FF;">&#39;de.robv.android.xposed:api:82&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 作为 Xposed 模块使用务必添加，其它情况可选</span></span>
<span class="line"><span style="color:#ADBAC7;">    ksp </span><span style="color:#96D0FF;">&#39;com.highcapable.yukihookapi:ksp-xposed:&lt;yuki-version&gt;&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),u=n("strong",null,"<ksp-version>",-1),v={href:"https://github.com/google/ksp/releases",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,"(请注意选择你当前对应的 Kotlin 版本)",-1),D=n("p",null,[s("请将 "),n("strong",null,"<yuki-version>"),s(" 修改为 "),n("a",{href:"../about/changelog"},"这里"),s(" 的最新版本。")],-1),b={class:"custom-container danger"},B=n("p",{class:"custom-container-title"},"特别注意",-1),m=n("p",null,[n("strong",null,"YukiHookAPI"),s(" 的 "),n("strong",null,"api"),s(" 与 "),n("strong",null,"ksp-xposed"),s(" 依赖的版本必须一一对应，否则将会造成版本不匹配错误。")],-1),C={href:"https://github.com/HighCapable/SweetDependency",target:"_blank",rel:"noopener noreferrer"},k=e(`<h4 id="配置-java-版本" tabindex="-1"><a class="header-anchor" href="#配置-java-版本" aria-hidden="true">#</a> 配置 Java 版本</h4><p>在你的项目 <code>build.gradle.kts</code> 或 <code>build.gradle</code> 中修改 Kotlin 的 Java 版本为 17 及以上。</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">android</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">compileOptions</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        sourceCompatibility </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> JavaVersion.VERSION_17</span></span>
<span class="line"><span style="color:#ADBAC7;">        targetCompatibility </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> JavaVersion.VERSION_17</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">kotlinOptions</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        jvmTarget </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;17&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">android {</span></span>
<span class="line"><span style="color:#ADBAC7;">    compileOptions {</span></span>
<span class="line"><span style="color:#ADBAC7;">        sourceCompatibility </span><span style="color:#F47067;">JavaVersion.</span><span style="color:#6CB6FF;">VERSION_17</span></span>
<span class="line"><span style="color:#ADBAC7;">        targetCompatibility </span><span style="color:#F47067;">JavaVersion.</span><span style="color:#6CB6FF;">VERSION_17</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    kotlinOptions {</span></span>
<span class="line"><span style="color:#ADBAC7;">        jvmTarget </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>自 API <strong>1.0.80</strong> 版本后 Kotlin 使用的 Java 版本默认为 11，不再支持 1.8 及以下版本。</p><p>自 API <strong>1.2.0</strong> 版本后 Kotlin 使用的 Java 版本默认为 17，不再支持 11 及以下版本。</p></div><h3 id="作为-xposed-模块使用" tabindex="-1"><a class="header-anchor" href="#作为-xposed-模块使用" aria-hidden="true">#</a> 作为 Xposed 模块使用</h3><p>在你的 <code>AndroidManifest.xml</code> 中添加基础代码。</p><blockquote><p>示例如下</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">&lt;!-- 设置为 Xposed 模块 --&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">meta-data</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;xposedmodule&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:value</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;true&quot;</span><span style="color:#ADBAC7;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">&lt;!-- 设置你的模块描述 --&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">meta-data</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;xposeddescription&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:value</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;填写你的 Xposed 模块描述&quot;</span><span style="color:#ADBAC7;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">&lt;!-- 最低 Xposed 版本号，若你正在使用 EdXposed/LSPosed，建议最低为 93 --&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">meta-data</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;xposedminversion&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:value</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;93&quot;</span><span style="color:#ADBAC7;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">&lt;!-- 可选：配置支持 New XSharedPreferences 可无需调整 xposedminversion 为 93 --&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">meta-data</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;xposedsharedprefs&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:value</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;true&quot;</span><span style="color:#ADBAC7;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在你的项目中创建一个 Hook 入口类，继承于 <code>IYukiHookXposedInit</code> 并加入注解 <code>@InjectYukiHookWithXposed</code>。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHook</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> YukiHookAPI.</span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">建议</p><p>请在 <strong>onInit</strong> 方法中配置 <strong>YukiHookAPI</strong> 并将 <strong>isDebug</strong> 模式设置为如下形式。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onInit</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">configs</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    isDebug </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> BuildConfig.DEBUG</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以将你的模块 APP 的 <strong>Application</strong> 继承于 <strong>ModuleApplication</strong> 以实现完整使用体验。</p><p>更多功能请参考 <a href="../api/public/com/highcapable/yukihookapi/hook/xposed/application/ModuleApplication">ModuleApplication</a>。</p></div><p>然后，你就可以开始编写 Hook 代码了。</p><p>有关作为 Xposed 模块使用的相关配置详细内容，你可以 <a href="../config/xposed-using">点击这里</a> 继续阅读。</p><p>若你目前正在使用 Rovo89 Xposed API 等 Hook API，你可以参考 <a href="../guide/move-to-new-api">从其它 Hook API 迁移</a>。</p><h3 id="作为-hook-api-使用" tabindex="-1"><a class="header-anchor" href="#作为-hook-api-使用" aria-hidden="true">#</a> 作为 Hook API 使用</h3><h4 id="集成方式" tabindex="-1"><a class="header-anchor" href="#集成方式" aria-hidden="true">#</a> 集成方式</h4><p>创建你的自定义 <code>Application</code>。</p><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>无论使用任何 <strong>Hook Framework</strong>，你都需要加入其对接的 Xposed 依赖支持。</p><p>若目标 <strong>Hook Framework</strong> 没有集成 Rovo89 Xposed API 你需要自行实现并对接 <strong>XposedBridge</strong>。</p></div><p>在 <code>attachBaseContext</code> 中添加 <code>YukiHookAPI.encase</code> 方法。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base: </span><span style="color:#F69D50;">Context</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 装载 Hook Framework</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">//</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">//</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 装载 YukiHookAPI</span></span>
<span class="line"><span style="color:#ADBAC7;">    YukiHookAPI.</span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;">(base) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，你就可以开始编写 Hook 代码了，方式与作为 Xposed 模块使用基本一致。</p><p>有关作为 Hook API 使用的相关配置详细内容，你可以 <a href="../config/api-using">点击这里</a> 继续阅读。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>使用自定义的 Hook Framework 而并非完整的 Xposed 模块时，<strong>YukiHookPrefsBridge</strong>、<strong>YukiHookDataChannel</strong> 以及 Resources Hook 功能将失效。</p></div>`,28);function h(g,F){const a=p("ExternalLinkIcon");return i(),c("div",null,[t,n("p",null,[s("我们推荐使用 Kotlin DSL 作为 Gradle 构建脚本语言并推荐使用 "),n("a",d,[s("SweetDependency"),l(a)]),s(" 来管理依赖。")]),A,n("p",null,[s("请将 "),u,s(" 修改为 "),n("a",v,[s("这里"),l(a)]),s(" 的最新版本 "),y,s("。")]),D,n("div",b,[B,m,n("p",null,[s("我们推荐使用 "),n("a",C,[s("SweetDependency"),l(a)]),s(" 来自动帮你装配依赖。")])]),k])}const q=o(r,[["render",h],["__file","quick-start.html.vue"]]);export{q as default};
