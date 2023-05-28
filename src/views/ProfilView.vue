<template>
    profil
    <button type="button" @click="disconnectConnectedWallet">Disconnect MetaMask</button>
</template>

<script>
    import {useOnboard} from '@web3-onboard/vue'

    export default {
        setup() {
            const { disconnectConnectedWallet } = useOnboard()
            return { disconnectConnectedWallet }
        }
     }

</script>
