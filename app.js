var http =require ('http');
const Port = process.env.Port || 3000;
var server = http.createServer(function (req,res) {
    res.end('server works by smitha patil !!!');
});
server.listen(Port,'localhost',function () {
    console.log('server started on the port:3000');
});


