const response = (provider1, provider2, products1, products2) => [
	{
		id: provider1.id,
		title: provider1.name,
		image: provider1.photo_url,
		description: provider1.description,
		phoneNumber: [provider1.phone_number1, provider1.phone_number2],
		products: [products1],
	},
	{
		id: provider2.id,
		title: provider2.name,
		image: provider2.photo_url,
		description: provider2.description,
		phoneNumber: [provider2.phone_number1, provider2.phone_number2],
		products: [products2],
	},
];

module.exports = response;
