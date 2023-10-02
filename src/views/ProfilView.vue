<template>
    profil
    <button type="button" @click="disconnectConnectedWallet(); disconnect();">Disconnect MetaMask</button>
</template>

<script>
    import {useOnboard} from '@web3-onboard/vue'

    export default {
        setup() {
            const { disconnectConnectedWallet } = useOnboard()
            return { disconnectConnectedWallet }
        },
        methods: {
            disconnect: function () {
                this.$store.state.user.statutLogin = false
                this.$store.state.user.id = ''
                this.$store.state.user.key = ''
                this.$store.state.user.email = ''
                this.$store.state.user.name = ''
                this.$store.state.user.metadata = {}
            },
        }
     }

</script>
