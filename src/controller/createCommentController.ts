import { Request, Response } from "express";
import { createCommentServices } from "../services/createCommentServices";

class createCommentController{
    async handle(req:Request, res: Response){
        const {name, message, image} = req.body
        const services = new createCommentServices();
        const result = services.execute({name, message, image})
        return res.json(result)
    }
}

export { createCommentController }