import {Router} from "express";
import { PageCommentController } from "./controller/PageCommentController";
import { createCommentController } from "./controller/createCommentController";
import { getAllcommentsController } from "./controller/getAllcommentsController";

const router = Router()

router.get('/comments', new PageCommentController().handle)

router.get('/all-comments', new getAllcommentsController().handle)

router.post('/comment', new createCommentController().handle)

export { router }