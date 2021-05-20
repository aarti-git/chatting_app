<template>
  <div>
      <!-- event -->
      <button v-on:click="clickEvent" >Click Event Call</button>
      <!-- condition -->
      <p v-if="show">if conditional rebdering in vue.js</p>
      <p v-else>else conditional rebdering in vue.js</p>
      <button v-on:click="display" >toggle</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  // props: {
  //   message: String,
  // },
  methods:{
    clickEvent(){
      console.log("hii.. im click event")
    },
    display(){
      this.show = !this.show
    }

  },
  data(){
    return {show:true}
  }
   
};
</script>