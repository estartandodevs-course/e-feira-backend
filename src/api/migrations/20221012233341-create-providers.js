"use strict";

const { BOOLEAN } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Providers", {
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
			description: {
				type: Sequelize.STRING,
			},
			phone_number1: {
				type: Sequelize.STRING,
			},
			phone_number2: {
				type: Sequelize.STRING,
			},
			provider_highlight: {
				type: Sequelize.BOOLEAN,
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
		await queryInterface.dropTable("Providers");
	},
};
