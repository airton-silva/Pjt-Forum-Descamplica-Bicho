//const Post = require("../models/user-model");
const AuthService = require("../services/auth-service");
var authService = new AuthService();

exports.getAuth = async (req, res) => {
    res.json(
      await authService.getAuth(req.body.email, req.body.password));

};