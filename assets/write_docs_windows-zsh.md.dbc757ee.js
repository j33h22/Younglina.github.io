import{_ as s,o as n,c as a,y as e}from"./app.6d59bd98.js";const b=JSON.parse('{"title":"win10配置oh my zsh到vscode","description":"","frontmatter":{"date":"2022-03-21","title":"win10配置oh my zsh到vscode","author":"Younglina","categories":["文档"],"tags":["记录"]},"headers":[{"level":2,"title":"ubuntu","slug":"ubuntu","link":"#ubuntu","children":[]},{"level":2,"title":"zsh git","slug":"zsh-git","link":"#zsh-git","children":[]},{"level":2,"title":"oh my zsh","slug":"oh-my-zsh","link":"#oh-my-zsh","children":[]},{"level":2,"title":"配置ohmyzsh的插件","slug":"配置ohmyzsh的插件","link":"#配置ohmyzsh的插件","children":[{"level":3,"title":"高亮 zsh-syntax-highlighting","slug":"高亮-zsh-syntax-highlighting","link":"#高亮-zsh-syntax-highlighting","children":[]},{"level":3,"title":"自动提示 zsh-autosuggestions","slug":"自动提示-zsh-autosuggestions","link":"#自动提示-zsh-autosuggestions","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"git","slug":"git","link":"#git","children":[]},{"level":3,"title":"结合vscode","slug":"结合vscode","link":"#结合vscode","children":[]}]},{"level":2,"title":"懒人小技巧","slug":"懒人小技巧","link":"#懒人小技巧","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"结合ohmyzsh","slug":"结合ohmyzsh","link":"#结合ohmyzsh","children":[]}]}],"relativePath":"write/docs/windows-zsh.md","lastUpdated":1662613821000}'),l={name:"write/docs/windows-zsh.md"},i=e(`<p>给<code>win10</code>配置<code>oh my zsh</code>，配置<code>zsh-syntax-highlighting</code>、<code>zsh-autosuggestions</code>、<code>git</code>等插件，配置好以后就可以像<code>mac</code>一样直接在<code>vscode</code>中使用， 最后配合<a href="https://github.com/antfu/ni" target="_blank" rel="noreferrer">ni</a>，配置一些快捷方式，稍微提高一些开发效率</p><h2 id="ubuntu" tabindex="-1">ubuntu <a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a></h2><p>在win10的<code>Microsoft Store</code>中，搜索<code>ubuntu</code>，并安装 <img src="https://raw.githubusercontent.com/Younglina/images/master/ubuntu.png" alt=""></p><p>同样再搜索<code>windows terminal</code>，并安装 <img src="https://raw.githubusercontent.com/Younglina/images/master/wint.png" alt=""></p><h2 id="zsh-git" tabindex="-1">zsh git <a class="header-anchor" href="#zsh-git" aria-hidden="true">#</a></h2><p>进入刚刚下载的<code>windows terminal</code>，输入<code>wsl</code>进入wsl的ubuntu环境<br> 然后安装<code>zsh</code>和<code>git</code></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sudo apt install zsh git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://raw.githubusercontent.com/Younglina/images/master/zsh.png" alt=""></p><h2 id="oh-my-zsh" tabindex="-1">oh my zsh <a class="header-anchor" href="#oh-my-zsh" aria-hidden="true">#</a></h2><p>用<code>git</code>把<code>oh my zsh</code>的源码拷下来</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后安装</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">~/.oh-my-zsh/tools/install.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这一步如果一直有问题的话，可以直接上<a href="https://github.com/ohmyzsh/ohmyzsh.git" target="_blank" rel="noreferrer">ohmyzsh</a>,把它的<code>install.sh</code>弄到<code>~/.oh-my-zsh</code>下面去执行</p><h2 id="配置ohmyzsh的插件" tabindex="-1">配置ohmyzsh的插件 <a class="header-anchor" href="#配置ohmyzsh的插件" aria-hidden="true">#</a></h2><h3 id="高亮-zsh-syntax-highlighting" tabindex="-1">高亮 zsh-syntax-highlighting <a class="header-anchor" href="#高亮-zsh-syntax-highlighting" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="自动提示-zsh-autosuggestions" tabindex="-1">自动提示 zsh-autosuggestions <a class="header-anchor" href="#自动提示-zsh-autosuggestions" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/zsh-users/zsh-autosuggestions \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h3><p>拷下来以后记得在<code>./zshrc</code>中写上，并启用,<code>source ~/.zshrc</code><br> 先安装一个<code>vim</code>，方便直接在控制台编辑</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get install vim</span></span>
<span class="line"><span style="color:#A6ACCD;">vim ~/.zshrc</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>写入</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">plugins=( git zsh-syntax-highlighting zsh-autosuggestions ) </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h3><p>git是oh my zsh自带的插件，它包含了几乎所有的git命令的缩写，直接在<code>./zshrc</code>中配置即可</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">plugins=( git ) </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>配置好以后可直接在控制台输入别名，如一些常用的</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">ga // git add</span></span>
<span class="line"><span style="color:#A6ACCD;">gaa // git add -all</span></span>
<span class="line"><span style="color:#A6ACCD;">gcmsg // git commit -m</span></span>
<span class="line"><span style="color:#A6ACCD;">gf // git fetch</span></span>
<span class="line"><span style="color:#A6ACCD;">gl // git pull</span></span>
<span class="line"><span style="color:#A6ACCD;">gp // git push</span></span>
<span class="line"><span style="color:#A6ACCD;">gm // git merge</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>完整的可以去<a href="https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git" target="_blank" rel="noreferrer">git</a>上看看</p><h3 id="结合vscode" tabindex="-1">结合vscode <a class="header-anchor" href="#结合vscode" aria-hidden="true">#</a></h3><p>直接在新建终端的时候，选择默认配置文件，就是上面安装的<code>ubuntu</code><br><img src="https://raw.githubusercontent.com/Younglina/images/master/vscode.png" alt=""><br> 最终在vscode的效果就是这样<br><img src="https://raw.githubusercontent.com/Younglina/images/master/ohmyzsh.png" alt=""></p><h2 id="懒人小技巧" tabindex="-1">懒人小技巧 <a class="header-anchor" href="#懒人小技巧" aria-hidden="true">#</a></h2><p>在看了antfu的直播以后，他分享了一些懒人的小技巧。</p><p><a href="https://github.com/antfu/ni" target="_blank" rel="noreferrer">ni</a> - use the right package manager<br> 这是他写的一个包管理器，运行它之后，会检测你的项目中是否存在锁文件，如<code>pnpm-lock.yaml、yarn.lock</code>，如果存在则运行对应的安装命令</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm i -g @antfu/ni</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">ni</span></span>
<span class="line"><span style="color:#A6ACCD;">//发现项目中有 \`pnpm-lock.yaml\`，那么它就会执行\`pnpm i\`</span></span>
<span class="line"><span style="color:#A6ACCD;">//发现项目中有 \`yarn.lock\`，那么它就会执行\`yarn install\`</span></span>
<span class="line"><span style="color:#A6ACCD;">//存在多个的话 yarn.lock / pnpm-lock.yaml / package-lock.json</span></span>
<span class="line"><span style="color:#A6ACCD;">//优先级pnpm、npm、yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">//所以，使用\`ni\`以后就不用考虑从\`git\`上面clone下来的项目使用的哪个包管理器，直接\`ni\`，它会帮你判断，就像\`Vue3\`从\`yarn\`变到\`pnpm only\`的情况</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ni axios</span></span>
<span class="line"><span style="color:#A6ACCD;"># npm i axios</span></span>
<span class="line"><span style="color:#A6ACCD;"># yarn add axios</span></span>
<span class="line"><span style="color:#A6ACCD;"># pnpm add axios</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">nr dev --port=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># npm run dev -- --port=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"># yarn run dev --port=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"># pnpm run dev -- --port=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="结合ohmyzsh" tabindex="-1">结合ohmyzsh <a class="header-anchor" href="#结合ohmyzsh" aria-hidden="true">#</a></h3><p>修改<code>.zshrc</code>文件，配置别名</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">vim ~/.zshrc</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>写入</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">//nr 对应上面 ni 的用法</span></span>
<span class="line"><span style="color:#A6ACCD;">alias d=&quot;nr dev&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">alias s=&quot;nr start&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">alias b=&quot;nr build&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">//如果不想装ni,可以用常规的写法</span></span>
<span class="line"><span style="color:#A6ACCD;">alias d=&quot;npm run dev&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>然后就可以直接在控制台中，输入配置的别名，如<code>d</code>，就会运行<code>nr dev</code><br><img src="https://raw.githubusercontent.com/Younglina/images/master/nid.png" alt=""><br> 所以之后就可以配置很多常用的命令别名，来提高开发效率</p>`,45),p=[i];function t(r,o,c,d,h,u){return n(),a("div",null,p)}const g=s(l,[["render",t]]);export{b as __pageData,g as default};
