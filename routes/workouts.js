const express = require("express");
const router = express.Router();
const workoutsController = require("../controllers/workouts");
const { ensureAuth } = require("../middleware/auth");

router.post("/createWorkout", ensureAuth, workoutsController.createWorkout);

//Enables user to delete workout. In controller, uses Workout model to delete post from MongoDB collection
router.delete("/deleteWorkout/:workoutid", workoutsController.deleteWorkout);

module.exports = router;