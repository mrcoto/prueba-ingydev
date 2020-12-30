'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      code: {
        type: Sequelize.STRING(50)
      },
      name: {
        type: Sequelize.STRING(120)
      },
      uom_id: {
        type: Sequelize.BIGINT,
        references: { model: 'product_uom', key: 'id' },
      },
      sale_price: {
        type: Sequelize.INTEGER
      },
      cost_price: {
        type: Sequelize.DECIMAL(14, 2)
      },
      line_id: {
        type: Sequelize.BIGINT,
        references: { model: 'product_line', key: 'id' },
      },
      category_id: {
        type: Sequelize.BIGINT,
        references: { model: 'product_category', key: 'id' },
      },
      provider_code_id: {
        type: Sequelize.STRING
      },
      status_id: {
        type: Sequelize.BIGINT,
        references: { model: 'product_status', key: 'id' },
      },
      manufacturer_type_id: {
        type: Sequelize.BIGINT,
        references: { model: 'product_manufacturer_type', key: 'id' },
      },
      part_number: {
        type: Sequelize.STRING
      },
      uen_id: {
        type: Sequelize.BIGINT,
        references: { model: 'product_uen', key: 'id' },
      },
      brand_id: {
        type: Sequelize.BIGINT,
        references: { model: 'product_brand', key: 'id' },
      },
      min_sale_price: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      image_150: {
        type: Sequelize.STRING
      },
      image_450: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
