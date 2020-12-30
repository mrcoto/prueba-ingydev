'use strict';

const products = require('./data/products.json')
const models = require('./../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exists = await models.ProductCategory.count() > 0
    if (exists) {
      return;
    }
    let categories = {}
    products.reduce((acc, product) => {
      const name = product.category
      if (!categories.hasOwnProperty(name)) {
        categories[name] = {id: parseInt(product.category_id), name: name, created_at: new Date(), updated_at: new Date()}
      }
    }, categories)
    await queryInterface.bulkInsert('product_category', Object.values(categories), {});
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
