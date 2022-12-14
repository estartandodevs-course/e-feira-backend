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
				order: [Sequelize.literal("random()")],
				limit: 2,
			});

			const productsGroups = [];

			for (let i = 0; i < dataProvider.length; i++) {
				const provider = dataProvider[i];
				const providerId = provider.id;

				const products = await database.Products.findAll({
					attributes: [
						["id", "id"],
						["name", "name"],
						["photo_url", "image"],
						["type_frontend_attribute", "type"],
						["alt_frontend_attribute", "alt"],
						["product_weight", "subtitle"],
						["price", "price"],
						["weight", "weight"],
					],
					where: { provider_id: providerId },
					order: [["id", "ASC"]],
					limit: 5,
				});

				const providerResource = providerResponse(
					provider.dataValues,
					products
				);

				productsGroups.push({
					...providerResource,
				});
			}

			return res.status(200).json(productsGroups);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = LatestStreetMarketController;
