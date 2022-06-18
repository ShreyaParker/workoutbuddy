const express = require('express');

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
router.post('/',(req,res)=>{
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