const db = require("../db/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controlador = {
  index: (req, res) => {
    db.Products.findAll({
      include: [{ association: "brands" }],
      order: [
        ['price', 'ASC']
      ],
      limit: 8
  })
      .then(function (products) {
        res.render('index', { products: products})
      })
  },
  
  search: (req, res) => {
    db.Products.findAll({
      include: [{ association: "brands" }],
      where: {
        name: {
          [Op.substring]: req.body.products,
        }
      }
    }).then(function (products) {
      res.render('productsList2', { products: products })
    })
  }
};

module.exports = controlador;