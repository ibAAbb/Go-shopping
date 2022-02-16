<template>
	<view>
		<view class="">
			<u--image :src="urlaa" width="100%"></u--image>
		</view>
		<u--form :model="model" :rules="ruleabc" ref="form1">
			<u-form-item label="" prop="UserInfo.email">
				<u--input placeholder='请输入邮箱' v-model="model.UserInfo.email"></u--input>
			</u-form-item>
			<u-form-item label="" prop="UserInfo.password">
				<u--input placeholder='请输入密码' v-model="model.UserInfo.password"></u--input>
			</u-form-item>
			<u-form-item label="" style="padding: 15px;">
				<button @click="submit"
					style="padding-left: 35%;padding-right: 35%; background-color: #F7B2B2;color: #FFFFFF;">登录</button>
			</u-form-item>
			<u-form-item label="" style="padding: 15px;">
				<button @click="register"
					style="padding-left: 35%;padding-right: 35%; background-color: #F7B2B2;color: #FFFFFF;">注册</button>
			</u-form-item>
		</u--form>
	</view>
</template>

<script>
	import qs from 'qs'
	import {
		login
	} from '../../config/api.js'
	import {saveToken} from '../../util/localStorage.js'
	export default {
		data() {
			return {
				urlaa: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fac546a712b8100e2825a76bdeff8286fbd538c7c.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644400204&t=6981328f8c6f5a95e15ac638b9ccef6c',
				model: {
					UserInfo: {
						email: '',
						password: ''
					}
				},
				ruleabc: {
					'UserInfo.email': {
						type: 'email',
						required: true,
						message: '请填写正确的邮箱',
						trigger: ['blur', 'change']
					},
					'UserInfo.password': {
						type: 'string',
						required: true,
						min: '6',
						message: '请填写密码',
						trigger: ['blur', 'change']
					}

				}
			}
		},

		methods: {
			async submit() {
				// uni.switchTab({
				// 	url:'../tabbar/tabbar-2/tabbar-2'
				// })
				// let a = {da:23312}
				// let b = qs.stringify(a)
				// console.log('b',b,a)
				
				let b = await this.$refs.form1.validate()
				if (b) {
					console.log('b', b)
					if(localStorage.getItem("lifeData")){
					uni.switchTab({
						url: '../tabbar/tabbar-2/tabbar-2'
					})
				}
					const params = {
						email: this.model.UserInfo.email,
						password: this.model.UserInfo.password
					}
					// console.log('asa', params)
					// console.log('login')
					login(params).then(res=>{
						uni.showToast({
						    title: '登录成功',
						    duration: 2000
						});
						console.log('res',res.access_token)
						uni.$u.vuex('vuex_token',res.access_token)
						uni.switchTab({
							url: '../tabbar/tabbar-2/tabbar-2'
						})
					}).catch(err=>{
						uni.$u.toast('邮箱或者密码错误')
						console.log(err)
					})
				}
			},
			register() {
				uni.navigateTo({
					url: '../register/register'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.u-form-item__body {
		padding: 0 !important;
	}
</style>
