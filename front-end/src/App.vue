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
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="/formPost" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <li class="nav-item ">
                      <!-- <a class="nav-link b-login text-success" href="../auth/login.html">Login</a> -->
                      <router-link class="nav-link b-login text-success" to="/login">Login</router-link> 
                    </li>
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#" >Cadastre-se</a> -->
                        <a class="nav-link b-login text-default" onclick="logout()">Logout</a>

                        <!-- <a class="nav-link" href="../auth/cadastro.html">Cadastre-se</a> -->

                       

                    </li>
                </ul>
    
            </div>
        </div>
    </nav>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/form-user">Cad User</router-link>
  </div> -->
   <router-view/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    
  }
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
