const database = require("../models");
const response = require("../mappers/latestStreetMarketResponse");
class LatestStreetMarketController {
	static async GetAllProductsFromtheHomePage(req, res) {
		try {
			const dataProvider1 = await database.Providers.findOne({
                where: { id: 1 },
            });
            const dataProvider2 = await database.Providers.findOne({
                where: { id: 2 },
            });
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
				limit: 5
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
				.json(response(
					dataProvider1,
					dataProvider2,
					allProductsOfProvider1,
					allProductsOfProvider2
				));
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = LatestStreetMarketController;
