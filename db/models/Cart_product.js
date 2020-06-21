module.exports = (sequelize, dataTypes) => {
    let alias = "Carts_products"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_products: {
            type: dataTypes.VARCHAR,
            allowNull: false
        },
        id_carts: {
            type: dataTypes.VARCHAR,
            allowNull: false
        }
    }
    let config = {
        tableName: "carts_products",
        timestamp: false
    }

    const Cart_product = sequelize.define(alias, cols, config);

    return Cart_product;
}