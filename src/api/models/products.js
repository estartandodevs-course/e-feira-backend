"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Products extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Products.init(
		{
			name: DataTypes.STRING,
			photo_url: DataTypes.STRING,
			product_weight: DataTypes.STRING,
			inventory: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Products",
		}
	);
	return Products;
};
