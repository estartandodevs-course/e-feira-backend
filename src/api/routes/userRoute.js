const { Router } = require("express");
const UserController = require("../controllers/userController.js");

const router = Router();

router.get("/api/users", UserController.GetAllUsers);
router.get("/api/users/:id", UserController.GetOneUser);
router.post("/api/users", UserController.CreateAUser);
router.put("/api/users/:id", UserController.UpdateAUser);
router.delete("/api/users/:id", UserController.DeleteAUser);

module.exports = router;
