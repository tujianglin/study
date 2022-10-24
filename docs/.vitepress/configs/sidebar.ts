import { DefaultTheme } from "vitepress/theme";
export default {
  "/md/": [
    {
      text: "Go",
      items: [
        {
          text: "基础",
          link: "/md/golang/1",
        },
      ],
      collapsible: true,
    },
  ],
} as DefaultTheme.Sidebar;
