const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth")
const wrapper = require("../utils/errorWrapper");
const authVald = require("../validation/authVald");
const checkVald = require("../middleware/catchVald");

router.post("/login",authVald.loginValidation,checkVald,wrapper.wrapper(authController.loginUser));
router.post("/forget",authVald.verifyEmail,checkVald,wrapper.wrapper(authController.forgetPassword));
router.post("/verify-otp/",authVald.otp,checkVald,wrapper.wrapper(authController.verifyOtp));
router.post("/reset",authVald.checkPasswd,checkVald,wrapper.wrapper(authController.resetPassword));
router.post("/logout",auth.verify,wrapper.wrapper(authController.logoutUser));

module.exports = router;