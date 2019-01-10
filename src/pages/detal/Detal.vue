<template>
    <div> 
        <detal-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
        >
        </detal-banner>
        <detal-header></detal-header>
        <detal-list :list="list"></detal-list>
        <div class="content"></div>
    </div>
</template>

<script>
import DetalBanner from './components/Banner'
import DetalHeader from './components/Header'
import DetalList from './components/List'
import axios from 'axios'
export default {
    name: 'Detal',
    components: {
        DetalBanner,
        DetalHeader,
        DetalList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    methods: {
        getDetalInfo () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted() {
        this.getDetalInfo()
    },
}
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>
