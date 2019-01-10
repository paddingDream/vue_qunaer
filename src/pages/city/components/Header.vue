<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'city'
    }    
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl';
    .header
        height $headerHeight
        line-height $headerHeight
        overflow hidden
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        position relative 
        .header-back
            position absolute
            left 0
            top 0
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>
