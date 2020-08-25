const db = require("../db/models");

function recordameMiddleware(req, res, next) {
    if (req.cookies.recordame != undefined && req.session.loggedUser == undefined) {
        db.Users.findOne({
            where: { mail: req.cookies.recordame }
        }).then(function (user) {
            req.session.loggedUser = user
        })
    }
    next();
}

module.exports = recordameMiddleware