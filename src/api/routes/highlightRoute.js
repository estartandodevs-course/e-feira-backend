const { Router } = require("express");
const HighlightController = require("../controllers/highlightsController.js");

const router = Router();

router.get("/api/highlights", HighlightController.GetAllHighlights);
router.get("/api/highlights/:id", HighlightController.GetOneHighlight);
router.post("/api/highlights", HighlightController.CreateAHighlight);
router.put("/api/highlights/:id", HighlightController.UpdateAHighlight);
router.delete("/api/highlights/:id", HighlightController.DeleteAHighlight);

module.exports = router;
