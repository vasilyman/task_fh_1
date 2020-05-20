import Vue from 'vue'
import VueRouter from 'vue-router'
import task1 from '../views/task1.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'task1',
    component: task1
  },
  {
    path: '/task2',
    name: 'task2',
    component: () => import(/* webpackChunkName: "task2" */ '../views/task2.vue')
  },
  {
    path: '/task3',
    name: 'task3',
    component: () => import(/* webpackChunkName: "task3" */ '../views/task3.vue')
  },
  {
    path: '/task4',
    name: 'task4',
    component: () => import(/* webpackChunkName: "task4" */ '../views/task4.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
