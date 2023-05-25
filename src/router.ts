import {Router} from "express";
import { PageCommentController } from "./controller/PageCommentController";
import { createCommentController } from "./controller/createCommentController";
import { getAllcommentsController } from "./controller/getAllcommentsController";
import { RefusedCommentController } from "./controller/RefusedCommentController";
import { AuthorizeCommentController } from "./controller/AuthorizeCommentController";

const router = Router()

router.get('/comments', new PageCommentController().handle)

router.get('/all-comments', new getAllcommentsController().handle)

router.put('/authorize/:id', new AuthorizeCommentController().handle)

router.delete('/refused/:id', new RefusedCommentController().handle)

router.post('/comment', new createCommentController().handle)

export { router }