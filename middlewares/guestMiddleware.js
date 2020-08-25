function guestMiddleware(req, res, next) {
    if (req.session.loggedUser == undefined) {
        next()
    }
    else {
        res.render('myAccount')
    }
}

module.exports = guestMiddleware 