const Comment = require("../models/comment-model");
const CommentService = require("../services/comment-service");
var commentService = new CommentService();

exports.get = async (req, res) => {
  res.json(await commentService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await commentService.getById(req.params.id));
};

exports.getByIdPost = async (req, res) => {
  res.json(await commentService.getByIdPost(req.params.id));
};

exports.getByName = async (req, res) => {
  res.json(await commentService.getByName(req.query.name));
};

exports.post = async (req, res) => {
  res.json(
    await commentService.add(new Comment(req.body.name, req.body.body,
                                         req.body.post_id,req.body.user_id,
                                         req.body.created_at, req.body.updated_at,  
                                        ))
  );
};

exports.put = async (req, res) => {
  res.json(
    await commentService.update(
      req.params.id,
      new Comment(req.body.name, req.body.body,
                  req.body.post_id,req.body.user_id,
                  req.body.created_at, req.body.updated_at
                 )
    )
  );
};

exports.delete = (req, res) => {
  res.json(commentService.delete(req.params.id));
};