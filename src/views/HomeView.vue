<template>

  <div class="main_block">
    <TopBlockComponent title="Last sales" subtitle="Tracking lastr add's on shop"/>

    <div class="grid-content">
      <ItemSaleComponent v-for="value in sellProduct" :key="value" :title="value.product_sell_title"
        :city="value.product_sell_city" :county="value.product_sell_county" :price_crypto="value.product_sell_price"
        :metadata="value.product_sell_metadata" />
    </div>

    <div class="middle_bottom_block">
      <span class="title_big">Find your object</span>
      <div class="search_block">
        <div>
          <input type="search" v-model="searchText" placeholder="Livre, voiture ...">
          <input type="text" v-model="searchPrixMin" placeholder="prix min">
          <input type="text" v-model="searchPrixMax" placeholder="prix max">
          <button @click="searchRequest" class="send_button">Rechercher</button>
        </div>
        <div>
          <select v-model="searchFilter" required>
            <option v-for="value in categoryJson" :value="value.category_id">{{value.category_title}}</option>
          </select>
          <select v-model="searchLocation">
            <option v-for="value in departmentJson" :value="value.departement_num">{{value.departement_num}} -
              {{value.departement_region}}</option>
          </select>
          <select v-model="searchBlockchain">
            <option v-for="value in blockchainJson" :value="value.blockchain_id">{{value.blockchain_name}}</option>
          </select>
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


  <!-- modal pour s'inscire sur lme site -->
  <div class="registerModal" :style="{'display': [newAccount ? isActive : 'none']}">
    <div>
      <input type="text" v-model="registerName" placeholder="Your name">
  
      <input type="email" v-model="registerMail" placeholder="Your email"> 
      
      <button @click="newRegister">register</button>
      <button @click="closeRegister"> close</button>
    </div>
  </div>
  
  <!-- filtre des recherche -->
<!--   <div> -->
    <!-- <input type="search" v-model="searchText" placeholder="recherche"> -->

    <!-- <select v-model="searchFilter" required>
      <option v-for="value in categoryJson" :value="value.category_id">{{value.category_title}}</option>
    </select> -->

    <!-- <input type="text" v-model="searchPrixMin" placeholder="prix min">
    <input type="text" v-model="searchPrixMax" placeholder="prix max"> -->

    <!-- <select v-model="searchLocation">
      <option v-for="value in departmentJson" :value="value.departement_num">{{value.departement_num}} -
        {{value.departement_region}}</option>
    </select>

    <select v-model="searchBlockchain">
      <option v-for="value in blockchainJson" :value="value.blockchain_id">{{value.blockchain_name}}</option>
    </select> -->

    <!-- <button @click="searchRequest">send</button> -->
  <!-- </div> -->

 <!--   ajout article-->
  <!-- <div>
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
    
  </div> -->
  

  <!-- pagination -->
  <!-- <div v-if="produitCount > 10">
    <button @click="nextPage">Next page</button>
    <button @click="previousPage">Previous page</button>
  </div> -->
</template>

<script>
  import { useOnboard } from '@web3-onboard/vue'
  import ItemSaleComponent from '../components/ItemSaleComponent.vue'
  import TopBlockComponent from '../components/TopBlockComponent.vue'
  import { mapState } from 'vuex'

  export default {
    setup() {
          const { connectWallet, alreadyConnectedWallets, wallets, disconnectConnectedWallet } = useOnboard()
  
          const connect = async () => connectWallet()
          return { connect, alreadyConnectedWallets, wallets, disconnectConnectedWallet}
    },
    name: 'HomeView',
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

        registerName: '',
        registerMail: '',
        newAccount: false,
        isActive: "initial",

      }
    },
    components: {
      ItemSaleComponent,
      TopBlockComponent
    },
    computed: {
      ...mapState(['sellProduct', 'departmentJson', 'produitCount', 'blockchainJson', 'categoryJson']),
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
      closeRegister: function () {
        this.newAccount = false
      },
      newRegister: function () {
        this.$store.dispatch('createNewRegister', {
          name: this.registerName,
          email: this.registerMail,
          prvkey: this.wallets[0].accounts[0].address 
        }).then((e) => {
          if (e) {
            this.$store.dispatch('checkUser', {key: this.wallets[0].accounts[0].address}).then((e) => {
              if (e == false) {
                //erreur lors de l'inscription
              } else {
                this.newAccount = false
                this.statProfil = 'Profil'
              }
            })
            
          }
        })
      },

    },

    created: function() {
      if (localStorage.getItem('onboard.js:last_connected_wallet') != '[]') {
        console.log("user connecter")
        this.statProfil = 'Profil'
        console.log(this.wallets)
      }
    },
    beforeMount() {
      this.$store.dispatch('getSellProductByLastAdd')
      this.$store.dispatch('getDepartement')
      this.$store.dispatch('getBlockchain') 
      this.$store.dispatch('getCategory')
    }
  }
</script>

<style>
  .grid-content {
    width: 100%;
    display: grid !important;
    grid-template-columns: repeat(5, minmax(250px, 1fr));
    grid-gap: 15px;
    justify-items: center;
  }

  .registerModal > div {
    background-color: red;
    position: absolute;
    padding: 30px 20px;
    left: 100px;
    top: 200px;
    display: flex;
    flex-direction: column;
  }
  .registerModal {
    position: absolute;
    background-color: #1f1e1dd6;
    width: 100%;
    height: 100%;
    display: none;
  }

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
    flex-direction: column;
    width: -webkit-fill-available;
  }
  .search_block div {
    display: flex;
    justify-content: flex-start;
  }
  .search_block select {
    background: #EEF0F4;
    border-radius: 20px;
    padding: 10px 15px;
    width: 250px;
    font-weight: 400;
    font-style: italic;
    font-size: 12px;
    color: #000000;
    display: flex;
    justify-content: space-between;
    border: none;
    margin-inline: 5px;
  }
  .search_block input {
    background: #EEF0F4;
    border-radius: 20px;
    padding: 10px 15px;
    width: 220px;
    font-weight: 400;
    border: none;
    font-style: italic;
    font-size: 12px;
    color: #000000;
    display: flex;
    margin: 5px;
    justify-content: space-between;
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
  .send_button {
    height: 35px;
    font-weight: 300 !important;
    font-size: 16px !important;
    background: #3966F6;
    border-radius: 20px;
    padding: 8px 30px;
    color: #ffffff;
    border: none;
    font-family: Sofia, SofiaItalic, Helvetica, Arial, sans-serif;
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