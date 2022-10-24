const { Router } = require("express");
const OrderController = require("../controllers/orderController.js");

const router = Router();

router.get("/api/orders", OrderController.GetOrders);
router.post("/api/orders/:userId", OrderController.PostAnOrder);
router.put("/api/orders/:id", OrderController.UpdateAnOrder);

module.exports = router;
