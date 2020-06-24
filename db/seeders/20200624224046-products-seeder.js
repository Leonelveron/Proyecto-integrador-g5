'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let products = []

    for (let i = 0; i<19; i++){
      users.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.product(),
      })
    }
    return queryInterface.bulkInsert('Products', products, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
