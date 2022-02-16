import App from './App.vue'
import store from '@/store'
import qs from 'qs'

// #ifndef VUE3

import Vue from 'vue'
import uView from 'uview-ui'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)
uni.$u.config.unit = 'rpx'
uni.$u.patch = (url,params={}) =>{
	const _params = {
		...params,
		_method : 'PATCH'
	}
	return uni.$u.http.post(url,_params)
}
const app = new Vue({
	store,
	...App
})
let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);
require('./config/request.js')(app)
app.$mount()

// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}


// #endif

