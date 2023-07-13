import { Request, Response } from "express";
import { createCommentServices } from "../services/createCommentServices";

class createCommentController{
    async handle(req:Request, res: Response){
        const {name, image, star} = req.body
        const services = new createCommentServices();
        const result = await services.execute({name, image,star})
        return res.json(result)
    }
}

export { createCommentController }