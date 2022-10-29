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
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Morango",
					product_weight: "250g (bandeja)",
					price: 6.5,
					provider_id: 1,
					category_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Laranja Pera",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445312/eFeira/products/07_anqhfj.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Laranja Pera",
					product_weight: "500g (3 a 4 unidades)",
					price: 2.0,
					provider_id: 1,
					category_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Cebola Branca",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445313/eFeira/products/08_eqoqsz.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Cebola Branca",
					product_weight: "500g (3 a 4 unidades)",
					price: 3.8,
					provider_id: 1,
					category_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Tomate",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445313/eFeira/products/09_jmwcjc.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Tomate",
					product_weight: "500g (3 a 4 unidades)",
					price: 3.35,
					provider_id: 1,
					category_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Brócolis",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445314/eFeira/products/10_pkwzt7.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Brócolis",
					product_weight: "500g (bandeja)",
					price: 9.9,
					provider_id: 1,
					category_id: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Melancia Graúda",
					photo_url:
						"https://res.cloudinary.com/do1q8dwvg/image/upload/v1665966768/products/efeiramelancia.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Melancia Graúda",
					product_weight: "300g (bandeja)",
					price: 16.0,
					provider_id: 1,
					category_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Batata",
					photo_url:
						"https://res.cloudinary.com/do1q8dwvg/image/upload/v1665966764/products/efeirabatata.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Batata",
					product_weight: "300g (bandeja)",
					price: 6.5,
					provider_id: 1,
					category_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Couve-Flor",
					photo_url:
						"https://res.cloudinary.com/do1q8dwvg/image/upload/v1665966756/products/efeiracouveflor.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Couve-Flor",
					product_weight: "300g (bandeja)",
					price: 7.25,
					provider_id: 1,
					category_id: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Couve-Flor Orgânica",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/01_bdagyl.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Couve-Flor Orgânica",
					product_weight: "300g (unidade)",
					price: 12.9,
					provider_id: 2,
					category_id: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Cebola Orgânica",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/02_oo0wnl.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Cebola Orgânica",
					product_weight: "500g (3 unidades)",
					price: 9.9,
					provider_id: 2,
					category_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Cenoura Orgânica",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/03_dzo6nv.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Cenoura Orgânica",
					product_weight: "500g (2 a 3 unidades)",
					price: 9.9,
					provider_id: 2,
					category_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Banana Prata Orgânica",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/04_rllcho.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Banana Prata Orgânica",
					product_weight: "600g (3 a 4 unidades)",
					price: 9.9,
					provider_id: 2,
					category_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Brócolis Orgânico",
					photo_url:
						"https://res.cloudinary.com/dxo67ngak/image/upload/v1665445311/eFeira/products/05_ohemjp.png",
					type_frontend_attribute: "market-category",
					alt_frontend_attribute: "Foto de Brócolis Orgânico",
					product_weight: "300g (bandeja)",
					price: 11.5,
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
