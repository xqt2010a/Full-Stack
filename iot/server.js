var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

// 处理根目录的get请求
app.get('/',function(req,res){
    res.sendfile('public/index.html') ;
    console.log('main page is required ');
});

// 处理/login的get请求
app.get('/center', function (req,res) {
    res.sendfile('public/center.html') ;
    console.log('有后台请求') ;
}) ;

// 处理/login的post请求
app.post('/login',function(req,res){
    name=req.body.name ;
    pwd=req.body.pwd   ;
    console.log(name+'--'+pwd) ;
    res.status(200).send(name+'--'+pwd) ;
});

// 监听3000端口
var serverk=app.listen(3000) ;