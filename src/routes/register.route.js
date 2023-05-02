const express = require("express");
const router = express.Router();
const registerController = require("../controller/register.controller");

router.post("/register",registerController.register);
// router.get("/register",registerController.register);

module.exports = router;
