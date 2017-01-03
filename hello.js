var http = require('http');
http.createServer(function(require,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    console.log('访问');
    response.write('hello world');
}).listen(8100);
console.log('Server running at http://127.0.01.8000');