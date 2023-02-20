import{_ as s,o as n,c as a,y as l}from"./app.6d59bd98.js";const A=JSON.parse('{"title":"滑动窗口模版","description":"","frontmatter":{"title":"滑动窗口模版","author":"Younglina","date":"2022-02-17","showAccessNumber":true,"categories":["算法"],"tags":["算法模版"]},"headers":[{"level":2,"title":"例如 1004.最大连续1的个数 III","slug":"例如-1004-最大连续1的个数-iii","link":"#例如-1004-最大连续1的个数-iii","children":[]},{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[{"level":3,"title":"示例 1：","slug":"示例-1","link":"#示例-1","children":[]},{"level":3,"title":"示例 2：","slug":"示例-2","link":"#示例-2","children":[]}]},{"level":2,"title":"题解","slug":"题解","link":"#题解","children":[]}],"relativePath":"write/algorithms-temp/sliding-window.md","lastUpdated":1662613821000}'),p={name:"write/algorithms-temp/sliding-window.md"},e=l(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://leetcode-cn.com/problems/max-consecutive-ones-iii/solution/fen-xiang-hua-dong-chuang-kou-mo-ban-mia-f76z/" target="_blank" rel="noreferrer">参考【fuxuemingzhu】关于「滑动窗口」的模版</a></p></div><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> solution </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 数组/字符串长度</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 双指针，表示当前遍历的区间[left, right]，闭区间</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 用于统计 子数组/子区间 是否有效，根据题目可能会改成求和/计数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 保存最大的满足题目要求的 子数组/子串 长度</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 当右边的指针没有搜索到 数组/字符串 的结尾</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;">] </span><span style="color:#676E95;font-style:italic;">// 增加当前右边指针的数字/字符的求和/计数</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">区间</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">]</span><span style="color:#A6ACCD;">不符合题意</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">// 此时需要一直移动左指针，直至找到一个符合题意的区间</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;">] </span><span style="color:#676E95;font-style:italic;">// 移动左指针前需要从counter中减少left位置字符的求和/计数</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//  真正的移动左指针，注意不能跟上面一行代码写反</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 需要更新结果</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//  移动右指针，去探索新的区间</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>滑动窗口中用到了左右两个指针，它们移动的思路是：以右指针作为驱动，拖着左指针向前走。右指针每次只移动一步，而左指针在内部 <code>while</code> 循环中每次可能移动多步。右指针是主动前移，探索未知的新区域；左指针是被迫移动，负责寻找满足题意的区间。</p><p>模板的整体思想是：</p><p>定义两个指针 <code>left</code> 和 <code>right</code> 分别指向区间的开头和结尾，注意是闭区间；定义 <code>sums</code> 用来统计该区间内的各个字符出现次数； 第一重 <code>while</code> 循环是为了判断 <code>right</code> 指针的位置是否超出了数组边界；当 <code>right</code> 每次到了新位置，需要增加 <code>right</code> 指针的求和/计数； 第二重 <code>while</code> 循环是让 <code>left</code> 指针向右移动到 <code>[left, right]</code> 区间符合题意的位置；当 <code>left</code> 每次移动到了新位置，需要减少 <code>left</code> 指针的求和/计数； 在第二重 <code>while</code> 循环之后，成功找到了一个符合题意的 <code>[left, right]</code> 区间，题目要求最大的区间长度，因此更新 <code>res</code> 为 <code>max(res, 当前区间的长度)</code> 。 <code>right</code> 指针每次向右移动一步，开始探索新的区间。 模板中的 <code>sums</code> 需要根据题目意思具体去修改，本题是求和题目因此把 <code>sums</code> 定义成整数用于求和；如果是计数题目，就需要改成字典用于计数。当左右指针发生变化的时候，都需要更新 <code>sums</code> 。</p><p>另外一个需要根据题目去修改的是内层 <code>while</code> 循环的判断条件，即： 区间 <code>[left, right]</code> 不符合题意 。</p><h2 id="例如-1004-最大连续1的个数-iii" tabindex="-1">例如 1004.最大连续1的个数 III <a class="header-anchor" href="#例如-1004-最大连续1的个数-iii" aria-hidden="true">#</a></h2><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/max-consecutive-ones-iii/" target="_blank" rel="noreferrer">1004.最大连续1的个数 III</a><br> 给定一个二进制数组 <code>nums</code> 和一个整数 <code>k</code> ，如果可以翻转最多<code>k</code> 个 <code>0</code> ，则返回 数组中连续 <code>1</code> 的最大个数 。</p><h3 id="示例-1" tabindex="-1">示例 1： <a class="header-anchor" href="#示例-1" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：6</span></span>
<span class="line"><span style="color:#A6ACCD;">解释：[1,1,1,0,0,1,1,1,1,1,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">粗体数字从 0 翻转到 1，最长的子数组长度为 6。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="示例-2" tabindex="-1">示例 2： <a class="header-anchor" href="#示例-2" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：10</span></span>
<span class="line"><span style="color:#A6ACCD;">解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">粗体数字从 0 翻转到 1，最长的子数组长度为 10。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> longestOnes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">k</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,15),o=[e];function c(r,t,i,y,F,D){return n(),a("div",null,o)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
