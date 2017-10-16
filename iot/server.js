var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');  //bodyParser模块来做文件解析
var mongoose = require('mongoose');

var userModel = require('./Db_Js/user.js');  //引入user模型

var app = express();

mongoose.connect('mongodb://localhost/abwba',{useMongoClient: true});
console.log('MongoDB connect Success!');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

//系统启动时没有admin账号会自动建一个
app.use(function(req, res, next){
    userModel.findOne({userID:"admin"}, function(err, u){
        if(u === null){
            var admin = new userModel();
            admin.userID = "admin";
            admin.userName = "admin";
            admin.userPwd = "admin";
            admin.save();
        }
    })
    next();
});

app.use(express.static('public'));

// 处理根目录的get请求
app.get('/',function(req,res){
    res.sendfile('public/index.html') ;
    res.end();
    console.log('main page is required ');
});

// 处理/login的get请求
app.get('/center', function (req,res) {
    res.sendfile('public/web/center.html') ;
    console.log('有后台请求') ;
}) ;

// 处理/login的post请求
app.post('/login',function(req,res){
    var name = req.body.name;
    var pwd = req.body.pwd;
    userModel.findOne({userID:name, userPwd:pwd}, function(err, user){
       if(user !== null){
           res.status(200).send('ok')
           res.end();
           console.log("success");
       } else{
           res.status(412);
           console.log("faild");
           res.end();
       }
    });
});

// 监听3000端口
var serverk=app.listen(3000) ;