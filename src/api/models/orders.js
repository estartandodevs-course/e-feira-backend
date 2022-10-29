"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Orders extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Orders.belongsTo(models.Users, {
				foreignKey: "user_id",
			});
			Orders.belongsToMany(models.Products, {
				through: "Order_itens",
				foreignKey: "order_id",
			});
		}
	}
	Orders.init(
		{
			address: DataTypes.STRING,
			payment_method: DataTypes.STRING,
			total_price: DataTypes.FLOAT,
			change: DataTypes.FLOAT,
			delivery_tax: DataTypes.FLOAT,
		},
		{
			sequelize,
			modelName: "Orders",
		}
	);
	return Orders;
};
