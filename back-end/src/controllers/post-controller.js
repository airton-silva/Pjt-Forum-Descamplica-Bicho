const Post = require("../models/post-model");
const PostService = require("../services/post-service");
var postService = new PostService();

exports.get = async (req, res) => {
  res.json(await postService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await postService.getById(req.params.id));
};

exports.getByName = async (req, res) => {
  res.json(await postService.getByName(req.query.name));
};

exports.post = async (req, res) => {
  res.json(
    await postService.add(new Product(req.body.title, req.body.body))
  );
};

exports.put = async (req, res) => {
  res.json(
    await postService.update(
      req.params.id,
      new Product(req.body.title, req.body.body)
    )
  );
};

exports.delete = (req, res) => {
  res.json(postService.delete(req.params.id));
};