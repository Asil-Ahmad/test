 
const mongoose = require('mongoose')
 
 async function connectDb (){

    try{
mongoose.connect(process.env.MONGODB_URI)
    }
    catch (err){
        console.log(err)
    }
 }
 module.exports = connectDb;