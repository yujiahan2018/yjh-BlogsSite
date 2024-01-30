import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/yjh-BlogsSite/",

  lang: "zh-CN",
  title: "Welcome blog home",
  description: "vuepress-theme-hope 的博客演示",

  theme:theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
