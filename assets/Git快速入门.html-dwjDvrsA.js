import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as l,c as g,b as t,d as e,e as n,w as a,f as i}from"./app-VJzG1zU_.js";const d="/yjh-BlogsSite/assets/lifecycle-b1zbZA_x.png",c={},p=i('<h1 id="git-快速入门" tabindex="-1"><a class="header-anchor" href="#git-快速入门"><span>Git 快速入门</span></a></h1><h2 id="获取git仓库" tabindex="-1"><a class="header-anchor" href="#获取git仓库"><span>获取git仓库</span></a></h2><p>获取git仓库通常有两种方式：</p><ol><li>将 <strong>尚未进行版本控制</strong> 的本地项目目录 <strong>转换</strong> 为 Git 仓库；</li><li>从远端服务器 <strong>克隆</strong> 一个 <em>已存在</em> 的 Git 仓库</li></ol><p>通过上述两种方式，你可以在自己电脑上得到git本地仓库</p><h3 id="本地项目转git仓库" tabindex="-1"><a class="header-anchor" href="#本地项目转git仓库"><span>本地项目转Git仓库</span></a></h3><p>对于某尚未进行版本控制的本地目录，想用 Git 进行控制，首先需要通过 <code>git init</code> <strong>初始化</strong> git仓库【该命令将创建一个名为 .git 的子目录，其中含有你初始化的 Git 仓库中所有的必须文件。 此时我们仅仅是对仓库进行初始化，你的项目里的文件还没有被跟踪】，然后通过 <code>git remote add name &lt;remote-repository-url&gt;</code> 将本地仓库与远端git仓库进行<strong>绑定</strong></p><h3 id="远程克隆git仓库" tabindex="-1"><a class="header-anchor" href="#远程克隆git仓库"><span>远程克隆git仓库</span></a></h3><p>如果代码存在于远端服务器中 <em>且被git所管理</em> ，则我们可以通过 <code>git clone &lt;remote-repository-url&gt;</code> 将远端服务器的git仓库克隆到本地相应位置</p><h2 id="git相关操作" tabindex="-1"><a class="header-anchor" href="#git相关操作"><span>git相关操作</span></a></h2><blockquote><p>git的操作大致为：<strong>暂存代码 ---&gt; 提交代码 ---&gt; 将代码推送到仓库</strong></p><p>具体操作还有诸如<strong>回滚</strong>、<strong>合并</strong>等</p></blockquote><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>工作目录下的每一个文件都不外乎这两种状态：<strong>已跟踪</strong> 或 <strong>未跟踪</strong>。 <em>已跟踪的文件是指那些被纳入了版本控制的文件</em> ；</p><p><strong>查看文件的状态</strong> ，我们可以使用 <code>git status</code> 命令实现</p><h3 id="暂存代码" tabindex="-1"><a class="header-anchor" href="#暂存代码"><span>暂存代码</span></a></h3><p>当代码修改后，代码将处于 <strong>未暂存</strong> 状态，这时我们需要通过 <code>git add &lt;file-name&gt;</code> 将修改的代码放入git <strong>暂存区</strong> 中（类似于word中的保存文档）</p><p>当我们需要取消对某代码的暂存时，我们可以通过 <code>git reset</code> 命令来<strong>取消暂存</strong></p><ul><li>取消暂存整个文件：<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  <span class="token function">git</span> reset FILE_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>将 FILE_NAME 替换为你想要取消暂存的文件名。</li><li>取消暂存文件的部分更改（需要使用 git add -p 命令的交互模式）：<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>然后按照提示操作，选择你想要取消暂存的代码块</li></ul>`,18),h=t("code",null,"git reset",-1),u=i('<h3 id="提交代码" tabindex="-1"><a class="header-anchor" href="#提交代码"><span>提交代码</span></a></h3><p>在暂存完代码后，我们便可以通过 <code>git commit</code> 相关命令将代码<strong>提交到本地仓库</strong></p><ul><li><code>git commit -a</code> ：可以不使用<code>git add</code>的情况下直接提交全部代码到仓库</li><li><code>git commit -m &lt;msg&gt;</code> ：提交时指定提交信息</li><li><code>git commit [file1] [file2] ... -m &lt;msg&gt;</code> ：提交暂存区的指定文件到仓库区：</li></ul><h3 id="推送代码" tabindex="-1"><a class="header-anchor" href="#推送代码"><span>推送代码</span></a></h3><p>提交代码只是 <strong>将暂存区代码提交到了本地仓库</strong> ，下面我们还需要通过推送代码将代码从本地git仓库推送到远程git仓库中（如Gitee、Github、Gitlab等）。我们可以通过 <code>git push &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;</code> 命令实现</p>',5),m=t("ul",null,[t("li",null,[t("strong",null,"提交代码"),e(" ：将暂存区代码提交到了"),t("strong",null,"本地"),e("仓库；")]),t("li",null,[t("strong",null,"推送代码"),e(" ：将代码从本地git仓库推送到"),t("strong",null,"远程"),e("git仓库")])],-1);function _(f,b){const s=r("font");return l(),g("div",null,[p,t("p",null,[t("strong",null,[e("请注意，"),n(s,{color:"red"},{default:a(()=>[h,e(" 命令只是将更改从暂存区移回工作区，它不会撤销任何实际的文件更改 ")]),_:1})])]),u,t("p",null,[t("strong",null,[n(s,{color:"red"},{default:a(()=>[e(" 请务必注意: ")]),_:1})])]),m])}const G=o(c,[["render",_],["__file","Git快速入门.html.vue"]]);export{G as default};
