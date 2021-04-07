import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Problemset from '../views/Problemset.vue'
import Login from '../views/Login.vue'
import Signin from '../views/Signin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/problemset',
    name: 'prblemset',
    component: Problemset
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
