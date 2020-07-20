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

    Cart.associate = function (models) {
        Cart.belongsToMany(models.Products, {
            as: "products",
            through: "carts_products",
            foreignKey: "id_carts",
            otherKey: "id_products",
            timestamps: true
        })

        Cart.belongsTo(models.Users, {
            as: "users",
            foreignKey: "id_users"
        })

        Cart.belongsToMany(models.Products, {
            as: 'productsPivot',
            through: 'carts_products',
            foreignKey: 'id_carts',
            otherKey: 'id_products',
            timestamps: true
        });
    }


    return Cart;
}