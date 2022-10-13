"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Categories",
			[
				{
					name: "Frutas",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665444930/eFeira/categories/01_vzdzvp.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Legumes",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665444931/eFeira/categories/02_tp8ptw.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Verduras",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665444932/eFeira/categories/03_fdnpac.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Peixes",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665444930/eFeira/categories/04_mvu52v.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Carnes",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665444931/eFeira/categories/05_kgmsin.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Laticínios",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665444931/eFeira/categories/06_crolt6.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Categories", null, {});
	},
};
