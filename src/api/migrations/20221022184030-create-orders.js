"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Orders", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			address: {
				type: Sequelize.STRING,
			},
			payment_method: {
				type: Sequelize.STRING,
			},
			total_price: {
				type: Sequelize.FLOAT,
			},
			grand_total: {
				type: Sequelize.FLOAT,
			},
			change: {
				type: Sequelize.FLOAT,
			},
			delivery_tax: {
				type: Sequelize.FLOAT,
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Users", key: "id" },
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
		await queryInterface.dropTable("Orders");
	},
};
