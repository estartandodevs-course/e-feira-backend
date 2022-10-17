const response = (provider1, provider2, products1, products2) => [
	{
		title: provider1.name,
		products: [products1],
	},
	{
		title: provider2.name,
		products: [products2],
	},
];

module.exports = response;
