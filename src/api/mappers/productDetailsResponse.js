const response = (provider, products) => [
	{
		provider_name: provider.name,
		product_info: [products],
	},
];
module.exports = response;
