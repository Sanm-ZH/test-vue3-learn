import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todoList',
    name: 'todoList',

    component: () =>
      import(/* webpackChunkName: "todo" */ '@/views/todoList/todo.vue')
  }
]

const router = createRouter({
  history: process.env.NODE_ENV === 'development'
    ? createWebHistory(process.env.BASE_URL)
    : createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
