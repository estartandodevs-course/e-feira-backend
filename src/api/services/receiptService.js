const database = require("../models");
const request = require("../mappers/receiptResponse");

class ReceiptService {
	static async GetReceipt(orderId) {
		try {
			const allItens = await database.Orders.findOne({
				attributes: [
					"id",
					"address",
					"total_price",
					"grand_total",
					"change",
					"delivery_tax",
					"user_id",
				],
				where: { id: orderId },
				include: [
					{
						model: database.Users,
						attributes: ["name", "surname"],
					},
					{
						model: database.Products,
						attributes: [
							"id",
							"name",
							"type_frontend_attribute",
							"weight",
							"provider_id",
						],
						through: {
							attributes: [
								"amount",
								"individual_price",
								"product_id",
							],
						},
					},
				],
			});
			return allItens.dataValues;
		} catch (error) {
			throw new Error("Order error");
		}
	}
}

module.exports = ReceiptService;
