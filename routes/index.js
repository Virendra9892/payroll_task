var express = require('express');
var router = express.Router();
const userRoute = require("./userRoute");
const jobRoute = require("./jobRoute");
const roleRoute = require("./roleRoute");
const permissionRoute = require('./permissionRoute');
const adminRoute = require("./adminRoute");
const candidateRoute = require("./candidateRoute");
const authRoute = require("./authRoute");
/* GET home page. */
router.use('/user',userRoute);
router.use("/job",jobRoute);
router.use("/role",roleRoute);
router.use("/permission",permissionRoute);
router.use("/admin",adminRoute);
router.use("/candidate",candidateRoute)
router.use("/userAuth",authRoute)
module.exports = router;
