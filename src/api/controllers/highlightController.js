const database = require("../models/index");
const highlight = require("../mappers/highlightResponse")

class HighlightController {
	static async GetAllHighlights(req, res) {
		try {
			const allHighlights = await database.Highlights.findAll(
				{attributes: [
					['photo_url', 'url'],
					['name', 'title']]
				}
			);
			return res.status(200).json(allHighlights);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async GetOneHighlight(req, res) {
		const { id } = req.params;
		try {
			const oneHighlight = await database.Highlights.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(oneHighlight);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async CreateAHighlight(req, res) {
		const highlight = req.body;
		try {
			const newHighlight = await database.Highlights.create(highlight);
			return res.status(200).json(newHighlight);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async UpdateAHighlight(req, res) {
		const { id } = req.params;
		const updatedHighlight = req.body;
		try {
			await database.Highlights.update(updatedHighlight, {
				where: { id: Number(id) },
			});
			const highlight = await database.Highlights.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(highlight);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async DeleteAHighlight(req, res) {
		const { id } = req.params;
		try {
			await database.Highlights.destroy({ where: { id: Number(id) } });
			return res.status(200).json("HIGHLIGHT deleted with success!");
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = HighlightController;
