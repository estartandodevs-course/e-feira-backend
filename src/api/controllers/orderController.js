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
	static async PostAOrder(req, res) {
		const { order_itens } = req.query;
		const { user_id, provider_id, order_itens } = req.params;
		try {
			const itens = await database.Order_itens.create(order_itens);

			const products = console.log(
				(await database.Order_itens.getProducts()).id
			);

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
			return res.status(200).json(success);
		} catch {
			res.status(500).send(error);
		}
	}
}

module.exports = OrderController;
