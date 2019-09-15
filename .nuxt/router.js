import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _5aefd0dc = () => interopDefault(import('../pages/censurador/index.vue' /* webpackChunkName: "pages/censurador/index" */))
const _0539f996 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _b50f3f34 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _67f372d6 = () => interopDefault(import('../pages/censurador/buscador.js' /* webpackChunkName: "pages/censurador/buscador" */))
const _4ae50440 = () => interopDefault(import('../pages/portfolio/amosBatista.vue' /* webpackChunkName: "pages/portfolio/amosBatista" */))
const _966bd920 = () => interopDefault(import('../pages/portfolio/cathoApp.vue' /* webpackChunkName: "pages/portfolio/cathoApp" */))
const _4bef0bdd = () => interopDefault(import('../pages/portfolio/ehtldashboard.vue' /* webpackChunkName: "pages/portfolio/ehtldashboard" */))
const _8edd638a = () => interopDefault(import('../pages/portfolio/ehtlexecutivo.vue' /* webpackChunkName: "pages/portfolio/ehtlexecutivo" */))
const _962ba58e = () => interopDefault(import('../pages/portfolio/kofaxCapture.vue' /* webpackChunkName: "pages/portfolio/kofaxCapture" */))
const _d0e7d808 = () => interopDefault(import('../pages/portfolio/masterrow.vue' /* webpackChunkName: "pages/portfolio/masterrow" */))
const _5c2b9064 = () => interopDefault(import('../pages/artigo/_slug.vue' /* webpackChunkName: "pages/artigo/_slug" */))
const _36509a86 = () => interopDefault(import('../pages/caderno1/_slug.vue' /* webpackChunkName: "pages/caderno1/_slug" */))
const _5783fd5d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/censurador",
      component: _5aefd0dc,
      name: "censurador"
    }, {
      path: "/portfolio",
      component: _0539f996,
      name: "portfolio"
    }, {
      path: "/services",
      component: _b50f3f34,
      name: "services"
    }, {
      path: "/censurador/buscador",
      component: _67f372d6,
      name: "censurador-buscador"
    }, {
      path: "/portfolio/amosBatista",
      component: _4ae50440,
      name: "portfolio-amosBatista"
    }, {
      path: "/portfolio/cathoApp",
      component: _966bd920,
      name: "portfolio-cathoApp"
    }, {
      path: "/portfolio/ehtldashboard",
      component: _4bef0bdd,
      name: "portfolio-ehtldashboard"
    }, {
      path: "/portfolio/ehtlexecutivo",
      component: _8edd638a,
      name: "portfolio-ehtlexecutivo"
    }, {
      path: "/portfolio/kofaxCapture",
      component: _962ba58e,
      name: "portfolio-kofaxCapture"
    }, {
      path: "/portfolio/masterrow",
      component: _d0e7d808,
      name: "portfolio-masterrow"
    }, {
      path: "/artigo/:slug?",
      component: _5c2b9064,
      name: "artigo-slug"
    }, {
      path: "/caderno1/:slug?",
      component: _36509a86,
      name: "caderno1-slug"
    }, {
      path: "/",
      component: _5783fd5d,
      name: "index"
    }],

    fallback: false
  })
}
