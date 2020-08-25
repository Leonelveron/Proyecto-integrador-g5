function authMiddleware(req, res, next) {
    if (req.session.loggedUser != undefined) {
        next()
    }
    else {
        res.render('cartelVisitante')
    }
}

module.exports = authMiddleware 