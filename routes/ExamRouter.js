const express = require("express");
const ExamController = require("../controller/ExamController");
const router = express.Router();

router.post("/", ExamController.add);
router.get("/", ExamController.getAll);
router.get("/:id", ExamController.getById);
router.put("/:id", ExamController.update);
router.delete("/:id", ExamController.delete);

module.exports = router;
