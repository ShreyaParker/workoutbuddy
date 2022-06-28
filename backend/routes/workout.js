const express = require('express');
const {createWorkout, getAllWorkouts, getWorkouts, deleteWorkout, updateWorkout}= require("../controllers/workoutController")
const router = express.Router();
 //Get all Workout
router.get('/',getAllWorkouts)

//Get single workout
router.get('/:id',getWorkouts)
//Post a new workout
router.post('/',createWorkout)
//Delete a workout
router.delete('/:id',deleteWorkout)
//update a workout
router.patch('/:id',updateWorkout)


module.exports = router