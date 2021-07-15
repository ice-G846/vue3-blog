import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
//引入elment组件库
import 'element-plus/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus'

const app = createApp(App)
import axios from "axios"
app.config.globalProperties.$axios = axios

import './index.css'

app.use(router).use(store).use(ElementPlus).mount('#app')
