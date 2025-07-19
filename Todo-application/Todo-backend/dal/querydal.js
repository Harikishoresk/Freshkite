import { tmodel } from "../model/taskmodel.js";
import { umodel } from "../model/usermodel.js";

export const findUserByName = (username) => {
    return umodel.findOne({username});
}
export const findById = (id) => {
    return tmodel.findById(id);
}
export const registeruser = (userdata) => {
    return umodel.create(userdata);
}
export const addtask = (tododata) => {
    return tmodel.create(tododata);
}
export const updatetask = (id, tododata) => {
    return tmodel.findByIdAndUpdate(id, tododata, {new:true});
}
export const gettask = (userid) => {
    return tmodel.find({user : userid});
}
export const deletetask = (todoid) => {
    return tmodel.findByIdAndDelete(todoid);
}
