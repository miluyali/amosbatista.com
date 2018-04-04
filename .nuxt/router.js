import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3bb9a2f8 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _6b7ee708 = () => import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */).then(m => m.default || m)
const _7fa2c3e2 = () => import('../pages/portfolio/masterrow.vue' /* webpackChunkName: "pages/portfolio/masterrow" */).then(m => m.default || m)
const _44c938b1 = () => import('../pages/blog/_post.vue' /* webpackChunkName: "pages/blog/_post" */).then(m => m.default || m)
const _f018507a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _3bb9a2f8,
			name: "blog"
		},
		{
			path: "/portfolio",
			component: _6b7ee708,
			name: "portfolio"
		},
		{
			path: "/portfolio/masterrow",
			component: _7fa2c3e2,
			name: "portfolio-masterrow"
		},
		{
			path: "/blog/:post",
			component: _44c938b1,
			name: "blog-post"
		},
		{
			path: "/",
			component: _f018507a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
