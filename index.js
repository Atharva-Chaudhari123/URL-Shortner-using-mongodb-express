const express = require("express") ;
const app = express()  ;
const dotenv = require("dotenv") ;
const {connectDB} = require('./config/connection');
const router = require("./routes/routes");
const {model } = require("./model/urlModel") ;
//load dotenv
dotenv.config() ;
const port = process.env.PORT ;

//connect db
connectDB(process.env.MONGODB_URL) ;

//parse json data
app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;

app.get("/", (req, res)=>{
    res.send ("Hello world") ;
    res.end(); 
})
app.get("/:id", async(req, res) =>{
    const url = req.params.id ;
    a = await model.findOneAndUpdate(
        {shortURL: url} ,
        {$push :{
            visitHistory : {
                timestamp : Date.now() 
            }
        }}
    ) ;
    res.redirect(a.redirectURL) ;   
} ) ;

app.use("/url", router) ;

//listen
app.listen(port , (err)=>{
    if(err){
        return console.log("Error staring server :( ", err) ;
    }
    console.log("Express Server started successfully")
})