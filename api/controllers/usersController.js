var db = require('../../db/models');

const controlador = {
    list: (req, res) => {
        db.User.findAll({
            attributes: ['id', 'name', 'mail']
        })
            .then(users => {
                for (let i = 0; i < users.length; i++) {
                    users[i].setDataValue('detail', "/api/users/" + users[i].id)
                }
                res.json({
                    meta: {
                        count: users.length,
                        url: "/api/users"
                    },
                    data:{
                        users
                    }
                })
            })
    }

}

module.exports = controlador