const fs = require('fs');
const path = require('path');
const db = require("../db/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    list: (req, res) => {

        db.Product.findAll().then(function (products){
     
            res.render("productsList2",{"allproducts": products});
           })

        /* let allProducts = products.filter(product => product.stock > 0)
        res.render('productsList2', { allProducts }) */
    },
    create: (req, res) => {
        db.Brand.findAll().then(function(brand){
            
            res.render('nuevoProducto', {"brand": brand}) 
        
        }) 
        
    },

    detail: (req, res) => {

        db.Product.findByPk(req.params.id,
        ).then(function (product){
            res.render("producto", {"product" : product})
        })

/* 
        let productDetail = products.filter(product => req.params.id == product.id)
        res.render('producto', { productDetail: productDetail }) */
    },


   /* Con DB */
   
   created : function (req, res) {
            db.Product.create({
                name: req.body.name ,
                id_brand: req.body.id_brand ,
                price: req.body.price,
                description: req.body.description,
            }).then(function (product){
             
        
                res.redirect("/products/detail/req.params.id");
               })
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
        let productDetail = products.filter(product => req.params.id == product.id);
        res.render('productEdit', { productDetail: productDetail });
    },

    editProduct: (req, res) => {
        db.Products.update({
            name: req.body.title,
            description: req.body.description,
            price: req.body.price,
            brand: req.body.brand
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