import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Modmail Wiki",
  description: "A feature-rich Modmail bot for Discord.",
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.jpg",
    nav: [{ text: "Guide", link: "/guide" }],
    socialLinks: [
      { icon: "github", link: "https://github.com/kyb3r/modmail" },
      { icon: "discord", link: "https://discord.gg/etJNHCQ" },
    ],
    editLink: {
      pattern: "https://github.com/realcyguy/modmail-wiki/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Installation", link: "/guide/installation" },
          { text: "FAQ", link: "/guide/faq" },
        ],
      },
    ],
  },
});
