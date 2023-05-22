var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
const userVald = require("../validation/userValidation")
const catchVald = require("../middleware/catchVald");
const wrapper = require("../utils/errorWrapper");
const auth = require("../middleware/auth");
const checkPermission = require("../middleware/permission")
/* GET users listing. */
router.post('/register',userVald.registerUser,catchVald, wrapper.wrapper(userController.registerUser));
router.get("/getAllUser",auth.verify,checkPermission.permission,wrapper.wrapper(userController.getAllUser));
router.get("/getUserById",auth.verify,checkPermission.permission,wrapper.wrapper(userController.getUserById));
router.put("/updateUser/:id",auth.verify,checkPermission.permission,userVald.registerUser,catchVald,wrapper.wrapper(userController.updateUser));
router.delete("/deleteUser/:id",auth.verify,wrapper.wrapper(userController.deleteUser));
router.get("/recGetJob/:jobId",wrapper.wrapper(userController.getApplyJobCandidate));

module.exports = router;
