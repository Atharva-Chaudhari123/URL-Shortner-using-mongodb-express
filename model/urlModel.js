const mongoose  = require("mongoose") ;

const urlSchema = mongoose.Schema({
    shortURL :{
        type : String ,
        required : true 
    },
    redirectURL : {
        type : String,
        requored : true ,
    },
    visitHistory : [{timestamp : {type : Number,}}] ,

},
    {timestamps : true} 
);

const model = mongoose.model("url", urlSchema) ;

module.exports = {model} ;