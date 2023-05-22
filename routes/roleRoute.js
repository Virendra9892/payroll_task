const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");
const checkVald = require("../validation/roleVald");
const catchVald = require("../middleware/catchVald")
const wrapper = require("../utils/errorWrapper");
const auth = require("../middleware/auth");
const checkPermission = require("../middleware/permission");
router.post("/createRole",auth.verify,checkPermission.permission,checkVald.roleVald,catchVald,wrapper.wrapper(roleController.createRole));
router.get("/getRole",auth.verify,checkPermission.permission,wrapper.wrapper(roleController.getRole));
router.put("/updateRole/:id",auth.verify,checkPermission.permission,checkVald.roleVald,catchVald,wrapper.wrapper(roleController.updateRole));
router.delete('/deleteRole/:id',auth.verify,checkPermission.permission,wrapper.wrapper(roleController.deleteRole));

module.exports = router;