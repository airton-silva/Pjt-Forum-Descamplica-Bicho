class Comment {
    constructor( name, body, post_id, user_id, created_at, updated_at) {
      this.name = name;
      this.body = body;
      this.post_id = post_id
      this.user_id = user_id;
      this.created_at = created_at;
      this.updated_at = updated_at;
      
    }
   }
   
   module.exports = Comment;