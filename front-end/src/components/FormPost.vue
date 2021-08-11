<template>
    <div class="col-md-12 my-5 form-group">
        <form >
            <div class="col-md-6 offset-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Titulo</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Titulo" v-model="post.title">
                </div>
            </div>
            <div class="col-md-6 offset-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Resumo</span>
                    </div>
                    <textarea class="form-control" rows="3" aria-label="With textarea" v-model="post.resumo"></textarea>
                </div>
            </div><br>
            <div class="col-md-6 offset-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Conteúdo</span>
                    </div>
                    <textarea class="form-control" rows="5" aria-label="With textarea" v-model="post.body"></textarea>
                </div>
            </div><br>
            <div class="col-md-6 offset-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Id User</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Id User" v-model="post.userId">
                </div>
            </div>        
            <div class="col-md-6 offset-3">
                <div class="d-flex mt-3 login_container">
                    <button type="button" name="button" class="btn login_btn" @click.prevent=" salvar()">Salvar</button>
            </div>
            </div>            

        </form>

    </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'formPost',
  props: {
    msg: String
  }, 

  data() {
    return {
      uriBase : 'http://127.0.0.1:3000/posts/',
      errors: [],
      post: {
        id: null,
        title: '',
        body: '',
        userId:'', 
        resumo:'',
        created_at: ''

      }

    }

  },

  methods: {

      addpost(){
          
        let parametros = { 
          title: this.post.title,
          body: this.post.body,
          user_id: this.post.userId,
          resumo: this.post.resumo,
          created_at: this.formatData(), 
          
        }
        console.log(parametros)

        axios.post(this.uriBase, parametros)
        .then(response =>{
            this.post= response.data            
        }).then(
          alert("Post cadastrado com sucesso")
        );        
          this.post.title =''; 
          this.post.body ='';
          this.post.userId= ''
          
      },  

      salvar(){
        this.checkValidate()
        this.addpost()
      },

      formatData(){ 
        var data = new Date();
        var dia = String(data. getDate()). padStart(2, '0');
        var mes = String(data. getMonth() + 1). padStart(2, '0');
        var ano = data. getFullYear();
        var dataAtual = ano+ '-' + mes + '-' + dia;
        return dataAtual
      },

      checkValidate(){
        this.errors = [];
            if (!this.post.title) {
              this.errors.push('O title é obrigatório.');
            }            
            if (!this.post.body) {
              this.errors.push('O campo Corpo é obrigatório.');
            }
            if (!this.post.password) {
              this.errors.push(' O campo senha é obrigatório.');
            }

            if (!this.errors.length) {              
              return true;
            }
            //e.preventDefault();
        
      },

  }


}
</script>