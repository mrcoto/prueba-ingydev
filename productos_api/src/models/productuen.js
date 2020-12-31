'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductUen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductUen.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductUen',
    tableName: 'product_uen',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return ProductUen;
};
