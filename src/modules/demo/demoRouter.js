const routers = [
  {
    path: '/demolist/swiper',
    name: 'swiper',
    component: () => import('./swiper.vue'),
    meta: {
      title: '滑块',
      menu: true
    }
  },
  {
    path: '/demolist/qrcode',
    name: 'qrcode',
    component: () => import('./qrcode.vue'),
    meta: {
      title: '生成二维码'
    }
  },
  {
    path: '/demolist/upload',
    name: 'upload',
    component: () => import('./upLoad.vue'),
    meta: {
      title: '上传图片'
    }
  }
]

export default routers