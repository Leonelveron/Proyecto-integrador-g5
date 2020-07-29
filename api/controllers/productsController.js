var db = require('../../db/models');

const controlador = {
    list: (req, res) => {
        db.Products.findAll({
            attributes: ['id', 'name', 'price',"description","id_brands"]
        })
            .then(products => {
                for (let i = 0; i < products.length; i++) {
                    products[i].setDataValue('detail', "/api/products/" + products[i].id)
                }
                res.json({
                    meta: {
                        count: products.length,
                        url: "/api/products"
                    },
                    data:{
                        products
                    }
                })
            })
    },

    detail: function(req, res){
        db.Products.findByPk(req.params.id)
        .then(function(product){
            res.json(product)
        })
    }
}

module.exports = controlador

