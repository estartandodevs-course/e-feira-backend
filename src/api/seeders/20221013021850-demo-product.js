"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Products",
			[
				{
					name: "Morango Nacional",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/06_uzuv1p.png",
					product_weight: "250g (bandeja)",
					provider_id: 1,
					category_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Laranja Pera",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445312/eFeira/products/07_anqhfj.png",
					product_weight: "500g (3 a 4 unidades)",
					provider_id: 1,
					category_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Cebola Branca",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445313/eFeira/products/08_eqoqsz.png",
					product_weight: "500g (3 a 4 unidades)",
					provider_id: 1,
					category_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Tomate",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445313/eFeira/products/09_jmwcjc.png",
					product_weight: "500g (3 a 4 unidades)",
					provider_id: 1,
					category_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Brócolis",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445314/eFeira/products/10_pkwzt7.png",
					product_weight: "500g (bandeja)",
					provider_id: 1,
					category_id: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Couve-Flor Orgânica",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/01_bdagyl.png",
					product_weight: "300g (unidade)",
					provider_id: 2,
					category_id: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Cebola Orgânica",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/02_oo0wnl.png",
					product_weight: "500g (3 unidades)",
					provider_id: 2,
					category_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Cenoura Orgânica",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/03_dzo6nv.png",
					product_weight: "500g (2 a 3 unidades)",
					provider_id: 2,
					category_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Banana Prata Orgânica",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/04_rllcho.png",
					product_weight: "600g (3 a 4 unidades)",
					provider_id: 2,
					category_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Brócolis Orgânico",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/05_ohemjp.png",
					product_weight: "300g (bandeja)",
					provider_id: 2,
					category_id: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Products", null, {});
	},
};
