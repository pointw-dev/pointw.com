import { defineConfig, withBase } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
// const pkg = require('../../version_stamp.json')


const hostname = 'https://pointw.com'
const basePath = ''
const seoLogo = 'https://pointw.com/img/pointw-logo.png'

const calculatedBasePath = (basePath? `/${basePath}/` : '/')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'pointw.com',
  description: 'from requirements to delight',

  themeConfig: {
    siteTitle: 'pointw.com',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pointw-dev' }
    ],
    logo: '/img/hero.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quickstart', link: '/guide/introduction/quickstart' },
      // { text: pkg.version, link: null }
    ],

    outline: 'deep',
    sidebar: getSidebar(),
    search: {
        provider: 'local',
        options: {
            detailedView: true
        }
    }
  },

  base: calculatedBasePath,
  head: [
    ['link', { rel: 'icon', href: `${calculatedBasePath}favicon.ico` }],

    // test with https://www.opengraph.xyz/url/
    ['meta', {property: 'og:image', content: seoLogo}],
    ['meta', {property: 'og:type', content: 'website'}],

    ['meta', {name: 'twitter:image', value: seoLogo}],
    ['meta', {name: 'twitter:card', value: 'summary'}]
  ],
  srcDir: 'src',
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(new URL('./components/VPFeature.vue', import.meta.url))
        }
      ]
    }
  },
  sitemap: {
    hostname: hostname + calculatedBasePath
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
          { text: 'What is pointw?', link: '/guide/introduction/what-is' },
          { text: 'Getting started', link: '/guide/introduction/quickstart' }
        ]
      },
      {
        text: 'Articles',
        items: [
          { text: 'UX vs UI', link: '/articles/ux-vs-ui' },
          { text: 'Gathering requirements is like pulling teeth', link: '/articles/gathering-requirements-is-like-pulling-teeth' },
        ]
      },
      {
        text: "Code examples",
        items: [
          { text: 'Sending an email', link: '/articles/code-examples/sending-an-email' },
          { text: 'Reading and writing text files', link: '/articles/code-examples/reading-and-writing-text-files' },
        ]
      }
    ]
}