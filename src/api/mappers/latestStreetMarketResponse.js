const response = (provider1, provider2, products1, products2) => [
    {
        title: provider1.name,
		image: provider1.photo_url,
        products: [products1],
    },
    {
        title: provider2.name,
		image: provider2.photo_url,
        products: [products2],
    },
];

module.exports = response;
