import { Router } from "express";
import { createUser,getUsers} from "../controllers/api.controller.js";

const router = Router();

router.route('/post')
    .post(createUser)  
    .get(getUsers);    


export default router;