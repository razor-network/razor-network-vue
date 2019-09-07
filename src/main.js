import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'

// import './external/web3.min.js'
import 'jquery'
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
// function sleep (ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// function animateCSS (element, animationName, callback) {
//   const node = document.querySelector(element)
//   node.classList.add(animationName)
//   if (typeof callback === 'function') callback(element, animationName)
//
//       // node.addEventListener('animationend', handleAnimationEnd)
// }

// function handleAnimationEnd (element, animationName) {
//   const node = document.querySelector(element)
//
//   node.classList.remove(animationName)
//       // node.classList.add('animated', 'fadeOutDown')
//
//   node.removeEventListener('animationend', handleAnimationEnd)
//
//   if (typeof callback === 'function') callback()
// }

// let eth = []
// let btc = []
// let labels = []
// let nodes = []
// let revelations = {}
// let stakes = {}

//
// async function processProposals (proposals) {
//   for (let i = 0; i < proposals.length; i++) {
//     eth.push(Number(proposals[i].returnValues.medians[0]) / 100)
//     btc.push(Number(proposals[i].returnValues.medians[1]) / 100)
//     labels.push(Number(proposals[i].returnValues.epoch))
//           // console.log(Number(proposals[i].returnValues.median) / 100)
//   }
// }
//
// async function main2 () {
//   let blockNumber = await web3.eth.getBlockNumber()
//       // let reveals = await voteManager.getPastEvents('Revealed', {
//       //     fromBlock: Number(blockNumber) - 1000,
//       //     toBlock: 'latest'
//       // })
//   let proposals = await blockManager.getPastEvents('BlockConfirmed', {
//     fromBlock: Number(blockNumber) - 1000,
//     toBlock: 'latest'
//   })
//   await processProposals(proposals)
//       // await processReveals(reveals)
//   let chartColors = {
//     red: 'rgb(255, 99, 132)',
//     orange: 'rgb(255, 159, 64)',
//     yellow: 'rgb(255, 205, 86)',
//     green: 'rgb(75, 192, 192)',
//     blue: 'rgb(54, 162, 235)',
//     purple: 'rgb(153, 102, 255)',
//     grey: 'rgb(201, 203, 207)'
//   }
//   var colorNames = Object.keys(chartColors)
//   var ctx = document.getElementById('proposals').getContext('2d')
//   var ctx2 = document.getElementById('proposals2').getContext('2d')
//   var chart = new Chart(ctx, {
//           // The type of chart we want to create
//     type: 'line',
//
//           // The data for our dataset
//     data: {
//       labels: labels,
//       datasets: [{
//         label: 'Final Ethereum price reported over epochs',
//         backgroundColor: chartColors.blue,
//         borderColor: chartColors.blue,
//         data: eth
//       }
//               // {
//               //     label: 'Final Bitcoin price reported over epochs',
//               //     // backgroundColor: chartColors.orange,
//               //     borderColor: chartColors.orange,
//               //     data: btc
//               // }
//       ]
//     },
//
//           // Configuration options go here
//     options: {}
//   })
//
//   var chart2 = new Chart(ctx2, {
//           // The type of chart we want to create
//     type: 'line',
//
//           // The data for our dataset
//     data: {
//       labels: labels,
//       datasets: [
//         {
//           label: 'Final Bitcoin price reported over epochs',
//           backgroundColor: chartColors.orange,
//           borderColor: chartColors.orange,
//           data: btc
//         }
//       ]
//     },
//
//           // Configuration options go here
//     options: {}
//   })
// }

// main2()
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
