let { check, validationResult, body } = require('express-validator');

let productCreateMiddleware = [
    check('title').isLength({ min: 2 }).withMessage('El campo "Nombre del producto" no puede estar vacio'),
    check('description').isLength({ min: 2 }).withMessage('El campo "Descripción" no puede estar vacio'),
    check('price').isInt({min: 1, max: 250000}).withMessage('El campo "precio" debe ser entre 1 y 250000')
]

module.exports = productCreateMiddleware