import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home'
import ComAnalysis from 'views/comAnalysis'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comprehensiveAnalysis',
    name: 'ComprehensiveAnalysis',
    component: ComAnalysis,
    meta: {
      title: '综合分析'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
