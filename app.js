var http =require ('http');
var server = http.createServer(function (req,res) {
    res.end('server works by smitha patil !!!');
});
server.listen(3000,'localhost',function () {
    console.log('server started on the port:3000');
});


