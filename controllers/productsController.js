const fs = require('fs');
const path = require('path');
const db = require("../db/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
let { check, validationResult, body } = require('express-validator');

const controlador = {
    list: (req, res) => {

        db.Products.findAll({
            include: [{ association: "brands" }]
        })
            .then(function (products) {
                res.render("productsList2", { products: products });
            })

        /* let allProducts = products.filter(product => product.stock > 0)
        res.render('productsList2', { allProducts }) */
    },

    index: (req, res) => {
        db.Brands.findAll({})
            .then(function (brand) {
                res.render('nuevoProducto', { brand: brand })
            })
    },

    create: (req, res) => {
        console.log(req.body)
        db.Products.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            id_brands: req.body.id_brands
        }).then(function (brand) {
            res.redirect("/products/");
        })

    },

    detail: (req, res) => {

        db.Products.findByPk(req.params.id,
        ).then(function (product) {
            res.render("producto", { product: product })
        })

        /* 
                let productDetail = products.filter(product => req.params.id == product.id)
                res.render('producto', { productDetail: productDetail }) */
    },


    /* Antes DB  */
    /*       let jsonproduct = fs.readFileSync("../data/product.json", { encoding: "utf-8" })
          let productos = []
          let producto = {
              nombre: req.body.nombre,
              stock: req.body.stock,
              precio: req.body.precio,
          }
  
          productos = JSON.parse(jsonproduct)
  
          productos.push(producto)
          let productosJSON = JSON.stringify(productos) 
   */

    indexEdit: (req, res) => {
        let pedidoProducto = db.Products.findByPk(req.params.id);
        let pedidoMArcas = db.Brands.findAll();
        Promise.all([pedidoProducto, pedidoMArcas])
            .then(function ([product, brand]) {
                res.render('productEdit', { product: product, brand: brand })
            })

    },

    editProduct: (req, res) => {
        db.Products.update({
            name: req.body.title,
            description: req.body.description,
            price: req.body.price,
            id_brands: req.body.brand
        },
            {
                where: {
                    id: req.params.id
                }
            })
        res.redirect('/products/' + req.params.id)

    },

    deleteProduct: (req, res) => {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products')
    }
};

module.exports = controlador; 