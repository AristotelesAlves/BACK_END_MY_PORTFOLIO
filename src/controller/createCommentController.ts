import { Request, Response } from "express";
import { createCommentServices } from "../services/createCommentServices";

class createCommentController{
    async handle(Request:Request, Response: Response){
        const {name, message, image} = Request.body
        const services = new createCommentServices();
        const result = services.execute({name, message, image})
        return Response.json(result)
    }
}

export { createCommentController }