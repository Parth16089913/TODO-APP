const express = require("express")
const app = express()
port = 8080
app.listen(port , () => {
    console.log(`app is listening on port :${port}`)
})
 
app.get("/" ,(req , res)=> {
    console.log("request received,sending response")
 
})

