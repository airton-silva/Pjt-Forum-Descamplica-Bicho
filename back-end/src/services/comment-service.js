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

  getByName(name) {
    return commentRepo.findByName(name);
  }

  update(id, comment) {
    return commentRepo.update(id, comment);
  }

  delete(id) {
    return commentRepo.delete(id);
  }
}

module.exports = CommentService;