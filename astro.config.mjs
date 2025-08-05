// astro.config.mjs
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { fileURLToPath } from "url";
import rehypeCallouts from "rehype-callouts";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dev.batsave.tv",
  content: {
    dir: "./content",
  },
  markdown: {
    rehypePlugins: [rehypeCallouts],
  },
  integrations: [
    react(),
    sitemap(),
    starlight({
      title: "DEV Récap",
      description: "Récapitulatif du développement web, HTML, CSS, JavaScript et bonnes pratiques.",
      favicon: "/favicon.svg",
      logo: {
        src: "./public/assets/svg/logo.svg",
      },
      markdown: {
        rehypePlugins: [rehypeCallouts],
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Batsave/DEV-Recap",
        },
      ],
      head: [
        { tag: "meta", attrs: { name: "robots", content: "index, follow" } },
        { tag: "meta", attrs: { name: "author", content: "Batsave" } },
        { tag: "meta", attrs: { name: "keywords", content: "HTML, CSS, JavaScript, développement web, documentation, référence" } },
        { tag: "meta", attrs: { property: "og:type", content: "article" } },
        { tag: "meta", attrs: { property: "og:title", content: "DEV Récap – HTML, CSS, JavaScript" } },
        { tag: "meta", attrs: { property: "og:description", content: "Feuille récapitulative de développement web : HTML, CSS, JavaScript." } },
        { tag: "meta", attrs: { property: "og:image", content: "/assets/png/share-cover.png" } },
        { tag: "meta", attrs: { property: "og:url", content: "https://dev.batsave.tv" } },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
        { tag: "meta", attrs: { name: "google-site-verification", content: "ANXl8OG3ubA9eai8sI34GhInc6-KmJ-P8SirJEWHE5k" } },
        {
      tag: "script",
      attrs: {
        defer: true,
        src: "/_vercel/insights/script.js",
      },
    },
      ],
      defaultLocale: "fr",
      locales: {
        fr: { label: "Français", lang: "fr" },
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        { label: "Accueil", link: "/" },
        {
          label: "HTML",
          collapsed: true,
          autogenerate: {
            directory: "/html",
          },
        },
        {
          label: "CSS",
          collapsed: true,
          autogenerate: {
            directory: "/css",
          },
        },
        {
          label: "JavaScript",
          collapsed: true,
          autogenerate: {
            directory: "/js",
          },
        },
        {
          label: "Terminal",
          collapsed: true,
          autogenerate: {
            directory: "/terminal",
          },
        },
        {
          label: "Git",
          collapsed: true,
          autogenerate: {
            directory: "/git",
          },
        },
        {
          label: "Conventions",
          collapsed: true,
          autogenerate: {
            directory: "/conventions",
          },
        },
         {
          label: "Markdown",
          collapsed: true,
          autogenerate: {
            directory: "/md",
          },
        },
        { label: "Ressources utiles", link: "/ressources" },
      ],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
