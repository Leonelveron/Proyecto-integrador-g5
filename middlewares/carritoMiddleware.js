const db = require("../db/models");

function carritoControl(req, res, next) {
    db.Carts.findAll({
        where: {
        }
    }).then(function (carrito) {
        res.locals.cart = carrito
    })
    next();
}

module.exports = carritoControl