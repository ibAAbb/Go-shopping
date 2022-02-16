<template>
	<view class="">
		<view class="head">
			<u-avatar :src="vuex_avatar_url" size="100" class="head"></u-avatar>
			<u-text :text="vuex_name" size="20"></u-text>
		</view>
		<view class="" style="width: 100%;height: 40rpx;"></view>
		<view class="xuanzhe">
			<u-grid :border="false" col="4">
				<u-grid-item v-for="(baseListItem,baseListIndex) in list" :key="baseListIndex" @click="open">
					<u--image :src='baseListItem.img' width="36px" height="36px"></u--image>
					<text class="grid-text">{{baseListItem.thumb}}</text>
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast" />
		</view>
		<view class="" style="width: 100%;height: 20px;"></view>
		<view class="cjzx">
			<u-text text="创作中心" size="40rpx"></u-text>
			<button type="" class="kaifa">开发</button>
		</view>
		<view class="" style="width: 100%;height: 40rpx;"></view>
		<view class="">
			<u-grid :border="false" col="4">
				<u-grid-item v-for="(baseListItem,baseListIndex) in listkaifa" :key="baseListIndex" @click="open1">
					<u--image :src='baseListItem.img' width="75rpx" height="75rpx"></u--image>
					<text class="grid-text">{{baseListItem.thumb}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="" style="width: 100%;height: 40rpx;"></view>
		<view class="">
			<u-action-sheet :actions="listdo" :title="title" :show="show" @close="actionclose"
				:closeOnClickAction="false"></u-action-sheet>
			<u-button @click="show = true">打开ActionSheet</u-button>
		</view>
	</view>
</template>

<script>
	import {
		postMenu,
		getMenu,
		getuser
	} from '@/config/api.js';
	export default {
		data() {
			return {
				src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630205741_iFwa3.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644387027&t=e98ff54f2105ea1fec8cdb85aa23dea0',
				list: [{
					img: "../../../static/img/我的订单.png",
					thumb: "我的订单"
				}, {
					img: "../../../static/img/我的-我的收藏.png",
					thumb: "我的收藏"
				}, {
					img: "../../../static/img/音乐.png",
					thumb: "音乐"
				}, {
					img: "../../../static/img/图片.png",
					thumb: "更换头像"
				}],
				listdo: [{
						name: '选项一',
						subname: "选项一描述",
						color: '#ffaa7f',
						fontSize: '20'
					},
					{
						name: '选项二禁用',
						disabled: true
					},
					{
						name: '开启load加载', //开启后文字不显示
						loading: true
					}
				],
				title: '标题',
				show: false,
				listkaifa: [{
					img: "../../../static/img/img1/表单.png",
					thumb: "表单"
				}, {
					img: "../../../static/img/img1/档案.png",
					thumb: "档案"
				}, {
					img: "../../../static/img/img1/翻译.png",
					thumb: "翻译"
				}, {
					img: "../../../static/img/img1/盒子.png",
					thumb: "盒子"
				}, {
					img: "../../../static/img/img1/卡.png",
					thumb: "卡"
				}, {
					img: "../../../static/img/img1/文档.png",
					thumb: "文档"
				}, {
					img: "../../../static/img/img1/信息.png",
					thumb: "信息"
				}, {
					img: "../../../static/img/img1/眼睛.png",
					thumb: "眼睛"
				}, ],
			}

		},
		async created() {
			// let ab = {
			// 	id:12
			// }
			// let a = await uni.$u.patch('/api/orders/1/confirm').catch(err=>{
			// 	console.log('err',err)
			// })
			// console.log('a',a)
			let {
				avatar_url,
				name
			} = await getuser().catch(err => {
				console.log('err', err)
			})
			this.$u.vuex("vuex_avatar_url", avatar_url)
			this.$u.vuex("vuex_name", name)
		},
		methods: {
			open1(index) {
				console.log(index)
				if (index === 1) {
					uni.navigateTo({
						url: "../../login/login"
					})
				}
				uni.showToast({
					title: "暂未开发",
					icon: "error"
				})
			},
			open(index) {
				if (index === 0) {
					uni.navigateTo({
						url: '../../myOrder/myOrder'
					})
				}
				if (index === 1) {
					uni.navigateTo({
						url: '../../myCollection/myCollection'
					})
				}
				if (index === 3) {
					wx.navigateTo({
						url: '../../updataAvatar/updataAvatar'
					})
				}
				uni.showToast({
					title: "暂未开发",
					icon: "error"
				})
			},
			actionclose() {
				this.show = false
			},
			// login(){
			// 	wx.navigateTo({
			// 		url:'../../updataAvatar/updataAvatar'
			// 	})
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.xuanzhe {
		// background-color: #F56C6C;
		border: 1rpx solid #F7B2B2;
		border-radius: 12rpx;
	}

	.cjzx {
		display: flex;

		/deep/ .u-text__value {
			color: #F7B2B2 !important;
		}

		.kaifa {
			background-color: #F7B2B2;
			border-radius: 30rpx;
			color: #FFFFFF;
			font-size: 30rpx;
			padding-left: 28px;
			padding-right: 28px
		}

	}
</style>
