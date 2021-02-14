var http =require ('http');
var port = process.env.PORT || 5000;
var server = http.createServer(function (req,res) {
    res.end('server works by smitha patil !!!');
});
server.listen(port,'localhost',function () {
    console.log('server started on the port:3000');
});
