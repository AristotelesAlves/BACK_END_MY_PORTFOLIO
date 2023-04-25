import {Router} from "express";
import { getCommentsController } from "./controller/getCommentController";
import { createCommentController } from "./controller/createCommentController";

const router = Router()

router.get('/comments', new getCommentsController().handle)
router.post('/comment', new createCommentController().handle)

export { router }