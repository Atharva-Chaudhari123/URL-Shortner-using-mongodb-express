const shortid = require("shortid");
const {model } = require("../model/urlModel") ;



const handleGenerateShortURL = async (req, res)=>{
    try{
        const shortID = shortid(8) ;
        await model.create({
            shortURL : shortID, 
            redirectURL  : req.body.url ,
            visitHistory : [],
        }) ;
        const data = {
            url :  `https://url-shortner-using-mongodb-express.onrender.com/redirect/${shortID}`
        }
        res.render("home", {data }) ;
    }catch(err){
        console.log("Error occured" , err) ;
        res.status(500).json({
            success : false ,
            message : "Internal server error"
        })
    }
} ;



module.exports = { handleGenerateShortURL}