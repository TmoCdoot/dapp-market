<template>
  <div>
    <input type="search" v-model="searchText" placeholder="recherche">

    <select v-model="searchFilter" required>
      <option value="1">Immo</option>
      <option value="2">informatique</option>
    </select>

    <input type="text" v-model="searchPrixMin" placeholder="prix min">
    <input type="text" v-model="searchPrixMax" placeholder="prix max">

    <select v-model="searchLocation">
      <option v-for="value in departmentJson" :value="value.departement_num">{{value.departement_num}} -
        {{value.departement_region}}</option>
    </select>

    <select v-model="searchBlockchain">
      <option value="1">BTC</option>
      <option value="2">ETH</option>
    </select>

    <button @click="searchRequest">send</button>
  </div>

  *********** ADD ARTICLE********
  <div>
    <form>
      <input type="text" placeholder="title"  v-model="title_add_article" required>

      <input type="text" placeholder="description" v-model="description_add_article" required>
  
      <input type="number" placeholder="price" v-model="price_add_article" required>
  
      <select v-model="addLocation" required>
        <option v-for="value in departmentJson" :value="value.departement_num">{{value.departement_num}} -
          {{value.departement_region}}</option>
      </select>
  
      <select v-model="addCategorie" required>
        <option value="1">Immo</option>
        <option value="2">informatique</option>
      </select>
  
      <select v-model="addBlockchain" required>
        <option value="1">BTC</option>
        <option value="2">ETH</option>
      </select>
  
      <button @click="addArticle">add article</button>
    </form>
    
  </div>


  <div class="grid-content">
    <ItemSaleComponent v-for="value in sellProduct" :key="value" :title="value.product_sell_title"
      :city="value.product_sell_city" :county="value.product_sell_county" :price_crypto="value.product_sell_price"
      :metadata="value.product_sell_metadata" />
  </div>

  <div v-if="produitCount > 10">
    <button @click="nextPage">Next page</button>
    <button @click="previousPage">Previous page</button>
  </div>
</template>

<script>
  import ItemSaleComponent from '../components/ItemSaleComponent.vue'
  import { mapState } from 'vuex'

  export default {
    data: function () {
      return {
        searchText: '',
        searchPrixMin: '',
        searchPrixMax: '',
        searchFilter: '',
        searchLocation: '',
        searchBlockchain: '',

        pageNumber: '0',
        addLocation: '',
        addCategorie: '',
        addBlockchain: '',
        title_add_article:'',
        description_add_article:'',
        price_add_article:'',

      }
    },
    components: {
      ItemSaleComponent
    },
    computed: {
      ...mapState(['sellProduct', 'departmentJson', 'produitCount']),
    },
    methods: {
      searchRequest: function () {
        this.$store.dispatch('getSellProductBySearch', {
          searchWord: this.searchText,
          category: this.searchFilter,
          priceMin: this.searchPrixMin,
          priceMax: this.searchPrixMax,
          searchLocation: this.searchLocation,
          searchBlockchain: this.searchBlockchain,
        }).then((e) => {
          console.log(this.$store.state.produitCount)
          if (this.$store.state.produitCount > 10) {
            this.pageNumber = 1
          }
        })
      },
      nextPage: function () {
        if (this.$store.state.pagination <= (Math.trunc(this.$store.state.produitCount / 10))) {
          this.$store.state.pagination++
          this.$store.dispatch('changePage', {
            searchWord: this.searchText,
            category: this.searchFilter == 'categorie' ? '' : this.searchFilter,
            priceMin: this.searchPrixMin,
            priceMax: this.searchPrixMax,
            searchLocation: this.searchLocation == 'Département' ? '' : this.searchLocation,
            searchBlockchain: this.searchBlockchain == 'blockchain' ? '' : this.searchBlockchain,
          })
        }
      },
      previousPage: function () {
        if (this.$store.state.pagination > 1) {
          this.$store.state.pagination--
          this.$store.dispatch('changePage', {
            searchWord: this.searchText,
            category: this.searchFilter == 'categorie' ? '' : this.searchFilter,
            priceMin: this.searchPrixMin,
            priceMax: this.searchPrixMax,
            searchLocation: this.searchLocation == 'Département' ? '' : this.searchLocation,
            searchBlockchain: this.searchBlockchain == 'blockchain' ? '' : this.searchBlockchain,
          })
        }
      },
      addArticle: function () {
        this.$store.dispatch('addArticle', {
          addLocation: this.addLocation,
          addCategorie: this.addCategorie,
          addBlockchain: this.addBlockchain,
          title_add_article: this.title_add_article,
          description_add_article: this.description_add_article,
          price_add_article: this.price_add_article,
        })
      }
    },
    name: 'HomeView',
    beforeMount() {
      this.$store.dispatch('getSellProductByLastAdd')
    }
  }
</script>

<style>
  .grid-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 15px;
  }
</style>