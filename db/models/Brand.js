module.exports = (sequelize, dataTypes) => {
    let alias = "Brands"
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            notNull: true,

        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        },
    }
    let config = {
        tableName: "brands",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = function(models){
        Brand.hasMany(models.Products,{
            as: "products",
            foreignKey: "id_brands"
        })
    }

    return Brand;
}