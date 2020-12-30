'use strict';

const products = require('./data/products.json')
const models = require('./../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exists = await models.ProductUen.count() > 0
    if (exists) {
      return;
    }
    let uens = {}
    products.reduce((acc, product) => {
      const name = product.uen
      if (!uens.hasOwnProperty(name)) {
        uens[name] = {name: name, created_at: new Date(), updated_at: new Date()}
      }
    }, uens)
    await queryInterface.bulkInsert('product_uen', Object.values(uens), {});
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
