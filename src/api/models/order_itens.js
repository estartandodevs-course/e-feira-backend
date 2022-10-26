"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order_itens extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {}
	}
	Order_itens.init(
		{
			amount: DataTypes.INTEGER,
			individual_price: DataTypes.FLOAT,
		},
		{
			sequelize,
			modelName: "Order_itens",
		}
	);
	return Order_itens;
};
