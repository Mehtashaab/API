import { Router } from "express";
import { createPost,getPosts,getPostById,updatePost, deletePost} from "../controllers/post.controller.js";
import { createComment, deleteComment, getComment, getCommentById, updateComment } from "../controllers/comment.controller.js";
import { createUser, userLogin, userLogout } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";


const router = Router();

router.route('/post')
    .post(verifyJWT,createPost)  
    .get(verifyJWT,getPosts); 
router.route('/post/:id')
    .get(verifyJWT,getPostById)
    .put(verifyJWT,updatePost)
    .delete(verifyJWT,deletePost)

router.route('/comment')
    .post(verifyJWT,createComment)
    .get(verifyJWT,getComment)
router.route("/comment/:id")
    .get(verifyJWT,getCommentById)
    .put(verifyJWT,updateComment)
    .delete(verifyJWT,deleteComment)

router.post('/register', upload.single('avatar'), createUser);

router.route('/login').post(userLogin)
router.route('/logout').post(verifyJWT,userLogout)


    
    



export default router;