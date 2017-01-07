var optfile = require('./models/optfile')
module.exports = {
    login:function(req,res){
        res.write("我是login方法");
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
    }
}