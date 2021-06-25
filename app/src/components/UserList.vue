<template>
    <div class="user-list">
        <div class="user-list__wrapper">
            <div>
                <div class="user-list__title">
                    <div class="user-list__title-text-wrapper" @click="openAside">
                        <IconButton class="user-list__menu-icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path>
                            </svg>
                        </IconButton>
                        <span class="user-list__title-text">Chats</span>
                    </div>
                    <div class="side-to-side">
                        <div @click="openGroupOverlay()">
                            <IconButton>
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user-friends" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-user-friends fa-w-20 fa-2x">
                                    <path fill="currentColor" d="M480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm0-144c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM272.1 276c-11.9 0-23.9 1.7-35.5 5.3-14.2 4.3-29.1 6.7-44.7 6.7s-30.5-2.4-44.7-6.7c-11.6-3.5-23.6-5.3-35.5-5.3-36.3 0-71.6 16.2-92.3 46.9C7.2 341.3 0 363.4 0 387.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM336 432H48v-44.8c0-28.9 18.4-53.6 44.1-63.1 10.3-3.8 21.6-3.7 31.9 0 22.1 7.9 45 11.9 68 11.9s45.8-4 68.1-11.9c10.3-3.7 21.6-3.8 31.9 0 25.7 9.4 44.1 34.2 44.1 63.1V432zM192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm0-176c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm431.7 237.1C606.4 291.5 577 278 546.8 278c-27.8 0-34.8 10-66.8 10s-39-10-66.8-10c-13.3 0-26.2 3-38.2 8.1 5.8 5.9 11.3 12 16 18.9 4.7 7 8.6 14.4 12 22 3.3-.7 6.7-1.1 10.2-1.1 17.2 0 29.6 10 66.8 10 37.4 0 49.5-10 66.8-10 15.7 0 29.5 6.7 37.1 17.9 5.3 7.9 8.1 17.1 8.1 26.7V400H416v32c0 5.5-.6 10.8-1.6 16H600c22.1 0 40-17.9 40-40v-37.3c0-19.9-6-38.3-16.3-53.6z"></path>
                                </svg>
                            </IconButton>
                            <div v-if="showGroupOverlay" class="user-list__addgroup-overlay">
                                <AddGroup @close="showGroupOverlay = false"/>
                            </div>
                        </div>
                        <div @click="openFriendOverlay()">
                            <IconButton>
                                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z" class=""></path>
                                </svg>
                            </IconButton>
                            <div v-if="showFriendOverlay" class="user-list__addgroup-overlay">
                                <AddFriends @close="showFriendOverlay = false"/>
                            </div>
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
    </div>
</template>

<script>
    import ChatItem from "./ChatItem.vue";
    import IconButton from './global/IconButton';
    import AddGroup from './AddGroup.vue';
    import AddFriends from './AddFriends.vue';
    export default {
        name: "UserList",
        components:{
            ChatItem,
            IconButton,
            AddGroup,
            AddFriends,
        },
        data(){
            return{
                showGroupOverlay:false,
                showFriendOverlay:false
            }
        },
        methods:{
            openAside(){
                var home = document.querySelector(".home");
                home.style.transform="translateX(100px)";
                var creatEl = document.createElement("div");
                creatEl.innerHTML= `<div class="overlay__ClickArea" onclick="closeOverlay()"></div>`
                creatEl.classList.add("overlay");
                document.body.append(creatEl);
            },
            openGroupOverlay(){
                this.showGroupOverlay = true;
            },
            openFriendOverlay(){
                this.showFriendOverlay = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../design";

    .user-list{
        width: 100%;
        @include above('tablet'){
            width: 300px;
        }  
        @include above('desktop'){
            width: 350px;
        }  
    }
    .user-list__wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
        border-right:1px solid var(--border-color);
    }
    .user-list__menu-icon{
        @include above('tablet-large'){
            display: none;
        }
    }
    .user-list__title{
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 20px 30px;

        @include above('tablet'){
            padding: 20px;
        }
        @include above('desktop'){
            padding: 20px 30px;
        }

    }
    .user-list__title-text-wrapper{
        display: flex;
        align-items: center;
    }
    .user-list__title-text{
       font-size: 20px;
       font-weight: 600; 
       margin-left: 10px;
       color: var(--color2);
       @include above('desktop'){
            font-size: 23px;
            margin-left: 0px;
        }
    }
    .user-list__search-wrapper{
        padding: 20px 30px;
         @include above( 'tablet'){
            margin-bottom: 10px;
            padding: 30px 20px;
         }
         @include above('desktop'){
             padding: 30px;
         }
    }
    .user-list__svg-parent{
        width: 45px;
        height: 35px;
        border: 1px solid var(--border-color);
        margin: 0 3px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;    
    }
    .user-list__search-input{
        width: 100%;
        height: 35px;
        font-size: 13px;
        border-radius: 5px;
        padding: 2px 10px;
        outline: none;
        border: 1px solid var(--border-color);
        text-transform: capitalize;
         @include above( 'tablet'){
             height: 40px;
             font-size: 15px;
         }
    }
    .side-to-side{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }
    .user-list__chat-item-wrapper{
        width: 100%;
        overflow: auto;
        flex: 1 1 100%;
    }
    .user-list__chat-item-wrapper::-webkit-scrollbar{
        display: none;
    }
    // .user-list__teleport-controller{
    //     display: none;
    //     width: 100%;
    //     height: 100%;
    // }
    .user-list__addgroup-overlay{
        position: absolute;
        top: 0;
        right: 0; 
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.6);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

</style>