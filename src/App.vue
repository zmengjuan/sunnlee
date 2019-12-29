<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  <Menu v-if="$route.meta.menu"></Menu>
  </div>
</template>

<script>
import Menu from '@/components/menu'
export default {
  name: 'App',
  components: {
    Menu
  },
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route(to, from) {
      if (window.router.isBack) {
        this.transitionName = 'app-out'
      }  else {
        if (from.fullPath === '/') {
           this.transitionName = ''
           return
        }
        this.transitionName = 'app-in'
      }
    }
  }
}
</script>

<style lang="scss">
@import './main.scss';
.app-in-enter,.app-out-leave-to{
  transform: translate3d(100%, 0, 0)
}
.app-in-leave, .app-out-leave{
  transform: translate3d(0, 0, 0)
}
.app-out-enter,.app-in-leave-to{
  transform: translate3d(-100%, 0, 0)
}
  .app-in-enter-active, 
  .app-in-leave-active,
  .app-out-enter-active, 
  .app-out-leave-active {
    position: absolute;
    width: 100%;
    transition: all .5s
  }
</style>
