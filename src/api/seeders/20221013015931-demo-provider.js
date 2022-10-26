"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Providers",
			[
				{
					name: "Vendinha do seu Francisco",
					photo_url:
						"https://res.cloudinary.com/do1q8dwvg/image/upload/v1665627145/providers/seu_francisco.png",
					description:
						"A banca do seu Francisco fica em São Paulo na Rodovia dos Imigrantes. Ele planta e colhe legumes, frutas e verduras frescas todos os dias e vende, na feira local, há mais de 20 anos.",
					phone_number1: "11 92469-7763",
					phone_number2: "11 92198-2346",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Raizs Orgânicos",
					photo_url:
						"https://res.cloudinary.com/do1q8dwvg/image/upload/v1666143970/providers/raizs_organicas.png",
					description:
						"A Raízs é a primeira e maior empresa a conectar o pequeno produtor de orgânicos à mesa dos grandes centros urbanos.",
					phone_number1: "11 95896-5215",
					phone_number2: "11 94567-4356",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Providers", null, {});
	},
};
