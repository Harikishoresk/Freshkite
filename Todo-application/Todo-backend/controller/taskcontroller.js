import { tmodel } from "../model/taskmodel.js";
import {addtaskservice, updatetaskservice, gettaskservice, deletetaskservice} from "../service/taskservice.js"

export const addtaskcontroller = async function (req, res) {
    try {
        const tododata = {
            user : req.user.id,
            todo : req.body.todo,
            status : req.body.status,
        }
        console.log(tododata);
        const ret = await addtaskservice(tododata);
        return res.status(200).json(ret);
    }catch (err) {
        console.log(err);
        return res.status(400).json({error : err.message});
    }
}

export const updatetaskcontroller = async function (req, res) {
    try{
        const tododata = {
            user: req.user.id,
            todo: req.body.todo,
            status: req.body.status,
        }
        console.log(tododata);
        const ret = await updatetaskservice(req.params.id, tododata);
        res.status(200).json(ret);
    } catch(err) {
        console.log(err);
        res.status(400).json({error:err.message});
    }
}

export const gettaskcontroller = async function (req, res) {
    try{
        const ret = await gettaskservice(req.user.id);
        res.status(200).json(ret);
    } catch(err) {
        console.log(err);
        res.status(400).json({error:err.message});
    }    
}

export const deletetaskcontroller = async function (req, res) {
    try {
        await deletetaskservice(req.user.id, req.params.id);
        res.status(200).json({msg: "todo deletion is successful"});

    } catch (err) {
        console.log(err);
        res.status(400).json({msg: err.message});
        
    }

}
