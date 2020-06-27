let { check, validationResult, body } = require('express-validator');

let loginMiddleware = [
    check('email_login').isEmail().withMessage('El campo "Email" debe tener un mail válido'),
    check('password_login').isLength({min: 6}).withMessage("La contraseña debe tener por lo menos 6 caracteres")
]

module.exports = loginMiddleware