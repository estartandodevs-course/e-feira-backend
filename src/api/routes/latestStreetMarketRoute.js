const { Router } = require("express");
const LatestStreetMarketController = require("../controllers/latestStreetMarketController.js");

const router = Router();

router.get("/api/home/latest-streetMarket",LatestStreetMarketController.GetAllProductsFromtheHomePage);

module.exports = router;
