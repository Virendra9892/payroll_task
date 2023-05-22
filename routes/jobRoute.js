const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobControllers");
const checkVald = require("../validation/jobVald");
const catchVald = require("../middleware/catchVald")
const wrapper = require("../utils/errorWrapper");
const auth = require("../middleware/auth");
const checkPermission = require("../middleware/permission");
router.post("/register",checkVald.jobVald,catchVald,auth.verify,checkPermission.permission,wrapper.wrapper(jobController.registerJob));
router.get("/findAllJob",auth.verify,wrapper.wrapper(jobController.getAllJob));
router.get("/findJobById/:id",auth.verify,wrapper.wrapper(jobController.getJobById));
router.put("/updateJob/:id",checkVald.jobVald,catchVald,auth.verify,checkPermission.permission,wrapper.wrapper(jobController.updateJob));
router.delete("/deleteJob/:id",wrapper.wrapper(jobController.deleteJob));

module.exports = router;    