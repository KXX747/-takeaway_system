<template>
    <footer class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on: '/home'===$route.path}" @click="goTo('./home')">
<!--      :class="{on: '/home'===$route.path}  判断点击的是哪一个标签，就会显示颜色    @click  监听-->
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('./search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('./order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('./profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
    export default {
        //方法
        methods:{
            goTo(path){
                //跳转路由
                this.$router.replace(path)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/minxins.styl'
  //尾部上面的线
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
