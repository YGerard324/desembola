const express = require("express");
const authController = require("../controller/AuthController");
const isAuth = require("../middleware/IsAuth");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
