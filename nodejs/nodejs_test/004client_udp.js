
//导入 udp 模块
var dgram = require('dgram');

//创建一个iPv4 协议的udp协议的socket对象
var socket= dgram.createSocket('udp4');

//绑定并设置回调的端口
socket.bind(function(){
	socket.setBroadcast(true);
});

/*****client向server发送信息****/
var massage = new Buffer("Hello World!");

//socket.send的参数（消息，发送消息开始的字节，发送消息长度，端口号，目的ip地址）
socket.send(massage, 0, massage.length, 6666, '192.168.18.103', function(error, bytes){
	socket.close();
});