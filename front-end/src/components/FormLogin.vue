<template>
    <!-- <h1>{{msg}}</h1> -->
       <!-- login -->
    <div class="d-flex justify-content-center h-100 my-5">
      <div class="user_card">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
              <input type="text"  class="form-control input_user" v-model="user.email" placeholder="E-mail">
            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" class="form-control input_pass" v-model="user.password" placeholder="Senha">
            </div>
              <div class="d-flex justify-content-center mt-3 login_container">
          <button type="button" name="button" class="btn login_btn">Entrar</button>
           </div>
          </form>
        </div>
    
        <div class="mt-4">
          <div class="d-flex justify-content-center links">
            Não tem uma conta?  <router-link to="/form-user">Cadastre-se</router-link>
            
          </div>
        </div>
      </div>
    </div>
    <!-- login-->
</template>

<script>
export default {
  name: 'FormLogin',
  props: {
    msg: String
  },
  data() {
    return {
      uriBase : 'http://127.0.0.1:3000/users/',
      errors: [],
      user: {
        email: '',  
        password: '',
      }
    }
  },

  methods: {

      login (){
        
        // if(this.search == null){
        //   this.created()
        // }
        axios.get(this.uriBase + "search?title=" + this.search)
          .then((result) =>{
            this.posts = result.data
        })
      },

  }

}
</script>