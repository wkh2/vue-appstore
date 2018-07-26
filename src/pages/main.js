import Vue from 'vue'
import axios from '../utils/ajax.js'
import App from './App.vue'
import Filter from '../utils/filter.js'
import '../utils/flexible'
import '../assets/css/base.css'

Vue.use(axios);

Object.keys(Filter).forEach(function(k) {
	Vue.filter(k, Filter[k]);
});

new Vue({
  render: h => h(App)
}).$mount('app')

