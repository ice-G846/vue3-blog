import { createRouter, createWebHashHistory } from "vue-router"
import store from '/@/store/index'
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
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import("/@/pages/setting.vue"),
      meta: {
        needLogin: true
      }
    }
  ]
})
router.beforeEach((to, from, next)=> {
  let token = store.state.token;
  to.matched.some((route) => {
    // to.matched.forEach((route) => {
    if (route.meta.needLogin) { //通过此操作可以判断哪些页面需要登录
        if (token !== '' || localStorage.getItem('token')) {
            next()
        } else {
            next({ name: 'home' })
        }
    } else {
        next();
    }
  })
});
export default router