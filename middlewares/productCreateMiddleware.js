let { check, validationResult, body } = require('express-validator');
const db = require("../db/models");

let productCreateMiddleware = [
    check('name').isLength({ min: 2 }).withMessage('El campo "Nombre del equipo" no puede estar vacio'),
    check('description').isLength({ min: 2 }).withMessage('El campo "Descripción" no puede estar vacio'),
    check('price').isInt({min: 1, max: 250000}).withMessage('El campo "precio" debe ser entre 1 y 250000'),
    // check('password').isLength({ min: 6 }).withMessage("La contraseña debe tener por lo menos 6 caracteres"),
    // body('email').custom(function (value) {
    //     db.Users.findAll()
    //         .then(function (users) {
    //             for (let i = 0; i < users.length; i++) {
    //                 if (users[i].mail == value) {
    //                     return false
    //                 }
    //             }
    //             return true
    //         })
    // }).withMessage("El mail ya existe"),
]

module.exports = productCreateMiddleware