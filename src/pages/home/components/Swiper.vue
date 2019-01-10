<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- 默认上面的轮播图片可能首先会显示第四张,这是由于一开始传过来的是一个数组还没有被渲染,-->
            <!--因此这里通过一个计算属性得出list的长度,即当长度等于四,整个图片数组全部传过来再进行渲染 -->
            <!-- 注意不要在行间进行逻辑的计算,因此这里采用了计算属性 -->
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img :src="item.imgUrl"/>
            </swiper-slide>
            <!-- 底部小圆点 -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
      list: {
          type: Array
      }
  },
  data () {
    return {
      swiperOption: {   //通过数据控制整个轮播
          pagination: ".swiper-pagination",  //
          loop: true, //循环
          autoplay: false //控制是否自动滚动
      },
    };
  },
  computed: {
      showSwiper () {
          return this.list.length
      }
  }
};
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
        //给轮播图下方圆点的颜色
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 31.25%
        background #eee
        //当用户网络不是很通畅的时候,且下方的组件若是先被显示出来,则用户会有明显卡顿感
        //原因: 
        //这部分由图片撑起,图片可能很久才加载出来,这时候下方组件位置可能上移,导致卡顿感
        //因此以上解决方案: 
        //当图片没显示时,通过padding-bottom占位,图片出来后,通过overflow hidden将多余padding隐藏
        //当图片没显示时,先让其显示一个背景色#eee,增强用户体验
        img
            width: 100%;
</style>
