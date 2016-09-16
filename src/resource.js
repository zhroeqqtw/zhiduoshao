import Vue from 'vue';
import { Toast } from 'mint-ui';
export default {
	// home
	getBannerData: {
		dev: {
			type: 'get',
			url: './static/mock/getBannerData.json'
		}
	},
	getHomeListData: {
		dev: {
			type: 'get',
			url: './static/mock/getHomeListData.json'
		}
	},
	// find
	getFindList: {
		dev: {
			type: 'get',
			url: './static/mock/getFindList.json'
		}
	},

	// detail
	getArticleDetail: {
		dev: {
			type: 'get',
			url: './static/mock/getArticleDetail.json'
		}

	},

	request(method, params){
		let env = this.env || 'product';
		let options = this[method][env];
		return Vue.http[options.type](options.url, params).catch((e)=>{
			Toast(e.status + ' ' + e.statusText);
		})
	},
	env: 'dev',
}