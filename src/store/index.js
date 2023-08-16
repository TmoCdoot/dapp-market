import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    data:'',
  },
  getters: {
  },
  mutations: {
    setdata: function (state, data) {
      data.forEach(element => {
        element.product_sell_metadata = JSON.parse(element.product_sell_metadata)
      });
      state.data = data;
    },
  },
  actions: {
    getSellItem: ({ commit }) => {
      axios.get('http://localhost:8888/test/').then(function (response) { 
        commit('setdata', response.data)
      })}
  },
  modules: {
  }
})
