//����netģ��
var net = require('net');

//�������ӵĶ���
var client = net.connect(3000, 'localhost');

//���������¼�
client.on('connect', function(){
	console.log('connect to server right now!');
});