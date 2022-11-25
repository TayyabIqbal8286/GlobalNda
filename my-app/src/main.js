import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import '../public/assets/css/bootstrap.min.css'
import router from './router'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
