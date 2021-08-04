<template>
  <!-- <h1>Form Login</h1> -->


    <div class="d-flex justify-content-center h-100 my-5">

      <div class="user_card">
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
        <div class="d-flex justify-content-center form_container">
          <form>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <input type="text" class="form-control input_user" v-model="user.name" placeholder="Nome">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
              <input type="email" class="form-control" v-model="user.email" placeholder="E-mail">
            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" class="form-control input_pass" v-model="user.password" placeholder="Senha">
            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" class="form-control input_pass" v-model="user.Rpassword" placeholder="Confirmar Senha">
            </div>
              <div class="d-flex justify-content-center mt-3 login_container">
          <button type="button" name="button" class="btn login_btn" @click.prevent=" salvar()">Salvar</button>
           </div>
          </form>
        </div>
    
        <div class="mt-4">
          <div class="d-flex justify-content-center links">
            Não tem uma conta?  <a href="http://">Cadastre-se</a>
            
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FormUser',
  props: {
    msg: String
  }, 

  data() {
    return {
      uriBase : 'http://127.0.0.1:3000/users/',
      isOpen: false,
      operacao: '',
      errors: [],
      user: {
        id: null,
        name: '',
        email: '',  
        password: '',
        Rpassword:'',
        created_at: ''
      }

    }

  },

  methods: {

      addUser(){
          
        let parametros = { 
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          created_at: this.formatData(), 
          
        }

        axios.post(this.uriBase, parametros)
        .then(response =>{
            this.user= response.data            
        }).then(
          alert("Usuario cadastrado com sucesso")
        );        
          this.user.name =''; 
          this.user.email ='';
          this.user.password ='';
          this.user.Rpassword ='';
          
      },  

      salvar(){
        this.checkValidate()
        this.addUser()
      },

      formatData(){ 
        var data = new Date();
        var dia = String(data. getDate()). padStart(2, '0');
        var mes = String(data. getMonth() + 1). padStart(2, '0');
        var ano = data. getFullYear();
        var dataAtual = ano+ '-' + mes + '-' + dia;
        return dataAtual
      },

      checkValidate(e){
        this.errors = [];
            if (!this.user.name) {
              this.errors.push('O nome é obrigatório.');
            }            
            if (!this.user.email) {
              this.errors.push('O email é obrigatório.');
            }
            if (!this.user.password) {
              this.errors.push(' O campo senha é obrigatório.');
            }
            if (!this.user.Rpassword) {
              this.errors.push('O campo Repita  a senha é obrigatório.');
            }
            if (this.user.password != this.user.Rpassword) {
              this.errors.push('O campo Repita senha é diferente do campo senha');
            }

            if (!this.errors.length) {
              
              return true;
            }
            e.preventDefault();
        
      }

  }


}
</script>