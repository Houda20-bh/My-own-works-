// connect db
const mongoose = require('mongoose')
const connectDB= async()=>{
    try{
        const conx = await mongoose.connect(process.env.DB_URL)
        console.log(`DB connected:${conx.connection.host}`.bgYellow.underline)
    }
    catch(error){
        console.log(error)
         process.exit(1)
    }
}
module.exports= connectDB;