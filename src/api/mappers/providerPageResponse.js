const response = (products, provider) => [
	{
		id: provider.id,
		name: provider.name,
		url: provider.photo_url,
		description: provider.description,
		products: [products],
	},
];
module.exports = response;
