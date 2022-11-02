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
					provider_highlight: true,
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
					provider_highlight: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Banca da Ana Maria",
					photo_url:
						"https://res.cloudinary.com/do1q8dwvg/image/upload/v1667155746/providers/banca-ana-maria.png",
					description:
						"Aliquam a vulputate risus. Etiam in mattis dolor, ut lobortis lectus. Pellentesque porta tortor a scelerisque pretium. Integer tempus justo.",
					phone_number1: "11 93839-7448",
					phone_number2: "11 93522-2343",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Granja da Janja",
					photo_url:
						"https://res.cloudinary.com/do1q8dwvg/image/upload/v1667155746/providers/granja-da-janja.png",
					description:
						"Pellentesque pharetra metus sit amet purus gravida dictum. Suspendisse nec tempus lacus. Suspendisse a molestie libero. Proin sodales eget arcu.",
					phone_number1: "11 93840-1743",
					phone_number2: "11 92405-8145",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Sto Inácio Leite, Queijo & CIA",
					photo_url:
						"https://res.cloudinary.com/do1q8dwvg/image/upload/v1667155746/providers/sto-inacio.png",
					description:
						"Pellentesque eu sagittis est. Nam consequat, lectus non maximus commodo, nisi ex lobortis sem, eu cursus lectus augue vitae orci.",
					phone_number1: "11 92774-8185",
					phone_number2: "11 93737-7488",
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
