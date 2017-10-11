var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    ukey:String,
    userID:String,
    userName:String,
    userPwd:String,
    email:String,
    qq:String,
    wx:String
});

//userSchema.pre 表示每次存储数据之前都先调用这个方法
userSchema.pre('save', function(next){
    this.ukey = new mongoose.Types.ObjectId;
    next();
});

//编译生成user模型
//导出userSchema模型
module.exports = mongoose.model('User', userSchema);