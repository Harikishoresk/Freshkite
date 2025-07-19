import jwt from "jsonwebtoken"
import { appconfig } from "../config/config.js"

export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({error : "invalid token"});
    }
    try {
        const user = jwt.verify(token, appconfig.jwt_key);
        req.user = user;
        console.log("middle: ", user);
        next();
    } catch (err) {
        return res.status(401).json({error : "invalid token"});
    }
}