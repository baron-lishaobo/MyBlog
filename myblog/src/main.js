import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import request from './network/request';
import store from './store/index'
Vue.use(Antd);
Vue.config.productionTip = false

const vue = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.prototype.http = request;
Vue.prototype.http.init(vue)