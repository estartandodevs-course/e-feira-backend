const { Router } = require("express");
const CategoryController = require("../controllers/categoryController.js");

const router = Router();

router.get("/api/home/categories", CategoryController.GetAllCategories);
router.get("/api/home/categories/:id", CategoryController.GetOneCategory);
router.post("/api/home/categories", CategoryController.CreateACategory);
router.put("/api/home/categories/:id", CategoryController.UpdateACategory);
router.delete("/api/home/categories/:id", CategoryController.DeleteACategory);

module.exports = router;
