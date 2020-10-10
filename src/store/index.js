import Vue from 'vue'
import { vuexfireMutations } from 'vuexfire'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    ...vuexfireMutations
  },
  actions: {
  },
  modules: {
  }
})
