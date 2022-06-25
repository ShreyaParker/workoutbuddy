const express = require('express');
const Workout = require("../models/workoutModels")
const router = express.Router();
 //Get all Workout
router.get('/',(req,res)=>{
    res.json({mssg:'Get all workout'})
})

//Get single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get a single workout'})
})
//Post a new workout
router.post('/',async (req,res)=>{
    const {title,load,reps}= req.body
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout);
    }catch (error){
        res.status(400).json({error:error.message})
    }
    res.json({mssg:'Get a single workout'})
})
//Delete a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'Get a single workout'})
})
//update a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'Get a single workout'})
})


module.exports = router