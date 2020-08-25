var db = require('../../db/models');

const controlador = {
    list: (req, res) => {
        db.Users.findAll({
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
    },
    detail: function(req, res){
        db.Users.findByPk(req.params.id)
        .then(function(user){
            res.json(user)
        })
    }
}

module.exports = controlador