import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'aos/dist/aos'

// import css
import './css/style.css'
import './css/style1.css'

// import AOS (Animate on Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
