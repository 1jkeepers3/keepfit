const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  workout: {
    type: String,
    required: true,
  },
  workoutA: {
    type: String,
    required: false,
  },
  workoutB: {
    type: String,
    required: false,
  },
  workoutC: {
    type: String,
    required: false,
  },
  workoutD: {
    type: String,
    required: false,
  },
  workoutE: {
    type: String,
    required: false,
  },
  workoutF: {
    type: String,
    required: false,
  },
  workoutG: {
    type: String,
    required: false,
  },
  workoutH: {
    type: String,
    required: false,
  },
  workoutI: {
    type: String,
    required: false,
  },
  workoutJ: {
    type: String,
    required: false,
  },
  workoutK: {
    type: String,
    required: false,
  },
  workoutL: {
    type: String,
    required: false,
  },
  workoutM: {
    type: String,
    required: false,
  },
  workoutN: {
    type: String,
    required: false,
  },
  workoutO: {
    type: String,
    required: false,
  },
  workoutP: {
    type: String,
    required: false,
  },
  workoutQ: {
    type: String,
    required: false,
  },
  workoutR: {
    type: String,
    required: false,
  },
  workoutS: {
    type: String,
    required: false,
  },
  workoutT: {
    type: String,
    required: false,
  },
  workoutU: {
    type: String,
    required: false,
  },
  workoutV: {
    type: String,
    required: false,
  },
  workoutW: {
    type: String,
    required: false,
  },
  workoutX: {
    type: String,
    required: false,
  },
  workoutY: {
    type: String,
    required: false,
  },
  workoutZ: {
    type: String,
    required: false,
  },
  workout_A: {
    type: String,
    required: false,
  },
  workout_B: {
    type: String,
    required: false,
  },
  workout_C: {
    type: String,
    required: false,
  },
  workout_D: {
    type: String,
    required: false,
  },
  workout_E: {
    type: String,
    required: false,
  },
  workout_F: {
    type: String,
    required: false,
  },
  workout_G: {
    type: String,
    required: false,
  },
  workout_H: {
    type: String,
    required: false,
  },
  workout_I: {
    type: String,
    required: false,
  },
  workout_J: {
    type: String,
    required: false,
  },
  workout_K: {
    type: String,
    required: false,
  },
  workout_L: {
    type: String,
    required: false,
  },
  workout_M: {
    type: String,
    required: false,
  },
  workout_N: {
    type: String,
    required: false,
  },
  workout_O: {
    type: String,
    required: false,
  },
  workout_P: {
    type: String,
    required: false,
  },
  workout_Q: {
    type: String,
    required: false,
  },
  workout_R: {
    type: String,
    required: false,
  },
  workout_S: {
    type: String,
    required: false,
  },
  workout_T: {
    type: String,
    required: false,
  },
  workout_U: {
    type: String,
    required: false,
  },
  workout_V: {
    type: String,
    required: false,
  },
  workout_W: {
    type: String,
    required: false,
  },
  workout_X: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Workout", WorkoutSchema);