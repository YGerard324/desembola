const express = require("express");
const LessonController = require("../controller/LessonController");
const router = express.Router();

router.post("/", LessonController.add);
router.get("/", LessonController.getAll);
router.get("/:id", LessonController.getById);
router.put("/:id", LessonController.update);
router.delete("/:id", LessonController.delete);

module.exports = router;
