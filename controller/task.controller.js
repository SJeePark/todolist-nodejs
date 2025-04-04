const Task = require("../model/Task")

const taskController = {}

// req: front로부터 입력받는 값
// async (req, res) 위치 바꾸면 에러남!
taskController.createTask = async (req, res) => {
    try {
        const { task, isComplete } = req.body;
        const newTask = new Task({ task, isComplete });
        await newTask.save();
        res.status(200).json({ status: 'ok', data: newTask });
    } catch (err) {
        res.status(400).json({ status: 'fail', error: err });
    }
}

taskController.getTask=async(req, res)=>{
    try{
        const taskList = await Task.find({}).select("-__v");
        res.status(200).json({status: 'ok', data: taskList})
    }catch(err){
        res.status(400).json({status: "fail", error: err})

    }
}

//할일 업데이트트
taskController.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, isComplete } = req.body;
        //findByIdAndUpdate(id, updateObj, options)	ID로 찾고 수정
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { task, isComplete },
            { new: true }
        );
        res.status(200).json({ status: 'ok', data: updatedTask });
    } catch (err) {
        res.status(400).json({ status: 'fail', error: err });
    }
};


//삭제 기능
taskController.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        //findByIdAndDelete(id): id 찾아서 삭제하는 메서드 
        const deletedTask = await Task.findByIdAndDelete(id);
        res.status(200).json({ status: 'ok', data: deletedTask });
    } catch (err) {
        res.status(400).json({ status: 'fail', error: err });
    }
};


module.exports = taskController