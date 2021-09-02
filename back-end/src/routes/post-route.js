const express = require("express");
const router = express.Router();

const multer = require("multer");
//const upload = multer({dest:"./public/uploads"})

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/posts");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const controller = require("../controllers/post-controller");

router.get("/", controller.get);
router.get("/search", controller.getByName);
router.get("/:id", controller.getById);
router.post("/", upload.single("image"), controller.post);
router.put("/:id", upload.single("image"), controller.put);
router.delete("/:id", controller.delete);

module.exports = router;