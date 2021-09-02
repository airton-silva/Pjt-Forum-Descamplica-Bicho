<template>
    <!-- <h1>{{msg}}</h1> -->
       <!-- login -->
    <div class="d-flex justify-content-center h-100 my-5">


      <div class="user_card">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container">
                  <p v-if="errors.length">
                    <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                    <ul class="alert alert-warning">
                      <li v-for="error in errors" :key="error.id">{{ error }}</li>
                    </ul>
                  </p>
              </div>
            </div>
            
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
              <input type="email"  class="form-control input_user" v-model="user.email" placeholder="E-mail">
            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" class="form-control input_pass" v-model="user.password" placeholder="Senha">
            </div>
              <div class="d-flex justify-content-center mt-3 login_container">
          <button type="button" name="button" class="btn login_btn" @click="login ()">Entrar</button>
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
import axios from 'axios'

export default {
  name: 'FormLogin',
  props: {
    msg: String
  },
  data() {
    return {
      uriBase : 'http://127.0.0.1:3000/auth/',
      errors: [],
      user: {
        id:'',
        email: '',  
        password: '',
      },
      //dadosUser: '',
      
    }
  },



  methods: {

      login (){
        this.checkValidate()
          let parametros = { 
            email: this.user.email,
            password: this.user.password,          
          }

        axios.post(this.uriBase, parametros)
          .then((result) =>{
            this.user = result.data  
            this.saveUser(this.user)         
            this.redirectRouter()         

          })
      },


      redirectRouter (){
        if(this.user.id > 0){
          return this.$router.replace("/posts") 
        }else{
          alert("usuario ou senha inválidos")
        }
      },

      checkValidate(e){
        this.errors = [];
          
            if (!this.user.email) {
              this.errors.push('O email é obrigatório.');
            }
            if (!this.user.password) {
              this.errors.push(' O campo senha é obrigatório.');
            }

            if (!this.errors.length) {
              
              return true;
            }
            e.preventDefault();
        
      },
                 

    saveUser(user){
          let dadosUser = localStorage.getItem('dadosUserApp');
          dadosUser = user

          localStorage.setItem('dadosUserApp', JSON.stringify(dadosUser))
      },
      
  },


}
</script>