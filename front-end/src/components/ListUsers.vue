<template>
    <!-- <h1>Lista de usuarios</h1> -->
    <div class="col-md-10 offset-1" style="margin-top:50px">
       <div class="card">
           <div class="card-header">
               <h2>Usuarios</h2>
           </div>
           <div class="col-md-12">
               <div class="row">
                    <div class="col-6" v-for="user in users" :key="user.id">
                        <br>
                        <div class="alert alert-primary">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-2">
                                        <a href="#  " title="Link do GitHub" class="forum-index-article-top">
                                            <img class="img-circle forum-index-article-user avatar" src="https://gravatar.com/avatar/7e858aacc566834a2faf77936eadca07.jpg?s=150&amp;d=mm&amp;r=g" alt="por " style="height:70px; border-radius:50%;">
                                        </a> <br> 
                                        <h6>{{user.name}}</h6>  
                                    </div>
                                    <div class="col-md-10">
                                        <div>
                                            <h4>{{user.email}}</h4>
                                        </div>
                                        <span class="text-left">Criação: </span>
                                        <span class="text-right offset-3">Atualização:</span><br>
                                        <span class="text-left">{{ user.created_at}}</span>
                                        <span class="text-right offset-1">{{ user.updated_at}}</span>
                                        
                                        <hr>
                                        <span class="offset-10"> <button class="btn btn-sm btn-info"  >veja mais</button></span>
                                    </div>
                                </div>
                                
                            </div>                           
                        </div>
                    </div>
               </div>

           </div>
          
       </div>
    </div>

</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: 'ListUsers',
  props: {
    msg: String
  },
  data () {
    return {
      users: [],
      search: null,
      contComment: null,
      user: {
        id : null,
        name:'',
        email:'',


      }

    } 
  },

  created(){
    this.getAllUsers()  
  },

  methods: {
      getAllUsers () {
          UserDataService.getAll()
            .then(result =>{
                this.users = result.data
                console.log(this.users)
                //this.getCountComment(this.posts.post_id)
            })           
 
      },

    //   getPostByTitle (){
        
    //     if(this.search == null){
    //       this.created()
    //     }
    //     PostDataService.getByTitle(this.search)
    //       .then((result) =>{
    //         this.posts = result.data
    //     })
    //   },


  },

}
</script>