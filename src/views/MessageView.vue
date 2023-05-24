<template>
  <div class="main_block">
    <TopBlockComponent title="Message" subtitle="Conversations with sellers or buyers"/>
    <div class="middle_top_block">
      <div class="left_block">
        <UserMessageComponent name="DD Michel" registerYear="2019" selected="true"/>
        <UserMessageComponent name="Yohan D" registerYear="2019" selected="false"/>
      </div>
      <div class="right_block">
        <div class="top_right_block">
          <div class="message_block">
            <ConversationComponent type="to" message="Hi, I contact you to find out if your house is still available?" send="true" open="true"/>
            <ConversationComponent type="from" message="Hi, yes still available" send="true" open="true"/>
            <ConversationComponent type="to" message="I would like to know if it would be possible to come and visit it?" send="true" open="false"/>
            <ConversationComponent type="to" message="Does the house have work to do?" send="false" open="false"/>
            <ConversationComponent type="from" message="Hi, yes still available" send="true" open="true"/>
            <ConversationComponent type="to" message="I would like to know if it would be possible to come and visit it?" send="true" open="false"/>
            <ConversationComponent type="to" message="Does the house have work to do?" send="false" open="false"/>
            <ConversationComponent type="from" message="Hi, yes still available" send="true" open="true"/>
            <ConversationComponent type="to" message="I would like to know if it would be possible to come and visit it?" send="true" open="false"/>
            <ConversationComponent type="to" message="Does the house have work to do?" send="false" open="false"/>
          </div>
          <div class="conversation_send_message">
            <span class="text_send">I want to eat our face ?</span>
            <img src="../assets/trombone.png" alt="">
            <span class="button_send">Send</span>
          </div>
          
        </div>
        <div class="bottom_right_block">
          
        </div>
      </div>
    </div>
  </div>
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
