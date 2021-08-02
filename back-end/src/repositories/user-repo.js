const pool = require("../dbs/postgres");

exports.save = async (user) => {
  const result = await pool.query(
    "INSERT INTO users(name, email, password, created_at, updated_at) VALUES ($1,$2, $3, $4, $5) RETURNING *;",
    [user.name, user.email, user.password, user.created_at, user.updated_at]
  );
  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query("SELECT * FROM users ORDER BY id;");
  return result.rows;
};

exports.findOne = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE id=$1;", [id]);
  return result.rows[0];
};

exports.findByName = async (title) => {
  const result = await pool.query("SELECT * FROM users WHERE name=$1;", [
    title,
  ]);
  return result.rows;
};

exports.update = async (id, user) => {
  const result = await pool.query(
    "UPDATE users SET name=$1, email=$2, password=$3, created_at=$4, updated_at=$5  WHERE id=$6 RETURNING *;",
    [user.name, user.email, user.password, user.created_at, user.updated_at, id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query("DELETE FROM users WHERE id=$1;", [id]);
};