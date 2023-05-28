import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { init } from '@web3-onboard/vue'
import injectedModule from '@web3-onboard/injected-wallets'
import ledgerModule from '@web3-onboard/ledger'


const infuraKey = '<INFURA_KEY>'
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

//déclaration des modules de wallets

const injected = injectedModule()
const ledger = ledgerModule()

const web3Onboard = init({
  wallets: [injected, ledger],
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

createApp(App).use(store).use(router).mount('#app')
