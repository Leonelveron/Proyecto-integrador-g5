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
    },

    index: (req, res) => {
        db.Brands.findAll({
        })
            .then(function (brand) {
                res.render('nuevoProducto', { brand: brand })
            })
    },

    create: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Products.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                id_brands: req.body.id_brands
            })
            res.redirect("/products/");
        }
        else {
            db.Brands.findAll({
            })
                .then(function (brand) {
                    res.render('nuevoProducto', { errors: errors.errors, brand: brand })
                })
        }
    },

    detail: (req, res) => {
        db.Products.findByPk(req.params.id, {
            include: [{ association: "brands" }]
        })
            .then(function (product) {
                res.render("producto", { product: product })
            })
    },

    indexEdit: (req, res) => {
        let pedidoProducto = db.Products.findByPk(req.params.id);
        let pedidoMArcas = db.Brands.findAll();
        Promise.all([pedidoProducto, pedidoMArcas])
            .then(function ([product, brand]) {
                res.render('productEdit', { product: product, brand: brand })
            })

    },

    editProduct: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
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
        } else {
            let pedidoProducto = db.Products.findByPk(req.params.id);
            let pedidoMArcas = db.Brands.findAll();
            Promise.all([pedidoProducto, pedidoMArcas])
                .then(function ([product, brand]) {
                    res.render('productEdit', { product: product, brand: brand, errors: errors.errors })
                })
        }
    },

    deleteProduct: (req, res) => {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products')
    },

    brands: (req, res) => {
        db.Products.findAll({
            include: [{ association: "brands" }],
            where: {
                id_brands: req.params.id
            }
        })
            .then(function (products) {
                res.render("productsListBrands", { products: products });
            })
    }
};

module.exports = controlador; 