const t=JSON.parse('{"key":"v-9f3e5c52","path":"/posts/git/Git%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html","title":"Git 快速入门","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"获取git仓库","slug":"获取git仓库","link":"#获取git仓库","children":[{"level":3,"title":"本地项目转Git仓库","slug":"本地项目转git仓库","link":"#本地项目转git仓库","children":[]},{"level":3,"title":"远程克隆git仓库","slug":"远程克隆git仓库","link":"#远程克隆git仓库","children":[]}]},{"level":2,"title":"git基础操作","slug":"git基础操作","link":"#git基础操作","children":[{"level":3,"title":"暂存代码","slug":"暂存代码","link":"#暂存代码","children":[]},{"level":3,"title":"提交代码","slug":"提交代码","link":"#提交代码","children":[]},{"level":3,"title":"推送代码","slug":"推送代码","link":"#推送代码","children":[]}]},{"level":2,"title":"git进阶操作","slug":"git进阶操作","link":"#git进阶操作","children":[{"level":3,"title":"分支","slug":"分支","link":"#分支","children":[]},{"level":3,"title":"比较文件差异","slug":"比较文件差异","link":"#比较文件差异","children":[]},{"level":3,"title":"打标签","slug":"打标签","link":"#打标签","children":[]},{"level":3,"title":"文档查看","slug":"文档查看","link":"#文档查看","children":[]},{"level":3,"title":"其他常用命令","slug":"其他常用命令","link":"#其他常用命令","children":[]}]}],"git":{"createdTime":1707745828000,"updatedTime":1707918378000,"contributors":[{"name":"yujiahan","email":"yujiahan_biancheng@163.com","commits":6}]},"readingTime":{"minutes":5.25,"words":1576},"filePathRelative":"posts/git/Git快速入门.md","localizedDate":"2024年2月12日","excerpt":"<h1>Git 快速入门</h1>\\n<h2>获取git仓库</h2>\\n<p>获取git仓库通常有两种方式：</p>\\n<ol>\\n<li>将 <strong>尚未进行版本控制</strong> 的本地项目目录 <strong>转换</strong> 为 Git 仓库；</li>\\n<li>从远端服务器 <strong>克隆</strong> 一个 <em>已存在</em> 的 Git 仓库</li>\\n</ol>\\n<p>通过上述两种方式，你可以在自己电脑上得到git本地仓库</p>\\n<h3>本地项目转Git仓库</h3>\\n<p>对于某尚未进行版本控制的本地目录，想用 Git 进行控制，首先需要通过 <code>git init</code> <strong>初始化</strong> git仓库【该命令将创建一个名为 .git 的子目录，其中含有你初始化的 Git 仓库中所有的必须文件。 此时我们仅仅是对仓库进行初始化，你的项目里的文件还没有被跟踪】，然后通过 <code>git remote add name &lt;remote-repository-url&gt;</code> 将本地仓库与远端git仓库进行<strong>绑定</strong></p>"}');export{t as data};
