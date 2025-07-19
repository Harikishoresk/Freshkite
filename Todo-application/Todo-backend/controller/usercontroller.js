
import {loginuserservice, registeruserservice} from "../service/userservice.js"

export const registerusercontroller = async function (req, res) {
    try {
        const retval = await registeruserservice(req.body.username, req.body.password);
        res.status(200).json({msg : "user created"})
    } catch (err){
        res.status(400).json({error : err.message});
    }
}

export const loginusercontroller = async function (req, res) {
    try {
        const retval = await loginuserservice(req.body.username, req.body.password);
        res.status(200).json(retval);
    } catch (err) {
        res.status(400).json({error : err.message});
    }
}