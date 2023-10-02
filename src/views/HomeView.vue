<template>
  <div class="registerModal" :style="{'display': [newAccount ? isActive : 'none']}">
    <div>
      <input type="text" v-model="registerName" placeholder="Your name">
  
      <input type="email" v-model="registerMail" placeholder="Your email"> 
      
      <button @click="newRegister">register</button>
      <button @click="closeRegister"> close</button>
    </div>
  </div>
  

  <div>
    <input type="search" v-model="searchText" placeholder="recherche">

    <select v-model="searchFilter" required>
      <option v-for="value in categoryJson" :value="value.category_id">{{value.category_title}}</option>
    </select>

    <input type="text" v-model="searchPrixMin" placeholder="prix min">
    <input type="text" v-model="searchPrixMax" placeholder="prix max">

    <select v-model="searchLocation">
      <option v-for="value in departmentJson" :value="value.departement_num">{{value.departement_num}} -
        {{value.departement_region}}</option>
    </select>

    <select v-model="searchBlockchain">
      <option v-for="value in blockchainJson" :value="value.blockchain_id">{{value.blockchain_name}}</option>
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
        <option v-for="value in categoryJson" :value="value.category_id">{{value.category_title}}</option>
      </select>
  
      <select v-model="addBlockchain" required>
        <option v-for="value in blockchainJson" :value="value.blockchain_id">{{value.blockchain_name}}</option>
      </select>
  
      <button @click="addArticle">add article</button>
    </form>
    
  </div>

  <div>
    <button @click="tryConnect">{{ statProfil }}</button>
    <button v-if="statProfil == 'Profil'" @click="disconnectConnectedWallet(); disconnect();">Disconnect</button>
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
  import { useOnboard } from '@web3-onboard/vue'
  import ItemSaleComponent from '../components/ItemSaleComponent.vue'
  import { mapState } from 'vuex'

  export default {
    setup() {
          const { connectWallet, alreadyConnectedWallets, wallets, disconnectConnectedWallet } = useOnboard()
  
          const connect = async () => connectWallet()
          return { connect, alreadyConnectedWallets, wallets, disconnectConnectedWallet}
    },
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
        statProfil: 'Login / Register'

      }
    },
    components: {
      ItemSaleComponent
    },
    computed: {
      ...mapState(['sellProduct', 'departmentJson', 'produitCount', 'blockchainJson', 'categoryJson']),
    },
    methods: {
      tryConnect: function () {
        //deja connecter
        if (this.alreadyConnectedWallets.length != 0 ) {
          //obtenir l'adresse du wallet donc go page profil
          console.log('deja co')
          console.log(this.$store.state.user)
        } else {
          this.connect().then(() => {
            //modal qui permet à l'user de se crée un compte
            this.$store.dispatch('checkUser', {key: this.wallets[0].accounts[0].address}).then((e) => {
              if (e == false) {
                //user pas de compte
                this.newAccount = true
              } else {
                //user a un compte
                this.statProfil = 'Profil'
              }
            })
          })
        }
      },
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
      disconnect: function () {
        this.statProfil = 'Login / Register'
        this.$store.state.user.id = ''
        this.$store.state.user.key = ''
        this.$store.state.user.email = ''
        this.$store.state.user.name = ''
        this.$store.state.user.metadata = {}
      },

    },
    name: 'HomeView',
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 15px;
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
</style>