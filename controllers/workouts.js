const Workout = require("../models/Workout");

module.exports = {
    createWorkout: async (req, res) => {
      try {
        await Workout.create({
          workout: req.body.workout,
          workoutA: req.body.workoutA,
          workoutB: req.body.workoutB,
          workoutC: req.body.workoutC,
          workoutD: req.body.workoutD,
          workoutE: req.body.workoutE,
          workoutF: req.body.workoutF,
          workoutG: req.body.workoutG,
          workoutH: req.body.workoutH,
          workoutI: req.body.workoutI,
          workoutJ: req.body.workoutJ,
          workoutK: req.body.workoutK,
          workoutL: req.body.workoutL,
          workoutM: req.body.workoutM,
          workoutN: req.body.workoutN,
          workoutO: req.body.workoutO,
          workoutP: req.body.workoutP,
          workoutQ: req.body.workoutQ,
          workoutR: req.body.workoutR,
          workoutS: req.body.workoutS,
          workoutT: req.body.workoutT,
          workoutU: req.body.workoutU,
          workoutV: req.body.workoutV,
          workoutW: req.body.workoutW,
          workoutX: req.body.workoutX,
          workoutY: req.body.workoutY,
          workoutZ: req.body.workoutZ,
          workout_A: req.body.workout_A,
          workout_B: req.body.workout_B,
          workout_C: req.body.workout_C,
          workout_D: req.body.workout_D,
          workout_E: req.body.workout_E,
          workout_F: req.body.workout_F,
          workout_G: req.body.workout_G,
          workout_H: req.body.workout_H,
          workout_I: req.body.workout_I,
          workout_J: req.body.workout_J,
          workout_K: req.body.workout_K,
          workout_L: req.body.workout_L,
          workout_M: req.body.workout_M,
          workout_N: req.body.workout_N,
          workout_O: req.body.workout_O,
          workout_P: req.body.workout_P,
          workout_Q: req.body.workout_Q,
          workout_R: req.body.workout_R,
          workout_S: req.body.workout_S,
          workout_T: req.body.workout_T,
          workout_U: req.body.workout_U,
          workout_V: req.body.workout_V,
          workout_W: req.body.workout_W,
          workout_X: req.body.workout_X,
          notes: req.body.notes,
          user: req.user.id,
          createdById:req.user.id,
        });
        console.log("Workout has been added!");
        res.redirect("/profile");
      } catch (err) {
        console.log(err);
      }
    },
    deleteWorkout: async (req, res) => {
      try {
        // Delete workout from db
        await Workout.deleteOne({_id: req.params.workoutid});
        console.log("Deleted Workout");
        res.redirect("/profile");
      } catch (err) {
        console.log(err)
        res.redirect("/profile");
      }
    },
  };
  