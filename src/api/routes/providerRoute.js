const { Router } = require("express");
const ProviderController = require("../controllers/providerController.js");

const router = Router();

router.get("/api/providers", ProviderController.GetAllProviders);
router.get("/api/providers/:id", ProviderController.GetOneProvider);
router.get("/api/products/provider-page/:id", ProviderController.GetAProviderandTheirProducts);
router.post("/api/providers", ProviderController.CreateAProvider);
router.put("/api/providers/:id", ProviderController.UpdateAProvider);
router.delete("/api/providers/:id", ProviderController.DeleteAProvider);

module.exports = router;
