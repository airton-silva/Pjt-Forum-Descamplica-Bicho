const pool = require("../dbs/postgres");

exports.save = async (post) => {
  //console.log(post)
  const result = await pool.query(
    "INSERT INTO posts(title, body, created_at, updated_at, user_id, image, resumo) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;",
    [post.title, post.body, post.created_at, post.updated_at, post.user_id, post.image, post.resumo]
  );
  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query("SELECT users.id, users.name, users.email, posts.created_at,"
                                  + " posts.id, posts.updated_at, posts.body, posts.resumo, posts.image "+
                                  "FROM users, posts WHERE posts.user_id = users.id ORDER BY posts.id;");
  return result.rows;
};

exports.findOne = async (id) => {
  const result = await pool.query("SELECT * FROM posts WHERE id=$1;", [id]);
  return result.rows[0];
};

exports.findByName = async (title) => {
  const result = await pool.query("SELECT users.id, users.name, users.email, posts.created_at,"
  + " posts.updated_at, posts.body, posts.title, posts.image "+
  "FROM users, posts WHERE posts.user_id = users.id AND posts.title=$1 ORDER BY users.id;", [
    title,
  ]);
  return result.rows;
};

exports.update = async (id, post) => {
  const result = await pool.query(
    "UPDATE posts SET title=$1, body=$2, created_at=$3, updated_at=$4, image=$5, resumo=$6 WHERE id=$7 RETURNING *;",
    [post.title, post.body, post.created_at, post.updated_at, post.resumo,id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query("DELETE FROM posts WHERE id=$1;", [id]);
};