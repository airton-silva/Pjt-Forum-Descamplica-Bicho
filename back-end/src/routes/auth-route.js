const express = require("express");
const router = express.Router();

const controller = require("../controllers/auth-controller");

router.post("/", controller.getAuth);
//router.get("/:auth", controller.getAuth);



module.exports = router;