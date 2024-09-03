import { Router } from "express";
import { createPost,getPosts,getPostById,updatePost, deletePost} from "../controllers/post.controller.js";

const router = Router();

router.route('/post')
    .post(createPost)  
    .get(getPosts); 
router.route('/post/:id')
    .get(getPostById)
    .put(updatePost)
    .delete(deletePost)


export default router;