var fs = require('fs');
const db = require("../db/models");


function recordameMiddleware(req, res, next) {
    if (req.cookies.recordame != undefined && req.session.loggedUser == undefined) {
        db.Users.findOne({
            where: { mail: req.cookies.recordame }
        }).then(function (user) {
            req.session.loggedUser = user
        })
        // let archivoUsers = fs.readFileSync('./data/profile.json', { encoding: 'utf-8' })
        // let users = []
        // if (archivoUsers == "") {
        //     users = []
        // }
        // else {
        //     users = JSON.parse(archivoUsers)
        // }
        // let userToLogin

        // for (let i = 0; i < users.length; i++) {
        //     if (users[i].email == req.cookies.recordame) {
        //         userToLogin = users[i];
        //         break;
        //     }
        // }
        // req.session.loggedUser = userToLogin 
    }
    next();
}


module.exports = recordameMiddleware