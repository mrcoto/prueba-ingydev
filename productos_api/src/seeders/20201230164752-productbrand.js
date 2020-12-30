'use strict';

const products = require('./data/products.json')
const models = require('./../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exists = await models.ProductBrand.count() > 0
    if (exists) {
      return;
    }
    let brands = {}
    products.reduce((acc, product) => {
      const name = product.brand
      if (!brands.hasOwnProperty(name)) {
        brands[name] = {name: name, createdAt: new Date(), updatedAt: new Date()}
      }
    }, brands)
    await queryInterface.bulkInsert('product_brand', Object.values(brands), {});
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
