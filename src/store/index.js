import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
    }
  },
  actions: {
    setCurrentUser({ commit }, callback) {
      setTimeout(() => {
        commit('setCurrentUser', { name: 'jinan' })
        callback && callback()
      }, 2000)
    }
  },
  modules: {}
})
