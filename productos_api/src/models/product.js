'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    uom_id: DataTypes.INTEGER,
    sale_price: DataTypes.INTEGER,
    cost_price: DataTypes.DECIMAL,
    line_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    provider_code_id: DataTypes.STRING,
    status_id: DataTypes.INTEGER,
    manufacturer_type_id: DataTypes.INTEGER,
    part_number: DataTypes.STRING,
    uen_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    min_sale_price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image_150: DataTypes.STRING,
    image_450: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'product',
    underscored: true
  });
  return Product;
};
