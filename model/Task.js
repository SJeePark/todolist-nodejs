const mongoose = require('mongoose');
const Schema = mongoose.Schema

const taskSchema = Schema({
    task:{
        type:String,
        required: true
    },
    isComplete:{
        type: Boolean,
        required:true
    }
}, {timestamps: true})
// timestamps: 생성 시간 로그 기록해줌 : 몽구스 기능임!

const Task = mongoose.model("Task", taskSchema)

module.exports = Task;