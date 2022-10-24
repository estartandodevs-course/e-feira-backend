const { Router } = require("express");
const OrderController = require("../controllers/OrderController.js");

const router = Router();

router.post("/api/orders", OrderController.PostAOrder);

module.exports = router;
