'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Providers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Providers.init({
    name: DataTypes.STRING,
    photo_url: DataTypes.STRING,
    description: DataTypes.STRING,
    phone_number1: DataTypes.STRING,
    phone_number2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Providers',
  });
  return Providers;
};