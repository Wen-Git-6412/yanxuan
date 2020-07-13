// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from "./store"
import Loading from '@/components/loading'

Vue.component("Loading",Loading)

Vue.prototype.$axios = axios
axios.defaults.baseURL = "https://api.it120.cc/small4/"

import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)


import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 改变vuex中的isLoading状态数据，当为true，loading显示
    // store.state.Loading = true
    store.commit("loading",true);
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    setTimeout (()=>{
      store.commit("loading",false);
    },1000);
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      return Promise.reject(error.response);
    }
  }
);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
