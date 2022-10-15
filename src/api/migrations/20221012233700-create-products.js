"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			photo_url: {
				type: Sequelize.STRING,
			},
			type_frontend_attribute: {
				type: Sequelize.STRING,
			},
			alt_frontend_attribute: {
				type: Sequelize.STRING,
			},
			product_weight: {
				type: Sequelize.STRING,
			},
			provider_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Providers", key: "id" },
			},
			category_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Categories", key: "id" },
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
		await queryInterface.dropTable("Products");
	},
};
