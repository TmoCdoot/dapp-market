<template>
  conv
</template>

<script>
import TopBlockComponent from '../components/TopBlockComponent.vue'
import UserMessageComponent from '../components/UserMessageComponent.vue'
import ConversationComponent from '../components/ConversationComponent.vue'

export default {
  components: {
    TopBlockComponent,
    UserMessageComponent,
    ConversationComponent,
  },
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
    /*border: 1px solid green;*/
    margin: 0px 30px;
  }

  .left_block {
    border: 2px solid #F2F2F2;
    border-radius: 30px;
    height: 600px;
    width: 200px;
    overflow: hidden;
    /* background-color: red;*/
  }
  .top_right_block {
    border: 2px solid #F2F2F2;
    border-radius: 30px;
    width: 1000px;
    height: 240px;
    /* background-color: gray; */
    margin: 0px 0px 10px 10px;
  }
  .bottom_right_block {
    border: 2px solid #F2F2F2;
    border-radius: 30px;
    width: 1000px;
    height: 346px;
    /* background-color: green; */
    margin: 0px 0px 0px 10px;
  }
  .message_block {
    height: 85%;
    overflow-y: scroll;
  }
  .conversation_send_message img {
    width: 20px;
  }
  .conversation_send_message {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 15%;
    margin-right: 20px;
  }
  .text_send {
    background: #F2F2F2;
    border-radius: 15px;
    padding: 5px 10px 5px 150px;
    font-weight: 400;
    font-size: 14px;
  }
  .button_send {
    background: #3966F6;
    border-radius: 20px;
    font-weight: 300;
    font-size: 14px;
    padding: 5px 15px;
    color: white;
  }
</style>
