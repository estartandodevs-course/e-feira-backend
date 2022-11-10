const ReceiptService = require("../services/receiptService");
class ReceiptController {
	static async GetReceipt(req, res) {
		const { orderId } = req.params;
		try {
			const allItens = await ReceiptService.GetReceipt(orderId);
			return res.status(200).json(allItens);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

module.exports = ReceiptController;
