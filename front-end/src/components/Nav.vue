<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container"> <!--<a href="#" class="navbar-brand">Descomplica Bicho</a> -->
                                <router-link class="navbar-brand" to="/">Descomplica Bicho</router-link>
          <div class="d-flex ml-auto">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#globalNavbar" aria-controls="globalNavbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
            <div class="collapse navbar-collapse" id="globalNavbar">
                <!-- <form class="form-inline form-navbar my-2 my-lg-0 order-2" action="">
                    <input class="form-control" name="s" type="text" placeholder="Search">
                </form> -->
                <ul class="navbar-nav mr-auto order-1">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="/post" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Post
                    </a>
                    <!-- <router-link class="nav-link dropdown-toggle" to="/formPost"> Criar Post</router-link> -->

                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Cadastrar Post</a>
                        <a class="dropdown-item" href="#">Avaliar post</a>
                        
                    </div>
                </li>
    
                </ul>
                <ul class="navbar-nav d-none d-lg-flex ml-2 order-3">
                    <li class="nav-item" v-if="user.name">
                        <a class="nav-link b-login text-success"><i class="fas fa-user"> </i>   {{user.name}}</a>                     
                    </li>
                    <li class="nav-item " v-else >
                      <router-link class="nav-link b-login text-success" to="/login">Login</router-link> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link b-login text-default" @click="logoutUser()">Logout</a>                     

                    </li>
                </ul>
    
            </div>
        </div>
    </nav>
    
</template>

<script>

export default {

  name: 'Nav',
  props: {
    msg: String
  },

    data() {
        return {
            user:{
                id: null,
                name: '',
                email:''
            }
        };
    },

    created(){
        this.getUserLogado()           

    },


    methods: {
        getUserLogado(){
            this.user = localStorage.getItem('dadosUserApp');
            this.user = JSON.parse(this.user)
        },
        logoutUser(){
            localStorage.removeItem('dadosUserApp');
            this.user.email = '';
            this.user.name = '';
            this.user.id = null
            return this.$router.replace("/login") 
        }
    },



 
}
</script>