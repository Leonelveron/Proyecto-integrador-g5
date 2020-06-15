var fs = require('fs');

function recordameMiddleware(req, res, next) {
    next();
    if (req.cookies.recordame != undefined && req.session.loggedUser == undefined) {
        let archivoUsers = fs.readFileSync('./data/profile.json', { encoding: 'utf-8' })
        let users = []
        if (archivoUsers == "") {
            users = []
        }
        else {
            users = JSON.parse(archivoUsers)
        }
        let userToLogin

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.cookies.recordame) {
                userToLogin = users[i];
                break;
            }
        }
        req.session.loggedUser = userToLogin 
    }

}


module.exports = recordameMiddleware