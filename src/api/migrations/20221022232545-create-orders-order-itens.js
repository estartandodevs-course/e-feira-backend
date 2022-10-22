"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("orders_order_itens", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			total_value: {
				type: Sequelize.FLOAT,
			},
			order_item_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Order_itens", key: "id" },
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
		await queryInterface.dropTable("orders_order_itens");
	},
};
