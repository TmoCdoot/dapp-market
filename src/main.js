import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import { init } from '@web3-onboard/vue'
import injectedModule from '@web3-onboard/injected-wallets'
import ledgerModule from '@web3-onboard/ledger'

const infuraKey = '<d27b46b0e03a4571a6c20c5fde434d20>'
const rpcUrl = `https://mainnet.infura.io/v3/5305840bb5e942aeb9c11f091be583b7`

//déclaration des modules de wallets

const injected = injectedModule()
//const ledger = ledgerModule()

init({
  wallets: [injected /* ledger */],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl
    },
    {
        id: '0x38',
        token: 'BNB',
        label: 'Binance',
        rpcUrl: 'https://bsc-dataseed.binance.org/'
    },
    {
        id: '0xAA36A7',
        token: 'ETH',
        label: 'Sepolia Testnet',
        rpcUrl: 'https://eth-sepolia.g.alchemy.com/v2/TGkdEWHs3Ll2x9B3ddu3AI6z44jTIquE'
      },
  ],
  accountCenter: {
    desktop: {
      position: 'topRight',
      enabled: true, // pour activer ou desactiver la pop a droit
      minimal: true
    }
  },
  connect: {
    autoConnectLastWallet: true
  }
})

createApp(App).use(store).use(router).use(VueAwesomePaginate).mount('#app')
