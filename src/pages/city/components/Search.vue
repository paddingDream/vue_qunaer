<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                    v-for="item of list" :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">没有匹配到数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props: {
        cities: {
            type: Object
        }
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }   
    },
    methods: {
            handleCityClick (city) {
            // this.$store.commit('changeCity', city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch : {
        keyword () {
            if ( this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setInterval(()=>{
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach(value => {
                        if (value.spell.indexOf(this.keyword) > -1 || 
                        value.name.indexOf(this.keyword) > -1 ) {
                            result.push(value)
                        } 
                    })
                }
                this.list = result
            },100)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    },
}    
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl';
    .search
        height .72rem
        padding 0.1rem
        background $bgColor
        .search-input
            width 100%
            height .62rem
            box-sizing border-box
            padding 0.1rem
            text-align center
            border-radius .06rem
            color #666
    .search-content
        overflow hidden
        background #eee
        z-index 1
        position absolute 
        top 1.78rem
        bottom 0
        right 0
        left 0
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background #fff
</style>
