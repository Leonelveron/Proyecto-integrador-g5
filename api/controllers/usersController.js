var db = require('../../db/models');

const controlador = {
    list: (req, res) => {
        db.Users.findAll()
        .then(users =>{
            res.json(users)
        })
    }

}

module.exports = controlador