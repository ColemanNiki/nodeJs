var http = require('http');
var router = require('./router');
var url = require('url');
var exception = require('./models/exception');
http.createServer(function(request,response){
    if(request.url !== "/favicon.ico"){
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,'');
        try{
            router[pathname](request,response);
        }
        catch(err){
            console.log(''+err);
            response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            response.write(err.toString());
            response.end('');
        }
        console.log('主程序完毕');
    } 
}).listen(8100);
console.log('Server running at http://127.0.01.8100');
