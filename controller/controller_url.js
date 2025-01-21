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
            url :  `http://localhost:3000/redirect/${shortID}`
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