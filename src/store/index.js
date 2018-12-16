import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import products from './modules/products'
import goods from './modules/goods'


export default new Vuex.Store({
  modules: {
    products,
    goods
  }
})
