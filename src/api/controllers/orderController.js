const database = require("../models");

const error = () => {
	` {
        status: 500,
        message: failure,
    }`;
};

class OrderController {
	static async PostAOrder(req, res) {
		const order = req.query;
		try {
			await database.orders_order_itens.create(order);
			return res.status(200).json(order);
		} catch {
			res.status(500).send(error);
		}
	}
}

module.exports = OrderController;
