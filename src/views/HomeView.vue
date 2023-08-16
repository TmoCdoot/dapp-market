<template>
  <div class="grid-content">
    <ItemSaleComponent v-for="value in data" :key="value" 
    :title="value.product_sell_title" :city="value.product_sell_city" :county="value.product_sell_county" :price_crypto="value.product_sell_price" :metadata="value.product_sell_metadata"/>
  </div>
</template>

<script>
import TopBlockComponent from '../components/TopBlockComponent.vue'
import ItemSaleComponent from '../components/ItemSaleComponent.vue'
import { mapState } from 'vuex'

export default {
  components: {
    TopBlockComponent,
    ItemSaleComponent
  },
  computed: {
      ...mapState(['data']),
    },
  name: 'HomeView',
  beforeMount() {
    this.$store.dispatch('getSellItem')
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
