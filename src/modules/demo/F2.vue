<template>
  <div class="F2 app">
    <my-header :title="$route.meta.title" @leftClick="back"></my-header>
    <div class="cont">
      <div class="item">
        <canvas ref="canvas" id="chart1" height="200"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import F2 from "@antv/f2";
export default {
  mounted() {
    this.canvas = this.$refs.canvas;
    this.canvas.width = this.canvas.parentNode.offsetWidth;
    this.initChart1();
  },
  methods: {
    initChart1() {
      const data = [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 }
      ];
      const chart1 = new F2.Chart({
        id: "chart1",
        pixelRatio: window.devicePixelRatio // 指定分辨率
      });
      chart1.source(data);
      chart1
        .interval()
        .position("genre*sold")
        .color("genre");
      chart1.render();
    },
    back() {
      this.$router.push("/demolist");
    }
  }
};
</script>

<style lang="scss" scoped>
.F2 {
  display: flex;
  flex-direction: column;
  .cont {
    padding: 10px;
    flex: 1;
    .item{
      background: #fff;
    }
  }
}
</style>