const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;


app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static
app.use(express.static("public"));

// Routes
const index = require("./routes/index.js");
const posts = require("./routes/post-route");
const users = require("./routes/user-route");
const comments = require("./routes/comment-route");
const auth = require("./routes/auth-route");
//const upload = require("./routes/upload-route");

app.use("/", index);
app.use("/posts", posts);
app.use("/users", users);
app.use("/comments", comments);
app.use("/auth", auth);
//app.use("/upload", upload);
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

// Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});