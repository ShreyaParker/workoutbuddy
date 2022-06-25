require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes= require('./routes/workout')

//express app
const app = express()

//middleware
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path,req.method);
    next();
})

//connecting to db
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT,()=>{
            console.log('listening on port',process.env.PORT);
        })

    })
    .catch((error)=>{
        console.log(error);
    })

//routes
app.use('/api/workouts', workoutRoutes);


