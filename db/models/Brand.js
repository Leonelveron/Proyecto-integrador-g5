module.exports = (sequelize, dataTypes) => {
    let alias = "Brands"
    let cols = {
       id:{
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
       } ,
       name:{
        type: dataTypes.VARCHAR
       },
    }
    let config = {
        tableName: "brands",
        timestamp:false
    }

    const Brand = sequelize.define(alias, cols, config);

    return Brand;
}