'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductBrand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductBrand.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductBrand',
    tableName: 'product_brand',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ProductBrand;
};
