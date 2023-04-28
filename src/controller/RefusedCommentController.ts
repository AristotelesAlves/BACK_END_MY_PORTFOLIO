import { Request, Response } from "express";
import { RefusedCommentService } from "../services/RefusedCommentService";

interface IqueryRequest{
    id: string;
}

class RefusedCommentController {
    async handle(req: Request, res: Response){
        const { id } = req.params ;
        const services = new RefusedCommentService();
        const result = await services.execute(id);
        return res.json(result);
    }
}

export { RefusedCommentController }