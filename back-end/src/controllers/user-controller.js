const Post = require("../models/user-model");
const UserService = require("../services/user-service");
var userService = new UserService();

exports.get = async (req, res) => {
  res.json(await userService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await userService.getById(req.params.id));
};

exports.getByName = async (req, res) => {
  res.json(await userService.getByName(req.query.name));
};

exports.post = async (req, res) => {
  res.json(
    await userService.add(new Post(req.body.name, 
                                    req.body.email,
                                    req.body.password,
                                    req.body.created_at, 
                                    req.body.updated_at
                                  ))
  );
};

exports.put = async (req, res) => {
  res.json(
    await userService.update(
      req.params.id,
      new Post(req.body.name, 
                req.body.email,
                req.body.password,
                req.body.created_at, 
                req.body.updated_at
              )
    )
  );
};

exports.delete = (req, res) => {
  res.json(userService.delete(req.params.id));
};