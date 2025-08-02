// astro.config.mjs
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { fileURLToPath } from "url";
import rehypeCallouts from "rehype-callouts";
import react from "@astrojs/react";

export default defineConfig({
  content: {
    dir: "./content",
  },
  markdown: {
    rehypePlugins: [rehypeCallouts],
  },
  integrations: [
    react(),
    starlight({
      title: "DEV Récap",
      description: "Récapitulatif de l'essentiel UI/UX",
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
        {
          tag: "meta",
          attrs: { name: "robots", content: "index, follow" },
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
          label: "Marketing",
          items: [
            { label: "Introduction", link: "/marketing/" },
            { label: "Landing Pages", link: "/marketing/landing-page" },
            { label: "SEO", link: "/marketing/seo" },
            {
              label: "Stratégie Social Media",
              link: "/marketing/strategy-social-media",
            },
            { label: "RGPD", link: "/marketing/rgpd" },
          ],
        },
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
