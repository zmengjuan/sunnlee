<template>
  <div class="swiper"
    ref="swiper"
    @touchstart.prevent.stop = "touchstart"
    @touchmove.prevent.stop = "touchmove"
    @touchend.prevent.stop = "touchend"
    @touchcancel.prevent.stop = "touchcancel"
  >
    <slot></slot>
    <div>44444</div>
  </div>
</template>
<script>
export default {
  name: 'swiper',
  props: {
    directionFlag: {
      type: String,
      default: 'Y'
    }
  },
  components: {
  },
  data(){
    return {
      isDoen: false,
      start: null,
      scrollView: null,
      direction: 'top',
      offsetWH: 'offsetHeight',
      offsetTL: 'offsetTop'
    }
  },
  mounted(){
    this.scrollView = this.$refs.swiper.children[0]
  },
  methods: {
    touchmove(e){
      if(!this.isDown) return
      if(!this.directionFlag === 'Y'){
        this.direction = 'top'
        this.offsetWH = 'offsetHeight'
        this.offsetTL = 'offsetLeft'
      }
      let end = e.touches[0][`client${this.directionFlag}`]
      this.distance = end - this.start
      let distanceNum = this.scrollView[this.offsetTL] + this.distance
      let distanceMax = this.scrollView[this.offsetWH] - this.scrollView.children[0][this.offsetWH]
      if(distanceNum < -distanceMax) {
        this.scrollView.style[this.direction] = -distanceMax + 'px'
      }else if (distanceNum > 0){
        this.scrollView.style[this.direction] = 0
      }else {
        this.scrollView.style[this.direction] = this.scrollView[this.offsetTL] + this.distance + 'px'
      }
      this.start = end
    },
    touchstart (e){
      this.scrollView.classList.remove('animate')
      this.isDown = true
      this.start = e.touches[0][`client${this.directionFlag}`]
      this.start = e.touches[0][`client${this.directionFlag}`]
    },
     touchend (e){
      this.isDown = false
      this.scrollView.classList.add('animate')
      this.left = Math.abs[this.scrollView[this.offsetTL]]
      this.index = Math[this.distance> 0 ? 'floor' : 'ceil'](left/this.scrollView.children[0][this.offsetWH]);
      this.scrollView.style[this.direction] = -index*this.scrollView.children[0][this.offsetWH] + 'px'
    },
  },
}
</script>
<style lang="scss">
.home {
  width: 100%;
  height:100%;
  position:fixed;
  left:0;
  overflow: hidden;
}
.swiper {
  width: 100%;
  height:100%;
}
</style>
