<template>
	<view class="banxin">
		<!-- 写的不够优雅 有点小BUG -->

		<u-sticky class="top">
			<view class="top_and_top">
				<u-tabs :list="list1" @click="click_FF" :current="tabsId" lineColor="#becee6"></u-tabs>
				<view class="top_and_top_top">
					<u--image src="../../../static/img/商城.png" width="25px" height="25px" class="top_and_top_top_img"
						@click="goIndex"></u--image>
				</view>

			</view>

		</u-sticky>

		<scroll-view scroll-y="true" style="height: 100vh;" scroll-with-animation="true" :scroll-into-view="toview"
			@scroll="scrolls">
			<u-notice-bar text="祝老板一夜暴富 夜夜笙歌 早生贵子 百年好合"></u-notice-bar>
			<view class="">
				<!-- 图片与定金 -->
				<u-skeleton :loading="loading" :animate="true" rows="5" id="index0">
					<view class="imgbox" style="width: 100%; height: 100%;">
						<u--image :src="goodsList.cover_url" height="300"></u--image>
					</view>

					<!-- <view style="width: 100%;height: 20px;"></view> -->
					<view class="money_plate">
						<view class="fff">
							<view class="money">
								<view class="money_DD">
									<view class="money_DDD">
										<u-text text="定金" color="#FFF"></u-text>
										<!-- <u-text text="￥" color="#FFF"></u-text> -->
										<u-text :text="`￥${goodsList.category_id}`" color="#FFF"></u-text>
									</view>

									<!-- <u-text :text="goodsList.price"></u-text> -->
									<view class="">
										<u-text :text="`全款 ￥${goodsList.price}`" color="#FFF"></u-text>
									</view>
								</view>
								<view class="money_middle"></view>
							</view>
						</view>
						<view class="pre_order ">
							<u-text class="pre_order_money" text="定金的预售" color="#FFF"></u-text>
						</view>
					</view>
				</u-skeleton>
				<!-- 商品标题 -->
				<view class="goodsList_title fff_model" style="border-radius: 0px 0px 12px 12px;padding: 12px 0px 12px 0px;">
					<u-text :text="goodsList.title" size="26"></u-text>
				</view>
				<!-- <view class="gong_ju_ren" id="index1"></view> -->
				<!-- 讨论区 -->
				<view class="fff_model talk" id="index1">
					<!-- 	<u-badge type="warning" max="99" value="999+" absolute="true" shape="horn" :offset="[6,282]"></u-badge> -->
					<view class="talk_top">
						<view class="">
							<u-text text="晒图/讨论"></u-text>
						</view>
						<view class="">
							<u-text text="21条" color="#999"></u-text>
						</view>
					</view>

					<view class="talk_bonton">
						<view class="talk_bonton_name">
							<u-avatar :src="src"></u-avatar>
							<u-text text="昵称" color="#999"></u-text>
						</view>
						<!-- <view class="demo-layout bg-purple">
						<u-text text="好评" color="#cf441a"></u-text>
					</view> -->
					</view>

					<view class="talk_bonton_text">
						<view class="">
							<u-text text="评论区"></u-text>
						</view>
						<view class="talk_bonton_text_reply">
							<u-text text="ID"></u-text>
							<u-text text="回复区"></u-text>
						</view>

					</view>
					<view class="talk_bonton_text_button" style="display: flex;margin-top: 10px;margin-bottom: 10px">
						<u-button text="查看全部评论" shape="circle" style="width: 50%;"></u-button>
					</view>
				</view>

				<!-- 商品详情 -->
				<view class="fff_model" style="overflow: hidden;" id="index2">
					<u-text text="商品详情" color="#111111" style="margin: 15px 0px 0px 15px;" size="18"></u-text>
					<u-parse :content="goodsList.details"></u-parse>
				</view>
			</view>
		</scroll-view>

		<u-tabbar :fixed="true" :placeholder="true" :safeAreaInsetBottom="true" class="botton_and_botton">
			<view class="tabbar_botton_avatab">
				<u--image src="../../../static/img/极酷社-高达.png" width="50px" height="50px"></u--image>
				<u--image src="../../../static/img/购物车-线性.png" width="40px" height="40px" style="margin-left: 10%;" @click="goCars">
				</u--image>
				<!-- <view class="">
					<u-tabbar-item icon="../../../static/img/客服.png"></u-tabbar-item>
				</view>
				<view class="">
					<u-tabbar-item icon="../../../static/img/购物车.png"></u-tabbar-item>
				</view> -->
			</view>

			<view class="tabbar_botton">
				<u-button shape="circle" color="rgb(236, 90, 156)" :plain="true" style="padding: 0em 2em 0em 2em;"
					text="加入购物车" @click="addCars">
				</u-button>
				<u-button shape="circle" style="padding: 0em 2em 0em 2em ;" color="rgb(236, 90, 156)" text="一键吃土" @click="chitu">
				</u-button>
			</view>

		</u-tabbar>
	</view>
	</view>
</template>

<script>
	import {
		getgoods_xq,addcars
	} from '../../../config/api.js'
	export default {
		data() {
			return {
				tabsId: 0,
				toview: "",
				src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201712%2F11%2F20171211030522_ekLJE.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645171837&t=9ffadf32ebbcf3a26d5af8f288a23407',
				loading: false,
				goodsList: {},
				list1: [{
					name: '商品',
				}, {
					name: '讨论',
				}, {
					name: '详情',
				}],
				goodsId: null
			}
		},
		methods: {
			goCars(){
				uni.switchTab({
					url:'./goods-5',
					success(){
						console.log('跳转成功')
						this.vuex_swichtab = true
						console.log('swich',this.vuex_swichtab)
					}
				})
			},
			chitu(){
				uni.showToast({
					title:"暂未开发"
				})
			},
			async addCars(){
				let paramsId = {
					goods_id : this.goodsList.id
				}
				let cars = await addcars(paramsId).catch(err=>{console.log('err',err)})
				uni.showToast({
					title:"添加成功"
				})
			},
			goIndex() {
				uni.switchTab({
					url: '../tabbar-1/tabbar-1'
				})
			},
			scrolls(e) {
				// console.log('233',e.target.scrollTop)
				if (e.target.scrollTop >= 35 && e.target.scrollTop < 200) {
					this.tabsId = 0;
				}
				if (e.target.scrollTop > 450 && e.target.scrollTop < 550) {
					this.tabsId = 1;
				}
				if (e.target.scrollTop >= 700 && e.target.scrollTop < 800) {
					this.tabsId = 2;
				}
			},
			async getgoods() {
				let {
					goods
				} = await getgoods_xq(this.goodsId)
				console.log('goodsid', goods)
				this.goodsList = goods
				console.log('this.goodsList', this.goodsList)
			},
			click_FF(index) {
				this.tabsId = index.index
				this.toview = `index${index.index}`
				// console.log('view',this.toview)
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			// console.log(option.id); //打印出上个页面传递的参数。
			this.goodsId = option.id
			this.getgoods()
		}


	}
</script>

<style scoped lang="scss">
	/deep/ .u-tabbar__content__item-wrapper {
		justify-content: space-between;
	}

	.tabbar_botton_avatab {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.tabbar_botton {
		display: flex;
		justify-content: center;
		align-items: center;
		// margin-left: 20%
	}

	.top_and_top {
		position: relative;
		display: flex;
		// flex-direction: row !important;
		justify-content: center;
		background: hsla(0, 0%, 100%, .9) !important;

		.top_and_top_top {
			display: flex;
			justify-content: center;
			align-items: center;

			.top_and_top_top_img {
				position: absolute;
				right: 0;
			}
		}
	}

	.fff_model {
		background-color: #fff;
		margin-bottom: 10px;
		border-radius: 12px;
	}

	.banxin {
		width: 100%;
		height: 100%;
		background-color: #f4f4f4 !important;
	}

	.money_plate {
		display: flex;
		justify-content: space-between;

		.fff {
			width: 100%;
			height: 54px;
			display: flex;
			position: relative;
			background-image: linear-gradient(-45deg, #ffbf49, #ff4f59);
		}

		.money {
			display: flex;
			background-image: url(//s1.hdslb.com/bfs/static/mall-c/static/img/asearly@3x.31725bc.png);
			background-repeat: no-repeat;
			background-size: cover;
			padding-left: 12px;
			flex-grow: 1;
			background-position: 50%;
			justify-content: space-between;

			.money_DD {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;

				.money_DDD {
					display: flex;
				}
			}
		}

		.money_middle {
			width: 24px;
			height: 54px;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAACWCAMAAABdJa7jAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURSEhIRwcHAwMDAAAAAICAhEREQcHB0dwTAAAABYWFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEs0zPsAAAAfdFJOU/L0+mn9+PwA/vZ8DqT23esFG0ItVpEBucrNtj9TKY80Jr9RAAABwUlEQVR42qXTS04cQRQF0YJubDCNMR/b/Gv/u6SVQooBQoVOxjzv4CnP8lP7tX7kE7+nJ57X6YnD9MTl1fTEbp2eeBivT5djOPG6ji4mJt7Gwn7xiT/XY+JsYuJlLJyfTEw8jYkfi0/c7DvmMRd2vnzkwk6bUGEnExOHjjliYWdNgLCOOWJhTbCwJlhYsbBiYcXCioUVCysWViysWFixsGJhxcKKhRULKxZWLKxYWLGwYmHFwoqFFQsrFlYsrEAYTtwl7FMsrFhYsbBiYcXCioUVCJOJ24RVsbBiYcXCioUVC6vtib8Js4mE+cR9wr6IhRULq+8K84l/CfsyFlYsrFhYsbBiYcXCioUVC6tvCfOJ/30KmkgYTiRsv2zFwoqFFQsrFlbbwnzisWNuxMKKhRULKxZWLKxYWLGwYmHFwoqFFQsrFlYsrFhYsbBiYcXCioUVCysWViysWFixsGJhxcKKhRULKxZWLKxYWLGwYmHFwoqFFQsrFlYsrFhYsbBiYcXCioUVCysWViysWFixsGJhxcKKhRULKxZWLKxYWLGwYmHFwoqFVcK4IWyq5Shso+2Jw/TEEDY3sVunJx6nJ94BKTEN57TF0IsAAAAASUVORK5CYII=);
			position: 50%;
			background-size: cover;
			background-repeat: no-repeat;
		}

		.pre_order {
			display: flex;
			justify-content: flex-end;
			// background: rgba(34, 34, 34, .95);
			background: rgb(43, 39, 34);
			flex-shrink: 0;
		}
		.pre_order_money {
			padding-right: 5px;
		}
	}

	.imgbox {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.talk {
		overflow: hidden;
		position: relative;

		.talk_top {
			margin-left: 1em;
			display: flex;
			margin-top: 1em;
			margin-bottom: 25px;
		}

		.talk_bonton {
			display: flex;
			margin-left: 10px;
			.talk_bonton_name {
				display: flex;
				margin-left: 5px
			}

		}

		.talk_bonton_text {
			margin-left: 50px;

			.talk_bonton_text_reply {
				width: 90%;
				margin-top: 5px;
				background: #f9f9f9;
				border-radius: 2px;
				padding: 12px 10px;
			}
		}
	}
</style>
