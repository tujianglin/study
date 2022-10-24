import { defineConfig } from "vitepress";
import nav from "./configs/nav";
import sidebar from "./configs/sidebar";

export default defineConfig({
  base: "/",
  lang: "en-US",
  title: "学习笔记",
  description: "学无止境",
  lastUpdated: true,
  themeConfig: {
    nav,
    sidebar,
  },
});
