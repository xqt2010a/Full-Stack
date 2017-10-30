//导入net模块
var net = require('net');

//创建server对象
var server = net.createServer(function (conn){
	console.log('server is connet.')
});

//监听127.0.0.1:3000 tcp 端口
server.listen(3000, function(){
	console.log('server is listen...');
});