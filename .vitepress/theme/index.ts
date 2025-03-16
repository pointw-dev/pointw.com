// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { Tab, Tabs } from 'vue3-tabs-component'
import { NotFound, Copyright, CenteredImage, CommentsSection } from "@pointw/vitepress-component-bundle";
import FutureLanguages from "../components/FutureLanguages.vue";
import PortfolioRepos from "../components/PortfolioRepos.vue";
import HireMe from "../components/HireMe.vue";
import HireMeForm from "../components/HireMeForm.vue";

import './tabs.css'
import './style.css'

export default {
  extends: DefaultTheme,
  
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-footer-before': () => h(HireMe),
      'not-found': () => h(NotFound),
      'doc-after': () => h(Copyright, {message: '1999-2025 Michael Ottoson (pointw.com)'})
    })
  },
  
  enhanceApp({ app, router, siteData }) {
    app.component('Tab', Tab)
    app.component('Tabs', Tabs)
    app.component('CommentsSection', CommentsSection)
    app.component('CenteredImage', CenteredImage)
    app.component('FutureLanguages', FutureLanguages)
    app.component('HireMeForm', HireMeForm)
    app.component('PortfolioRepos', PortfolioRepos)
  }
} satisfies Theme
