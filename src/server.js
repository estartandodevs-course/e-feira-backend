const products = require("./api/routes/productRoute.js");
const providers = require("./api/routes/providerRoute.js");
const highlights = require("./api/routes/highlightRoute.js");
const category = require("./api/routes/categoryRoute.js");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(products, providers, highlights, category);
app.get("/", (req, res) => {
    res.status(200).send("test")
})

app.listen(PORT, () => console.log(`Server up in PORT ${PORT}`));
