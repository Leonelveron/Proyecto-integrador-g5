const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    list: (req, res) => {
        let allProducts = products.filter(product => product.stock > 0)
        res.render('productsList2', {allProducts})
    },

    index: (req, res) => {
            res.render('nuevoProducto')
    },

    detail: (req, res) =>{
        let productDetail = products.filter(product => req.params.id == product.id)
        res.render('producto', {productDetail: productDetail})
    },

    create: (req, res) => {
        let NewProduct = {
            name:null,
            precio:null,
        }
        NewProduct.name = req.body.name
        NewProduct.precio = req.body.precio

        res.send ("nuevoProducto", {NewProduct: product})
    },

    indexEdit: (req, res) => {
        let productDetail = products.filter(product => req.params.id == product.id)
        res.render('productEdit', {productDetail: productDetail})
   },

    editProduct: (req, res) => {

    },

    deleteProduct: (req, res) => {

    }
};

module.exports = controlador; 