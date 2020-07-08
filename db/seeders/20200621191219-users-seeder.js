'use strict';
var faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let verdura = []


    for (let i = 0; i<19; i++){
      users.push({
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        mail: faker.internet.email(),
        password: faker.internet.password(),
        avatar: faker.internet.avatar(),
      })
    }
    
      return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
