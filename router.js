var optfile = require('./models/optfile')
function getRecall(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    function recall(data){
         res.write(data);
        res.end('');
    }
    return recall;
}
module.exports = {
    login:function(req,res){
       recall = getRecall(req,res);
        optfile.readfile('./views/login.html',recall);
    },
    zhuce:function (req,res) {
        res.write("我是注册方法");
    },
    writefile:function(req,res){
        function recall(data){
            res.write(data);
            res.end('');
        }
        optfile.writefile('./views/data.txt','data content',recall);
    },
    readImg:function(req,res){
        optfile.readImg('./content/nodejs.jpg',res);
    },
    showimg:function(req,res){
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        optfile.readImg('./content/nodejs.jpg',res);
    }
}