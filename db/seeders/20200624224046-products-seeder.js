'use strict';
var faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let products = []
    let brands = await queryInterface.sequelize.query(
      `SELECT id FROM Brands`, { type: Sequelize.QueryTypes.SELECT }
    );

    for (let i = 0; i<19; i++){
      products.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.product(),
        id_brands: faker.random.arrayElement(brands).id
      })
    }
    return queryInterface.bulkInsert('Products', products, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
