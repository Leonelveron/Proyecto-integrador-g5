'use strict';
var faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let names = []
    let surnames = []
    let mails = []
    let passwords = []
    let avatars = []

    for (let i = 0; i<19; i++){
      names.push({
        name: faker.name.firstName(),
      })
    }
    for (let i = 0; i<19; i++){
      surnames.push({
        surname: faker.name.lastName(),
      })
    }
    for (let i = 0; i<19; i++){
      mails.push({
        mail: faker.internet.email(),
      })
    }
    for (let i = 0; i<19; i++){
      passwords.push({
        password: faker.internet.password(),
      })
    }
    for (let i = 0; i<19; i++){
      avatars.push({
        avatar: faker.internet.avatar(),
      })
    }
    
      return queryInterface.bulkInsert('users',[ names, surnames, mails, passwords, avatars],  {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
