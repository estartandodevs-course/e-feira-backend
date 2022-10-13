"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Highlights",
			[
				{
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665514972/eFeira/carousel/01_sael8q.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665514973/eFeira/carousel/02_p2nnhy.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665514972/eFeira/carousel/03_wuup9u.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Highlights", null, {});
	},
};
