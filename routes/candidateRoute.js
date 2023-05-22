const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidateControllers");
const auth = require("../middleware/auth");
const wrapper = require("../utils/errorWrapper");
const checkPermission = require("../middleware/permission")
router.post("/applyJob",auth.verify,auth.verify,checkPermission.permission,wrapper.wrapper(candidateController.applyJob));
router.get("/exportsJob",wrapper.wrapper(candidateController.exportsApplyJob));
router.get('/canSeeApplyJob',auth.verify,checkPermission.permission,wrapper.wrapper(candidateController.canSeeJobList))
module.exports = router;