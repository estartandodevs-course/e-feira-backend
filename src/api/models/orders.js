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
			Orders.belongsToMany(models.Order_itens, {
				through: "orders_order_itens",
				uniqueKey: "order_id",
			});
		}
	}
	Orders.init(
		{
			address: DataTypes.STRING,
			payment_method: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Orders",
		}
	);
	return Orders;
};
