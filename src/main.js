// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import api from './assets/js/api'



import axios from 'axios'
Vue.prototype.$http = axios


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

Vue.prototype.$api = api


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
