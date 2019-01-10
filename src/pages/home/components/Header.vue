<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
            <!-- 通过一个class类和一个编码使用图片 -->
        </div>
        <router-link to="/city" tag="div" class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </router-link>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "HomeHeader",
  computed: {
      ...mapState(['city'])
  }
};
</script>

<style lang="stylus" scoped>
    // @import '../../../assets/style/variables.styl'
    
    // @import '~@/assets/style/variables.styl'
    
    //@表示的是src目录(在webpack.base.conf.js里面有设置)
    
    //由于前面多次用到'assets/style'这个路径,因此这里设置了一个'style'别名
    
    //注意:修改了build配置,会报错,需要重启一下项目
    
    //注意:在css文件中引用其他css需要在句首加一个'~'
    
    @import '~style/variables.styl'
    .header
        //1rem = html的字体 = 50px (在reset.css手动设置过)
        //因此1px = 0.02rem, 以下布局单位均采用rem
        display flex
        height $headerHeight
        line-height $headerHeight
        background $bgColor
        //整个项目的主题色,由于后面会经常用到,所以采用变量的形式
        //当项目需求需要更改,可以直接修改变量, 方便维护
        color #fff
        .header-left
            width .64rem
            float left
            .back-icon
                text-align center
                font-size .4rem
        .header-input
            flex 1
            margin-top .12rem
            margin-left .12rem
            padding-left .2rem
            height .64rem
            line-height .64rem
            background #fff
            border-radius .1rem 
            color #ccc
        .header-right
            min-width 1.04rem
            padding 0 .1rem
            float right
            text-align center
            color #fff
</style>
