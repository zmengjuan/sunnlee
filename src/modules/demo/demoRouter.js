const routers = [
  {
    path: '/demolist/swiper',
    name: 'swiper',
    component: () => import('./swiper.vue'),
    meta: {
      title: '滑块'
    }
  },
  {
    path: '/demolist/qrcode',
    name: 'qrcode',
    component: () => import('./qrcode.vue'),
    meta: {
      title: '生成二维码'
    }
  }
]

export default routers