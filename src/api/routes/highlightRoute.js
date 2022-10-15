const { Router } = require("express");
const HighlightController = require("../controllers/highlightController.js");

const router = Router();

router.get("/api/home/highlights", HighlightController.GetAllHighlights);
router.get("/api/home/highlights/:id", HighlightController.GetOneHighlight);
router.post("/api/home/highlights", HighlightController.CreateAHighlight);
router.put("/api/home/highlights/:id", HighlightController.UpdateAHighlight);
router.delete("/api/home/highlights/:id", HighlightController.DeleteAHighlight);

module.exports = router;
