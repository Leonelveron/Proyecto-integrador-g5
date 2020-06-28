const db = require("../db/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controlador = {
  index: (req, res) => {
    res.render('index', { title: 'Express' });
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