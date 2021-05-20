<template>
    <div id="app">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link>
      </div> -->
      <main>
        <router-view />
      </main>
      
    </div>
</template>

<style lang="scss">

// @font-face{
//     font-family: Roboto;
//     src:url("./assets/font/Roboto-Regular.ttf");
//     font-weight: 400;
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // font-family:Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
}
main{
  max-width: 1536px;
  margin: 0 auto;
  display: block;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
