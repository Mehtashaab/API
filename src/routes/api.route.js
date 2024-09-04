import { Router } from "express";
import { createPost,getPosts,getPostById,updatePost, deletePost} from "../controllers/post.controller.js";
import { createComment, deleteComment, getComment, getCommentById, updateComment } from "../controllers/comment.controller.js";

const router = Router();

router.route('/post')
    .post(createPost)  
    .get(getPosts); 
router.route('/post/:id')
    .get(getPostById)
    .put(updatePost)
    .delete(deletePost)

router.route('/comment')
    .post(createComment)
    .get(getComment)
router.route("/comment/:id")
    .get(getCommentById)
    .put(updateComment)
    .delete(deleteComment)



   



export default router;