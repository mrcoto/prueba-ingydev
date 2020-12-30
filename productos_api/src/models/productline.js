'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductLine.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductLine',
    tableName: 'product_line',
    underscored: true
  });
  return ProductLine;
};
