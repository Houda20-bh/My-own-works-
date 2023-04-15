const express= require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const dotenv= require('dotenv').config()
const colors = require('colors');
const connectDB = require('./config/db')
const UserRouter = require('./Routes/UserRouters')
const app= express();
app.use( cors())
app.use (express.json());
app.use(express.urlencoded({extended:false}))
app.use("/users",UserRouter);

// connect db
connectDB ()

app.listen(process.env.URL, ()=>{
    console.log(`server is running on port ${process.env.URL}`)
})
