var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url !== "/favicon.ico"){
        fun1(response);
        response.end('');
    } 
}).listen(8100);
console.log('Server running at http://127.0.01.8000');

function fun1(res){
    console.log("fun1");
    res.write("hello,我是fun1");
}