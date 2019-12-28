import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import aside from '@/components/aside'

Vue.use(Router)

export default[
  //view的
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   meta: {

    //  },
    //  component: () => import('@/components/HelloWorld')
    // },
    {
      path: '/',
      name: 'aside',
      component: aside
    },
  ]

