<template>
  <div>
    <router-view></router-view>
<!--    $route.meta.showFooter  默认是关闭状态-->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>

  import {mapActions} from 'vuex'   // 专门actions的映射函数
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
  // 接口函数
  // import {reqFoodTypes} from "./api";

  export default {
      // 测试是有有json数据
      // async mounted(){
      //     const result = await reqFoodTypes()
      //     console.log(result)
      // },
      mounted(){
          // this.$store.dispatch('getAddress')
          this.getAddress()  // 第二种方法
          this.getUserInfo()  //获取用户信息
      },
      methods:{
          ...mapActions(["getAddress",'getUserInfo'])   //详单于有一个方法可以使用
      },
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
