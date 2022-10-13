const products = require("./api/routes/productRoute.js");
const providers = require("./api/routes/providerRoute.js");
const highlights = require("./api/routes/highlightRoute.js");
const category = require("./api/routes/categoryRoute.js");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(products, providers, highlights, category);
app.get("/", (req, res) => {
	res.send("Hello!");
});

app.listen(PORT, () => console.log(`Server up in PORT ${PORT}`));
