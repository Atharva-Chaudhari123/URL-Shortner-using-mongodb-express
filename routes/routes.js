const express  = require("express") ;
const router  = express.Router() ;
const { handleGenerateShortURL } = require ("../controller/controller_url") ;


router.post("/", handleGenerateShortURL );

// router.get("/redirect/:id", handleRedirectURL)

module.exports = router ;

