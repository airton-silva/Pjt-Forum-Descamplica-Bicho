<template>

    <Nav/>
   <router-view/>

</template>

<script>

import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  //   data() {
  //       return {
  //           user:{
  //               id: null,
  //               name: '',
  //               email:''
  //           }
  //       };
  //   },

  // created(){
  //   this.getUserLogado()

  // },


  // methods: {
  //     getUserLogado(){
  //         this.user = localStorage.getItem('dadosUserApp');
  //         this.user = JSON.parse(this.user)
  //     },
  //     logoutUser(){
  //         localStorage.removeItem('dadosUserApp');
  //         this.user.email = '';
  //         this.user.name = '';
  //         this.user.id = null
  //         //return this.$router.replace("/login") 
  //     }
  // },

 }
 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
