"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Order_itens", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			individual_value: {
				type: Sequelize.FLOAT,
			},
			amount_purchased: {
				type: Sequelize.INTEGER,
			},
			product_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Products", key: "id" },
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Order_itens");
	},
};
