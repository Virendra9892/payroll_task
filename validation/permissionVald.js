const {body} = require("express-validator");

exports.permissionVald = [
    body("method")
    .notEmpty()
    .withMessage("Method must be required")
    .isLength({min:2,max:10})
    .withMessage("permission should be min 2 char and max 10 char long.").trim(),
    body("path")
    .notEmpty()
    .withMessage("path must be required")
    .isLength({min:2,max:20})
    .withMessage("path must be min 2 char long and max 20 char long"),
    body("url")
    .notEmpty()
    .withMessage("url should not be empty")
    .isLength({min:2,max:50})
    .withMessage("url must be min 2 char long and max 50 char long."),
    body("baseUrl")
    .notEmpty()
    .withMessage("baseUrl must be required")
    .isLength({min:2,max:20})
    .withMessage("baseUrl must be min 2 char long and max 20 char long")
]