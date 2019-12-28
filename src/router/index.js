import Vue from 'vue'
import Router from 'vue-router'
import demoRouters from '@/modules/demo/demoRouter'
Vue.use(Router)

const routers = [
  {
    path: '/demolist',
    name: 'demolist',
    component: () => import('@/modules/demo/demolist.vue'),
    meta: {
      title: 'demolist'
    },
  },
  ...demoRouters
]

const router = new Router({
  routes: routers
})

window.routerList = []

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => {
  document.title = to.meta.title
  const routerListLen = window.routerList.length
  if (routerListLen > 1 && to.fullPath === window.routerList[routerListLen - 2]) {
    window.router.isBack = true
  }

  if (routerListLen <= 1) {
    window.router.isBack = false
  }
  if (window.router.isBack) {
    window.routerList.pop()
  } else {
    window.routerList.push(to.fullPath)
  }
  if (routerListLen > 0 && from.fullPath !== '/') {
    sessionStorage.setItem('routerList', JSON.stringify(window.routerList))
  }
  let routerList = JSON.parse(sessionStorage.getItem('routerList'))
  if (from.fullPath === '/' && routerList) {
    window.routerList = routerList
  }
})

window.router = router

export default router
