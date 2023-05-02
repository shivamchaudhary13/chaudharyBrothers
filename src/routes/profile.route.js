const express = require("express");
const router = express.Router();
const profileController = require("../controller/profile.controller");

router.get("/currentuser", profileController.Profile);

module.exports = router;
