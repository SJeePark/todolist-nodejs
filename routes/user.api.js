const express = require("express")
const router = express.Router();
const userController = require("../controller/user.controller");
const authController = require("../controller/auth.controller");

//1. 회원가입 endpoint
router.post("/", userController.createUser);
// 2.로그인 정보를 읽어오자
//get은 추가 정보를 req.body에 받아올 수가 없기 때문에 이메일 정보 읽어올때는 post를 씀
router.post("/login", userController.loginWithEmail);
//3. 토큰을 통해 유저 id빼내고 그 아이디로 유저 객체 찾아서 보내주기.
router.get("/me",  authController.authenticate, userController.getUser)

module.exports = router;