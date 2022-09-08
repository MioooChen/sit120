import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Story from '../views/OurStory.vue'
import Join from '../views/JoinUs.vue'

Vue.use(VueRouter)
// 项目路由配置
const routes = [
  { //主页
    path: '/',
    name: 'home',
    component: HomeView
  },
  { //join us页面
    path: '/joinus',
    name: 'join us',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Join
  },
  {
    path: '/story',
    name: 'our story',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Story
  },
  {
    path: '/contact',
    name: 'contact us',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue') //懒加载
  },
  {
    path: '/sign',
    name: 'sign acc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateAcc.vue')
  },
  {
    path: '/login',
    name: 'loign acc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
  },
  {
    path: '/question',
    name: 'question list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Question.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导出路由实例
export default router
