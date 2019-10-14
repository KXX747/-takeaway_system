<template>
  <div>
    <router-view></router-view>
<!--    $route.meta.showFooter  默认是关闭状态-->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
  export default {
    //映射成标签
      components:{
          FooterGuide
      }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
