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
  },

  cart: (req, res) => {
    db.Carts.findOne({
      include: ['productsPivot'],
      where: {
        id_users: req.session.loggedUser.id,
        id: req.params.id
      }
    }).then((carts) => {
      res.render('carrito', { carts : carts });
    });
  }
};

module.exports = controlador; 