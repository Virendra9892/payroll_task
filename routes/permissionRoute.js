const express = require("express");
const router = express.Router();
const permissionController = require("../controllers/permissionController");
const checkVald = require("../validation/permissionVald");
const catchVald = require("../middleware/catchVald");
const wrapper = require("../utils/errorWrapper");
const checkPermission = require("../middleware/permission")
const auth = require("../middleware/auth");
router.get("/getPermission",auth.verify,checkVald.permissionVald,catchVald,checkPermission.permission,wrapper.wrapper(permissionController.getPermission));
router.post("/createPermission",auth.verify,checkPermission.permission,wrapper.wrapper(permissionController.addPermission));
router.put("/updatePermission/:permissionId",auth.verify,checkPermission.permission,checkVald.permissionVald,catchVald,wrapper.wrapper(permissionController.updatePermission));
router.delete("/deletePermission/:permissionId",auth.verify,checkPermission.permission,wrapper.wrapper(permissionController.deletePermission));

module.exports = router;