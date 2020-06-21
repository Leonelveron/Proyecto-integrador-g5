module.exports = (sequelize, dataTypes) => {
    let alias = "Products"
    let cols = {
       id:{
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
       } ,
       name:{ 
        type: dataTypes.VARCHAR
       } , 
       price:{
        type: dataTypes.BIGINT
       } ,
       description:{
        type: dataTypes.VARCHAR
       } ,
       id_brands:{
        type: dataTypes.BIGINT
       } ,

    }
    let config = {
        tableName: "products",
        timestamp:false
    }

    const Product = sequelize.define(alias, cols, config);

    return Product;
}