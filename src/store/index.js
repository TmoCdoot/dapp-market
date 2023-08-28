import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    sellProduct: '',
    departmentJson: [
      {
        "departement_id": "1",
        "departement_num": "01",
        "departement_region": "Ain",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "2",
        "departement_num": "02",
        "departement_region": "Aisne",
        "departement_name": "Hauts-de-France"
      },
      {
        "departement_id": "3",
        "departement_num": "03",
        "departement_region": "Allier",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "4",
        "departement_num": "04",
        "departement_region": "Alpes-de-Haute-Provence",
        "departement_name": "Provence-Alpes-Côte d'Azur"
      },
      {
        "departement_id": "5",
        "departement_num": "05",
        "departement_region": "Hautes-Alpes",
        "departement_name": "Provence-Alpes-Côte d'Azur"
      },
      {
        "departement_id": "6",
        "departement_num": "06",
        "departement_region": "Alpes-Maritimes",
        "departement_name": "Provence-Alpes-Côte d'Azur"
      },
      {
        "departement_id": "7",
        "departement_num": "07",
        "departement_region": "Ardèche",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "8",
        "departement_num": "08",
        "departement_region": "Ardennes",
        "departement_name": "Grand Est"
      },
      {
        "departement_id": "9",
        "departement_num": "09",
        "departement_region": "Ariège",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "10",
        "departement_num": "10",
        "departement_region": "Aube",
        "departement_name": "Grand Est"
      },
      {
        "departement_id": "11",
        "departement_num": "11",
        "departement_region": "Aude",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "12",
        "departement_num": "12",
        "departement_region": "Aveyron",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "13",
        "departement_num": "13",
        "departement_region": "Bouches-du-Rhône",
        "departement_name": "Provence-Alpes-Côte d'Azur"
      },
      {
        "departement_id": "14",
        "departement_num": "14",
        "departement_region": "Calvados",
        "departement_name": "Normandie"
      },
      {
        "departement_id": "15",
        "departement_num": "15",
        "departement_region": "Cantal",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "16",
        "departement_num": "16",
        "departement_region": "Charente",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "17",
        "departement_num": "17",
        "departement_region": "Charente-Maritime",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "18",
        "departement_num": "18",
        "departement_region": "Cher",
        "departement_name": "Centre-Val de Loire"
      },
      {
        "departement_id": "19",
        "departement_num": "19",
        "departement_region": "Corrèze",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "20",
        "departement_num": "21",
        "departement_region": "Côte-d'Or",
        "departement_name": "Bourgogne-Franche-Comté"
      },
      {
        "departement_id": "21",
        "departement_num": "22",
        "departement_region": "Côtes-d'Armor",
        "departement_name": "Bretagne"
      },
      {
        "departement_id": "22",
        "departement_num": "23",
        "departement_region": "Creuse",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "23",
        "departement_num": "24",
        "departement_region": "Dordogne",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "24",
        "departement_num": "25",
        "departement_region": "Doubs",
        "departement_name": "Bourgogne-Franche-Comté"
      },
      {
        "departement_id": "25",
        "departement_num": "26",
        "departement_region": "Drôme",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "26",
        "departement_num": "27",
        "departement_region": "Eure",
        "departement_name": "Normandie"
      },
      {
        "departement_id": "27",
        "departement_num": "28",
        "departement_region": "Eure-et-Loir",
        "departement_name": "Centre-Val de Loire"
      },
      {
        "departement_id": "28",
        "departement_num": "29",
        "departement_region": "Finistère",
        "departement_name": "Bretagne"
      },
      {
        "departement_id": "29",
        "departement_num": "2A",
        "departement_region": "Corse-du-Sud",
        "departement_name": "Corse"
      },
      {
        "departement_id": "30",
        "departement_num": "2B",
        "departement_region": "Haute-Corse",
        "departement_name": "Corse"
      },
      {
        "departement_id": "31",
        "departement_num": "30",
        "departement_region": "Gard",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "32",
        "departement_num": "31",
        "departement_region": "Haute-Garonne",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "33",
        "departement_num": "32",
        "departement_region": "Gers",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "34",
        "departement_num": "33",
        "departement_region": "Gironde",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "35",
        "departement_num": "34",
        "departement_region": "Hérault",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "36",
        "departement_num": "35",
        "departement_region": "Ille-et-Vilaine",
        "departement_name": "Bretagne"
      },
      {
        "departement_id": "37",
        "departement_num": "36",
        "departement_region": "Indre",
        "departement_name": "Centre-Val de Loire"
      },
      {
        "departement_id": "38",
        "departement_num": "37",
        "departement_region": "Indre-et-Loire",
        "departement_name": "Centre-Val de Loire"
      },
      {
        "departement_id": "39",
        "departement_num": "38",
        "departement_region": "Isère",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "40",
        "departement_num": "39",
        "departement_region": "Jura",
        "departement_name": "Bourgogne-Franche-Comté"
      },
      {
        "departement_id": "41",
        "departement_num": "40",
        "departement_region": "Landes",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "42",
        "departement_num": "41",
        "departement_region": "Loir-et-Cher",
        "departement_name": "Centre-Val de Loire"
      },
      {
        "departement_id": "43",
        "departement_num": "42",
        "departement_region": "Loire",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "44",
        "departement_num": "43",
        "departement_region": "Haute-Loire",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "45",
        "departement_num": "44",
        "departement_region": "Loire-Atlantique",
        "departement_name": "Pays de la Loire"
      },
      {
        "departement_id": "46",
        "departement_num": "45",
        "departement_region": "Loiret",
        "departement_name": "Centre-Val de Loire"
      },
      {
        "departement_id": "47",
        "departement_num": "46",
        "departement_region": "Lot",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "48",
        "departement_num": "47",
        "departement_region": "Lot-et-Garonne",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "49",
        "departement_num": "48",
        "departement_region": "Lozère",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "50",
        "departement_num": "49",
        "departement_region": "Maine-et-Loire",
        "departement_name": "Pays de la Loire"
      },
      {
        "departement_id": "51",
        "departement_num": "50",
        "departement_region": "Manche",
        "departement_name": "Normandie"
      },
      {
        "departement_id": "52",
        "departement_num": "51",
        "departement_region": "Marne",
        "departement_name": "Grand Est"
      },
      {
        "departement_id": "53",
        "departement_num": "52",
        "departement_region": "Haute-Marne",
        "departement_name": "Grand Est"
      },
      {
        "departement_id": "54",
        "departement_num": "53",
        "departement_region": "Mayenne",
        "departement_name": "Pays de la Loire"
      },
      {
        "departement_id": "55",
        "departement_num": "54",
        "departement_region": "Meurthe-et-Moselle",
        "departement_name": "Grand Est"
      },
      {
        "departement_id": "56",
        "departement_num": "55",
        "departement_region": "Meuse",
        "departement_name": "Grand Est"
      },
      {
        "departement_id": "57",
        "departement_num": "56",
        "departement_region": "Morbihan",
        "departement_name": "Bretagne"
      },
      {
        "departement_id": "58",
        "departement_num": "57",
        "departement_region": "Moselle",
        "departement_name": "Grand Est"
      },
      {
        "departement_id": "59",
        "departement_num": "58",
        "departement_region": "Nièvre",
        "departement_name": "Bourgogne-Franche-Comté"
      },
      {
        "departement_id": "60",
        "departement_num": "59",
        "departement_region": "Nord",
        "departement_name": "Hauts-de-France"
      },
      {
        "departement_id": "61",
        "departement_num": "60",
        "departement_region": "Oise",
        "departement_name": "Hauts-de-France"
      },
      {
        "departement_id": "62",
        "departement_num": "61",
        "departement_region": "Orne",
        "departement_name": "Normandie"
      },
      {
        "departement_id": "63",
        "departement_num": "62",
        "departement_region": "Pas-de-Calais",
        "departement_name": "Hauts-de-France"
      },
      {
        "departement_id": "64",
        "departement_num": "63",
        "departement_region": "Puy-de-Dôme",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "65",
        "departement_num": "64",
        "departement_region": "Pyrénées-Atlantiques",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "66",
        "departement_num": "65",
        "departement_region": "Hautes-Pyrénées",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "67",
        "departement_num": "66",
        "departement_region": "Pyrénées-Orientales",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "68",
        "departement_num": "67",
        "departement_region": "Bas-Rhin",
        "departement_name": "Grand Est"
      },
      {
        "departement_id": "69",
        "departement_num": "68",
        "departement_region": "Haut-Rhin",
        "departement_name": "Grand Est"
      },
      {
        "departement_id": "70",
        "departement_num": "69",
        "departement_region": "Rhône",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "71",
        "departement_num": "70",
        "departement_region": "Haute-Saône",
        "departement_name": "Bourgogne-Franche-Comté"
      },
      {
        "departement_id": "72",
        "departement_num": "71",
        "departement_region": "Saône-et-Loire",
        "departement_name": "Bourgogne-Franche-Comté"
      },
      {
        "departement_id": "73",
        "departement_num": "72",
        "departement_region": "Sarthe",
        "departement_name": "Pays de la Loire"
      },
      {
        "departement_id": "74",
        "departement_num": "73",
        "departement_region": "Savoie",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "75",
        "departement_num": "74",
        "departement_region": "Haute-Savoie",
        "departement_name": "Auvergne-Rhône-Alpes"
      },
      {
        "departement_id": "76",
        "departement_num": "75",
        "departement_region": "Paris",
        "departement_name": "Île-de-France"
      },
      {
        "departement_id": "77",
        "departement_num": "76",
        "departement_region": "Seine-Maritime",
        "departement_name": "Normandie"
      },
      {
        "departement_id": "78",
        "departement_num": "77",
        "departement_region": "Seine-et-Marne",
        "departement_name": "Île-de-France"
      },
      {
        "departement_id": "79",
        "departement_num": "78",
        "departement_region": "Yvelines",
        "departement_name": "Île-de-France"
      },
      {
        "departement_id": "80",
        "departement_num": "79",
        "departement_region": "Deux-Sèvres",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "81",
        "departement_num": "80",
        "departement_region": "Somme",
        "departement_name": "Hauts-de-France"
      },
      {
        "departement_id": "82",
        "departement_num": "81",
        "departement_region": "Tarn",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "83",
        "departement_num": "82",
        "departement_region": "Tarn-et-Garonne",
        "departement_name": "Occitanie"
      },
      {
        "departement_id": "84",
        "departement_num": "83",
        "departement_region": "Var",
        "departement_name": "Provence-Alpes-Côte d'Azur"
      },
      {
        "departement_id": "85",
        "departement_num": "84",
        "departement_region": "Vaucluse",
        "departement_name": "Provence-Alpes-Côte d'Azur"
      },
      {
        "departement_id": "86",
        "departement_num": "85",
        "departement_region": "Vendée",
        "departement_name": "Pays de la Loire"
      },
      {
        "departement_id": "87",
        "departement_num": "86",
        "departement_region": "Vienne",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "88",
        "departement_num": "87",
        "departement_region": "Haute-Vienne",
        "departement_name": "Nouvelle-Aquitaine"
      },
      {
        "departement_id": "89",
        "departement_num": "88",
        "departement_region": "Vosges",
        "departement_name": "Grand Est"
      },
      {
        "departement_id": "90",
        "departement_num": "89",
        "departement_region": "Yonne",
        "departement_name": "Bourgogne-Franche-Comté"
      },
      {
        "departement_id": "91",
        "departement_num": "90",
        "departement_region": "Territoire de Belfort",
        "departement_name": "Bourgogne-Franche-Comté"
      },
      {
        "departement_id": "92",
        "departement_num": "91",
        "departement_region": "Essonne",
        "departement_name": "Île-de-France"
      },
      {
        "departement_id": "93",
        "departement_num": "92",
        "departement_region": "Hauts-de-Seine",
        "departement_name": "Île-de-France"
      },
      {
        "departement_id": "94",
        "departement_num": "93",
        "departement_region": "Seine-Saint-Denis",
        "departement_name": "Île-de-France"
      },
      {
        "departement_id": "95",
        "departement_num": "94",
        "departement_region": "Val-de-Marne",
        "departement_name": "Île-de-France"
      },
      {
        "departement_id": "96",
        "departement_num": "95",
        "departement_region": "Val-d'Oise",
        "departement_name": "Île-de-France"
      },
      {
        "departement_id": "97",
        "departement_num": "971",
        "departement_region": "Guadeloupe",
        "departement_name": "Guadeloupe"
      },
      {
        "departement_id": "98",
        "departement_num": "972",
        "departement_region": "Martinique",
        "departement_name": "Martinique"
      },
      {
        "departement_id": "99",
        "departement_num": "973",
        "departement_region": "Guyane",
        "departement_name": "Guyane"
      },
      {
        "departement_id": "100",
        "departement_num": "974",
        "departement_region": "La Réunion",
        "departement_name": "La Réunion"
      },
      {
        "departement_id": "101",
        "departement_num": "976",
        "departement_region": "Mayotte",
        "departement_name": "Mayotte"
      }
    ],
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
      state.produitCount = []
      state.produitCount = response.count  
      state.pagination = 1

    },
  },
  actions: {
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
      console.log(value)
      return new Promise(Finish => {
        /*axios.post('http://localhost:8888/test/getBySearch.php/', {
          searchWord: value.searchWord,
          category: value.category,
          priceMin: value.priceMin,
          priceMax: value.priceMax,
          searchLocation: value.searchLocation,
          searchBlockchain: value.searchBlockchain,
          pagination: state.pagination
        }).then(function (response) {
          if (response.data[0] != "empty") {
            //console.log(response.data)
            commit('setSellProduct', response.data[0])
          } else {
            commit('setSellProduct', [])
            commit('setSellProductCount',[])
          }
          Finish(true)
        })*/
      })
    },
    addArticle: ({commit},value) => {
      console.log(value)
      return new Promise(Finish => {
        axios.post('http://localhost:8888/test/addArticle.php/', {
          addLocation: value.addLocation,
          addCategorie: value.addCategorie,
          addBlockchain: value.addBlockchain,
          title_add_article: value.title_add_article,
          description_add_article: value.description_add_article,
          price_add_article: value.price_add_article,
        }).then((e) => {
          console.log(e)
        })
      })
    },
  },
  modules: {
  }
})
