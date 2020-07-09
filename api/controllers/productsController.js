var db = require('../../db/models');

const controlador = {
    list: (req, res) => {
        db.Product.findAll({
            attributes: ['id', 'name', 'price',"description","id_brand"]
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

    detail: (res,req){
        db.Product.findByPK
    }

}

module.exports = controlador

