import http from "../http-common";

class CommentDataService {
  getAll() {
    return http.get("/comments");
  }

  get(id) {
    return http.get("/comments/post/"+id);
  }

  contComment(id) {
      return http.get("comments/count/"+id)
  }

  create(data) {
    return http.post("/comments",data);
  }

  update(id, data) {
    return http.put(`/comments/${id}`, data,{headers:{
      "Content-Type": "multipart/form-data",
    }});
  }

  delete(id) {
    return http.delete(`/comments/${id}`);
  }

  getByTitle(title) {
  
    return http.get(`/comments/search?title=${title}`);
  }

}

export default new CommentDataService();