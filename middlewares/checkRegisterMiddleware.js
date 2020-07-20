let { check, validationResult, body } = require('express-validator');
const db = require("../db/models");

let registerMiddleware = [
    check('first_name').isLength({ min: 2 }).withMessage('El campo "Nombre" no puede estar vacio'),
    check('last_name').isLength({ min: 2 }).withMessage('El campo "Apellido" no puede estar vacio'),
    check('email').isEmail().withMessage('El campo "Email" debe tener un mail válido'),
    check('password').isLength({ min: 6 }).withMessage("La contraseña debe tener por lo menos 6 caracteres"),
    body('email').custom(function (value) {
        return db.Users.findOne({
            where: { mail: value }
        }).then(function (user) {
            if (user) {
                return Promise.reject()
            }
        })
    }).withMessage("El mail ya existe"),
]

module.exports = registerMiddleware
