const pool = require("../dbs/postgres");

exports.save = async (comment) => {
  const result = await pool.query(
    "INSERT INTO comments(name, body, post_id, user_id, created_at, updated_at) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;",
    [comment.name, comment.body, comment.post_id, comment.user_id, comment.created_at, comment.updated_at]
  );
  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query("SELECT * FROM comments ORDER BY id;");
  return result.rows;
};

exports.findOne = async (id) => {
  const result = await pool.query("SELECT * FROM comments WHERE id=$1;", [id]);
  return result.rows[0];
};

exports.findByIdPost = async (id) => {
  const result = await pool.query("SELECT comments.id, comments.name, "+
                                          "comments.body, comments.post_id, comments.created_at,"+ 
                                          "comments.updated_at, users.id, users.name, "+
                                          "users.email, users.image, posts.id, comments.user_id "+
                                    "FROM public.comments, public.users, public.posts "+
                                    "WHERE "+
                                          "comments.user_id = users.id AND "+
                                          "posts.id = comments.post_id AND "+
                                          "comments.post_id = $1;", [id]
                                  );
  return result.rows;
};

exports.findByName = async (name) => {
  const result = await pool.query("SELECT * FROM comments WHERE name=$1;", [
    name,
  ]);
  return result.rows;
};

exports.update = async (id, comment) => {
  const result = await pool.query(
    "UPDATE comments SET name=$1, body=$2, created_at=$3, updated_at=$4 WHERE id=$5 RETURNING *;",
    [comment.name, comment.body, comment.created_at, comment.updated_at, id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query("DELETE FROM comments WHERE id=$1;", [id]);
};