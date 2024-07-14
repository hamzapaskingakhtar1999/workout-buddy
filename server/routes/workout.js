const express = require("express");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET All workout
router.get("/", getWorkouts);

// GET Single workout
router.get("/:id", getWorkout);

// POST a New workout
router.post("/", createWorkout);

// DELETE Single workout
router.delete("/:id", deleteWorkout);

// UPDATE Single workout
router.patch("/:id", updateWorkout);

module.exports = router;
