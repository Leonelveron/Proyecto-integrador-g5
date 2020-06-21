module.exports = (sequelize, dataTypes) => {
    let alias = "Users"
    let cols = {
       id:{
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
       } ,
       name: {
        type: dataTypes.VARCHAR
       },
       surname:{
        type: dataTypes.VARCHAR
       },
       mail:{
        type: dataTypes.VARCHAR
       },
       password:{
        type: dataTypes.VARCHAR
       },
       avatar:{
        type: dataTypes.VARCHAR
       },
    }
    let config = {
        tableName: "users",
        timestamp:false
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}