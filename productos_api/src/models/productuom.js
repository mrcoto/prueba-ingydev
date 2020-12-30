'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductUom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductUom.init({
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductUom',
    tableName: 'product_uom',
    underscored: true
  });
  return ProductUom;
};
