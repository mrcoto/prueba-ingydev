'use strict';

const products = require('./data/products.json')
const models = require('./../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exists = await models.ProductLine.count() > 0
    if (exists) {
      return;
    }
    let lines = {}
    products.reduce((acc, product) => {
      const name = product.line
      if (!lines.hasOwnProperty(name)) {
        lines[name] = {id: parseInt(product.line_id), name: name, created_at: new Date(), updated_at: new Date()}
      }
    }, lines)
    await queryInterface.bulkInsert('product_line', Object.values(lines), {});
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
