'use strict';

const products = require('./data/products.json')
const models = require('./../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exists = await models.Product.count() > 0
    if (exists) {
      return;
    }

    const uomsId = (await models.ProductUom.findAll())
      .reduce((acc, el) => {acc[el.code] = el.id; return acc}, {})
    const statusesId = (await models.ProductStatus.findAll())
      .reduce((acc, el) => {acc[el.name] = el.id; return acc}, {})
    const manufacturerTypesId = (await models.ProductManufacturerType.findAll())
      .reduce((acc, el) => {acc[el.name] = el.id; return acc}, {})
    const uensId = (await models.ProductUen.findAll())
      .reduce((acc, el) => {acc[el.name] = el.id; return acc}, {})
    const brandsId = (await models.ProductBrand.findAll())
      .reduce((acc, el) => {acc[el.name] = el.id; return acc}, {})

    let productData = {}
    products.reduce((acc, product) => {
      const code = product.code
      if (!productData.hasOwnProperty(code)) {
        productData[code] = {
          code: code,
          name: product.name,
          uom_id: uomsId[product.uom],
          sale_price: product.sale_price,
          cost_price: product.cost_price,
          line_id: product.line_id,
          category_id: product.category_id,
          provider_code_id: product.provider_code_id,
          status_id: statusesId[product.status],
          manufacturer_type_id: manufacturerTypesId[product.manufacturer_type],
          part_number: product.part_number,
          uen_id: uensId[product.uen],
          brand_id: brandsId[product.brand],
          min_sale_price: product.min_sale_price,
          description: product.description,
          image_150: product.image_150,
          image_450: product.image_450,
          createdAt: new Date(), updatedAt: new Date()}
      }
    }, productData)
    await queryInterface.bulkInsert('product', Object.values(productData), {});
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
