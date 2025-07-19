import exp from "express"
import { appconfig } from "./config/config.js"
import troutes from "./routes/taskroutes.js"
import urouter from "./routes/userroutes.js"
import mon from "mongoose"


const todo = exp()

todo.use(exp.json());
todo.use("/auth", urouter);
todo.use("/task", troutes);

const ConnectToDB = async () => {
    try {    
        await mon.connect(appconfig.mongo_url)
        console.log("MongoDB is connected");
    } catch(err) {
        console.log("MongoDB is not connected", err);
    }
}

todo.listen(appconfig.port, async () => {
    await ConnectToDB();
    console.log("Server started on", appconfig.port);
    
})