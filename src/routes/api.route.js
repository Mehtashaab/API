import { Router } from "express";
import { createPost,getPosts,getPostById,updatePost, deletePost} from "../controllers/api.controller.js";

const router = Router();

router.route('/post')
    .post(createPost)  
    .get(getPosts); 
router.route('/post/:id')
    .get(getPostById)
    .put(updatePost)
    .delete(deletePost)


export default router;