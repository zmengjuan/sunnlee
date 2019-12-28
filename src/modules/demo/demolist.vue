<template>
  <div class="app demolist">
    <ul class="list">
      <li v-for="(item,index) in componentList" :key="index" @click="gopage(item)">{{item.meta.title}}</li>
    </ul>
  </div>
</template>

<script>
import componentList from "./demoRouter";
export default {
  data() {
    return {
      componentList
    };
  },
  methods: {
    gopage(item) {
      this.$router.push(item.path);
    }
  }
};
</script>

<style lang="scss" scoped>
.demolist {
  .list {
    li {
      height: 50px;
      background: #fff;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>