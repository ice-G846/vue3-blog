import { createStore } from 'vuex'
export default createStore({
  state: {
    totalTitle: 'vue3-project',
    token: ''
  },
  mutations: {
    setTotalTitle(state, value) {
      state.totalTitle = value
    }
  },
  actions: {},
  modules: {}
})