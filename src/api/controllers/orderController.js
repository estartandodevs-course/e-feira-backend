const database = require("../models");

const error = ` 
{
    status: 500,
    message: failure,
}`;

const success = ` 
{
    status: 200,
    message: success,
}`;
class OrderController {
	static async GetOrders(req, res) {
		try {
			const allOrders = await database.Order_itens.findAll();
			return res.status(200).json(allOrders);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	static async PostAnOrder(req, res) {
		const order_itens = req.body;
		//const { user_id, provider_id} = req.params;
		try {
			const itens = await database.Order_itens.create(order_itens);

			/* const products = await database.Products.findAll( {
				 where: { id : }
			});

			const user = await database.Users.findOrCreate({
				where: { id: user_id },
				defaults: {
					name: user_name,
				},
			});
			const provider = await database.Providers.findOne({
				where: { id: provider_id },
			});
			await database.orders_order_itens.create(order);
			*/
			return res.status(200).json(itens);
		} catch (error) {
			res.status(500).send(error.message);
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
