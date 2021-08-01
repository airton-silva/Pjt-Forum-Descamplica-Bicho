const pool = require("../dbs/postgres");

exports.save = async (post) => {
  const result = await pool.query(
    "INSERT INTO posts(title, body, created_at, updated_at) VALUES ($1,$2, $3, $4) RETURNING *;",
    [post.tiles, post.body, post.created_at, post.updated_at]
  );
  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query("SELECT * FROM posts;");
  return result.rows;
};

exports.findOne = async (id) => {
  const result = await pool.query("SELECT * FROM posts WHERE id=$1;", [id]);
  return result.rows[0];
};

exports.findByName = async (title) => {
  const result = await pool.query("SELECT * FROM posts WHERE title=$1;", [
    title,
  ]);
  return result.rows;
};

exports.update = async (id, post) => {
  const result = await pool.query(
    "UPDATE posts SET title=$1, body=$2 WHERE id=$3 RETURNING *;",
    [post.title, post.body, id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query("DELETE FROM posts WHERE id=$1;", [id]);
};