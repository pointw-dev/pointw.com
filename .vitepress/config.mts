import { defineConfig, withBase } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

const hostname = 'https://www.pointw.com'
const basePath = ''
const seoLogo = 'https://www.pointw.com/img/pointw.com-card.png'
const tagline = 'from requirements to delight'
const title = 'pointw.com'

const calculatedBasePath = (basePath? `/${basePath}/` : '/')
const siteUrl = hostname + calculatedBasePath

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: title,
  description: tagline,

  themeConfig: {
    siteTitle: 'pointw.com',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/biscuit314' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/michael-ottoson-037496b1/' },
      { icon: 'discord', link: 'https://discord.gg/8evRe6Rm3S' }
    ],
    logo: '/img/hero.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quickstart', link: '/introduction/quickstart' },
      // { text: pkg.version, link: null }
    ],

    outline: 'deep',
    sidebar: getSidebar(),
    search: {
        provider: 'local',
        options: {
            detailedView: true
        }
    },
    footer: {
      copyright: 'Copyright © 1999-2025 Michael Ottoson (pointw.com)'
    }
  },

  base: calculatedBasePath,
  head: [
    ['link', { rel: 'icon', href: `${calculatedBasePath}favicon.ico` }],

    // test with https://www.opengraph.xyz/url/
    ['meta', {property: 'og:image', content: seoLogo}],
    ['meta', {property: "og:url", content: siteUrl}],
    ['meta', {property: "og:description", content: tagline}],
    ['meta', {property: 'og:type', content: 'website'}],

    ['meta', {name: "twitter:card", content: "summary_large_image"}],
    ['meta', {name: 'twitter:image', content: seoLogo}],
    ['meta', {property: "twitter:domain", content: "pointw.com"}],
    ['meta', {property: "twitter:url", content: siteUrl}],
    ['meta', {name: "twitter:title", content: title}],
    ['meta', {name: "twitter:description", content: tagline}]

  ],
  srcDir: 'src',
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(new URL('./overrides/VPFeature.vue', import.meta.url))
        }
      ]
    }
  },
  sitemap: {
    hostname: siteUrl
  },
  
  transformPageData(pageData) {
    const canonicalUrl = hostname + calculatedBasePath + `${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  }
})


function getSidebar() {
    return [
      {
        text: 'Introduction',
        items: [
          { text: 'What is pointw.com?', link: '/introduction/what-is' },
          { text: 'Getting started', link: '/introduction/quickstart' }
        ]
      },
      {
        text: 'Articles',
        link: '/articles/',
        items: [
          { text: 'UX vs UI', link: '/articles/ux-vs-ui' },
          { text: 'Gathering requirements is like pulling teeth', link: '/articles/gathering-requirements-is-like-pulling-teeth' },
        ]
      },
      {
        text: "Code examples",
        link: '/articles/code-examples/',
        items: [
          { text: 'Sending an email', link: '/articles/code-examples/sending-an-email' },
          { text: 'Reading and writing text files', link: '/articles/code-examples/reading-and-writing-text-files' },
        ]
      },
      {
        text: 'Portfolio',
        link: '/portfolio/',
        items: [
          { text: 'hypermea', link: '/portfolio/hypermea' },
          { text: 'halchemy', link: '/portfolio/halchemy' },
          { text: 'hypermedia-doc', link: '/portfolio/hypermedia-doc' },
          { text: 'hypermea-negotiable-auth', link: '/portfolio/hypermea-negotiable-auth' },
          { text: 'hypermea-gateway', link: '/portfolio/hypermea-gateway' },
          { text: 'authparser', link: '/portfolio/authparser' },
          { text: 'resource-model', link: '/portfolio/resource-model' },
          { text: 'aws-cli', link: '/portfolio/aws-cli' },
          { text: 'bawx-player', link: '/portfolio/bawx-player' },
          { text: 'pybrightsign', link: '/portfolio/pybrightsign' },
          { text: 'sencha-extjs', link: '/portfolio/sencha-extjs' },
          { text: 'version-stamper', link: '/portfolio/version-stamper' }
        ]
      },

    ]
}