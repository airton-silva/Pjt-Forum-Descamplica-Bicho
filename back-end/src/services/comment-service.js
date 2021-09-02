const commentRepo = require("../repositories/comment-repo");

class CommentService {
  add(comment) {
    return commentRepo.save(comment);
  }

  getAll() {
    return commentRepo.findAll();
  }

  getById(id) {
    return commentRepo.findOne(id);
  }

  getByIdPost(id) {
    return commentRepo.findByIdPost(id);
  }

  getByName(name) {
    return commentRepo.findByName(name);
  }

  getContCommentByIdPost(post_id) {
    return commentRepo.getContCommentByIdPost(post_id);
  }  

  update(id, comment) {
    return commentRepo.update(id, comment);
  }

  delete(id) {
    return commentRepo.delete(id);
  }
}

module.exports = CommentService;