let { check, validationResult, body } = require('express-validator');
const db = require("../db/models");

let productEditMiddleware = [
    check('title').isLength({ min: 5 }).withMessage('El campo "Nombre del equipo" debe tener por lo menos 5 caracteres'),
    check('description').isLength({ min: 20 }).withMessage('El campo "Descripción" debe tener por lo menos 20 caracteres'),
    check('price').isInt({min: 1, max: 250000}).withMessage('El campo "precio" debe ser entre 1 y 250000'), 
]

module.exports = productEditMiddleware