import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    user : {
      id: '',
      key: '',
      email: '',
      name: '',
      metadata: {},
      statutLogin: false
    },
    sellProduct: '',
    departmentJson: [],
    blockchainJson: [],
    categoryJson: [],
    produitCount: 0,
    pagination: 1,
  },
  getters: {
  },
  mutations: {
    setSellProduct: function (state, response) {
      state.sellProduct = []
      response.forEach(element => {
        element.product_sell_metadata = JSON.parse(element.product_sell_metadata)
      });
      state.sellProduct = response;
    },
    setSellProductCount: function (state, response) {
      if (Number.isInteger(response.count / 10) == false) {

        response.count = (Math.ceil(response.count / 10 )) * 10
        console.log(response.count)
      }
      state.produitCount = []
      state.produitCount = response.count  
      state.pagination = 1

    },
    setDepartement: function (state, response) {
      state.departmentJson = response
    },
    setBlockchain: function (state, response) {
      state.blockchainJson = response
    },
    setCategory: function (state, response) {
      state.categoryJson = response
    },
    setUserData: function (state, reponse) {
      state.user.id = reponse.user_id
      state.user.key = reponse.user_prvkey
      state.user.email = reponse.user_mail
      state.user.name = reponse.user_name
      state.user.metadata = reponse.user_metadata
    }
  },
  actions: {
    getDepartement: ({ commit }) => {
      axios.post('http://localhost:8888/test/getData.php/', {
        type: 'departement'
      }).then((response) => {
          commit('setDepartement', response.data)
      })
    },
    getBlockchain: ({ commit }) => {
      axios.post('http://localhost:8888/test/getData.php/', {
        type: 'blockchain'
      }).then((response) => {
          commit('setBlockchain', response.data)
      })
    },
    getCategory: ({ commit }) => {
      axios.post('http://localhost:8888/test/getData.php/', {
        type: 'category'
      }).then((response) => {
          commit('setCategory', response.data)
      })
    },
    getSellProductByLastAdd: ({ commit }) => {
      axios.post('http://localhost:8888/test/getByLast.php/').then(function (response) {
        commit('setSellProduct', response.data)
      })
    },
    getSellProductBySearch: ({ commit }, value) => {
      return new Promise(Finish => {
        axios.post('http://localhost:8888/test/getBySearch.php/', {
          searchWord: value.searchWord,
          category: value.category,
          priceMin: value.priceMin,
          priceMax: value.priceMax,
          searchLocation: value.searchLocation,
          searchBlockchain: value.searchBlockchain,
          pagination: 0
        }).then(function (response) {
          if (response.data[0] != "empty") {
            //console.log(response.data)
            commit('setSellProduct', response.data[0])
            commit('setSellProductCount', response.data[1])
          } else {
            commit('setSellProduct', [])
            commit('setSellProductCount',[])
          }
          Finish(true)
        })
      })
    },

    changePage: ({commit, state}, value) => {
      return new Promise(Finish => {
        axios.post('http://localhost:8888/test/getBySearch.php/', {
          searchWord: value.searchWord,
          category: value.category,
          priceMin: value.priceMin,
          priceMax: value.priceMax,
          searchLocation: value.searchLocation,
          searchBlockchain: value.searchBlockchain,
          pagination: state.pagination
        }).then(function (response) {
          if (response.data[0] != "empty") {
            commit('setSellProduct', response.data[0])
          } else {
            commit('setSellProduct', [])
            commit('setSellProductCount',[])
          }
          Finish(true)
        })
      })
    },
    addArticle: ({commit},value) => {
      return new Promise(Finish => {
        axios.post('http://localhost:8888/test/addArticle.php/', {
          addLocation: value.addLocation,
          addCategorie: value.addCategorie,
          addBlockchain: value.addBlockchain,
          title_add_article: value.title_add_article,
          description_add_article: value.description_add_article,
          price_add_article: value.price_add_article,
        }).then((e) => {
          Finish(true)
        })
      })
    },

    checkUser: ({commit}, value) => {
      return new Promise(Finish => {
        axios.post('http://localhost:8888/test/getUser.php/', {
          key: value['key'],
        }).then((response) => {
          if (response.data[0] != "empty") {
            commit('setUserData' , response.data[0])
            Finish(true)
          } else {
            Finish(false)
          }
        })
      })
    },
    createNewRegister: ({commit}, value) => {
      return new Promise(Finish => {
        axios.post('http://localhost:8888/test/addUser.php/', {
          name: value['name'],
          email: value['email'],
          key: value['prvkey'],
        }).then((e) => {
          if (e.data = 1) {
            Finish(true)
          }
        })
      })
    }
  },
  modules: {
  }
})
