import{_ as l,r as o,o as p,c as i,b as n,d as s,e as c,a as e}from"./app-BFk-K-88.js";const r={},t=e('<h1 id="migrate-to-yukihookapi-1-2-x" tabindex="-1"><a class="header-anchor" href="#migrate-to-yukihookapi-1-2-x" aria-hidden="true">#</a> Migrate to YukiHookAPI 1.2.x</h1><p><code>YukiHookAPI</code> has undergone a lot of adjustments since version <code>1.2.0</code>, you can read on to see what are the notes and new features.</p><h2 id="default-behavior-changes" tabindex="-1"><a class="header-anchor" href="#default-behavior-changes" aria-hidden="true">#</a> Default Behavior Changes</h2><p>Since version <code>1.2.0</code>, the <code>isUsingResourcesHook</code> function in <code>@InjectYukiHookWithXposed</code> is no longer enabled by default, please enable it manually if necessary.</p><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>Resources Hook will be removed in version <strong>2.0.0</strong> and is now marked <strong>LegacyResourcesHook</strong>.</p><p>You can use <strong>@OptIn(LegacyResourcesHook::class)</strong> to eliminate the warning, continue to use version <strong>1.x.x</strong>.</p></div><h2 id="new-api" tabindex="-1"><a class="header-anchor" href="#new-api" aria-hidden="true">#</a> New API</h2>',6),d=n("code",null,"YukiHookAPI",-1),u={href:"https://github.com/HighCapable/YukiHookAPI/issues/33",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"2.0.0",-1),y=n("code",null,"1.2.0",-1),m=e(`<p>You can before the <code>2.0.0</code> version is officially released, start migrating and experience the New API.</p><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>All legacy APIs have been marked <strong>LegacyHookApi</strong>, you can use <strong>@OptIn(LegacyHookApi::class)</strong> to eliminate the warning and continue to use the legacy API.</p></div><p>For example, we want to Hook the <code>test</code> method in the <code>com.example.Test</code> class.</p><blockquote><p>Legacy API</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">findClass</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;com.example.Test&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">hook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">injectMember</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">beforeHook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">afterHook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>New API</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#96D0FF;">&quot;com.example.Test&quot;</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">toClass</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    .</span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }.</span><span style="color:#DCBDFB;">hook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">before</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The Hook object of the New API has been migrated from <code>Class</code> to <code>Member</code>, which will be more intuitive.</p><h2 id="differential-functions" tabindex="-1"><a class="header-anchor" href="#differential-functions" aria-hidden="true">#</a> Differential Functions</h2><p>The following are some of the different functions of connecting to the new version of the API.</p><h3 id="new-multi-hook-usage" tabindex="-1"><a class="header-anchor" href="#new-multi-hook-usage" aria-hidden="true">#</a> New Multi-Hook Usage</h3><p>Previously we needed to hook all methods that match conditions like this.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">injectMembers</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">name</span><span style="color:#ADBAC7;"> { it.</span><span style="color:#DCBDFB;">contains</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;some&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }.</span><span style="color:#DCBDFB;">all</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">afterHook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you can use the following method instead.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">name</span><span style="color:#ADBAC7;"> { it.</span><span style="color:#DCBDFB;">contains</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;some&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#ADBAC7;">}.</span><span style="color:#DCBDFB;">hookAll</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new-allmembers-usage" tabindex="-1"><a class="header-anchor" href="#new-allmembers-usage" aria-hidden="true">#</a> New <code>allMembers(...)</code> Usage</h3><p>Previously we needed to hook all methods and constructors like this.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">injectMembers</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">allMembers</span><span style="color:#ADBAC7;">(MembersType.METHOD)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">afterHook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">injectMembers</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">allMembers</span><span style="color:#ADBAC7;">(MembersType.CONSTRUCTOR)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">afterHook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you can use the following method instead.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">hookAll</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">hookAll</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the find conditions are not filled in, all members in the current <code>Class</code> are obtained by default.</p><p>If you want to hook <code>MembersType.ALL</code>, there is currently no direct method, but you can concatenate all members and then hook.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">(</span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">giveAll</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">+</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">giveAll</span><span style="color:#ADBAC7;">()).</span><span style="color:#DCBDFB;">hookAll</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But we do not recommend this approach, too many hook members at one time are uncontrollable and problems may occur.</p>`,31);function v(D,B){const a=o("ExternalLinkIcon");return p(),i("div",null,[t,n("p",null,[d,s(" introduced the "),n("a",u,[s("New Hook Code Style"),c(a)]),s(" (New API) of "),A,s(" in the "),y,s(" version, it is now in the experimental stage.")]),m])}const h=l(r,[["render",v],["__file","move-to-api-1-2-x.html.vue"]]);export{h as default};
