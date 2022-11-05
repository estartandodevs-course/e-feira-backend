
const response = (provider, products) => ({
	id: provider.id,
	title: provider.name,
	image: provider.photo_url,
	description: provider.description,
	phoneNumber: [provider.phone_number1, provider.phone_number2],
	products: [products],
});

module.exports = response;
