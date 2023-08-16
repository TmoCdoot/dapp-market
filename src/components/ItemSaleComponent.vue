<template>
    <div class="item">
        <div class="item_top_block">
          <img src="../assets/house.png" alt="">
          <div class="item_title_box">
            <span class="item_title">
              {{ title }}
              <img src="../assets/like.png" alt="">
            </span>
            <span class="item_location">{{ city }}, {{ county }}</span>
          </div>
          <div class="item_price_box">
            <div>
              <span class="item_price_crypto">{{ price_crypto }}</span>
              <span class="item_price_fiat">32.232 €</span>
            </div>
            <img src="../assets/ETH.png" alt="">
          </div>
        </div>
        <div class="item_view" v-if="typeView == 'sale'">
          <span>View sale</span>
        </div>
        <div v-else class="item_view">
          <span>View purchase</span>
        </div>
      </div>
</template>

<script>
  export default {
    props : {
      metadata: Object,
      title: String,
      city : String,
      county: String,
      price_crypto: String,
    },
    data: function () {
      return {
        typeView: this.type,
      }
    },
  }
</script>

<style>
 .item {
    background: #FFFFFF;
    box-shadow: 0px 1px 9px 0px rgb(0 0 0 / 25%);
    border-radius: 20px;
    margin-right: 20px;
    height: fit-content;
  }
  .item_top_block {
    margin: 20px 20px 0px 20px;
  }
  .item_top_block img {
    border-radius: 15px;
  }
  .item_title_box {
    display: flex;
    flex-direction: column;
    padding: 5px 0px;
    border-bottom: 2px solid #EBEBEB;
  }
  .item_title {
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item_title img {
    width: 20px;
    height: 20px;
    border-radius: 0px !important;
  }
  .item_location {
    font-weight: 400;
    font-size: 10px;
    color: #5b5b5b;
  }
  .item_price_box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 0px;
    align-items: center;
  }
  .item_price_box div {
    display: flex;
    flex-direction: column;
  }
  .item_price_crypto {
    font-weight: 800;
    font-size: 16px;
  }
  .item_price_fiat {
    font-weight: 400;
    font-size: 10px;
    color: #5b5b5b;
  }
  .item_price_box img {
    width: 20px;
    height: 20px;
  }
  .item > img {
    border-radius: 15px;
  }
  .item_view {
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, #3A6AF4 0%, #3D94E7 100%);
    border-radius: 0px 0px 20px 20px;
    height: 50px;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
  }
</style>