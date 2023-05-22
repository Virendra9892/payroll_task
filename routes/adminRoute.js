const express = require("express");
const router = express.Router();
const checkPermission = require("../middleware/permission")
const auth = require("../middleware/auth");
const adminController = require("../controllers/adminController");
const wrapper = require("../utils/errorWrapper");
router.get("/exportsUser/:roleId",checkPermission.permission,wrapper.wrapper(adminController.exportsUserData));
router.post("/addRecruiter",auth.verify,checkPermission.permission,wrapper.wrapper(adminController.addRecruiter));
router.put("/updateRecruiter/:id",auth.verify,checkPermission.permission,wrapper.wrapper(adminController.updateRecruiter));
router.delete("/deleteUser/:id",auth.verify,checkPermission.permission,wrapper.wrapper(adminController.removeUserAccounts));
router.get("/exportAppliedJob/:id",auth.verify,checkPermission.permission,wrapper.wrapper(adminController.exportApplyJob));
router.get("/getApplyJob/:id",wrapper.wrapper(adminController.getAppliedJob));
router.get("/getAllRec/:roleId",auth.verify,checkPermission.permission,wrapper.wrapper(adminController.getAllRecAndCan));
router.post("/createRolePermission",auth.verify,checkPermission.permission,wrapper.wrapper(adminController.createRolePermission));
module.exports = router;