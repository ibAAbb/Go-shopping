<template>
	<view>
		<view class="">
			<u--image :src="urlaa" width="100%"></u--image>
		</view>
		<u--form :model="model" :rules="ruleabc" ref="form1">
			<u-form-item label="" prop="UserInfo.name">
				<u--input placeholder='请输入昵称' v-model="model.UserInfo.name"></u--input>
			</u-form-item>
			<u-form-item label="" prop="UserInfo.email">
				<u--input placeholder='请输入邮箱' v-model="model.UserInfo.email"></u--input>
			</u-form-item>
			<u-form-item label="" prop="UserInfo.password">
				<u--input placeholder='请输入密码' v-model="model.UserInfo.password"></u--input>
			</u-form-item>
			<u-form-item label="" prop="UserInfo.passwordAgaig">
				<u--input placeholder='确认密码' v-model="model.UserInfo.passwordAgaig"></u--input>
			</u-form-item>
			<u-form-item label="" style="padding: 30rpx;">
				<button @click="submit"
					style="padding-left: 35%;padding-right: 35%; background-color: #F7B2B2;color: #FFFFFF;">注册</button>
			</u-form-item>
		</u--form>
	</view>
</template>

<script>
	import qs from 'qs'
	import {
		register
	} from '../../config/api.js'
	export default {
		data() {
			return {
				urlaa: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201712%2F03%2F20171203121225_BLm3y.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644808520&t=fee16eb738c64eefc51ae8cb71522824',
				model: {
					UserInfo: {
						email: '',
						password: '',
						name: '',
						passwordAgaig: ''
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
					},
					'UserInfo.name': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'UserInfo.passwordAgaig': [{
							type: 'string',
							required: true,
							message: '请输入二次密码',
							trigger: ['blur', 'change']
						},
						{
							trigger: 'blur',
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								if (value !== this.model.UserInfo.password) {
									callback(new Error('二次输入的密码不一致'))
								}else{
									callback();
								}
							},
						}
					]

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
					const params ={
						name:this.model.UserInfo.name,
						email: this.model.UserInfo.email,
						password: this.model.UserInfo.password,
						password_confirmation:this.model.UserInfo.passwordAgaig
					}
					console.log('asa',params)
					let a = await register(params)
					console.log('a',a)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.u-form-item__body {
		padding: 0 !important;
	}
</style>
