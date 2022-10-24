require("dotenv").config();

const products = require("./api/routes/productRoute.js");
const providers = require("./api/routes/providerRoute.js");
const highlights = require("./api/routes/highlightRoute.js");
const category = require("./api/routes/categoryRoute.js");
const streetMarket = require("./api/routes/latestStreetMarketRoute.js");
const user = require("./api/routes/userRoute.js");
const order = require("./api/routes/orderRoute.js");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(products, providers, highlights, category, streetMarket, user, order);
app.get("/api", (req, res) => {
	res.status(200).send({
		message: "Hi! Welcome to the API",
		version: "1.1.0",
		date: new Date(),
	});
});

app.listen(PORT, () => console.log(`Server up in PORT ${PORT}`));
