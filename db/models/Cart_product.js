module.exports = (sequelize, dataTypes) => {
    let alias = "Carts_products"
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            notNull: true,
        },
        id_products: {
            type: dataTypes.BIGINT,
            notNull: true
        },
        id_carts: {
            type: dataTypes.BIGINT,
            allowNull: false
        }
    }
    let config = {
        tableName: "carts_products",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const Cart_product = sequelize.define(alias, cols, config);

    return Cart_product;
}