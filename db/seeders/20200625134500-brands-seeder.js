'use strict';
var faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let brands = []

    for (let i = 0; i<19; i++){
      brands.push({
        name: faker.commerce.department()
      })
    }
 
      return queryInterface.bulkInsert('Brands', brands, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Brands', null, {});
  }
};
