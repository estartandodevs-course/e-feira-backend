const { Router } = require("express");
const ProductController = require("../controllers/productController.js");

const router = Router();

router.get("/api/products", ProductController.GetAllProducts);
router.get("/api/products/:id", ProductController.GetOneProduct);
router.get(
	"/api/products/provider/:provider_id",
	ProductController.GetAllProductsFromAProvider
);
router.get(
	"/api/products/category/:category_id",
	ProductController.GetAllProductsFromACategory
);
router.get("/api/product?name=:name", ProductController.GetProductsFromName)
router.post("/api/products", ProductController.CreateAProduct);
router.put("/api/products/:id", ProductController.UpdateAProduct);
router.delete("/api/products/:id", ProductController.DeleteAProduct);

module.exports = router;
