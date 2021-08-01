const postRepo = require("../repositories/post-repo");

class PostService {
  add(post) {
    return postRepo.save(post);
  }

  getAll() {
    return postRepo.findAll();
  }

  getById(id) {
    return postRepo.findOne(id);
  }

  getByName(name) {
    return postRepo.findByName(name);
  }

  update(id, post) {
    return postRepo.update(id, post);
  }

  delete(id) {
    return postRepo.delete(id);
  }
}

module.exports = PostService;