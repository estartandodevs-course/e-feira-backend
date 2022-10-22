"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class orders_order_itens extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	orders_order_itens.init(
		{
			total_value: DataTypes.FLOAT,
		},
		{
			sequelize,
			modelName: "orders_order_itens",
		}
	);
	return orders_order_itens;
};
