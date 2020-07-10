const db = require("../db/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const controlador = {
  carrito: (req, res) => {
    db.Products.findAll({
      include: [{ association: "brands" }],
      limit: 3
    })
      .then((products) => {
        res.render('carrito', { products: products });
      });
  }
};

module.exports = controlador; 