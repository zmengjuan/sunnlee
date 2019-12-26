import Vue from 'vue'
import Router from 'vue-router'
// import aside from '@/components/aside'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/demolist'
    },
    {
      path: '/demolist',
      name: 'demolist',
      component: () => import('@/views/demolist.vue')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('@/views/swiper.vue')
    },
    // {
    //   path: '/',
    //   name: 'aside',
    //   component: aside
    // }
  ]
})
