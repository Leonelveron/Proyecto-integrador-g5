module.exports = (sequelize, dataTypes) => {
    let alias = "Cellphones"
    let cols = {
       id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       } ,
       screen_size:{
        type: dataTypes.VARCHAR,
       },
       screem_resolution:{
        type: dataTypes.VARCHAR,
       },
       os:{
        type: dataTypes.VARCHAR,
       },
       processor:{
        type: dataTypes.VARCHAR,
       },
       dimensions:{
        type: dataTypes.VARCHAR,
       },
       storage:{
        type: dataTypes.VARCHAR,
       },
       batery:{
        type: dataTypes.VARCHAR,
       },
       water_resistance:{
        type: dataTypes.TINYINT
       },
       id_products:{
        type: dataTypes.BIGINT
       },
    }
    let config = {
        tableName: "cellphones",
        timestamp:false
    }

    const Cellphone = sequelize.define(alias, cols, config);

    return Cellphone;
}