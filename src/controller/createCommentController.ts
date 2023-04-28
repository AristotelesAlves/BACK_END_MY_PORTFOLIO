import { Request, Response } from "express";
import { createCommentServices } from "../services/createCommentServices";

class createCommentController{
    async handle(req:Request, res: Response){
        const {name, message, image, instagram} = req.body
        const services = new createCommentServices();
        const result = await services.execute({name, message, image, instagram})
        return res.json(result)
    }
}

export { createCommentController }