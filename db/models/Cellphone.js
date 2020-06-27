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

        },
        screem_resolution: {
            type: dataTypes.STRING,
        },
        os: {
            type: dataTypes.STRING,
        },
        processor: {
            type: dataTypes.STRING,
        },
        dimensions: {
            type: dataTypes.STRING,
        },
        storage: {
            type: dataTypes.STRING,
        },
        batery: {
            type: dataTypes.STRING,
        },
        water_resistance: {
            type: dataTypes.STRING
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

    return Cellphone;
}