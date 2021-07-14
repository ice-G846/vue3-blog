import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

const app = createApp(App)
import axios from "axios"
app.config.globalProperties.$axios = axios

import './index.css'

app.use(router).use(store).mount('#app')
