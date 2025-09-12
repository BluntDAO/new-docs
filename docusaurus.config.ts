import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BluntDAO Docs',
  tagline: 'The mission to make sure blunts get smoked. Onboarding the next million, 1 blunt/sesh at a time.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.bluntdao.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BluntDAO', // Usually your GitHub org/user name.
  projectName: 'bluntdao-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BluntDAO/new-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BluntDAO/new-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // BluntDAO social card
    image: 'img/bluntdaobanner.jpeg',
    metadata: [
      {name: 'keywords', content: 'BluntDAO, Proof of Sesh, Web3, DAO, NFT, Cannabis, Blockchain, DeFi'},
      {name: 'description', content: 'BluntDAO Documentation - The mission to make sure blunts get smoked. Onboarding the next million, 1 blunt/sesh at a time.'},
      // Open Graph meta tags
      {property: 'og:title', content: 'BluntDAO Documentation'},
      {property: 'og:description', content: 'The mission to make sure blunts get smoked. Onboarding the next million, 1 blunt/sesh at a time.'},
      {property: 'og:image', content: 'https://docs.bluntdao.org/img/bluntdaobanner.jpeg'},
      {property: 'og:image:alt', content: 'BluntDAO Banner'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://docs.bluntdao.org'},
      {property: 'og:site_name', content: 'BluntDAO Documentation'},
      // Twitter meta tags
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@BluntDAO'},
      {name: 'twitter:creator', content: '@BluntDAO'},
      {name: 'twitter:title', content: 'BluntDAO Documentation'},
      {name: 'twitter:description', content: 'The mission to make sure blunts get smoked. Onboarding the next million, 1 blunt/sesh at a time.'},
      {name: 'twitter:image', content: 'https://docs.bluntdao.org/img/bluntdaobanner.jpeg'},
      {name: 'twitter:image:alt', content: 'BluntDAO Banner'},
    ],
    navbar: {
      logo: {
        alt: 'BluntDAO Logo',
        src: 'img/bluntdaologonew.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'About',
          activeBasePath: '/docs/welcome',
        },
        {
          to: '/docs/proof-of-sesh-explained',
          label: 'Proof of Sesh',
          position: 'left',
        },
        {
          to: '/docs/the-unlimited-sesh-fund',
          label: 'Sesh Fund',
          position: 'left',
        },
        {
          to: '/docs/how-to-contribute',
          label: 'Contribute',
          position: 'left',
        },
        {
          href: 'https://github.com/BluntDAO',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://x.com/BluntDAO',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'X (Twitter)',
        },
        {
          href: 'https://bento.me/blunt',
          position: 'right',
          className: 'header-links-link',
          'aria-label': 'All Links',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Welcome',
              to: '/docs/welcome',
            },
            {
              label: 'Proof of Sesh',
              to: '/docs/proof-of-sesh-explained',
            },
            {
              label: 'Unlimited Sesh Fund',
              to: '/docs/the-unlimited-sesh-fund',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.bluntdao.org',
            },
            {
              label: 'X',
              href: 'https://x.com/BluntDAO',
            },
            {
              label: 'All Links',
              href: 'https://bento.me/blunt',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/BluntDAO',
            },
            {
              label: 'Blunts.WTF',
              href: 'https://blunts.wtf',
            },
            {
              label: 'App',
              href: 'https://app.bluntdao.com',
            },
          ],
        },
      ],
      copyright: `Rolled with ❤️ by BluntDAO.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
