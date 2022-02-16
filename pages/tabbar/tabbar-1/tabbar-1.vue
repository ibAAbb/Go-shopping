<template>
	<view class="content">
		<u-swiper :list="arrayImg" keyName="img_url" :indicator="true" height="200"></u-swiper>
		<view style="height: 30rpx;width: 100%;"></view>

		<view class="">
			<u-tabs :list="list1" :activeStyle="{
						color: '#303133',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}" @change="qiehuan"></u-tabs>
		</view>
		<view style="height: 30rpx;width: 100%;"></view>
		<view>
			<u-grid col="2">
				<u-grid-item v-for="(baseListItem,baseListIndex) in arraybook" :key="arraybook.id" @click="xq">
					<navigator <u--image :src="baseListItem.cover_url" width="350rpx" height="350rpx">
						</u--image>
					</navigator>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	import {
		getMenu,getgoods,getgoods_xq,addcars
	} from '@/config/api.js'
	export default {
		data() {
			return {
				number:0,
				arrayImg: [],
				arraybook: [],
				page:1,
				list1: [{
					name: '默认',
				}, {
					name: '推荐',
				}, {
					name: '最新'
				}, {
					name: '优秀'
				}]
			}

		},
		async onLoad() {
			getMenu().then(res => {
				console.log('res', res)
			})
			let {
				slides,
				goods
			} = await getMenu();
			this.arrayImg = slides;
			this.arraybook = goods.data;
			await console.log('arraybook', this.arraybook)
		},
		async onReachBottom(){
			this.page +=1;
			await this.qiehuan(this.number)
			
		},
		methods: {
			  xq(index){
				// let bookid = {
				// 	good:this.arraybook[index].id
				// }
				//  getgoods({data:bookid}).then(res=>{
				// 	 console.log('res',res)
				//  })
				// let bookparams = {
				// 	goods_id : this.arraybook[index].id
				// }
				// console.log('bb',bookparams)
				//  let car =  await addcars(bookparams).catch(err => console.log('err',err))
				//  console.log('car',car)
				uni.navigateTo({
					url:`../goods-5/goods-index?id=${this.arraybook[index].id}`
				})
			},
			async qiehuan(index) {
				if (index instanceof Object) {
					this.number = index.index
					this.arraybook = []
					this.page = 1
				}
				const params = {
					page: this.page,
				}
				if(this.number == 1 ) params.sales = 1
				if(this.number == 2 )  params.recommend = 1
				if(this.number == 3 )  params.new = 1
				let {
					goods
				} = await getMenu({
					data: params
				})
				this.arraybook.push(...goods.data)
			}
		}
	};
</script>

<style scoped lang="scss">
	.content {
		text-align: center;

		/* height: 400upx; */
		/* margin-top: 200upx; */
	}

	/deep/ .u-tabs__wrapper__nav {
		background-color: darkgrey;
		border-radius: 10rpx;
	}
</style>
