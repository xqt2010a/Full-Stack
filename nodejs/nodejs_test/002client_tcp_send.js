//����netģ��
var net = require('net');

//�������ӵĶ���
var client = net.connect(6000, '192.168.18.103');

//���������¼�
client.on('connect', function(){
	console.log('connect to server right now!');
});
//�����������TCP ����
client.write('hello world!\r\n');
client.write('hello Labc!\r\n');
