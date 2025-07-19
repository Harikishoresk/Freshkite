import {model, Schema} from "mongoose";
import bcrypt from "bcryptjs";

const uschema = new Schema({
    username : {type : String, required : true, unique : true},
    password : {type : String, required : true}
})

uschema.pre("save", async function (next) {
    if (!this.isModified('password')) { 
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10)
    next();
})

export const umodel = model("user", uschema);