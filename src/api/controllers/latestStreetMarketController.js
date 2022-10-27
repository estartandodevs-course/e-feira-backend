const database = require("../models");
const response = require("../mappers/latestStreetMarketResponse");
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
					["phone_number2", "phone_number2"]
				],
				where: {provider_highlight: true},
				limit: 2,
				order: Sequelize.literal("random()")
			});
          
			const providerIds = dataProvider.map((data) => data.id);

			const products = await database.Products.findAll({
				where: { provider_id : providerIds},
				//limit 5 for each
			}); 
            
			const streetMarket = dataProvider.map((providers) => response(providers, products.filter((data => data.provider_id === providers.id))));

			return res
				.status(200)
				.json(streetMarket);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = LatestStreetMarketController;
