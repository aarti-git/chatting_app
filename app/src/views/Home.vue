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
  }
  
  // .home {
  //   background-color: color('dark-orange');

  //   @include above('tablet') {
  //     background-color: color('light-red');
  //   }
  // }
</style>