import mongoose, {model, Schema} from "mongoose";

const tschema = new Schema ({
    todo : {type : String, required : true},
    status : {type : String, required : true},
    user : {type : mongoose.Schema.Types.ObjectId, required : true, ref : 'user'}
}, {timestamps : true})

export const tmodel = model("todo", tschema);