import { Router } from "express";
import { createUser,getUsers,getUserById,updateUser, deleteUser} from "../controllers/api.controller.js";

const router = Router();

router.route('/post')
    .post(createUser)  
    .get(getUsers); 
router.route('/post/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)


export default router;