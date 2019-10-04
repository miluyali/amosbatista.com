import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _a748d56e = () => interopDefault(import('../pages/censurador/index.vue' /* webpackChunkName: "pages/censurador/index" */))
const _4a972e02 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _12a44046 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _1ade5ecd = () => interopDefault(import('../pages/censurador/buscador.js' /* webpackChunkName: "pages/censurador/buscador" */))
const _f3e8a93a = () => interopDefault(import('../pages/censurador/mockBuscador.js' /* webpackChunkName: "pages/censurador/mockBuscador" */))
const _22fe80e9 = () => interopDefault(import('../pages/portfolio/amosBatista.vue' /* webpackChunkName: "pages/portfolio/amosBatista" */))
const _67b4ff67 = () => interopDefault(import('../pages/portfolio/cathoApp.vue' /* webpackChunkName: "pages/portfolio/cathoApp" */))
const _f8c7fb74 = () => interopDefault(import('../pages/portfolio/ehtldashboard.vue' /* webpackChunkName: "pages/portfolio/ehtldashboard" */))
const _1f8376b8 = () => interopDefault(import('../pages/portfolio/ehtlexecutivo.vue' /* webpackChunkName: "pages/portfolio/ehtlexecutivo" */))
const _3fff74a0 = () => interopDefault(import('../pages/portfolio/kofaxCapture.vue' /* webpackChunkName: "pages/portfolio/kofaxCapture" */))
const _41fea6e5 = () => interopDefault(import('../pages/portfolio/masterrow.vue' /* webpackChunkName: "pages/portfolio/masterrow" */))
const _cad1adf6 = () => interopDefault(import('../pages/artigo/_slug.vue' /* webpackChunkName: "pages/artigo/_slug" */))
const _360d3234 = () => interopDefault(import('../pages/caderno1/_slug.vue' /* webpackChunkName: "pages/caderno1/_slug" */))
const _4515ec06 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _a748d56e,
      name: "censurador"
    }, {
      path: "/portfolio",
      component: _4a972e02,
      name: "portfolio"
    }, {
      path: "/services",
      component: _12a44046,
      name: "services"
    }, {
      path: "/censurador/buscador",
      component: _1ade5ecd,
      name: "censurador-buscador"
    }, {
      path: "/censurador/mockBuscador",
      component: _f3e8a93a,
      name: "censurador-mockBuscador"
    }, {
      path: "/portfolio/amosBatista",
      component: _22fe80e9,
      name: "portfolio-amosBatista"
    }, {
      path: "/portfolio/cathoApp",
      component: _67b4ff67,
      name: "portfolio-cathoApp"
    }, {
      path: "/portfolio/ehtldashboard",
      component: _f8c7fb74,
      name: "portfolio-ehtldashboard"
    }, {
      path: "/portfolio/ehtlexecutivo",
      component: _1f8376b8,
      name: "portfolio-ehtlexecutivo"
    }, {
      path: "/portfolio/kofaxCapture",
      component: _3fff74a0,
      name: "portfolio-kofaxCapture"
    }, {
      path: "/portfolio/masterrow",
      component: _41fea6e5,
      name: "portfolio-masterrow"
    }, {
      path: "/artigo/:slug?",
      component: _cad1adf6,
      name: "artigo-slug"
    }, {
      path: "/caderno1/:slug?",
      component: _360d3234,
      name: "caderno1-slug"
    }, {
      path: "/",
      component: _4515ec06,
      name: "index"
    }],

    fallback: false
  })
}
