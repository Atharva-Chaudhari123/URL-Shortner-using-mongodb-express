const express = require("express") ; ;

const router = express.Router() ;

router.get("/", (req, res)=>{
    const data = {
        url : ""
    };
    res.render("home", {data : data}) ;
})


module.exports = router ;