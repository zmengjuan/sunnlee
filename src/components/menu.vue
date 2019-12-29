<template>
  <div class="menu">
    <div class="cont" ref="cont"></div>
    <div class="btn">
      <button >
        <!-- <van-icon name="cross" size="32"/> -->
        <i class="iconfont icon-Screenshot" v-if="!show" @click="screenshot"></i>
        <i class="iconfont icon-close" v-else @click="close"></i>
      </button>
    </div>
  </div>
</template>

<script>
import html2canvas from '@/utils/html2canvas'
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    screenshot () {
      html2canvas(this.$parent.$el.children[0])
      this.show = true
    },
    close () {
      this.show = false
      console.log(this.$parent.$el.children[0].querySelector('.wrap').remove())
    }
  }
}
</script>
<style lang="scss">
  .html2canvasImg{
    position: fixed;
    top:0;
    animation: scale .5s forwards;
  }
  @keyframes scale {
    from{
      transform: scale3d(1, 1, 1)
    }
    to {
      transform: scale3d(.9, .9, 1)
    }
  }
</style>
<style lang="scss" scoped>
  .menu{
    .btn{
      position: fixed;
      width:50px;
      height: 50px;
      border-radius: 50%;
      bottom: 50px;
      right: 20px;
      background: rgb(59, 134, 221);
      box-shadow:0 0 12px rgba(100, 100, 100, .7);
      button{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #eee;
        .iconfont{
          font-size: 26px;
        }
      }
    }
  }
</style>