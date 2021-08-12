class Post {
    constructor( title, body, created_at, updated_at, image, user_id, resumo) {
     // this.name = name;
      this.title = title;
      this.body = body;
      this.created_at = created_at;
      this.updated_at = updated_at;
      this.user_id = user_id;
      this.image = image;
      this.resumo = resumo;
    }
   }
   
   module.exports = Post;
   