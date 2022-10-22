"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order_itens extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Order_itens.belongsTo(models.Products, {
				foreignKey: "product_id",
			});
			Order_itens.belongsToMany(models.Orders, {
				through: "orders_order_itens",
				uniqueKey: "order_item_id",
			});
		}
	}
	Order_itens.init(
		{
			individual_value: DataTypes.FLOAT,
			amount_purchased: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Order_itens",
		}
	);
	return Order_itens;
};
