import { Request, Response } from "express";
import { AuthorizeCommentServices } from "../services/AutorizacaoCommentServices";

class AuthorizeCommentController{
    async handle(req: Request, res: Response){
        const { id } = req.params
        const services = new AuthorizeCommentServices();
        const result = await services.execute(id);
        return res.json(result)
    }
}

export { AuthorizeCommentController }