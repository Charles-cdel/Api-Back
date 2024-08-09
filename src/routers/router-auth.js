const express = require('express');
const router = express.Router();

const authController = require("../controller/auth-controller");
const authMiddleware = require("../middlewares/auth-middlewares")

router.post(
    '/login',authMiddleware.loginMiddleware,
     authController.login);

module.exports = router
