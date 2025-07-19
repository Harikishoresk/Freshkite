import {registeruser, findUserByName} from "../dal/querydal.js"
import jwt from "jsonwebtoken"
import { appconfig } from "../config/config.js"
import bcrypt from "bcryptjs"


export const registeruserservice = async (username, password) => {
    let user = await findUserByName(username);
    if(user) {
        throw new Error("user already registered");
    }
    user = await registeruser({username, password});
    return user;
}

export const loginuserservice = async (username, password) => {
    let user = await findUserByName(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("invalid credentials");
    }
    const token = jwt.sign({id: user._id}, appconfig.jwt_key, {expiresIn: '1h'});
    return {user, token};
}