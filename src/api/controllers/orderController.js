const database = require("../models");
const request = require("../mappers/orderRequest");

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
		const { userId } = req.params;
		try {
			const [user, created] = await database.Users.findOrCreate({
				where: { id: Number(userId) },
				//defaults will be changed to req.body
				defaults: {
					name: "Ned",
					surname: "Stark",
				},
			});
			//implement bulk create
			const itens = await database.Order_itens.create(order_itens);

			const theItem = await database.Order_itens.findOne({
				attributes: [
					["amount_purchased", "amount_purchased"],
					["product_id", "product_id"],
				],
				where: { id: itens.id },
			});

			const products = await database.Products.findOne({
				attributes: [
					["id", "id"],
					["name", "name"],
					["price", "price"],
					["provider_id", "provider_id"],
				],
				where: { id: theItem.product_id },
			});

			const provider = await database.Providers.findOne({
				attributes: [["id", "id"]],
				where: { id: products.provider_id },
			});

			return res
				.status(200)
				.json(request(theItem, user, products, provider));
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
