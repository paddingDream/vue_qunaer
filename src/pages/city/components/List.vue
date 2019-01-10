<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom" @click="handleCityClick(item.name)">{{key}}</div>
                    <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
                        <div class="item border-bottom" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations} from 'vuex'
    export default {
        name: 'CityList',
        props: {
            hot: {
                type: Array
            },
            cities: {
                type: Object
            },
            letter: {
                type: String
            }
        },
        methods: {
            handleCityClick (city) {
                // this.$store.commit('changeCity', city)
                this.changeCity(city)
                this.$router.push('/')
                //全局路由的方法之一push,即当执行该函数时,将路由页面转到''
            },
            ...mapMutations(['changeCity'])
            //将changeCity函数映射到mutations
        },
        computed: {
            ...mapState({
                currentCity: 'city'
            })
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.wrapper)
        },
        watch: {
            letter () {
                if(this.letter) {
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
            }
        }
    }    
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl';
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute 
        left 0
        right 0
        bottom 0
        top 1.78rem
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                width 33.33%
                float left 
                .button
                    text-align center
                    margin .1rem
                    padding .1rem
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem 
                padding-left .2rem
</style>
