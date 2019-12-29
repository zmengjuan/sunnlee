<template>
  <div class="app upload">
    <my-header
    :title="$route.meta.title"
    @leftClick="back"
    ></my-header>
    <my-sub/>
   <div class="cont">
      <van-uploader
      :after-read="afterRead"
      v-model="fileList"
      />
   </div>
   <div class="btn">
    <van-button type="primary" size="large" @click="upload">立即上传</van-button>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    afterRead (file) {
    },
    upload (file) {
      let formData = new FormData
      formData.append('file',file, file.name)
      let config = {
        headers: {'content-Type': 'multiartform-data'}
      }

      axios.post('http://127.0.0.1:7001/upload/img',formData, config)
    },
    back () {
      this.$router.push('/demolist')
    }
  }
}
</script>

<style lang="scss" scoped>
  .upload{
    display: flex;
    flex-direction: column;
    .cont{
      flex: 1;
      padding: 0 10px;
    }
  }
</style>