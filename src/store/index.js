import { createStore } from 'vuex'
export default createStore({
  state: {
    totalTitle: 'vue3-project',
    token: ''
  },
  mutations: {
    setTotalTitle(state, value) {
      state.totalTitle = value
    },
    setToken(state, value) {
      state.token = JSON.parse(localStorage.getItem('token'))
    },
    clearToken(state) {
      state.token = ''
    }
  },
  actions: {},
  modules: {}
})