<template>
    
  <body>
  
  <div class="container" style="margin-top:50px">
    <div class="row">
        <header class="row col-12">
          <div class="col-md-6 forum-header-top">
                <h2><i class="fas fa-comments"></i> Fórum</h2>
          </div> 
          <div class="col forum-header-top offset-md-3">
              <!-- <button class="btn btn-info "><i class="fas fa-plus"></i>  Criar Post </button> -->
              <!-- <router-link class="btn btn-info "> Criar Post</router-link> -->
                <!-- <h2><i class="fas fa-comments"></i> Fórum</h2> -->
          </div>

        </header><br><br>

        <div class="card col-md-12">

            <div class="card-header">
                <div>
                    <div class=" row topnav">
                        <div class="col-md-2"></div>
                        <div class="col-md-4"> 
                            <div class="dropdown show">
                                <a class=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Categorias
                                </a>
                              
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a class="dropdown-item" href="#">Disciplinas</a>
                                  <a class="dropdown-item" href="#">Bolsas</a>
                                  <a class="dropdown-item" href="#">Geral</a>
                                </div>
                              </div>
                        </div><br>
                        <div class="col-md-6  search-container">
                          <form >
                            <input type="text" placeholder="Search.." name="search" v-model="search">
                            <button type="submit" @click.prevent="getPostByTitle ()"><i class="fa fa-search"></i></button>
                          </form>
                        </div>

                      </div>
                </div>
            </div>
            <div class="card-body">
                <article class="forum-index-articles" v-for="post in posts" :key="post.id">
                    <br>
                    <div class="row" v-if="post">
                      
                        <div class="col-md-1">
                            <a href="#  " title="Link do GitHub" class="forum-index-article-top">
                              <div v-if="post.image">
                                <img class="img-circle forum-index-article-user avatar" :src="'http://localhost:3000'+post.image" alt="por " 
                                  style="height:70px; border-radius:50%;">
                              </div>
                              <div v-else>
                                <img class="img-circle forum-index-article-user avatar" 
                                  src="https://gravatar.com/avatar/7e858aacc566834a2faf77936eadca07.jpg?s=150&amp;d=mm&amp;r=g" alt="por " 
                                  style="height:70px; border-radius:50%;"
                                >
                              </div>

                            </a>    
                        </div>

                        <div class="col-md-6 offset-md-2">
                            <h4> {{post.title}}</h4>
                            <p>{{post.resumo}}</p>
                            
                        </div>
                        <div class="col-md-2 offset-md-1">
                            <!-- <a class="text-success" >
                                 <h4 class="text-center text-success"><i class="fas fa-check"></i></h4>
                                <p class="text-center text-success"> Comentários </p>
                            </a> -->
                        </div>

                        <br>                        
                        <div class="col-md-3">
                          <span><strong>Email:</strong>
                          <br>
                          </span>{{post.email}}</div>
                        <div class="col-md-3 offset-md-1" > 
                          <span><strong>Criado Em:</strong></span>{{ post.created_at }} 
                        </div>
                        <div class="col-md-3"><strong>Atualizado em:</strong>  {{post.updated_at}}</div>
                        <div class="col-md-2 ">
                          <router-link :to="'/detail-post/'+post.id" class="btn btn-info btn-sm">Detalhes</router-link>
                        </div>
                        <hr>
                    </div><hr>

                </article>

                
            </div>
            
        </div>

    </div>

  </div>      
</body>



</template>

<script>
import PostDataService from "../services/PostDataService";
import CommentDataService from "../services/CommentDataService";

export default {
  name: 'ListPost',
  props: {
    msg: String
  },

  data () {
    return {
      posts: [],
      search: null,
      contComment: null,
      post: {
        id : null,
        title: '',
        body: '',
        resume:'',
        created:'',
        updated:''

      }

    } 
  },

  created(){
    this.getAllPosts(),
    this.getCountComment(this.post.id) 
  },

  methods: {
      getAllPosts () {
          PostDataService.getAll()
            .then(result =>{
                this.posts = result.data
                console.log(this.posts)
                //this.getCountComment(this.posts.post_id)
            })           
 
      },

      getPostByTitle (){
        
        if(this.search == null){
          this.created()
        }
        PostDataService.getByTitle(this.search)
          .then((result) =>{
            this.posts = result.data
        })
      },

      getId(post){
        alert(post.id)
        return post.id
        
      },

      formData(data){
        return data.moment(data, 'YYYY-MM-DD').format('DD-MM-YYYY')
      },

      getCountComment(id){
        CommentDataService.contComment(id)
          .then((result) =>{
            this.contComment = result.data
            console.log(this.contComment)
        })
      }

  },
  //  mounted(){
  //    this.getCountComment(this.post.id);
  //  }

}
</script>