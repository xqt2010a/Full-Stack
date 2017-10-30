//导入net模块
var net = require('net');

//创建连接的对象
var client = net.connect(6000, '192.168.18.103');

//监听连接事件
client.on('connect', function(){
	console.log('connect to server right now!');
});
//向服务器发送TCP 数据
client.write('hello world!\r\n');
client.write('hello Labc!\r\n');
