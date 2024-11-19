const express = require("express");
const TeamController = require("../controller/TeamController");
const router = express.Router();

router.post("/", TeamController.add);
router.get("/", TeamController.getAll);
router.get("/:id", TeamController.getById);
router.put("/:id", TeamController.update);
router.delete("/:id", TeamController.delete);

module.exports = router;
