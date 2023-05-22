const {body} = require('express-validator');

exports.roleVald = [
    body("role")
    .notEmpty()
    .withMessage("role cannot be empty")
    .isLength({min:3,max:20})
    .withMessage("role must be min 3 char long and max 20 char long."),
    body("description")
    .notEmpty()
    .withMessage("description must be required")
    .isLength({min:8,max:100})
    .withMessage("description must be min 8 char long and max 100 char long")
]