const database = require("../models");

class UserController {
	static async GetAllUsers(req, res) {
		try {
			const allUsers = await database.Users.findAll({
				attributes: [
					["id", "id"],
					["name", "name"],
					["surname", "surname"],
				],
			});
			return res.status(200).json(allUsers);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async GetOneUser(req, res) {
		const { id } = req.params;
		try {
			const user = await database.Users.findOne({
				attributes: [
					["id", "id"],
					["name", "name"],
					["surname", "surname"],
				],
				where: { id: Number(id) },
			});
			return res.status(200).json(user);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async CreateAUser(req, res) {
		const user = req.body;
		try {
			const newUser = await database.Users.create(user);
			return res.status(200).json(newUser);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async UpdateAUser(req, res) {
		const { id } = req.params;
		const updatedUser = req.body;
		try {
			await database.Users.update(updatedUser, {
				where: { id: Number(id) },
			});
			const user = await database.Users.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(user);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async DeleteAUser(req, res) {
		const { id } = req.params;
		try {
			await database.Users.destroy({ where: { id: Number(id) } });
			return res.status(200).json("User deleted with success!");
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = UserController;
