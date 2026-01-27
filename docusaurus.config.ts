// trigger vercel preview rebuild

import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "EVRO Finance Docs",
  tagline:
    "An open-source protocol that maintains synthetic value units through fully decentralized smart-contract mechanics.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://app.evro.finance",
  baseUrl: "/",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/", // docs live at root
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/evro-finance/docs",
        },
        blog: false,
        pages: false, // disable Docusaurus pages (kills homepage)
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "EVRO Finance Docs",
      logo: {
        alt: "EVRO Finance Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/evro-finance/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/user-docs/general", // ✅ FIXED (removed /docs)
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/evro-finance/docs",
            },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
