"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Order_itens", [{}], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Order_itens", null, {});
	},
};
