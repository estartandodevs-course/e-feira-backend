const database = require("../models");

const error = (err) => `{ status: 500, message: ${err.message} }`;
const success = "{ status: 200, message: success }";
class OrderController {
	static async GetOrders(req, res) {
		try {
			const allOrders = await database.Orders.findAll();
			return res.status(200).json(allOrders);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	static async GetOrderItens(req, res) {
		try {
			const allOrders = await database.Order_itens.findAll();
			return res.status(200).json(allOrders);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	static async PostAnOrder(req, res) {
		const { order } = req.body[0];
		const { order_itens } = req.body[1];
		const { userid, name, surname } = req.headers;
		try {
			const [user, created] = await database.Users.findOrCreate({
				where: { id: Number(userid) },
				defaults: {
					name: name,
					surname: surname,
				},
			});

			database.Orders.beforeCreate(async (order, options) => {
				const userId = await user.id;
				order.user_id = userId;
			});

			const createOrder = await database.Orders.create(order);

			database.Order_itens.beforeBulkCreate(async (order, options) => {
				const orderId = await createOrder.id;
				order.map((item) => (item.order_id = orderId));
			});

			const createItens = await database.Order_itens.bulkCreate(
				order_itens
			);

			return res.status(200).json(success);
		} catch (err) {
			res.status(500).send(error(err));
		}
	}

	static async UpdateAnOrderItem(req, res) {
		const { id } = req.params;
		const order = req.body;
		try {
			await database.Order_itens.update(order, {
				where: { id: Number(id) },
			});
			const orders = await database.Order_itens.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(orders);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async UpdateAnOrder(req, res) {
		const { id } = req.params;
		const updatedOrder = req.body;
		try {
			await database.Orders.update(updatedOrder, {
				where: { id: Number(id) },
			});
			const order = await database.Orders.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(order);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async DeleteAnOrderItem(req, res) {
		const { id } = req.params;
		try {
			await database.Order_itens.destroy({ where: { id: Number(id) } });
			return res.status(200).json("Order item deleted with success!");
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async DeleteAnOrder(req, res) {
		const { id } = req.params;
		try {
			await database.Orders.destroy({ where: { id: Number(id) } });
			return res.status(200).json("Order deleted with success!");
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = OrderController;
