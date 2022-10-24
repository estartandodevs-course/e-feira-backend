"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Order_itens",
			[
				{
					individual_value: 3.8,
					amount_purchased: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
					product_id: 3,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Order_itens", null, {});
	},
};
