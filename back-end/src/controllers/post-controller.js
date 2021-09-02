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
  res.json(await postService.getByName(req.query.title));
};

exports.post = async (req, res) => {
  let obj = JSON.parse(req.body.post)
  console.log(obj)
  console.log(req.file)
  res.json(
    await postService.add(new Post(obj.title, obj.body,
                                      obj.created_at, obj.updated_at,
                                      req.file.path, obj.user_id, obj.resumo, 
                                  ))
  );
};

exports.put = async (req, res) => {
  let obj = JSON.parse(req.body.post)
  console.log(obj)
  console.log(req.file)
  res.json(
    await postService.update(
      req.params.id,
      new Post(obj.title, obj.body,req.file.path, 
        obj.user_id, obj.resumo)
    )
  );
};

exports.delete = (req, res) => {
  res.json(postService.delete(req.params.id));
};