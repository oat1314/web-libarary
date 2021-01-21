import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.$ = $;

new Vue({
  router,
  Footer,
  Header,
  render: h => h(App)
}).$mount('#app')

