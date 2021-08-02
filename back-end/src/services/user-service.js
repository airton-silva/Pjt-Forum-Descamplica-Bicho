const userRepo = require("../repositories/user-repo");

class UserService {
  add(user) {
    return userRepo.save(user);
  }

  getAll() {
    return userRepo.findAll();
  }

  getById(id) {
    return userRepo.findOne(id);
  }

  getByName(name) {
    return userRepo.findByName(name);
  }

  update(id, user) {
    return userRepo.update(id, user);
  }

  delete(id) {
    return userRepo.delete(id);
  }
}

module.exports = UserService;