<template>
<div class="home">
    <Swiper :directionFlag ="directionFlag">
    <div class="scroll-view">
        <div :class="['page' , `page${index+1}`]" v-for="{item,index} in 4" :key="index"></div>
    </div>
    </Swiper>
</div>
</template>
<script>
import fetch from '../utils/fetch'
import Swiper from '@/components/HelloWorld.vue'
export default {
  name: 'swiper',
  components: {
      Swiper
  },
  data(){
      return {
          directionFlag: 'x'
      }
  },
  methods: {

  },
}
</script>
<style  lang="scss" scoped>
.home {
  width: 100%;
  height:100%;
  position:fixed;
  left:0;
  overflow: hidden;
}
.scroll-view {
  width: 400%;
  height:50%;
  position:absolute;
  left:0;
  display :flex;
  &.animate {
      transition :all .3s;
  }
  .page {
    width: 100%;
    height:50%;
    &1{
        background :rgb(167 , 5, 86)
    }
    &2{
        background :rgb(2 ,127,136)
    }
    &3{
        background :rgb(255 ,153,36)
    }
    &4{
        background :#f66
    }
  }
}
</style>