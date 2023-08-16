<template>
    <ItemSaleComponent v-for="value in data" :key="value" 
      :title="value.product_sell_title" :city="value.product_sell_city" :county="value.product_sell_county" :price_crypto="value.product_sell_price" :metadata="value.product_sell_metadata"/>
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
  .main_block {
    background-color: #FFFFFF;
    border-radius: 20px;
    width: -webkit-fill-available;
    margin: 10px;
  }

  .middle_top_block {
    display: flex;
    flex-direction: row;
    /* border: 1px solid green; */
    margin: 30px 30px;
  }

  .middle_bottom_block {
    display: flex;
    flex-direction: row;
    margin: 20px 30px;
    border: 2px solid #F2F2F2;
    border-radius: 30px;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
  }
  .middle_bottom_block > div span {
    background: #EEF0F4;
    border-radius: 20px;
    padding: 10px 15px;
    width: 250px;
    font-weight: 400;
    font-style: italic;
    font-size: 12px;
    color: #a1a1a1;
    display: flex;
    justify-content: space-between;
  }
  .middle_bottom_block > div img {
    width: 15px;
  }
  .search_block {
    display: flex;
  }
  .search_block div {
    margin-left: 10px;
  }

  .bottom_block {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 30px;
    border: 2px solid #F2F2F2;
    border-radius: 30px;
    padding: 15px;
    justify-content: space-between;
  }
  .bottom_block p {
    font-weight: 400;
    font-size: 12px;
  }
  .bottom_block span {
    font-weight: 700;
    display: flex;
    font-size: 17px;
    align-items: center;
  }
  .bottom_block div span img {
    width: 25px;
    margin-right: 10px;
  }
  .contact_button {
    font-weight: 300 !important;
    font-size: 16px !important;
    background: #3966F6;
    border-radius: 20px;
    padding: 8px 30px;
    color: #ffffff;
  }
  .bottom_block li {
    font-weight: 300;
    font-size: 14px;
    color: #878787;
    margin: 3px;
  }
  .bottom_block ul {
    list-style: none;
    margin: 0;
  }
  .list_name {
    font-weight: 700 !important;
    font-size: 17px !important;
    color: #000000 !important;
  }
  .info_block {
    display: flex;
  }
</style>
