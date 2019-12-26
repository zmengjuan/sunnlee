<template>
    <div class="app demolist">
        <ul class="list">
            <li @click="gopage">滑块</li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        gopage () {
            this.$router.push('./swiper')
        }
    }
}
</script>

<style lang="scss" scoped>
    .demolist{
        .list{
            li{
                height: 50px;
                background: #fff;
                font-size: 20px;
                line-height: 50px;
                text-align: center;
            }
        }
    }
</style>