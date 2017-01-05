var http = require('http');
var url = require('url');
var router = require('./router');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url !== "/favicon.ico"){
        var pathname = url.parse(request.url).pathname;
        // console.log('come on');
        pathname = pathname.replace(/\//,'');
        // console.log(pathname);
        router[pathname](request,response);
        response.end('');
    } 
}).listen(8100);
console.log('Server running at http://127.0.01.8000');