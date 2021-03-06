var fs = require('fs');
module.exports={
    readfile:function(path,recall){
        fs.readFile(path,function(err,data){
            if(err){
                console.log(err);
            }else{
                recall(data);
            }
        });
        console.log("异步方法执行完毕");
    },
    readfileSync:function(path){
        var data = fs.readFileSync(path,'utf-8');
        console.log("同步方法执行完毕");
        return data;
    },
    writefile:function(path,data,recall){
        fs.writeFile(path,data,function(err){
            if(err){
                throw err;
            }
            console.log('it\'s saved!');
            recall('添加成功');
        });
    },
    writefileSync:function(path,data){
        fs.writeFileSync(path,data);
        console.log("同步写文件完成");
    },
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,file){
            if(err){
                console.log(err);
                return;
            }
            else{
                console.log('输出文件');
                res.write(file,'binary');
                res.end();
            }
        })
    }
}
