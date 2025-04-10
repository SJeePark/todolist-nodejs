const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
require('dotenv').config()
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const userSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true});

//스키마 정보 중 디폴트로 지워져서 나오게 하는 방법!! 
userSchema.methods.toJSON = function(){ //위의 스키마를 JSON 형태로 불러온다
    const obj = this._doc;  //이 스키마에서 _doc의 정보만 가져옴
    delete obj.password;    //근데 _doc 안의 정보중 password는 없애고 가져옴옴
    return obj;
}


userSchema.methods.generateToken=async function(){
    //this. id값을 받아오고, 개별 토큰 값 부여, 토큰의 유통기한 설정
    const token = jwt.sign({_id: this._id}, JWT_SECRET_KEY, {expiresIn:'1d'});
    return token;
}

const User= mongoose.model("User",userSchema);
module.exports = User;