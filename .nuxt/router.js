import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _a7f2937c = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _5768b870 = () => import('../pages/gallery/index.vue' /* webpackChunkName: "pages/gallery/index" */).then(m => m.default || m)
const _58b22b7e = () => import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */).then(m => m.default || m)
const _2e4911e4 = () => import('../pages/portfolio/masterrow.vue' /* webpackChunkName: "pages/portfolio/masterrow" */).then(m => m.default || m)
const _0eacc06f = () => import('../pages/blog/_post.vue' /* webpackChunkName: "pages/blog/_post" */).then(m => m.default || m)
const _36f1adf5 = () => import('../pages/gallery/_post.vue' /* webpackChunkName: "pages/gallery/_post" */).then(m => m.default || m)
const _095e847c = () => import('../pages/checklist_cartorio/index.vue' /* webpackChunkName: "pages/checklist_cartorio/index" */).then(m => m.default || m)
const _6412e557 = () => import('../pages/checklist_cartorio/checklist-process.js' /* webpackChunkName: "pages/checklist_cartorio/checklist-process" */).then(m => m.default || m)
const _d0509c28 = () => import('../pages/checklist_cartorio/checklist-retrieve.js' /* webpackChunkName: "pages/checklist_cartorio/checklist-retrieve" */).then(m => m.default || m)
const _47687aa3 = () => import('../pages/checklist_cartorio/process-flow/process.js' /* webpackChunkName: "pages/checklist_cartorio/process-flow/process" */).then(m => m.default || m)
const _05f31b4c = () => import('../pages/checklist_cartorio/process-flow/process-simple.js' /* webpackChunkName: "pages/checklist_cartorio/process-flow/process-simple" */).then(m => m.default || m)
const _2ccc233f = () => import('../pages/checklist_cartorio/process-flow/processed-list.js' /* webpackChunkName: "pages/checklist_cartorio/process-flow/processed-list" */).then(m => m.default || m)
const _e5641d76 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/blog",
			component: _a7f2937c,
			name: "blog"
		},
		{
			path: "/gallery",
			component: _5768b870,
			name: "gallery"
		},
		{
			path: "/portfolio",
			component: _58b22b7e,
			name: "portfolio"
		},
		{
			path: "/portfolio/masterrow",
			component: _2e4911e4,
			name: "portfolio-masterrow"
		},
		{
			path: "/blog/:post",
			component: _0eacc06f,
			name: "blog-post"
		},
		{
			path: "/gallery/:post",
			component: _36f1adf5,
			name: "gallery-post"
		},
		{
			path: "/checklist:cartorio",
			component: _095e847c,
			name: "checklistcartorio"
		},
		{
			path: "/checklist:cartorio/checklist-process",
			component: _6412e557,
			name: "checklistcartorio-checklist-process"
		},
		{
			path: "/checklist:cartorio/checklist-retrieve",
			component: _d0509c28,
			name: "checklistcartorio-checklist-retrieve"
		},
		{
			path: "/checklist:cartorio/process-flow/process",
			component: _47687aa3,
			name: "checklistcartorio-process-flow-process"
		},
		{
			path: "/checklist:cartorio/process-flow/process-simple",
			component: _05f31b4c,
			name: "checklistcartorio-process-flow-process-simple"
		},
		{
			path: "/checklist:cartorio/process-flow/processed-list",
			component: _2ccc233f,
			name: "checklistcartorio-process-flow-processed-list"
		},
		{
			path: "/",
			component: _e5641d76,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
