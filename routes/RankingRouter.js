const express = require("express");
const RankingController = require("../controller/RankingController");
const router = express.Router();

router.post("/", RankingController.add);
router.get("/", RankingController.getAll);
router.get("/:id", RankingController.getById);
router.put("/:id", RankingController.update);
router.delete("/:id", RankingController.delete);

module.exports = router;
