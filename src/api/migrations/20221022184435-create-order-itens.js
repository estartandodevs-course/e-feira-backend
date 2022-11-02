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
			amount: {
				type: Sequelize.INTEGER,
			},
			individual_price: {
				type: Sequelize.FLOAT,
			},
			product_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Products", key: "id" },
			},
			order_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Orders", key: "id" },
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
