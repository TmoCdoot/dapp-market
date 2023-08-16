<template>
    conv
</template>

<script>
    export default {
        props: {
            type: String,
            message: String,
            send: String,
            open: String
        },
        data: function () {
            return {
                isOpen: this.open,
                isSend: this.send,
                isType: this.type,
            }
        },
    }
</script>

<style>
    .conversation {
       /* border: 1px solid red;*/
        display: flex;
        align-items: center;
        margin: 7px 10px;
    }
    .conversation_message_to {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .conversation_message_to img {
        width: 15px !important;
        position: sticky;
        margin-top: -7px;
        margin-right: 7px;
    }
    .conversation_message_from img {
        width: 15px !important;
        position: sticky;
        margin-top: -7px;
        margin-left: 7px;
    }
    .conversation_message_from {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .conversation img {
        width: 30px;
        border-radius: 100%;
    }
    .conversation span {
        background: #F2F2F2;
        border-radius: 20px;
        font-weight: 400;
        font-size: 14px;
        padding: 5px 10px;
        margin: 0px 10px;
    }
    .to {
        justify-content: flex-end;
    }
    .from {
        justify-content: flex-start;
    }
</style>