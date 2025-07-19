
import { addtask, updatetask, gettask, findById, deletetask } from "../dal/querydal.js"

export const addtaskservice = async function (tododata) {

    return await addtask(tododata);
    
}

export const updatetaskservice = async function (taskid, tododata) {
    const task = await findById(taskid);
    if (!task) {
        throw new Error("Task Invalid");
    }

    if(task.user.toString() != tododata.user){
        throw new Error("User Invalid");
    }
    
    try {
        const ret = await updatetask(taskid, tododata);
        return res.status(200).json({msg: tododata});
    } catch(err) {
        return res.status(400).json({error : err.message})
    }
    
}

export const gettaskservice = async function (userid) {
    try {
        const ret = await gettask(userid);
        return ret;
    } catch(err) {
        console.log(err.message);
        
    }
}

export const deletetaskservice = async function (userid, taskid) {
    const todo = await findById(taskid);
    console.log(todo);
    if (userid != todo.user) {
        console.log("user is not valid");
    }
    
    return await deletetask(taskid);
}
