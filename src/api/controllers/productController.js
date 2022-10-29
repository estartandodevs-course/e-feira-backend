const database = require("../models");

class ProductController {
	static async GetAllProducts(req, res) {
		try {
			const allProducts = await database.Products.findAll({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "image"],
					["product_weight", "subtitle"],
					["type_frontend_attribute", "type"],
					["alt_frontend_attribute", "alt"],
					["price", "price"],
					["provider_id", "provider_id"],
					["category_id", "category_id"],
				],
			});
			return res.status(200).json(allProducts);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async GetProductDetails(req, res) {
		const { id } = req.params;
		const response = require("../mappers/productDetailsResponse");
		try {
			const products = await database.Products.findOne({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "image"],
					["product_weight", "subtitle"],
					["type_frontend_attribute", "type"],
					["alt_frontend_attribute", "alt"],
					["price", "price"],
					["provider_id", "provider_id"],
					["category_id", "category_id"],
				],
				where: { id: Number(id) },
			});
			const provider = await database.Providers.findOne({
				where: { id: Number(products.provider_id) },
			});

			return res.status(200).json(response(provider, products));
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async CreateAProduct(req, res) {
		const product = req.body;
		try {
			const newProduct = await database.Products.create(product);
			return res.status(200).json(newProduct);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async UpdateAProduct(req, res) {
		const { id } = req.params;
		const updatedProduct = req.body;
		try {
			await database.Products.update(updatedProduct, {
				where: { id: Number(id) },
			});
			const product = await database.Products.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(product);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async DeleteAProduct(req, res) {
		const { id } = req.params;
		try {
			await database.Products.destroy({ where: { id: Number(id) } });
			return res.status(200).json("Product deleted with success!");
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async GetAllProductsFromAProvider(req, res) {
		const { provider_id } = req.params;
		try {
			const allProductsOfProvider = await database.Products.findAll({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "image"],
					["type_frontend_attribute", "type"],
					["alt_frontend_attribute", "alt"],
					["product_weight", "subtitle"],
					["price", "price"],
					["category_id", "category_id"],
				],
				where: { provider_id: Number(provider_id) },
			});
			return res.status(200).json(allProductsOfProvider);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async GetAllProductsFromACategory(req, res) {
		const { category_id } = req.params;
		try {
			const allProductsOfCategory = await database.Products.findAll({
				attributes: [
					["id", "id"],
					["name", "name"],
					["photo_url", "image"],
					["type_frontend_attribute", "type"],
					["alt_frontend_attribute", "alt"],
					["product_weight", "subtitle"],
					["price", "price"],
					["provider_id", "provider_id"],
				],
				where: { category_id: Number(category_id) },
			});
			return res.status(200).json(allProductsOfCategory);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async GetProductsFromName(req, res) {
		const { name } = req.query;

		try {
			const product = await database.Products.findAll({
				where: { name: name },
			});
			return res.status(200).json(product);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = ProductController;
