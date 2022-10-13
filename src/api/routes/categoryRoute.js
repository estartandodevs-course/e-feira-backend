const { Router } = require("express");
const CategoryController = require("../controllers/categoryController.js");

const router = Router();

router.get("/api/categories", CategoryController.GetAllCategories);
router.get("/api/categories/:id", CategoryController.GetOneCategory);
router.post("/api/categories", CategoryController.CreateACategory);
router.put("/api/categories/:id", CategoryController.UpdateACategory);
router.delete("/api/categories/:id", CategoryController.DeleteACategory);

module.exports = router;
