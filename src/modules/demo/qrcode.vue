<template>
  <div class="app">
    <my-header :title="$route.meta.title"></my-header>
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
const QRCode = require('easyqrcodejs');
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    generate () {
     if(this.$refs.qrcode.children.length){
       Array.from(this.$refs.qrcode.children).forEach(item =>{
         item.remove()
       })
     }
      this.qrcode(this.$refs.qrcode,this.value)
    },
    qrcode (el,value,width=375,height=375) {
      let qrcode = new QRCode(el,{
        text: this.value,
        width: 375,
        height: 375,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H
        dotScale: 1,// Must be greater than 0, less than or equal to 1. default is 1
        quietZone: 0,
        quietZoneColor: 'transparent',
        // logo:"../demo/logo.png", // Relative address, relative to `easy.qrcode.min.js`
        // logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png", 
        // logoWidth:80, // widht. default is automatic width
        // logoHeight:80,// height. default is automatic height
        // logoBackgroundColor:'#fffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
        // logoBackgroundTransparent:false, // Whether use transparent image, default is false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .app{
    height: 100%;
    .qrcode{
      height: 375px;
      background: #fff;
    }
  }
</style>