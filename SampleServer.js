var http=require('http')
var fs=require('fs')
const { error, log } = require('console')
var url=require('url')

http.createServer(Server).listen(7000,() => console.log('Server Started'))



function Server(req,res){
    var q=url.parse(req.url,true)
//console.log(q.pathname);

    
if(q.pathname==='/'){
    fs.readFile('htmlSample.html',function(error,data){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    res.end()
    
    })
 }else if(q.pathname==='/login'){
    fs.readFile('LoginForm.html',(error,data)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })
   


}else if(q.pathname==='/loginAction'){
    console.log(q.query);

    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>'+q.query.fname+'</h1>')
    res.end()
}else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('error')
    res.end()
}
}
