<template>
	<view>
		<view class="cars">
			<view class="" v-for="(item,index) in cars" :key="index">
				<view class="">GamePlay</view>
			<u-row customStyle="margin-bottom: 10px"  class="order">
				<u-col span="1">
					<u-checkbox-group  @change="checkboxChange">
						<u-checkbox shape="circle"></u-checkbox>
					</u-checkbox-group>
				</u-col>
				<u-col span="5">
					<u--image :src="item.goods.cover_url" width="250rpx" height="250rpx"></u--image>
				</u-col>
				<u-col span="6" class="order_text">
					<view class="">
						<u-text :text="item.goods.title"></u-text>
					</view>
					<view class=""><!-- <u-action-sheet  :title="item.goods.title" :show="show"></u-action-sheet>
					<u-button @click="show = true">打开ActionSheet</u-button> -->
					暂未开发
					</view>
					<view class="_select">
						<u-text :text="`¥${item.goods.price}`"></u-text>
						<u-number-box v-model="item.num" @change="valChange"></u-number-box>
					</view>
				</u-col>
			</u-row>				
			<u-button @click="delete_order(index)" text="删除商品"></u-button>	
			</view>
		</view>
		<!-- <u-button size="small" type="warning" style="position:fixed;bottom:100rpx;" text="结算"></u-button> -->
	</view>
</template>

<script>
	import {
		getcars,delete_order
	} from '../../../config/api.js'
	export default {
		data() {
			return {
				cars:[]
			}
		},
		onShow(){
			if(this.vuex_swichtab){	
				this.vuex_swichtab = false
				console.log('进入判断')
			}
		},
		async created() {
			let params = {
				include: "goods"
			}
			let {data} = await getcars({
				data: params
			}).catch(err => console.log('carerr', err));
			this.cars = data
			console.log('car',this.cars)
		},
		methods: {
			async delete_order(index){
				await delete_order(this.cars[index].id).catch(err=>{console.log(err)})
			},
			
			valChange(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.order{
	position: relative;
	.order_text{
		position: absolute;
		right: 0;
		height: 90%;
		justify-content: space-between !important;
		._select{
			display: flex;
		}
	}
}
</style>
