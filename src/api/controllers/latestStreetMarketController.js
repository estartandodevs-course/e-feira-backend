const database = require("../models");
const providerResponse = require("../mappers/latestStreetMarketResponse");
const Sequelize = require("sequelize");
class LatestStreetMarketController {
	static async GetAllProductsFromtheHomePage(req, res) {
		try {

			const dataProvider = await database.Providers.findAll({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "photo_url"],
					["description", "description"],
					["phone_number1", "phone_number1"],
					["phone_number2", "phone_number2"],
				],
				where: { provider_highlight: true },
				limit: 2,
				order: Sequelize.literal("random()"),

			const productsGroups = [];

			for (let i = 0; i < dataProvider.length; i++) {
				const provider = dataProvider[i];
				const providerId = provider.id;

				const products = await database.Products.findAll({
					where: { provider_id: providerId },
					order: [["id", "ASC"]],
					limit: 5,
				});

				const providerResource = providerResponse(provider.dataValues);

				productsGroups.push({
					...providerResource,
					products,
				});
			}

			return res.status(200).json(productsGroups);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = LatestStreetMarketController;
