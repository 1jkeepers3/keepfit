const Workout = require("../models/Workout");

module.exports = {
  getProfile: async (req, res) => { 
    console.log(req.user)
    try {
      const workouts = await Workout.find({user: req.user.id}).sort({ createdAt: "desc" }).lean();
      res.render("profile.ejs", {user: req.user, workouts: workouts});
    } catch (err) {
      console.log(err);
    }
  },
  getExercise: async (req, res) => {
    try {
      res.render("exercise.ejs", {user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
};


