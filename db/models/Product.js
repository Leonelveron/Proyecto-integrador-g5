module.exports = (sequelize, dataTypes) => {
    let alias = "Products"
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        },
        price: {
            type: dataTypes.BIGINT,
            notNull: true
        },
        description: {
            type: dataTypes.STRING,
            notNull: true,
        },
        id_brands: {
            type: dataTypes.BIGINT,
            notNull: true
        },

    }
    let config = {
        tableName: "products",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Brands, {
            as: "brands",
            foreignKey: "id_brands"
        })
        Product.hasMany(models.Cellphones, {
            as: "cellphones",
            foreignKey: "id_products"
        })
        Product.belongsToMany(models.Carts, {
            as: "carts",
            through: "carts_products",
            foreignKey: "id_products",
            otherKey: "id_carts",
            timestamps: true
        })
    }

    return Product;
}