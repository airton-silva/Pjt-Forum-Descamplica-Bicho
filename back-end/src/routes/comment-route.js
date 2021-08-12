const express = require("express");
const router = express.Router();

const controller = require("../controllers/comment-controller");

router.get("/", controller.get);
router.get("/search", controller.getByName);
router.get("/:id", controller.getById);
router.get("/post/:id", controller.getByIdPost);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;