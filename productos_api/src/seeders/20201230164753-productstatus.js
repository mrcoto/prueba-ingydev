'use strict';

const products = require('./data/products.json')
const models = require('./../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exists = await models.ProductStatus.count() > 0
    if (exists) {
      return;
    }
    let statuses = {}
    products.reduce((acc, product) => {
      const name = product.status
      if (!statuses.hasOwnProperty(name)) {
        statuses[name] = {name: name, createdAt: new Date(), updatedAt: new Date()}
      }
    }, statuses)
    await queryInterface.bulkInsert('product_status', Object.values(statuses), {});
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
