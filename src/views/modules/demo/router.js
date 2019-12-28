const routers = [
  {
    path: '/demolist',
    name: 'demolist',
    component: () => import('./demolist.vue'),
    meta: {
      title: 'demolist'
    }
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('./swiper.vue'),
    meta: {
      title: 'swiper'
    }
  }
]

export default routers