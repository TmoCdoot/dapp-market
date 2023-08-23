<template>

    <input type="search" v-model="searchText" placeholder="recherche">

    <select v-model="searchFilter">
      <option :selected="searchFilter" disabled>categorie</option>
      <option value="1">Immo</option>
      <option value="2">informatique</option>
    </select>

    <input type="text" v-model="searchPrixMin" placeholder="prix min">
    <input type="text" v-model="searchPrixMax" placeholder="prix max">

    <select v-model="searchLocation">
      <option :selected="searchLocation" disabled>Département</option>
      <option v-for="value in departmentJson" :value="value.departement_num">{{value.departement_num}} - {{value.departement_region}}</option>
    </select>

    <select v-model="searchBlockchain">
      <option :selected="searchBlockchain" disabled>blockchain</option>
      <option value="1">BTC</option>
      <option value="2">ETH</option>
    </select>

    <button @click="searchRequest">send</button>



  <div class="grid-content">
    <ItemSaleComponent v-for="value in sellProduct" :key="value" 
    :title="value.product_sell_title" :city="value.product_sell_city" :county="value.product_sell_county" :price_crypto="value.product_sell_price" :metadata="value.product_sell_metadata"/>
  </div>
</template>

<script>
import ItemSaleComponent from '../components/ItemSaleComponent.vue'
import { mapState } from 'vuex'

export default {
  data: function () {
      return {
        searchText: '',
        searchPrixMin:'',
        searchPrixMax:'',
        searchFilter: 'categorie',
        searchLocation:'Département',
        searchBlockchain: 'blockchain',
      }
    },
  components: {
    ItemSaleComponent
  },
  computed: {
      ...mapState(['sellProduct', 'departmentJson']),
    },
  methods: {
    searchRequest: function () {
      this.$store.dispatch('getSellProductBySearch', {
        searchWord: this.searchText,
        category: this.searchFilter == 'categorie' ? '' : this.searchFilter,
        priceMin: this.searchPrixMin,
        priceMax: this.searchPrixMax,
        searchLocation: this.searchLocation == 'Département' ? '' : this.searchLocation,
        searchBlockchain: this.searchBlockchain == 'blockchain' ? '' : this.searchBlockchain,
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
  grid-template-columns: repeat( auto-fit, minmax( 250px, 1fr ));
  grid-gap: 15px;
 }
</style>
