module.exports = (sequelize, dataTypes) => {
    let alias = "Users"
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING,
            allowNull: false
        },
    }
    let config = {
        tableName: "users",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const User = sequelize.define(alias, cols, config);

    
    User.associate = function(models){
        User.hasMany(models.Carts,{
            as: "carts",
            foreignKey: "id_users"
        })
    }

    return User;
}