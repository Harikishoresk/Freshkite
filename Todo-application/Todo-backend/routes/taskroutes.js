import exp from "express";
import {addtaskcontroller, updatetaskcontroller, gettaskcontroller, deletetaskcontroller} from "../controller/taskcontroller.js"
import { authenticate } from "../authenticate middleware/authenticate.js";

const router = exp.Router();

router.use(authenticate);
router.post("/add", addtaskcontroller)
router.put("/update/:id", updatetaskcontroller)
router.get("/get", gettaskcontroller)
router.delete("/delete/:id", deletetaskcontroller)

export default router;