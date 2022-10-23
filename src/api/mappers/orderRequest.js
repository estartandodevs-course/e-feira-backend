const request = (order, order_itens, user, product, provider) => [
	{
		client: {
			id: user.id,
			name: user.name + user.surname,
		},
	},
	{
		providers: [
			{
				provider_id: provider.id,
				products: [
					{
						id: product.id,
						value: product.price,
						amount: order_itens.amount_purchased,
					},
					{
						id: product.id,
						value: product.price,
						amount: order_itens.amount_purchased,
					},
				],
			},
			{
				provider_id: provider.id,
				products: [
					{
						id: product.id,
						value: product.price,
						amount: order_itens.amount_purchased,
					},
				],
			},
		],
	},
	{ address: "Rua do mingau, 123, RJ" },
	{ payment_method: order.payment_method },
];

module.exports = request;
