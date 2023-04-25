import {Router} from "express";
import { getCommentsController } from "./controller/getCommentController";

const router = Router()

router.get('/comments', new getCommentsController().handle)

export { router }