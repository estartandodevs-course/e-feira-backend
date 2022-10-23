const database = require("../models");
const response = require("../mappers/latestStreetMarketResponse");
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
					["phone_number2", "phone_number2"]
				],
			});

			const allProducts = await database.Products.findAll({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "image"],
					["type_frontend_attribute", "type"],
					["alt_frontend_attribute", "alt"],
					["product_weight", "subtitle"],
					["price", "price"],
					["provider_id","provider_id"], 
				],
				where:{ provider_id: dataProvider.dataValues.id},
			});

			const newData = dataProvider.map((data) => response(data, allProducts));
			return res
				.status(200)
				.json(newData);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = LatestStreetMarketController;
