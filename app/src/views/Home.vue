<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Main />
    <UserList />
    <ChatBox/>
    <Profile />
  </div>
</template>

<script>

// @ is an alias to /src
import Main from '@/components/Main.vue';
import UserList from '@/components/UserList.vue';
import ChatBox from '@/components/ChatBox.vue';
import Profile from '@/components/Profile.vue';
export default {
  name: "Home",
  components: {
    Main,
    UserList,
    ChatBox,
    Profile,
  },
  methods:{
    closeOverlay(){
      document.body.style.backgroundColor="blue";
      var Home = document.querySelector(".home")
      Home.style.backgroundColor="red";
    }
  }
};

</script>

<style lang="scss">
  @import '../design';

  *{
    margin: 0;
    box-sizing: border-box;
  }
  .home{
    display: flex;
    transform: translateX(0%);
    transition: transform .1s ease ;
  }
  .overlay{
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    position: fixed;
    top: 0;
    left: 28%;
    transition-delay: .2s;
  }
  .overlay__ClickArea{
    height: 100%;
  }

  .hide{
    display: none;
     @include above('tablet'){
       display: block;
     }
  }

  // .desktop-hide{
  //   display: none;
  // }
  
</style>