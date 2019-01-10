<template>
	<div class="icons">
		 <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			 </swiper-slide>	
        </swiper>
	</div>
</template>

<script>
export default {
	name: "HomeIcons",
	props: {
		list: {
			type: Array
		}
	},
	data() {
			return {
				swiperOption: {
					// loop: true,
					autoplay: false
				}
			}
	},
	computed: {
		pages () {
			const pages = []
			this. list.forEach((item, index) => {
					const page = Math.floor(index / 8)
					if (!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
			})
			return pages;
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl'
.icons >>> .swiper-container
	height 0
	padding-bottom 50%
.icons
	margin-top .1rem
	.icon 
		width 25%
		height 0
		float left
		padding-bottom 25%
		overflow hidden
		position relative
		.icon-img
			position absolute 
			top 0
			left 0
			right 0
			bottom .44rem
			// 上左右方向给0,让其在这三个方向居中
			// background blue
			.icon-img-content
				display block
				margin 0 auto
				height 100%
		.icon-desc
			position absolute
			left 0
			right 0
			bottom 0
			height .44rem
			line-height .44rem
			text-align center
			color $darkTextColor
			ellipsis()
			//同样地,隐藏多余文字并且变...形式这一样式后面可能还会用到,因此封装成一个函数
			// background red
</style>