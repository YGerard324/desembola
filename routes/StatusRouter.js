const express = require("express");
const StatusController = require("../controller/StatusController");
const router = express.Router();

router.post("/", StatusController.add);
router.get("/", StatusController.getAll);
router.get("/:id", StatusController.getById);
router.put("/:id", StatusController.update);
router.delete("/:id", StatusController.delete);

module.exports = router;
