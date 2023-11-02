const express = require("express");
const router = express.Router();
const exercisesController = require("../controllers/exercises");
const { ensureAuth } = require("../middleware/auth");

//Exercise Routes
router.get("/", ensureAuth, exercisesController.getExercise);

module.exports = router;
