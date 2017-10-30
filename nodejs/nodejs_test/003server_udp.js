
//nodejs 中的 udp 模块
var dgram = require('dgram');

var serverSocket = dgram.createSocket('udp4');

//监听客户端发来的信息
serverSocket.on('message', function(msg,info){
	console.log('server get '+msg+' from '+info.address+":"+info.port);
});

//监听
serverSocket.on('listening', function(){
	console.log('server is listening');
});
//绑定端口
serverSocket.bind(6666);