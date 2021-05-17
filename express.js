const express = require("express");
const app = express();
var path = require("path")

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'))
})
app.post('/action_page',function(req,res){
    res.send("created")
})

app.get('/login',function(req,res){
   res.sendFile(path.join(__dirname,'login.html'))
})

app.listen(3000,function(){console.log("server started")})