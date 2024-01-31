import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Home",
    icon: "home",
    link:"/"
  },
  // "/demo/",
  {
    text: "文章列表",
    icon: "list",
    link:"/posts/"
  },
  {
    text: "文章分类",
    icon: "tag",
    link:"/category/"
  },
  // {
  //   text: "时间轴",
  //   icon: "https://blog-tuchuang1.oss-cn-beijing.aliyuncs.com/icon/time.svg",
  //   link:"/timeline/"
  // },
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
