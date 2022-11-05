const request = (order, order_itens, user, product, provider) => [
	{
		Cliente: {
			id: order.user_id,
		},
	},
	{
		Pedido: {
			Endereço: order.address,
			Pagamento: order.payment_method,
			Total: order.total_price,
			Troco: order.change,
			Entrega: order.delivery_tax,
		},
	},
	{
		Fornecedor: {
			id: order.provider_id,
		},
	},
];

module.exports = request;
