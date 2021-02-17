import Vue from 'vue'
import Vuex from 'vuex'
import lullaby from './modules/lullaby'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lullaby,
  },
})