import {Router} from "express";
import { PageCommentController } from "./controller/PageCommentController";
import { createCommentController } from "./controller/createCommentController";

const router = Router()

router.get('/comments', new PageCommentController().handle)

router.post('/comment', new createCommentController().handle)

export { router }