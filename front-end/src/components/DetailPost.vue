<template>
    <div class="row" style="margin-top:50px">
      <div class="col-md-8 offset-md-2">

        <div class="card">
          <div class="card-header">
              <h3 class="text-left">Titulo do Post : <span>{{ post.title }}</span> </h3>
          </div>
          <div class="card-body">
            <p>{{post.resume}}</p>
            <p>{{ post.body}}</p>
            <div class="row">
              <div class="col-md-4">
                <span class="text-left"><strong>Data de Criação: {{ post.created_at}}</strong></span>
              </div>
              <div class="col-md-4 offset-2">
                <span class="text-right"><strong>Data de Atualização: {{ post.updated_at}}</strong></span>
              </div><br>
              <div class="col-md-4 offset-8">
                <button class="btn btn-info" @click="getCommentsByIdPost()" >Comentarios</button>
                <!-- <router-link :to="'/comments/'+post.id" class="btn btn-info btn-sm">Comentario</router-link> -->
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


              <!-- <p>{{comment.name}}</p>
              <p>{{ comment.body}}</p> -->
              <div class="row" v-if="comment">
                  <div class="col-md-2">
                      <a href="#" title="Link do GitHub" class="forum-index-article-top">
                          <img class="img-circle forum-index-article-user avatar" src="https://gravatar.com/avatar/7e858aacc566834a2faf77936eadca07.jpg?s=150&amp;d=mm&amp;r=g" alt="por ">
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

import axios from 'axios'

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
        id: this.identify,
        openComment:false,
        uriBase : 'http://localhost:3000/posts/',
        uriCommentByPost : 'http://localhost:3000/comments/post/',
        post:'',
        comments: []
        
      };
  },

  methods:{
    getPostById(){
        axios.get(this.uriBase + this.id)
          .then((result) =>{
            this.post = result.data
            console.log(this.post)
        })
    },

    getCommentsByIdPost(){
        axios.get(this.uriCommentByPost + this.id)
          .then((result) =>{
            this.comments = result.data
            console.log(this.comments)
        })
    }

  },
  // isComment(){
  //   if(this.openComment==false){
  //     this.openComment = true
  //   }
  //   this.openComment = false
  // },

  mounted() {
    this.message = '';
    this.getPostById();
    //this.getTutorial(this.$route.params.id);
  }

}
</script>