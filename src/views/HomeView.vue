<template>
 <div class="main_block">
  <TopBlockComponent title="Last sales" subtitle="Tracking lastr add's on shop"/>
  <div class="middle_top_block">
    <ItemSaleComponent title="Tiny house" location="Seatle, Nevada" price_crypto="156,45 Eth" price_fiat="156.486,99 $" type="sale"/>
  </div>
  <div class="middle_bottom_block">
    <span class="title_big">Find your object</span>
    <div class="search_block">
      <div>
        <span>
          Category
          <img src="../assets/down-arrow.png" alt="">
        </span>
      </div>
      <div>
        <span>
          Location
          <img src="../assets/down-arrow.png" alt="">
        </span>
      </div>
    </div>
  </div>
  <div class="bottom_block">
    <div>
      <span>
        <img src="../assets/logo_test.png" alt=""> 
        D_Market
      </span>
      <p>It was popularised in the 1960s with <br>
        the release of Letraset sheets containing <br>
        Lorem Ipsum passages, and more recently with desktop <br>
        publishing software like Aldus PageMaker including <br>
        versions of Lorem Ipsum.</p>
    </div>
    <span class="contact_button">Contact Us</span>
    <div class="info_block">
      <div>
        <ul>
          <li class="list_name">Company</li>
          <li>Sell rules</li>
          <li>Buyer protection</li>
          <li>Litige service</li>
          <li>Whitepaper</li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="list_name">Service</li>
          <li>Last news</li>
          <li>Release details</li>
        </ul>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import TopBlockComponent from '../components/TopBlockComponent.vue'
import ItemSaleComponent from '../components/ItemSaleComponent.vue'

export default {
  components: {
    TopBlockComponent,
    ItemSaleComponent
  },
  name: 'HomeView',
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
