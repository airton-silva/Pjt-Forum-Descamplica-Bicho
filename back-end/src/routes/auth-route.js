const express = require("express");
const router = express.Router();

const controller = require("../controllers/auth-controller");

router.get("/", controller.getAuth);
// router.get("/search", controller.getByName);
// router.get("/:id", controller.getById);
// router.post("/", controller.post);
// router.put("/:id", controller.put);
// router.delete("/:id", controller.delete);

module.exports = router;