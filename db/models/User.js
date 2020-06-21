module.exports = (sequelize, dataTypes) => {
    let alias = "Users"
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
        surname: {
            type: dataTypes.STRING,
            notNull: true
        },
        mail: {
            type: dataTypes.STRING,
            notNull: true,
        },
        password: {
            type: dataTypes.STRING,
            notNull: true
        },
        avatar: {
            type: dataTypes.STRING,
            notNull: true
        },
    }
    let config = {
        tableName: "users",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}