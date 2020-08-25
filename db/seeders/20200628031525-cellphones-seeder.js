'use strict';
var faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let cellphones = []
    let products = await queryInterface.sequelize.query(
      `SELECT id FROM Products`, { type: Sequelize.QueryTypes.SELECT }
    );

    for (let i = 0; i<19; i++){
      cellphones.push({
        screen_size: faker.random.word(),
        screen_resolution: faker.random.word(),
        os: faker.commerce.product(),
        processor: faker.commerce.productAdjective(),
        dimensions: faker.random.alphaNumeric(),
        storage: faker.commerce.productMaterial(),
        batery: faker.random.word(),
        water_resistance: faker.random.word(),
        id_products: faker.random.arrayElement(products).id
      })
    }
    return queryInterface.bulkInsert('Cellphones', cellphones, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cellphones', null, {});
  }
};