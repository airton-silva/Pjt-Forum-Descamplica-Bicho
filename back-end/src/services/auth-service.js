const authRepo = require("../repositories/auth-repo");

class authService {

  getAuth(email, password){
    return authRepo.findOne(email, password);
  }

}

module.exports = authService;