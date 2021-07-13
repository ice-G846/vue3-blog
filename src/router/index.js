import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import("/@/pages/home.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("/@/pages/login.vue")
    }
  ]
})
export default router