const express = require("express");
const StudentController = require("../controller/StudentController");
const router = express.Router();

router.post("/", StudentController.add);
router.get("/", StudentController.getAll);
router.get("/:id", StudentController.getById);
router.put("/:id", StudentController.update);
router.delete("/:id", StudentController.delete);

module.exports = router;
