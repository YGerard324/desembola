const express = require("express");
const DisciplineController = require("../controller/DisciplineController");
const router = express.Router();

router.post("/", DisciplineController.add);
router.get("/", DisciplineController.getAll);
router.get("/:id", DisciplineController.getById);
router.put("/:id", DisciplineController.update);
router.delete("/:id", DisciplineController.delete);

module.exports = router;
