import exp from "express";
import {registerusercontroller, loginusercontroller} from "../controller/usercontroller.js"

const router = exp.Router();

router.post("/register", registerusercontroller);
router.post("/login", loginusercontroller);

export default router;