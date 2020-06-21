const fs = require('fs');
const path = require('path');
let db = require('../db/models');
const {Op} = require('sequelize');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    list: (req, res) => {
        let allProducts = products.filter(product => product.stock > 0)
        res.render('productsList2', { allProducts })
    },

    index: (req, res) => {
        res.render('nuevoProducto')
    },

    detail: (req, res) => {
        let productDetail = products.filter(product => req.params.id == product.id)
        res.render('producto', { productDetail: productDetail })
    },

    create: (req, res) => {
        let jsonproduct = fs.readFileSync("../data/product.json", { encoding: "utf-8" })
        let productos = []
        let producto = {
            nombre: req.body.nombre,
            stock: req.body.stock,
            precio: req.body.precio,
        }

        productos = JSON.parse(jsonproduct)

        productos.push(producto)
        let productosJSON = JSON.stringify(productos)

    },

    indexEdit: (req, res) => {
        let productDetail = products.filter(product => req.params.id == product.id);
        res.render('productEdit', { productDetail: productDetail });
    },

    editProduct: (req, res) => {
        db.Products.update({
            name: req.body.title,
            description: req.body.description,
            price: req.body.price,
            brand: req.body.brand
        })
       
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