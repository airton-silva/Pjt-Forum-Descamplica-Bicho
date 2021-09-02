<template>
    <!-- <h1>Lista de usuarios</h1> -->
    <div class="col-md-10 offset-1" style="margin-top:50px">
       <div class="card">
           <div class="card-header">
               <h2>Usuário</h2>
           </div>
           <div class="col-md-12">
               <div class="row">
                    <div class="col-12">
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
                                            <span class="text-left"><strong>Nome :</strong>{{user.name}}</span>
                                            <span class="text-right offset-3"><strong>email :</strong>{{user.email}}</span>
                                        </div>
                                        <span class="text-left">Criação: </span>
                                        <span class="text-left">{{ user.created_at}}</span>
                                        <span class="text-right offset-3">Atualização:</span><br>
                                        <span class="text-right offset-1">{{ user.updated_at}}</span>
                                        
                                        <hr>
                                        
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
  name: 'PerfilUser',
  props: {
    id:{
        type:String,
        default:null
    }
  },
  data () {
    return {
      user: {
        id : this.id,
        name:'',
        email:'',
        


      }

    } 
  },


  methods: {

      getUserById() {
          alert(this.user.id)
          UserDataService.get(this.user.id)           
          .then((result) =>{
            this.user = result.data
            console.log(this.user)
            this.quebraString(this.user);
        })
      },

        quebraString(str) {
             var q = str.image.replace('public/', '/');
             this.image = q;
        }

  },

  mounted() {
    this.message = '';
    this.getUserById();
    //console.log(this.user)
  }

}
</script>