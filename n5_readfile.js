var http = require('http');
var optfile = require('./models/optfile.js');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url !== "/favicon.ico"){
        optfile.readfileSync('./views/login.html');
        response.end('');
        console.log('主程序完毕');
    } 
}).listen(8100);
console.log('Server running at http://127.0.01.8000');