const { Router } = require("express");
const OrderController = require("../controllers/orderController.js");
const ReceiptController = require("../controllers/receiptController.js");

const router = Router();

router.get("/api/orders", OrderController.GetOrders);
router.get("/api/orderitens", OrderController.GetOrderItens);
router.get("/api/receipt/:orderId", ReceiptController.GetReceipt);
router.post("/api/checkout", OrderController.PostAnOrder);
router.put("/api/orders/:id", OrderController.UpdateAnOrder);

module.exports = router;
