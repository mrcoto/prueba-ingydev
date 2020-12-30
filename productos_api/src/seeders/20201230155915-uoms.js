'use strict';

const products = require('./data/products.json')
const models = require('./../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exists = await models.ProductUom.count() > 0
    if (exists) {
      return;
    }
    let uoms = {}
    products.reduce((acc, product) => {
      const code = product.uom.toUpperCase()
      if (!uoms.hasOwnProperty(code)) {
        uoms[code] = {code: code, created_at: new Date(), updated_at: new Date()}
      }
    }, uoms)
    await queryInterface.bulkInsert('product_uom', Object.values(uoms), {});
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
