module.exports = (vm) => {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		/* config 为默认全局配置*/
		config.baseURL = 'https://api.shop.eduwork.cn'; /* 根域名 */

		return config
	})

	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		config.header = {
			...config.header,
			Authorization:"Bearer" + vm.$store.state.vuex_token
			// 	token: 12, // 演示拦截器header加参
		}
		// console.log('vm',vm.$store.state.vuex_token)
		// console.log('this',this)
		// if (!config.header.token) {
		// 	return Promise.reject(config)
		// }
		return config

	})


	uni.$u.http.interceptors.response.use((response) => {

		const {
			statusCode,
			data
		} = response

		if (statusCode == 200) {
			return data
		}
	})
}
