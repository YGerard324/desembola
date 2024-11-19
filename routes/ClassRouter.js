const express = require("express");
const ClassController = require("../controller/ClassController");
const router = express.Router();

router.post("/", ClassController.add);
router.get("/", ClassController.getAll);
router.get("/:id", ClassController.getById);
router.put("/:id", ClassController.update);
router.delete("/:id", ClassController.delete);

module.exports = router;
