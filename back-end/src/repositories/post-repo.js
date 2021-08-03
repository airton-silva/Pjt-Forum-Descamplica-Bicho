const pool = require("../dbs/postgres");

exports.save = async (post) => {
  const result = await pool.query(
    "INSERT INTO posts(title, body, created_at, updated_at, user_id) VALUES ($1,$2,$3,$4,$5) RETURNING *;",
    [post.title, post.body, post.created_at, post.updated_at, post.user_id]
  );
  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query("SELECT * FROM posts ORDER BY id;");
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
    "UPDATE posts SET title=$1, body=$2, created_at=$3, updated_at=$4 WHERE id=$5 RETURNING *;",
    [post.title, post.body, post.created_at, post.updated_at, id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query("DELETE FROM posts WHERE id=$1;", [id]);
};