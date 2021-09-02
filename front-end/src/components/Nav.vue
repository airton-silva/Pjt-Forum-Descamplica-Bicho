<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container"> <!--<a href="#" class="navbar-brand">Descomplica Bicho</a> -->
                                <router-link class="navbar-brand" to="/posts">Descomplica Bicho</router-link>
          <div class="d-flex ml-auto">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#globalNavbar" aria-controls="globalNavbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
            <div class="collapse navbar-collapse" id="globalNavbar">

                <ul class="navbar-nav mr-auto order-1">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Post
                    </a>
                    
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/post">Cadastrar Post</a>
                        <a class="dropdown-item" href="#">Avaliar post</a>
                        
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/users">Usuários</a>                     

                </li>

                </ul>

                <ul class="navbar-nav d-none d-lg-flex ml-2 order-3">
                    <li class="nav-item dropdown" v-if="user.name">
                        <a class="nav-link dropdown-toggle nav-link b-login text-success" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user"> </i>   {{user.name}}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" :to="'/user/perfil/'+user.id"><i class="fas fa-user-cog"> </i> Perfil</router-link>
                        <a class="dropdown-item" @click="logoutUser()"><i class="fas fa-sign-out-alt" > </i> Logout</a> 


                        </div>
                    </li>

                    <li class="nav-item " v-else >
                      <router-link class="nav-link b-login text-success" to="/login">Login</router-link> 
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

    mounted() {
        this.getUserLogado()
    
    }

 
}
</script>