module.exports = {
    fun2:function (res) {
         console.log("我就是fun2");
    res.write("hello, fun2");
    },
    fun3:function(res){
        console.log("this is fun3");
        res.write("this is fun3");
    }
}