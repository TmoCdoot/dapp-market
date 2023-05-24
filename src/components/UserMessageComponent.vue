<template>
    <div class="user_message" :class="{selected: selected == 'true'}">
        <img src="../assets/user1.jpeg" alt="">
        <div class="user_message_info">
            <div class="user_message_name">
                {{ name }}
            </div>
            <div class="user_message_register">
                Registered {{ registerYear }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        registerYear: String,
        selected: String,
    }
}
</script>

<style>
.user_message {
    /*border: 1px solid green;*/
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
}
.user_message img {
    width: 50px;
    border-radius: 100%;
    box-shadow: 0px 3px 11px 1px rgba(0, 0, 0, 0.25);
}
.user_message_name {
    font-weight: 700;
    font-size: 16px;
}
.user_message_register {
    font-weight: 400;
    font-size: 12px;
    color: #878787;
}
.selected {
    background-color: #F2F2F2;
}
</style>