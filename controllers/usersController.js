var fs = require('fs');
var bcrypt = require('bcrypt');
var multer = require('multer')
var path = require('path')
let { check, validationResult, body } = require('express-validator');
let db = require('../db/models');
const {Op} = require('sequelize');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })

const profilesFilePath = path.join(__dirname, '../data/profile.json');
const profiles = JSON.parse(fs.readFileSync(profilesFilePath, 'utf-8'));

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
    }
    else {
      res.render('registro', { errors: errors.errors })
    }
  },

  login: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
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
        if (users[i].email == req.body.email_login) {
          if (bcrypt.compareSync(req.body.password_login, users[i].password)) {
            userToLogin = users[i];
            break;
          }
        }
      }
      if (userToLogin == undefined) {
        res.render('registro', { errors: [{ msg: 'Datos invalidos' }] })
      }
      req.session.loggedUser = userToLogin
      if( req.body.recordame != undefined){
        res.cookie('recordame', userToLogin.email, {maxAge: 900000000})
      }

      res.redirect('/')
    }

    else {
      res.render('registro', { errors: errors.errors })
    }
  },
  check: (req, res) => {
    if(req.session.loggedUser){
      console.log(req.session)
    res.send('Estas logueado ' + req.session.loggedUser.email)
    } else{
      res.send('No estas logueado')
    }
  },
  
  myAccount: (req, res) => {
    db.Users.findByPk(req.params.id, {}).
      then(function (user) {
          res.render('myAccount', { user: user })
      })
  },

  update: (req, res) => {
    db.Users.update({
      first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files[0].filename
    },
    {
      where: {
        id: req.params.id
      }
    })
    res.redirect('/users/myAccount' + req.params.id)
  },

  delete: (req, res) => {
    db.Users.destroy({
      where:{
        id: req.params.id
      }
    })
    res.redirect('/')
  }
}

module.exports = controlador;