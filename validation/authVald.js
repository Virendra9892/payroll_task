const { body } = require('express-validator');

exports.loginValidation = [
    body('email').notEmpty().withMessage('Email must be specified.').isLength({min: 9, max: 50}).trim()
    .isEmail().withMessage("Email must be a valid email"),

    body("password").notEmpty().withMessage("password is required")
        .isLength({ min: 8, max: 15 }).withMessage("password must be minimum 8 characters").trim()
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})/).withMessage("password must include one small case one upper case and one special character.")
]


exports.verifyEmail = [
    body('email').notEmpty().withMessage('Email must be specified.').isLength({min: 9, max: 50}).trim()
    .isEmail().withMessage("Email must be a valid email")
]

exports.otp = [
    body('otp').notEmpty().withMessage('otp is required').isLength({min:4,max:6}).trim()
]

exports.checkPasswd = [
    body("password").notEmpty().withMessage("password is required")
        .isLength({ min: 8, max: 15 }).withMessage("password must be minimum 8 characters").trim()
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})/).withMessage("password must include one small case one upper case and one special character."),
    
    body('confirmPassword').notEmpty().withMessage("password is required")
    .isLength({ min: 8, max: 15 }).withMessage("password must be minimum 8 characters").trim()
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})/).withMessage("password must include one small case one upper case and one special character.")
]