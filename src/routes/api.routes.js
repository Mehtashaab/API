import { Router } from "express";
import { createPost,getPosts,getPostById,updatePost, deletePost} from "../controllers/post.controller.js";
import { createComment, deleteComment, getComment, getCommentById, updateComment } from "../controllers/comment.controller.js";
import { createUser, userLogin, userLogout } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


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
router.route('/register').post(createUser)
router.route('/login').post(userLogin)
router.route('/logout').post(verifyJWT,userLogout)


    
    



export default router;