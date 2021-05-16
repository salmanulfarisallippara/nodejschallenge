var http = require("http")
var fs= require("fs")
var url=require("url")

http.createServer(
    function(req,res){
        var q=url.parse(req.url)
        console.log(q.pathname)
       if(q.pathname==='/'){
          fs.readFile('index.html',function(err,data){
              res.writeHead(200,{'content-Type':'text/html'})
              res.write(data)
              res.end()
          })
       }else if(q.pathname==='/login'){
        fs.readFile('login.html',function(err,data){
            res.writeHead(200,{'content-Type':'text/html'})
            res.write(data)
            res.end()
        })
       }else if(q.pathname==='/action_page'){
        fs.readFile('login.html',function(err,data){
            res.writeHead(200,{'content-Type':'text/html'})
            console.log(q.query)
            res.write("thankyou")
            res.end()
        })
       }
       else{
        res.write('error page')
        res.end()
       }

    }
).listen(7000,()=>console.log("server started"))