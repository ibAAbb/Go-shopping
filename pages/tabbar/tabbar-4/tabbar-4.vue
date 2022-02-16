<template>
	<view>
<!-- 需要重构 -->
		<view class="" style="border-bottom:1rpx solid #cec8c1;">
			<u-tabs :list="list1"></u-tabs>
		</view>
		<view class="" style="width: 100%;height: 10rpx;"></view>
		<view class="" style="margin-bottom: 10rpx">
			<u-search placeholder="日照香炉生紫烟"></u-search>
		</view>
		<view class="" style="width: 100%;height: 20rpx;background-color: #EBEDF0;"></view>
		<view class="">
			<u-row customStyle="margin-bottom: 10px" v-for="(item,index) in textlist" :key="index">
				<u-col span="6">
					<view class="demo-layout bg-purple">{{item.txet}}</view>
				</u-col>
				<u-col span="6">
					<view class="demo-layout bg-purple">{{item.text1}}</view>
				</u-col>
			</u-row>

		</view>
		<view class="" style="width: 100%;height: 20rpx;background-color: #EBEDF0;"></view>
		<view class="dotai">
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="9">
					<view class="demo-layout bg-purple-light">
						<u-avatar :src="urls" size="60"></u-avatar>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">test</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">test</view>
				</u-col>
			</u-row>
			<view class="" style="background-color: #007AFF;height: 300rpx;width: 100%;"></view>
			<view>
				<u-grid :border="false">
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
						<text class="grid-text">{{baseListItem.title}}</text>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>

			<u-row customStyle="margin-bottom: 10px">
				<u-col span="9">
					<view class="demo-layout bg-purple-light">
						<u-avatar :src="urls" size="60"></u-avatar>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">test</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">test</view>
				</u-col>
			</u-row>
			<view class="" style="background-color: #007AFF;height: 300rpx;width: 100%;"></view>
			<view>
				<u-grid :border="false">
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
						<text class="grid-text">{{baseListItem.title}}</text>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>

			<u-row customStyle="margin-bottom: 10px">
				<u-col span="9">
					<view class="demo-layout bg-purple-light">
						<u-avatar :src="urls" size="60"></u-avatar>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">test</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">test</view>
				</u-col>
			</u-row>
			<view class="" style="background-color: #007AFF;height: 300rpx;width: 100%;"></view>
			<view>
				<u-grid :border="false">
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
						<text class="grid-text">{{baseListItem.title}}</text>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				urlaa: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftva3.sinaimg.cn%2Fcrop.0.0.664.664.180%2F006D5xTyjw8fbpykzqgjoj30ig0ig3zf.jpg&refer=http%3A%2F%2Ftva3.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644741119&t=edce2271a611052aa2ba0a68ebb7e743',

				baseList: [{
						name: 'photo',
						title: '分享'
					},
					{
						name: 'lock',
						title: '聊天'
					},
					{
						name: 'star',
						title: '点赞'
					},
				],
				textlist: [{
					txet: 'test',
					text1: 'test'
				}, {
					txet: 'test',
					text1: 'test'
				}, {
					txet: 'test',
					text1: 'test'
				}],
				//                isActive: true,
				//                hasError: true,
				// ac:"active",
				// danger:"text-danger"
				urls: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fpeople%2F202003%2F27%2F20200327100136_2NzsQ.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644738344&t=a4c0fb5b9040bc8f3f03512f0becea04",
				list1: [{
					name: '关注',
				}, {
					name: '推荐',
				}]
			}
			methods: {
				// chage(){
				// 	this.isActive = !this.isActive
				// } 
			}
		}
	}
</script>
<style lang="scss" scoped>
	// /deep/ body {
	// 	background-color: #909399 !important;
	// }
	.static {
		color: #2C405A;
	}

	.active {
		background-color: #007AFF;
		font-size: 30px;
		transform: translate(0rpx, 120rpx) rotate(0.5turn);
		transition: 2s;
		margin-bottom: 150rpx;
	}

	.text-danger {
		transition: 2s;
		border: 1rpx solid #4CD964;
		color: #333333;
	}
</style>
