//����netģ��
var net = require('net');

//����server����
var server = net.createServer(function (conn){
	console.log('server is connet.')
});

//����127.0.0.1:3000 tcp �˿�
server.listen(3000, function(){
	console.log('server is listen...');
});