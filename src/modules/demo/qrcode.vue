<template>
  <div class="app">
    <my-header 
    :title="$route.meta.title"
    @leftClick="back">
    </my-header>
    <my-sub/>
    <div class="qrcode" ref="qrcode"></div>
    <my-sub/>
    <div class="input">
      <van-field  type="textarea" autosize rows="1" v-model="value" placeholder="请输入要生成的内容" />
      <my-sub/>
      <van-button type="primary" size="large" @click="generate">生成二维码</van-button>
    </div> 
  </div>
</template>

<script>
import qrcode from'@/utils/qrcode'
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    generate () {
      qrcode(this.$refs.qrcode,this.value)
    },
    back () {
      this.$router.push('/demolist')
    }
  }
}
</script>

<style lang="scss" scoped>
  .app{
    height: 100%;
    .qrcode{
      width: 100%;
      height: 375px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
    }
  }
</style>