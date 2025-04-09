const User = require('../model/User')
const bcrypt = require("bcrypt");
const saltRounds = 10

const userController = {}

userController.createUser = async(req, res)=>{
    try{
        const {email, name, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            res.status(400).json({
                status: "fail"
                , error:"이미 가입된 유저입니다. "})
        }

        const field = [];
        if (!email){
            field.push("이메일")    //리스트에 추가
        }
        if (!name){
            field.push("이름")    
        }
        if (!password){
            field.push("비밀번호")   
        }

        if(!email || !name || !password){
            // email || name || password === null 은 잘못됐단다.. 
            // 이러면 password만 null이라는 의미래. 기초 무슨일,,,
            res.status(400).json({
                status: "fail"
                , error:`${field.join(", ")}를 추가해주세요.`})
        }

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({email, name, password: hash})
        await newUser.save()
        res.status(200).json({status:"success"})
        
    } catch(error){
        res.status(400).json({status: "fail", error})
    }
}

module.exports = userController