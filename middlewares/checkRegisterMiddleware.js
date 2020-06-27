let { check, validationResult, body } = require('express-validator');

let registerMiddleware = [
    check('first_name').isLength({ min: 2 }).withMessage('El campo "Nombre" no puede estar vacio'),
    check('last_name').isLength({ min: 2 }).withMessage('El campo "Apellido" no puede estar vacio'),
    check('email').isEmail().withMessage('El campo "Email" debe tener un mail válido'),
    check('password').isLength({ min: 6 }).withMessage("La contraseña debe tener por lo menos 6 caracteres")
]

module.exports = registerMiddleware