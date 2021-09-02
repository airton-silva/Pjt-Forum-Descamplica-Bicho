<template>
    <div class="col-md-12 my-5 form-group">
          <div class="brand_logo_container col-md-6 offset-3">
              <p v-if="errors.length">
                <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                <ul class="alert alert-warning">
                  <li v-for="error in errors" :key="error.id">{{ error }}</li>
                </ul>
              </p>
          </div>

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
              <div class="form-group">
                  <label for="exampleFormControlFile1">Upload de Imagem</label>
                  <input type="file" ref="image" class="form-control-file" name="image">
              </div>
            </div>
            <div class="col-md-6 offset-3">
                <div class="d-flex mt-3 login_container" v-if="post.id">
                    <button type="submit" name="salvar" class="btn btn-primary" @click.prevent=" updatePost()">Salvar</button>
                </div>
                <div class="d-flex mt-3 login_container" v-else>
                    <button type="submit" name="salvar" class="btn btn-primary" @click.prevent=" salvar()">Salvar</button>
                </div>
            </div>  

        </form>

    </div>

</template>

<script>
import PostDataService from "../services/PostDataService";

export default {
  name: 'formPost',
  props: {
    id:{
        type:String,
        default:null
    }
  }, 

  data() {
    return {
      errors: [],
      operacao:'',
      post: {
        id: this.id,
        title: '',
        body: '',
        image: null, 
        resumo:'',
        created_at: ''

      }, 
      file:'',
      user: localStorage.getItem('dadosUserApp')


    }

  },

  methods: {

      addpost(){
        this.user = JSON.parse(this.user)  
        let parametros = { 
          title: this.post.title,
          body: this.post.body,
          user_id: this.user.id,
          created_at: this.formatData(), 
          image: this.post.image,
          resumo: this.post.resumo,
          
          
        }
            let json = JSON.stringify(parametros)
            this.file = this.$refs.image.files[0];
            let form = new FormData();
            form.append("post", json);
            form.append("image", this.file );
            console.log(form.getAll("image"));
            console.log(form.getAll("post"));

        PostDataService.create(form)
          .then(response =>{
              var result = response.data
              if(!result.erros){
                alert("Post cadastrado com sucesso"),
                this.$router.push("/posts") 

              }
              else{
                alert("Verifique os erros no console"+result.erros.id)
                console.log(result)

              }
          })
   
      },  


      updatePost(){
        this.user = JSON.parse(this.user)  
        let parametros = { 
          title: this.post.title,
          body: this.post.body,
          user_id: this.user.id,
          updated_at: this.formatData(), 
          image: this.post.image,
          resumo: this.post.resumo,
          
          
        }
            let json = JSON.stringify(parametros)
            this.file = this.$refs.image.files[0];
            let form = new FormData();
            form.append("post", json);
            form.append("image", this.file );
            console.log(form.getAll("image"));
            console.log(form.getAll("post"));

        PostDataService.update(this.user.id,form)
          .then(response =>{
              var result = response.data
              if(!result.erros){
                alert("Post atualizado com sucesso"),
                this.$router.push("/posts") 

              }
              else{
                alert("Verifique os erros no console"+result.erros.id)
                console.log(result)

              }
          })
   
      },  

      salvar(){
        //var v = this.checkValidate()
        
          if(!this.checkValidate()){
            this.checkValidate()
          }else{
            this.addpost()
            this.post.title ='';
            this.post.body =''
            this.post.resumo =''
          }
       


      },

      novoForm() {
        this.operacao = 'criar';
        this.user.title = '';
        this.user.body= '';
        this.user.image= ''; 
        this.user.resumo='';
       
      },

      editForm(user) {
        this.operacao = 'editar';
        this.user.title = user.title;
        this.user.body= user.body;
        this.user.image= user.image; 
        this.user.resumo=user.resumo;
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
              //alert("bem vindo")
              this.errors.push('O title é obrigatório.');
            }            
            if (!this.post.body) {
              this.errors.push('O campo Corpo é obrigatório.');
            }
            if (!this.post.resumo) {
              this.errors.push(' O campo resumo é obrigatório.');
            }

            if (!this.errors.length) {              
              return true;
            }
            //e.preventDefault();
      },

      getPostById(){
        PostDataService.get(this.id)
          .then((result) =>{
            this.post = result.data
            console.log(this.post)
            this.quebraString(this.post);
        })
    },


  },

  mounted() {
    this.message = '';
    this.getPostById();
    console.log(this.user)
  }


}
</script>