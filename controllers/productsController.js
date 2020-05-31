const controlador = {
    list: (req, res) => {
        res.render('productslist')
    },

    index: (req, res) => {
            res.render('nuevoProducto')
    },

    detail: (req, res) =>{
        res.render('productDetail')
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