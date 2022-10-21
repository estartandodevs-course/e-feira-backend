const response = (provider) => [
	{
		id: provider.id,
		name: provider.name,
		url: provider.photo_url,
		description: provider.description,
		phoneNumber: [provider.phone_number1, provider.phone_number2],
	},
];
module.exports = response;
