const database = require("../models");
const response = require("../mappers/latestStreetMarketResponse");
class LatestStreetMarketController {
	static async GetAllProductsFromtheHomePage(req, res) {
		try {
			const allProductsOfProvider1 = await database.Products.findAll({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "image"],
					["type_frontend_attribute", "type"],
					["alt_frontend_attribute", "alt"],
					["product_weight", "subtitle"],
				],
				where: { provider_id: 1 },
			});
			const allProductsOfProvider2 = await database.Products.findAll({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "image"],
					["type_frontend_attribute", "type"],
					["alt_frontend_attribute", "alt"],
					["product_weight", "subtitle"],
				],
				where: { provider_id: 2 },
			});
			return res
				.status(200)
				.json(response(allProductsOfProvider1, allProductsOfProvider2));
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = LatestStreetMarketController;
