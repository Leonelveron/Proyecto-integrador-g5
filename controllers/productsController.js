const fs = require('fs');
const path = require('path');
const db = require("../db/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    list: (req, res) => {
        let allProducts = products.filter(product => product.stock > 0)
        res.render('productsList2', { allProducts })
    },

    /* db.(algo).findAll(
        {order: [["(algo)", "ASC"]]}
    ).then(function (products){
     

     res.render("productsList2",{"allproducts": products});
    })
     */

    create: (req, res) => {
        res.render('nuevoProducto')
    },

   /*  Con DB      db.(Algo).findAll().then(function (genres){
        
        res.render("nuevoProducto")
    })
}, */


    detail: (req, res) => {
        let productDetail = products.filter(product => req.params.id == product.id)
        res.render('producto', { productDetail: productDetail })
    },

    created: (req, res) => {

 
   /* Con DB  created : function (req, res) {
            db.(algo).create({
                marca: req.body.marca ,
                modelo: req.body.modelo ,
                estado: req.body.estado ,
                stock: req.body.stock,
                precio: req.body.precio,
                genre_id: req.body.genre_id
            }).then(function (product){
             
        
                res.redirect("/products/detail/req.params.id");
               })
        }

 */
 
/* Antes DB  */
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
        let productEdited = req.body
        let productEditedJSON = JSON.stringify(productEdited);
        fs.writeFileSync('./data/products.json', productEditedJSON)
        res.render('productEdit', { productEdited: productEdited })
    },

    deleteProduct: (req, res) => {
        let productDeleted = products.filter(product => product.id != req.params.id)
        let productDeletedJSON = JSON.stringify(productDeleted)
        fs.writeFileSync('./data/products.json', productDeletedJSON)
        res.redirect('/products/detail')
    }
};

module.exports = controlador; 