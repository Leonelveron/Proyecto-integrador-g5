const db = require("../db/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const controlador = {

  create: (req, res) => {
    db.Carts.create({
      id_users: req.session.loggedUser.id
    })

    res.redirect('/');
  },





  cart: (req, res) => {
    db.Carts.findOne({
      include: ['productsPivot'],
      where: {
        id_users: req.session.loggedUser.id

      }
    }).then((carts) =>{
      console.log(carts)
      res.render('carrito', {
        carts : carts
      });
    });
  },

  add: (req, res) => {

    db.Carts.findOne({
      where:{
      id_users: req.session.loggedUser.id
      }

    }).then((carts)=> {
      console.log(carts)
      carts.addProduct(req.params.id);
    })

    

    

    res.redirect('/carrito');

  },


  delete: (req, res) => { 

    db.Carts.findOne({
      where:{
      id_users: req.session.loggedUser.id
      }

    }).then((carts)=> {
      console.log(carts)
      carts.removeProduct(req.params.id);
    })

    res.redirect('/carrito');
  }

  /*

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
        id:5
      }
    }).then((carts) => {
      res.render('carrito', { carts : carts });
    });
  }

  */
};

module.exports = controlador; 