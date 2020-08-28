var fs = require('fs');
var bcrypt = require('bcrypt');
var multer = require('multer')
var path = require('path')
let {
  check,
  validationResult,
  body
} = require('express-validator');
let db = require('../db/models');
const {
  Op
} = require('sequelize');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({
  storage: storage
})

const controlador = {
  index: (req, res, ) => {
    res.render('registro');
  },

  register: (req, res, next) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Users.create({
        name: req.body.first_name,
        surname: req.body.last_name,
        mail: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files[0].filename
      })
      res.redirect('/')
    } else {
      res.render('registro', {
        errors: errors.errors
      })
    }
  },

  login: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let userToLogin
      db.Users.findAll({
          include: [{
            association: "carts"
          }]
        })
        .then(function (users) {
          for (let i = 0; i < users.length; i++) {
            if (users[i].mail == req.body.email_login) {
              if (bcrypt.compareSync(req.body.password_login, users[i].password)) {
                userToLogin = users[i];
                console.log(users[i].admin)
                console.log(users[i])

                break;
              }
            }
          }
          if (userToLogin == undefined) {
            res.render('registro', {
              errors: [{
                msg: 'Datos invalidos'
              }]
            })
          }
          req.session.loggedUser = userToLogin
          if (req.body.recordame != undefined) {
            res.cookie('recordame', userToLogin.email, {
              maxAge: 900000000
            })
          }
          res.redirect('/')
        })
    } else {
      res.render('registro', {
        errors: errors.errors
      })
    }
  },

  check: (req, res) => {
    if (req.session.loggedUser) {
      res.send('Estas logueado ' + req.session.loggedUser.mail)
    } else {
      res.send('No estas logueado')
    }
  },

  myAccount: (req, res) => {
    const {
      loggedUser
    } = req.session
    console.log(loggedUser)
    db.Users.findByPk(loggedUser.id)
      .then(function (user) {
        res.render('myAccount', {
          user


        })
      })

  },
  updateView: (req, res) => {
    const {
      loggedUser
    } = req.session
    db.Users.findByPk(loggedUser.id)
      .then(function (user) {
        res.render('editAccount', {
          user
        })
      })
  },

  update: (req, res) => {
    console.log(req)
    const {
      loggedUser
    } = req.session
    let errors = validationResult(req);
    let toUpdate = {
      name: req.body.name,
      surname: req.body.surname,
      mail: req.body.mail,
      password: bcrypt.hashSync(req.body.password, 10),
    }
    if (req.files[0]) {
      toUpdate = {
        ...toUpdate,
        avatar: req.files[0].filename
      }
    }
    if (errors.isEmpty()) {
      db.Users.update(toUpdate, {
        where: {
          id: loggedUser.id
        }
      })
      res.redirect('/users/myAccount')
    } else {
      res.render('editAccount', {
        errors: errors.errors
      })
    }
  },

  delete: (req, res) => {
    const {
      loggedUser: {
        id
      }
    } = req.session
    db.Users.destroy({
      where: {
        id
      }
    })
    req.session.loggedUser = undefined
    res.redirect('/')
  },

  close: (req, res) => {
    req.session.loggedUser = undefined
    res.redirect('/')
  },

  miscompras2: (req, res) => {
    db.Carts.findAll({
      include: ['productsPivot'],
      where: {
        id_users: req.session.loggedUser.id,
      }
    }).then((carts) => {
      console.log(carts)
      res.render('miscompras', {
        carts: carts
      });
    });
  },

  admin: (req, res) => {
    const {
      loggedUser
    } = req.session
    console.log(loggedUser)
    if(loggedUser.admin == 1){
    db.Products.findAll({

    }).then((products)=>{
      console.log(products);
      res.render('admin', {
        products: products
        
      })
    })
  }else{
    res.redirect('/')
  }

    
    /*
    let pedidoProducts = db.Products.findAll()
    let pedidoUsers = db.Users.findAll()

    Promise.all([pedidoProducts, pedidoUsers])
      .then(function(products, users){

        res.render('admin', {products:products, users:users})

      })
      
      */

  }


}
module.exports = controlador;