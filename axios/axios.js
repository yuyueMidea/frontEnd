import axios from 'axios'

//
import { Loading } from 'element-ui';
let loadingInstance =null;
// this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
//   loadingInstance.close();
// });
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
	if(config.showLoading){
		loadingInstance = Loading.service({
				  lock: true,
				  text: 'Loading',
				  spinner: 'el-icon-loading',
				  background: 'rgba(0, 0, 0, 0.7)'
	    });
		console.log("showLoading----start-")
	}
// debugger
	console.log('start---request',new Date().getSeconds())
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
	// loadingInstance.close();
// 	setTimeout(() => {
//           loadingInstance.close();
// 		  console.log('close--S2-end',new Date().getSeconds())
//         }, 2000);
	if(response.config.showLoading){
		 loadingInstance.close();
		 console.log("showLoading----end-")
	}
// debugger
	console.log('response---end',new Date().getSeconds())
    return response;
  }, function (error) {
	  if(error.config.showLoading){
	  	 loadingInstance.close();
	  	 console.log("showLoading--err--end-")
	  }
    // Do something with response error
    return Promise.reject(error);
  });
  
export default axios;