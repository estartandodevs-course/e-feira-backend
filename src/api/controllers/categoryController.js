const database = require("../models");

class CategoryController {
	static async GetAllCategories(req, res) {
		try {
			const allCategories = await database.Categories.findAll();
			return res.status(200).json(allCategories);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async GetOneCategory(req, res) {
		const { id } = req.params;
		try {
			const oneCategory = await database.Categories.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(oneCategory);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async CreateACategory(req, res) {
		const Category = req.body;
		try {
			const newCategory = await database.Categories.create(Category);
			return res.status(200).json(newCategory);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async UpdateACategory(req, res) {
		const { id } = req.params;
		const updatedCategory = req.body;
		try {
			await database.Categories.update(updatedCategory, {
				where: { id: Number(id) },
			});
			const Category = await database.Categories.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(Category);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async DeleteACategory(req, res) {
		const { id } = req.params;
		try {
			await database.Categories.destroy({ where: { id: Number(id) } });
			return res.status(200).json("Category deleted with success!");
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = CategoryController;
