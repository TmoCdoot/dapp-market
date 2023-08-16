<template>
  <div class="main_block">
    <TopBlockComponent title="Buy history" subtitle="Purchase history"/>
    <div class="middle_top_block">
      <ItemSaleComponent title="Tiny house" location="Seatle, Nevada" price_crypto="156,45 Eth" price_fiat="156.486,99 $" type="purchase"/>
      <ItemSaleComponent title="450 Exc" location="Paris, France" price_crypto="2,45 Eth" price_fiat="2.458 $" type="purchase"/>
    </div>
  </div>
</template>

<script>
import TopBlockComponent from '../components/TopBlockComponent.vue'
import ItemSaleComponent from '../components/ItemSaleComponent.vue'

export default {
  components: {
    TopBlockComponent,
    ItemSaleComponent,
  },
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
