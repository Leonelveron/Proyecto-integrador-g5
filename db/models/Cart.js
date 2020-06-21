module.exports = (sequelize, dataTypes) => {
    let alias = "Carts"
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            notNull: true,
        },
        id_users: {
            type: dataTypes.BIGINT,
            notNull: true,
        },
    }
    let config = {
        tableName: "carts",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}