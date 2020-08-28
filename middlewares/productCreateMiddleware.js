let { check, validationResult, body } = require('express-validator');

let productCreateMiddleware = [
    check('name').isLength({ min: 2 }).withMessage('El campo "Modelo del equipo" no puede estar vacio'),
    check('description').isLength({ min: 10 }).withMessage('El campo "Descripción" no puede estar vacio'),
    check('price').isInt({min: 1, max: 250000}).withMessage('El campo "Precio" debe ser entre 1 y 250000'),
    check('dimensions').isLength({ min: 2 }).withMessage('El campo "Dimensiones" no puede estar vacio'),
    check('screen_size').isLength({ min: 2 }).withMessage('El campo "Tamaño de Panalla" no puede estar vacio'),
    check('screen_resolution').isLength({ min: 2 }).withMessage('El campo "Resolución de Pantalla" no puede estar vacio'),
    check('os').isLength({ min: 2 }).withMessage('El campo "Sistema Operativo" no puede estar vacio'),
    check('processor').isLength({ min: 2 }).withMessage('El campo "Procesador" no puede estar vacio'),
    check('storage').isLength({ min: 2 }).withMessage('El campo "Almacenamiento" no puede estar vacio'),
    check('battery').isLength({ min: 2 }).withMessage('El campo "Batería" no puede estar vacio'),
    check('water_resistance').isLength({ min: 2 }).withMessage('El campo "Es resistente al agua?" no puede estar vacio'),
]

module.exports = productCreateMiddleware