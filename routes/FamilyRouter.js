const express = require("express");
const FamilyController = require("../controller/FamilyController");
const router = express.Router();

router.post("/", FamilyController.add);
router.get("/", FamilyController.getAll);
router.get("/:id", FamilyController.getById);
router.put("/:id", FamilyController.update);
router.delete("/:id", FamilyController.delete);

module.exports = router;
