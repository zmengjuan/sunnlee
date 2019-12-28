const routers = [
  {
    path: '/home',
    component: () => import('./home.vue'),
    meta: {
      title: 'home',
    }
  },
  {
    path: '/test',
    component: () => import('./test.vue'),
    meta: {
      title: 'test',
    }
  }
]

export default routers