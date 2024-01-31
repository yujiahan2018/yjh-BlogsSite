import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Home",
    icon: "home",
    link:"/"
  },
  {
    text: "博文索引",
    icon: "list",
    children: [
      {
        text: "代码笔记",
        prefix:"/posts/",
        children: [
          { text: "后端笔记", icon: "code", link: "houduan/" },
          
        ],
      },
      {
        text: "快速直达",
        children: [
          { text: "全部文章", link: "/posts/" },
          { text: "星标文章", link: "/star/" },
          { text: "类别", link: "/category/" },
          { text: "标签", link: "/tag/" },
          { text: "时间轴", link: "/timeline/" },
        ],
      },
    ],
  },
  
  {
    text: "致谢信息",
    link:"/thank-msg/"
  },
  // {
  //   text: "",
  //   icon: "gitee",
  //   link:""
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
