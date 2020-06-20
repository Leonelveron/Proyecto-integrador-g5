module.exports = (sequelize, dataTypes) => {
    let alias = "Carts"
    let cols = {
       id:{
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
       } ,
       id_users:{
        type: dataTypes.BIGINT,
       },
    }
    let config = {
        tableName: "carts",
        timestamp:false
    }

    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}