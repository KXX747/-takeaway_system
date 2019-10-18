<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(start,index) in starClasses" :class="start" :key="index"></span>

  </div>
</template>

<script>
  //类名 常量
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'

    export default {
       props:{
           //先确定类型 得分和大小
           score:Number,
           size:Number
       },
        computed:{

           // 计算星星显示半星还是全星还是无星
           //  例如： 3.2: 3全星 + 0个半星 +2
           //        3.5: 3 + 1 +1  半星是小数部分大于等于0。5
            starClasses(){
                const {score} = this
                const starts = []
                // 向starts中添加n个'CLASS_ON'
                const scoreIntrger = Math.floor(score)
                for(let i =0;i<scoreIntrger;i++){
                    starts.push(CLASS_ON)
                }
                // 向starts中添加0/1个'CLASS_HALF'
                if (score*10-scoreIntrger*10 >= 5){
                    starts.push(CLASS_HALF)
                }
                // 向starts中添加n个'CLASS_HALF'
                while (starts.length<5){
                    starts.push(CLASS_OFF)
                }
                return starts


            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet"scoped>
  @import "../../common/stylus/minxins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
