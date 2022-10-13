const bodyParser = require("body-parser");
const products = require("./productRoute.js");
const providers = require("./providerRoute.js");
const highlights = require("./highlightRoute.js");
const category = require("./categoryRoute.js");

module.exports = (app) => {
	app.use(bodyParser.json());
	app.use(products, providers, highlights, category);
	app.get("/", (req, res) => {
		res.send("Hello!");
	});
};
