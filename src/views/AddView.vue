<template>
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
        <option v-for="value in categoryJson" :value="value.category_id">{{value.category_title}}</option>
      </select>
  
      <select v-model="addBlockchain" required>
        <option v-for="value in blockchainJson" :value="value.blockchain_id">{{value.blockchain_name}}</option>
      </select>
  
      <button @click="addArticle">add article</button>
    </form>
  </div>
</template>

<script>
import TopBlockComponent from '../components/TopBlockComponent.vue'
import ItemSaleComponent from '../components/ItemSaleComponent.vue'
import { mapState } from 'vuex'

export default {
  components: {
    TopBlockComponent,
    ItemSaleComponent,
  },
  data: function () {
    return {
      addLocation: '',
        addCategorie: '',
        addBlockchain: '',
        title_add_article:'',
        description_add_article:'',
        price_add_article:'',
    }
  },
  computed: {
      ...mapState(['departmentJson','blockchainJson', 'categoryJson']),
    },
  methods: {
    addArticle: function () {
        this.$store.dispatch('addArticle', {
          addLocation: this.addLocation,
          addCategorie: this.addCategorie,
          addBlockchain: this.addBlockchain,
          title_add_article: this.title_add_article,
          description_add_article: this.description_add_article,
          price_add_article: this.price_add_article,
        }).then((e) => {
          this.addLocation = ''
          this.addCategorie = ''
          this.addBlockchain =  ''
          this.title_add_article = ''
          this.description_add_article = ''
          this.price_add_article= ""
        })
      },
  }
}
</script>

<style>
  .main_block {
    background-color: #FFFFFF;
    border-radius: 20px;
    width: -webkit-fill-available;
    margin: 10px;
  }
</style>
