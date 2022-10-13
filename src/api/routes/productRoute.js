const { Router } = require("express");
const ProductController = require("../controllers/productController.js");

const router = Router();

router.get("/api/products", ProductController.GetAllProducts);
router.get("/api/products/:id", ProductController.GetOneProduct);
router.post("/api/products", ProductController.CreateAProduct);
router.put("/api/products/:id", ProductController.UpdateAProduct);
router.delete("/api/products/:id", ProductController.DeleteAProduct);

module.exports = router;
