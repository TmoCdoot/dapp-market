<template>
  <nav>
    <router-link to="/" v-on:click="page == home">
      <img src="../src/assets/logo_test.png" alt="" >
    </router-link>

    <div class="nav_link">
      <router-link to="/" class="a_link" v-on:click="page == home">
        <img src="../src/assets/home.png" alt="">
      </router-link>
      <router-link to="/add" class="a_link" v-on:click="page == add">
        <img src="../src/assets/box.png" alt="">
      </router-link>
      <router-link to="/like" class="a_link" v-on:click="page == like">
        <img src="../src/assets/like.png" alt="">
      </router-link>
      <router-link to="/message" class="a_link" v-on:click="page == message">
        <img src="../src/assets/tchat.png" alt="">
      </router-link>
    </div>

    <div class="nav_link">
      <img v-if="this.$store.state.user.statutLogin == false" src="../src/assets/user.png" class="img_connect_wallet" @click="tryConnect">
      <router-link to="/profil" v-else>
        <img src="../src/assets/user1.jpeg" class="img_connect_wallet">
      </router-link>
      
      <!-- <button v-if="statProfil == 'Profil'" @click="disconnectConnectedWallet(); disconnect();">Disconnect</button> -->

      <router-link to="/param" class="a_link">
        <img src="../src/assets/parametres.png" alt="">
      </router-link>
    </div>
    {{ page }}
  </nav>
  <router-view/>
</template>

<script>
  import { useOnboard } from '@web3-onboard/vue'
  import { mapState } from 'vuex'

export default {
    setup() {
            const { connectWallet, alreadyConnectedWallets, wallets} = useOnboard()
    
            const connect = async () => connectWallet()
            return { connect, alreadyConnectedWallets, wallets}
      },
    data: function () {
        return {
          page: "",
        }
    },
    computed: {
      ...mapState(['statutLogin']),
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
                this.$store.state.user.statutLogin = true
              }
            })
          })
        }
      },
    },
    created: function() {
      if (localStorage.getItem('onboard.js:last_connected_wallet') != '[]') {
        console.log("user connecter")
        this.$store.state.user.statutLogin = true
        console.log(this.wallets)
      }
    },
  }
</script>

<style>
  @font-face {
    font-family: Sofia;
    src: url(assets/fonts/SofiaSans-VariableFont_wght.ttf);
  }
  
  @font-face {
    font-family: SofiaItalic;
    src: url(assets/fonts/SofiaSans-Italic-VariableFont_wght.ttf);
  }
  
  html,body {
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
  
  
  
  #app {
    font-family: Sofia, SofiaItalic, Helvetica, Arial, sans-serif;
    display: flex;
    background-color: #F2F2F4;
  }
  
  nav {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100vh;
    align-items: center;
    padding: 0px 10px;
    justify-content: space-around;
  }
  
  /* router selected */
  nav a.router-link-exact-active {
    color: #42b983;
  }
  
  .nav_link {
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    padding: 10px 10px 0px 10px;
    border-radius: 20px;
  }
  
  nav img {
    width: 30px;
  }
  .a_link {
    background: #FEFEFE;
    box-shadow: 0px 3px 11px 1px rgb(0 0 0 / 25%);
    border-radius: 15px;
    padding: 12px;
    display: flex;
    margin-bottom: 10px;
  }
  
  .img_connect_wallet {
    background: #FEFEFE;
      box-shadow: 0px 3px 11px 1px rgb(0 0 0 / 25%);
      border-radius: 15px;
      padding: 12px;
      display: flex;
      margin-bottom: 10px;
      cursor: pointer;
  }
  </style>
