const database = require("../models");
const response = require("../mappers/providerPageResponse");
class ProviderController {
	static async GetAllProviders(req, res) {
		try {
			const allProviders = await database.Providers.findAll({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "image"],
					["description", "description"],
					["phone_number1", "phone_number1"],
					["phone_number2", "phone_number2"],
				],
			});

			return res.status(200).json(allProviders);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async GetOneProvider(req, res) {
		const { id } = req.params;
		const response = require("../mappers/providerInformationResponse");
		try {
			const providers = await database.Providers.findOne({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "image"],
					["description", "description"],
					["phone_number1", "phone_number1"],
					["phone_number2", "phone_number2"],
				],
				where: { id: Number(id) },
			});
			return res.status(200).json(response(providers));
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async CreateAProvider(req, res) {
		const provider = req.body;
		try {
			const newProvider = await database.Providers.create(provider);
			return res.status(200).json(newProvider);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async UpdateAProvider(req, res) {
		const { id } = req.params;
		const updatedProvider = req.body;
		try {
			await database.Providers.update(updatedProvider, {
				where: { id: Number(id) },
			});
			const provider = await database.Providers.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(provider);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async DeleteAProvider(req, res) {
		const { id } = req.params;
		try {
			await database.Providers.destroy({ where: { id: Number(id) } });
			return res.status(200).json("Provider deleted with success!");
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async GetAProviderandTheirProducts(req, res) {
		const { id } = req.params;
		try {
			const providers = await database.Providers.findOne({
				where: { id: Number(id) },
			});
			const products = await database.Products.findAll({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "image"],
					["type_frontend_attribute", "type"],
					["alt_frontend_attribute", "alt"],
					["product_weight", "subtitle"],
					["price", "price"],
				],
				where: { provider_id: Number(id) },
			});
			return res.status(200).json(response(products, providers));
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = ProviderController;
