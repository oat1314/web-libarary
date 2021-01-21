import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import BookSort from './views/BookSort'
import Car from './views/Car'
import Login from './views/Login'
import Register from './views/Register'
import BookDetail from './views/BookDetail'
import User from './views/User'
import Search from './views/Search'


Vue.use(Router)

const routes = [
  { path: '/', redirect:'/home'},
  { path: '/home', component: Home },
  { path: '/booksort', component: BookSort },
  { path: '/car', component: Car },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/bookdetail', component: BookDetail },
  { path: '/user', component: User },
  { path: '/search', component: Search },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
