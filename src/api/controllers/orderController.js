const database = require("../models");
const request = require("../mappers/orderRequest");

const error = (err) => ` 
{
    status: 500,
    message: ${err.message},
}`;

const success = ` 
{
	status: 200,
    message: success,
}
`;
class OrderController {
	static async GetOrders(req, res) {
		try {
			const allOrders = await database.Orders.findAll();
			return res.status(200).json(allOrders);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	static async PostAnOrder(req, res) {
		const order = req.body;
		const order_itens = req.body;
		const { userId } = req.params;
		try {
			const [user, created] = await database.Users.findOrCreate({
				where: { id: Number(userId) },
				defaults: {
					name: "John",
					surname: "Doe",
				},
			});

			const createOrder = await database.Orders.create(order);
			
			/*

			const createItens = await database.Order_itens.bulkCreate(
				order_itens.map((item) => ({
					item,
					order_id: Number(createOrder.id),
				}))
			);
			*/
			return res.status(200).json(success);
		} catch (err) {
			res.status(500).send(error(err));
		}
	}
	static async UpdateAnOrder(req, res) {
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
}

module.exports = OrderController;
