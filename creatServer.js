var http = require("http");
var fs = require("fs")

http.createServer(
    function(req,res){
        if(req.url==='/'){
            fs.readFile('index.html',function(err,data){
                res.writeHead(200,{'content-Type' : 'text/html'})
                res.write(data)
                res.end()
            })
        }else if(req.url==='/'){
            fs.readFile('HAI.html',function(err,data){
                res.writeHead(200,{'content-Type' : 'text/html'})
                res.write(data)
                res.end()
            })
        }
       
    }
).listen(7000,()=>{console.log("server started")})