const express = require("express");
const TeacherController = require("../controller/TeacherController");
const router = express.Router();

router.post("/", TeacherController.add);
router.get("/", TeacherController.getAll);
router.get("/:id", TeacherController.getById);
router.put("/:id", TeacherController.update);
router.delete("/:id", TeacherController.delete);

module.exports = router;
