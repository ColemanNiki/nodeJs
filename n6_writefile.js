var http = require('http');
var router = require('./router');
var url = require('url');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url !== "/favicon.ico"){
        var pathname=url.parse(request.url);
        pathname = pathname.replace(/\//,'');
        router[pathname](request,response);
        console.log('主程序完毕');
    } 
}).listen(8100);
console.log('Server running at http://127.0.01.8000');
