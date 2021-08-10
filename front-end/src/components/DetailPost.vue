<template>
    <div class="row" style="margin-top:50px">
      <div class="col-md-8 offset-md-2">

        <div class="card">
          <div class="card-header">
              <h3 class="text-left">Titulo do Post : <span>{{ post.title }}</span> </h3>
          </div>
          <div class="card-body">
            <p>{{ post.body}}</p>
            <div class="row">
              <div class="col-md-4">
                <span class="text-left"><strong>Data de Criação: {{ post.created_at}}</strong></span>
              </div>
              <div class="col-md-4 offset-2">
                <span class="text-right"><strong>Data de Atualização: {{ post.updated_at}}</strong></span>
              </div><br>
              <div class="col-md-4 offset-8">
                <button class="btn btn-info">Comentarios</button>
              </div>
            </div>

            
            
          </div>


        </div>

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
        uriBase : 'http://localhost:3000/posts/',
        post:''
        
      };
  },

  methods:{
    getPostById(){
        axios.get(this.uriBase + this.id)
          .then((result) =>{
            this.post = result.data
            console.log(this.post)
        })
    }

  },

  mounted() {
    this.message = '';
    this.getPostById();
    //this.getTutorial(this.$route.params.id);
  }

}
</script>