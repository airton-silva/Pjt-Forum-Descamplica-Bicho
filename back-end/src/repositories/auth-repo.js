const pool = require("../dbs/postgres");

exports.findOne = async (email, password) => {
    console.log(email , password)
    const result = await pool.query("SELECT * FROM users WHERE email=$1 AND password=$2;", 
    [email, password]);
    
    return result.rows[0];
};