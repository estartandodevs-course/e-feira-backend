"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Categories extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Categories.hasMany(models.Products, {
				foreignKey: "category_id",
			});
		}
	}
	Categories.init(
		{
			name: DataTypes.STRING,
			photo_url: DataTypes.STRING,
			type_frontend_attribute: DataTypes.STRING,
			alt_frontend_attribute: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Categories",
		}
	);
	return Categories;
};
