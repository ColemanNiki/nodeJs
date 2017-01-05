var http = require('http');
http.createServer(function(require,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url !== "/favicon.ico"){
        console.log('come on');
        response.write('hello world');
        response.end();
    } 
}).listen(8100);
console.log('Server running at http://127.0.01.8000');
