module.exports = (sequelize, dataTypes) => {
    let alias = "Cellphones"
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            notNull: true,
        },
        screen_size: {
            type: dataTypes.STRING,
            notNull: true

        },
        screen_resolution: {
            type: dataTypes.STRING,
            notNull: true
        },
        os: {
            type: dataTypes.STRING,
            notNull: true
        },
        processor: {
            type: dataTypes.STRING,
            notNull: true
        },
        dimensions: {
            type: dataTypes.STRING,
            notNull: true
        },
        storage: {
            type: dataTypes.STRING,
            notNull: true
        },
        batery: {
            type: dataTypes.STRING,
            notNull: true
        },
        water_resistance: {
            type: dataTypes.STRING,
            notNull: true
        },
        id_products: {
            type: dataTypes.BIGINT,
            notNull: true,
        },
    }
    let config = {
        tableName: "cellphones",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const Cellphone = sequelize.define(alias, cols, config);

    Cellphone.associate = function(models){
        Cellphone.belongsTo(models.Products, {
            as: "products",
            foreignKey: "id_products"
        })
    }
    return Cellphone;
}