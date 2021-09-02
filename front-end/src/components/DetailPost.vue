<template>
    <div class="row" style="margin-top:50px">
      <div class="col-md-8 offset-md-2">

        <div class="card">
          <div class="card-header">
              <h3 class="text-left">Titulo do Post : <span>{{ post.title }}</span> </h3>
              
          </div>
          <div class="card-body">
            <h4>Resumo</h4>
            <p>{{post.resumo}}</p>
            <h4>Post Completo</h4>
            <p>{{ post.body}}</p>
            <div v-if="post.image">
                <img :src="'http://localhost:3000/'+image" :alt="post.image" style="width:600px; height:250%">
            </div>
            
            <br><br>
            <div class="row">
              
              <div class="col-md-12">
                <span class="text-left"><strong>Data de Criação: {{ post.created_at}}</strong></span>
                <span class="text-right offset-3"><strong>Data de Atualização: {{ post.updated_at}}</strong></span>
                <!-- <span>
                  <a class="text-success" >
                        <h4 class="text-center text-success"><i class="fas fa-check"></i></h4>
                      <p class="text-center text-success"> Comentários </p>
                  </a> 
                </span> -->
 
                <span class="offset-3"> <button class="btn btn-sm btn-info" @click="getCommentsByIdPost()" >mais</button></span>
                 <span  style="padding:5px;"> <button class="btn btn-sm btn-success" @click.prevent="openForm()" >Comentar</button></span>
                <hr>
              </div>
              <div class="col-md-12" v-if="openFrmComment">
                <form>
                    <div class="form-group">
                      <label for="title">titulo</label>
                      <input type="text" class="form-control" id="title" v-model="comment.name" placeholder=" comment titulo">
                      
                    </div>
                    <div class="form-group">
                      <label for="decricao">Descrição</label>
                      <input type="text" class="form-control" id="decricao" v-model="comment.body" placeholder="Descrição">
                    </div>

                    <button type="submit" class="btn btn-primary" @click.prevent="addComment()">Postar</button>
                  </form>
              <hr>
              </div>
              <br>
              <div class="offset-10" v-if="user.id == post.user_id">
                <span><router-link :to="'/edit/'+post.id" class="btn btn-warning">Editar</router-link></span>
                 <span style="padding:5px;"><button class="btn btn-danger" @click=" deletePost(post.id)">Excluir</button></span>
              </div>

            </div>
            
          </div>

        </div>

          <!--div comments-->
        <div class="card">
          <div class="card-header alert alert-primary">
              <h3 class="text-center text-primary"><strong> Comentários </strong> </h3>
          </div>
          <div class="card-body">

            <div class="alert alert-success" v-for="comment in comments" :key="comment.id">

              <div class="row" v-if="comment">
                  <div class="col-md-2">
                      <a href="#" title="Link do GitHub" class="forum-index-article-top">
                          <img class="img-circle forum-index-article-user avatar" src="https://gravatar.com/avatar/7e858aacc566834a2faf77936eadca07.jpg?s=150&amp;d=mm&amp;r=g" alt="por " style="height:80px; border-radius:50%;">
                      </a>  
                      <p>{{comment.email}}</p>    
                  </div>

                  <div class="col-md-9">
                      <p>{{comment.body}}</p>    
                      <div class="col">
                        <span class="text-left"><strong>Data de Criação: {{ comment.created_at}}</strong></span>
                      </div>
                      <div class="col ">
                        <span class="text-right"><strong>Data de Atualização: {{ comment.updated_at}}</strong></span>
                      </div><br>
                  </div>
              </div>
              <div v-else>
                <p><strong> Ops: Não possui comentarios neste Post </strong></p>
              </div>
            </div>

            
          </div>

        </div>
        <!--fim div comments-->          


      </div>
    </div>
</template>

<script>

//import axios from 'axios'
import PostDataService from "../services/PostDataService";
import CommentDataService from "../services/CommentDataService";

export default {
  name: 'DetailPost',
  //props:['identify'],
  props: {
    identify:{
        type:String,
        default:null
    }
  },

  data() {
      return {
        openFrmComment:false,
        id: this.identify,
        openComment:false,
        post:'',
        comments: [],
        image:'',
        comment:{
          name:'',
          body:''
        },
        user: JSON.parse(localStorage.getItem('dadosUserApp'))
        
      };
  },

  methods:{
    getPostById(){
        PostDataService.get(this.id)
          .then((result) =>{
            this.post = result.data
            console.log(this.post)
            this.quebraString(this.post);
        })
    },

    getCommentsByIdPost(){
        CommentDataService.get(this.id)
          .then((result) =>{
            this.comments = result.data
            console.log(this.comments)
        })
    },

    addComment(){
        this.user = JSON.parse(this.user)  
        let parametros = { 
          title: this.comment.name,
          body: this.comment.body,
          user_id: this.user.id,
          post_id: this.post.id,
          created_at: this.formatData(), 
         
          
        }


        CommentDataService.create(parametros)
          .then(response =>{
              var result = response.data
              if(!result.erros){
                alert("Commentario cadastrado com sucesso")
                //this.$router.push("/posts") 

              }
              else{
                alert("Verifique os erros no console"+result.erros.id)
                console.log(result)

              }
          })
   
    },  

    deletePost(id) {
      PostDataService.delete(id)
        .then((result) =>{
            this.comments = result.data
            alert("excluido com sucesso")
            this.$router.push("/posts") 
          
        })

    },


    openForm(){
      if (this.openFrmComment==true)
        this.openFrmComment=false;
      else
        this.openFrmComment=true;
    },


    quebraString(str) {
          var q = str.image.replace('public/', '/');
          this.image = q;
    }

  },


  mounted() {
    this.message = '';
    this.getPostById();
    console.log(this.user)
  }

}
</script>