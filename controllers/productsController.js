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
        console.log(productDetail)
    },

    create: (req, res) => {

    },

    indexEdit: (req, res) => {
        res.render('productEdit')
    },

    editProduct: (req, res) => {

    },

    deleteProduct: (req, res) => {

    }
};

module.exports = controlador; 