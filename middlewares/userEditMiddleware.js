let { check, validationResult, body } = require('express-validator');

let userEditMiddleware = [
    check('name').isLength({ min: 2 }).withMessage('El campo "Nombre" no puede estar vacio'),
    check('last_name').isLength({ min: 2 }).withMessage('El campo "Apellido" no puede estar vacio'),
    check('email').isEmail().withMessage('El campo "Email" debe tener un mail válido'),
]

module.exports = userEditMiddleware