'use strict';

const products = require('./data/products.json')
const models = require('./../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exists = await models.ProductManufacturerType.count() > 0
    if (exists) {
      return;
    }
    let manufacturerTypes = {}
    products.reduce((acc, product) => {
      const name = product.manufacturer_type
      if (!manufacturerTypes.hasOwnProperty(name)) {
        manufacturerTypes[name] = {name: name, created_at: new Date(), updated_at: new Date()}
      }
    }, manufacturerTypes)
    await queryInterface.bulkInsert('product_manufacturer_type', Object.values(manufacturerTypes), {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
