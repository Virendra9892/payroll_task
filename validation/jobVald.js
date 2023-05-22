const {body} = require("express-validator");

exports.jobVald = [
    body("title")
    .notEmpty()
    .withMessage("Job title must be required.")
    .isLength({min:8,max:89})
    .withMessage("Job title is min 8 char and max 89 char long."),
    body("description")
    .notEmpty()
    .withMessage("description must be required.")
    .isLength({min:20,max:100})
    .withMessage("description is min 20 char and max 100 char long."),
]