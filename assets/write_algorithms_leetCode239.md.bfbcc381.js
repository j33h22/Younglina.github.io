import{_ as s,o as n,c as a,y as l}from"./app.6d59bd98.js";const A=JSON.parse('{"title":"239.滑动窗口最大值","description":"","frontmatter":{"title":"239.滑动窗口最大值","author":"Younglina","date":"2022-07-13","showAccessNumber":true,"categories":["算法"],"tags":["队列","困难"]},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[{"level":3,"title":"示例 1：","slug":"示例-1","link":"#示例-1","children":[]},{"level":3,"title":"示例 2：","slug":"示例-2","link":"#示例-2","children":[]}]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"题解","slug":"题解","link":"#题解","children":[]}],"relativePath":"write/algorithms/leetCode239.md","lastUpdated":1662613821000}'),p={name:"write/algorithms/leetCode239.md"},e=l(`<h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/sliding-window-maximum/" target="_blank" rel="noreferrer">239.滑动窗口最大值</a><br> 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。<br> 返回 滑动窗口中的最大值 。</p><h3 id="示例-1" tabindex="-1">示例 1： <a class="header-anchor" href="#示例-1" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">输入：nums = [1,3,-1,-3,5,3,6,7], k = 3  </span></span>
<span class="line"><span style="color:#A6ACCD;">输出：[3,3,5,5,6,7]  </span></span>
<span class="line"><span style="color:#A6ACCD;">解释：  </span></span>
<span class="line"><span style="color:#A6ACCD;">滑动窗口的位置                最大值  </span></span>
<span class="line"><span style="color:#A6ACCD;">---------------               -----  </span></span>
<span class="line"><span style="color:#A6ACCD;">[1  3  -1] -3  5  3  6  7       3  </span></span>
<span class="line"><span style="color:#A6ACCD;"> 1 [3  -1  -3] 5  3  6  7       3  </span></span>
<span class="line"><span style="color:#A6ACCD;"> 1  3 [-1  -3  5] 3  6  7       5  </span></span>
<span class="line"><span style="color:#A6ACCD;"> 1  3  -1 [-3  5  3] 6  7       5  </span></span>
<span class="line"><span style="color:#A6ACCD;"> 1  3  -1  -3 [5  3  6] 7       6  </span></span>
<span class="line"><span style="color:#A6ACCD;"> 1  3  -1  -3  5 [3  6  7]      7  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="示例-2" tabindex="-1">示例 2： <a class="header-anchor" href="#示例-2" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">输入：nums = [1], k = 1  </span></span>
<span class="line"><span style="color:#A6ACCD;">输出：[1]  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>1 &lt;= nums.length &lt;= 105<br> -104 &lt;= nums[i] &lt;= 104<br> 1 &lt;= k &lt;= nums.length</p></div><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-hidden="true">#</a></h2><p>维护一个单调递减的队列，队列存储的是数组下标，循环数组，如果队列不为空,且当前值大于队列队尾值,则弹出队尾，保证队列为单调递减<br> 因为存储的是下标，所以当遍历到超出下标时，需将队列中对应数据弹出</p><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> maxSlidingWindow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">k</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">queue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">at</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)])</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">queue</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">queue</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,11),o=[e];function r(t,c,i,y,F,D){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{A as __pageData,u as default};
