import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import './external/jquery.min.js'
// routes
import VueRouter from 'vue-router'
import { routes } from './routes/index'
import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'aos/dist/aos'

// import css
import './css/style.css'
import './css/style1.css'

// import AOS (Animate on Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  created() {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
