const request = (order, order_itens, user, product, provider) => [
	{
		Cliente: {
			Nome: `${user.name} ${user.surname}`
		},
	},
	{
		Pedido: {
			Endereço: order.address,
			Pagamento: order.payment_method,
			Total: order.total_price,
			Troco: order.change,
			Entrega: order.delivery_tax
		}
	},
];
	

module.exports = request;
