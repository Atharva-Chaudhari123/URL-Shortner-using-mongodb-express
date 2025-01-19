const mongoose = require("mongoose") ;

const connectDB = async(url)=>{

    try{
        await mongoose.connect(url) ;
        console.log("MongoDB connection success")

    }catch(err){
        console.log("Error connecting to database :", err) ;
    }
}

module.exports = { connectDB } ;
