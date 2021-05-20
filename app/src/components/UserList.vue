<template>
    <div class="user-list__wrapper">
        <div>
            <div class="user-list__title">
                <span class="user-list__title-text">Chats</span>
                <div class="side-to-side">
                        <div class="user-list__svg-parent">
                            <svg class="user-list__svg-icons" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-friends" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path fill="currentColor" d="M480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm0-160c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm80.1 212c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9C7.2 341.3 0 363.4 0 387.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM352 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zm271.7-114.9C606.4 291.5 577 278 546.8 278c-27.8 0-34.8 10-66.8 10s-39-10-66.8-10c-13.2 0-26.1 3-38.1 8.1 15.2 15.4 18.5 23.6 20.2 26.6 5.7-1.6 11.6-2.6 17.9-2.6 21.8 0 30 10 66.8 10s45-10 66.8-10c21 0 39.8 9.3 50.4 25 7.1 10.5 10.9 22.9 10.9 35.7V408c0 4.4-3.6 8-8 8H416c0 17.7.3 22.5-1.6 32H600c22.1 0 40-17.9 40-40v-37.3c0-19.9-6-38.3-16.3-53.6z"></path>
                            </svg>
                        </div>
                        <div class="user-list__svg-parent">
                            <svg class="user-list__svg-icons" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z" class=""></path>
                            </svg>
                        </div>
                    </div>
            </div>
            <div class="user-list__search-wrapper">
                <input type="text" placeholder="Search Chats" class="user-list__search-input"/>
            </div>
        </div>
        <div class="user-list__chat-item-wrapper">
            <ChatItem v-for="i in 10" :key="i"/>
        </div>
    </div>
</template>

<script>
    import ChatItem from "./ChatItem.vue";

    export default {
        name: "UserList",
        components:{
            ChatItem,
        }
    }
</script>

<style lang="scss" scoped>
    @import "../design";

    .user-list__wrapper{
        width: 350px;
        display: flex;
        flex-direction: column;
        height: 100vh;
        border-right:1px solid color('light-grey');
    }
    .user-list__title{
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 30px;
    }
    .user-list__title-text{
       font-size: 23px;
       font-weight: 600; 
    }
    .user-list__search-wrapper{
        padding: 30px;
        margin-bottom: 10px;
    }
    .user-list__svg-parent{
        width: 45px;
        height: 35px;
        border: 1px solid color('light-grey');
        margin: 0 3px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;    
    }
    .user-list__search-input{
        width: 100%;
        height: 40px;
        font-size: 15px;
        border-radius: 5px;
        padding: 2px 10px;
        border: 1px solid color('light-grey');
        text-transform: capitalize;
    }
    .side-to-side{
        display: flex;
    }
    .user-list__svg-icons{
        width: 16px;
        height: 16px;
    }
    .user-list__chat-item-wrapper{
        width: 100%;
        overflow: auto;
        flex: 1 1 100%;
    }
    .user-list__chat-item-wrapper::-webkit-scrollbar{
        display: none;
    }
</style>