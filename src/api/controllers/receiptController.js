const database = require("../models");
const request = require("../mappers/receiptResponse");
class ReceiptController {
	static async GetReceipt(req, res) {
		const { Op } = require("sequelize");
		const { orderId } = req.params;
		try {
			const allOrders = await database.Orders.findAll({
				include: database.Users,
			});
			const allItens = await database.Orders.findOne({
				attributes: [
					["id", "Id do Pedido"],
					["address", "Endereço"],
					["total_price", "Preço Total"],
					["change", "Troco"],
					["delivery_tax", "Taxa de Entrega"],
					["user_id", "Id do Usuário"],
				],
				where: { id: orderId },
				include: [
					{
						model: database.Users,
						attributes: [
							["name", "Nome"],
							["surname", "Sobrenome"],
						],
					},
					{
						model: database.Products,
						attributes: [
							["id", "Id do Produto"],
							["name", "Nome"],
							["type_frontend_attribute", "Categoria"],
							["weight", "Peso do Produto"],
							["provider_id", "Id do Fornecedor"],
						],
						through: {
							attributes: [
								["amount", "Quantidade"],
								["individual_price", "Preço Individual"],
								["product_id", "Id do Produto"],
							],
						},
					},
				],
			});
			return res.status(200).json(allItens);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

module.exports = ReceiptController;
