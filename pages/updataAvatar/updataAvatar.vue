<template>
	<view>
		<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple :maxCount="10">
		</u-upload>
	</view>
</template>

<script>
	import {
		oss_token,updata_avatar
	} from '../../config/api.js'
	let _this = {};
	export default {
		data() {
			return {
				fileList1: [],
				host : '',
				policy : '',
				OSSAccessKeyId : '',
				signature : '',
			}
		},
		created() {
			oss_token().then(res => {
				console.log('res', res)
				this.host = res.host
				this.policy = res.policy
				this.OSSAccessKeyId = res.accessid
				this.signature = res.signature
				console.log('hostres', this.host)
				console.log('OSSAccessKeyIdres',this.OSSAccessKeyId)
			})
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
				console.log('add',`fileList${event.name}`)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				console.log('event.file', event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					console.log('result',result)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '图片上传成功',
						url: result
					}))
					fileListLen++
				}
				// let  tar = uni.$u.patch('/api/user/avatar',{key:'g_object_name'}).catch(err=>{console.log('err',err)})
				// console.log('tar',tar)
				let tar = await updata_avatar({avatar:'MY_g_object_name'}).catch(err=>{console.log('err',err)})
				// uni.switchTab({
				// 	url:'../tabbar/tabbar-2/tabbar-2'
				// })
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: this.host, // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							'key': 'MY_g_object_name',
							'policy': this.policy,
							'OSSAccessKeyId': this.OSSAccessKeyId,
							'success_action_status': '200', //让服务端返回200,不然，默认会返回204
							'signature': this.signature,
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		},

	}
</script>

<style>

</style>
