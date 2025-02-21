import{_ as o,r as p,o as i,c as t,b as n,d as s,e as a,a as l}from"./app-BFk-K-88.js";const r={},c=l('<h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h1><blockquote><p>Integrate <code>YukiHookAPI</code> into your project.</p></blockquote><h2 id="environment-requirements" tabindex="-1"><a class="header-anchor" href="#environment-requirements" aria-hidden="true">#</a> Environment Requirements</h2><ul><li><p>Windows 7 and above / macOS 10.14 and above / Linux distributions (Arch/Debian)</p></li><li><p>Android Studio 2021.1 and above</p></li><li><p>IntelliJ IDEA 2021.1 and above</p></li><li><p>Kotlin 1.7.0 and above</p></li><li><p>Android Gradle Plugin 7.0 and above</p></li><li><p>Gradle 7.0 and above</p></li><li><p>Java 11 and above (Since API <code>1.0.80</code>)</p></li><li><p>Java 17 and above (Since API <code>1.2.0</code>)</p></li></ul><h2 id="automatically-build-project" tabindex="-1"><a class="header-anchor" href="#automatically-build-project" aria-hidden="true">#</a> Automatically Build Project</h2><p><code>YukiHookAPI</code> provides an automated build tool that can help you quickly build an Android standard project template with Xposed Module dependencies, and use the built template to start the next step directly.</p><p>You can <a href="../tools/yukihookapi-projectbuilder">click here</a> to check it out.</p><h2 id="manually-configure-project" tabindex="-1"><a class="header-anchor" href="#manually-configure-project" aria-hidden="true">#</a> Manually Configure Project</h2><p>If you don&#39;t want to use automated build tools, you can still manually configure project dependencies as follows.</p><h3 id="create-project" tabindex="-1"><a class="header-anchor" href="#create-project" aria-hidden="true">#</a> Create Project</h3><p>Use <code>Android Studio</code> or <code>IntelliJ IDEA</code> to create a new Android project and select Kotlin in the <code>Language</code> column to automatically add basic dependencies.</p><h3 id="integration-dependencies" tabindex="-1"><a class="header-anchor" href="#integration-dependencies" aria-hidden="true">#</a> Integration Dependencies</h3>',12),d={href:"https://github.com/HighCapable/SweetDependency",target:"_blank",rel:"noopener noreferrer"},u=l(`<h4 id="sweetdependency-recommended" tabindex="-1"><a class="header-anchor" href="#sweetdependency-recommended" aria-hidden="true">#</a> SweetDependency (Recommended)</h4><p>Add the repositories and dependencies in your project&#39;s <code>SweetDependency</code> configuration file.</p><blockquote><p>The following example</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#8DDB8C;">repositories</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;"># Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">rovo89-xposed-api</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">url</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">https://api.xposed.info/</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;"># MavenCentral has a 2-hour cache,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;"># if the latest version cannot be integrated, please add this</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">sonatype-oss-releases</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8DDB8C;">plugins</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;"># Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">com.google.devtools.ksp</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">version</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">+</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8DDB8C;">libraries</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;"># Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">de.robv.android.xposed</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">api</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">version</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">82</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">repositories</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#96D0FF;">rovo89-xposed-api</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">com.highcapable.yukihookapi</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">api</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">version</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">+</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;"># Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">ksp-xposed</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">version-ref</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&lt;this&gt;::api</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After adding it, run Gradle Sync and all dependencies will be autowired.</p><p>Next, deploy plugins in your project <code>build.gradle.kts</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">plugins</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">autowire</span><span style="color:#ADBAC7;">(libs.plugins.com.google.devtools.ksp)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, deploy dependencies in your project <code>build.gradle.kts</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">dependencies</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Basic dependencies</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">implementation</span><span style="color:#ADBAC7;">(com.highcapable.yukihookapi.api)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">compileOnly</span><span style="color:#ADBAC7;">(de.robv.android.xposed.api)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">ksp</span><span style="color:#ADBAC7;">(com.highcapable.yukihookapi.ksp.xposed)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="traditional-method" tabindex="-1"><a class="header-anchor" href="#traditional-method" aria-hidden="true">#</a> Traditional Method</h4><p>Add repositories in your project <code>build.gradle.kts</code> or <code>build.gradle</code>.</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">repositories</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">google</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">mavenCentral</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">maven</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">url</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;https://api.xposed.info/&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// MavenCentral has a 2-hour cache, if the latest version cannot be integrated, please add this URL</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">maven</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">url</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;https://s01.oss.sonatype.org/content/repositories/releases/&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">repositories {</span></span>
<span class="line"><span style="color:#ADBAC7;">    google()</span></span>
<span class="line"><span style="color:#ADBAC7;">    mavenCentral()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    maven { url </span><span style="color:#96D0FF;">&#39;https://api.xposed.info/&#39;</span><span style="color:#ADBAC7;"> }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// MavenCentral has a 2-hour cache, if the latest version cannot be integrated, please add this URL</span></span>
<span class="line"><span style="color:#ADBAC7;">    maven { url </span><span style="color:#96D0FF;">&#39;https://s01.oss.sonatype.org/content/repositories/releases/&#39;</span><span style="color:#ADBAC7;"> }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add plugins in your project <code>build.gradle.kts</code> or <code>build.gradle</code>.</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">plugins</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">id</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;com.google.devtools.ksp&quot;</span><span style="color:#ADBAC7;">) version </span><span style="color:#96D0FF;">&quot;&lt;ksp-version&gt;&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">plugins {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    id </span><span style="color:#96D0FF;">&#39;com.google.devtools.ksp&#39;</span><span style="color:#ADBAC7;"> version </span><span style="color:#96D0FF;">&#39;&lt;ksp-version&gt;&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add dependencies in your project <code>build.gradle.kts</code> or <code>build.gradle</code>.</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">dependencies</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Basic dependency</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">implementation</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;com.highcapable.yukihookapi:api:&lt;yuki-version&gt;&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">compileOnly</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;de.robv.android.xposed:api:82&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">ksp</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;com.highcapable.yukihookapi:ksp-xposed:&lt;yuki-version&gt;&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">dependencies {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Basic dependency</span></span>
<span class="line"><span style="color:#ADBAC7;">    implementation </span><span style="color:#96D0FF;">&#39;com.highcapable.yukihookapi:api:&lt;yuki-version&gt;&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    compileOnly </span><span style="color:#96D0FF;">&#39;de.robv.android.xposed:api:82&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Must be added when used as an Xposed Module, otherwise optional</span></span>
<span class="line"><span style="color:#ADBAC7;">    ksp </span><span style="color:#96D0FF;">&#39;com.highcapable.yukihookapi:ksp-xposed:&lt;yuki-version&gt;&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),y=n("strong",null,"<ksp-version>",-1),v={href:"https://github.com/google/ksp/releases",target:"_blank",rel:"noopener noreferrer"},A=n("strong",null,"(please note to select your current corresponding Kotlin version)",-1),m=n("p",null,[s("Please change "),n("strong",null,"<yuki-version>"),s(" to the latest version "),n("a",{href:"../about/changelog"},"here"),s(".")],-1),D={class:"custom-container danger"},b=n("p",{class:"custom-container-title"},"Pay Attention",-1),B=n("p",null,[s("The "),n("strong",null,"api"),s(" and "),n("strong",null,"ksp-xposed"),s(" dependency versions of "),n("strong",null,"YukiHookAPI"),s(" must correspond one-to-one, otherwise a version mismatch error will occur.")],-1),h={href:"https://github.com/HighCapable/SweetDependency",target:"_blank",rel:"noopener noreferrer"},C=l(`<h4 id="configure-java-version" tabindex="-1"><a class="header-anchor" href="#configure-java-version" aria-hidden="true">#</a> Configure Java Version</h4><p>Modify the Java version of Kotlin in your project <code>build.gradle.kts</code> or <code>build.gradle</code> to 17 or above.</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">android</span><span style="color:#ADBAC7;"> {</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>Since API <strong>1.0.80</strong>, the Java version used by Kotlin defaults to 11, and versions 1.8 and below are no longer supported.</p><p>Since API <strong>1.2.0</strong>, the Java version used by Kotlin defaults to 17, and versions 11 and below are no longer supported.</p></div><h3 id="use-as-xposed-module" tabindex="-1"><a class="header-anchor" href="#use-as-xposed-module" aria-hidden="true">#</a> Use as Xposed Module</h3><p>Add the base code to your <code>AndroidManifest.xml</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">&lt;!-- Set as Xposed Module --&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">meta-data</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;xposedmodule&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:value</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;true&quot;</span><span style="color:#ADBAC7;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">&lt;!-- Set your Xposed Module description --&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">meta-data</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;xposeddescription&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:value</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;Fill in your Xposed Module description&quot;</span><span style="color:#ADBAC7;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">&lt;!-- The minimum Xposed version number --&gt;</span></span>
<span class="line"><span style="color:#768390;">&lt;!-- If you are using EdXposed/LSPosed, the minimum recommended is 93 --&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">meta-data</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;xposedminversion&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:value</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;93&quot;</span><span style="color:#ADBAC7;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">&lt;!-- Optional: Configure support for New XSharedPreferences without adjusting xposedminversion to 93 --&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">meta-data</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;xposedsharedprefs&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:value</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;true&quot;</span><span style="color:#ADBAC7;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create a Hook entry class in your project, implements <code>IYukiHookXposedInit</code> and add the annotation <code>@InjectYukiHookWithXposed</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHook</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> YukiHookAPI.</span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Suggestion</p><p>Please configure <strong>YukiHookAPI</strong> in the <strong>onInit</strong> method and set the <strong>isDebug</strong> mode to the following form.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onInit</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">configs</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    isDebug </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> BuildConfig.DEBUG</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also extends <strong>Application</strong> of your Module App from <strong>ModuleApplication</strong> to achieve a complete user experience.</p><p>For more functions, please refer to <a href="../api/public/com/highcapable/yukihookapi/hook/xposed/application/ModuleApplication">ModuleApplication</a>.</p></div><p>Then, you can start writing Hook code.</p><p>For configuration details related to use as an Xposed Module, you can <a href="../config/xposed-using">click here</a> to continue reading.</p><p>If you are currently using Hook APIs such as Rovo89 Xposed API, you can refer to <a href="../guide/move-to-new-api">Migrate from Other Hook APIs</a>.</p><h3 id="use-as-hook-api" tabindex="-1"><a class="header-anchor" href="#use-as-hook-api" aria-hidden="true">#</a> Use as Hook API</h3><h4 id="integration" tabindex="-1"><a class="header-anchor" href="#integration" aria-hidden="true">#</a> Integration</h4><p>Create your custom <code>Application</code>.</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>Regardless of the <strong>Hook Framework</strong> you use, you need to add its docking Xposed dependency support.</p><p>If the target <strong>Hook Framework</strong> does not integrate Rovo89 Xposed API, you need to implement and connect <strong>XposedBridge</strong> by yourself.</p></div><p>Add <code>YukiHookAPI.encase</code> method to <code>attachBaseContext</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base: </span><span style="color:#F69D50;">Context</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Load Hook Framework</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">//</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">//</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Load YukiHookAPI</span></span>
<span class="line"><span style="color:#ADBAC7;">    YukiHookAPI.</span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;">(base) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, you can start writing Hook code in much the same way you would use it as an Xposed Module.</p><p>For configuration details related to use as a Hook API, you can <a href="../config/api-using">click here</a> to continue reading.</p><div class="custom-container warning"><p class="custom-container-title">Notice</p><p><strong>YukiHookPrefsBridge</strong>, <strong>YukiHookDataChannel</strong> and Resources Hook functionality will not work when using a custom Hook Framework instead of the full Xposed Module.</p></div>`,28);function g(k,F){const e=p("ExternalLinkIcon");return i(),t("div",null,[c,n("p",null,[s("We recommend using Kotlin DSL as the Gradle build script language and "),n("a",d,[s("SweetDependency"),a(e)]),s(" to manage dependencies.")]),u,n("p",null,[s("Please modify "),y,s(" to the latest version found "),n("a",v,[s("here"),a(e)]),s(),A,s(".")]),m,n("div",D,[b,B,n("p",null,[s("We recommend using "),n("a",h,[s("SweetDependency"),a(e)]),s(" to autowire dependencies for you.")])]),C])}const x=o(r,[["render",g],["__file","quick-start.html.vue"]]);export{x as default};
