const {body} = require("express-validator");

exports.registerUser = [
    body("name")
    .notEmpty()
    .withMessage("name must be required")
    .isLength({min:5,max:18})
    .withMessage("name should be minimum 5 char long and maximum 18 char long.")
    .trim(),

    body("email")
    .notEmpty()
    .withMessage("email must be required")
    .isLength({min:5,max:55})
    .withMessage("email.should be minimum 5 char long and maximum 25 char long.")
    .isEmail()
    .withMessage("please enter valid email")
    .trim(),

    body("password")
    .notEmpty()
    .withMessage("password should not be empty")
    .trim()
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    .withMessage('password must contain one upperCase, one lowerCase, one Integer and one special character'),

]