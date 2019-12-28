<template>
  <div class="header">
    <div class="left" @click="$router.go(-1)">
      <slot name="left">
        <van-icon name="arrow-left" size="24" />
      </slot>
    </div>
    <div class="center">
      <slot name="center">{{title}}</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    title: {
      type: String,
      default: 'title'
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 50px;
  background: #fff;
  display: flex;
  .left,
  .right {
    width: 50px;
    @extend .flex-center;
  }
  .center {
    flex: 1;
    @extend .flex-center;
  }
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>