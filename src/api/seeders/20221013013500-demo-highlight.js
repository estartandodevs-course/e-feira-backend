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
					name: "highlight-1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					photo_url:
						"https://res.cloudinary.com/dpw8nhmjh/image/upload/v1665783230/slide2_t7e6av.png",
					name: "highlight-2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665514972/eFeira/carousel/03_wuup9u.png",
					name: "highlight-3",
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
