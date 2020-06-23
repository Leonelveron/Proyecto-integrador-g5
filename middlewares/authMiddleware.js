function authMiddleware(req, res, next) {
    if (req.session.loggedUser != undefined) {
        next()
    }
    else {
        res.send('Esta página es solo para usuarios logueados')
    }
}

module.exports = authMiddleware 