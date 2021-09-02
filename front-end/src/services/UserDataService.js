import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get("/users/"+id);
  }

  create(data) {
    return http.User("/users", data,{headers:{
      "Content-Type": "multipart/form-data",
    }});
  }

  update(id, data) {
    return http.put(`/users/${id}`, data,{headers:{
      "Content-Type": "multipart/form-data",
    }});
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  getByName(name) {
  
    return http.get(`/users/search?title=${name}`);
  }
  getByQty(qty) {
    return http.get(`/users/qty?qty=${qty}`);
  }
}

export default new UserDataService();