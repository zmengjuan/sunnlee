<template>
  <div class="home">
    <my-header :title="$route.meta.title"></my-header>
    <div class="cont">
      <Swiper :directionFlag="directionFlag">
        <div class="scroll-view">
          <div :class="['page' , `page${item}`]" v-for="item in 4" :key="item"></div>
        </div>
      </Swiper>
    </div>
  </div>
</template>
<script>
import Swiper from "@/components/Swiper";
export default {
  name: "swiper",
  components: {
    Swiper
  },
  data() {
    return {
      directionFlag: "Y"
    };
  },
  methods: {}
};
</script>
<style  scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  overflow: hidden;
}
.cont{
    flex: 1;
}
.scroll-view {
  width: 100%;
  height: 400%;
  position: absolute;
  left: 0;
//   display: flex;
  .page {
    width: 100%;
    height: 25%;
    &1 {
      background: rgb(167, 5, 86);
    }
    &2 {
      background: rgb(2, 127, 136);
    }
    &3 {
      background: rgb(255, 153, 36);
    }
    &4 {
      background: #f66;
    }
  }
}
</style>