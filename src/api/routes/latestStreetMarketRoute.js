const { Router } = require("express");
const LatestStreetMarketController = require("../controllers/latestStreetMarketController.js");

const router = Router();

router.get(
	"/api/home/street-market-latest",
	LatestStreetMarketController.GetAllProductsFromtheHomePage
);

module.exports = router;
